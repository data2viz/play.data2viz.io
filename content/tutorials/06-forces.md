# Forces

The force module allows to simulate several forces applied on particles (or nodes).  
This can be useful for displaying networks and hierarchies or add a bit of interaction in your visualizations.

Forces are managed in there own module. You have to import the dependency inside your project 
(`io.data2viz.force`) and in the import directive in your code.

A `ForceSimulation` usually manage several forces that create movement when combined, these are the forces 
that can be applied in your `ForceSimulation`:


|  Forces | Effects |
|---|---|
| **[forceCenter](#centering-force)** | Evenly place nodes around their center of mass |
| **[forceX, forceY,<br/>forcePoint, forceRadial](#positioning-forces)** | Attract nodes around positions or along circles |
| **[forceNBody](#n-body-force)** | Nodes attract or repel each other |
| **[forceCollision](#collision-force)** | Nodes collide with each other |
| **[forceLink](#link-force)** | Link nodes with one another at a specified distance |

## Force simulation

The first thing to use forces, is to create a `ForceSimulation` that will manage the different forces (`Force`) 
and apply them to you nodes (`ForceNode`).  
A force simulation is typed with your domain object `<D>`, it takes a `List<D>` of your objects and creates 
a `List<ForceNode<D>>` of nodes that you can manipulate.

### Creating a simulation

To create a new simulation use the factory `forceSimulation` and the force DSL:

- `forceXXX`: create a force (forceCenter, forceRadial...), add it to the simulation
- `initForceNode`: extension property on `ForceNode`, allows to initialize your nodes
- `domainObjects`: list of objects passed to the simulation, each will create a `ForceNode`

### Access to simulation nodes

The simulation holds a list of `ForceNode<D>` you can retrieve with `simulation.nodes`.  
Each node has the following properties:

- `index`: the zero-based index of this node in the list, _immutable_
- `domain`: the associated domain object of type `D`, _immutable_
- `position`: the current position of the node
- `velocity`: the current movement vector of the node
- `fixedX`, `fixedY`: fix X/Y position of the node to the specified value

### Controlling simulation progress

A simulation progress and inertia is controlled with its inner `intensity` variable, most of the forces 
in the simulation will apply movements according to the current simulation's `intensity`:

- `intensity`: current intensity (starts by default at 100%)
- `intensityTarget`: target intensity (default 0%)
- `intensityDecay`: decay rate of intensity (default 2.28%, ~300 cycles)
- `intensityMin`: simulation stops when reaching min. intensity (default 0.1%)

<div class="note">

All these properties only accepts positive values to avoid divergence.
</div>

### Managing simulation status

As you will generally use animations to display your forces, you need to control the animation status 
alongside the progress of the simulation.  
Simulation launches 2 events:
- `SimulationEvent.TICK` is triggered at each step of the simulation
- `SimulationEvent.END` is triggered at the end of a simulation, whether the intensity is minimal or 
the user has called a `simulation.stop()`.

<div class="warning">

To avoid refreshing a stable view, if you don't have any more updating elements on screen, it is recommended 
to call `stopAnimations()` on your viz object when your simulation stops (check example below).
</div> 

```height=400
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.timer.*
import io.data2viz.force.*
import io.data2viz.viz.*
import io.data2viz.random.*

//sampleStart
data class LayeredPoint(val position:Point, val layer:Int)

fun main() {
    val vizSize = 400.0
    val randPos = RandomDistribution.uniform(.0, vizSize)
    val viewCenter = point(vizSize / 2, vizSize / 2)
    val items = (0..2000).map { LayeredPoint(point(randPos(), randPos()), it%12 ) }

    val simulation = forceSimulation<LayeredPoint> {
        initForceNode = {
            position = domain.position
        }
    
        forceRadial {
            centerGet = { viewCenter }
            radiusGet = { domain.layer * 17.0 }
        }
        domainObjects = items

        intensityDecay = 2.pct
        intensityMin = 30.pct
    }

    val particles = mutableListOf<CircleNode>()
    val viz = viz {
        size = size(vizSize, vizSize)
        simulation.nodes.forEach { forceNode ->
            particles += circle {
                radius = 5.0
                fill = Colors.hsl((forceNode.domain.layer * 30).deg, 100.pct, 50.pct)
            }
        }
        animation {
            simulation.nodes.forEach { forceNode ->
                particles[forceNode.index].apply {
                    x = forceNode.x
                    y = forceNode.y
                }
            }
        }
    }
    simulation.on(SimulationEvent.END, "End of simulation", { viz.stopAnimations() })
    viz.bindRendererOnNewCanvas()
} //sampleEnd
```

## Forces

### Center of mass force

The `ForceCenter` uniformly change the position of nodes around a given `Point`, like a center of mass 
considering each nodes have equal weight.  

As some forces tend to move points around, the `ForceCenter` is very useful to position nodes in the center 
of the view. 

<div class="note">

`ForceCenter` does not change the velocity of nodes nor it is modified by the "intensity" of the 
simulation. It just translates nodes around the desired center of mass on each tick of the simulation.
</div>

```height=600
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.force.*

//sampleStart
data class ColorPoint(val position:Point, val color:Color)

fun main() {
    val vizSize = 600.0
    val viewCenter = point(vizSize / 2, vizSize / 2)

    val items = mutableListOf<ColorPoint>()
    val particles = mutableListOf<CircleNode>()

    val simulation = forceSimulation<ColorPoint> {
        forceCenter {
            center = viewCenter
        }
        initForceNode = {
            position = domain.position
        }
    }

    val viz = viz {
        size = size(vizSize, vizSize)
        animation {
            val itemCount = items.size
            if (itemCount > 1200) stop()

            val angle = (itemCount * 6).deg
            val offset = itemCount * .2

            val position = point(250.0 + angle.cos * offset, 350.0 + angle.sin * offset)
            val color = Colors.hsl(angle, 100.pct, 50.pct)
            val newPoint = ColorPoint(position, color)
            items += newPoint

            // adding a new node and a new visual particle on each animation frame
            particles += circle {
                fill = newPoint.color
                radius = 10.0
            }

            // maintaining simulation active and adding objects
            simulation.apply {
                intensity = 1.pct
                domainObjects = items
            }
            simulation.nodes.forEach { forceNode ->
                particles[forceNode.index].apply {
                    x = forceNode.x
                    y = forceNode.y
                }
            }
        }
    }
    simulation.on(SimulationEvent.END, "End of simulation", { viz.stopAnimations() })
    viz.bindRendererOnNewCanvas()
} //sampleEnd
```

### Positioning forces

There are 4 positioning forces, each one attract nodes:

- `ForcePoint`: towards a given point defined by the `pointGet` lambda
- `ForceX`: towards a x-position defined by the `xGet` lambda
- `ForceY`: towards a y-position defined by the `yGet` lambda
- `ForceRadial`: towards a circle defined by the `centerGet` & `radiusGet` lambdas

<div class="note">

The strength of the force is adjustable for each node using the `strengthGet` lambda, it defaults 
to 10%, indicates that the node should move a tenth of the way from its current position to the target
position with each application.
</div>

```height=200
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.force.*
import io.data2viz.random.*

//sampleStart
data class LayeredPoint(val position:Point, val layer:Int)
fun randPos(a:Double) = RandomDistribution.uniform(.0, a)()

fun main() {
    val vizWidth = 600.0
    val vizHeight = 200.0

    val items = (0..1000).map { LayeredPoint(point(randPos(vizWidth), randPos(vizHeight)), it%12 ) }
    val particles = mutableListOf<CircleNode>()

    val simulation = forceSimulation<LayeredPoint> {
        forceX {
            xGet = { domain.layer * 50.0 }
        }
        initForceNode = {
            position = domain.position
        }
        domainObjects = items
        intensityDecay = 1.pct
        intensityMin = 20.pct
    }

    val viz = viz {
        size = size(vizWidth, vizHeight)
        simulation.nodes.forEach { forceNode ->
            particles += circle {
                radius = 5.0
                fill = Colors.hsl((forceNode.domain.layer * 30).deg, 100.pct, 50.pct)
            }
        }
        animation {
            simulation.nodes.forEach { forceNode ->
                particles[forceNode.index].apply {
                    x = forceNode.x
                    y = forceNode.y
                }
            }
        }
    }
    simulation.on(SimulationEvent.END, "End of simulation", { viz.stopAnimations() })
    viz.bindRendererOnNewCanvas()
} //sampleEnd
```

### N-Body force

The N-Body force (or charge force) applies mutually amongst all nodes. 

It can be used to simulate gravity (attraction) if the strength is positive, or electrostatic charge 
(repulsion) if the strength is negative.  
To define strength on each node, use the `strengthGet` lambda. 

<div class="note">

The `ForceNBody` stores the mininal and maximal distances between 2 nodes for the force to be applied in 
the `distanceMin` and `distanceMax` values.
</div>

```height=600
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.force.*
import io.data2viz.random.*

//sampleStart
data class Charge(val initialPosition:Point, val attractor:Boolean)

val vizSize = 600.0
val randPos = RandomDistribution.uniform(100.0, vizSize - 100.0)

fun main() {
    val items = (0..300).map { Charge(point(randPos(), randPos()), (it % 2) == 0) }
    val particles = mutableListOf<CircleNode>()

    val simulation = forceSimulation<Charge> {
        forceCenter {
            center = point(vizSize / 2, vizSize / 2)
        }
        forceNBody {
            strengthGet = { if (domain.attractor) 30.0 else -50.0 }
            distanceMin = 5.0
        }
        initForceNode = {
            position = domain.initialPosition
        }
        domainObjects = items
        intensityDecay = 1.pct
        intensityMin = 5.pct
    }

    val viz = viz {
        size = size(vizSize, vizSize)
        simulation.nodes.forEach { forceNode ->
            particles += circle {
                radius = 10.0
                fill = if (forceNode.domain.attractor) Colors.Web.crimson else Colors.Web.mediumblue
            }
        }
        animation {
            simulation.nodes.forEach { forceNode ->
                particles[forceNode.index].apply {
                    x = forceNode.x
                    y = forceNode.y
                }
            }
        }
    }
    simulation.on(SimulationEvent.END, "End of simulation", { viz.stopAnimations() })
    viz.bindRendererOnNewCanvas()
} //sampleEnd
```

### Collision force

The collision force `ForceCollision` treats nodes as circles with a given radius, and prevents them from
overlapping.  
More formally, two nodes A and B are separated so that the distance between A and B is at least 
radius(A) + radius(B).
 
Parameters:

- `iterations`: high values increase rigidity and runtime cost (default 1)
- `strength`: change to increase stability, default 70%
- `radiusGet`: apply to each `ForceNode` and defines the radius (default 100)

```height=600
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.force.*
import io.data2viz.random.*

//sampleStart
data class Particle(var initialPosition:Point, val initialSpeed:Vector, var radius:Double)

val vizSize = 600.0
val totalNodes = 200
val particleRadius = RandomDistribution.uniform(5.0, 20.0)
val nodeRadius = 80.0
val randPos = RandomDistribution.uniform(100.0, vizSize - 100.0)
val randomSpeed = RandomDistribution.uniform(-1.0, 1.0)
val randomAngle = RandomDistribution.uniform(.0, 360.0)
val viewCenter = point(vizSize / 2, vizSize / 2)

fun main() {
   val rAngle = randomAngle().deg
   var nodeMovement = Vector(rAngle.cos * 5, rAngle.sin * 5)

   val particleVisuals = mutableListOf<CircleNode>()
   val particles = (0 until totalNodes).map {
       Particle(point(randPos(), randPos()), Vector(randomSpeed(), randomSpeed()), particleRadius())
   }
   particles[0].initialPosition = viewCenter
   particles[0].radius = nodeRadius

   val simulation = forceSimulation<Particle> {
       forceCollision {
           radiusGet = { domain.radius }
           iterations = 3
       }
       initForceNode = {
           position = domain.initialPosition
       }
       domainObjects = particles
   }

   val viz = viz {
       size = size(vizSize, vizSize)
       simulation.nodes.forEach { forceNode ->
           particleVisuals += circle {
               radius = forceNode.domain.radius
               fill = Colors.hsl(randomAngle().deg, 80.pct, 50.pct)
           }
       }
       animation {
           val bigNode = simulation.nodes[0]
           bigNode.x += nodeMovement.vx
           bigNode.y += nodeMovement.vy
           if (bigNode.x < nodeRadius || bigNode.x > (vizSize - nodeRadius)) nodeMovement = Vector(-nodeMovement.vx, nodeMovement.vy)
           if (bigNode.y < nodeRadius || bigNode.y > (vizSize - nodeRadius)) nodeMovement = Vector(nodeMovement.vx, -nodeMovement.vy)
           simulation.nodes.forEach { forceNode ->
               particleVisuals[forceNode.index].apply {
                   x = forceNode.x
                   y = forceNode.y
               }
           }
       }
   }
   simulation.on(SimulationEvent.END, "End of simulation", { viz.stopAnimations() })
   viz.bindRendererOnNewCanvas()
} //sampleEnd
```

### Link force

The link force `ForceLink` pushes linked nodes together or apart according to the desired link distance.  
The strength of the force is proportional to the difference between the linked nodes’ distance 
and the target distance, similar to a spring force.

To apply this force, you have to create links (`Link`) between each linked nodes, you can do so using 
the lambda `linkGet` that applies to a `ForceNode` and returns a `List<Link>`.

Each Link holds the following parameters:

- `source`: the source `ForceNode`
- `target`: the target `ForceNode`
- `distance`: the distance of the link, defaults to 30
- `strength`: the strength of the link, defaults to `Double.NaN`

<div class="note">

Let the `Link`'s strength at its default value `Double.NaN`, to automatically apply a strength inversely 
proportional to the number of nodes linked (more stable network).
</div>

```height=600
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.force.*
import io.data2viz.random.*

//sampleStart
data class Stitch(var row:Int, var column:Int)

val vizSize = 600.0
val viewCenter = point(vizSize / 2, vizSize / 2)

val networkSize = 20
val totalNodes = networkSize * networkSize
val linksDistance = 5.0

fun main() {

    val particleVisuals = mutableListOf<CircleNode>()
    val linkVisuals = mutableListOf<LineNode>()
    val particles = (0 until totalNodes).map { Stitch(it % networkSize, it / networkSize) }

    lateinit var constraintForce:ForceLink<Stitch>

    val simulation = forceSimulation<Stitch> {
        forceCenter {
            center = viewCenter
        }
        forceNBody {
            // each ForceNode will repel each other ForceNode
            strengthGet = { -15.0 }
        }
        constraintForce = forceLink {
            // link this ForceNode to other ForceNodes on the next row & column (if available)
            linkGet = {
                val links = mutableListOf<Link<Stitch>>()
                if (domain.row < networkSize - 1) links.add(Link(this, nodes[index + 1], linksDistance))
                if (domain.column < networkSize - 1) links.add(Link(this, nodes[index + networkSize], linksDistance))
                links
            }
            iterations = 9
        }
        domainObjects = particles
        intensityDecay = 0.5.pct
        intensityMin = 40.pct
    }

    val viz = viz {
        size = size(vizSize, vizSize)
        constraintForce.links.forEach {
            linkVisuals += line {
                stroke = Colors.Web.lightslategrey
            }
        }
        simulation.nodes.forEach {
            particleVisuals += circle {
                radius = 3.0
                fill = Colors.Web.crimson
            }
        }

        animation {
            simulation.nodes.forEach { forceNode ->
                particleVisuals[forceNode.index].apply {
                    x = forceNode.x
                    y = forceNode.y
                }
            }
            constraintForce.links.forEachIndexed { index, link ->
                linkVisuals[index].apply {
                    x1 = link.source.x
                    x2 = link.target.x
                    y1 = link.source.y
                    y2 = link.target.y
                }
            }
        }
    }
    simulation.on(SimulationEvent.END, "End of simulation", { viz.stopAnimations() })
    viz.bindRendererOnNewCanvas()
} //sampleEnd
```
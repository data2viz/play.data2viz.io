# Forces

The force module allows to simulate several forces applied on particles (or nodes).  
This can be useful for displaying networks and hierarchies or add a bit of interaction in your visuals.

Forces are managed in there own module. You have to import the dependency inside your project 
(`io.data2viz.force`) and in the import directive in your code.

A `ForceSimulation` usually manage several forces that create movement when combined, these are the forces 
that can be applied to the nodes:


|  Forces | Effects |
|---|---|
| **[forceCenter](#center-of-mass-force)** | Equally place nodes around a point, useful for centering view |
| **[forceX, forceY](#positioning-forces)** | Attract nodes to specific positions |
| **[forceRadial](#radial-force)**| Place nodes along a circle |
| **[forceNBody](#n-body-force)** | Nodes attract or repel each other |
| **[forceCollision](#collision-force)** | Nodes collide with each other |
| **[forceLink](#link-force)** | Link nodes with one another at a specified distance |

## Force simulation

The first thing to use forces, is to create a `ForceSimulation` that will manage the different forces (`Force`) 
and apply them to you nodes (`ForceNode`).

To create a new simulation use the factory `forceSimulation` and set at least these 2 parameters:

- `nodes`: set a list of elements as `ForceNode` to the simulation
- `addForce()`: add a `Force` to the simulation

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.timer.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val timer = timer()
    viz {
        rect {
            size = Size(50.0, 50.0)
            fill = Colors.Web.blueviolet
        }

    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```





Another usual option to create a color is through its **hexadecimal** code. You have
2 extension vals to help you create a color from Int and String.

```height=600
import io.data2viz.color.*
import io.data2viz.force.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.random.*
import io.data2viz.scale.*
import io.data2viz.viz.*

fun main() {
    val circleList = mutableListOf<CircleNode>()
    val fnodes = (0 .. 10).map { ForceNode(it, random() * 748, random() * 600) }
    val vizCenter = Point(350.0, 300.0)
    val force = ForceRadial().apply {
        radius = { _, _, _ -> 100.0}
        center = { _, _, _ -> vizCenter }
    }
    val sim = forceSimulation {
        alphaDecay = 0.01
        addForce("forceCenter", force)
        on(SimulationEvent.TICK, "refresh", { moveCircles(this, circleList) })
        on(SimulationEvent.END, "end",  { endCircles(this, circleList) })
        nodes = fnodes
    }
    
    viz {
        size = Size(748.0, 600.0)
       	(0 .. 10).forEach {
            circleList.add(circle {
                x = fnodes[it].x
                y = fnodes[it].y
                radius = 10.0
                fill = Colors.Web.blue
            })
        }
        /*onFrame {
            sim.tick()
        }*/
    }.bindRendererOnNewCanvas()
}

private fun moveCircles(sim:ForceSimulation, circleList:List<CircleNode>):Unit {
    circleList.forEachIndexed { index, circle ->
        circle.apply {
            x = sim.nodes[index].x
            y = sim.nodes[index].y
        }
    }
}

private fun endCircles(sim:ForceSimulation, circleList:List<CircleNode>):Unit {
    circleList.forEach {
        it.apply {
            fill = Colors.Web.red
        }
    }
}
```

## Center of mass force

The `ForceCenter` force uniformly change the position of nodes around a given `Point` like a center of mass 
considering each nodes have equal weight.  

As some forces tend to move points around, the `ForceCenter` is very useful to position nodes in the center 
of the view. 

<div class="note">

Note that this force does not change the velocity of your nodes nor it is modified by the "alpha" of the 
simulation.  
It justs translate nodes around the desired center of mass on each tick of the simulation.
</div>

```height=600
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.force.*
import kotlin.math.*

fun main() {
    //sampleStart
    val vizSize = 600.0
    val particles = mutableListOf<CircleNode>()
    val forceNodes = mutableListOf<ForceNode>()
    val forceCenter = forceCenter(Point(vizSize / 2, vizSize / 2))
    val simulation = forceSimulation(forceNodes) {
        addForce("center", forceCenter)
    }
    var numNodes = 0
    
    viz {
        size = size(vizSize, vizSize)
        animation {
            numNodes += 1
            if (numNodes > 1200) stop()
    
            // adding a new node and a new visual particle on each animation frame
            val angle = (numNodes * 6).deg
            val offset = numNodes * .2
            forceNodes += ForceNode(numNodes, 250.0 + angle.cos * offset, 350.0 + angle.sin * offset)
            particles += circle {
                fill = Colors.hsl(angle, 100.pct, 50.pct)
                radius = 10.0
            }
    
            // updating simulation then placing particles on screen
            simulation.apply {
                nodes = forceNodes
                alpha = .1
            }
            forceNodes.forEach { node ->
                particles[node.index].x = node.x
                particles[node.index].y = node.y
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

## Positioning forces

## Radial force

## N-Body force

## Collision force

## Link force
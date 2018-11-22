# Forces

The force module allows to simulate several forces applied on particues.  
This can be useful for displaying networks and hierarchies or add a bit of interaction in your visuals.

Forces are managed in there own module. You have to import the dependency inside your project 
(`io.data2viz.force`) and in the import directive in your code.


## Force simulation

The first thing to use forces, is to create a `ForceSimulation` that will manage the different forces (`Force`) 
and apply them to you particles (`ForceNode`).

To create a new simulation use the factory `forceSimulation` and set at least these 2 parameters:

- `addForce()`: add a `Force` to the simulation
- `nodes`: set a list of elements as `ForceNode` to the simulation

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

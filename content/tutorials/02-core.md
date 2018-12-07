# Core mechanisms

All visuals done with data2viz share some simple elements, this page describes the "basics" of the
library.



## Utility types

Drawing an arc on *Javascript* requires radians, but degrees on *Android*...
To avoid confusion and guarantee a unique behavior on different platform data2viz offers some
"utility types" that can be easily instantiated with extension properties:

- `Angle`: create an Angle using `180.deg` or `PI.rad`
- `Percent`: create a percentage using `50.pct`

<div class="note">

these utility types are located in `io.data2viz.math` so a good start is always to import this package using
a wildcard.
</div>

 <!--- TODO add rotating rect rotate(angle) when available  -->

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.viz.*
//sampleStart
import io.data2viz.math.*                                   // access to Percent

fun main() {
    viz {
        rect {
            fill = Colors.Web.crimson.withAlpha(50.pct)     // fill with 50% alpha
            size = size(50, 50)
        }
    }.bindRendererOnNewCanvas()
} //sampleEnd
```

## Common types

In order to make the code more concise, several types are used as parameters:
- `Point`, `Vector`: for positioning
- `Size`: for sizing
- `Extent`: for defining a zone

<div class="note">

These types are located in `io.data2viz.geom` so we strongly recommend to star-import this package and to
use the factories which are a bit more practical.
</div>

```height=50
import io.data2viz.color.*
import io.data2viz.math.*
import io.data2viz.viz.*
//sampleStart
import io.data2viz.geom.*                // gives access to size, point...

fun main() {
    viz {
        rect {
            size = size(100, 50)         // rectangle is 100x50
            fill = Colors.Web.crimson
        }
    }.bindRendererOnNewCanvas()
} //sampleEnd
```

## Main visual

As seen before, your visualization will be described using the `viz` keyword and DSL.
Although the code in `viz` seems like declarative code, you're in a standard Kotlin function so you can use
any of the language features.

You'll learn how to be effective fast, but these are some basic tips to help you start:

- keep some references on your visual objects
- use `group` to group visuals and manipulate them easily
- use inheritance of styles
- use loops and lists to manage several items

```height=400 width=400
import io.data2viz.color.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.geom.*

//sampleStart
fun main() {

    val positions = (0 until 100).map { point(it%10, it/10) }
    val visuals = mutableListOf<GroupNode>()

    val myViz = viz {
        size = size(400, 400)

        // use a loop to create a visual for each "position"
        positions.forEach { position ->

            // add the newly created group in our list and in the viz
            visuals += group {
                transform {
                    translate(position.x * 40, 10.0 + position.y * 40)
                }

                // use style inheritance to share styles within the group
                fill = Colors.Web.blueviolet
                stroke = Colors.Web.black

                rect {
                    size = size(20, 20)
                }
                circle {
                    // position is relative to the group position
                    x = 20.0
                    radius = 10.0
                }
            }
        }
    }
    // change a specific group properties
    visuals[68].fill = Colors.Web.crimson

    myViz.bindRendererOnNewCanvas()
} //sampleEnd
```


## Animation

To animate and time your visualizations you can use the `animation` lambda in your `viz` element.  
This creates a new `Timer` that execute your inner code block on each frame.

<div class="warning">

You can stop a `Timer` by using the `stop()` function, this will not stop the rendering of each frame.  
If animations are no more needed call `stopAnimations()` on your `viz` element.
</div>

```height=300 width=300
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import kotlin.math.*

//sampleStart
fun main() {
    viz {
        size = size(300, 300)
		var counter = .0
        var increment = .03
        
        val colors = listOf(
        	Colors.Web.greenyellow,
            Colors.Web.blueviolet,
            Colors.Web.crimson
        )
        
        // creating 3 moiré patterns
        val moires = (0 .. 2).map { index ->
            group {
                strokeWidth = 5.0
                stroke = colors[index]
                transform { translate(150.0, 150.0) }
                (0..15).forEach { circle { radius = it * 8.0 } }
            }
        }
        
        animation {
            counter += increment
            if (counter > 20) increment = -increment
            
            // this will stop ALL animation timers and further rendering
            if (counter < -20) stopAnimations()
            
            // moving moiré patterns 1 & 2
            val pos1 = 150.0 + counter * cos(counter)
            val pos2 = 150.0 + counter * sin(counter)
            moires[1].transform {
                translate(pos1, pos2)
            }
            moires[2].transform {
                translate(pos2, pos1)
            }
        }
    }.bindRendererOnNewCanvas()
} //sampleEnd
```
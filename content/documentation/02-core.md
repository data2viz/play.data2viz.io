# Core mechanisms

All visualizations done with data2viz share some simple elements, this page describes the "basics" of the 
library.

## The Viz object

Data2viz provides a comprehensive DSL to build visuals by assembling basic elements (rectangles, circles...).  
The first of your elements will be the "Viz" object that you can instantiate using the `viz` factory.

Just type `viz`, open some curly braces and you'll have access to several elements you can start to add 
on your page, just use the auto-completion to find out more!

<div class="info">

As data2viz is multiplatform, you need to precise how you'll display your visualization.  
`Viz.bindRendererOnNewCanvas()` for example, is a javascript-specific extension function to render your viz 
in a web canvas.
</div>

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
//sampleStart
import io.data2viz.viz.*                                // this import is mandatory

fun main() {
    viz {                                               // creating a "root" node
        size = Size(200.0, 50.0)				        // sizing our viz
        rect {                                          // adding a rectangle to our viz
            size = Size(50.0, 50.0)
            fill = Colors.Web.crimson
        }
    }.bindRendererOnNewCanvas()                         // binding the viz to our canvas (javascript)
} //sampleEnd
```
 

## Utility types

Drawing an arc on *Javascript* requires radians, but degrees on *Android*... to avoid confusion and guarantee a 
unique behavior on different platform ***data2viz*** offers some "utility types" that can be easily instantiated 
with extension properties: 

- `Angle`: create an Angle using *180.deg* or *PI.rad*
- `Percent`: create a percentage with *50.pct*

<div class="info">

these utility types are located in `io.data2viz.math` so a good start is always to import this package using
a wildcard.
</div>

 <!--- TODO simplify by removing group (just rotating the rect) when available  -->

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.viz.*
//sampleStart
import io.data2viz.math.*                                       // gives you access to Percent and Angle

fun main() {
    viz {
        group {
            transform {
                rotate(45.deg)                                  // rotate the group by 45°
            }
            rect {
                size = Size(50.0, 50.0)
                fill = Colors.Web.crimson.withAlpha(50.pct)     // fill color is "crimson", 50% alpha
            }
        }
    }.bindRendererOnNewCanvas()
} //sampleEnd
```

## Common types

In order to make the code more concise, several types are used for positioning (`Point`, `Vector`...), 
sizing (`Size`) or defining a zone (`Extent`).

<div class="info">

these types are located in `io.data2viz.geom` so we strongly recommend to star-import this package.
</div>

```height=50
import io.data2viz.color.*
import io.data2viz.math.*
import io.data2viz.viz.*
//sampleStart
import io.data2viz.geom.*                               // gives you access to Size, Point...

fun main() {
    viz {
        rect {
            size = Size(100.0, 50.0)                    // rectangle has a width of 100, a height of 50
            fill = Colors.Web.crimson
        }
    }.bindRendererOnNewCanvas()
} //sampleEnd
```

# Core mechanisms

All visuals done with data2viz share some simple elements, this page describes the "basics" of the
library.

## The Viz object

Data2viz provides a comprehensive DSL to build visualizations by assembling basic elements (rectangles, circles...).
The first of your elements will be the "Viz" object that you can instantiate using the `viz` factory.

Just type `viz`, open some curly braces and you'll have access to several elements you can start to add,
use auto-completion (*CTRL+space*) to find out more!

<div class="note">

As data2viz is multiplatform, you need to precise how you'll display your visualization.
`Viz.bindRendererOnNewCanvas()` for example, is a javascript-specific extension function to render your viz
in a web canvas.
</div>

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
//sampleStart
import io.data2viz.viz.*                     // this import is mandatory

fun main() {
    viz {                                    // creating a "root" node
        size = size(200, 50)				 // sizing our viz
        rect {                               // adding a rectangle to our viz
            size = size(50, 50)
            fill = Colors.Web.crimson
        }
    }.bindRendererOnNewCanvas()              // binding the viz to our canvas (JS)
} //sampleEnd
```


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

 <!--- TODO simplify by removing group (just rotating the rect) when available  -->

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.viz.*
//sampleStart
import io.data2viz.math.*                                   // access to Percent

fun main() {
    viz {
        rect {
            size = size(50, 50)
            fill = Colors.Web.crimson.withAlpha(50.pct)     // fill with 50% alpha
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

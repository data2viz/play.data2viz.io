# Let's start

This is the simplest viz you can make. 13 lines with imports to draw a rectangle.

But you'll see that we can go far beyond that first example.


```height=50
import io.data2viz.color.*						// 1
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {									// 2
    viz {										// 3
        size = Size(200.0, 50.0)				// 4
        rect {									// 5
            size = Size(50.0, 50.0)
            fill = Colors.Web.blueviolet
        }
    }.bindRendererOnNewCanvas()					// 6
}
```

 1. In ***data2viz*** projects, it is usually a good practise to do **star imports** even
when there is less than 5 imported elements in the package. It gives easy access to extension
functions, particularly during code completion.

 2. With kotlin 1.3, it's possible to omit args parameters in the `main` function.

 3. The root of a visualization is an instance of **`Viz`**. A builder DSL facilitates
 its configuration. It starts with the `viz` call that takes a lambda (with receiver).

 4. A visualization has width and height properties. They can be accessed using the
property `size`.

 5. Visual nodes are created through DSL functions  taking a lambdas with receiver for
 the configuration. In this example, the code is creating a rectangle, defining its size
and fill color.

 6. `bindRendererOnNewCanvas()` is an extension function on a `Viz` class that
 is only available on *JS* platform. It's a shortcut to create a new canvas
 based on the visualization and bind the renderer on it.

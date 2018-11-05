# Let's start

This is the simplest viz you can make. 13 lines with imports to draw a rectangle. 

But you'll see that we can go far beyond that first example.


```height=50
import io.data2viz.color.*						// <- (1) star imports
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {									// <- (2) simplified main
    viz {										// <- (3) create and configure a viz
        size = Size(200.0, 50.0)				// <- (4) set width and height through size
        rect {									// <- (5) add and configure a rectangle
            size = Size(50.0, 50.0)
            fill = Colors.Web.blueviolet
        }
    }.bindRendererOnNewCanvas()					// <- (6) extension function on Viz
}
```

**(1).** In *data2viz* projects, it is usually a good practise to do star **imports** even
when there is less than 5 imported elements in the package. It allows to benefit from extension
functions that are commonly used in *data2viz*.

**(2).** As we use kotlin 1.3, the `main` function can avoid the args parameters.

**(3).** All visualizations take place in an instance of **`Viz`**. You can create and
configure it with a builder DSL.It starts with the `viz` call that takes a lambda (with receiver).

**(4).** A visualization has width and a height properties. They can be accessed using the 
property `size`.

**(5).** The creation of visual nodes is done with their specific creation function, also taking
a lambda with receiver, to configure them. Here we're creating a rectangle, defining its size
and fill color.  

**(6).** The last specific call to notice in this example is `bindRendererOnNewCanvas()`. It's an 
extension function on a `Viz` object that is only existing on *JS* platform. 
It is a shortcut to create a new canvas based on the visualization size and
bind the renderer on it.

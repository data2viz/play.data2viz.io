# Let's start

This is the simplest viz you can make. 13 lines with imports to draw a rectangle. 

But you'll see that we can go far beyond that first example.


```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    viz {
        size = Size(200.0, 50.0)
        rect {
            size = Size(50.0, 50.0)
            fill = Colors.Web.blueviolet
        }
    }.bindRendererOnNewCanvas()
}
```

In *data2viz* projects, it is usually a good practise to do star **imports** even
when there is less than 5 imported elements in the package. It allows to benefit from extension
functions that are commonly used in *data2viz*.

As we use kotlin 1.3, the `main` function can avoid the args parameters.

All visualizations take place in a Viz object. To simplify its creation 
and building, we provide a builder DSL.

It's start with the `viz` call that takes a lambda (with receiver) to build
it. 

A visualization has a width and a height. They can be accessed using the 
property `size`.

The creation of visual nodes is done with their specific creation function, also taking
a lambda with receiver to configure them. Here we're creating a rectangle, defining its size
and its fill color.  


The last specific call to notice in this example is `bindRendererOnNewCanvas()`. It's an 
extension function on a `Viz` object that is only existing on *JS* platform. 
It is a shortcut to create a new canvas based on the visualization size and
bind the renderer on it.

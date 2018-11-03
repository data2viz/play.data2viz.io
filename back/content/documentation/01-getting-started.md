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

Some explanations on this code because will then don't show it all by default.

In _data2viz_ projects, it is usually a good practise to do star **imports** even
when there is less than 5 imported elements. It allows to benefit from extension
functions that are commonly used in *data2viz*.

As we use kotlin 1.3, we can omit the arguments for the main function.

All visualizations take place in a Viz object. To simplify its creation 
and building, we provide a builder style DSL.

It's start with the `viz` call that takes a lambda (with receiver) to build
it. The block code is able to call the existing functions of the current
visualization.

A visualization has a width and a height. They can be accessed using the 
property `size`.

We then create a rectangle by using the `rect` function with its own initialization
lambda.

The last specific call to notice is `bindRendererOnNewCanvas()`. It's an 
extension function on a `Viz` object that is only existing on *JS* platform. 
It is a shortcut to create a new canvas based on the visualization size and
bind the renderer on it.

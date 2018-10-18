# Let's start

This is the simplest viz you can make. 14 lines with imports to draw a rectangle. 

But you'll see that we can go far beyond that first example.


```kotlin

import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        width = 200.0
        height = 200.0
        rect {
            width = 50.0
            height = 50.0
            style.fill = colors.blueviolet
        }                
    }.bindRendererOnNewCanvas()
}

```
# Scales

Scales allow you to map your data to a visual representation: dimension, color... 

The scale transforms your input, which is called the **domain**, to an output called the **range**.

There are several types of scales, depending you work with discrete or continuous domain and range:

| Domain |  Range |  Scale |
|:---:|:---:|:---:|
| Continuous | Continuous  |  Continuous |
|  Discrete |  Continuous | Band |
| Continuous  | Discrete  |  Quantize |
| Discrete  | Discrete  |  Ordinal |


## Scale creation



```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    viz {
        rect {
            size = Size(50.0, 50.0)
            fill = Colors.Web.blueviolet
        }

    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

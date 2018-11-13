# Scales

Scales allow you to map your data to a visual representation: dimension, color... 

The scale transforms your input, which is called the **domain**, to an output called the **range**.

There are several types of scales, depending you work with discrete or continuous domain and range:

| Domain |  Range |  Scales | Example of use |
|:---:|:---:|:---:|:---:|
| Continuous | Continuous  |  Linear, Log, Time... | Place points on a line chart |
| Continuous  | Discrete  |  Quantize | Create a non-linear color scale for a [chloropeth map](https://en.wikipedia.org/wiki/Choropleth_map) |
| Discrete  | Discrete  |  Point, Band | Place bars on a column chart |


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

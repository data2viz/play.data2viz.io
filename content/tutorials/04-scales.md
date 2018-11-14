# Scales

Scales allow you to map your data to a visual representation: dimension, color... 

The scale transforms your input, which is called the **domain**, to an output called the **range**.

There are several types of scales, depending you work with discrete or continuous domain and range:

| Domain |  Range |  Scales | Example of use |
|:---:|:---:|:---:|:---:|
| Continuous | Continuous  | **[Continuous](#continuous-scales)**: Linear, Log, Time... | Place points on a line chart |
| Discrete  | Discrete  |  **[Ordinal](#ordinal-scales)**: Point, Band | Place bars on a column chart |
| Continuous  | Discrete  |  **[Other](#other-scales)**: Quantize, Threshold, Quantile | Create a non-linear color scale for a [chloropeth map](https://en.wikipedia.org/wiki/Choropleth_map) |

## Continuous scales

Continuous scales map a continuous, quantitative input domain to a continuous output range.

A continuous scale is not constructed directly; instead, try a [linear](#linear-color-scales), 
[color](#linear-color-scales),
[power](#power-and-log-scales), 
[log](#power-and-log-scales), 
or [time](#time-scales) scale.

### Linear numeric scales

Linear scale is the standard continuous scale, it maps a continuous domain to a continuous range. 

It is used everywhere: place or size visual elements on screen, tint an object with a color corresponding to a value 
or simply use in code to do some easy values interpolation.

To create a linear scale, use the `Scales.Continuous.linear` function.

- `domain`: a **list of Double** values for each piece of the domain
- `range`: a **list of objects** of the same size as domain, giving the bounds of the range
- `clamp`: do values outside of the domain should be clamped? (default to `false`)

*Note: you can use `Scales.Continuous.linearRound` to get rounded scaled values.*

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val scale = scales.continuous.linear {
        domain = listOf(.0, 10.0)
        range = listOf(.0, 600.0)
    }
    viz {
        size = Size(800.0, 50.0)
        (0..10).forEach { 
            rect {
                x = scale(it.toDouble())
                size = Size(50.0, 50.0)
                stroke = Colors.Web.black
                fill = "#33A7D8".color
            }
            text {
                x = 25 + scale(it.toDouble())
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "$it"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

### Linear color scales

The scale needs an color **interpolator**. You can use pre-parameterized color scales  
with the factories in `Scales.Continuous.Colors.*`:

- `defaultRGB`: standard RGB interpolator
- `linearRGB`: L-RGB interpolator (produce better intermediate colors)
- `linearLAB`: linear interpolator in LAB color space
- `linearHSL`: linear interpolator in HSL
- `linearHCL`: linear interpolator in HCL

*Note: these color scales clamp values outside the range.*

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val scale = scales.colors.linearHCL {
        domain = listOf(0.0, 40.0)
        range = listOf("#33AA99".color, "#FECE3E".color)
    }
    viz {
        size = Size(800.0, 50.0)
        (0..40).forEach { 
            rect {
                x = it * 17.0
                size = Size(16.0, 50.0)
                fill = scale(it.toDouble())
            }
            text {
                x = 8 + it * 17.0
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "$it"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

### Power and Log scales

**Power scales** are linear scales with an exponential transforms applied to the input, the **exponent** is defined
when creating the scale (defaults to 1).

**Log scales** are linear scales with a logarithmic transforms applied to the input. The logarithm **base** 
is set when creating the scale (defaults to 10).

*Note : As log(0) = -∞, a log scale domain must be strictly-positive or strictly-negative.*

To create these scales, use the `Scales.Continuous.pow` and `Scales.Continuous.log` functions.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val scale = scales.continuous.log {
        domain = listOf(1.0, 10.0)
        range = listOf(.0, 600.0)
    }
    viz {
        size = Size(800.0, 50.0)
        (1..10).forEach { 
            rect {
                x = scale(it.toDouble())
                size = Size(50.0, 50.0)
                stroke = Colors.Web.black
                fill = "#33A7D8".color
            }
            text {
                x = 25 + scale(it.toDouble())
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "$it"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

### Time scales

Time scales are a variant of linear scales that have a temporal domain: domain values are coerced to dates rather 
than numbers, and invert likewise returns a date.

To create a time scale, use the `Scales.Continuous.time` function.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.time.*

fun main() {
    //sampleStart
    val events = listOf(
        Pair("New Year 2018", date(2018, 1, 1)), 
        Pair("Jim's birthday", date(2018, 2, 16)), 
        Pair("Spring", date(2018, 3, 20)), 
        Pair("Summer", date(2018, 6, 21)), 
        Pair("Mike's birthday", date(2018, 8, 12)), 
        Pair("Automn", date(2018, 9, 23)),
        Pair("Sam's birthday", date(2018, 11, 8)),
        Pair("New year's eve", date(2018, 12, 31))
    )
    
    // scale translates dates to double for positionning events
    val scale = scales.continuous.time {
        domain = listOf(date(2018, 1, 1), date(2019, 1, 1))
        range = listOf(50.0, 650.0)
    }
    viz {
        size = Size(800.0, 50.0)
        events.forEach { 
            line {
                x1 = scale(it.second)
                y1 = 20.0
                x2 = scale(it.second)
                y2 = 40.0
                stroke = Colors.Web.black
            }
            text {
                x = scale(it.second)
                y = 10.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "${it.first}"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

## Ordinal scales

Ordinal scales (or category scales) map a discrete domain to a discrete range. An ordinal scale might map a set 
of objects to a set of colors, or to the horizontal positions of columns in a column chart.

You can find factories for creating ordinal scale in `Scales.Ordinal.*` object.

<!--- TODO note on "implicit domain" --->

*Note: domain objects will be mapped to range objects in the specified order, if there is more objects in domain than 
range, the scale will reuse objects from the start of the range.*
                                                          
### Ordinal color scales

These scales are meant to map colors to different categories.
 
To mark the difference between comparable objects (where we would use gradients of colors) these scales propose 
some color schemes with very distinct colors.

To create a category color scale, use some of the functions in `Scales.Ordinal.*`.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // scale category20 provides a set of 20 very distinct colors
    val scale = scales.colors.category20<Int> { domain = (0 until 20).toList() }
    viz {
        size = Size(800.0, 50.0)
        scale.domain.forEach { 
            rect {
                x = it * 31.0
                size = Size(30.0, 50.0)
                fill = scale(it)
            }
            text {
                x = 15 + it * 31.0
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "$it"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

## Other scales

### Quantize scales

Quantize scales are similar to linear scales, except they use a discrete rather than continuous range. 

The continuous input domain is divided into uniform segments based on the number of values in (i.e., the 
cardinality of) the output range.

*Note: there is no value clamping so the segments may not be "uniform" as the first one accepts values down to -∞ 
and the last one values up to +∞*

To create a quantile scale, use the `Scales.Continuous.quantize` function.

- `domain`: a `StrictlyContinuous` object with Double start value and end value 
- `range`: given a **list of objects** of size X, the range will be divided into X groups

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
    
    // scale divides the domain [0,9] into 3 segments: [-∞,3[ [3,6[ [6,+∞]
    val scale = scales.quantize<Color> {
        domain = StrictlyContinuous(0.0, 9.0)
        range = listOf("#E966AC".color, "#33A7D8".color, "#FECE3E".color)
    }
    viz {
        size = Size(800.0, 50.0)
        someValues.forEachIndexed { index, domainValue ->
            rect {
                x = index * 55.0
                size = Size(50.0, 50.0)
                fill = scale(domainValue)
            }
            text {
                x = 25 + index * 55.0
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "$domainValue"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

### Threshold scales

A threshold scale is similar to a quantize scale, except that you define the subsets, they are not automatically 
computed by dividing the domain by the size of the range list.

To create a threshold scale, use the `Scales.Continuous.threshold` function.

- `domain`: a **list of Double** for defining the thresholds of the scale
- `range`: a **list of objects**. It's size must be domain.size + 1

Let's have a look at the same example as before but with different thresholds:

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
    
    // scale divides the domain based on thresholds: [-∞,1[ [1,8[ [8,+∞]
    val scale = scales.threshold<Color> {
        domain = listOf(1.0, 8.0)
        range = listOf("#E966AC".color, "#33A7D8".color, "#FECE3E".color)
    }
    viz {
        size = Size(800.0, 50.0)
        someValues.forEachIndexed { index, domainValue ->
            rect {
                x = index * 55.0
                size = Size(50.0, 50.0)
                fill = scale(domainValue)
            }
            text {
                x = 25 + index * 55.0
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "$domainValue"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

### Quantile scales

A quantile scale use [quantile distribution](https://en.wikipedia.org/wiki/Quantile) to divide your domain objects 
into your range. As quantile distribution implies, objects should be distributed equally (in term of cardinality) 
between the range groups.

To create a quantile scale, use the `Scales.Continuous.quantile` function.

- `domain`: however given as a **list of Double**, domain is considered continuous
- `range`: given as a **list of objects**, the size of the list determine the scale size (4: quartiles...)

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
    
    // scale divides into 3-quantiles for even distribution [-∞,1.83[ [1.83,6.33[ [6.33,+∞]
    val scale = scales.quantile<Color> {
        domain = someValues
        range = listOf("#E966AC".color, "#33A7D8".color, "#FECE3E".color)
    }
    viz {
        size = Size(800.0, 50.0)
        someValues.forEachIndexed { index, domainValue ->
            rect {
                x = index * 55.0
                size = Size(50.0, 50.0)
                fill = scale(domainValue)
            }
            text {
                x = 25 + index * 55.0
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "$domainValue"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

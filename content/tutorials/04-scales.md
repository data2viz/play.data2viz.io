# Scales

Scales allow you to map your data to a visual representation: dimension, color... 

<div class="note">

The scale transforms your input, which is called the **domain**, to an output called the **range**.
</div>

There are several types of scales, depending you work with discrete or continuous domain and range:

| Domain |  Range |  Factories | Example of use |
|---|---|---|---|
| Continuous | Continuous  | **[Scales.Continuous.*](#continuous-scales)**<br/>*linear, log, pow, time...* | Place points on a line chart |
| Continuous  | Discrete  |  **[Scales.Quantized.*](#quantized-scales)**<br/>*quantize, threshold, quantile* | Distribute objects in quantiles |
| Discrete  | Discrete  |  **[Scales.Discrete.*](#discrete-scales)**<br/>*ordinal, point, band* | Place bars on a column chart |

<div class="note">

Scales are managed in there own module. You have to import the dependency inside your project 
(`io.data2viz.scale`) and in the import directive in your code.
</div>

For color scales, check the [Chromatic scales](/tutorial/chromatic-scales) page which details 
pre-configured scales with nice color themes.

## Continuous scales

Continuous scales map a continuous, quantitative input domain to a continuous output range.

A continuous scale is not constructed directly; instead, try a [linear](#linear-scale), 
[power](#power-and-log-scales), 
[log](#power-and-log-scales), 
or [time](#time-scale) scale.

Continuous scales factories are located in `Scales.Continuous.*`.  
The scale parameters are:

- `domain`: a **list of objects** (generally 2) for each "subset" of the domain
- `range`: a **list of objects** of the same size as domain, giving the bounds of the range

### Linear scale

Linear scale is the standard continuous scale, it maps a continuous domain to a continuous range.  
It is used everywhere: to place or size visual elements on screen, to tint an object with a color corresponding 
to a value or simply use in code to do some easy values interpolation.

To create a linear scale, use the `Scales.Continuous.linear` function.

<div class="note">

You can use `Scales.Continuous.linearRound` to get rounded scaled values.
</div>

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // this scale maps 2 domain subsets
    // first domain [0,100] to range [0,300], then domain [100,400] to range [300,600]
    val scale = scales.continuous.linear {
         domain = listOf(.0, 100.0, 400.0)
         range = listOf(.0, 300.0, 600.0)
    }
    viz {
         size = Size(800.0, 50.0)
         var count = .0
         val myRect = rect {
             size = Size(50.0, 50.0)
             fill = "#33A7D8".color
         }
         val myText = text {
             y = 25.0
             fill = Colors.Web.black
             baseline = TextAlignmentBaseline.MIDDLE
             anchor = TextAnchor.MIDDLE
         }
         onFrame {
             count = (count + 1) % 300
             myRect.x = scale(count)
             myText.x = 25 + scale(count)
             myText.textContent = "$count"
         }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Power and Log scales

**Power scale** are linear scales with an exponential transforms applied to the input, the **exponent** is defined
when creating the scale (defaults to 1).

**Log scale** are linear scales with a logarithmic transforms applied to the input. The logarithm **base** 
is set when creating the scale (defaults to 10).

<div class="warning">

As log(0) = -∞, a log scale domain must be strictly-positive or strictly-negative.
</div>

To create these scales, use the `Scales.Continuous.pow` and `Scales.Continuous.log` functions.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val myDomain = listOf(1.0, 400.0)
    val myRange = listOf(.0, 600.0)
    val logScale = scales.continuous.log { domain = myDomain; range = myRange }
    val powScale = scales.continuous.pow(10.0) { domain = myDomain; range = myRange }
    viz {
        size = Size(800.0, 50.0)
        var count = 1.0
        val logRect = rect {
            size = Size(50.0, 25.0)
            fill = "#33A7D8".color
        }
        val logText = text {
            y = 12.0
            fill = Colors.Web.black
            baseline = TextAlignmentBaseline.MIDDLE
            anchor = TextAnchor.MIDDLE
        }
        val powRect = rect {
            size = Size(50.0, 25.0)
            y = 25.0
            fill = "#FECE3E".color
        }
        val powText = text {
            y = 37.0
            fill = Colors.Web.black
            baseline = TextAlignmentBaseline.MIDDLE
            anchor = TextAnchor.MIDDLE
        }
        onFrame {
            count++
            if (count > 400) count = 1.0
            logRect.x = logScale(count)
            logText.x = 25 + logScale(count)
            logText.textContent = "$count"
            powRect.x = powScale(count)
            powText.x = 25 + powScale(count)
            powText.textContent = "$count"
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Time scale

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

## Quantized scales

Quantized scales map a domain considered as continuous to a discrete range.  
These scales are often used with colors to display information in a non-linear way like for example 
in a [chloropeth map](https://en.wikipedia.org/wiki/Choropleth_map).

Quantized scales factories are located in `Scales.Quantized.*`.

### Quantize scale

Quantize scales are similar to linear scales, except they use a discrete rather than continuous range.  
The continuous input domain is divided into uniform segments based on the number of values in (i.e., the 
cardinality of) the output range.

<div class="note">

There is no value clamping so the segments may not be "uniform" as the first one accepts values down to -∞ 
and the last one values up to +∞.
</div>

To create a quantile scale, use the `Scales.Quantized.quantize` function.

- `domain`: a `StrictlyContinuous` object with Double start value and end value 
- `range`: given a **list of objects** of size X, the range will be divided into X groups

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // scale divides the domain [0,9] into 3 segments: [-∞,3[ [3,6[ [6,+∞]
    val scale = scales.quantize<Color> {
        domain = StrictlyContinuous(0.0, 9.0)
        range = listOf("#E966AC".color, "#33A7D8".color, "#FECE3E".color)
    }
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
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

### Threshold scale

A threshold scale is similar to a quantize scale, except that you define the subsets, they are not automatically 
computed by dividing the domain by the size of the range list.

To create a threshold scale, use the `Scales.Quantized.threshold` function.

- `domain`: a **list of Double** for defining the thresholds of the scale
- `range`: a **list of objects**, range.size must be equals to domain.size + 1

Let's have a look at the same example as before but with different thresholds:

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // scale divides the domain based on thresholds: [-∞,1[ [1,8[ [8,+∞]
    val scale = scales.threshold<Color> {
        domain = listOf(1.0, 8.0)
        range = listOf("#E966AC".color, "#33A7D8".color, "#FECE3E".color)
    }
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
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

### Quantile scale

A quantile scale use [quantile distribution](https://en.wikipedia.org/wiki/Quantile) to divide your domain objects 
into your range. As quantile distribution implies, objects should be distributed equally (in term of cardinality) 
between the range groups.

To create a quantile scale, use the `Scales.Quantized.quantile` function.

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


## Discrete scales

Discrete scales (also called category scales) map a discrete domain to a discrete range like a set 
of objects to a set of colors, or to the horizontal positions of columns in a column chart.

Discrete scales factories are located in `Scales.Discrete.*`.  
The scale parameters are:

- `domain`: a **list of objects** defining the whole domain
- `range`: a **list of objects** defining the whole range

<!--- TODO note on "implicit domain" --->

<div class="note">

Domain objects will be mapped to range objects in the specified order, if there is more objects in domain than 
range, the scale will reuse objects from the start of the range.
</div>
                                                          
### Ordinal scale

An ordinal scale has a discrete domain and range.  
Each object in the domain is mapped to a corresponding object in the range, for example colors.

To create an ordinal scale, use the `Scales.Discrete.ordinal` function.

- `domain`: a **list of objects**
- `range`: a **list of objects** 

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // scale maps Integer to their italian name
    val scale = scales.ordinal<Int, String> { 
        domain = (0..10).toList()
        range = listOf("zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci")
    }
    viz {
        size = Size(800.0, 50.0)
        (1..9).forEach { 
            rect {
                x = it * 55.0
                size = Size(50.0, 50.0)
                fill = "#33A7D8".color
            }
            text {
                x = 25 + it * 55.0
                y = 25.0
                fill = Colors.Web.black
                baseline = TextAlignmentBaseline.MIDDLE
                anchor = TextAnchor.MIDDLE
                textContent = "${scale(it)}"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```
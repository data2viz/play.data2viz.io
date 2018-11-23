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
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    viz {
         size = size(800, 50)
         rect {                     // visualize the first "range subset"
            size = size(300, 50)
            fill = "#DDDDDD".col
         }
         rect {                     // visualize the second "range subset"
            x = 300.0
            size = size(300, 50)
            fill = "#AAAAAA".col
         }
        //sampleStart
        // this scale maps 2 domain subsets to 2 range subsets (shown in greyscale)
        //  "domain" for the number of the current frame (animation)
        //  "range" for the position on screen
        val scale = Scales.Continuous.linear {
             domain = listOf(.0, 100.0, 400.0)
             range = listOf(.0, 300.0, 600.0)
        }
         var count = .0
         group {
             rect {                         // the red slider
                 size = size(4, 50)
                 fill = "#FF3366".col
             }
             val domainText = text {
                 x = 8.0
                 y = 20.0
                 fill = Colors.Web.black
             }
             val rangeText = text {
                 x = 8.0
                 y = 35.0
                 fill = Colors.Web.black
             }
             animation {
                 count = (count + 1) % 400
                 transform {
                    translate(scale(count) - 2)
                 }
                 domainText.textContent = "Domain = $count"
                 rangeText.textContent = "Range = ${scale(count).toInt()}"
             } 
         } //sampleEnd
    }.bindRendererOnNewCanvas()
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
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val myDomain = listOf(1.0, 200.0)
    val myRange = listOf(.0, 600.0)
    val logScale = Scales.Continuous.log { domain = myDomain; range = myRange }
    val powScale = Scales.Continuous.pow(10.0) { domain = myDomain; range = myRange }
    viz {
        size = size(800, 50)
        var count = 1.0
        var increment = 1
        val logRect = rect {
            size = size(50, 25)
            fill = "#33A7D8".col
        }
        val logText = text {
            y = 12.0
            fill = Colors.Web.black
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
        }
        val powRect = rect {
            size = size(50, 25)
            y = 25.0
            fill = "#FECE3E".col
        }
        val powText = text {
            y = 37.0
            fill = Colors.Web.black
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
        }
        animation {
            count += increment
            if (count >= 200 || count <= 1) increment *= -1
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
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.time.*

fun main() {
    viz {
        line {
            x1 = 50.0
            x2 = 650.0
            y1 = 33.0
            y2 = 33.0
            stroke = Colors.Web.black
        }
    //sampleStart
        val events = listOf<Pair<Date, String>>(
            date(2018, 1, 1) to "New Year 2018",
            date(2018, 2, 16) to "Jim's birthday",
            date(2018, 3, 20) to "Spring",
            date(2018, 6, 21) to "Summer",
            date(2018, 8, 12) to "Mike's birthday", 
            date(2018, 9, 23) to "Automn",
            date(2018, 11, 8) to "Sam's birthday",
            date(2018, 12, 31, 23, 59) to "New year's eve"
        )
        
        // scale translates dates to double for positionning events
        val scale = Scales.Continuous.time {
            domain = listOf(date(2018, 1, 1), date(2019, 1, 1))
            range = listOf(50.0, 650.0)
        }
        size = size(800, 50)
        events.forEach { 
            line {
                x1 = scale(it.first)
                y1 = 20.0
                x2 = scale(it.first)
                y2 = 40.0
                strokeWidth = 2.0
                stroke = Colors.Web.black
            }
            text {
                x = scale(it.first)
                y = 10.0
                fill = Colors.Web.black
                fontSize = 10.0
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "${it.second}"
            }
        } //sampleEnd
    }.bindRendererOnNewCanvas()
}
```

## Quantized scales

Quantized scales map a domain considered as continuous to a discrete range.  
These scales are often used with colors to display information in a non-linear way like for example 
in a [chloropeth map](https://en.wikipedia.org/wiki/Choropleth_map).

Quantized scales factories are located in `Scales.Quantized.*`.

The 3 examples below show the same collection of `Double` separated in 3 groups, the distribution varies 
depending on the scale you use.

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
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // scale divides the domain [0,9] into 3 segments: [-∞,3[ [3,6[ [6,+∞]
    val scale = Scales.Quantized.quantize<Color> {
        domain = StrictlyContinuous(0.0, 9.0)
        range = listOf("#E966AC".col, "#33A7D8".col, "#FECE3E".col)
    }
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
    viz {
        size = size(800, 50)
        someValues.forEachIndexed { index, domainValue ->
            rect {
                x = index * 55.0
                size = size(50, 50)
                fill = scale(domainValue)
            }
            text {
                x = 25 + index * 55.0
                y = 25.0
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "$domainValue"
            }
        }
    }.bindRendererOnNewCanvas()  //sampleEnd
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
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // scale divides the domain based on thresholds: [-∞,1[ [1,8[ [8,+∞]
    val scale = Scales.Quantized.threshold<Color> {
        domain = listOf(1.0, 8.0)
        range = listOf("#E966AC".col, "#33A7D8".col, "#FECE3E".col)
    }
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
    viz {
        size = size(800, 50)
        someValues.forEachIndexed { index, domainValue ->
            rect {
                x = index * 55.0
                size = size(50, 50)
                fill = scale(domainValue)
            }
            text {
                x = 25 + index * 55.0
                y = 25.0
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "$domainValue"
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
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
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val someValues = listOf(0.0, 1.0, 1.5, 2.0, 3.0, 6.0, 7.0, 8.0, 9.0)
    // scale divides in 3-quantiles for even distribution [-∞,1.83[ [1.83,6.33[ [6.33,+∞]
    val scale = Scales.Quantized.quantile<Color> {
        domain = someValues
        range = listOf("#E966AC".col, "#33A7D8".col, "#FECE3E".col)
    }
    viz {
        size = size(800, 50)
        someValues.forEachIndexed { index, domainValue ->
            rect {
                x = index * 55.0
                size = size(50, 50)
                fill = scale(domainValue)
            }
            text {
                x = 25 + index * 55.0
                y = 25.0
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "$domainValue"
            }
        }
    }.bindRendererOnNewCanvas()  //sampleEnd
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

```height=0
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // scale maps Integer to their italian name
    val scale = Scales.Discrete.ordinal<Int, String> { 
        domain = (0..10).toList()
        range = listOf("zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci")
    }
    (0..10).forEach { 
        println("$it - ${scale(it)}")
    } //sampleEnd
}
```
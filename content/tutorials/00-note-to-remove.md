# Note sample

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

```note
you can use `Scales.Continuous.linearRound` to get rounded scaled values.*
```

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

```info
Power scales are linear scales with an exponential transforms applied to the input, the exponent is defined when creating the scale (defaults to 1). these color scales clamp values outside the range.* The scale needs an color interpolator. You can use pre-parameterized color scales
```

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

```warning
Note : As log(0) = -∞, a log scale domain must be strictly-positive or strictly-negative.*
```

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

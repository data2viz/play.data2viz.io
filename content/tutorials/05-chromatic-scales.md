# Chromatic Scales

Chromatic Scales are [scales](/tutorial/scales/) that output [colors](/tutorial/colors/). 

## Scale creation

In the `ScalesChromatic` object you'll find a lot of factories to use pre-build colors scales.

| Type |  Subtype |  Factories<br/>ScalesChromatic.*  | Example of use |
|---|---|---|---|
| Continuous | &nbsp; | **[Continuous.*](#continuous-scales)**<br/>(linearRGB...) | Create your own linear color scale  |
| Discrete  | &nbsp; |  **[Discrete.*](#discrete-scales)**<br/>(dark8, pale12...) | Display distinct categories with no specific order |
| Sequential  |  Single&nbsp;hue |  **[Sequential.SingleHue.*](#single-hue-scales)**<br/>(blues, greens, reds...) | Show continuous data on a single-color scheme |
| Sequential  |  Multi&nbsp;hue |  **[Sequential.MultiHue.*](#multi-hue-scales)**<br/>(viridis, plasma...) | Show continuous data on multi-color scheme (better for large domains) |
| Sequential  |  Diverging |  **[Sequential.Diverging.*](#diverging-scales)**<br/>(spectral, red_blue...) | Highlight divergence of continuous data (temperatures...)  |
| Sequential  |  Cyclical |  **[Sequential.Cyclical.*](#cyclical-scales)**<br/>(rainbow...) | Good for radial visuals as<br/> start color == end color |


<div class="note">

Scales are managed in there own module. You have to import the dependency inside your project 
(`io.data2viz.scale`) and in the import directive in your code.

</div>

## Continuous scales

The `ScalesChromatic.Continuous.*` object contains factories to create linear color scales.  
These scales already contains a color interpolator so you just need to set the domain and the range, as you 
would do with a [numeric linear scale](/tutorial/scales#linear-scale).

There are several color interpolators available:
- `defaultRGB`: simple RGB interpolator
- `linearRGB`: better results on bright colors than the previous one
- `linearLAB`: interpolator in the LAB color space
- `linearHSL`, `linearHCL`: interpolators in HSL and HCL color spaces
- `linearHSLLong`, `linearHCLLong`: same as above, but if your colors are separated with more
than 180° on the chromatic wheel these interpolators will take the "longest way" from one color to another

<div class="info">

Learn more about the bias of "default RGB interpolation" in [this video](https://www.youtube.com/watch?v=LKnqECcg6Gw).
</div>

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val myDomain = listOf(.0, 100.0)
    val myRange = listOf("#33A7D8".color, "#FECE3E".color)
    
    // scale with linear interpolation in 2 color spaces : RGB & HCL
    val scaleRGB = scales.colors.linearRGB { domain = myDomain; range = myRange }
    val scaleHCL = scales.colors.linearHCL { domain = myDomain; range = myRange }
    viz {
        size = Size(800.0, 50.0)
        (0..100).forEach { 
            rect {
                x = 10 + it * 5.0
                size = Size(5.0, 20.0)
                fill = scaleRGB(it.toDouble())
            }
            rect {
                x = 10 + it * 5.0
                y = 30.0
                size = Size(5.0, 20.0)
                fill = scaleHCL(it.toDouble())
            }
            if (it%10 == 0) {
                text {
                    x = 10 + it * 5.0
                    y = 26.0
                    fill = Colors.Web.black
                    baseline = TextAlignmentBaseline.MIDDLE
                    anchor = TextAnchor.MIDDLE
                    textContent = "$it"
                }
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

## Discrete scales

Discrete scales are pre-configured color scales map colors to different categories.  
To mark the difference between comparable objects (where we would use gradients of colors) these scales propose 
some color schemes with very distinct colors.

You can create your own category color scale using the [Scales.Discrete.*](#discrete-scales) object, but 
the `ScalesChromatic.Discrete` factory will offer some ready to use color scales.

<div class="note">

The factories names finish with a number indicating the total colors in the range of the scale, 
`ScalesChromatic.Discrete.accent8` for example contains 8 distinct colors.
</div>

<div class="info">

The colors in these scales are mostly derived from Cynthia A. Brewer’s [ColorBrewer](http://colorbrewer2.org/).
</div>

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val days = listOf("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday") 
    
    // this scale map names of the days (as String) to colors
    val scale = scales.colors.category10<String> {
        domain = days
    }
    viz {
        size = Size(800.0, 50.0)
        days.forEachIndexed { index, dayName ->
            text {
                x = 10 + index * 60.0
                y = 25.0
                fill = scale(dayName)
                baseline = TextAlignmentBaseline.MIDDLE
                textContent = "$dayName"
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

## Sequential scales

Sequential scales are pre-configured scales so their range is fixed.  

These scales are distributed among 4 categories in `ScalesChromatic.Sequential.*`
- `SingleHue.*`: interpolate over a single color starting generally from white
- `MultiHue.*`: interpolate over multiple colors, like [viridis or magma](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html)
- `Diverging.*`: interpolate over a diverging color-scheme ie. from blue to white to red
- `Cyclical.*`: these scales use the same color at both end of the range

### Single hue scales

Use `ScalesChromatic.Sequential.SingleHue.*` to create a new single hue scale.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // for a sequential scale, the range is already defined
    val scale = scales.colors.sequentialPurples {
        domain = StrictlyContinuous(0.0, 40.0)
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

### Multi hue scales

Use `ScalesChromatic.Sequential.MultiHue.*` to create a new multi hue scale.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // for a sequential scale, the range is already defined
    val scale = scales.colors.sequentialViridis {
        domain = StrictlyContinuous(0.0, 40.0)
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

### Diverging scales

Use `ScalesChromatic.Sequential.Diverging.*` to create a new diverging scale.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // note the inverted domain to bind blue to -20 and red to +20 
    val scale = scales.colors.sequentialRdYlBu() {
        domain = StrictlyContinuous(20.0, -20.0)
    }
    viz {
        size = Size(800.0, 50.0)
        (-20..20).forEach { 
            rect {
                x = (it + 20) * 17.0
                size = Size(16.0, 50.0)
                fill = scale(it.toDouble())
            }
            text {
                x = 8 + (it + 20) * 17.0
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

### Cyclical scales

Use `ScalesChromatic.Sequential.Cyclical.*` to create a new diverging scale.

```height=200 width=800
import io.data2viz.color.*
import io.data2viz.math.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // TODO change to cyclical
    val scale = scales.colors.linearHSL {
        domain = listOf(0.0, 180.0, 360.0, 540.0, 720.0)
        range = listOf(Colors.Web.blue, Colors.Web.yellow, Colors.Web.red, Colors.Web.green, Colors.Web.blue)
    }
    viz {
        size = Size(800.0, 200.0)
        (0..720).forEach { 
            // TODO change to rotate
            line {
                val angle = (it/2.0).deg
                x1 = 100.0 + 60 * angle.cos
                x2 = 100.0 + 100 * angle.cos
                y1 = 100.0 + 60 * angle.sin
                y2 = 100.0 + 100 * angle.sin
                stroke = scale(it.toDouble())
            }
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```
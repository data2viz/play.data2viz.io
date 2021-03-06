# Chromatic Scales

Chromatic Scales are [scales](/tutorial/scales/) that output [colors](/tutorial/colors/).  
The `ScalesChromatic` object offers somes factories for creating pre-configured color scales:

|  Scales factory<br/>ScalesChromatic.* | Type |  Subtype  | Example of use |
|---|---|---|---|
| **[Continuous.*](#continuous-scales)**<br/>*linearRGB...* | Continuous | &nbsp; | Create your own linear color scale  |
|  **[Discrete.*](#discrete-scales)**<br/>*dark8, pale12...*| Discrete  | &nbsp;  | Display distinct categories with no specific order |
|  **[Sequential.SingleHue.*](#single-hue-scales)**<br/>*blues, greens, reds...* | Sequential  |  Single&nbsp;hue | Show continuous data on a single-color scheme |
|  **[Sequential.MultiHue.*](#multi-hue-scales)**<br/>*viridis, plasma...*| Sequential  |  Multi&nbsp;hue  | Show continuous data on multi-color scheme (better for large domains) |
|  **[Sequential.Diverging.*](#diverging-scales)**<br/>*spectral, red_blue...* | Sequential  |  Diverging | Highlight divergence of continuous data (temperatures...)  |
|  **[Sequential.Cyclical.*](#cyclical-scales)**<br/>*rainbow...* | Sequential  |  Cyclical | Good for radial visuals as<br/> start color == end color |


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
    val valuesDomain = listOf(.0, 100.0)
    val colorRange = listOf("#33A7D8".col, "#FECE3E".col)
    
    // scale with linear interpolation in 2 color spaces : RGB & HCL
    val scaleRGB = ScalesChromatic.Continuous.linearRGB { 
        domain = valuesDomain
        range = colorRange
    }
    val scaleHCL = ScalesChromatic.Continuous.linearHCL { 
        domain = valuesDomain
        range = colorRange 
    }
    viz {
        size = size(800, 50)
        (0..100).forEach { 
            rect {
              x = 10 + it * 5.0
              size = size(5, 19)
              fill = scaleRGB(it)
            }
            rect {
              x = 10 + it * 5.0
              y = 31.0
              size = size(5, 19)
              fill = scaleHCL(it)
            }
            if (it % 10 == 0) {
                text {
                    x = 10 + it * 5.0
                    y = 26.0
                    textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                    textContent = "$it"
                }
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
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
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    val days = listOf("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday") 
    
    // this scale map names of the days (as String) to colors
    val scale = ScalesChromatic.Discrete.category10<String> { domain = days }
    viz {
        size = size(800, 50)
        days.forEachIndexed { index, dayName ->
            text {
                x = 30 + index * 70.0
                y = 25.0
                textColor = scale(dayName)
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "$dayName"
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

## Sequential scales

Sequential scales are pre-configured scales, the color scheme is already defined so the range is fixed.  

These scales are distributed among 4 categories in `ScalesChromatic.Sequential.*`
- [`SingleHue.*`](#single-hue-scales): interpolate over a single color, generally starting from white
- [`MultiHue.*`](#multi-hue-scales): interpolate over multiple colors, like [viridis or magma](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html)
- [`Diverging.*`](#diverging-scales): use a diverging color-scheme ie. from blue to white to red
- [`Cyclical.*`](#cyclical-scales): use the same color at both end of the range

### Single hue scales

Use `ScalesChromatic.Sequential.SingleHue.*` to create a new single hue scale.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.color.Colors.Web.white
import io.data2viz.color.Colors.Web.black

fun main() {
    //sampleStart
    // for a sequential scale, the range is already defined
    val scale = ScalesChromatic.Sequential.SingleHue.purples {
        domain = StrictlyContinuous(0.0, 40.0)
    }
    viz {
        size = size(800, 50)
        (0..40).forEach { 
            val color = scale(it.toDouble())
            rect {
                x = it * 17.0
                size = size(16, 50)
                fill = color
            }
            text {
                x = 8 + it * 17.0
                y = 25.0
                textColor = if (color.luminance() > 50.pct) black else white
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "$it"
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Multi hue scales

Use `ScalesChromatic.Sequential.MultiHue.*` to create a new multi hue scale.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.color.Colors.Web.white
import io.data2viz.color.Colors.Web.black

fun main() {
    //sampleStart
    // for a sequential scale, the range is already defined
    val scale = ScalesChromatic.Sequential.MultiHue.viridis {
        domain = StrictlyContinuous(0.0, 40.0)
    }
    viz {
        size = size(800, 50)
        (0..40).forEach { 
            val color = scale(it.toDouble())
            rect {
                x = it * 17.0
                size = size(16, 50)
                fill = color
            }
            text {
                x = 8 + it * 17.0
                y = 25.0
                textColor = if (color.luminance() > 50.pct) black else white
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "$it"
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Diverging scales

Use `ScalesChromatic.Sequential.Diverging.*` to create a new diverging scale.

```height=50 width=800
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.color.Colors.Web.white
import io.data2viz.color.Colors.Web.black


fun main() {
    //sampleStart
    // note the inverted domain to bind blue to -15 and red to +15 
    val scale = ScalesChromatic.Sequential.Diverging.red_yelow_blue() {
        domain = StrictlyContinuous(15.0, -15.0)
    }
    viz {
        size = Size(800.0, 50.0)
        (-15..15).forEach { 
            val color = scale(it.toDouble())
            rect {
                x = (it + 15) * 21.0
                size = size(20, 50)
                fill = color
            }
            text {
                x = 10 + (it + 15) * 21.0
                y = 25.0
                textColor = if (color.luminance() > 50.pct) black else white
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "$it"
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Cyclical scales

Use `ScalesChromatic.Sequential.Cyclical.*` to create a new diverging scale.

<div class="note">

Cyclical color scales obviously do not clamp data, they just cycle over when you scale a value which is outside 
the domain.
</div>

```height=200 width=800
import io.data2viz.color.*
import io.data2viz.math.*
import io.data2viz.scale.*
import io.data2viz.geom.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    // on this cyclical scale: scale(0) == scale(360) == scale(720)...
    val scale = ScalesChromatic.Sequential.Cyclical.sineBow {
        domain = StrictlyContinuous(.0, 360.0)
    }
    viz {
        size = size(800, 200)
        (0..360).forEach { 
            line {
                val angle = it.deg
                x1 = 300.0 + 60 * angle.cos
                x2 = 300.0 + 100 * angle.cos
                y1 = 100.0 + 60 * angle.sin
                y2 = 100.0 + 100 * angle.sin
                stroke = scale(it.toDouble())
                strokeWidth = 3.0
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

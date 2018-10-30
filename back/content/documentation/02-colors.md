# Colors

Colors are used everywhere in dataviz. So let's have a look at how you can use them 
inside data2viz.

Colors are managed in there own module. You have to import the dependency 
inside your project (`io.data2viz.color`) and in the import directive in your code.

## Color creation

The companion object `Colors` will give you access to several constructors for your colors.

### HTML name

Data2viz provides an easy access to web colors through the `Colors.Web` companion 
object. 

All you have to do is calling `Colors.Web.darkturquoise` to have a reference 
on the dark turquoise html color.

```height=50
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = Colors.Web.blueviolet
        }                
    }.bindRendererOnNewCanvas()
}
```

### Hex (RGB)

If you want to create a color from its precise hexadecimal value, you can do it by using 
Int extension value `color`. 

Using it in conjunction with hexadecimal kotlin literal gives a handy syntax.

```height=50 from=4 to=12
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = 0x87ceeb.color                       // skyblue
        }                
    }.bindRendererOnNewCanvas()
}
```

### RGB

You can define your color using Integer values from 0 to 255 Int for red, green and blue channels
using the `Colors.rgb` function

 * `red`: Int [0..255]
 * `green`: Int [0..255]
 * `blue`: Int [0..255]
 * `alpha`: Double [0..1] (default 1)

```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = Colors.rgb(255, 0, 0)                        // red
        }                
        rect {
            x = 50.0
            width = 50.0
            height = 50.0
            fill = Colors.rgb(255, 0, 0, .5f)                   // red (alpha 50%)
        }                   
    }.bindRendererOnNewCanvas()
}
```

### HSL

To create a color using the HSL model, use the `Colors.hsl` function.

 * `hue`: Angle
 * `saturation`: Double [0..1]
 * `lightness`: Double [0..1]
 * `alpha`: Double [0..1] (default 1)

```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = Colors.hsl(38.82.deg, 1.0, 0.5)            // orange
        }                   
    }.bindRendererOnNewCanvas()
}
```


### HCL

To create a color in the HCL color space (Hue-Chroma-Luminance) use the `Colors.hcl` function.

 * `hue`: Angle
 * `chroma`: Double
 * `luminance`: Double [0..100]
 * `alpha`: Double [0..1] (default 1)
 
```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = Colors.hcl(167.95, 46.55, 92.03)              // aquamarine
        }
    }.bindRendererOnNewCanvas()
}
```


### LAB

To create a color in the LAB color space (also known as CIE Lab) use the `Colors.lab` function.

 * `lightness`: Double [0..100]
 * `aComponent`: Double, the "a"-component for green-red [-128..128]
 * `bComponent`: Double, the "b"-component for blue-yellow [-128..128]
 * `alpha`: Double [0..1] (default 1)
 
```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = Colors.lab(30.83, 26.05, -42.08)            // darkslateblue
        }
    }.bindRendererOnNewCanvas()
}
```

## Color manipulation

### Brighten

The `brighten` function take a single `strength` parameter (defaults to 1.0) and return a new color 
with changed lightness.

```height=50 from=4
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        (0..3).forEach {
            rect {
                x = it * 25.0
                width = 25.0
                height = 25.0
                fill = Colors.Web.hotpink.brighten(it.toDouble())
            }
        }
    }.bindRendererOnNewCanvas()
}
```

### Darken

The `darken` function take a single `strength` parameter (defaults to 1.0) and return a new color 
with changed lightness.

```height=50 from=4
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        (0..3).forEach {
            rect {
                x = it * 25.0
                y = 25.0
                width = 25.0
                height = 25.0
                fill = Colors.Web.hotpink.darken(it.toDouble())
            }
        }
    }.bindRendererOnNewCanvas()
}
```
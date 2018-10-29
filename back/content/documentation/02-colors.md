# Colors

Colors are used everywhere in dataviz. So let's have a look at how you can use them 
inside data2viz.

First, colors are managed in there own module. You have to import the dependency 
inside your project (`io.data2viz.color`) and in the import directive in your code.

## Html colors

Data2viz provides an easy access to html colors through the `colors` companion 
object. All you have to do is calling `colors.darkturquoise` to have a reference 
on the dark turquoise html color. 

(should we rename the companion object to something more specific like `HtmlColors`)  


```height=50
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = colors.blueviolet
        }                
    }.bindRendererOnNewCanvas()
}
```

## Hexadecimal colors

If you want to create a color from its precise hexadecimal value, you can do it by using 
Int extension value `color`. Using it in conjunction with hexadecimal kotlin literal 
gives a handy syntax.

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

## RGBA colors

You can also define you color from 0 to 255 Int value for red, green and blue lights.
The factory function has an additional float alpha parameter (not required) to define
the transparency. It is set by default to 1f (opaque).   

```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = rgba(255,0,0)                        // red
        }                
        rect {
            x = 50.0
            width = 50.0
            height = 50.0
            fill = rgba(255,0,0, .5f)                   // red (alpha 50%)
        }                   
    }.bindRendererOnNewCanvas()
}
```

## HSLA colors

You can create a color using alternative representations of the RGB color model.
To create a color using the HSL model, use the `hsla` function.

```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = hsla(38.82.deg, 1.0, 0.5)            // orange
        }                   
    }.bindRendererOnNewCanvas()
}
```


## HCL colors

To create a color in the HCL color space (Hue-Chroma-Luminance) use the `hcl` function.

```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = hcl(167.95, 46.55, 92.03)              // aquamarine
        }
    }.bindRendererOnNewCanvas()
}
```


## LAB colors

To create a color in the LAB color space (also known as CIE Lab) use the `lab` function.

```height=50 from=4 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        rect {
            width = 50.0
            height = 50.0
            fill = lab(30.83, 26.05, -42.08)            // darkslateblue
        }
    }.bindRendererOnNewCanvas()
}
```

## Color manipulation

Several operations can be applied to your colors: `lighten`, `darken`, `saturate` and `desaturate`.
Each of these functions take a single `strength` parameter (defaults to 1.0) to adjust the effect.

```height=50 from=4
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        var pink = colors.hotpink
        (0..3).forEach {
            rect {
                x = it * 25.0
                width = 25.0
                height = 25.0
                fill = pink.brighten(it.toDouble())
            }
            rect {
                x = it * 25.0
                y = 25.0
                width = 25.0
                height = 25.0
                fill = pink.darken(it.toDouble())
            }
        }
    }.bindRendererOnNewCanvas()
}
```
# Colors and gradients

Colors are used everywhere in data visualizations and -as a way of displaying data- they need to 
be chosen with care to ensure that the perception of the color carry the right information.

Data2viz provides a lot of helpful functions to create several colors and gradients and still maintain 
a high level of readability and accessibility in visuals.

<div class="note">

In data2viz, colors are managed in their own module:
- import the dependency inside your project (`io.data2viz.color`)
- add the import directive in your code (`import io.data2viz.color.*`)
</div>


## Color creation

The `Colors` object provides several ways to retrieve colors and gradients.

### Web colors

The first option is to use a named color. All CSS colors are accessible as references through
the `Colors.Web` object. 

For example, `Colors.Web.darkturquoise` returns a reference 
on the dark turquoise html color. As colors are immutable objects, it's then possible to
reuse and pass references of these named colors.

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    viz {
        rect {
            size = size(50, 50)
            fill = Colors.Web.blueviolet
        }

    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Hex colors

Another usual option to create a color is through its **hexadecimal** code. There are
2 extension vals that simplify the creation of a color from Int and String.

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    viz {
        rect {
            size = size(50, 50)
            fill = 0x87ceeb.col        // <- Int extension val
                
        }
        rect {
            x = 50.0
            size = size(50, 50)
            fill = "#800080".col       // <- String extension val
        }

    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Color spaces

You can also use the values from 0 to 255 of the **RGB** channels to create a color calling 
`Colors.rgb`. 

Beside **RGB**, data2viz allows the use of different color spaces to create colors: 
  - **HSL** (Hue, Saturation, Lightness), 
  - **HCL** (Hue, Chroma, Lightness) and
  - **LAB** (also known as CIE Lab). 
  
For each of them a factory function is available in `Colors`, taking
the transparency alpha as a last parameter with a d

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    viz {
        size = size(600, 50)
        rect {                      // pure red fill
            size = size(50, 50)
            fill = Colors.rgb(255, 0, 0)
        }        
        rect {                      // filled with 50% transparency
            x = 50.0
            size = size(50, 50)
            fill = Colors.rgb(255, 0, 0, 50.pct)
        }
        rect {                      // fill defined in HSL color space
            x = 100.0
            size = size(50, 50)
            fill = Colors.hsl(38.82.deg, 100.pct, 50.pct)
        }
        rect {                      // fill defined in HCL color space
            x = 150.0
            size = size(50, 50)
            fill = Colors.hcl(167.95.deg, 46.55, 92.03.pct)
        }
        rect {                      // fill defined in LAB color space
            x = 200.0
            size = size(50, 50)
            fill = Colors.lab(30.83.pct, 26.05, -42.08)
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
 
```

## Color manipulation

Data2viz provides several functions to manipulate colors based on **color perception**.

### Luminance & Contrast

Some color spaces like LAB or LCH use a parameter to determine the "lightness" of a color, but the 
hue impacts the lightness we perceived from it (the luminance). 

For example, blue and yellow seems to have very different brightness even if these 2 colors are created using 
the same "lightness" parameter in HSL.

The `luminance()` function returns the **perceived lightness** of a given color.
 
The **contrast** we perceive is tightly bound to the luminance of 2 given colors. The `contrast()` 
computes the *perceived contrast ratio* of 2 colors. 

<div class="info">

Check the [WCAG](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) for more info about contrast and readability.
</div>

```width=800 height=250
import io.data2viz.viz.*
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.color.Colors.Web.white
import io.data2viz.color.Colors.Web.black

fun main() {
    viz {
        size = size(800, 250)
        //sampleStart
        (0 until 360 step 30).forEach {
            val angle = it.deg
            val position = point(250 + angle.cos * 100, 125 + angle.sin * 100)
            val color = Colors.hsl(angle, 100.pct, 50.pct)
            circle {                    // draw a circle with "pure-color" 
                fill = color
                radius = 25.0
                x = position.x
                y = position.y
            }
            circle {                    // draw a circle with the desaturated color
                fill = color.desaturate(10.0)
                radius = 25.0
                x = position.x + 270
                y = position.y
            }
            text {                      // indicate the perceived lightness of the color
                x = position.x
                y = position.y
                textColor = if (color.luminance() > 50.pct) black else white
                textContent = "${(color.luminance().value*100).toInt()}%"
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            }
        } //sampleEnd
        text {
            x = 250.0
            y = 125.0
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            textContent = "LUMINANCE"
        }
        text {
            x = 520.0
            y = 125.0
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            textContent = "DESATURATED COLORS"
        }
    }.bindRendererOnNewCanvas()
}
```

### Change brightness

`brighten()` and `darken()` functions allow to easily change the brightness of a given color.

<div class="note">

`brighten(x)` is equivalent to `darken(-x)`
</div>

```height=50
import io.data2viz.viz.*
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*

fun main() {
//sampleStart
    viz {
        size = size(600, 50)
        val myColor = Colors.hsl(260.deg, 100.pct, 10.pct)
        (0..10).forEach {
            rect {
                x = it * 50.0
                size = size(50, 50)
                fill = myColor.brighten(it / 2.0)
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

### Change saturation

The `saturate()` and `desaturate()` functions change the saturation of a given color.

<div class="note">

`saturate(x)` is equivalent to `desaturate(-x)`
</div>

```height=50
import io.data2viz.viz.*
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*

fun main() {
//sampleStart
    viz {
        size = size(600, 50)
        val myColor = Colors.hsl(240.deg, 100.pct, 50.pct)
        (0..7).forEach {
            rect {
                x = it * 50.0
                size = size(50, 50)
                fill = myColor.desaturate(it.toDouble())
            }
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
```

## Gradients

Most of the data2viz visual elements accepts a `ColorOrGradient` object for its fill color.

A gradient is defined by giving at least 2 `ColorStop`, each corresponding to a color and its position along 
the gradient (in percentage).

<div class="note">

Gradient positioning (as defined by its `ColorStop`) is absolute, not relative to the positions of the shapes using it.
</div>


### Linear gradient

A Linear gradient is created using the `Colors.Gradient.linear()` builder.

 * `start`: starting point of the gradient
 * `end`: ending point of the gradient
 
 Next you call `withColor()` given a Color and a percentage to set the base color then add any number of `ColorStop` 
 using `andColor()`.
 
 <!--- TODO use style inheritance here  -->
 
 ```height=100
 import io.data2viz.color.*
 import io.data2viz.geom.*
 import io.data2viz.math.*
 import io.data2viz.viz.*
 
fun main() {
 //sampleStart
    viz {
        size = size(800, 100)
        
        val linearGradient = Colors.Gradient.linear(point(0, 0), point(800, 0))
           .withColor(Colors.Web.hotpink, 20.pct)      // under 20% color is "hot pink"
           .andColor(Colors.Web.blueviolet, 50.pct)    // middle (50%) is "blue violet"
           .andColor(Colors.Web.skyblue, 80.pct)       // from 80% color is "sky blue"
        
        // we set stroke & strokewidth here, and use style delegation to pass it down
        stroke = linearGradient
        strokeWidth = 30.0 
        
        line {
            x1 = 100.0
            y1 = 18.0
            x2 = 500.0
            y2 = 18.0
        }
        line {
            x1 = 300.0
            y1 = 50.0
            x2 = 700.0
            y2 = 50.0
        }
        line {
            x1 = .0
            y1 = 82.0
            x2 = 800.0
            y2 = 82.0
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
 ```
 
### Radial gradient
 
If you want to paint a shape using a radial gradient, use the `Colors.Gradient.radial()` builder.
 
 * `center`: starting point of the gradient
 * `radius`: radius of the gradient
 
Next you call `withColor()` given a Color and a percentage to set the base color then add any number of `ColorStop` 
using `andColor()`.
  
 ```height=200
 import io.data2viz.color.*
 import io.data2viz.geom.*
 import io.data2viz.math.*
 import io.data2viz.viz.*
  
fun main() {
    //sampleStart
    val radialGradient = Colors.Gradient.radial(point(400, 100), 100.0)
        .withColor(Colors.Web.hotpink, 0.pct)       // gradient center is "hot pink"
        .andColor(Colors.Web.skyblue, 100.pct)      // gradient end "is sky blue"
    viz {
        size = size(800, 200)
        circle {
            x = 400.0
            y = 100.0
            radius = 100.0
            fill = radialGradient
        }
    }.bindRendererOnNewCanvas() //sampleEnd
}
  ```

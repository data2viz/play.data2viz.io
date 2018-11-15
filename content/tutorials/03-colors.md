# Colors and gradients

Colors are used everywhere in dataviz. So let's have a look at how you can use them inside data2viz.

Colors are managed in there own module. You have to import the dependency inside your project 
(`io.data2viz.color`) and in the import directive in your code.


## Color creation

The  `Colors` object will give you access to several way of having colors and gradients.

The first option is to use a named color. All the CSS colors are accessible through
the `Colors.Web` object. 

All you have to do is calling `Colors.Web.darkturquoise` to have a reference 
on the dark turquoise html color. As colors are immutable objects, you can
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
            size = Size(50.0, 50.0)
            fill = Colors.Web.blueviolet
        }

    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

Another usual option to create a color is through its **hexadecimal** code. You have
2 extension vals to help you create a color from Int and String.

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
            fill = 0x87ceeb.color      // <- Int extension val
                
        }
        rect {
            x = 50.0
            size = Size(50.0, 50.0)
            fill = "#800080".color     // <- String extension val
        }

    }.bindRendererOnNewCanvas()
    //sampleEnd
}
```

You can also use the values from 0 to 255 of the **RGB** channels to create a color calling 
`Colors.rgb`. 

Beside **RGB**, [data2viz](https://data2viz.io) allows you to use different color spaces to create colors: 
  - **HSL** (Hue, Saturation, Luminosity), 
  - **HCL** (Hue, Chroma, Luminance) and
  - **LAB** (also known as CIE Lab). 
  
For each of them a factory function is available in `Colors`, taking
the transparency alpha as a last parameter with a default value of 1.0 (opaque).

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*

fun main() {
    //sampleStart
    viz {
        size = Size(600.0, 50.0)
        rect {
            size = Size(50.0, 50.0)
            fill = Colors.rgb(255, 0, 0)                     // <- pure red
        }        
        rect {
            x = 50.0
            size = Size(50.0, 50.0)
            fill = Colors.rgb(255, 0, 0, .5)                 // <- with 50% transparency
        }
        rect {
            x = 100.0
            size = Size(50.0, 50.0)
            fill = Colors.hsl(38.82.deg, 1.0, 0.5)           // <- HSL color space
        }
        rect {
            x = 150.0
            size = Size(50.0, 50.0)
            fill = Colors.hcl(167.95.deg, 46.55, 92.03)      // <- HCL color space
        }
        rect {
            x = 200.0
            size = Size(50.0, 50.0)
            fill = Colors.lab(30.83, 26.05, -42.08)          // <- LAC (CIE) color space
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
 
```



## Color manipulation

### Change lightness

The `brighten()` and `darken()` functions take a single `strength` parameter (defaults to 1.0) and return a new color 
with changed lightness. 

> You can note that `brighten(x)` is equivalent to `darken(-x)`

```height=50
import io.data2viz.viz.*
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*

fun main() {
//sampleStart
    viz {
        size = Size(600.0, 50.0)
        val myColor = Colors.hsl(260.deg, 0.5, 0.5)
        (0..6).forEach {
            rect {
                x = it * 50.0
                width = 50.0
                height = 50.0
                fill = myColor.brighten(it - 3.0)
            }
        }
    }.bindRendererOnNewCanvas()
//sampleEnd
}
```

### Change saturation

The `saturate()` and `desaturate()` functions take a single `strength` parameter (defaults to 1.0) and return a new 
color with changed saturation. 

>You can note that `saturate(x)` is equivalent to `desaturate(-x)`

```height=50
import io.data2viz.viz.*
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*

fun main() {
//sampleStart
    viz {
        size = Size(600.0, 50.0)
        val myColor = Colors.hsl(260.deg, 0.5, 0.5)
        (0..6).forEach {
            rect {
                x = it * 50.0
                width = 50.0
                height = 50.0
                fill = myColor.saturate(it - 3.0)
            }
        }
    }.bindRendererOnNewCanvas()
//sampleEnd
}
```

## Color gradients

Most of the [data2viz](https://data2viz.io) visual elements accepts a `ColorOrGradient` object for defining its fill color.

A gradient is defined by giving at least 2 `ColorStop`, each corresponding to a color and its position along 
the gradient (in percentage).

> Note that the gradient positioning (as defined by its `ColorStop`) is absolute, not relative to the positions of the shapes using it.


### Linear gradient

A Linear gradient can be easily created using the `Colors.Gradient.linear()` builder.

 * `start`: Point, starting point of the gradient
 * `end`: Point, ending point of the gradient
 
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
        size = Size(800.0, 100.0)
        
        val linearGradient = Colors.Gradient.linear(Point(.0, .0), Point(800.0, .0))
                   .withColor(Colors.Web.hotpink, .2)             // under 20% the gradient color is "hot pink"
                   .andColor(Colors.Web.blueviolet, .5)           // middle of the gradient (50%) is "blue violet"
                   .andColor(Colors.Web.skyblue, .8)              // from 80% the gradient color is "sky blue"
        
        line {
            x1 = 100.0
            y1 = 18.0
            x2 = 500.0
            y2 = 18.0
            stroke = linearGradient
            strokeWidth = 30.0 
        }
        line {
            x1 = 300.0
            y1 = 50.0
            x2 = 700.0
            y2 = 50.0
            stroke = linearGradient
            strokeWidth = 30.0 
        }
        line {
            x1 = .0
            y1 = 82.0
            x2 = 800.0
            y2 = 82.0
            stroke = linearGradient
            strokeWidth = 30.0 
        }
    }.bindRendererOnNewCanvas()    
//sampleEnd
}
 ```
 
### Radial gradient
 
If you want to paint a shape using a radial gradient, use the `Colors.Gradient.radial()` builder.
 
 * `center`: Point, starting point of the gradient
 * `radius`: Double, radius of the gradient
 
Next you call `withColor()` given a Color and a percentage to set the base color then add any number of `ColorStop` 
using `andColor()`.
  
 ```height=200
 import io.data2viz.color.*
 import io.data2viz.geom.*
 import io.data2viz.math.*
 import io.data2viz.viz.*
  
fun main() {
    //sampleStart
    val radialGradient = Colors.Gradient.radial(Point(400.0, 100.0), 100.0)
        .withColor(Colors.Web.hotpink, .0)              // gradient start (center - 0%) with "hot pink"
        .andColor(Colors.Web.skyblue, 1.0)              // end of the gradient (100% and more) "is sky blue"
    viz {
        size = Size(800.0, 200.0)
        circle {
            x = 400.0
            y = 100.0
            radius = 100.0
            fill = radialGradient
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
  ```
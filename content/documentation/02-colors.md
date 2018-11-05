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
            fill = (Colors.Web.blueviolet)    // (1)            
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

Beside **RGB**, *data2viz* allows you to use different colors spaces to create colors: 
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
            fill = Colors.rgb(255, 0, 0, .5)                 // <- add 50% transparency
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

### Brighten

The `brighten()` function take a single `strength` parameter (defaults to 1.0) and return a new color 
with changed lightness.

```height=50
import io.data2viz.viz.*
import io.data2viz.color.*

//sampleStart
fun main() {
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
//sampleEnd
```

### Darken

The `darken()` function take a single `strength` parameter (defaults to 1.0) and return a new color 
with changed lightness.

```height=50
import io.data2viz.viz.*
import io.data2viz.color.*

//sampleStart
fun main() {
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
//sampleEnd
```

## Color gradients

Most of the data2viz visual elements accepts a `ColorOrGradient` object for defining its fill color.

A gradient is defined by giving at least 2 `ColorStop`, each corresponding to a color and its position along 
the gradient (in percentage).


### Linear gradient

A Linear gradient can be easily created using the `Colors.Gradient.linear()` builder.

 * `start`: Point, starting point of the gradient
 * `end`: Point, ending point of the gradient
 
 Next you call `withColor()` given a Color and a percentage to set the base color then add any number of `ColorStop` 
 using `andColor()`.
 
 ```height=100
 import io.data2viz.color.*
 import io.data2viz.geom.*
 import io.data2viz.math.*
 import io.data2viz.viz.*
 
 fun main() {
 
 //sampleStart
    viz {
        size = Size(800.0, 100.0)
        rect {
            width = 800.0
            height = 50.0
            fill = Colors.Gradient.linear(Point(.0, .0), Point(800.0, .0))
                .withColor(Colors.Web.hotpink)
                .andColor(Colors.Web.skyblue)
        }
        rect {
            y = 50.0
            width = 800.0
            height = 50.0
            fill = Colors.Gradient.linear(Point(.0, .0), Point(800.0, .0))
                .withColor(Colors.Web.hotpink, .20)           // gradient start (0%) with "hot pink"
                .andColor(Colors.Web.blueviolet, .5)         // middle of the gradient (50%) is "blue violet"
                .andColor(Colors.Web.skyblue, .80)
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
  
 ```height=400
 import io.data2viz.color.*
 import io.data2viz.geom.*
 import io.data2viz.math.*
 import io.data2viz.viz.*
  
fun main() {
    //sampleStart
    val myGradient = Colors.Gradient.radial(Point(400.0, 200.0), 200.0)
        .withColor(Colors.Web.hotpink, .0)           // gradient start (0%) with "hot pink"
        .andColor(Colors.Web.blueviolet, .5)         // middle of the gradient (50%) is "blue violet"
        .andColor(Colors.Web.skyblue, 1.0)           // end of the gradient (100%) "is sky blue"
    viz {
        size = Size(800.0, 400.0)
        rect {
            width  = 800.0
            height = 400.0
            fill = myGradient
        }
    }.bindRendererOnNewCanvas()
    //sampleEnd
}
  ```
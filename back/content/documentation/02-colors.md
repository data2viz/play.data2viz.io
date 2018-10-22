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
        width = 200.0
        height = 200.0
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

```height=50 from=8 to=12
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        width = 200.0
        height = 200.0
        rect {
            width = 50.0
            height = 50.0
            fill = 0x8B008B.color
        }                
    }.bindRendererOnNewCanvas()
}
```

## RGBA colors

You can also define you color from 0 to 255 Int value for red, green and blue lights.
The factory function has an additional float alpha parameter (not required) to define
the transparency. It is set by default to 1f (opaque).   

```height=50 from=8 to=18
import io.data2viz.viz.*
import io.data2viz.color.*

fun main(args:Array<String>){
    viz {
        width = 500.0
        height = 50.0
        rect {
            width = 50.0
            height = 50.0
            fill = rgba(255,0,0)
        }                
        rect {
            x = 50.0
            width = 50.0
            height = 50.0
            fill = rgba(255,0,0, .5f)
        }                   
    }.bindRendererOnNewCanvas()
}
```
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
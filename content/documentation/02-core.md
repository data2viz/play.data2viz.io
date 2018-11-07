# Core mechanisms


## Utility types

Drawing an arc on *Javascript* requires radians, but degrees on *Android*... to avoid confusion and guarantee a 
unique behavior on different platform ***data2viz*** offers some "utility types" that can be easily instantiated 
with extension properties: 

- `Angle`: *180.deg* (or *PI.rad*)
- `Percent`: *50.pct*

*Note : these utility types are located in `io.data2viz.math` so a good start is always to import this package using
a wildcard.*

 <!--- TODO simplify by removing group (just rotating the rect) when available  -->

```height=50
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.viz.*
//sampleStart
import io.data2viz.math.*                                       // gives you access to Percent and Angle

fun main() {
    viz {
        group {
            transform {
                rotate(45.deg)                                  // rotate the group by 45°
            }
            rect {
                size = Size(50.0, 50.0)
                fill = Colors.Web.crimson.withAlpha(50.pct)     // fill color is crimson, 50% alpha
            }
        }
    }.bindRendererOnNewCanvas()
}
//sampleEnd
```

## Other common types

In order to make the code more concise, several types are used for positioning (`Point`, `Vector`...), 
sizing (`Size`) or defining a zone (`Extent`), these types are located in `io.data2viz.geom` so we strongly 
recommend to star-import this package.

```height=50
import io.data2viz.color.*
import io.data2viz.math.*
import io.data2viz.viz.*
//sampleStart
import io.data2viz.geom.*                                   // gives you access to Size, Point...

fun main() {
    viz {
        
        rect {
            size = Size(100.0, 50.0)                        // this rectangle has a width of 100 and a height of 50
            fill = Colors.Web.crimson
        }
    }.bindRendererOnNewCanvas()
}
//sampleEnd
```

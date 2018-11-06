# Core mechanisms


## Utility types

To avoid confusion and guarantee a unique behavior on different platform ***data2viz*** offers some "utility types" 
that can be easily instantiated with extension properties: 

- Angle: *90.deg* or *PI.rad*
- Percent: *50.pct*

For example, drawing an arc requires radians on *Javascript* but degrees on *Android*. In data2viz you just create 
create an Angle object using the .deg or .rad extension values.

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
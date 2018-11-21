# Playground

Try the data2viz library freely.

```height=600
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.scale.*
import io.data2viz.viz.*

fun main() {
    viz {
        size = Size(748.0, 600.0)
        text {
            x = 10.0
            y = 10.0
            textContent = "Edit code and start playing!"
        }
    }.bindRendererOnNewCanvas()
}
```
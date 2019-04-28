# Contour

```height=600
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.force.*
import io.data2viz.contour.*
import kotlin.math.pow

data class Bubble(val radius:Double)
private val nbBubble = 10
private val rad = 40.0
private val radSquared = 80 * 80.0

private lateinit var bubbles:List<Bubble>
private lateinit var bubblesViz:List<CircleNode>
private lateinit var rectViz:List<RectNode>

private lateinit var simu:ForceSimulation<Bubble>
private lateinit var forceLink:ForceLink<Bubble>
    
val contourArray = Array(60 * 60, { .0 })

fun main() {
    
    bubbles = (0 until nbBubble).map { Bubble(rad) }
    
    viz {
        size = size(600, 600)  //<- you need a viz size

        simu = forceSimulation {
            forceCenter {
                center = point(300, 300)
            }
            forceLink = forceLink {
                linkGet = { if (index < nbBubble - 1) 
                    		listOf(Link<Bubble>(this, nodes[index + 1]))
                			else listOf()
                }
            }
            forceCollision {
                radiusGet = { rad }
                iterations = 10
            }
            
            domainObjects = bubbles
        }
        
        bubblesViz = (0 until nbBubble).map { 
        	circle {
                fill = Colors.Web.blue.withAlpha(30.pct)
                radius = 60.0
            }
        }
        
        rectViz = (0 until 60*60).map { 
        	rect {
                x = (it % 60) * 10.0
                y = (it / 60) * 10.0
                size = size(10, 10)
            }
        }
        
        
        animation {
            (0 until 60).forEach { x ->
            	(0 until 60).forEach { y ->
            		var count = 0
                    simu.nodes.forEach { node ->
                        val xDiff = (x * 10 - node.x).pow(2.0)
                        val yDiff = (y * 10 - node.y).pow(2.0)
                    	val distanceSquared = xDiff + yDiff
                        if (distanceSquared <= radSquared) count++
                    }
                    contourArray[x + (y * 60)] = count.toDouble()
                    rectViz[y * 60 + x].fill = Colors.Web.blue.withAlpha((count * 10).pct)
            	}
            }
//             val contours = contour {
//             	size(60, 60)
//         	}
            //val contoursList = contours.contours(contourArray)
            
            /*simu.nodes.forEach { node ->
                bubblesViz[node.index].x = node.x
                bubblesViz[node.index].y = node.y
            }*/
        }
        
    }.bindRendererOnNewCanvas()
}
```
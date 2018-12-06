# Random numbers

Data2viz offers several random numbers generators, you can access using the `RandomDistribution.*` 
factories.  
To use these random numbers distribution, import the `io.data2viz.random` dependency and use the 
`io.data2viz.random.*` import.

| Factory<br/>RandomDistribution.* |  Distribution of random numbers|
|---|---|
| [uniform(min, max)](#standard-uniform) | Continuous uniform distribution |
| [normal(mu, sigma)](#normal) | Normal (gaussian) distribution |
| [logNormal(mu, sigma)](#log-normal) | Log-normal distribution |
| [exponential(lambda)](#exponential) | Exponential distribution |
| [irwinHall(n)](#irwin-hall) | Irwin–Hall distribution |
| [bates(n)](#bates) | Bates distribution |

<div class="note">

`RandomDistribution.uniform` is the "standard" number generator.
</div>


## Standard (uniform)

The `RandomDistribution.uniform(min, max)` generates random numbers using an [uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution_(continuous)).  

Numbers generated are greater or equals to `min` and less than `max`.  
Default `min` is 0.0, default `max` is 1.0, so default range is [0, 1[

```height=100
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.random.*

fun main() {
    viz {
        size = size(620, 100) 
        (0..600 step 50).forEach {
            text {
                x = 10.0 + it
                y = 94.0
                textContent = "$it"
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            }
        }
        //sampleStart
        val generator = RandomDistribution.uniform(max = 600.0)
        val groupCount = (0..30000).map { generator().toInt() }.groupingBy { it }.eachCount()
        groupCount.forEach { valueCount ->
            rect {
                y = 85.0 - valueCount.value
                x = 10.0 + valueCount.key
                size = size(1, valueCount.value)
                fill = Colors.Web.crimson
            }
        } //sampleEnd
    }.bindRendererOnNewCanvas()
}
```

## Other distributions

### Normal

The `RandomDistribution.normal(mu, sigma)` generates random numbers using a [normal (Gaussian) distribution](https://en.wikipedia.org/wiki/Normal_distribution).

The expected value of the generated numbers is `mu` (default 0.0), with the given standard 
deviation `sigma` (default 1.0).

```height=100
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.random.*

fun main() {
    viz {
        size = size(620, 100) 
        (0..600 step 50).forEach {
            text {
                x = 10.0 + it
                y = 94.0
                textContent = "$it"
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            }
        }
        //sampleStart
        val generator = RandomDistribution.normal(300.0, 50.0)
        val groupCount = (0..10000).map { generator().toInt() }.groupingBy { it }.eachCount()
        size = size(620, 100) 
        groupCount.forEach { valueCount ->
                rect {
                    y = 85.0 - valueCount.value
                    x = 10.0 + valueCount.key
                    size = size(1, valueCount.value)
                    fill = Colors.Web.crimson
                }
        } //sampleEnd
    }.bindRendererOnNewCanvas()
}
```

### Log-Normal

The `RandomDistribution.logNormal(mu, sigma)` generates random numbers using a [log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).

The expected value of the random variable’s natural logarithm is `mu` (defaults to 0.0), with the given 
standard deviation `sigma` (defaults to 1.0)

```height=100
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.random.*

fun main() {
    viz {
        size = size(620, 100) 
        (0..600 step 60).forEach {
            text {
                x = 10.0 + it
                y = 94.0
                textContent = "${(it / 3.0).toInt() / 100.0}"
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            }
        }
        //sampleStart
        val generator = RandomDistribution.logNormal(sigma = 0.25)
        val groupCount = (0..8000).map { generator() }.groupingBy { (it * 300).toInt() }.eachCount()
        size = size(620, 100) 
        groupCount.forEach { valueCount ->
                rect {
                    y = 85.0 - valueCount.value
                    x = 10.0 + valueCount.key
                    size = size(1, valueCount.value)
                    fill = Colors.Web.crimson
                }
        } //sampleEnd
    }.bindRendererOnNewCanvas()
}
```

### Exponential

The `RandomDistribution.exponential(lambda)` generates random numbers using an [exponential distribution](https://en.wikipedia.org/wiki/Exponential_distribution).

This generates random numbers with an exponential distribution with the rate `lambda` (defaults to 1.0) 
equivalent to time between events in a Poisson process with a mean of 1&nbsp;/&nbsp;lambda.

```height=100
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.random.*

fun main() {
    viz {
        size = size(620, 100) 
        (0..600 step 60).forEach {
            text {
                x = 10.0 + it
                y = 94.0
                textContent = "${(it / 60.0).toInt()}"
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            }
        }
        //sampleStart
        val generator = RandomDistribution.exponential()
        val groupCount = (0..4000).map { generator() }.groupingBy { (it * 60).toInt() }.eachCount()
        size = size(620, 100) 
        groupCount.forEach { valueCount ->
                rect {
                    y = 85.0 - valueCount.value
                    x = 10.0 + valueCount.key
                    size = size(1, valueCount.value)
                    fill = Colors.Web.crimson
                }
        } //sampleEnd
    }.bindRendererOnNewCanvas()
}
```

### Irwin-Hall

The `RandomDistribution.irwinHall(n)` generates random numbers using an [Irwin-Hall distribution](https://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution) 
with `n` independent variables.

```height=100
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.random.*

fun main() {
    viz {
        size = size(620, 100) 
        (0..600 step 60).forEach {
            text {
                x = 10.0 + it
                y = 94.0
                textContent = "${(it / 60.0).toInt()}"
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            }
        }
        //sampleStart
        val generator = RandomDistribution.irwinHall(8.0)
        val groupCount = (0..8000).map { generator() }.groupingBy { (it * 60).toInt() }.eachCount()
        size = size(620, 100) 
        groupCount.forEach { valueCount ->
                rect {
                    y = 85.0 - valueCount.value
                    x = 10.0 + valueCount.key
                    size = size(1, valueCount.value)
                    fill = Colors.Web.crimson
                }
        } //sampleEnd
    }.bindRendererOnNewCanvas()
}
```

### Bates

The `RandomDistribution.bates(n)` generates random numbers using a [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution)
with `n` independent variables (1.0 by default).

```height=100
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.viz.*
import io.data2viz.random.*

fun main() {
    viz {
        size = size(620, 100) 
        (0..600 step 60).forEach {
            text {
                x = 10.0 + it
                y = 94.0
                textContent = "${(it / 6.0).toInt() / 100.0}"
                fill = Colors.Web.black
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            }
        }
        //sampleStart
        val generator = RandomDistribution.bates(10.0)
        val groupCount = (0..8000).map { generator() }.groupingBy { (it * 600).toInt() }.eachCount()
        groupCount.forEach { valueCount ->
                rect {
                    y = 85.0 - valueCount.value
                    x = 10.0 + valueCount.key
                    size = size(1, valueCount.value)
                    fill = Colors.Web.crimson
                }
        }  //sampleEnd
    }.bindRendererOnNewCanvas()
}
```
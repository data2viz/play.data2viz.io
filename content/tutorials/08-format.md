# Text Formatting and Alignment 

Along with alignment properties, data2viz provides some functions to format numbers and dates into easy to read texts:

- [Format Number](#format_number)
- [Format Time](#format_time)

## Format Number

You can format numbers by using `io.data2viz.format.formatter`, these are some sample formatting:

```
//sampleStart
//sampleEnd
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.format.*

data class ShowFormat(val name:String, val spec:FormatSpec)

fun main() {
    val startNumbers = listOf(0.0, 0.0001, 1000.0)
    val steps = listOf(1.0, 0.0005, 100.0)

    val formats = listOf(
            ShowFormat("No formatting", FormatSpec()),
            ShowFormat("Decimal rounded to integer", FormatSpec(type = Type.DECIMAL_ROUNDED, precision = 2, groupSeparation = true)),
            ShowFormat("Decimal with SI prefix", FormatSpec(type = Type.DECIMAL_WITH_SI, precision = 2)),
            ShowFormat("Exponent notation", FormatSpec(type = Type.EXPONENT, precision = 2, align = Align.LEFT, width = 8)),
            ShowFormat("Decimal or exponent smart-format", FormatSpec(type = Type.DECIMAL_OR_EXPONENT, precision = 2, align = Align.CENTER, width = 8)),
            ShowFormat("Fixed point", FormatSpec(type = Type.FIXED_POINT, precision = 2)),
            ShowFormat("Percent, 2 significant digits", FormatSpec(type = Type.PERCENT_ROUNDED, precision = 2)),
            ShowFormat("Binary", FormatSpec(type = Type.BINARY, precision = 2)),
            ShowFormat("Hexadecimal", FormatSpec(type = Type.HEX_UPPERCASE, precision = 2)),
            ShowFormat("Currency (integer value)", FormatSpec(type = Type.DECIMAL_ROUNDED, groupSeparation = true, symbol = Symbol.CURRENCY))
    )

    val cellWidths = listOf(200.0, 120.0, 120.0, 120.0)
    val cellHeight = 30.0

    var secondsCounter = 0

    val scale = ScalesChromatic.Discrete.category10<Double> { domain = startNumbers }
    val startYOffset = 15.0

    val tableRows = formats.size + 1
    val tableColumns = startNumbers.size + 1

    val vizWidth = cellWidths.sum()
    val vizHeight = (formats.size + 1) * cellHeight
    
    viz {
        size = size(vizWidth, vizHeight)

        text {
            x = 100.0
            y = startYOffset
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            textContent = "Formatting"
        }

        for (i in 0..tableRows) {
            line {
                x1 = 0.0
                x2 = vizWidth
                y1 = i * cellHeight - 1
                y2 = i * cellHeight - 1
            }
        }

        for (i in 0..tableColumns) {
            line {
                x1 = cellWidths.subList(0, i).sum() - 1
                x2 = cellWidths.subList(0, i).sum() - 1
                y1 = 0.0
                y2 = vizHeight
            }
        }
        
        line {
            x1 = vizWidth - 1
            x2 = vizWidth - 1
            y1 = 0.0
            y2 = vizHeight
        }

        startNumbers.forEachIndexed { numberIndex, startNumber ->
            text {
                x = 60.0 + cellWidths.subList(0, numberIndex + 1).sum()
                y = startYOffset
                textColor = scale(startNumber)
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "Number"
            }
        }

        val columns = startNumbers.mapIndexed { numberIndex, number ->
            formats.mapIndexed { formatIndex, format ->
                text {
                    x = 100.0
                    y = startYOffset + (formatIndex + 1) * cellHeight
                    textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                    textContent = "${format.name}"
                }
                text {
                    x = 60.0 + cellWidths.subList(0, numberIndex + 1).sum()
                    y = startYOffset + (formatIndex + 1) * cellHeight
                    textColor = scale(number)
                    textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                    textContent = formatter(format.spec.toString())(number)
                }
            }
        }

        animation { timerInMs: Double ->
            // update one time per second
            if (timerInMs / 1000 > secondsCounter) {
                secondsCounter++
                startNumbers.forEachIndexed { index, startNumber ->
                    columns[index].forEachIndexed { rowIndex, text ->
                        text.textContent = formatter(formats[rowIndex].spec.toString())(startNumber + steps[index] * secondsCounter)
                    }
                }
            }
        }
    }.bindRendererOnNewCanvas()
}
```

Just create an instance of your formatter `val myFormat = formatter(type = Type.EXPONENT)` then format numbers 
using `myFormat(1000000.0)`.

The formatter can be created using several parameters: 

- `type`: the type of the formatter `EXPONENT`, `PERCENT`, `BINARY`, `DECIMAL`...
- `symbol`: the symbol used for currency
- `align`, `width` and `fill` are used to pad numbers and align them consistently
- ...

For example, to create an integer, comma-separated, currency formatting you can use  
`formatter(type = Type.DECIMAL_ROUNDED, groupSeparation = true, symbol = Symbol.CURRENCY)`

<div class="note">

You can use pre-specified formats or describe it using [Python 3’s format specification mini-language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
([reference PEP 3101](https://www.python.org/dev/peps/pep-3101/)).
</div>

```
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.format.*
import io.data2viz.axis.*

fun main() {
    val vizWidth = 600.0
    val vizHeight = 100.0
    val margin = 40.0

    val startNumber = 0
    val endNumber = 20000000
    val tickStep = 32132
    var counter = 0

    val scale = Scales.Continuous.linear {
        domain = listOf(startNumber.toDouble(), endNumber.toDouble())
        range = listOf(margin, vizWidth - margin)
    }
    
    //sampleStart
    // use smart exponent formatting for axis ticks
    // this is equivalent to formatter(".2g")
    val axisFormatter = formatter(type = Type.DECIMAL_OR_EXPONENT, precision = 2)
    
    // use thousand separator formatting for displayed value
    // this is equivalent to formatter(",")
    val numberFormatter = formatter(group = true) //sampleEnd

    viz {
        size = size(vizWidth, vizHeight)

        group {
            transform {
                translate(.0, 40.0)
            }
            axis(Orient.BOTTOM, scale) {
            	tickFormat = axisFormatter
        	}
        }

        val tickLine = line {
            strokeWidth = 2.0
            stroke = Colors.Web.black
            y1 = 25.0
            y2 = 40.0
        }
        val tickText = text {
            y = 15.0
            strokeWidth = 2.0
            fill = Colors.Web.black
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
        }
        
        animation {
            counter = (counter + tickStep) % endNumber
            val currentX = scale(counter)
            tickLine.x1 = currentX
            tickLine.x2 = currentX
            tickText.x = currentX
            tickText.textContent = "${numberFormatter(counter.toDouble())}"
        }
    }.bindRendererOnNewCanvas()
}
```

## Format Time

You can format date and time by using `io.data2viz.timeFormat.format`:

- Create format instance `val myFormat = format("%-m/%-d/%Y")`
- Format date `myFormat(Date())`

Package `io.data2viz.time ` provides classes, objects & functions for date and time.
For example:

- Function `Interval.offset(date, step): Date` can be used for creating new date with given offset. `Day().offset(Date(), 5)` will return current date plus 5 days
- Package contains all date / time intervals like `Day`, `Month`, `Week` etc. Each class have helper object, for example `timeDay.offset` is equal to `Day().offset`

### Time axys formatting

[Sketch and live demo](https://beta.data2viz.io/yevhenii.zapletin/sketches/BGLKxY/edit/)

```
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.time.*
import io.data2viz.timeFormat.*

fun main() {
    val vizWidth = 600.0
    val vizHeight = 100.0
    val margin = 40.0

    val startDate = date(2000, 1, 1)
    val endDate = date(2021, 1, 1)

    val dates = timeYear.range(startDate, endDate, step = 2)

    val scale = Scales.Continuous.time {
        domain = listOf(startDate, endDate)
        range = listOf(margin, vizWidth - margin)
    }

    var counter = startDate
    viz {


        size = size(vizWidth, vizHeight)  //<- you need a viz size

        line {
            x1 = margin
            x2 = vizWidth - margin
            y1 = vizHeight / 2
            y2 = vizHeight / 2
        }

        val tickLine = line {
            strokeWidth = 2.0
            stroke = Colors.Web.black
            y1 = vizHeight * 0.5
            y2 = vizHeight * 0.6
        }
        val tickText = text {
            y = vizHeight * 0.7
            strokeWidth = 2.0
            fill = Colors.Web.black
            fontSize = 10.0
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
        }
        val tickDaysText = text {
            y = vizHeight * 0.8
            strokeWidth = 2.0
            fill = Colors.Web.black
            fontSize = 10.0
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
        }

        dates.forEach {
            line {
                x1 = scale(it)
                y1 = vizHeight * 0.4
                x2 = scale(it)
                y2 = vizHeight * 0.5
                strokeWidth = 2.0
                stroke = Colors.Web.black
            }
            text {
                x = scale(it)
                y = vizHeight * 0.3
                fill = Colors.Web.black
                fontSize = 10.0
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = format("%-m/%-d/%Y")(it)
            }
        }
        animation {
            counter = timeDay.offset(counter, step = 3)
            val currentX = scale(counter)
            tickLine.x1 = currentX
            tickLine.x2 = currentX
            tickText.x = currentX
            tickText.textContent = format("%B %Y")(counter)
            
            tickDaysText.x = currentX
            tickDaysText.textContent = "Days from start: ${timeDay.count(startDate, counter)}"
            
            if(endDate.isBefore(counter)) {
                counter = startDate
            }
        }
    }.bindRendererOnNewCanvas()
}
```

### Time formats table
[Sketch and live demo](https://beta.data2viz.io/yevhenii.zapletin/sketches/ypLAxg/edit)

```
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.scale.*
import io.data2viz.viz.*
import io.data2viz.time.*
import io.data2viz.timeFormat.*

fun main() {
	val startDates = listOf(Date(), Date(), Date(), Date())
    val steps = listOf(timeMillisecond, timeHour, timeDay, timeMonth)

    val formats = listOf(
            "%L", // milliseconds
            "%H:%M:%S",
            "%d:%m:%Y",
            "%x, %X",
            "%-m/%-d/%Y",
            "%-I:%M:%S %p",
            "%a", // Weekday
            "%B", // Month
            "%Z" // Month
    )

    val cellWidth = 140.0
    val cellHeight = 50.0

    var secondsCounter = 0

    // this scale map names of the days (as String) to colors
    val scale = ScalesChromatic.Discrete.category10<Date> { domain = startDates }
    val startXOffset = cellWidth / 2
    val startYOffset = 25.0

    val tableRows = formats.size + 1
    val tableColumns = startDates.size + 1

    val vizWidth = (startDates.size + 1) * cellWidth
    val vizHeight = (formats.size + 1) * cellHeight
    val viz = viz {
        size = size(vizWidth, vizHeight)

        text {
            x = startXOffset
            y = startYOffset
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
            textContent = "Format"
        }

        for (i in 0..tableRows) {
            line {
                x1 = 0.0
                x2 = vizWidth
                y1 = i * cellHeight - 1
                y2 = i * cellHeight - 1
            }
        }

        for (i in 0..tableColumns) {
            line {
                x1 = i * cellWidth - 1
                x2 = i * cellWidth - 1
                y1 = 0.0
                y2 = vizHeight
            }
        }


        line {
            x1 = vizWidth - 1
            x2 = vizWidth - 1
            y1 = 0.0
            y2 = vizHeight
        }


        startDates.forEachIndexed { dateIndex, startDate ->
            text {
                x = startXOffset + (dateIndex + 1) * cellWidth
                y = startYOffset
                textColor = scale(startDate)
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "Date"
            }


        }


        val columns =
                startDates.mapIndexed { dateIndex, date ->
                    formats.mapIndexed { formatIndex, formatSpec ->
                        text {
                            x = startXOffset
                            y = startYOffset + (formatIndex + 1) * cellHeight
                            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                            textContent = "$formatSpec"
                        }
                        text {
                            x = startXOffset + (dateIndex + 1) * cellWidth
                            y = startYOffset + (formatIndex + 1) * cellHeight
                            textColor = scale(date)
                            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                            textContent = format(formatSpec)(date)
                        }
                    }
                }


        animation { timerInMs: Double ->
            // update one time per second
            if (timerInMs / 1000 > secondsCounter) {
                secondsCounter++
                startDates.forEachIndexed { index, startDate ->
                    columns[index].forEachIndexed { rowIndex, text ->
                        text.textContent = format(formats[rowIndex])(steps[index].offset(startDate, secondsCounter.toLong()))
                    }
                }
            }
        }
    }.bindRendererOnNewCanvas()
}
```
# Number and Time Formatting

Data2viz provides several functions to format numbers and dates:

- [Format Number](#format_number)
- [Format Time](#format_time)

## Format Number

You can format numbers by using `io.data2viz.format.formatter`, these are some sample formatting:

```height=300
//sampleStart //sampleEnd
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.format.*

data class Formatting(val name:String, val spec:FormatSpec)
val formats = listOf(
        Formatting("Raw number (no formatting)", FormatSpec()),
        Formatting("Decimal rounded to integer", FormatSpec(type = Type.DECIMAL_ROUNDED, precision = 2, groupSeparation = true)),
        Formatting("Decimal with SI prefix", FormatSpec(type = Type.DECIMAL_WITH_SI, precision = 2)),
        Formatting("Exponent notation", FormatSpec(type = Type.EXPONENT, precision = 2, align = Align.LEFT, width = 8)),
        Formatting("Use exponent when needed", FormatSpec(type = Type.DECIMAL_OR_EXPONENT, precision = 2, align = Align.CENTER, width = 8)),
        Formatting("Fixed point", FormatSpec(type = Type.FIXED_POINT, precision = 2)),
        Formatting("Percent, 2 significant digits", FormatSpec(type = Type.PERCENT_ROUNDED, precision = 2)),
        Formatting("Binary", FormatSpec(type = Type.BINARY, precision = 2)),
        Formatting("Hexadecimal", FormatSpec(type = Type.HEX_UPPERCASE, precision = 2)),
        Formatting("Currency (integer value)", FormatSpec(type = Type.DECIMAL_ROUNDED, groupSeparation = true, symbol = Symbol.CURRENCY))
)

val startNumbers = listOf(0.0, 0.0001, 1000.0)
val steps = listOf(1.0, 0.0005, 100.0)
var secondsCounter = 0

val cellWidths = listOf(200.0, 120.0, 120.0, 120.0)
val cellHeight = 30.0

val scale = ScalesChromatic.Discrete.category10<Double> { domain = startNumbers }
val startYOffset = 15.0

val tableRows = formats.size
val tableColumns = startNumbers.size + 1

val vizWidth = cellWidths.sum()
val vizHeight = (formats.size) * cellHeight

fun main() {
    
    viz {
        size = size(vizWidth, vizHeight)
        
        drawTable(this);
        
        // VALUES IN COLUMNS
        val columns = startNumbers.mapIndexed { numberIndex, number ->
            formats.mapIndexed { formatIndex, format ->
                text {
                    x = 60.0 + cellWidths.subList(0, numberIndex + 1).sum()
                    y = startYOffset + (formatIndex * cellHeight)
                    textColor = scale(number)
                    textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                    textContent = formatter(format.spec.toString())(number)
                }
            }
        }

        // update values every second
        animation { timerInMs: Double ->
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

private fun drawTable(viz:Viz) {
    viz.apply {
    
        // TABLE LAYOUT
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

        // ROW HEADERS
        formats.mapIndexed { formatIndex, format ->
            text {
                x = 100.0
                y = startYOffset + (formatIndex * cellHeight)
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "${format.name}"
                fontWeight = FontWeight.BOLD
            }
        }
    }
}
```

Just create an instance of your formatter  
`val myFormat = formatter(type = Type.EXPONENT)`  
then format numbers using `myFormat(myDoubleValue)`.

The formatter can be created using several parameters: 

- `type`: the type of the formatter `EXPONENT`, `PERCENT`, `BINARY`, `DECIMAL`...
- `symbol`: the symbol used for currency
- `group`: use thousand-separators true/false
- `align`, `width` and `fill` are used to pad numbers and align them consistently
- ...

For example, to create an integer, comma-separated, currency formatting you can use  
``formatter(   
    type = Type.DECIMAL_ROUNDED,   
    groupSeparation = true,   
    symbol = Symbol.CURRENCY 
)``

<div class="note">

You can use pre-specified formats or describe it using [Python 3’s format specification mini-language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
([reference PEP 3101](https://www.python.org/dev/peps/pep-3101/)).
</div>

```height=60
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.format.*
import io.data2viz.axis.*

fun main() {
    val vizWidth = 600.0
    val vizHeight = 60.0
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

You can format date and time by using `io.data2viz.timeFormat.format`.

Just create an instance of your formatter `val myFormat = format(formatSpecifier)` where `formatSpecifier` is a String 
used for encoding your date object, then format dates using `myFormat(myDateValue)`.

<div class="note">

The format reference is the same as in [the standard C library](http://pubs.opengroup.org/onlinepubs/009695399/functions/strptime.html).
</div>

These are some sample formats with their specifier:

```height=240
//sampleStart //sampleEnd
import io.data2viz.color.*
import io.data2viz.geom.*
import io.data2viz.math.*
import io.data2viz.scale.*
import io.data2viz.viz.*
import io.data2viz.time.*
import io.data2viz.timeFormat.*

data class Formatting(val name:String, val spec:String)
val formats = listOf(
    Formatting("Raw date", "%d.%m.%Y, %H:%M:%S"),
    Formatting("Hour:Minute:Second", "%H:%M:%S"),
    Formatting("Day.Month.Year", "%d.%m.%Y"),
    Formatting("Locale date, locale time", "%x, %X"),
    Formatting("Month/Day/Year", "%-m/%-d/%Y"),
    Formatting("AM / PM indicator", "%-I:%M:%S %p"),
    Formatting("Abbreviated weekday name", "%a"),
    Formatting("Full month name", "%B")
)

val startDates = listOf(Date(), Date(), Date())
val steps = listOf(timeSecond, timeHour, timeDay)
var secondsCounter = 0

val cellWidths = listOf(180.0, 140.0, 140.0, 140.0, 140.0)
val cellHeight = 30.0

val scale = ScalesChromatic.Discrete.category10<Date> { domain = startDates }
val startYOffset = 15.0

val tableRows = formats.size
val tableColumns = startDates.size + 2

val vizWidth = cellWidths.sum()
val vizHeight = (formats.size) * cellHeight

fun main() {

    viz {
        size = size(vizWidth, vizHeight)

        drawTable(this)

        val columns = startDates.mapIndexed { dateIndex, date ->
            formats.mapIndexed { formatIndex, formatSpec ->
                text {
                    x = 70.0 + cellWidths.subList(0, dateIndex + 2).sum()
                    y = startYOffset + (formatIndex * cellHeight)
                    textColor = scale(date)
                    textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                    textContent = format(formatSpec.spec)(date)
                }
            }
        }

        animation { timerInMs: Double ->
            // update one time per second
            if (timerInMs / 1000 > secondsCounter) {
                secondsCounter++
                startDates.forEachIndexed { index, startDate ->
                    columns[index].forEachIndexed { rowIndex, text ->
                        text.textContent = format(formats[rowIndex].spec)(steps[index].offset(startDate, secondsCounter.toLong()))
                    }
                }
            }
        }
    }.bindRendererOnNewCanvas()
}

private fun drawTable(viz:Viz) {
    viz.apply {
    
        // TABLE LAYOUT
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

        // ROW HEADERS
        formats.mapIndexed { formatIndex, format ->
            text {
                x = 90.0
                y = startYOffset + (formatIndex * cellHeight)
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "${format.name}"
                fontWeight = FontWeight.BOLD
            }
            text {
                x = 250.0
                y = startYOffset + (formatIndex * cellHeight)
                textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
                textContent = "${format.spec}"
            }
        }
    }
}
```

Below is a simple example with 2 formatters, one used for the axis and one for the cursor value.

```height=60
import io.data2viz.color.*
import io.data2viz.scale.*
import io.data2viz.math.*
import io.data2viz.geom.*
import io.data2viz.viz.*
import io.data2viz.time.*
import io.data2viz.timeFormat.*
import io.data2viz.axis.*

fun main() {
    val vizWidth = 600.0
    val vizHeight = 60.0
    val margin = 40.0

    val startDate = date(2004, 1, 1)
    val endDate = date(2020, 1, 1)
    var counter = startDate

    val scale = Scales.Continuous.time {
        domain = listOf(startDate, endDate)
        range = listOf(margin, vizWidth - margin)
    }
    
    //sampleStart
    // only display "year values" on axis ticks
    val axisFormatter = format("%Y")
    
    // display "full month" and "year value" on date cursor
    val dateFormatter = format("%B %Y") //sampleEnd

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
            y1 = 28.0
            y2 = 40.0
        }
        val tickText = text {
            y = 10.0
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
        }
        val tickDaysText = text {
            y = 20.0
            fontSize = 10.0
            textAlign = textAlign(TextHAlign.MIDDLE, TextVAlign.MIDDLE)
        }
        
        animation {
            counter = timeDay.offset(counter, step = 3)
            if(endDate.isBefore(counter)) {
                counter = startDate
            }
            val currentX = scale(counter)
            tickLine.x1 = currentX
            tickLine.x2 = currentX
            tickText.x = currentX
            tickText.textContent = "${dateFormatter(counter)}"
            tickDaysText.x = currentX
            tickDaysText.textContent = "Days from start: ${timeDay.count(startDate, counter)}"
        }
    }.bindRendererOnNewCanvas()
}
```
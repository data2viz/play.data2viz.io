package io.data2viz.play

import org.commonmark.node.*
import org.commonmark.parser.Parser
import org.commonmark.renderer.NodeRenderer
import org.commonmark.renderer.html.HtmlNodeRendererContext
import org.commonmark.renderer.html.HtmlRenderer
import org.commonmark.renderer.html.HtmlWriter


const val data2vizVersion = "0.7.1-RC2"

val parser = Parser.builder().build()!!
val renderer = HtmlRenderer.builder()
    .nodeRendererFactory { Data2vizCodeBlockNodeRenderer(it!!) }
    .build()!!


class Data2vizCodeBlockNodeRenderer(context: HtmlNodeRendererContext) : NodeRenderer {

    private val html: HtmlWriter = context.writer

    override fun getNodeTypes(): Set<Class<out Node>> = setOf(
        FencedCodeBlock::class.java,
        IndentedCodeBlock::class.java
    )

    override fun render(node: Node) {

        when (node){
            is IndentedCodeBlock -> {
                html.line()
                html.tag("div", d2vAttributes)
                html.text(node.literal)
                html.tag("/div")
                html.line()
            }
            is FencedCodeBlock -> {
                html.line()
                html.tag("div", playGroundSpecificAttributes(node.info))
                html.text(node.literal)
                html.tag("/div")
                html.line()
            }

            else -> error("unknown type:: ${node.javaClass}")
        }

    }
}

fun playGroundSpecificAttributes(info:String): Map<String, String> {
    var allAttributes = d2vAttributes

    parseHeight(info).let { allAttributes += ("data-output-height" to "$it") }
    parseFrom(info).let { allAttributes += ("from" to "$it") }
    parseTo(info).let { allAttributes += ("to" to "$it") }

    return allAttributes
}

private val heightRegex = "height=(\\d+)".toRegex()
fun parseHeight(info: String):Int? = heightRegex.find(info)?.groupValues?.get(1)?.toInt()

private val fromRegex = "from=(\\d+)".toRegex()
fun parseFrom(info: String):Int? = fromRegex.find(info)?.groupValues?.get(1)?.toInt()

private val toRegex = "to=(\\d+)".toRegex()
fun parseTo(info: String):Int? = toRegex.find(info)?.groupValues?.get(1)?.toInt()


val d2vAttributes = mapOf(
    "data-output-height" to "200",
    "class" to "kotlin-code d2v-large",
    "data-target-platform" to "canvas",
    "lines" to "true",
    "data-js-libs" to "https://unpkg.com/@data2viz/data2viz@$data2vizVersion/kotlin.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-core-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-color-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-path-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-timer-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-viz-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-interpolate-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-time-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-scale-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-format-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-timeFormat-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-axis-js.js,https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-shape-js.js"
)

data class Title(val level:Int, val content:String)


class TitleVisitor: AbstractVisitor() {

    val titles = mutableListOf<Title>()

    override fun visit(heading: Heading?) {
        heading?.let {
            titles += Title(heading.level, (heading.firstChild as Text).literal)
        }
    }
}
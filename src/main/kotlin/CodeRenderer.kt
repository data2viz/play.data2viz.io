package io.data2viz.play

import org.commonmark.ext.heading.anchor.HeadingAnchorExtension
import org.commonmark.ext.gfm.tables.TablesExtension
import org.commonmark.node.*
import org.commonmark.parser.Parser
import org.commonmark.renderer.html.CoreHtmlNodeRenderer
import org.commonmark.renderer.html.HtmlNodeRendererContext
import org.commonmark.renderer.html.HtmlRenderer
import org.commonmark.renderer.html.HtmlWriter


const val data2vizVersion = "0.7.1-RC3"

val extensions = listOf(HeadingAnchorExtension.create(), TablesExtension.create())

val parser = Parser.builder()
    .extensions(extensions)
    .build()!!

val renderer = HtmlRenderer.builder()
    .extensions(extensions)
    .nodeRendererFactory { Data2vizCodeBlockNodeRenderer(it!!) }
    .build()!!


class Data2vizCodeBlockNodeRenderer(context: HtmlNodeRendererContext) : CoreHtmlNodeRenderer(context) {

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


val d2vModules = listOf("core", "color", "timer", "viz",
    "interpolate", "time", "scale",
    "format", "timeFormat", "axis", "shape")
    .map { "https://unpkg.com/@data2viz/data2viz@$data2vizVersion/d2v-$it-js.js" }
    .joinToString()

val d2vAttributes = mapOf(
    "theme" to "idea",
    "data-output-height" to "100",
    "class" to "kotlin-code d2v-large",
    "data-target-platform" to "canvas",
    "lines" to "true",
    "data-js-libs" to d2vModules
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
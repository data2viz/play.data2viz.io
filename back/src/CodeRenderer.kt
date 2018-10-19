package io.data2viz.play

import org.commonmark.node.Code
import org.commonmark.node.FencedCodeBlock
import org.commonmark.node.IndentedCodeBlock
import org.commonmark.node.Node
import org.commonmark.parser.Parser
import org.commonmark.renderer.NodeRenderer
import org.commonmark.renderer.html.HtmlNodeRendererContext
import org.commonmark.renderer.html.HtmlNodeRendererFactory
import org.commonmark.renderer.html.HtmlRenderer
import org.commonmark.renderer.html.HtmlWriter


val codeNodeFactory: HtmlNodeRendererFactory = (object: HtmlNodeRendererFactory {
    override fun create(context: HtmlNodeRendererContext?): NodeRenderer {
        return Data2vizCodeBlockNodeRenderer(context!!)
    }
})

val parser = Parser.builder().build()
val renderer = HtmlRenderer.builder()
    .nodeRendererFactory(codeNodeFactory)
    .build()


class Data2vizCodeBlockNodeRenderer(context: HtmlNodeRendererContext) : NodeRenderer {

    private val html: HtmlWriter = context.writer

    override fun getNodeTypes(): Set<Class<out Node>> = setOf(
        FencedCodeBlock::class.java,
        IndentedCodeBlock::class.java,
        Code::class.java
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
                html.tag("div", attributesWithHeight(node.info))
                html.text(node.literal)
                html.tag("/div")
                html.line()
            }

            else -> error("unknown type:: ${node.javaClass}")
        }

    }
}

fun attributesWithHeight(info:String): Map<String, String> {
    val parseHeight = parseHeight(info)
    return if (parseHeight != null)
        d2vAttributes + ("data-output-height" to "$parseHeight")
    else
        d2vAttributes
}

val regex = "height=(\\d+)".toRegex()

fun parseHeight(info: String):Int? {
    return regex.find(info)?.groupValues?.get(1)?.toInt()
}

val d2vAttributes = mapOf(
    "data-output-height" to "200",
    "class" to "kotlin-code d2v-large",
    "data-target-platform" to "canvas",
    "lines" to "true",
    "data-js-libs" to "https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/kotlin.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-core-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-color-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-path-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-timer-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-viz-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-interpolate-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-time-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-scale-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-format-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-timeFormat-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-axis-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-shape-js.js"
)
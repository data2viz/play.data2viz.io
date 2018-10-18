package io.data2viz.play

import org.commonmark.node.IndentedCodeBlock
import org.commonmark.node.Node
import org.commonmark.parser.Parser
import org.commonmark.renderer.NodeRenderer
import org.commonmark.renderer.html.HtmlNodeRendererContext
import org.commonmark.renderer.html.HtmlRenderer
import org.commonmark.renderer.html.HtmlWriter
import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader
import java.util.*


class Documentation {

	val mdFiles = getResourceFiles("documentation")

	val parser = Parser.builder().build()
	val renderer = HtmlRenderer.builder()
		.nodeRendererFactory { context -> IndentedCodeBlockNodeRenderer(context) }
		.build()

	fun html(docFile: String): String {
		val content = getResourceAsStream("documentation/$docFile")
			.bufferedReader()
			.use { it.readText() }

		val document = parser.parse(content)
		return renderer.render(document)
	}

	@Throws(IOException::class)
	private fun getResourceFiles(path: String): List<String> {
		val filenames = ArrayList<String>()
		getResourceAsStream(path).use {
			BufferedReader(InputStreamReader(it)).use { br ->
				br.lines().forEach{ line ->
					filenames.add(line)
				}
			}
		}
		return filenames
	}

	private fun getResourceAsStream(resource: String): InputStream =
		getContextClassLoader().getResourceAsStream(resource) ?: javaClass.getResourceAsStream(resource)

	private fun getContextClassLoader(): ClassLoader = Thread.currentThread().contextClassLoader

}

internal class IndentedCodeBlockNodeRenderer(context: HtmlNodeRendererContext) : NodeRenderer {

	private val html: HtmlWriter = context.writer

	override fun getNodeTypes(): Set<Class<out Node>> {
		// Return the node types we want to use this renderer for.
		return Collections.singleton(IndentedCodeBlock::class.java)
	}

	override fun render(node: Node) {
		// We only handle one type as per getNodeTypes, so we can just cast it here.
		val codeBlock = node as IndentedCodeBlock
		html.line()
		html.tag("pre")
		html.text(codeBlock.literal)
		html.tag("/pre")
		html.line()
	}
}



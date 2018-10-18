package io.data2viz.play

import kotlinx.html.*
import kotlinx.html.stream.appendHTML
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

val parser = Parser.builder().build()
val renderer = HtmlRenderer.builder()
	.nodeRendererFactory { context -> IndentedCodeBlockNodeRenderer(context) }
	.build()

class Documentation {

	val mdFiles = getResourceFiles("documentation").map { it.toDescriptor() }

	fun String.toDescriptor(): MdFileDescriptor {
		return MdFileDescriptor(this, html(this))
	}

	fun html(docFile: String): String {
		val content = getResourceAsStream("documentation/$docFile")
			.bufferedReader()
			.use { it.readText() }

		val document = parser.parse(content)
		val body = renderer.render(document)

		val sb = StringBuffer().appendHTML().html {
			head {
				unsafe {
					//language=HTML
					+"""
			    <meta charset="UTF-8">
				<meta name="viewport"
				content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>play:documentation</title>
  				<script src="https://unpkg.com/@data2viz/kotlin-playground@1" data-selector=".kotlin-code"></script>
				<link rel="stylesheet" href="main.css">""".trimIndent()
				}
			}
			body {
				main {
					header {
						id = "d2v-header"
						unsafe {
							//language=HTML
							+"""
							<div class="wrap">
								<div class="left">
									<img src="images/logo.png" class="logo">
								</div>
								<div class="right">
									<menu class="d2v-menu-horizontal">
										<li class="no-marge">
											<a href="https://data2viz.io" class="d2v-button-small d2v-button-transparent">main page</a>
										</li>
										<li class="no-marge">
											<a href="https://data2viz.io" class="d2v-button-small d2v-button-transparent">github</a>
										</li>
									</menu>
								</div>
							</div>""".trimIndent()
						}
					}
					div {
						id = "d2v-menu"
						unsafe {
							//language=HTML
							+"""
							<div class="wrap">
								<menu id="site-navigation" class="d2v-menu-vertical">
									<li>how use chores</li>
									<li>import color package</li>
									<li>init simple JS project</li>
									<li>init simple Android project</li>
									<li>init simple JFX project</li>
								</menu>
							</div>""".trimIndent()
						}
					}
					section {
						id = "d2v-content"
						div {
							id = "site-text"
							unsafe {
								+body
							}
						}
					}
				}
			}
		}
		return sb.toString()
	}

	@Throws(IOException::class)
	private fun getResourceFiles(path: String): List<String> {
		val filenames = ArrayList<String>()
		getResourceAsStream(path).use {
			BufferedReader(InputStreamReader(it)).use { br ->
				br.lines().forEach { line ->
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
//		html.tag("pre")
		//language=HTML
		html.text(
			"""
			<div class="kotlin-code d2v-large" data-target-platform="canvas"
			  lines="true"
			  highlight-on-fly="true"
			  data-js-libs="https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/kotlin.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-core-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-color-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-path-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-timer-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-viz-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-interpolate-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-time-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-scale-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-format-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-timeFormat-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-axis-js.js,https://unpkg.com/@data2viz/data2viz@0.7.1-RC2/d2v-shape-js.js"
			  data-output-height="200">""".trimIndent()
		)
		html.text(codeBlock.literal)
		html.text("</div>")
//		html.tag("/pre")
		html.line()
	}
}


data class MdFileDescriptor(val name: String, val htmlContent: String)



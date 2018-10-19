package io.data2viz.play

import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader
import java.util.*


class Articles(private val path: String) {

	val mdFiles: List<MdFileDescriptor>

	init {
	    mdFiles = getResourceFiles(path).map {
			it.toDescriptor()
				.also { logger.info("${it.name} loaded") }
		}

	}

	private fun String.toDescriptor() = MdFileDescriptor(this, html(this))

	fun html(docFile: String): String {
		val content = getResourceAsStream("$path/$docFile")
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

data class MdFileDescriptor(val name: String, val htmlContent: String)

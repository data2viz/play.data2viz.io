package io.data2viz.play

import java.io.File

class Articles(private val path: String) {

	val mdFiles: List<MdFileDescriptor>

	init {
	    mdFiles = File("content/$path").listFiles().map {
			it.toDescriptor()
				.also { logger.info("${it.name} loaded") }
		}
	}

	private fun File.toDescriptor() = MdFileDescriptor(this.name, html(this))

	fun html(file: File): String {
		val content = file.readText()
		val document = parser.parse(content)
		return renderer.render(document)
	}

}

data class MdFileDescriptor(val name: String, val htmlContent: String)

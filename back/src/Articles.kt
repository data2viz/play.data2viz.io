package io.data2viz.play

import java.io.File


/**
 * Parse MD files to render them as HTML
 */
class Articles(path: String) {

	val mdFiles: List<MdFileDescriptor>

	init {
	    mdFiles = File("content/$path").listFiles().map {
			it.toDescriptor()
				.also { logger.info("${it.title} loaded") }
		}.sortedBy { it.url }
	}

	private fun File.toDescriptor(): MdFileDescriptor {
		val content = readText()
		val document = parser.parse(content)
		val titleVisitor = TitleVisitor()
		document.accept(titleVisitor)

		val url = fileNameToUrl(name)
		val title = if(titleVisitor.titles.isNotEmpty()) titleVisitor.titles[0] else url
		val html = renderer.render(document)

		return MdFileDescriptor(url, title, html)
	}

}

data class MdFileDescriptor(val url: String, val title: String, val htmlContent: String)

internal fun fileNameToUrl(name:String):String {
	return name
}

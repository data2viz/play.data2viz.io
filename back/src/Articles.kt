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
		val mainTitles = titleVisitor.titles.filter { it.level == 1 }
		val title = if(mainTitles.isNotEmpty()) mainTitles[0].content else url

		val chapters = titleVisitor.titles.filter { it.level == 2 }
		val mdChapters = chapters.map { MdChapterDescriptor(it.content, it.content) }

		val html = renderer.render(document)

		return MdFileDescriptor(url, title, html, mdChapters)
	}

}

data class MdFileDescriptor(val url: String, val title: String, val htmlContent: String, val chapters:List<MdChapterDescriptor>)
data class MdChapterDescriptor(val anchor: String, val title: String)

internal fun fileNameToUrl(name:String):String {
	return name
}

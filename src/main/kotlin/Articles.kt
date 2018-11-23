package io.data2viz.play

import java.io.File


/**
 * Parse MD files to render them as HTML
 */
class Articles(path: String) {

	val mdFiles: List<MdFileDescriptor>

	init {
	    mdFiles = File("content/$path")
			.listFiles()
			.filter { it.name.endsWith(".md") }
			.map {
				it.toDescriptor()
				.also { logger.info("${it.title} loaded") }
			}.sortedBy { it.name }
	}

	private fun File.toDescriptor(): MdFileDescriptor {
		val content = readText()
		val document = parser.parse(content)
		val titleVisitor = TitleVisitor()
		document.accept(titleVisitor)

		val name = name
		val url = fileNameToUrl(name)
		val mainTitles = titleVisitor.titles.filter { it.level == 1 }
		val title = if(mainTitles.isNotEmpty()) mainTitles[0].content else url

		val chapters = titleVisitor.titles.filter { it.level == 2 }
		val mdChapters = chapters.map { MdChapterDescriptor(it.level, it.content) }

		val subChapters   = titleVisitor.titles.filter { it.level == 3 }
		val subMdChapters = subChapters.map { MdChapterDescriptor(it.level, it.content) }

		val html = renderer.render(document)

		return MdFileDescriptor(url, title, html, mdChapters, subMdChapters, name)
	}

}

data class MdFileDescriptor(
	val url: String,
	val title: String,
	val htmlContent: String,
	val chapters: List<MdChapterDescriptor>,
	val subChapters: List<MdChapterDescriptor>,
	val name: String
)

data class MdChapterDescriptor(val level: Int, val title: String)

/**
 * remove the numbers, and .md
 */
internal fun fileNameToUrl(name:String):String = "tutorials/${name.drop(3).dropLast(3)}/"

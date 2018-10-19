package io.data2viz.play

import org.commonmark.parser.Parser
import org.junit.Test
import kotlin.test.assertTrue
import org.commonmark.renderer.html.HtmlRenderer
import kotlin.test.assertEquals


class GenerationTest {

    @Test
    fun loadFiles() {
        assertTrue {
            Documentation().mdFiles.map { it.name }.contains("getting-started.md")
        }
    }

    @Test
    fun renderHtml() {
        println(Documentation().html("getting-started.md"))
    }

    @Test
    fun customRenderer(){
        val parser = Parser.builder().build()
        val document = parser.parse(
            """
                |```kotlin height=300
                |       val yo = "gros"
                |```"""
            .trimMargin())
        val yo = renderer.render(document)
        println(yo)
    }

    @Test
    fun parseHeight(){
        assertEquals(300, io.data2viz.play.parseHeight("height=300"))
    }


}
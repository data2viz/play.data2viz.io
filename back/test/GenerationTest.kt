package io.data2viz.play

import org.commonmark.parser.Parser
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue


class GenerationTest {


    @Test
    fun loadFiles() {
        assertTrue {
            val articleNames = Articles("documentation").mdFiles.map { it.name }
            articleNames.contains("getting-started.md")
        }
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
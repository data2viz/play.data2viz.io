package io.data2viz.play

import org.commonmark.parser.Parser
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue


class GenerationTest {


    @Test
    fun loadFiles() {
        assertTrue {
            val articleTitles = Articles("tutorials").mdFiles.map { it.title }
            articleTitles.contains("Let's start")
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
    fun parseAttributes(){
        assertEquals(300, io.data2viz.play.parseHeight("height=300"))
        assertEquals(30, io.data2viz.play.parseFrom("from=30"))
        assertEquals(42, io.data2viz.play.parseTo("to=42"))
    }

    @Test
    fun slurp(){
        assertEquals( "color-manipulation", "Color manipulation".slug)
        assertEquals( "color-manipulation", "Côlor manipulation".slug)
    }

    @Test
    fun grabTitle(){
        val parser = Parser.builder().build()
        val document = parser.parse(
            """
                |# data2viz is great
                |## reason one
                |First... ....
                |
                |## reason two
                |anrusiten aursiten uasit nauirst e
                |"""
                .trimMargin())

        val visitor = TitleVisitor()
        document.accept(visitor)

        assertEquals(3, visitor.titles.size)
        assertEquals("data2viz is great", visitor.titles[0].content)

    }



}


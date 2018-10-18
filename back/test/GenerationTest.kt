package io.data2viz.play

import org.junit.Test

class GenerationTest {

    @Test
    fun yo() {
        val classLoader = this::class.java.classLoader
        for (url in classLoader.getResources("").asSequence()) {
            println(url)
        }
    }
}
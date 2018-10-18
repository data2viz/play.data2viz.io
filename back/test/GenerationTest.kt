package io.data2viz.play

import org.junit.Test
import kotlin.test.assertTrue


class GenerationTest {

    @Test
    fun loadFiles() {
        assertTrue {
            Documentation().mdFiles.contains("getting-started.md")
        }
    }


}
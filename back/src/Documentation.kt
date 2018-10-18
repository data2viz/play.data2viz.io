package io.data2viz.play

import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader
import java.util.ArrayList


class Documentation {

	val mdFiles = getResourceFiles("documentation")

	fun html(docFile: String): String {
		val content = getResourceAsStream("documentation/$docFile")
			.bufferedReader()
			.use { it.readText() }


		return content
	}

	@Throws(IOException::class)
	private fun getResourceFiles(path: String): List<String> {
		val filenames = ArrayList<String>()
		getResourceAsStream(path).use {
			BufferedReader(InputStreamReader(it)).use { br ->
				br.lines().forEach{ line ->
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



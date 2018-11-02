package io.data2viz.play

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.application.log
import io.ktor.features.Compression
import io.ktor.html.respondHtml
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.response.respondRedirect
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import kotlinx.html.*
import org.slf4j.LoggerFactory
import java.util.Locale
import java.text.Normalizer
import java.util.regex.Pattern


val logger = LoggerFactory.getLogger("io.data2viz.play")!!

fun main(args: Array<String>) {
    embeddedServer(Netty, 8080) {
        mainModule()
    }.start(wait = true)
}


val documentation = Articles("documentation")

fun Application.mainModule() {
    install(Compression)
    routing {
        trace { application.log.trace(it.buildText()) }
        documentation.mdFiles.forEach { docFile ->
            get(docFile.url) {
                call.respondHtml {
                    generateDocumentationPage(docFile)
                }
            }
        }
        get("/") { call.respondRedirect(documentation.mdFiles.first().url)}

        static("/") {
            resources("public")
        }
    }
}

private fun HTML.generateDocumentationPage(docFile: MdFileDescriptor) {
    head {
        unsafe {
            //language=HTML
            +"""
			    <meta charset="UTF-8">
				<meta name="viewport"
				content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
				<meta http-equiv="X-UA-Compatible" content="ie=edge">
				<title>play:documentation</title>
  				<script src="https://unpkg.com/@data2viz/kotlin-playground@1"></script>
				<link rel="stylesheet" href="main.css">""".trimIndent()
        }
    }
    body {
        div {
            header {
                id = "d2v-header"
                unsafe {
                    //language=HTML
                    +"""
							<div class="wrap">
                                <div id="current-section-name"></div>
								<div class="left">
                                    <a href='/'>
									    <img src="images/logo-play.png" class="logo">
                                    </a>
								</div>
							</div>""".trimIndent()
                }
            }
            div {
                id = "d2v-menu"
                div("wrap") {
                    unsafe {
                        +"""<menu id="site-navigation" class="d2v-menu-vertical">"""
                            documentation.mdFiles.forEach {
                                val currentPage = (docFile.title == it.title)
                                +"""<li class="page ${if(currentPage) "active" else "unactive"}">"""
                                    +"""<a href="${it.url}">${it.title}</a>"""
                                    if (it.chapters.isNotEmpty() && currentPage) {
                                        +"""<ul class="chapters">"""
                                        it.chapters.forEach { chapter ->
                                            +"""<li class="chapter">
                                                |<a href="#${chapter.anchor}">${chapter.title}</a>""".trimMargin()
                                                if (it.subChapters.isNotEmpty()) {
                                                    +"""<ul>"""
                                                        it.subChapters.forEach { subChapter ->
                                                            +"""<li>
                                                                |<a>${subChapter.title}</a>
                                                            """.trimMargin()
                                                        }
                                                    +"""</ul>"""
                                                }
                                            +"""</li>""".trimMargin()
                                        }
                                        +"""</ul>"""
                                    }
                                +"""</li>"""
                            }
                        +"</menu>"
                    }
                }

            }
            section {
                id = "d2v-content"
                main {
                    id = "d2v-main"
                    div {
                        classes += "site-text"
                        unsafe {
                            +docFile.htmlContent
                        }
                    }
                }
            }
        }
        script("text/javascript", "main.js"){}
    }
}

private val MdChapterDescriptor.anchor: String
    get() = title.slug

private val NONLATIN = Pattern.compile("[^\\w-]")
private val WHITESPACE = Pattern.compile("[\\s]")




val String.slug: String
    get() {
        val nowhitespace = WHITESPACE.matcher(this).replaceAll("-")
        val normalized = Normalizer.normalize(nowhitespace, Normalizer.Form.NFD)
        val slug = NONLATIN.matcher(normalized).replaceAll("")
        return slug.toLowerCase(Locale.ENGLISH)
    }


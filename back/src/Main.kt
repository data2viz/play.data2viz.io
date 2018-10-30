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
  				<script src="https://unpkg.com/@data2viz/kotlin-playground@1" data-selector=".kotlin-code"></script>
				<link rel="stylesheet" href="main.css">""".trimIndent()
        }
    }
    body {
        main {
            header {
                id = "d2v-header"
                unsafe {
                    //language=HTML
                    +"""
							<div class="wrap">
								<div class="left">
									<img src="images/logo.png" class="logo">
								</div>
								<div class="right">
									<menu class="d2v-menu-horizontal">
										<li class="no-marge">
											<a href="https://data2viz.io" class="d2v-button-small d2v-button-transparent">main page</a>
										</li>
										<li class="no-marge">
											<a href="https://data2viz.io" class="d2v-button-small d2v-button-transparent">github</a>
										</li>
									</menu>
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
                                +"""<li>"""
                                    +"""<a href="${it.url}">${it.title}</a>"""
                                    if (it.chapters.isNotEmpty()) {
                                        +"""<ul class='nav-level-one'>"""
                                        it.chapters.forEach { chapter ->
                                            +"""<li><a href="#${chapter.anchor}">${chapter.title}</a></li>"""
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
                div {
                    id = "site-text"
                    unsafe {
                        +docFile.htmlContent
                    }
                }
            }
        }
    }
}




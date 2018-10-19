package io.data2viz.play

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.application.log
import io.ktor.features.Compression
import io.ktor.html.respondHtml
import io.ktor.http.content.resolveResource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.response.respondText
import io.ktor.routing.Routing
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

val documentation = Documentation()

fun Application.mainModule() {
    install(Compression)
    routing {
        trace { application.log.trace(it.buildText()) }
        documentation.mdFiles.forEach { docFile ->
            get(docFile.name) {
                call.respondHtml {
                    unsafe {
                        +docFile.htmlContent
                    }
                }
            }
        }
        get("/") { call.respondRedirect(documentation.mdFiles.first().name)}
        static("/") {
            resources("public")
        }
    }
}



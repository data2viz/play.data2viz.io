package io.data2viz.play

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.Compression
import io.ktor.http.content.resolveResource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.response.respond
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.slf4j.LoggerFactory


val logger = LoggerFactory.getLogger("io.data2viz.play")!!

fun main(args: Array<String>) {
    embeddedServer(Netty, 8080) {
        mainModule()
    }.start(wait = true)
}

fun Application.mainModule(){
    install(Compression)
    routing {
        installContent()
        get("/") { call.respond(call.resolveResource("public/index.html")!!) }
        static("/") {
            resources("public")
        }
    }
}

private fun Routing.installContent() {

}



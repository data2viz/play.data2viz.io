package io.data2viz.play

import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.application.log
import io.ktor.features.CallLogging
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
    embeddedServer(
        factory = Netty,
        port = 8080) {
        mainModule()
    }.start(wait = true)
}


val documentation = Articles("documentation")

fun Application.mainModule() {
    install(Compression)
    install(CallLogging)
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
				<link rel="stylesheet" href="/main.css">
                <link rel="icon" type="image/png" href="/favicon.png" />""".trimIndent()
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
                                    <a href='/' class="d2v-link">
                                        <img src="/images/logo-play.png" class="logo">
                                        <span class='title'>back to home&nbsp;page</span>
                                    </a>
                                </div>
                                <div class="right">
                                    <a href="https://data2viz.io" class="d2v-link">
                                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class='link-icon' viewBox="0 0 360 360">
                                          <defs>
                                            <clipPath id="clip-path">
                                              <rect class="cls-1" x="2000" y="-878" width="2530" height="1670"/>
                                            </clipPath>
                                          </defs>
                                          <title>go-back-to-main-page</title>
                                          <g>
                                            <path class="cls-2" d="M80,80V280H280V80ZM260,260H100V100H260Z"/>
                                            <polygon class="cls-2" points="240 120 190 120 215 170 240 120"/>
                                            <polygon class="cls-2" points="120 140 120 240 170 240 120 140"/>
                                            <polygon class="cls-2" points="205 190 170 120 130 120 185 230 205 190"/>
                                          </g>
                                          <g class="cls-3">
                                            <line class="cls-4" x1="320" y1="792" x2="2000" y2="-888"/>
                                          </g>
                                        </svg>
                                        <span class='title'>go to data2viz main&nbsp;site</span>
                                    </a>

                                    <a href="https://github.com/data2viz/data2viz" class="d2v-link" >
                                        <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class='link-icon' viewBox="0 0 360 360">
                                          <title>go-to-github-project</title>
                                          <g class="cls-2">
                                            <line class="cls-3" x1="320" y1="315" x2="2000" y2="-1365"/>
                                          </g>
                                          <g>
                                            <path class="cls-4" d="M80.085,183.13178a100.02626,100.02626,0,0,0,68.38413,94.2271c4.997.925,6.83251-2.17014,6.83251-4.81108,0-2.3836-.09223-10.26235-.13578-18.61819-27.81991,6.04974-33.69031-11.79876-33.69031-11.79876-4.54894-11.55782-11.10325-14.63212-11.10325-14.63212-9.07387-6.20657.68391-6.07889.68391-6.07889,10.04095.70511,15.32912,10.30624,15.32912,10.30624,8.91853,15.28689,23.39367,10.86728,29.10062,8.31212.89754-6.46224,3.4883-10.87539,6.349-13.37226-22.21164-2.52767-45.56176-11.10342-45.56176-49.42033a38.69979,38.69979,0,0,1,10.30458-26.84139c-1.03829-2.51956-4.46167-12.68984.96874-26.46483,0,0,8.39774-2.68614,27.5061,10.25192a94.8247,94.8247,0,0,1,50.08172,0c19.08716-12.93806,27.47215-10.25192,27.47215-10.25192,5.44333,13.775,2.01978,23.94527.98166,26.46483a38.62448,38.62448,0,0,1,10.2915,26.84139c0,38.40915-23.39367,46.86517-45.662,49.341C201.80448,229.69007,205,235.77541,205,245.1048c0,13.3802-.11476,24.149-.11476,27.443,0,2.6618,1.79987,5.77982,6.868,4.79816a100.01425,100.01425,0,0,0-33.10359-194.8669C123.98936,83.24449,79.7302,128.46733,80.085,183.13178Z"/>
                                            <path class="cls-5" d="M117.87543,226.04661c-.21991.49811-1.00269.64682-1.71409.30552-.72614-.32655-1.132-1.00417-.89754-1.50229.215-.511.99772-.65328,1.72221-.31215.72614.32672,1.14013,1.0108.88942,1.50892Zm-1.23072-.91211"/>
                                            <path class="cls-5" d="M121.92642,230.56491c-.47709.44148-1.41021.23614-2.04247-.46251a1.528,1.528,0,0,1-.29277-2.07807c.49165-.44148,1.39564-.23449,2.05058.46251.65493.70511.78277,1.63013.28466,2.07807Zm-.95417-1.02372"/>
                                            <path class="cls-5" d="M125.86911,236.32354c-.613.4269-1.61556.02749-2.23489-.86193-.613-.88942-.613-1.95669.0144-2.3836.6195-.42691,1.60745-.04206,2.23506.83924.61122.904.61122,1.97126-.01457,2.40629Zm0,0"/>
                                            <path class="cls-5" d="M131.27037,241.88825c-.54829.60475-1.71589.44148-2.56972-.38336-.87485-.8053-1.11745-1.95023-.56916-2.555.55624-.60493,1.73032-.435,2.59059.38319.86839.8053,1.132,1.95669.54829,2.55516Zm0,0"/>
                                            <path class="cls-5" d="M138.72222,245.1192c-.2426.78278-1.36648,1.13848-2.49852.80546-1.132-.343-1.87108-1.25986-1.64305-2.05058.23449-.78923,1.36485-1.15951,2.505-.80381,1.13036.3413,1.87108,1.25175,1.63659,2.04893Zm0,0"/>
                                            <path class="cls-5" d="M146.90667,245.71767c.02749.82467-.93314,1.50875-2.12179,1.52332-1.19511.02749-2.16368-.64036-2.1766-1.45228,0-.83279.93943-1.50875,2.13454-1.52978,1.18865-.02269,2.16385.64036,2.16385,1.45874Zm0,0"/>
                                            <path class="cls-5" d="M154.5218,244.42221c.14225.8038-.68408,1.63013-1.86462,1.85-1.16115.21346-2.23489-.28449-2.3836-1.08184-.1439-.82467.697-1.65117,1.85651-1.86462,1.182-.20534,2.24135.2782,2.39171,1.09642Zm0,0"/>
                                          </g>
                                        </svg>
                                        <span class='title'>github project</span>
                                    </a>
                                </div>
                            </div>
                            <div class="github-link-wrapper">
                                <a href="https://github.com/data2viz/data2viz" class="github-corner" aria-label="View source on GitHub">
                                    <svg width="80" height="80" viewBox="0 0 250 250"
                                         style="fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
                                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                                        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                                              fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                                        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                                              fill="currentColor" class="octo-body"></path>
                                    </svg>
                                </a>
                                <style>.github-corner:hover .octo-arm {
                                    animation: octocat-wave 560ms ease-in-out
                                }

                                @keyframes octocat-wave {
                                    0%, 100% {
                                        transform: rotate(0)
                                    }
                                    20%, 60% {
                                        transform: rotate(-25deg)
                                    }
                                    40%, 80% {
                                        transform: rotate(10deg)
                                    }
                                }

                                @media (max-width: 500px) {
                                    .github-corner:hover .octo-arm {
                                        animation: none
                                    }

                                    .github-corner .octo-arm {
                                        animation: octocat-wave 560ms ease-in-out
                                    }
                                }</style>
                            </div>
                    """
                }
            }
            div {
                id = "d2v-menu"
                div("wrap") {
                    ul("menu d2v-menu-vertical") {
                        id = "site-navigation"
                        documentation.mdFiles.forEach { page ->
                            val currentPage = (docFile.title == page.title)
                            li("page ${if (currentPage) "active" else "unactive"}") {
                                a("/${page.url}") { +page.title }
                                if (page.chapters.isNotEmpty() && currentPage) {
                                    ul("chapters") {
                                        page.chapters.forEach { chapter ->
                                            li("chapter") {
                                                a(href = "#${chapter.anchor}") { +chapter.title }
                                            }
                                        }
                                    }
                                }
                            }
                        }
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
        footer {
            id = "d2v-footer"
            //language=HTML
            unsafe {
                + """
                    <div class="wrap">
                        <ul class="d2v-menu-vertical">
                            <li>
                                <a href="https://data2viz.io/" target="_blank">
                                    <img id="logo-footer" src="/images/logo-negative.png" width="1110" height="360">
                                </a>
                            </li>
                            <li class="no-marge">Data2viz sàrl</li>
                            <li>Boulevard Georges-Favon 3</li>
                            <li>1204 Genève</li>
                            <li>Suisse</li>
                        </ul>
                    </div>
                """.trimIndent()
            }
        }
        script("text/javascript", "/main.js"){}
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


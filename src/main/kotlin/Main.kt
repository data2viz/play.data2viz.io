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


val tutorials = Articles("tutorials")

fun Application.mainModule() {
    routing {
        trace { application.log.trace(it.buildText()) }
        tutorials.mdFiles.forEach { docFile ->
            get(docFile.url) {
                call.respondHtml {
                    generateDocumentationPage(docFile)
                }
            }
        }
        get("/") { call.respondRedirect(tutorials.mdFiles.first().url)}

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
                                    </a>
                                </div>
                                <div class="right">
                                    <a href="https://data2viz.io" class="d2v-link" target="_blank" title='go to data2viz main site'>
                                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class='link-icon' viewBox="0 0 360 360">
                                          <defs>
                                            <clipPath id="clip-path">
                                              <rect class="cls-1" x="2000" y="-878" width="2530" height="1670"/>
                                            </clipPath>
                                          </defs>
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
                                    </a>

                                    <a href="https://github.com/data2viz/data2viz" class="d2v-link" target="_blank" title='view code'>
                                        <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class='link-icon' viewBox="0 0 360 360">
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
                                    </a>

                                    <a href="https://kotlinlang.slack.com/messages/CDJRT6L6Q/" class="d2v-link" target="_blank" title='join us on slack!'>
                                        <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360"
                                          class='link-icon'>
                                          <g id="Layer_2" data-name="Layer 2">
                                            <g>
                                              <rect class="cls-1" x="165.61669" y="166.65163" width="28.11785" height="27.15928" transform="translate(-47.93961 66.39828) rotate(-18.5183)"/>
                                              <g>
                                                <rect class="cls-1" x="165.61669" y="166.65163" width="28.11785" height="27.15928" transform="translate(-47.93961 66.39828) rotate(-18.5183)"/>
                                                <path class="cls-1" d="M271.22332,152.599c-20.60957-68.69861-50.32573-84.675-119.02433-64.06544S67.524,138.85925,88.13355,207.55784s50.32572,84.675,119.02431,64.06546S291.83289,221.29757,271.22332,152.599Zm-34.66885,44.5742-12.94091,4.31363L228.087,214.907a10.371,10.371,0,0,1-6.55034,13.10066,8.92037,8.92037,0,0,1-3.51481.4793,10.662,10.662,0,0,1-9.58585-7.02962l-4.4734-13.42018L177.28194,216.984l4.4734,13.42018a10.371,10.371,0,0,1-6.55034,13.10066,8.92035,8.92035,0,0,1-3.51481.4793,10.662,10.662,0,0,1-9.58585-7.02962l-4.4734-13.42018L144.69,227.84792a8.92031,8.92031,0,0,1-3.51481.47929,10.662,10.662,0,0,1-9.58585-7.02961,10.37105,10.37105,0,0,1,6.55033-13.10066l12.9409-4.31363-8.62727-25.722-12.9409,4.31363a8.92014,8.92014,0,0,1-3.51481.4793,10.662,10.662,0,0,1-9.58585-7.02961,10.37106,10.37106,0,0,1,6.55033-13.10066l12.9409-4.31363-4.4734-13.4202a10.357,10.357,0,1,1,19.651-6.55033L155.554,151.96l26.68061-8.9468-4.4734-13.42019a10.357,10.357,0,0,1,19.651-6.55033l4.47341,13.42019,12.94091-4.31362a10.357,10.357,0,1,1,6.55031,19.651l-12.94091,4.31362,8.62726,25.722,12.94091-4.31363a10.357,10.357,0,0,1,6.55037,19.65093Z"/>
                                              </g>
                                            </g>
                                          </g>
                                        </svg>
                                    </a>

                                    <a href="https://twitter.com/data2viz_io" class="d2v-link" target="_blank" title='join us on twitter!'>
                                        <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360"
                                            class='link-icon'>
                                            <path class="cls-1" d="M280,180A100,100,0,1,1,180,80,99.97245,99.97245,0,0,1,280,180ZM161.7,232.75c44.35,0,68.6-36.75,68.6-68.6,0-1.05,0-2.1-.05-3.1a49.39466,49.39466,0,0,0,12.05-12.5,48.93617,48.93617,0,0,1-13.85,3.8A24.09645,24.09645,0,0,0,239.05,139a48.82387,48.82387,0,0,1-15.3,5.85,24.12381,24.12381,0,0,0-41.7,16.5,22.09429,22.09429,0,0,0,.65,5.5,68.39659,68.39659,0,0,1-49.7-25.2,24.09842,24.09842,0,0,0,7.5,32.15,23.6838,23.6838,0,0,1-10.9-3v.3a24.13633,24.13633,0,0,0,19.35,23.65,24.03478,24.03478,0,0,1-6.35.85,23.02,23.02,0,0,1-4.55-.45,24.07344,24.07344,0,0,0,22.5,16.75,48.46559,48.46559,0,0,1-29.95,10.3,43.84186,43.84186,0,0,1-5.75-.35,67.1733,67.1733,0,0,0,36.85,10.9"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                    """
                }
            }
            div {
                id = "d2v-menu"
                div("wrap") {
                    ul("menu d2v-menu-vertical") {
                        id = "site-navigation"
                        tutorials.mdFiles.forEach { page ->
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
        script("text/javascript", "/main.js"){}
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


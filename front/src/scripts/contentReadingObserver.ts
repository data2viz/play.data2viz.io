import {addScrollEventListener} from "./addScrollEventListener"
import {getPageScrollPositionTop} from "./getPageScrollPositionTop"
import {HTML_SELECTORS} from "./HTML_SELECTORS"


export function contentReadingObserver(contentElement: HTMLElement) {

    const CONTENT_IS_READING = "read"

    const body = document.body

    const contentPositionTop = parseInt( window.getComputedStyle(contentElement).paddingTop as string )

    addScrollEventListener(() => {

        if(getPageScrollPositionTop() >= contentPositionTop && !body.classList.contains(CONTENT_IS_READING)){
            body.classList.add(CONTENT_IS_READING)
        } else if (getPageScrollPositionTop() <= contentPositionTop && body.classList.contains(CONTENT_IS_READING)) {
            body.classList.remove(CONTENT_IS_READING)
        }

    })
}

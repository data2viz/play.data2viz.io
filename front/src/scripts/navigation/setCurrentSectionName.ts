import {HTML_SELECTORS} from "../HTML_SELECTORS"

export function setCurrentSectionName() {
    (document.querySelector(HTML_SELECTORS.CURRENT_SECTION_NAME) as HTMLElement).innerHTML = getCurrentSectionName()
}

function getCurrentSectionName(): string {
    const pageTitleElement = document.querySelector("h1")
    if(pageTitleElement !== null ) {
        return pageTitleElement.innerHTML
    } else {
        return ""
    }
}

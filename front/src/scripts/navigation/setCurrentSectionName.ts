import {HTML_SELECTORS} from "../HTML_SELECTORS"

export function setCurrentSectionName() {
    const currentSectionNameElement = document.querySelector(HTML_SELECTORS.CURRENT_SECTION_NAME)

    if(currentSectionNameElement) {
        currentSectionNameElement.innerHTML = getCurrentSectionName()
    }
}

function getCurrentSectionName(): string {
    const pageTitleElement = document.querySelector("h1")
    if(pageTitleElement) {
        return pageTitleElement.innerHTML
    } else {
        return ""
    }
}

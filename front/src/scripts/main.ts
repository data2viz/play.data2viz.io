import {IKotlinPlaygroundEditor} from "./editor/IKotlinPlaygroundEditor"
import {D2VKotlinEditors} from "./editor/D2VKotlinEditors"
import {menuPositionObserver} from "./menuPositionObserver"
import {HTML_SELECTORS} from "./HTML_SELECTORS"

// init editors
declare function KotlinPlayground(selector: string): Promise<IKotlinPlaygroundEditor[]>

KotlinPlayground('.kotlin-code').then((editors) => {
    new D2VKotlinEditors(editors)
});

menuPositionObserver(
    document.querySelector(HTML_SELECTORS.CONTENT) as HTMLElement,
    document.querySelector(HTML_SELECTORS.TOP_HEADER) as HTMLElement,
)


function getCurrentSectionName(): string {
    const pageTitleElement = document.querySelector("h1")
    if(pageTitleElement !== null ) {
        return pageTitleElement.innerHTML
    } else {
        return ""
    }
}

function setCurrentSectionName() {
    (document.querySelector(HTML_SELECTORS.CURRENT_SECTION_NAME) as HTMLElement).innerHTML = getCurrentSectionName()
}

setCurrentSectionName()
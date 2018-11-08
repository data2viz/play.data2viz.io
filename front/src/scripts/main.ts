import {setMenuPosition} from "./navigation/setMenuPosition"
import {HTML_SELECTORS} from "./HTML_SELECTORS"
import {setCurrentSectionName} from "./navigation/setCurrentSectionName"
import {setNavigationMenu} from "./navigation/setNavigationMenu"
import {setEditors} from "./editor/setEditors"

setEditors()

setMenuPosition(
    document.querySelector(HTML_SELECTORS.CONTENT) as HTMLElement,
    document.querySelector(HTML_SELECTORS.TOP_HEADER) as HTMLElement,
)


setCurrentSectionName()

setNavigationMenu()
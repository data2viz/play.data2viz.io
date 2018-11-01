import {menuPositionObserver} from "./menuPositionObserver"
import {HTML_SELECTORS} from "./HTML_SELECTORS"
import {setCurrentSectionName} from "./navigationMenu/setCurrentSectionName"
import {setNavigationMenu} from "./navigationMenu/setNavigationMenu"
import {setEditors} from "./editor/setEditors"

setEditors()

menuPositionObserver(
    document.querySelector(HTML_SELECTORS.CONTENT) as HTMLElement,
    document.querySelector(HTML_SELECTORS.TOP_HEADER) as HTMLElement,
)


setCurrentSectionName()

setNavigationMenu()
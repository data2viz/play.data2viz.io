import {IKotlinPlaygroundEditor} from "./editor/IKotlinPlaygroundEditor"
import {D2VKotlinEditors} from "./editor/D2VKotlinEditors"
import {menuPositionObserver} from "./menuPositionObserver"
import {HTML_SELECTORS} from "./HTML_SELECTORS"
import {setCurrentSectionName} from "./navigation/setCurrentSectionName"
import {setNavigationMenuStyle} from "./navigation/setNavigationMenuStyle"

// init editors
declare function KotlinPlayground(selector: string): Promise<IKotlinPlaygroundEditor[]>

KotlinPlayground('.kotlin-code').then((editors) => {
    new D2VKotlinEditors(editors)
});

menuPositionObserver(
    document.querySelector(HTML_SELECTORS.CONTENT) as HTMLElement,
    document.querySelector(HTML_SELECTORS.TOP_HEADER) as HTMLElement,
)


setCurrentSectionName()

setNavigationMenuStyle()
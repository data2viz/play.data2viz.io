import {IKotlinPlaygroundEditor} from "./editor/IKotlinPlaygroundEditor"
import {D2VKotlinEditors} from "./editor/D2VKotlinEditors"
import {contentReadingObserver} from "./contentReadingObserver"
import {HTML_SELECTORS} from "./HTML_SELECTORS"

// init editors
declare function KotlinPlayground(selector: string): Promise<IKotlinPlaygroundEditor[]>

KotlinPlayground('.kotlin-code').then((editors) => {
    new D2VKotlinEditors(editors)
});

contentReadingObserver(document.querySelector(HTML_SELECTORS.CONTENT) as HTMLElement)
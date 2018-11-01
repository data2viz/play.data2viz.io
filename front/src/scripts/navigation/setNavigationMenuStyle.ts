import {HTML_SELECTORS} from "../HTML_SELECTORS"

const CURRENT_SECTION = "active"
export function setNavigationMenuStyle() {
    const level1MenuNavigationElements = document.querySelectorAll(`${HTML_SELECTORS.NAVIGATION_MENU} > li > a`)
    const currentTitlePage = document.querySelector("h1")
    if(currentTitlePage !== null){
        for(const level1MenuNavigationElement of level1MenuNavigationElements) {
            if(level1MenuNavigationElement.innerHTML === currentTitlePage.innerHTML) {
                level1MenuNavigationElement.classList.add(CURRENT_SECTION)
            }
        }
    }
}
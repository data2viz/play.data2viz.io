import {addScrollEventListener} from "./addScrollEventListener"
import {getPageScrollPositionTop} from "./getPageScrollPositionTop"
import {HTML_SELECTORS} from "./HTML_SELECTORS"


export function menuPositionObserver(referenceElementForFixedMenu: HTMLElement, topElementFixedOverMenu?: HTMLElement) {

    const MENU_MUST_BE_FIXED = "menu-fixed"

    const body = document.body

    const heightOfFixedElementThatHidesMenu = topElementFixedOverMenu === undefined ?  0 : topElementFixedOverMenu.getBoundingClientRect().height

    addScrollEventListener(() => {

        const positionTopOfRefElement = parseInt( window.getComputedStyle(referenceElementForFixedMenu).paddingTop as string )

        const refPositionForFixedMenu = positionTopOfRefElement - heightOfFixedElementThatHidesMenu

        if(getPageScrollPositionTop() >= refPositionForFixedMenu && !body.classList.contains(MENU_MUST_BE_FIXED)){
            body.classList.add(MENU_MUST_BE_FIXED)
        } else if (getPageScrollPositionTop() <= refPositionForFixedMenu && body.classList.contains(MENU_MUST_BE_FIXED)) {
            body.classList.remove(MENU_MUST_BE_FIXED)
        }

    })
}

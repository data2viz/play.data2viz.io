import {addScrollEventListener} from "../addScrollEventListener"
import {getPageScrollPositionTop} from "../getPageScrollPositionTop"
import {HTML_SELECTORS} from "../HTML_SELECTORS"


export function setMenuPosition(referenceElementForFixedMenu: HTMLElement, topElementFixedOverMenu?: HTMLElement) {

    const FIXED_MENU_CLASS_NAME = "menu-fixed"

    const body = document.body

    const heightOfFixedElementThatHidesMenu = topElementFixedOverMenu === undefined ?  0 : topElementFixedOverMenu.getBoundingClientRect().height

    addScrollEventListener(() => {

        const positionTopOfRefElement = parseInt( window.getComputedStyle(referenceElementForFixedMenu).paddingTop as string )

        const refPositionForFixedMenu = positionTopOfRefElement - heightOfFixedElementThatHidesMenu

        if(getPageScrollPositionTop() >= refPositionForFixedMenu && !body.classList.contains(FIXED_MENU_CLASS_NAME)){
            body.classList.add(FIXED_MENU_CLASS_NAME)
        } else if (getPageScrollPositionTop() <= refPositionForFixedMenu && body.classList.contains(FIXED_MENU_CLASS_NAME)) {
            body.classList.remove(FIXED_MENU_CLASS_NAME)
        }

    })
}

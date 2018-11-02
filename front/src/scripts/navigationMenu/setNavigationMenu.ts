import {HTML_SELECTORS} from "../HTML_SELECTORS"
import {addScrollEventListener} from "../addScrollEventListener"

export function setNavigationMenu() {
    setLevelNavOne()
    setLevelNavTwo()
}

function setLevelNavOne() {
    const CURRENT_SECTION_CLASSNAME = "active"

    const LEVEL_ON_NAVIGATION_ELEMENTS = document.querySelectorAll(`${HTML_SELECTORS.NAVIGATION_MENU} > li > a`)

    const currentTitlePage = document.querySelector("h1")

    if(currentTitlePage !== null){
        for(const level1MenuNavigationElement of LEVEL_ON_NAVIGATION_ELEMENTS) {
            if(level1MenuNavigationElement.innerHTML === currentTitlePage.innerHTML) {
                level1MenuNavigationElement.classList.add(CURRENT_SECTION_CLASSNAME)
            }
        }
    }
}

function setLevelNavTwo() {
    generateListOfTitleLevelTwo().then((value) => {
        addScrollEventListener(() => {
            updateLevelTwoInNavigationMenu(value)
        })
    })
}

function updateLevelTwoInNavigationMenu(listOfTitleLevelTwo: TitleLevelTwo[]) {
    let lastTitleIsNotFound = true

    for(const titleLevelTwo of listOfTitleLevelTwo) {
        if(titleLevelTwo.isActive && lastTitleIsNotFound) {
            lastTitleIsNotFound = false
            titleLevelTwo.classname = "active"
        } else {
            titleLevelTwo.classname = "unactive"
        }
    }
}

function generateListOfTitleLevelTwo(): Promise<TitleLevelTwo[]> {
    return new Promise((resolve, reject) => {
        const listToReturn = []

        const TITLE_TWO_ELEMENTS = document.querySelectorAll(`${HTML_SELECTORS.CONTENT} h2`) as NodeListOf<HTMLElement>
        const NAVIGATION_MENU_ELEMENT = document.querySelector(`${HTML_SELECTORS.NAVIGATION_MENU}`) as HTMLElement

        for(const navigationTwoElement of TITLE_TWO_ELEMENTS) {
            listToReturn.push(new TitleLevelTwo(navigationTwoElement, NAVIGATION_MENU_ELEMENT))
        }

        resolve(listToReturn.reverse())

        reject(new Error("can't get list of level two in navigation menu"))
    })
}

class TitleLevelTwo {
    private _element: HTMLElement

    private _elementInMenu: HTMLElement | undefined

    constructor(element: HTMLElement, navigationMenuElement: HTMLElement) {
        this._element = element
        this._elementInMenu = this.getElementInMenu(navigationMenuElement)
    }

    get isActive() {
        return this._element.getBoundingClientRect().top <= window.innerHeight / 2
    }

    set classname(classname: "active"|"unactive") {
        if(classname === "active") {
            if(! this._elementInMenuContainsActiveClass) {
                (this._elementInMenu as HTMLElement).classList.add("active")
            }
        } else {
            if(this._elementInMenuContainsActiveClass) {
                (this._elementInMenu as HTMLElement).classList.remove("active")
            }
        }
    }

    private getElementInMenu(navigationMenuElement: HTMLElement) {
        const listOfLevelTwoInMenu = document.querySelectorAll(`${HTML_SELECTORS.NAVIGATION_MENU} > li > ul > li > a`) as NodeListOf<HTMLElement>

        for(const levelTwoElement of listOfLevelTwoInMenu) {
            if(levelTwoElement.getAttribute("href") === "#" + this._element.getAttribute("id")) {
                return levelTwoElement
            }
        }
    }

    private get _elementInMenuContainsActiveClass() {
        if(this._elementInMenu !== undefined) {
            return this._elementInMenu.classList.contains("active")
        } else {
            return false
        }
    }
}

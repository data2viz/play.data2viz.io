import {KotlinPlayground} from "./KotlinPlayground"
import {HTML_SELECTORS} from "../HTML_SELECTORS"
import {createHTMLElement} from "../tools"
import {PlatformOsName} from "../getUserOs"

declare function KotlinPlayground(selector: string | HTMLElement, eventFunctions?: KotlinPlayground.IEventFunctions): Promise<KotlinPlayground.IEditorInstance[]>


export class Editor {

    private TEXT_SHORTCUT = {
        run: {
            macOs: "CTRL + R: run code",
            windows: "CTRL + F9: run code",
            linux: "CTRL + F9: run code",
        }
    }

    private PLATFORM_OS_USER_NAME: PlatformOsName;

    private MORE_THAN_ONCE_CODE_CHANGED_CLASSNAME = "more-than-once-code-changed"
    private SHORTCUT_INFO_CLASSNAME = "shortcut-info compiler-info"

    constructor(
        selector: string | HTMLElement,
        platformOsName: PlatformOsName,
        onChange?: (code: string) => void
    ) {
        this._selector = selector
        this.PLATFORM_OS_USER_NAME = platformOsName
        this._onChange = onChange
    }

    private _selector: string | HTMLElement

    private readonly _onChange?: (code: string) => void

    public init(): Promise<Editor> {
        return new Promise(resolve => {
            KotlinPlayground(this._selector, this._eventFunctions).then(() => {
                if(this._KotlinPlaygroundEditorInstance) {

                    this._kotlinEditorContainer = this._KotlinPlaygroundEditorInstance.nodes[0]

                    const codeArea = this._kotlinEditorContainer.querySelector(HTML_SELECTORS.CODE_AREA)

                    if(codeArea !== null && codeArea instanceof HTMLElement) {
                        this._codeArea = codeArea

                        const codeMirrorStyleElement = codeArea.querySelector(".CodeMirror") as HTMLDivElement

                        const editorThemeClassname = Editor.getCookie("theme");
                        if(editorThemeClassname) {
                            codeMirrorStyleElement.classList.add(`cm-s-${editorThemeClassname}`)
                        }
                    }
                }

                resolve( this )
            })
        })
    }

    private static getCookie(name: string) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));

        if (match) return match[2];
        else return null
    }

    private _kotlinEditorContainer?: HTMLElement
    get kotlinEditorContainer() {
        return this._kotlinEditorContainer
    }

    private _codeArea?: HTMLElement
    public get codeArea() {return this._codeArea}

    public get bottom_of_codeArea_is_above_bottom_of_screen() {
        return this.codeArea ? this.codeArea.getBoundingClientRect().bottom >= 0 : false
    }
    public get bottom_of_codeArea_is_below_top_of_screen() {
        return this.codeArea ? this.codeArea.getBoundingClientRect().bottom <= window.innerHeight : false
    }

    private _hasBeenExecuted = false
    public get hasNotBeenExecuted() { return !this._hasBeenExecuted}

    public get isOnScreen() {
        if (this._KotlinPlaygroundEditorInstance) {
            return this.bottom_of_codeArea_is_above_bottom_of_screen && this.bottom_of_codeArea_is_below_top_of_screen
        }
    }

    public execute(): Promise<any> {
        return new Promise((resolve, reject) => {
            if( this._KotlinPlaygroundEditorInstance) {
                this._hasBeenExecuted = true
                this._KotlinPlaygroundEditorInstance.execute()
            }
            resolve()
            reject(new Error("can't execute kotlin playground editor"))
        });
    }

    private _eventFunctions: KotlinPlayground.IEventFunctions = {
        getInstance: (editor: KotlinPlayground.IEditorInstance) => {
            this._KotlinPlaygroundEditorInstance = editor
        },
        onChange: (code: string) => {
            this.changedCounter++

            if(this.changedCounter === 2) {
                if(this.kotlinEditorContainer) {

                    let textInShortcutHelperElement: string

                    switch (this.PLATFORM_OS_USER_NAME) {
                        case "OS X":
                            textInShortcutHelperElement = this.TEXT_SHORTCUT.run.macOs
                            break
                        case "Windows":
                            textInShortcutHelperElement = this.TEXT_SHORTCUT.run.windows
                            break
                        case "Linux":
                            textInShortcutHelperElement = this.TEXT_SHORTCUT.run.linux
                            break
                        default:
                            textInShortcutHelperElement = ""
                    }

                    if(this.PLATFORM_OS_USER_NAME !== "Other") {
                        this.kotlinEditorContainer.appendChild(
                            createHTMLElement(
                                "div",
                                [
                                    createHTMLElement(
                                        "div",
                                        textInShortcutHelperElement
                                    ),
                                    createHTMLElement(
                                        "div",
                                        "CTRL + SPACE: code completion"
                                    )
                                ],
                                this.SHORTCUT_INFO_CLASSNAME
                            )
                        )
                    }

                    this.kotlinEditorContainer.classList.add(this.MORE_THAN_ONCE_CODE_CHANGED_CLASSNAME)
                }
            }

            if(this._onChange) {
                this._onChange(code)
            }
        },
    };

    private _KotlinPlaygroundEditorInstance?: KotlinPlayground.IEditorInstance
    get KotlinPlaygroundEditorInstance() {return this._KotlinPlaygroundEditorInstance}

    private changedCounter = 0
}
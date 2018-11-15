import {KotlinPlayground} from "./KotlinPlayground"
import {Editor} from "./Editor"
import {addScrollEventListener} from "../addScrollEventListener"
import {HTML_SELECTORS} from "../HTML_SELECTORS"

export class EditorManager {
    constructor(kotlinEditors: Editor[]) {

        this._editors = kotlinEditors

        this._setListenerForEditorsAutoExecution()
    }

    public runVisibleEditors() {
        for(const editor of this._editors) {
            if(editor.isOnScreen && editor.hasNotBeenExecuted) {
                editor.execute()
            }
        }
    }

    private readonly _editors: Editor[] = []

    private _setListenerForEditorsAutoExecution() {
        addScrollEventListener(() => {
            this.runVisibleEditors()
        })
    }
}

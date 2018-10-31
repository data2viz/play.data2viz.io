import {IKotlinPlaygroundEditor} from "./IKotlinPlaygroundEditor"
import {Editor} from "./Editor"
import {addScrollEventListener} from "../addScrollEventListener"
import {HTML_SELECTORS} from "../HTML_SELECTORS"

export class D2VKotlinEditors {
    constructor(kotlinEditors: IKotlinPlaygroundEditor[]) {

        this.setEditors(kotlinEditors)

        this.setListenerForEditorsAutoExecution()
    }

    private editors: Editor[] = []

    private setEditors(kotlinEditors: IKotlinPlaygroundEditor[]) {
        for(const i in kotlinEditors) {
            const editor = kotlinEditors[i]
            const codeArea = editor.node.querySelector(HTML_SELECTORS.CODE_AREA)

            if(codeArea !== null) {
                this.editors.push(new Editor(codeArea as HTMLDivElement, editor))
            } else {
                console.error(`codeArea of ${i + 1} kotlin editor`)
            }
        }
    }

    private setListenerForEditorsAutoExecution() {
        addScrollEventListener(() => {
            for(const editor of this.editors) {
                if(editor.isOnScreen && editor.hasNotBeenExecuted) {
                    editor.execute()
                }
            }
        })
    }
}

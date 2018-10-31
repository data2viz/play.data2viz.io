import {IKotlinPlaygroundEditor} from "./IKotlinPlaygroundEditor"
import {Editor} from "./Editor"

export class D2VKotlinEditors {
    constructor(kotlinEditors: IKotlinPlaygroundEditor[]) {

        this.setEditors(kotlinEditors)

        this.setListenerForEditorsAutoExecution()
    }

    private editors: Editor[] = []

    private setEditors(kotlinEditors: IKotlinPlaygroundEditor[]) {
        for(const i in kotlinEditors) {
            const editor = kotlinEditors[i]
            const codeArea = editor.node.querySelector(".code-area")

            if(codeArea !== null) {
                this.editors.push(new Editor(codeArea as HTMLDivElement, editor))
            } else {
                console.error(`codeArea of ${i + 1} kotlin editor`)
            }
        }
    }

    private setListenerForEditorsAutoExecution() {
        let ticking = false
        window.addEventListener("scroll", (ev) => {
            if(!ticking) {
                window.requestAnimationFrame(() => {
                    for(const editor of this.editors) {
                        if(editor.isOnScreen && editor.hasNotBeenExecuted) {
                            editor.execute()
                        }
                    }
                    ticking = false
                })
            }
            ticking = true
        })
    }
}

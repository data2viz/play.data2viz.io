import {KotlinPlayground} from "./KotlinPlayground"
import {EditorManager} from "./EditorManager"
import {Editor} from "./Editor"

export function setEditorsManager(): Promise<EditorManager> {
    return new Promise(resolve => {
        const codeElementsForKotlinPlaygroundEditorInit = document.querySelectorAll('.kotlin-code')

        const listOfEditor: Editor[] = []

        let numberOfEditorsInitialised = 0

        for(const codeElement of codeElementsForKotlinPlaygroundEditorInit) {
            if(codeElement instanceof HTMLElement) {
                listOfEditor.push(new Editor(codeElement))
            }
        }

        for(const editor of listOfEditor) {
            editor.init().then(() => {
                numberOfEditorsInitialised++
                if(numberOfEditorsInitialised === listOfEditor.length) {
                    resolve(
                        new EditorManager(listOfEditor)
                    )
                }
            })
        }
    })
}

import {IKotlinPlaygroundEditor} from "./IKotlinPlaygroundEditor"

export class Editor {
    constructor(
        public codeArea: HTMLDivElement,
        public kotlinEditor: IKotlinPlaygroundEditor,
    ) {}

    private _hasBeenExecuted = false
    get hasNotBeenExecuted() { return !this._hasBeenExecuted}

    get isOnScreen() {
        return this.codeArea.getBoundingClientRect().bottom >= 0 && this.codeArea.getBoundingClientRect().bottom <= window.innerHeight
    }

    public execute(): Promise<any> {
        return new Promise((resolve, reject) => {
            this._hasBeenExecuted = true
            this.kotlinEditor.view.execute()
            resolve()
            reject(new Error("can't execute kotlin playground editor"))
        });
    }
}
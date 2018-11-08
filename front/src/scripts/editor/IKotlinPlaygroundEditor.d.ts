export interface IKotlinPlaygroundEditor {
    state: String[],            // playground attributes, dependencies and etc.
    nodes: HTMLElement[],       // playground NodeElement.
    execute: () => void,        // function for executing code snippet.
    codemirror: ICodeMirror,    // editor specification.
    getCode(): string,          // function for getting code from snippet.
}

export interface ICodeMirror {

}
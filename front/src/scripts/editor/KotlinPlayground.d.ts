export interface ICodeMirror {

}

export namespace KotlinPlayground {
    interface IEditor {
        state: String[],            // playground attributes, dependencies and etc.
        nodes: HTMLElement[],       // playground NodeElement.
        execute: () => void,        // function for executing code snippet.
        codemirror: ICodeMirror,    // editor specification.
        getCode(): string,          // function for getting code from snippet.
    }

    interface IEventFunctions {
        onChange?:          (code: string) => void;
        onTestPassed?:      () => void;
        onCloseConsole?:    () => void;
        onOpenConsole?:     () => void;
        callback?:          (targetNode: HTMLElement, mountNode: HTMLElement) => void;
        getInstance?:       (instance: KotlinPlayground.IEditor) => void
    }
}
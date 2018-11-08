import {IKotlinPlaygroundEditor} from "./IKotlinPlaygroundEditor"
import {D2VKotlinEditors} from "./D2VKotlinEditors"

declare function KotlinPlayground(selector: string | HTMLElement, eventFunctions?: IEventFunctions): Promise<IKotlinPlaygroundEditor[]>

interface IEventFunctions {
    callback?: (targetNode: HTMLElement, mountNode: HTMLElement) => void,
    getInstance?: (instance: IKotlinPlaygroundEditor) => void
    onChange?: (code: string) => void,
    onTestPassed?: () => void,
}

const listOfKotlinPlaygroundEditors: IKotlinPlaygroundEditor[] = []

const eventFunctions: IKotlinPlaygroundEditorEventFunctions = {
    getInstance: (kotlinPlaygroundEditor: IKotlinPlaygroundEditor) => {
        listOfKotlinPlaygroundEditors.push(kotlinPlaygroundEditor)
    },
    onChange: (code: string) => {
        console.log("Editor code was changed:\n" + code);
    },
};

export function setEditors() {
    const codeElementsForKotlinPlaygroundEditorInit = document.querySelectorAll('.kotlin-code')

    for(const codeElement of codeElementsForKotlinPlaygroundEditorInit) {
        if(codeElement instanceof HTMLElement) {
            const test = KotlinPlayground(codeElement, eventFunctions).then((e) => {
                console.log(e)
            })
        }
    }
}


interface IKotlinPlaygroundEditorEventFunctions {
    onChange?:          (code: string) => void;
    onTestPassed?:      () => void;
    onCloseConsole?:    () => void;
    onOpenConsole?:     () => void;
    callback?:          (targetNode: HTMLElement, mountNode: HTMLElement) => void;
    getInstance?:       (instance: IKotlinPlaygroundEditor) => void
}
import {IKotlinPlaygroundEditor} from "./IKotlinPlaygroundEditor"
import {D2VKotlinEditors} from "./D2VKotlinEditors"

declare function KotlinPlayground(selector: string, eventFunctions?: IEventFunctions): Promise<IKotlinPlaygroundEditor[]>

interface IEventFunctions {
    callback?: (targetNode: HTMLElement, mountNode: HTMLElement) => void,
    getInstance?: (instance: IKotlinPlaygroundEditor) => void
    onChange?: (code: string) => void,
    onTestPassed?: () => void,
}

const listOfKotlinPlaygroundEditors: IKotlinPlaygroundEditor[] = []

const eventFunctions = {
    getInstance: (kotlinPlaygroundEditor: IKotlinPlaygroundEditor) => {
        listOfKotlinPlaygroundEditors.push(kotlinPlaygroundEditor)
    }
};

export function setEditors() {
    KotlinPlayground('.kotlin-code', eventFunctions).then(() => {
        new D2VKotlinEditors(listOfKotlinPlaygroundEditors)
    })
}

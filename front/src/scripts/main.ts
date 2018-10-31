import {IKotlinPlaygroundEditor} from "./editor/IKotlinPlaygroundEditor"
import {D2VKotlinEditors} from "./editor/D2VKotlinEditors"

// init editors
declare function KotlinPlayground(selector: string): Promise<IKotlinPlaygroundEditor[]>

KotlinPlayground('.kotlin-code').then((editors) => {
    new D2VKotlinEditors(editors)
});

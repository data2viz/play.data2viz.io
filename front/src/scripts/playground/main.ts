// import JSZip from "jszip"
//
// const zip = new JSZip()
//
// function decode(string: string) {
//     var t = Date.now();
//     var res = JSZip.utils.uint8Array2String(
//         JSZip.compressions.DEFLATE.uncompress(JSZip.base64.decode(string))
//     );
//     alert(Date.now() - t);
//     return res;
// }
//
// function encode(string: string) {
//     var t = Date.now();
//     var res = JSZip.base64.encode(JSZip.utils.uint8Array2String(
//         JSZip.compressions.DEFLATE.compress(string)));
//     alert(Date.now() - t);
//     return res;
// }

import {Editor} from "../editor/Editor"
import {getUserOs} from "../getUserOs"

declare const RawDeflate: {
    inflate: (string: string) => string
    deflate: (string: string) => string
}

interface IScriptData {
    name: string,
    code: string,
}

export function urlScriptHistory() {
    let scriptData: IScriptData = {
        name: 'data2viz playground',
        code: 'console.log("hello")',
    };

    const urlData = getUrlData()

    const codeElementForKotlinPlayground = document.querySelector('.kotlin-code')

    if(codeElementForKotlinPlayground && codeElementForKotlinPlayground instanceof HTMLElement) {

        if(urlData.hasScriptData) {
            scriptData = urlData.scriptData
            codeElementForKotlinPlayground.textContent = scriptData.code
        }

        const onCodeChange = (code: string) => {
            updateUrlAndScriptData(code, scriptData)
        }

        new Editor(codeElementForKotlinPlayground, getUserOs(), onCodeChange).init().then(editor => {
            editor.execute()

            window.onpopstate = () => {
                console.log("history navigation")

                if (editor.KotlinPlaygroundEditorInstance) {
                    console.log(editor.KotlinPlaygroundEditorInstance.codemirror)
                }
            }
        })
    }
}

function updateUrlAndScriptData(code: string, scriptData: IScriptData) {
    scriptData.code = code
    updateHash(scriptData)
}

function getUrlData(): {hasScriptData: boolean, scriptData: IScriptData} {
    const hash = window.location.hash
    const match = hash.match(/#\/S\/(.*)$/)

    const defaultReturn = {
        hasScriptData: false,
        scriptData: {
            code: "",
            name: "",
        }
    }

    if(match && match[1]) {
        const scriptFromUrl: Object = JSON.parse(decode(match[1]))

        if (scriptFromUrl.hasOwnProperty("name") && scriptFromUrl.hasOwnProperty("code")) {
            return {
                hasScriptData: true,
                scriptData: {
                    code: (scriptFromUrl as IScriptData).code,
                    name: (scriptFromUrl as IScriptData).name + " updated",
                }
            }
        } else {
            console.error("script from url isn't type of IScriptData")
            return defaultReturn
        }
    } else {
        return defaultReturn
    }
}

function decode(string: string) {
    return RawDeflate.inflate(window.atob(string));
}

function encode(string: string) {
    return window.btoa(RawDeflate.deflate(string));
}

function updateHash(script: IScriptData) {
    // window.location.hash = (
    //     '/S/' + encode(JSON.stringify(script))
    // );

    const locationPath      = "/playground/"
    const locationHash      = `/S/${encode(JSON.stringify(script))}`

    history.pushState(null, "", `${locationPath}#${locationHash}`)
}

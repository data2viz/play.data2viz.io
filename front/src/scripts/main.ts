declare function KotlinPlayground(selector: string): Promise<IKotlinPlaygroundEditor[]>

interface IKotlinPlaygroundEditor {
    config: {},
    node: HTMLElement,
    targetNode: HTMLElement,
}

document.addEventListener('DOMContentLoaded', function() {
    const editors = KotlinPlayground('.kotlin-code').then((editors) => {
        for(const editor of editors) {
            console.log(editor.node)
        }
    });
});
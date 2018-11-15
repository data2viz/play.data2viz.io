export function createHTMLElement(tagName: keyof HTMLElementTagNameMap, content?: string | HTMLElement[], classname?: string) {
    const newElement = document.createElement(tagName)

    if (typeof content === "string") {
        newElement.innerHTML = content
    } else if (content) {
        for(const htmlElement of content) {
            newElement.appendChild(htmlElement)
        }
    }

    if(classname) newElement.className = classname

    return newElement
}
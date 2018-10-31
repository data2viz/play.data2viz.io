export function addScrollEventListener(fun: () => void) {
    let ticking = false
    window.addEventListener("scroll", (ev) => {
        if(!ticking) {
            window.requestAnimationFrame(() => {
                fun()
                ticking = false
            })
        }
        ticking = true
    })
}

export function getPageScrollPositionTop(): number {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : ((document.documentElement || document.body.parentNode || document.body) as HTMLElement).scrollTop
}
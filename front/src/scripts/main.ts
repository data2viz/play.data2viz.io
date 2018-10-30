console.log("hello")

declare function KotlinPlayground(selector: string): any

document.addEventListener('DOMContentLoaded', function() {
    KotlinPlayground('.kotlin-code');
});
// ==UserScript==
// @name          Auto All Page
// @version       0.0.2
// @author        reforget-id
// @namespace     autoallpage
// @icon          https://img.icons8.com/cotton/2x/overview-pages-1.png
// @homepage      https://github.com/reforget-id/AutoAllPage
// @description   Otomatis menampilkan semua halaman artikel berita dalam 1 page
// @downloadURL   https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js
// @updateURL     https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js 
// @include       http*://*.detik.com/*
// @include       http*://*.kompas.com/*
// @run-at        document-start
// ==/UserScript==


function detikRedirect() {
    let url = window.location.href
    let regex = /(?<=^.+\.detik\.com\/.+\/.+\/.+)(\?(tag_from|(?!single).*)|(?<=[a-zA-Z])|\/\d?)$/
    //let regex = /(?<=^.+\.detik\.com\/.+\/.+\/.+)((?<!\?single=\d)|\?tag_from.*|\/\d?)$/
    let matcher = url.match(regex)
    if (matcher) {
        let replacer = url.replace(regex, '?single=1')
        window.location.href = replacer
    }
}


function kompasRedirect() {
    let url = window.location.href
    let regex = /(?<=^.+\.kompas.com\/(\w*(\/|))read\/\d+\/\d+\/\d+\/\d+\/.+)(\?page=\d|\/|(?<!\?page=all.*))$/
    let matcher = url.match(regex)
    if (matcher) {
        let replacer = url.replace(regex, '?page=all')
        window.location.href = replacer
    }
}


detikRedirect() 
kompasRedirect()

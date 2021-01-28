// ==UserScript==
// @name          Auto All Page
// @version       1.7.3
// @author        reforget-id
// @namespace     autoallpage
// @icon          https://www.iconsdb.com/icons/download/orange/pages-1-256.png
// @homepage      https://github.com/reforget-id/AutoAllPage
// @description   Otomatis menampilkan semua halaman artikel berita dalam 1 page
// @downloadURL   https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js
// @updateURL     https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js 
// @include       http*://*.detik.com/*
// @include       http*://*.kompas.com/*
// @include       http*://*.tribunnews.com/*
// @include       http*://*.merdeka.com/*
// @include       http*://*.suara.com/*
// @include       http*://*.matamata.com/*
// @include       http*://*.sindonews.com/read/*
// @include       http*://*.inews.id/*
// @include       http*://*.grid.id/read/*
// @include       http*://*.bolasport.com/read/*
// @include       http*://*.motorplus-online.com/read/*
// @include       http*://*.gridoto.com/read/*
// @include       http*://*.pikiran-rakyat.com/*
// @include       http*://*.kontan.co.id/news/*
// @include       http*://akurat.co/*
// @include       http*://m.akurat.co/*
// @include       http*://*.kompasiana.com/*
// @include       http*://*.cnbcindonesia.com/*
// @include       http*://*.republika.co.id/*
// @include       http*://creativedisc.com/*
// @include       http*://*.okezone.com/read/*
// @grant         GM_xmlhttpRequest
// @run-at        document-start
// ==/UserScript==

'use strict';

(() => {
    // http*://*.jpnn.com/news/*

    let mainPage
    const url = window.location.href
    const log = '[AutoAllPage]'

    const redirectRegex = {
        detik: /(?<=^.+\.detik\.com\/[a-z-]+\/d-\d+\/.+)((?<!\?.*|\/\d*)|\?.*(?<!\?single=1)|\/\d*)$/,
        kompas: /(?<=^.+\.kompas.com\/([a-z-]+\/|)read\/\d{4}\/\d{2}\/\d{2}\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all(#page\d+|))|\/)$/,
        tribun: /(?<=^.+.tribunnews.com\/([a-z-]+\/|)\d{4}\/\d{2}\/\d{2}\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        merdeka: /(?<=^.+\.merdeka\.com\/[a-z-]+\/.+\.html)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        suara: /(?<=^.+\.(suara|matamata)\.com\/[a-z-]+\/\d{4}\/\d{2}\/\d{2}\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        sindo: /(?<=^.+\.sindonews\.com\/read\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?showpage=all)|\/\d*)$/,
        inews: /(?<=^.+\.inews\.id\/(berita|[a-z-]+\/[a-z-]+)\/.+)((?<!\?.*|\/(all.*|\d*))|(\/all.+)|\/\d*|\?.*)$/,
        grid: /(?<=^.+\.(grid\.id|(motorplus-online|gridoto|bolasport)\.com)\/read\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        pr: /(?<=^.+\.pikiran-rakyat\.com\/[a-z-]+\/pr-\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        kontan: /(?<=^.+\.kontan\.co\.id\/news\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        akurat: /(?<=^.+akurat\.co\/[a-z-]+\/id-\d{7}-.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        mAkurat: /(?<=^.+m\.akurat\.co\/id-\d{7}-.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        kompasiana: /(?<=^.+\.kompasiana\.com\/.+\/[a-z0-9]{24}\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all(#sectionall|))|\/)$/,
        cnbc: /(?<=^.+\.cnbcindonesia\.com\/[a-z-]+\/\d{14}-\d{1,2}-\d{4,6}\/.+)(\/([2-9]|\d{2})(\?.+|))$/,
        republika: /(?<=^.+\.republika\.co\.id\/berita\/[a-z0-9]+\/.+)(-part\d+.*)$/,
        jpnn: /(?<=^.+\.jpnn\.com\/news\/.+)(\?.+=.+)$/,
        cd: /(?<=^.+creativedisc\.com\/\d{4}\/\d{2}\/.+)(\/\d+\/.*)$/,
        okezone: /(?<=^.+\.okezone\.com\/read\/\d{4}\/\d{2}\/\d{2}\/\d{1,3}\/\d{7}\/.+)(\?page=([2-9]|\d{2}).*)$/
    }

    const xhrRegex = {
        cnbc: /(^.+\.cnbcindonesia\.com\/[a-z-]+\/\d{14}-\d{1,2}-\d{4,6}\/.+)/,
        republika: /(^.+\.republika\.co\.id\/berita\/[a-z0-9]+\/.+)/,
        jpnn: /(^.+\.jpnn\.com\/news\/.+)/,
        cd: /(^.+creativedisc\.com\/\d{4}\/\d{2}\/.+)/,
        okezone: /(^.+\.okezone\.com\/read\/\d{4}\/\d{2}\/\d{2}\/\d{1,3}\/\d{7}\/.+)/
    }

    for (let i in redirectRegex) {
        let urlMatcher = url.match(redirectRegex[i])
        if (urlMatcher) {
            redirector(i)
            break
        }
    }

    function redirector(patternName) {
        let replacer, newUrl

        if (patternName == 'detik') {
            replacer = '?single=1'
        } else if (patternName == 'sindo') {
            replacer = '?showpage=all'
        } else if (patternName == 'inews') {
            replacer = '/all'
        } else if (
            patternName == 'cnbc' ||
            patternName == 'republika' ||
            patternName == 'jpnn' ||
            patternName == 'cd' ||
            patternName == 'okezone') {
            replacer = ''
        } else {
            replacer = '?page=all'
        }

        newUrl = url.replace(redirectRegex[patternName], replacer)
        console.log(`EXECUTE [${patternName}] REDIRECT`)
        window.location.href = newUrl
        return
    }

    window.addEventListener('DOMContentLoaded', () => {
        console.log(log, 'DOM fully loaded and parsed')

        for (let i in xhrRegex) {
            let urlMatcher = url.match(xhrRegex[i])
            if (urlMatcher) {
                prepareXhr(i)
                break
            }
        }
    })

    function prepareXhr(patternName) {
        switch(patternName) {
            case 'cnbc' :
                cnbcXhr()
                break
            case 'republika' :
                republikaXhr()
                break
            case 'jpnn' :
                jpnnXhr()
                break
            case 'cd' :
                cdXhr()
                break
            case 'okezone' :
                okezoneXhr()
        }

        /*
        if (patternName == 'cnbc') {
            cnbcXhr()
        } else if (patternName == 'republika') {
            republikaXhr()
        } else if (patternName == 'jpnn') {
            jpnnXhr()
        }*/
    }

    function findPagination(className) {
        const paging = document.getElementsByClassName(className)[0]
        if (!paging) console.log(log, 'Pagination is not found')
        return paging
    }

    function createXhr(url, i, find) {
        console.log(log, `Creating XHR request for page ${i+1}`)
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'GET',
                url: url,
                overrideMimeType: 'text/html; charset=UTF-8',
                responseType: 'document',
                binary: false,
                timeout: 0,
                withCredentials: true,
                onerror: () => {
                    reject(console.log(log, 'Failed to create XHR request'))
                },
                onload: async (res) => {
                    let text
                    const hostname = window.location.hostname

                    if (hostname.includes('jpnn.com') || hostname.includes('creativedisc.com')) {
                        text = res.response.querySelector(find)
                    } else {
                        text = res.response.getElementsByClassName(find)[0]
                    }

                    if (text) {
                        console.log(log, `Success get text of page ${i+1} from XHR`)
                        if (hostname.includes('okezone.com')) {
                            mainPage.after(text)
                        } else {
                            mainPage.appendChild(text)
                        }
                        resolve(console.log(log, `Append page ${i+1} to main page`))
                    } else {
                        reject(console.log(log, 'Failed to get text XHR'))
                    }
                }
            })
        })
    }

    async function cnbcXhr() {
        const pagination = findPagination('paging-circle')
        if (!pagination) return

        const pagingParent = pagination.parentNode
        pagingParent.style.display = 'none'
        pagingParent.previousElementSibling.style.display = 'none'
        mainPage = document.getElementsByClassName('detail_text')[0].parentNode

        for (let i = 1; i < pagination.childElementCount; i++) {
            let href = pagination.children[i].getAttribute('href')
            await createXhr(href, i, 'detail_text')
        }
    }

    async function republikaXhr() {
        const pagination = findPagination('pagination')
        if (!pagination) return

        const pageChildren = pagination.getElementsByTagName('a')
        mainPage = document.getElementsByClassName('teaser_detail')[0]
        pagination.style.display = 'none'

        for (let i = 1; i < pageChildren.length - 1; i++) {
            let href = pageChildren[i].getAttribute('href')
            await createXhr(href, i, 'artikel')
        }

        const bacaJuga = document.getElementsByClassName('baca-juga')
        for (let i = 0; i < bacaJuga.length; i++) {
            bacaJuga[i].remove()
            i--
        }
    }

    async function jpnnXhr() {
        const pagination = findPagination('pagination')
        if (!pagination) return

        const pageChildren = pagination.getElementsByTagName('a')
        mainPage = document.querySelector('[itemprop=articleBody]')
        pagination.style.display = 'none'

        for (let i = 1; i < pageChildren.length - 1; i++) {
            let href = pageChildren[i].getAttribute('href')
            await createXhr(href, i, '[itemprop=articleBody]')
        }
    }

    async function cdXhr() {
        const pagination = findPagination('post-nav-links')
        if (!pagination) return

        const pageChildren = pagination.getElementsByTagName('a')
        mainPage = document.querySelector('[itemprop=articleBody]').parentNode
        pagination.style.display = 'none'

        for (let i = 0; i < pageChildren.length; i++) {
            let href = pageChildren[i].getAttribute('href')
            await createXhr(href, i+1, '[itemprop=articleBody]')
        }
    }

    async function okezoneXhr() {
        const pagination = document.getElementsByClassName('paging')
        if (!pagination.length) {
            console.log(log, 'Pagination is not found')
            return
        }

        const pageChildren = pagination[0].getElementsByTagName('a')[0]
        const href = pageChildren.getAttribute('href')
        mainPage = document.getElementsByClassName('read')[0]

        if (href === '#') return
        
        await createXhr(href, 1, 'read')

        const detailTag = document.getElementsByClassName('detail-tag')
        for (let i = 0; i < pagination.length; i++) {
            pagination[i].style.display = 'none'
            detailTag[i].style.display = 'none'
        }
    }

})()

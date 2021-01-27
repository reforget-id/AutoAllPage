// ==UserScript==
// @name          Auto All Page
// @version       1.6.0
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
// @include       http*://*.sindonews.com/*
// @include       http*://*.inews.id/*
// @include       http*://*.grid.id/*
// @include       http*://*.bolasport.com/*
// @include       http*://*.motorplus-online.com/*
// @include       http*://*.gridoto.com/*
// @include       http*://*.pikiran-rakyat.com/*
// @include       http*://*.kontan.co.id/*
// @include       http*://akurat.co/*
// @include       http*://m.akurat.co/*
// @include       http*://*.kompasiana.com/*
// @run-at        document-start
// ==/UserScript==


(() => {

    const url = window.location.href
    const regex = {
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
        kompasiana: /(?<=^.+\.kompasiana\.com\/.+\/[a-z0-9]{24}\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all(#sectionall|))|\/)$/
    }

    for (i in regex) {
        let urlMatcher = url.match(regex[i])
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
        } else {
            replacer = '?page=all'
        }

        newUrl = url.replace(regex[patternName], replacer)
        console.log(`EXECUTE [${patternName}] REDIRECT`)
        window.location.href = newUrl
        return
    }

})()
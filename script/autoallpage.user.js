// ==UserScript==
// @name          Auto All Page
// @version       1.3.0
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
// @run-at        document-start
// ==/UserScript==


function consts() {
	const data = {
		detikRegex : /(?<=^.+\.detik\.com\/[a-z-]+\/d-\d+\/.+)((?<!\?.*|\/\d*)|\?.*(?<!\?single=1)|\/\d*)$/,
		kompasRegex : /(?<=^.+\.kompas.com\/([a-z-]+\/|)read\/\d{4}\/\d{2}\/\d{2}\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all(#page\d+|))|\/)$/,
		tribunRegex : /(?<=^.+.tribunnews.com\/([a-z-]+\/|)\d{4}\/\d{2}\/\d{2}\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		merdekaRegex : /(?<=^.+\.merdeka\.com\/[a-z-]+\/.+\.html)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		suaraRegex : /(?<=^.+\.(suara|matamata)\.com\/[a-z-]+\/\d{4}\/\d{2}\/\d{2}\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		sindoRegex : /(?<=^.+\.sindonews\.com\/read\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?showpage=all)|\/\d*)$/,
		inewsRegex : /(?<=^.+\.inews\.id\/(berita|[a-z-]+\/[a-z-]+)\/.+)((?<!\?.*|\/(all.*|\d*))|(\/all.+)|\/\d*|\?.*)$/,
        gridRegex : /(?<=^.+\.(grid\.id|(motorplus-online|gridoto|bolasport)\.com)\/read\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
        prRegex : /(?<=^.+\.pikiran-rakyat\.com\/[a-z-]+\/pr-\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/
	}
	
	return data
}


async function urlRedirect() {
	const url = window.location.href
	
	detikRedirect(url)
	kompasRedirect(url)
	tribunnewsRedirect(url)
	merdekaRedirect(url)
	suaraRedirect(url)
	sindonewsRedirect(url)
	inewsRedirect(url)
    gridRedirect(url)
    pikiranRakyatRedirect(url)
}

function redirectHelper(url, regex, replacer) {
	let matcher = url.match(regex)
	if (matcher) {
		let newUrl = url.replace(regex, replacer)
		console.log('EXECUTE REDIRECT')
		window.location.href = newUrl
		return
	}
}

/*
function ampRemover(a, ampRegex, replacer) {
	let url = a.getAttribute("href")
	let matcher = url.match(ampRegex)
	if (matcher) {
		let newUrl = url.replace(regex, replacer)
		a.setAttribute('href', newUrl)
	}
}
*/


function detikRedirect(url) { 
	new Promise (() => { 
		redirectHelper(url, consts().detikRegex, '?single=1')
		console.log('detik redirect')
	})
}

function kompasRedirect(url) { 
	new Promise (() => {
		//let ampRegex = /(^.+(amp(\/s\/\w+|)))(?<!\.kompas.com\/(\w*(\/|))read\/\d+\/\d+\/\d+\/\d+\/.+$)/
		//ampRemover(a, ampRegex, 'https://www')
		redirectHelper(url, consts().kompasRegex, '?page=all')
		console.log('kompas redirect')
	})
}

function tribunnewsRedirect(url) { 
	new Promise (() => {
		//let ampRegex = /(^.+(amp\/s\/))(?<!\.tribunnews.com\/(\w*(\/|))\d+\/\d+\/\d+\/.+)/
		redirectHelper(url, consts().tribunRegex, '?page=all')
		console.log('tribun redirect')
	})
}

function merdekaRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().merdekaRegex, '?page=all')
		console.log('merdeka redirect')
	})
}

function suaraRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().suaraRegex, '?page=all')
		console.log('suara redirect')
	})
}

function sindonewsRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().sindoRegex, '?showpage=all')
		console.log('sindo redirect')
	})
}

function inewsRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().inewsRegex, '/all')
		console.log('inews redirect')
	})
}

function gridRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().gridRegex, '?page=all')
		console.log('grid redirect')
	})
}

function pikiranRakyatRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().prRegex, '?page=all')
		console.log('pikiran rakyat redirect')
	})
}


urlRedirect()

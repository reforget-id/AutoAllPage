// ==UserScript==
// @name          Auto All Page
// @version       1.0.0
// @author        reforget-id
// @namespace     autoallpage
// @icon          https://img.icons8.com/cotton/2x/overview-pages-1.png
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
// @run-at        document-start
// ==/UserScript==


async function urlMatcher() {
	const url = window.location.href
	
	detikRedirect(url)
	kompasRedirect(url)
	tribunnewsRedirect(url)
	merdekaRedirect(url)
	suaraRedirect(url)
	sindonewsRedirect(url)
	inewsRedirect(url)
	gridRedirect(url)
}


function redirectHelper(url, regex, replacer) {
	let matcher = url.match(regex)
	if (matcher) {
		let newUrl = url.replace(regex, replacer)
		window.location.href = newUrl
		return
	}
}


function detikRedirect(url) { 
	new Promise (() => { 
		//let regex = /(?<=^.+\.detik\.com\/.+\/.+\/.+)(\?(tag_from|(?!single).*)|(?<=[a-zA-Z])|\/\d?)$/
		let regex = /(?<=^.+\.detik\.com\/.+\/.+\/.+)((?<!\?single=\d)|\?tag_from.*|\/\d*)$/
		redirectHelper(url, regex, '?single=1')
		console.log('detik')
	})
}


function kompasRedirect(url) { 
	new Promise (() => {
		let regex = /(?<=^.+\.kompas.com\/(\w*(\/|))read\/\d+\/\d+\/\d+\/\d+\/.+)((?<!\?page=all)|\?page=\d|\/)$/
		redirectHelper(url, regex, '?page=all')
		console.log('kompas')
	})
}


function tribunnewsRedirect(url) { 
	new Promise (() => {
		let regex = /(?<=^.+.tribunnews.com\/\w+\/\d+\/\d+\/\d+\/.+)((?<!\?page=all)|\?page=\d|\/)$/
		redirectHelper(url, regex, '?page=all')
		console.log('tribun')
	})
}


function merdekaRedirect(url) {
	new Promise (() => {
		let regex = /(?<=^.+\.merdeka\.com\/\w+\/.+\.html)(\?page=\d|\/|)$/
		redirectHelper(url, regex, '?page=all')
		console.log('merdeka')
	})
}


function suaraRedirect(url) {
	new Promise (() => {
		let regex = /(?<=^.+\.(suara|matamata)\.com\/\w+\/\d+\/\d+\/\d+\/\d+\/.+)((?<!\?page=all)|\?page=\d|\/)$/
		redirectHelper(url, regex, '?page=all')
		console.log('suara')
	})
}


function sindonewsRedirect(url) {
	new Promise (() => {
		let regex = /(?<=^.+\.sindonews\.com\/read\/\d+\/\d+\/.+)((?<!\?showpage=all)|\/\d*)$/
		redirectHelper(url, regex, '?showpage=all')
		console.log('sindo')
	})
}


function inewsRedirect(url) {
	new Promise (() => {
		let regex = /(?<=^.+\.inews\.id\/\w+\/\w+\/.+)((?<!\/all)|\/\d*)$/
		redirectHelper(url, regex, '/all')
		console.log('inews')
	})
}


function gridRedirect(url) {
	new Promise (() => {
		let regex = /(?<=^.+\.(grid\.id|(motorplus-online|gridoto|bolasport)\.com)\/read\/\w+\/.+)((?<!\?page=all)|\?page=\d|\/)$/
		let matcher = url.match(regex)
		redirectHelper(url, regex, '?page=all')
		console.log('grid')
	})
}


urlMatcher()

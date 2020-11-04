// ==UserScript==
// @name          Auto All Page
// @version       1.2.1
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


function consts() {
	const data = {
		detikRegex : /(?<=^.+\.detik\.com\/.+\/.+\/.+)((?<!\?.*|\/\d*)|\?.*(?<!\?single=\d)|\/\d*)$/,
		kompasRegex : /(?<=^.+\.kompas.com\/(\w*(\/|))read\/\d+\/\d+\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all.*)|\/)$/,
		tribunRegex : /(?<=^.+.tribunnews.com\/(\w*(\/|))\d+\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		merdekaRegex : /(?<=^.+\.merdeka\.com\/\w+\/.+\.html)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		suaraRegex : /(?<=^.+\.(suara|matamata)\.com\/\w+\/\d+\/\d+\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		sindoRegex : /(?<=^.+\.sindonews\.com\/read\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?showpage=all)|\/\d*)$/,
		inewsRegex : /(?<=^.+\.inews\.id\/(berita|(\w+\/\w+))\/.+)((?<!\?.*|\/(all|\d*))|\/\d*|\?.*)$/,
		gridRegex : /(?<=^.+\.(grid\.id|(motorplus-online|gridoto|bolasport)\.com)\/read\/\w+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/
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
}


function ampRemover(a, ampRegex, replacer) {
	let url = a.getAttribute("href")
	let matcher = url.match(ampRegex)
	if (matcher) {
		let newUrl = url.replace(regex, replacer)
		a.setAttribute('href', newUrl)
	}
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


function detikRedirect(url) { 
	new Promise (() => { 
		redirectHelper(url, consts().detikRegex, '?single=1')
		console.log('detik redirect')
	})
}

function kompasRedirect(url) { 
	new Promise (() => {
		let ampRegex = /(^.+(amp(\/s\/\w+|)))(?<!\.kompas.com\/(\w*(\/|))read\/\d+\/\d+\/\d+\/\d+\/.+$)/
		//ampRemover(a, ampRegex, 'https://www')
		redirectHelper(url, consts().kompasRegex, '?page=all')
		console.log('kompas redirect')
	})
}

function tribunnewsRedirect(url) { 
	new Promise (() => {
		let ampRegex = /(^.+(amp\/s\/))(?<!\.tribunnews.com\/(\w*(\/|))\d+\/\d+\/\d+\/.+)/
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


urlRedirect()

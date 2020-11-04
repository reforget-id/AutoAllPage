// ==UserScript==
// @name          Auto All Page
// @version       1.1.0
// @author        reforget-id
// @namespace     autoallpage
// @icon          https://img.icons8.com/cotton/2x/overview-pages-1.png
// @homepage      https://github.com/reforget-id/AutoAllPage
// @description   Otomatis menampilkan semua halaman artikel berita dalam 1 page
// @downloadURL   https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js
// @updateURL     https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js 
// @run-at        document-start
// @include       http*://*
// ==/UserScript==


function consts() {
	const data = {
		detikRegex : /(?<=^.+\.detik\.com\/.+\/.+\/.+)((?<!\?.*|\/\d*)|\?.*(?<!\?single=\d)|\/\d*)$/,
		kompasRegex : /(?<=^.+\.kompas.com\/(\w*(\/|))read\/\d+\/\d+\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all.*)|\/)$/,
		tribunRegex : /(?<=^.+.tribunnews.com\/(\w*(\/|))\d+\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		merdekaRegex : /(?<=^.+\.merdeka\.com\/\w+\/.+\.html)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		suaraRegex : /(?<=^.+\.(suara|matamata)\.com\/\w+\/\d+\/\d+\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/,
		sindoRegex : /(?<=^.+\.sindonews\.com\/read\/\d+\/\d+\/.+)((?<!\?.*|\/)|\?.*(?<!\?showpage=all)|\/\d*)$/,
		inewsRegex : /(?<=^.+\.inews\.id\/\w+\/\w+\/.+)((?<!\?.*|\/(all|\d*))|\/\d*|\?.*)$/,
		gridRegex : /(?<=^.+\.(grid\.id|(motorplus-online|gridoto|bolasport)\.com)\/read\/\w+\/.+)((?<!\?.*|\/)|\?.*(?<!\?page=all)|\/)$/
	}
	
	return data
}


function getAnchor(element) {
	while (element && element.nodeName != "A") {
		element = element.parentNode;
	}
	return element;
}

document.addEventListener("click", function(e){
	let anchor = getAnchor(e.target);

    if (!anchor || anchor.target || anchor.protocol == "javascript:" || e.isTrusted === false || !anchor.offsetParent || (e.isTrusted == null && !e.detail)) {
		return;
	}

	urlReplace(anchor)
	
});


async function urlReplace(a) {
	detikReplacer(a)
	kompasReplacer(a)
	tribunnewsReplacer(a)
	merdekaReplacer(a)
	suaraReplacer(a)
	sindonewsReplacer(a)
	inewsReplacer(a)
	gridReplacer(a)
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

function replaceHelper(a, regex, replacer) {
	let url = a.getAttribute("href")
	let matcher = url.match(regex)
	if (matcher) {
		let newUrl = url.replace(regex, replacer)
		console.log('EXECUTE REPLACE')
		a.setAttribute('href', newUrl)
		return
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


function detikReplacer(a) { 
	new Promise (() => { 
		replaceHelper(a, consts().detikRegex, '?single=1')
		console.log('detik replace')
	})
}

function detikRedirect(url) { 
	new Promise (() => { 
		redirectHelper(url, consts().detikRegex, '?single=1')
		console.log('detik redirect')
	})
}


function kompasReplacer(a) { 
	new Promise (() => {
		let ampRegex = /(^.+(amp(\/s\/\w+|)))(?<!\.kompas.com\/(\w*(\/|))read\/\d+\/\d+\/\d+\/\d+\/.+$)/
		//ampRemover(a, ampRegex, 'https://www')
		replaceHelper(a, consts().kompasRegex, '?page=all')
		console.log('kompas replace')
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


function tribunnewsReplacer(a) { 
	new Promise (() => {
		let ampRegex = /(^.+(amp\/s\/))(?<!\.tribunnews.com\/(\w*(\/|))\d+\/\d+\/\d+\/.+)/
		replaceHelper(a, consts().tribunRegex, '?page=all')
		console.log('tribun replace')
	})
}

function tribunnewsRedirect(url) { 
	new Promise (() => {
		let ampRegex = /(^.+(amp\/s\/))(?<!\.tribunnews.com\/(\w*(\/|))\d+\/\d+\/\d+\/.+)/
		redirectHelper(url, consts().tribunRegex, '?page=all')
		console.log('tribun redirect')
	})
}


function merdekaReplacer(a) {
	new Promise (() => {
		replaceHelper(a, consts().merdekaRegex, '?page=all')
		console.log('merdeka replace')
	})
}

function merdekaRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().merdekaRegex, '?page=all')
		console.log('merdeka redirect')
	})
}


function suaraReplacer(a) {
	new Promise (() => {
		replaceHelper(a, consts().suaraRegex, '?page=all')
		console.log('suara replace')
	})
}

function suaraRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().suaraRegex, '?page=all')
		console.log('suara redirect')
	})
}


function sindonewsReplacer(a) {
	new Promise (() => {
		replaceHelper(a, consts().sindoRegex, '?showpage=all')
		console.log('sindo replace')
	})
}

function sindonewsRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().sindoRegex, '?showpage=all')
		console.log('sindo redirect')
	})
}


function inewsReplacer(a) {
	new Promise (() => {
		replaceHelper(a, consts().inewsRegex, '/all')
		console.log('inews replace')
	})
}

function inewsRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().inewsRegex, '/all')
		console.log('inews redirect')
	})
}


function gridReplacer(a) {
	new Promise (() => {
		replaceHelper(a, consts().gridRegex, '?page=all')
		console.log('grid replace')
	})
}

function gridRedirect(url) {
	new Promise (() => {
		redirectHelper(url, consts().gridRegex, '?page=all')
		console.log('grid redirect')
	})
}


urlRedirect()
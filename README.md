# Auto All Page

*Otomatis menampilkan semua halaman artikel berita dalam 1 halaman.*

Banyak situs berita online yang menampilkan artikelnya dalam bentuk pagination pada websitenya (satu artikel dibagi ke
dalam beberapa halaman), sehingga pembaca akan terus menerus menekan tombol halaman selanjutnya, yang mana ini akan
merepotkan pembaca. Auto All Page membantu menampilkan artikel dalam halaman penuh.

### How It Works

Cara kerjanya sederhana, hanya melakukan redirect pada url yang sesuai dengan pattern regex.
Misalnya pada url : `https://detik.com/read/judul-berita?page=1` akan dialihkan ke
halaman `https://detik.com/read/judul-berita?page=all`.

### Installation

Auto All Page merupakan sebuah userscript yang diinstal melalui userscript manager. Sebelum mengintal script ini, instal
dulu ekstensi yang dibutuhkan.

Extension  : [Violentmonkey](https://violentmonkey.github.io/) atau [Tampermonkey](https://www.tampermonkey.net)  
Userscript : [GitHub](https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js)
atau [GreasyFork](https://greasyfork.org/id/scripts/415479-auto-all-page)

### Browser Support

Script ini menggunakan regex lookbehind yang mana tidak semua browser mendukungnya.

* Chromium : 62+
* Firefox : 78+
* Firefox Android : 79+
* Safari : not supported

Browser lainnya lihat di : [Caniuse](https://caniuse.com/js-regexp-lookbehind)
atau [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Supported Sites

<details>
    <summary>Script ini dapat bekerja pada website (klik untuk melihat) :
</summary>  
    <ul>
        <li>100kpj.com</li>
        <li>aboutmalang.com</li>
        <li>akurat.co</li>
        <li>bolasport.com</li>
        <li>cnbcindonesia.com</li>
        <li>cnnindonesia.com</li>
        <li>detik.com</li>
        <li>genpi.co</li>
        <li>grid.id</li>
        <li>gridoto.com</li>
        <li>herstory.co.id</li>
        <li>idntimes.com</li>
        <li>idxchannel.com</li>
        <li>inews.id</li>
        <li>intipseleb.com</li>
        <li>jpnn.com</li>
        <li>kompas.com</li>
        <li>kompas.tv</li>
        <li>kompasiana.com</li>
        <li>kontan.co.id</li>
        <li>motorplus-online.com</li>
        <li>pikiran-rakyat.com</li>
        <li>republika.co.id</li>
        <li>sahijab.com</li>
        <li>sindonews.com</li>
        <li>sonora.id</li>
        <li>suara.com</li>
        <li>tempo.co</li>
        <li>tribunnews.com</li>
        <li>tvonenews.com</li>
        <li>viva.co.id</li>
        <li>wartaekonomi.co.id</li>
    </ul>    
</details>

**TODO :**

* jabarekspres.com
* mojok.co
* okezone.com

### Known Issues

* URL yang mengandung AMP tidak akan diredirect untuk menghindari konflik dengan script atau ekstensi yang mengatasi
  AMP. Beberapa script dan ekstensi yang bisa digunakan untuk mengatasi
  AMP : [Redirect AMP to HTML](https://www.daniel.priv.no/web-extensions/amp2html.html)
  , [Disable AMP by AdGuard](https://github.com/AdguardTeam/DisableAMP)
  , [RemoveAMP](https://github.com/bentasker/RemoveAMP).

### Contributing

Silahkan membuat issue disini untuk melaporkan adanya bug pada script atau merequest website yang belum didukung script.

### Support Me

Jika kalian merasa script ini sangat membantu, pertimbangkanlah untuk memberi sedikit donasi. Bantu programmer ini
mengupgrade laptop bututnya dan membelikan paracetamol untuk meringankan beban di kepalanya.

<a href="https://trakteer.id/reforget-id" target="_blank">
    <img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-1.png" height="50" style="border:0;height:50px;" alt="Trakteer Saya">
</a>
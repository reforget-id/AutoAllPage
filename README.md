# Auto All Page
*Otomatis menampilkan semua halaman artikel berita dalam 1 page.* 

Banyak situs berita online yang menampilkan artikelnya dalam bentuk pagination pada websitenya (satu artikel dibagi ke dalam beberapa halaman), sehingga pembaca akan terus menerus menekan tombol halaman selanjutnya, yang mana ini akan merepotkan pembaca.

### Installation

Greasyfork : [Auto All Page](https://greasyfork.org/id/scripts/415479-auto-all-page) <br>
Github     : [Auto All Page](https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js)

### How It Works

Cara kerjanya sederhana, hanya melakukan redirect pada url yang sesuai dengan pattern regex. 
Misalnya pada url : `https://detik.com/news/judul-berita?page=1` akan diredirect ke halaman `https://detik.com/news/judul-berita?page=all`.

### Supported Sites

Script ini dapat bekerja pada website :
* detik.com 
* kompas.com 
* tribunnews.com 
* merdeka.com 
* suara.com 
* matamata.com 
* sindonews.com 
* inews.id 
* grid.id 
* bolasport.com 
* motorplus-online.com 
* gridoto.com
* pikiran-rakyat.com
* kontan.co.id
* akurat.co
* kompasiana.com
* viva.co.id
* kompas.tv
* wartaekonomi.co.id
* herstory.co.id
* sonora.id
* tvonenews.com
* intipseleb.com
* sahijab.com
* jagodangdut.com
* 100kpj.com
* idntimes.com

Experimental :
* cnbcindonesia.com
* republika.co.id
* okezone.com
* creativedisc.com

Todo :
* tempo.co
* cnnindonesia.com
* jpnn.com
* genpi.co
* bolatimes.com

### Browser Support

Script ini menggunakan regex lookbehind yang mana tidak semua browser mendukungnya.

* Chromium : 62 or later
* Firefox : 78 or later
* Safari : not supported
* Firefox for Android : not supported

Browser lainnya lihat : [Caniuse](https://caniuse.com/mdn-javascript_builtins_regexp_lookbehind_assertion) atau [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Known Issues

* URL yang menggunakan AMP belum bisa diredirect. Beberapa script dan ekstensi yang bisa digunakan untuk mengatasi AMP : [Redirect AMP to HTML](https://www.daniel.priv.no/web-extensions/amp2html.html), [Disable AMP by AdGuard](https://github.com/AdguardTeam/DisableAMP), [RemoveAMP](https://github.com/bentasker/RemoveAMP). 

### Contributing

Silahkan membuat issue disini untuk melaporkan adanya bug pada script atau merequest website yang belum didukung script.

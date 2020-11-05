# Auto All Page
*Otomatis menampilkan semua halaman artikel berita dalam 1 page.* 

Banyak situs berita online yang menampilkan artikelnya dalam bentuk pagination pada websitenya (satu artikel dibagi ke dalam beberapa halaman), sehingga pembaca akan terus menerus menekan tombol halaman selanjutnya, yang mana ini akan merepotkan pembaca.

### How It Works

Cara kerjanya sederhana, hanya melakukan redirect pada url yang sesuai dengan pattern regex. 
Misalnya pada url : `https://detik.com/news/berita?page=1` akan di redirect ke halaman `https://detik.com/news/berita?page=all`.

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

### Installation

Greasyfork : [Auto All Page](https://greasyfork.org/id/scripts/415479-auto-all-page) <br>
Github     : [Auto All Page](https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js)


### Browser Support

Script ini menggunakan regex lookbehind yang mana tidak semua browser mendukungnya.

* Chromium : 62 or later
* Firefox : 78 or later
* Safari : not supported
* Firefox for Android : not supported

Browser lainnya lihat : [Caniuse](https://caniuse.com/mdn-javascript_builtins_regexp_lookbehind_assertion) atau [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Known Issues

* URL yang menggunakan AMP belum bisa diredirect.
* Beberapa situs dengan pagination yang tidak menyediakan `page=all` :
  * okezone.com
  * tempo.co
  * republika.co.id
  * genpi.co
  * jpnn.com
  * creativedisc.com
  * bolatimes.com

### Contributing

Silahkan membuat issue disini untuk melaporkan adanya bug pada script atau merequest website yang belum didukung script.

# Auto All Page
*Otomatis menampilkan semua halaman artikel berita dalam 1 page.* 

Banyak situs berita online yang menampilkan artikelnya dalam bentuk pagination pada websitenya (satu artikel dibagi ke dalam beberapa halaman), sehingga pembaca akan terus menerus menekan tombol halaman selanjutnya, yang mana ini akan merepotkan pembaca.

### Installation

Greasyfork : [Auto All Page](https://greasyfork.org/id/scripts/415479-auto-all-page) <br>
Github     : [Auto All Page](https://raw.githubusercontent.com/reforget-id/AutoAllPage/main/script/autoallpage.user.js)


### How It Works

Cara kerjanya sederhana, hanya melakukan redirect pada url yang sesuai dengan pattern regex. 
Misalnya pada url : `https://detik.com/news/berita?page=1` akan di redirect ke halaman `https://detik.com/news/berita?page=all`.

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

### Known Issues

* URL yang menggunakan AMP belum bisa diredirect.
* Beberapa situs dengan pagination yang tidak memiliki `page=all` :
  * okezone.com
  * tempo.co
  * republika.co.id
  * genpi.co
  * jpnn.com
  * creativedisc.com
  * bolatimes.com

### Contributing

Silahkan membuat issue disini untuk melaporkan adanya error pada script atau merequest website yang belum didukung script.

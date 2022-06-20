const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6283846819169','6283833328666']
global.premium = ['6283846819169']
global.packname = '\n\n\n\n\n\n\n\n\n\n© ManzWasHere||+62🇲🇨\nI`m From Indonesia\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nWa : 0838-4681-9169\nSelain Itu Clone\n\n\n\n\n\n\n\n\n\n'
global.sessionName = 'NGENTOD'
global.namabotnya = 'Manz Devv'
global.namaownernya = 'Manz Is Real'
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.kirkey = 'KirBotz'
global.wame = 'https://wa.me/6283846819169'
global.gckirbotz = 'https://chat.whatsapp.com/CX0d2T3r76FD3tOMBbjOSI'
global.ownerNumber = ["6283846819169@s.whatsapp.net"]
global.email = 'frmnpsinjek@gmail.com'
global.yt = 'https://bit.ly/3x5LOv3'
global.webkir = 'https://bit.ly/3NoTmjd'
global.githubkir = 'https://bit.ly/3MnmiqF'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.mess = {
    success: 'Sukses Ya Anj',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: 'Sabar Cok Asu',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Kir/JANGANDIUBAH/fuck.webp')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = {
  name: "yetkilirol",
  code: `
$author[$serverName;$serverIcon]
$description[Başarılı Bir Şekilde Yetkili Rolü Ayarlandı!

> Ayarlanan Rol: <@&$mentionedRoles[1]>,
> Yetkili: <@$authorID>]
$color[9269ff]
$footer[]
$addTimestamp[1]

$setServerVar[yetkilirol;$mentionedRoles[1]]

$onlyIf[$mentionedRoles[1]!=;Lütfen Bir Rol Etiketleyiniz]

$onlyPerms[admin;Bu Komutu Kullanmak için __YÖNETİCİ__ İznin Olmalı!] 
  `
}

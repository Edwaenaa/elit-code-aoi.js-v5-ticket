module.exports = [{
  name: "ticket-kategori",
  code: `
  $author[$username;$userAvatar[$authorID]]
$description[Ticket Kategorisi Başarılı Bir Şekilde Ayarlandı!

» Ayarlanan Kategori: <#$message[1]>]
$footer[Elixir Development]
$color[BLACK]

$setServerVar[kategori;$message[1]]

$onlyIf[$message[1]!=;{newEmbed:{title:HATA!}{description:Lütfen Bir Kategori ID'si Giriniz!}{color:RED}}]

$onlyIf[$isNumber[$message[1]]==true;{newEmbed:{title:HATA!}{description:Girdiğiniz Şey Bir Kategori ID'si Değil!}{color:RED}}]
`
}]

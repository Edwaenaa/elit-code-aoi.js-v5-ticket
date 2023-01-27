module.exports = [{
  name: "ticket-text",
  aliases: ["ticket"],
  code: `
$author[$serverName[$guildID];$serverIcon[$guildID]]
$description[***__LÜTFEN OKUYUN__***
> Troll Amaçlı vb. Ticket Açmak Yasaktır!

> Ticket Açtıktan Sonra En Kısa Sürede Dönüş Yapılacaktır!

> Lütfen Oda da Saygılı Konuşun ve Sorununuzu Belirtin!

> Ekibimiz Sizinle İlgilenecektir!]
$footer[Elixir Development]
$color[PURPLE]

$addButton[1;Ticket;secondary;ticketButton;no;🎫]
`
},{
  type: "interaction",
  prototype: "button",
  name: "ticketButton",
  code: `
  $interactionReply[<@!$authorID>, Ticket Kanalınız Başarıyla Oluşturuldu!;;;;;yes]
  
$newTicket[$username;{
"content" : "<@&$getServerVar[yetkilirol]>",
"embeds" : "{newEmbed:{author:$username:$authorAvatar}{description:$get[text]}}",
"components" : "{actionRow:{button:Ticket Kapat:secondary:kapatButton:no:🎟️}}",
"ephemeral" : false,
"options" : { "interaction" : true }
}
;$getServerVar[kategori];no;Error!]

$let[text;<@$authorID> **Ticket Oluşturdu! Lütfen Yetkililerimizi Bekleyiniz**]

$cooldown[6h;{
"content" : "Lütfen \`%time%\` Beklleyiniz!",
"ephemeral" : true,
"options" : { "interaction" : true }
}]
`
},{
  type: "interaction",
  prototype: "button",
  name: "kapatButton",
  code: `
  $interactionReply[**<@!$authorID>, Adlı Yetkili Ticket Kanalını Kapattı!**;;;;;yes]

$closeTicket[Bir Sorun Oluştu!]
`
}]

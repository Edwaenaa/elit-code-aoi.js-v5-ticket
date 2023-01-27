const aoijs = require("aoi.js")
const bot = new aoijs.Bot({

token:process.env.token,
prefix: ["f!","?"],
intents: "all"
})

bot.onMessage() 
bot.onInteractionCreate();
bot.onJoin();
bot.onLeave();

const elixir = require("express")();elixir.get
('/', (req, res) =>{res.send("E L Yapımı :D");});elixir.listen(8080);

const loader = new aoijs.LoadCommands(bot);
(async () => {
await loader.load(bot.cmd, "./komutlar/")
})()

loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgCyan"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
 
})

    process.on('unhandledRejection', (reason, p) => {
        console.log('[hataAyıklayıcı] :: İşlenmeyen Reddetme/Yakalama');
        console.log(reason, p);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log('[hataAyıklayıcı] :: Yakalanmayan İstisna/Yakalama');
        console.log(err, origin);
    }); process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log('[hataAyıklayıcı] :: Yakalanmayan İstisna/Yakalama (MONİTÖR)');
        console.log(err, origin);
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log('[hataAyıklayıcı] :: Çoklu Çözümler');
    });


bot.variables({
  kategori: "",
  yetkilirol: "",
  ticket: ""
    }, "main")

bot.readyCommand({
      channel: "",
      code: `
$log[$userTag[$clientID] olarak Hazır!]`
   }) 
//////////OYNUYOR KISMI//////////
bot.status({
  text: `ELİT CODE TİCKET`,
  type: `LISTENING`,
  status: "dnd",
  time: 15
})
//////////EVAL & PİNG//////////
bot.command({
  name: "ping",
  code: `**Pong!** \`$ping\`` 
})

bot.command({
  name: "eval",
  code: `$eval[$message]
  $onlyForIDs[$botOwnerID;Bu Komut Developere Özel!]`
})


//Elit Codeye Aittir Çalınması veya Paylaşılması Yasaktır!

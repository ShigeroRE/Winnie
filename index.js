const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity("s'amuser dans la Forêt des Rêves Bleu")
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", (message) => {
    if (message.author == client.user) return false;
    const prefix = "win!"
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'ping') {
        let pingembed = new Discord.RichEmbed()
        .addField("Ping!", 'Pong! :ping_pong:')
        .setColor("#FFFFFF")
        message.channel.send(pingembed)
        console.log("Commande PING utilisée")
    }
    if (message.content.includes("Mihelp")){
        message.member.send("Salut, je suis le grand winnie, j'ai remarqué une demande d'aide de ta part." + "\n" + " Je viens donc t'informer de plusieurs chose :" + "\n" + "Si tu met Ô avec le nom d'un des dieux, il te répondra." + "\n" + "Si tu met Winnie et calin dans la même phrase, un gif aléatoire apparait," + "\n" + "Si tu met Winnie et bisous dans la même phrase, un gif aléatoire apparait," + "\n" + "Et si tu met Winnie et rêves bleu dans la même phrase, un gif sur un des dieux apparait.")
    }

    if (message.content.includes("Ô") && message.content.includes("winnie"))
    {
        message.reply("Le grand winnie accepte ton offrande et te remercie.")
    }

    if (message.content.includes("Ô") && message.content.includes("tigrou"))
    {
        message.reply("Tigrou te remercie, et te laissera vivre en paix et t'aidera lors de conflit.")
    }

    if (message.content.includes("Ô") && message.content.includes("porcinet"))
    {
        message.reply("Porcinet te remercie, et te conseillera et te réconfortera avec un peu de musique dans certains moment.")
    }

    if (message.content.includes("Ô") && message.content.includes("bourriquet"))
    {
        message.reply("Bourriquet te remercie, et te protégera de toutes les intempéris sur les mers et Océns.")
    }

    if (message.content.includes("Ô") && message.content.includes("coco lapin"))
    {
        message.reply("Coco Lapin te remercie, et t'aidera à te nourrir sur besoin, tes champs se porteront mieux maintenant.")
    }

    if (message.content.includes("Ô") && message.content.includes("Grand gourou"))
    {
        message.reply("Grand Gourou te remercie, et t'aidera à faire durer ton mariage")
    }

    if (message.content.includes("Ô") && message.content.includes("Petit gourou"))
    {
        message.reply("Petit Gourou te remercie, et t'aidera dans toutes les chasses que tu entreprendras")
    }

    if (message.content.includes("Ô") && message.content.includes("Maître hibou"))
    {
        message.reply("Maître hibou te remercie, et te protégera toi ainsi que ta famille.")
    }

    if (message.content.includes("Ô") && message.content.includes("grignotin"))
    {
        message.reply("Grignotin te remercie, et sera t'acceuillir lors de ta visite aux enfers.")
    }

    if (message.content.includes("Ô") && message.content.includes("Lumpy l'éfélant"))
    {
        message.reply("Lumpy l'éfélant te remercie, il t'accompagnera a tout tes fêtes mais ne te dira quand même pas la recette de la mielase.")
    }

    if (message.content.includes("Ô") && message.content.includes("Maman éfélan"))
    {
        message.reply("Maman éfélan te remercie, et t'aidera à trouvé l'amour de ta vie.")
    }

    if (message.content.includes("Ô") && message.content.includes("Jean-Christophe"))
    {
        message.reply("Jean-Christophe te remercie, et t'accompagnera dans tous tes voyages, mais ne te feras pas voyager dans la Forêt des rêves bleu.")
    }

    if (message.content.includes("dieux") && message.content.includes("Panthéon"))
    {
        message.member.send("Les autres dieux dans la Forêt rêves bleu sont : Tigrou, Porcinet, Bourriquet, Coco Lapin, Grand Gourou, Petit Gourou, Maître Hibou, Grignotin, Lumpy l'éfélant, Maman éfélan et Jean-Christophe. N'hésite pas à aller les prier avec une petite offrande =D ")
    }

    Calin1 = "./GIF D/Calin1.gif"; Calin2 = "./GIF D/Calin2.gif"; Calin3 = "./GIF D/Calin3.gif";
    if (message.content.includes("Winnie") && message.content.includes("calin"))
    {
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ({ files : [Calin1] }); break;
            case 2: message.channel.send ({ files : [Calin2] }); break;
            case 3: message.channel.send ({ files : [Calin3] }); break;
        }
    }

    Bisous1 = "./GIF D/Bisous1.gif"; Bisous2 = "./GIF D/Bisous2.gif"; Bisous3 = "./GIF D/Bisous3.gif";
    if (message.content.includes("Winnie") && message.content.includes("bisous"))
    {
        number = 3;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ({ files : [Bisous1] }); break;
            case 2: message.channel.send ({ files : [Bisous2] }); break;
            case 3: message.channel.send ({ files : [Bisous3] }); break;
        }
    }

    Bourriquet = "./GIF D/Bourriquet.gif"; CocoLapin = "./GIF D/CocoLapin.gif"; GrandGourou = "./GIF D/GrandGourou.gif"; Grignotin = "./GIF D/ Grignotin.gif"; Hibou = "./GIF D/Hibou.gif"; JC = "./GIF D/JC.gif"; Lumpy = "./GIF D/Lumpy.gif"; Maman = "./GIF D/Maman.jpg"; PetitGourou = "./GIF D/PetitGourou.gif"; Porcinet = "./GIF D/Porcinet.gif"; Tigrou = "./GIF D/Tigrou.gif"; Winnie = "./GIF D/Winnie.gif";
    if (message.content.includes("Winnie") && message.content.includes("rêves bleu"))
    {
        number = 12;
        var random = Math.floor (Math.random() * (number - 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ({ files : [Bourriquet] }); break;
            case 2: message.channel.send ({ files : [CocoLapin] }); break;
            case 3: message.channel.send ({ files : [GrandGourou] }); break;
            case 4: message.channel.send ({ files : [Grignotin] }); break;
            case 5: message.channel.send ({ files : [Hibou] }); break;
            case 6: message.channel.send ({ files : [JC] }); break;
            case 7: message.channel.send ({ files : [Lumpy] }); break;
            case 8: message.channel.send ({ files : [Maman] }); break;
            case 9: message.channel.send ({ files : [PetitGourou] }); break;
            case 10: message.channel.send ({ files : [Porcinet] }); break;
            case 11: message.channel.send ({ files : [Tigrou] }); break;
            case 12: message.channel.send ({ files : [Winnie] }); break;
        }
    }
})

client.login(process.env.TOKEN)

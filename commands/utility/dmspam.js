const Discord = require('discord.js');

exports.run = (client, message, args) => {
    try {
            let msg;
            client.on("message", async message => {
              // Send message & Store reference to the message
              msg = await message.author.send(`loading...`);
              setTimeout(() => {
                // Edit msg 20 seconds later
                msg.edit('⏰ |reeeeeeeeeeeeeeeeeeeeeeeeeeeee');
              }, args);
            });
    }catch(err) {
        console.log('Error here');
        message.author.send("error in channel here");
    }
}
    
exports.help = {
        enabled: true,
        hideHelp: false,
        type: "util",
        name: "dmspam",
        description: "create a timer that edits in the set amount of time (in seconds)",
        usage: "`/ dmspam 10s`",
}

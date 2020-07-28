const Discord = require('discord.js');

exports.run = (client, message, args) => {
    try {
            let msg;
            client.on("message", async message => {
              // Send message & Store reference to the message
              msg = await message.channel.send(`:timer: | Timer for **${args}**`);
              setTimeout(() => {
                // Edit msg 20 seconds later
                msg.edit('⏰ | ***`This timer is up`***');
              }, args);
            });
    }catch(err) {
        console.log('Error here');
        message.channel.send("error in channel here");
    }
}
    
exports.help = {
        enabled: true,
        hideHelp: false,
        type: "util",
        name: "timer",
        description: "create a timer that edits in the set amount of time (in seconds)",
        usage: "`iy timer 10s`",
}
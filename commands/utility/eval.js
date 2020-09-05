const Discord = require('discord.js');
const tools = require('iyempty/tools');
exports.run = (client, message, args) => {
    try {
          const output = eval(args.join(' '));
           console.log(`evalulated javascript command line |  "${args}"`);
    }catch(err) {
        console.log('Error here');
        message.channel.send("error in channel here");
    }
}
    
exports.help = {
        enabled: true,
        hideHelp: false,
        type: "util",
        name: "eval",
        description: "run js code)",
        usage: "`/ eval message.channel.send(\"hi\");`",
}

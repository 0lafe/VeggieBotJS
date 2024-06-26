const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {

	data: new SlashCommandBuilder()
		.setName('credits')
		.setDescription('Gives credits.'),
	async execute(interaction) {
		var used = global.timesUsed;
		
		const buildEmbed = new MessageEmbed()
			.setColor("RANDOM")
			.setTitle("Credits")
			.setDescription("Thanks for showing <3")
			.setFooter("A bot by Soariticus#0666 and 0lafe")
			.addFields(
				{ name: "Developer", value: "Soariticus#0666 and 0lafe", inline: true },
				{ name: "Special thanks to", value: "Bay1k#1799 <3", inline: true},
				{ name: "Rewritten on", value: "6/3/2024", inline: true},
				{ name: "Website", value: "https://soaritic.us ", inline: true},
				{ name: "Times used since last restart", value: used.toString(), inline: true},
				{ name: "Want VeggieBot in your server?", value: "Message 0lafe", inline:true },
			);
		
		await interaction.reply({embeds: [buildEmbed]});

	},
};
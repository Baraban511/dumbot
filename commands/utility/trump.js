const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('trump')
		.setDescription('A famous Trump dumb quote.'),
	async execute(interaction) {
        var dumbQuote = await axios.get("https://www.tronalddump.io/random/quote");
		await interaction.reply(dumbQuote.data.value);
	},
};
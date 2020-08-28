module.exports = {
	name: "title",
	aliases: ["movie"],
	description: "Search for a movie title",
	usage: "<movie title>",
	args: true,
	cooldown: 10,
	execute(message) {
		message.channel.send("Pong.");
	},
};

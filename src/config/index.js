const Config = require("../../config.json");

if (!Config) {
	console.error("Bot config doesn't exist");
	//eslint-disable-next-line
    process.exit();
}

module.exports = Config;

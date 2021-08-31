const YeloApi = require("../lib/index.js");

(async () => {
    const x = await YeloApi.discordwhois("425326889565945856")

    console.log(x)
})();

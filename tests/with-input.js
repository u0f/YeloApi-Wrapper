const YeloApi = require("../lib/index.js");

(async () => {
    const x = await YeloApi.cryptoprice("btc")

    console.log(x)
})();

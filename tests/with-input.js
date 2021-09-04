const YeloApi = require("../lib/index.js");

(async () => {
    const x = await YeloApi.discWhois("827182806357639228")

    console.log(x)
})();

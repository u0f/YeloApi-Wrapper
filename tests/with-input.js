const YeloApi = require("../lib/index.js");

(async () => {
    const x = await YeloApi.shortURL("https://www.npmjs.com/package/yeloapi")

    console.log(x)
})();

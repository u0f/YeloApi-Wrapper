const YeloApi = require("../lib/index.js");

(async () => {
    const x = await YeloApi.genpass(12)

    console.log(x)
})();

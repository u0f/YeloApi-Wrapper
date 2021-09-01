const YeloApi = require("../lib/index.js");

(async () => {
    const x = await YeloApi.rmeme()

    console.log(x)
})();

const YeloApi = require("../lib/index.js");

(async () => {
    const x = await YeloApi.ping()

    console.log(x)
})();

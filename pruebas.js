const YeloApi = require("./lib/index.js");

(async () => {
    const x = await YeloApi.ping(12)

    console.log(x)
})();

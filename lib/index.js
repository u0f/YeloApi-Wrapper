const axios = require("axios");
const urlApi = "https://api.yeloapi.ga/api/"

/**
 * 
 * @param {String} text 
 * @returns 
 */
 async function ytthumbnail(text){

    let final = " ";
    if(!text) throw new Error("You need to put yt video URL to get the thumbnail");

    const data = await axios.get(urlApi + "ytthumbnail?url="+ text)
    
    final = data.data;
    return final
}

/**
 * 
 * @param {Number} text 
 * @returns 
 */
 async function genpass(text){

    let final = " ";
    if(!text) throw new Error("You need to put the length of password");

    const data = await axios.get(urlApi + "genpass?length="+ text)
    
    final = data.data;
    return final
}

/**
 * 
 * @param {Number} text 
 * @returns 
 */
 async function nhentai(text){

    let final = " ";
    if(!text) throw new Error("You need to put the Doujin number/id");

    const data = await axios.get(urlApi + "nhentai?number="+ text)
    
    final = data.data;
    return final
}

/**
 * 
 * @param {String} text 
 * @returns 
 */
async function encrypt(text){

    let final = " ";
    if(!text) throw new Error("You need to put a text to encrypt");

    const data = await axios.get(urlApi + "encrypt?text="+ text)
    
    final = data.data;
    return final
}

/**
 * 
 * @param {String} text 
 * @returns 
 */
 async function decrypt(text){

    let final = " ";
    if(!text) throw new Error("You need to put a text to decrypt");

    const data = await axios.get(urlApi + "decrypt?text="+ text)
    
    final = data.data;
    return final
}

/**
 * 
 * @param {String} text 
 * @returns 
 */
 async function discWhois(text){

    let final = " ";
    if(!text) throw new Error("You need to put the user ID");

    const data = await axios.get(urlApi + "discordwhois?id="+ text)
    
    final = data.data;
    return final
}

/**
 * 
 * @param {String} text 
 * @returns 
 */
 async function cryptoprice(text){

    let final = " ";
    if(!text) throw new Error("You need to put the crypto");

    const data = await axios.get(urlApi + "cryptoprice?crypto="+ text)
    
    final = data.data;
    return final
}


/**
 *  
 * @returns 
 */
 async function ping(){

    const data = await axios.get(urlApi + "ping")
    
    final = data.data;
    return final
}

/**
 *  
 * @returns 
 */
 async function rmeme(){

    const data = await axios.get(urlApi + "rmeme")
    
    final = data.data;
    return final
}

/**
 *  
 * @returns 
 */
 async function status(){

    const data = await axios.get(urlApi)
    
    final = data.data;
    return final
}

/**
 *  
 * @returns 
 */
 async function endpoints(){

    const data = await axios.get(urlApi + "endpoints")
    
    final = data.data;
    return final
}


/**
 *  
 * @returns 
 */
 async function rcolor(){

    const data = await axios.get(urlApi + "rcolor")
    
    final = data.data;
    return final
}

/**
 *  
 * @returns 
 */
 async function r8ball(){

    const data = await axios.get(urlApi + "8ball")
    
    final = data.data;
    return final
}

/**
 * 
 * @param {String} text 
 * @returns 
 */
 async function discInvite(text){

    let final = " ";
    if(!text) throw new Error("You need to put the invite code");

    const data = await axios.get(urlApi + "discordinvite?invite="+ text)
    
    final = data.data;
    return final
}

/**
 * 
 * @param {String} text 
 * @returns 
 */
 async function discEmoji(text){

    let final = " ";
    if(!text) throw new Error("You need to put the emoji id");

    const data = await axios.get(urlApi + "discordemoji?id="+ text)
    
    final = data.data;
    return final
}

module.exports = {
    encrypt,
    decrypt,
    ping,
    endpoints,
    status,
    rcolor,
    r8ball,
    ytthumbnail,
    genpass,
    nhentai,
    discWhois,
    cryptoprice,
    rmeme,
    discInvite,
    discEmoji
}
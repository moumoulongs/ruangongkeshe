import JSEncrypt from "jsencrypt";

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey =
    '-----BEGIN PUBLIC KEY-----' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2wuZQGoCioJg4RZjzTmyeGqGLrjP4jR7AF85d7j/jhghoRZeFatM+V5WkvS6irQ2Q7v4DFW+4oLYUbDuTQAgUn+Bbo/MnSaYLI9WssM+W6j5mrxd8ca+PRoRF+pPQzIpMAjwDdY+pPi6l/AzEiRBurguAYve8kBKe8lActVS+mwIDAQAB' +
    '-----END PUBLIC KEY-----';

/* const privateKey =
    '-----BEGIN PRIVATE KEY-----' +
    '' +
    '-----END PRIVATE KEY-----'; */

// 加密
export function encrypt(txt) {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey); // 设置公钥
    return encryptor.encrypt(txt); // 对数据进行加密
    // var pubblicData=jsencrypt.setEncrypt(publicKey,txt);
    // return pubblicData;
}

// 解密
/* export function decrypt(txt) {
    const encryptor = new JSEncrypt();
    encryptor.setPrivateKey(privateKey); // 设置私钥
    return encryptor.decrypt(txt); // 对数据进行解密
} */

const ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


const env = {
    port: Number(process.env.PORT || 3000),
    baseUrl: process.env.BASE_URL || "https://localhost:3000",
    driver: process.env.DRIVER === "firestore" ? "firestore" : "memory",
    codeAlphabet: process.env.CODE_ALPHABET || ALPHABET,
    retetionYears: 10,
    counerBlockSize: 1000,
    cacheSeconds: 300,
    MaxUrlLength: 2048,
}

module.exports = env;

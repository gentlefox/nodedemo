// default app configuration
var defaultConfig = {
    port         : process.env.PORT || 4000,
    db           : process.env.MONGODB_URL,
    cookieSecret : 'SESSION-SECRET-KEY',
    cryptoKey    : 'CRYPTO-SECRET-KEY',
    cryptoAlgo   : 'aes256'
};

module.exports = defaultConfig;

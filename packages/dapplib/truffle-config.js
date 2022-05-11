require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture oppose bottom tooth notice crime remain million imitate private fringe slender'; 
let testAccounts = [
"0x9aeb7b1b032aea5c26e21412c1852587aba27945aee520dcfc25ceb0405799bf",
"0x12607f45c68692ec75d57d337b1347ce47bdd3cae2d41756d45966c11443844f",
"0xa9772a3d360ec159246de582df29e088a56d8ef8a094a723b14979b106e48419",
"0x2702859d54998a1b1f813796819b53dbb689de729b577f1a5affba3c4d5d30f7",
"0x16fbc6394cc8eea5edf139cb54f95eca51ddb375f54ca58625d9350375e7c368",
"0x4440b0b0b23a62cdd5b108d33edbf090cba9628b3690d33873d58e657438a626",
"0x3b61f4d10d8a2f4ab22ac129969c77279fe92258637ba79a5a73747c70dbf719",
"0x3b33a6492c8f8e01d61066bf3936afe7852c651354675cf487ac1d73112fd035",
"0xec5bb87128ba3097321a70bec71ecddf544a0ce97f9ea8310049ac27a0466dcf",
"0x3c37095a336dae062a6fa48557d241a8c1db49d5a032ea107ac924ae14913104"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



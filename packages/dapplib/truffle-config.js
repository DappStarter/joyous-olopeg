require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy response random unlock grace define army gate'; 
let testAccounts = [
"0x55d49bbed3a9cfc5ab9352723cde68791f4524923da1ca6696bbb94e585673e3",
"0x112ac51c44e53cfd542698ae65c66414d36c48f3553329dd3763460b22a89879",
"0x01c6e34cda42d42a99b2c05113cb02c80640c3428ce95753dfb3c6dd7190ae53",
"0x0cef53bc0a40b7a83a48f90d2e6dac041392361621c60bdf2996708665463c44",
"0xa65547f2ec15271195238bc6aff5173b480ae193344b8d487d42e67cc0f6fcd5",
"0x4cc3f1a200193d3bbad8dd66b198bf8cad7d28fcdc178c3ca966ecce8ca6c6e9",
"0xe203db9e7f2f4ab3560fd79189606a27b528643c122054b6f9737b62a1816ba6",
"0xfa0d28f91a9a2398960f5611462a0a8812013b71d495d107743bb291273ef071",
"0xed7fee95d00e820c4ad96e8d092c6101f7f527d23661505ddf184c1d22558ebb",
"0x8e4f2a99b1c478a1343691d17e2c86e695d06474cef151a3a0cc76e0254698e1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

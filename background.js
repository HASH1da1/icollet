//create BTC contextmenus
browser.contextMenus.create({
    id: "BTC",
    title: "BTC",
    contexts: ["selection", "link"],
    icons:{
    "16":"icon/btc.png"
    }
});
//wallet
browser.contextMenus.create({
    id:"BTC-wallet",
    title:"BTC-wallet",
    contexts:["selection","link"],
    parentId:"BTC"
})

browser.contextMenus.create({
    id:"blockchair-BTC",
    title:"BlockChair-BTC",
    contexts:["selection", "link"],
    parentId:"BTC-wallet",
    icons:{
        "16":"icon/blockchair.png"
    }
});

browser.contextMenus.create({
    id:"blockchain.com",
    title:"BlockChain.com-BTC",
    contexts:["selection","link"],
    parentId:"BTC-wallet",
    icons:{
        "16":"icon/blockchain.png"
    }
})

browser.contextMenus.create({
    id:"chainflyer",
    title:"Chainflyer",
    contexts:["selection","link"],
    parentId:"BTC-wallet",
    icons:{
        "16":"icon/chainflyer.png"
    }
});

browser.contextMenus.create({
    id:"bitcoinabuse",
    title:"BitcoinAbuse",
    contexts:["selection","link"],
    parentId:"BTC-wallet",
    icons:{
        "16":"icon/bitcoinabuse.png"
    }
});

browser.contextMenus.create({
    id:"blockcypher",
    title:"BlockCypher",
    contexts:["selection","link"],
    parentId:"BTC-wallet",
    icons:{
        "16":"icon/blockcypher.png"
    }
});


//transaction
browser.contextMenus.create({
    id:"BTC-transaction",
    title:"BTC-transaction",
    contexts:["selection","link"],
    parentId:"BTC"
});

browser.contextMenus.create({
    id:"minergate-btc",
    title:"MinerGate-BTC",
    contexts:["selection","link"],
    parentId:"BTC-transaction",
    icons:{
        "16":"icon/minergate.png"
    }
});

browser.contextMenus.create({
    id:"chainflyer-tr",
    title:"Chainflyer-Tr",
    contexts:["selection","link"],
    parentId:"BTC-transaction",
    icons:{
        "16":"icon/chainflyer.png"
    }
});

browser.contextMenus.create({
    id:"blockchair-tx",
    title:"BlockChair-TX",
    contexts:["selection","link"],
    parentId:"BTC-transaction",
    icons:{
        "16":"icon/blockchair.png"
    }
});


//create BCH contextmenus
browser.contextMenus.create({
    id:"BCH",
    title:"BCH",
    contexts:["selection","link"],
    icons:{
        "16":"icon/bch.png"
    }
});

//BCH-wallet
browser.contextMenus.create({
    id:"BCH-wallet",
    title:"BCH-wallet",
    contexts:["selection","link"],
    parentId:"BCH"
});

browser.contextMenus.create({
    id:"blockchain-bch",
    title:"BlockChain Explorer",
    contexts:["selection","link"],
    parentId:"BCH-wallet",
    icons:{
        "16":"icon/blockchain.png"
    }
});

browser.contextMenus.create({
    id:"blockchair-bch",
    title:"BlockChair-BCH",
    contexts:["selection","link"],
    parentId:"BCH-wallet",
    icons:{
        "16":"icon/blockchair.png"
    }
});

//BCH-transaction
browser.contextMenus.create({
    id:"BCH-transaction",
    title:"BCH-transaction",
    contexts:["selection","link"],
    parentId:"BCH"
});

browser.contextMenus.create({
    id:"blockchain-bch-tx",
    title:"BlockChain-BCH-TX",
    contexts:["selection","link"],
    parentId:"BCH-transaction",
    icons:{
        "16":"/icon/blockchain.png"
    }
});

browser.contextMenus.create({
    id:"blockchair-bch-tx",
    title:"BlockChair-BCH-TX",
    contexts:["selection","link"],
    parentId:"BCH-transaction",
    icons:{
        "16":"icon/blockchair.png"
    }
});

//create ETH contextmenus
browser.contextMenus.create({
    id:"ETH",
    title:"ETH",
    contexts:["selection", "link"],
    icons:{
        "16":"icon/eth.png"
    }
});

//ETH-wallet
browser.contextMenus.create({
    id:"ETH-wallet",
    title:"ETH-wallet",
    contexts:["selection","link"],
    parentId:"ETH"
});

browser.contextMenus.create({
    id:"etherscan-addr",
    title:"Etherscan",
    contexts:["selection","link"],
    parentId:"ETH-wallet",
    icons:{
        "16":"icon/etherscan.png"
    }
});

browser.contextMenus.create({
    id:"ethplorer-addr",
    title:"Ethplorer",
    contexts:["selection","link"],
    parentId:"ETH-wallet",
    icons:{
        "16":"icon/ethplorer.png"
    }
});

browser.contextMenus.create({
    id:"etherscamdb",
    title:"EtherScamdb",
    contexts:["selection","link"],
    parentId:"ETH-wallet",
    icons:{
        "16":"icon/etherscamdb.png"
    }
});

//ETH-transaction
browser.contextMenus.create({
    id:"ETH-transaction",
    title:"ETH-transaction",
    contexts:["selection","link"],
    parentId:"ETH"
});

browser.contextMenus.create({
    id:"etherscan-tx",
    title:"Etherscan-TX",
    contexts:["selection","link"],
    parentId:"ETH-transaction",
    icons:{
        "16":"icon/etherscan.png"
    }
});

browser.contextMenus.create({
    id:"ethplorer-tx",
    title:"Ethplorer-TX",
    contexts:["selection","link"],
    parentId:"ETH-transaction",
    icons:{
        "16":"icon/ethplorer.png"
    }
});

//domain abuse check
browser.contextMenus.create({
    id:"ETH-domain",
    title:"ETH-Domain Abuse",
    contexts:["selection","link"],
    parentId:"ETH"
});


browser.contextMenus.create({
    id:"etherscam-domain",
    title:"EtherScamdb-Domain",
    contexts:["selection","link"],
    parentId:"ETH-domain"
});




//create MONA contextmenus
browser.contextMenus.create({
    id:"MONA",
    title:"MONA",
    contexts:["selection","link"],
    icons:{
        "16":"icon/mona.png"
    }
});

//MONA-wallet
browser.contextMenus.create({
    id:"MONA-wallet",
    title:"MONA-wallet",
    contexts:["selection","link"],
    parentId:"MONA"
});

browser.contextMenus.create({
    id:"vippool",
    title:"VIPPOOL",
    contexts:["selection","link"],
    parentId:"MONA-wallet",
    icons:{
        "16":"icon/vippool.png"
    }
});

//MONA-transaction
browser.contextMenus.create({
    id:"MONA-transaction",
    title:"MONA-transaction",
    contexts:["selection","link"],
    parentId:"MONA"
});

browser.contextMenus.create({
    id:"vippool-tx",
    title:"VIPPOOL-TX",
    contexts:["selection","link"],
    parentId:"MONA-transaction",
    icons:{
        "16":"icon/vippool.png"
    }
});


//create empty variable
var addr ="";
var ethDomain ="";


//when you cloick event listening
browser.contextMenus.onClicked.addListener((info, tab) =>{
    if(info.selectionText){
        addr = String(info.selectionText).trim();
    }else if(info.linkText){
        var link = new URL(info.linkText);
        addr = link.host;
    }else if(info.linkUrl){
        var src = new URL(info.linkUrl);
        addr = src.hostname;
    }

    switch(info.menuItemId){
        //BTC-wallet
        case "blockchair-BTC":
            url="https://blockchair.com/bitcoin/address/"+addr;
            break;
        
        case "blockchain.com":
            url="https://www.blockchain.com/ja/btc/address/"+addr;
            break;

        case "chainflyer":
            url="https://chainflyer.bitflyer.jp/Address/"+addr;
            break;

        case "bitcoinabuse":
            url="https://www.bitcoinabuse.com/reports/"+addr;
            break;

        case "blockcypher":
            url="https://live.blockcypher.com/btc/address/"+addr;
            break;

        //BTC-transaction
        case "minergate-btc":
            url="https://minergate.com/blockchain/btc/transaction/"+addr;
            break;
        
        case "chainflyer":
            url="https://chainflyer.bitflyer.jp/Transaction/"+addr;
            break;

        case "blockchair-tx":
            url="https://blockchair.com/bitcoin/transaction/"+addr;
            break;

        //BCH-wallet
        case "blockchain-BCH":
            url="https://www.blockchain.com/ja/bch/address/"+addr;
            break;

        case "blockchair-bch":
            url="https://blockchair.com/bitcoin-cash/address/"+addr;
            break;

        //BCH-transaction
        case "blockchain-bch-tx":
            url="https://www.blockchain.com/ja/bch/tx/"+addr;
            break;

        case "blockchair-bch-tx":
            url="https://blockchair.com/bitcoin-cash/transaction/"+addr;
            break;

        //ETH-wallet
        case "etherscan-addr":
            url="https://etherscan.io/address/"+addr;
            break;
        
        case "ethplorer-addr":
            url="https://ethplorer.io/address/"+addr+"?from=search";
            break;

        case "etherscamdb":
            url="https://etherscamdb.info/address/"+addr;
            break;

        //ETH-transaction
        case "etherscan-tx":
            url="https://etherscan.io/tx/"+addr;
            break;

        case "ethplorer-tx":
            url="https://ethplorer.io/tx/"+addr;
            break;
        //ETH domain abuse
        case "etherscam-domain":
            url="https://etherscamdb.info/domain/"+addr;
            break;

        //MONA-wallet
        case "vippool":
            url="https://explorer.vippool.net/monacoind/address/"+addr;
            break;
        
        //MONA-transaction
        case "vippool-tx":
            url="https://explorer.vippool.net/monacoind/tx/"+addr;
            break;
    }

browser.tabs.create({url: url});

navigator.clipboard.writeText(addr);
});
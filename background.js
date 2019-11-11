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

//create c0ban contextMenus
browser.contextMenus.create({
    id: "c0ban",
    title:"c0ban",
    contexts:["selection","link"],
    icons:{
        "16":"icon/c0ban.png"
    }
});

//c0ban-wallet
browser.contextMenus.create({
    id:"insight",
    title:"Insight",
    contexts:["selelction","link"],
    parentId:"c0ban",
    icons:{
        "16":"icon/insight.ico"
    }
});

//c0ban-transactions
browser.contextMenus.create({
    id:"insight-tx",
    title:"Insight Tx",
    contexts:["selection","link"],
    parentId:"c0ban",
    icons:{
        "16":"icon/insight.ico"
    }
});

//create empty variable
var addr ="";

//when you click event listening
browser.contextMenus.onClicked.addListener((info, tab) =>{
    if(info.selectionText){
        addr = String(info.selectionText).trim();
    };

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

        //BCH-wallet
        case "blockchain-BCH":
            url="https://www.blockchain.com/ja/bch/address/"+addr;
            break;

        case "blockchair-bch":
            url="https://blockchair.com/bitcoin-cash/address/"+addr;
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

        //MONA-wallet
        case "vippool":
            url="https://explorer.vippool.net/monacoind/address/"+addr;
            break;

        //c0ban-wallet
        case "insight":
            url="https://insight-beta.c0ban.com/insight/address/"+addr;
            break;
    };

browser.tabs.create({url: url});

navigator.clipboard.writeText(addr);
});
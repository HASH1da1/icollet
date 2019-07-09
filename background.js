//create BTC contextmenus
browser.contextMenus.create({
    id: "BTC",
    title: "BTC",
    contexts: ["selection", "link"]
});
//wallet
browser.contextMenus.create({
    id:"BTC-wallet",
    title:"BTC-wallet",
    contexts:["selection","link"],
    parentId:"BTC"
})

browser.contextMenus.create({
    id:"BTC.com",
    title:"BTC.com",
    contexts:["selection", "link"],
    parentId:"BTC-wallet"
});

browser.contextMenus.create({
    id:"blockchain.com",
    title:"BlockChain.com-BTC",
    contexts:["selection","link"],
    parentId:"BTC-wallet"
})

browser.contextMenus.create({
    id:"chainflyer",
    title:"Chainflyer",
    contexts:["selection","link"],
    parentId:"BTC-wallet"
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
    parentId:"BTC-transaction"
})


//create BCH contextmenus
browser.contextMenus.create({
    id:"BCH",
    title:"BCH",
    contexts:["selection","link"]
});

//create ETH contextmenus
browser.contextMenus.create({
    id:"ETH",
    title:"ETH",
    contexts:["selection", "link"]
});

//create XRP contextmenus
browser.contextMenus.create({
    id:"XRP",
    title:"XRP",
    contexts:["selection","link"]
});

//create XMR contextmenus
browser.contextMenus.create({
    id:"XMR",
    title:"XMR",
    contexts:["selection","link"]
});

//create MONA contextmenus
browser.contextMenus.create({
    id:"MONA",
    title:"MONA",
    contexts:["selection","link"]
});

//create LTC contextmenus
browser.contextMenus.create({
    id:"LTC",
    title:"LTC",
    contexts:["selection","link"]
});

//create empty variable
var addr ="";


//when you cloick event listening
browser.contextMenus.onClicked.addListener((info, tab) =>{
    if(info.selectionText){
        addr = String(info.selectionText).trim();
    }else if(info.linkText){
        var link = String(info.linkText).trim();
        addr = link;
    }
    switch(info.menuItemId){
        //BTC-wallet
        case "BTC.com":
            url="https://btc.com/"+addr;
            break;
        
        case "blockchain.com":
            url="https://www.blockchain.com/ja/btc/address/"+addr;
            break;

        //BTC-transaction
        case "minergate-btc":
            url="https://minergate.com/blockchain/btc/transaction/"+addr;
            break;
        
        case "chainflyer":
            url="https://chainflyer.bitflyer.jp/Address/"+addr;
            break;
    }

browser.tabs.create({url: url});

navigator.clipboard.writeText(addr);
});

getPinData = function(info){
    var image = info.srcUrl;
    var link = info.linkUrl;

    if(typeof image){
        console.log(image);
        // chrome.tabs.create({ 'url': 'chrome://extensions/?options=' + chrome.runtime.id });
        // console.log(chrome.runtime.id);
        chrome.tabs.create({url: image});
    } else {
        console.log(link);
        chrome.tabs.create({url: link});
    }
};

chrome.contextMenus.create({
    title: "Save w/ Schedule Maven",
    contexts:["image"],
    onclick: getPinData
});


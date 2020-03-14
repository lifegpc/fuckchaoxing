console.log('downloadsub.js');
var b;
chrome.runtime.onMessage.addListener(function(message, sender,sendResponse)
{
    if(message.action=="savesub"&&b==undefined)
    {
        b=new Blob([message.b], {type: 'text/plain'});
        saveAs(b,message.name);
        sendResponse(1);
        var blobUrl = URL.createObjectURL(b);
        var link = document.createElement("a");
        link.href = blobUrl;
        link.download = message.name;
        link.innerText=message.name;
        var div=document.createElement('div');
        var div2=document.createElement('div');
        div2.innerText="点击以下链接也可以保存哦";
        div.append(div2);
        div.append(link);
        document.body.appendChild(div); 
    }
});

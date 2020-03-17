console.log('downloadbook.js');
var f=false;
chrome.runtime.onMessage.addListener(function(message, sender,sendResponse)
{
    if(message.action=="savebook2"&&!f)
    {
        sendResponse(1);
        var link = document.createElement("a");
        link.href = message.url;
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

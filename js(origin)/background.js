console.log('background.js')
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse)
{
    /**获取url文件名
     * @param {string} url
    */
    function getname(url)
    {
        var temp=url.split('/');
        return temp[temp.length-1];
    }
    if(message.action=="getzm")
    {
        $.get(message.url,function(data,success)
        {
            chrome.tabs.create({url:"downloadsub.html",active:true},function(tab)
            {
                function getnew(tid)
                {
                    chrome.tabs.get(tid,function(tab)
                    {
                        if(tab.status=="loading")
                        {
                            setTimeout(function(){getnew(tid);},1000);
                        }
                        else then();
                    });
                }
                (function(tid){setTimeout(function(){getnew(tid)},1000);})(tab.id);
                function then()
                {
                    chrome.runtime.sendMessage({action:"savesub",b:data,name:getname(message.url)},function(data){console.log(data)});
                }
            })
        });
        sendResponse(1);
    }
});

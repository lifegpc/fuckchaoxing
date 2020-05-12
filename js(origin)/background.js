console.log('background.js');
(function(){
/**@type {boolean} bookimg页面是否存在*/
var fra=false;
/**@type {number} bookimg页面ID*/
var fid=null;
/**@type {number} 分配的ID*/
var fid2=0;
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
    if(message.action=="openuri")
    {
        chrome.tabs.create({url:message.uri,active:true});
        sendResponse(1);
        return;
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
    if(message.action=="bookfuckc")
    {
        message.action="bookfuckc2";
        (function(message,sender){setTimeout(function(){
            chrome.tabs.sendMessage(sender.tab.id,message,function(data)
            {
                chrome.tabs.sendMessage(sender.tab.id,{action:"bookfuckc3",r:data});
            });
        },3000)})(message,sender);
        sendResponse(1);
    }
    /**@param {string} newaction
     * @param {string} backaction
    */
    function resend(message,newaction,backaction,sender)
    {
        message.action=newaction;
        (function(sender){chrome.tabs.sendMessage(sender.tab.id,message,function(data)
        {
            chrome.tabs.sendMessage(sender.tab.id,{action:backaction,r:data});
        })})(sender);
        sendResponse(1);
    }
    /**@param {string} newaction*/
    function resend2(message,newaction)
    {
        message.action=newaction;
        chrome.tabs.sendMessage(sender.tab.id,message);
        sendResponse(1);
    }
    if(message.action=="downloadbook")
    {
        message.fra=fra;
        message.fid=fid2;
        fid2++;
        resend(message,"downloadbook2","downloadbook3",sender);
    }
    if(message.action=="downloadbooks")
    {
        resend(message,"downloadbooks2","downloadbooks3",sender);
    }
    if(message.action=="bookautoscroll")
    {
        resend(message,"bookautoscroll2","bookautoscroll3",sender);
    }
    if(message.action=="bookautoscrolls")
    {
        resend(message,"bookautoscrolls2","bookautoscrolls3",sender);
    }
    if(message.action=="bookautoscrollc")
    {
        resend2(message,"bookautoscrollc2");
    }
    if(message.action=="downloadbookc")
    {
        resend2(message,"downloadbookc2");
    }
    if(message.action=="downloadbooki")
    {
        resend2(message,"downloadbooki2");
    }
    if(message.action=="createf")
    {
        sendResponse(1);
        (function(a,b){getframe(a,b);})(message.u,sender.tab.id);
    }
    if(message.action=="getimg")
    {
        message.action="getimg2";
        message.tid=sender.tab.id;
        chrome.tabs.sendMessage(fid,message);
        sendResponse(1);
    }
    if(message.action=="returnimg")
    {
        message.action="returnimg2";
        chrome.tabs.sendMessage(message.tid,message);
        sendResponse(1);
    }
    if(message.action=="savebook")
    {
        chrome.tabs.create({url:"downloadbook.html",active:true},function(tab)
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
                message.action="savebook2"
                chrome.runtime.sendMessage(message);
            }
        });
    }
});
function getframe(url,ttid)
{
    fra=true;
    chrome.tabs.create({'url':url,active:false},function(tab)
    {
        fid=tab.id;
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
            chrome.tabs.onRemoved.addListener(function(tabId,removeInfo)
            {
                if(tabId==fid)
                {
                    fra=false;
                    fid=null;
                    console.log("img tab closed.");
                    console.log(removeInfo);
                }
            })
            chrome.tabs.sendMessage(ttid,{action:"createf2"});
        }
    })
}
})();

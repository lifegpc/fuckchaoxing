console.log('notice.js');
(function()
{
/**是否正处于检测状态*/
var work=false;
/**@type {string} 课程列表uri*/
var uri;
/**@type {number} 课程列表定时器ID*/
var kil;
var host;
var deb;
chrome.runtime.onMessage.addListener(function(message,sender,sendResponse)
{
    if(message.action=="startnotice")//设置启用
    {
        if(!work)swork();
        sendResponse(1);
        return;
    }
    if(message.action=="stopnotice")
    {
        if(work)
        {
            if(kil!=null)
            {
                clearTimeout(kil);
                kil=null;
            }
            work=false;
        }
        sendResponse(1);
        return;
    }
});
var settings=null;
chrome.storage.sync.get(function(data)
{
    if(!scheck(data,function()
    {
        chrome.storage.sync.get(function(data)
        {
            settings=data;
            if(settings.not)swork();
        });
    }))
    {
        settings=data;
        if(settings.not)swork();
    }
});
function swork()
{
    work=true;
    $.get("http://i.mooc.chaoxing.com/space/index?t="+getnow(),function(d,s)
    {
        var p=new DOMParser();
        var doc=p.parseFromString(d,"text/html");
        var vf=doc.getElementById('frame_content');
        uri=vf.src;
        host=uri.match(/([^:]+:\/\/)?[^\/]+/)[0];
        nw();
    })
}
function nw()
{
    $.get(uri,function(d,s)
    {
        var p=new DOMParser;
        var doc=p.parseFromString(d,"text/html");
        /**@type {HTMLInputElement}*/
        var de=doc.getElementById('debug');
        if(de)deb=de.value;else deb="";
        console.log(doc);
        getpagelist(doc);
        kil=setTimeout(nw,600000);//10分钟
    })
}
function getnow()
{
    return new Date().getTime();
}
/**获取标签页列表
 * @param {Document} d
*/
function getpagelist(d)
{
    var li=d.getElementById('zla_title');
    var p=new DOMParser();
    console.log(li);
    if(li.childElementCount)get(0);
    /**@param {number} i*/
    function get(i)
    {
        var l=li.children[i];
        var k=l.children[0];
        var o=k.getAttribute('onclick');
        var re=o.match(/\(([0-9]+)\)/);
        if(re!=null)
        {
            var r=re[1];
            $.get(host+"/visit/courses/study?isAjax=true",{fileId:r,debug:deb},function(d,s)
            {
                var doc=p.parseFromString(d,"text/html");
                console.log(doc);
                if(i+1<li.childElementCount)get(i+1);
            });
        }
    }
}
})();

console.log('notice.js');
(function()
{
/**@typedef {{cid:number,jid:number}} CourseInfo cid为courseId，jid为classId/jcalssId*/
/**是否正处于检测状态*/
var work=false;
/**@type {string} 课程列表uri*/
var uri;
/**@type {number} 课程列表定时器ID*/
var kil;
var host;
var deb;
/**@type {Array<CourseInfo>} 课程列表*/
var courselist;
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
        getpagelist(doc,function(l)
        {
            courselist=l;
        });
        kil=setTimeout(nw,600000);//10分钟
    })
}
function getnow()
{
    return new Date().getTime();
}
/**获取课程列表
 * @param {Document} d
 * @param {(l:Array<CourseInfo>)=>void} f 回调函数
*/
function getpagelist(d,f)
{
    var li=d.getElementById('zla_title');
    var p=new DOMParser();
    if(li.childElementCount)get(0);
    /**@param {number} i*/
    function get(i)
    {
        var l=li.children[i];
        var k=l.children[0];
        var o=k.getAttribute('onclick');
        var re=o.match(/\(([0-9]+)\)/);
        /**@type {Array<CourseInfo>} 课程列表*/
        var ral=[];
        if(re!=null)
        {
            var r=re[1];
            $.get(host+"/visit/courses/study?isAjax=true",{fileId:r,debug:deb},function(d,s)
            {
                var doc=p.parseFromString(d,"text/html");
                /**是否有自定义文件夹*/
                var havefolder=false;
                /**@type {HTMLDivElement}*/
                var uldiv;
                /**@type {HTMLUListElement}*/
                var ul;
                /**@type {Array<HTMLLIElement>}*/
                var lilist=[];
                function getuldiv()
                {
                    var te=doc.getElementsByClassName('ulDiv');
                    if(te.length)
                    {
                        uldiv=te[0];
                        getul();
                    }
                    else setTimeout(getuldiv,100);
                }
                getuldiv();
                function getul()
                {
                    for(var i=0;i<uldiv.childElementCount;i++)
                    {
                        var nn=uldiv.children[i];
                        if(nn.constructor.name=="HTMLUListElement")
                        {
                            ul=nn;
                            break;
                        }
                    }
                    getlilist();
                }
                function getlilist()
                {
                    for(var i=0;i<ul.childElementCount;i++)
                    {
                        /**@type {HTMLLIElement}*/
                        var nn=ul.children[i];
                        if(nn.constructor.name=="HTMLLIElement"&&(nn.className.match(/[0-9]+/)||nn.style.position=="relative"))
                        {
                            lilist.push(nn);
                        }
                    }
                    if(lilist.length)
                    {
                        pthen(0);
                    }
                    else//空标签页，解析下一个
                    {
                        thenf();
                    }
                }
                /**解析课程
                 * @param {number} i2 要解析的内容在lilist的索引
                */
                function pthen(i2)
                {
                    if(i2<lilist.length)
                    {
                        /**@type {HTMLLIElement}*/
                        var nn=lilist[i2];
                        var isfolder=false;
                        var rs=nn.className.match(/[0-9]+/);
                        if(rs!=null)
                        {
                            havefolder=true;
                            isfolder=true;
                            var rn=rs[0]-1+1;
                            (function(i2){getfolder(rn,function(){pthen(i2)})})(i2+1);
                        }
                        else
                        {
                            parsecourse(nn);
                            (function(i2){setTimeout(function(){pthen(i2)})})(i2+1);
                        }
                    }
                    else//解析完毕，解析下一个标签页
                    {
                        thenf();
                    }
                }
                /**解析文件夹
                 * @param {number} i 文件夹ID
                 * @param {()=>void} f 回调函数，回调pthen
                 */
                function getfolder(i,f)
                {
                    $.get(host+"/visit/courses/study?isAjax=true",{fileId:i,debug:deb},function(d,s)
                    {
                        var doc2=p.parseFromString(d,"text/html");
                        /**@type {HTMLDivElement}*/
                        var uldiv2;
                        /**@type {HTMLUListElement}*/
                        var ul2;
                        /**@type {Array<HTMLLIElement>}*/
                        var lilist2=[];
                        function getuldiv2()
                        {
                            var te=doc2.getElementsByClassName('ulDiv');
                            if(te.length)
                            {
                                uldiv2=te[0];
                                getul2();
                            }
                            else setTimeout(getuldiv2,1000);
                        }
                        getuldiv2();
                        function getul2()
                        {
                            for(var i=0;i<uldiv2.childElementCount;i++)
                            {
                                var nn=uldiv2.children[i];
                                if(nn.constructor.name=="HTMLUListElement")
                                {
                                    ul2=nn;
                                    break;
                                }
                            }
                            getlilist2();
                        }
                        function getlilist2()
                        {
                            for(var i=0;i<ul2.childElementCount;i++)
                            {
                                /**@type {HTMLLIElement}*/
                                var nn=ul2.children[i];
                                if(nn.constructor.name=="HTMLLIElement"&&(nn.className.match(/[0-9]+/)||nn.style.position=="relative"))
                                {
                                    lilist2.push(nn);
                                }
                            }
                            if(lilist2.length)
                            {
                                for(var i=0;i<lilist2.length;i++)
                                {
                                    parsecourse(lilist2[i]);
                                }
                                f();//解析完成后调用回调函数
                            }
                            else//空的文件夹，调用回调函数
                            {
                                f();
                            }
                        }
                    })
                }
                /**解析课程信息
                 * @param {HTMLLIElement} li 课程的li元素
                */
                function parsecourse(li)
                {
                    /**@type {CourseInfo}*/
                    var te={};
                    for(var i=0;i<li.childElementCount;i++)
                    {
                        /**@type {HTMLInputElement}*/
                        var nn=li.children[i];
                        if(nn.constructor.name=="HTMLInputElement")
                        {
                            if(nn.name=="courseId")
                            {
                                te.cid=nn.value-1+1;
                            }
                            else if(nn.name=="classId")
                            {
                                te.jid=nn.value-1+1;
                            }
                        }
                    }
                    ral.push(te);
                }
                /**解析下一个标签页*/
                function thenf()
                {
                    if(i+1<li.childElementCount-1)get(i+1);
                    else f(ral);
                }
            });
        }
    }
}
})();

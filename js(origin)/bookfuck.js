console.log('bookfuck.js');
(function(){
var bookinfo={};
var bookinfo2=null;
/**@type {number} 滚动时计时器id*/
var scrollid=null;
/**@type {HTMLDivElement}*/
var Readweb=null;
/**@type {HTMLSelectElement}*/
var pagejump=null;
/**章节*/
var chapterlist={};
/**章节列表*/
var clist=[];
/**@type {number} 文件下载计时器id*/
var downloadid=null;
/**@type {number} 文件下载信息计时器id*/
var downloadiid=null;
/**@typedef {{l:number;n:number;e:"zip";i:number;j:number}} di
 * @type {di} 下载文件信息*/
var downloadinfo={};
/**@type {JSZip} */
var zip=null;
/**@type {boolean} 背景页img标签页是否存在*/
var fra=null;
/**@type {number} 向img标签页发送时ID*/
var fid=null;
function fuckbook()
{
    function getbookinfo()
    {
        var b=document.getElementById('bookinfo');
        var temp=b.innerText;
        var t2=temp.split(",");
        bookinfo.a=t2[0];
        bookinfo.bn=t2[1];
        bookinfo.p=t2[2];
        bookinfo.pd=t2[3];
    }
    getbookinfo();
    Readweb=document.getElementById('Readweb');
    pagejump=document.getElementById('pagejump');
    console.log(bookinfo);
    console.log(Readweb);
    console.log(pagejump);
    /**比较数据信息是否相等*/
    function comparebookinfo(bi1,bi2)
    {
        return bi1.a==bi2.a&&bi1.bn==bi2.bn;
    }
    /**自动滚动
     * @param {number} lastY 上一次滚动后的scrollTop
     * @param {number} s 每一次滚动的像素 正的向下 负的向上
     * @param {number} j 间隔时间(ms)
    */
    function scroll(lastY,s,j)
    {
        Readweb.scrollTo(Readweb.scrollLeft,lastY+s);
        if(lastY==Readweb.scrollTop)
        {
            chrome.runtime.sendMessage({action:"bookautoscrollc",bi:bookinfo})//发送通知已自动停止
        }
        else
        {
            (function(lastY){scrollid=setTimeout(function(){scroll(lastY,s,j)},j)})(Readweb.scrollTop);
        }
    }
    function getchapterlist()
    {
        var list={};
        for(var i=0;i<pagejump.childElementCount;i++)
        {
            /**@type {HTMLOptionElement}*/
            var t=pagejump.children[i]
            list[t.value]={n:t.innerText,l:[]};
            clist[i]=t.value;
        }
        chapterlist=list;
        console.log(clist);
        getpagelist();
    }
    function getpagelist()
    {
        downloadinfo.l=Readweb.childElementCount;
        downloadinfo.n=0;
        for(var i=0;i<Readweb.childElementCount;i++)
        {
            var te={};
            /**@type {HTMLDivElement}*/
            var t=Readweb.children[i];
            var zindex=t.style.zIndex;
            te.i=zindex.substring(zindex.length-3,zindex.length);
            te.c=zindex.substring(0,zindex.length-3);
            var t=t.children[1];
            te.src="https://readsvr-dx.chaoxing.com"+t.getAttribute('scr');
            te.n=t.getAttribute('jpgname');
            /**@type {Array}*/
            var l=chapterlist[te.c-1+1].l;
            l[l.length]=te;
        }
        zip=new JSZip();
        if(downloadinfo.e=="zip")zip.file('书籍信息.txt','书名：'+bookinfo.bn+"\n作者名："+bookinfo.a+"\n出版社："+bookinfo2.p+"\n出版日期："+bookinfo.pd);
        for(var i=0;i<clist.length;i++)
        {
            var t=clist[i];
            if(downloadinfo.e=="zip")chapterlist[t].zip=zip.folder(t+"-"+chapterlist[t].n);
        }
        console.log(chapterlist);
        console.log(chapterlist[1].l[0].src);
        if(!fra)
        {
            chrome.runtime.onMessage.addListener(function(message,sender,sendResponse)
            {
                if(message.action=="createf2")
                {
                    fra=true;
                    sendResponse(1);
                    console.log('img tab create complete.');
                    alert('请不要关闭自动打开的标签页（下载图片需要用）');
                }
            })
            chrome.runtime.sendMessage({action:"createf",u:chapterlist[1].l[0].src});
        }
        downloadinfo.i=0;
        downloadinfo.j=0;
        (function(){downloadid=setTimeout(function(){download();},1000)})();
        downloadiid=setTimeout(sendinfo,2000);
        chrome.runtime.onMessage.addListener(function(me,se,sr)
        {
            if(me.action=="returnimg2"&&me.id==fid)
            {
                sr(1);
                var i=me.i;
                if(downloadinfo.e=="zip")chapterlist[i.c].zip.file(i.c+i.i+"-"+i.n+".png",me.d,{base64:true});
                downloadinfo.n++;
                downloadinfo.j++;
                if(downloadinfo.j==chapterlist[clist[downloadinfo.i]].l.length)
                {
                    downloadinfo.i++;
                    downloadinfo.j=0;
                }
                if(downloadinfo.i==clist.length)
                {
                    if(downloadiid!=null)
                    {
                        clearTimeout(downloadiid);
                        downloadiid=null;
                    }
                    save();
                }
                else (function(){downloadid=setTimeout(function(){download()},1000)})();
            }
        })
    }
    function download()
    {
        if(!fra)
        {
            (function(){downloadid=setTimeout(function(){download();},1000)})();
            return;
        }
        var temp=chapterlist[clist[downloadinfo.i]].l[downloadinfo.j];
        chrome.runtime.sendMessage({action:"getimg",'id':fid,'u':temp.src,'i':temp});
    }
    function save()
    {
        chrome.runtime.sendMessage({action:"downloadbookc",bi:bookinfo});
        zip.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}}).then(function(data)
        {
            var fn=bookinfo.bn+"-"+bookinfo.a+".zip";
            chrome.runtime.sendMessage({action:"savebook",url:URL.createObjectURL(data),name:fn});
            saveAs(data,fn)
        })
    }
    function sendinfo()
    {
        chrome.runtime.sendMessage({action:"downloadbooki",bi:bookinfo,'n':downloadinfo.n,'l':downloadinfo.l});
        downloadiid=setTimeout(sendinfo,2000);
    }
    //发送通知告知脚本已加载成功
    chrome.runtime.sendMessage({action:"bookfuckc",bi:bookinfo},function(data)
    {
        chrome.runtime.onMessage.addListener(function(m,s,sr)
        {
            if(m.action=="bookfuckc3"&&comparebookinfo(bookinfo,m.r))
            {
                bookinfo2=m.r;
                sr(1);
            }
            if(m.action=="downloadbook2"&&comparebookinfo(bookinfo,m.bi))
            {
                fra=m.fra;
                downloadinfo.e=m.e;
                fid=m.fid;
                sr(bookinfo);
                getchapterlist();
            }
            if(m.action=="downloadbooks2"&&comparebookinfo(bookinfo,m.bi))
            {
                if(downloadid!=null)
                {
                    clearTimeout(downloadid);
                    downloadid=null;
                }
                if(downloadiid!=null)
                {
                    clearTimeout(downloadiid);
                    downloadiid=null;
                }
                sr(bookinfo);
            }
            if(m.action=="bookautoscroll2"&&comparebookinfo(bookinfo,m.bi))
            {
                console.log(m);
                var ss=m.s/m.j;
                var sj=1000/m.j;
                if(m.f=="up")ss=-ss;
                scroll(Readweb.scrollTop,ss,sj);
                sr(bookinfo);
            }
            if(m.action=="bookautoscrolls2"&&comparebookinfo(bookinfo,m.bi))
            {
                if(scrollid!=null)
                {
                    clearTimeout(scrollid);
                    scrollid=null;
                }
                sr(bookinfo);
            }
        });
    });
}
if(self!=top)
{fuckbook();}
})();

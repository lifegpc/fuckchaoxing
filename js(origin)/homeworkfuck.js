console.log('homeworkfuck.js');
(function(){
function fuckhomework()
{
    function getiframe()
    {
        var ifrc=document.getElementsByTagName('iframe');
        if(ifrc.length)
        {
            console.log(ifrc);
            for(var i=0;i<ifrc.length;i++)
            {
                if(ifrc[i].id.match(/^ueditor_[0-9]{1,}/))
                {
                    console.log(ifrc[i]);
                    (function(vfi){fuckueditor(vfi)})(ifrc[i]);
                }
            }
        }
        else setTimeout(getiframe,1000);
    }
    getiframe();
    /**@param {HTMLIFrameElement} vfi*/
    function fuckueditor(vfi)
    {
        var vd=vfi.contentDocument;
        function getvd()
        {
            var vd2=vfi.contentDocument;
            if(vd2!=null)
            {
                vd=vd2;
                console.log(vd);
                thenfuck();
            }
            else setTimeout(getvd,1000);
        }
        getvd();
        function thenfuck()
        {
            /**@type {HTMLBodyElement}*/
            var bo=vd.body;
            var div=document.createElement('div');
            div.className="id2";
            div.innerText="显示文本框控制面板";
            div.setAttribute('i',0);
            var div2=document.createElement('div');
            div2.className="id2";
            div2.style.display="none";
            function showhideecontrols()
            {
                var i=div.getAttribute('i')-1+1;
                if(i)
                {
                    div.innerText="显示文本框控制面板";
                    div2.style.display="none";
                    div.setAttribute('i',0);
                }
                else
                {
                    div.innerText="隐藏文本框控制面板";
                    div2.style.display=null;
                    div.setAttribute('i',1);
                }
            }
            div.addEventListener('click',showhideecontrols);
            var div2l=document.createElement('div');
            div2l.innerText="文本框内容格式：";
            div2l.className="id";
            div2.append(div2l);
            var div2s=document.createElement('select');
            div2s.className="id";
            var div2o1=document.createElement('option');
            div2o1.innerText="HTML";
            div2o1.value="HTML";
            div2s.append(div2o1);
            var div2o2=document.createElement('option');
            div2o2.innerText="文本";
            div2o2.value="txt";
            div2s.append(div2o2);
            div2s.value=div2o1.value;
            var txt=false;
            div2.append(div2s);
            var div2l2=document.createElement('div');
            div2l2.innerText="文本框内容：";
            div2.append(div2l2);
            var textarea=document.createElement('textarea');
            textarea.value=bo.innerHTML;
            textarea.style="resize:both;overflow:auto;word-wrap:break-word;padding:5px 0;line-height:normal;margin:0;width:100%;";
            div2.append(textarea);
            div2s.addEventListener('change',function()
            {
                txt=div2s.value=="txt";
                if(txt)
                {
                    textarea.value=bo.innerText;
                    textarea.style.lineHeight="12px";
                }
                else
                {
                    textarea.value=bo.innerHTML;
                    textarea.style.lineHeight="normal";
                }
            });
            bo.addEventListener('keydown',function()
            {
                setTimeout(function(){if(txt)textarea.value=bo.innerText;else textarea.value=bo.innerHTML;},100);
            });
            textarea.addEventListener('keydown',function()
            {
                setTimeout(function(){if(txt)bo.innerText=textarea.value;else bo.innerHTML=textarea.value},100);
            });
            var p2=vfi.parentElement.parentElement;
            var p=p2.parentElement;
            for(var i=0;i<p.childElementCount;i++)
            {
                if(p2==p.children[i])break;
            }
            i++;
            var node=null;
            if(i!=p.childElementCount)node=p.children[i];
            p.insertBefore(div,node);
            p.insertBefore(div2,node);
            if(settings!=null&&settings.showta)showhideecontrols();
            if(settings!=null&&settings.tatxt)
            {
                div2s.value=div2o2.value;
                txt=true;
                textarea.value=bo.innerText;
                textarea.style.lineHeight="12px";
            }
        }
    }
}
/**@type {Array} chrome插件设置*/
var settings=null;
try
{
    if(chrome==undefined||chrome.storage==undefined)throw new Error('chrome.storage未定义');
    chrome.storage.sync.get(function(data)
    {
        settings=data;
        var r=scheck(settings,function(){
            chrome.storage.sync.get(function(data)
            {
                settings=data;
                console.log(data);
                fuckhomework();
            });
        });
        if(!r)fuckhomework();
    });
}
catch(e)
{
    console.log(e);
    settings=null;
    fuckhomework();
}
})();

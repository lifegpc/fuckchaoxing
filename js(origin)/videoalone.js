console.log('videoalone.js');
(function(){
/**@type {HTMLBodyElement}*/
var db=document.body;
function videoalone()
{
    if(settings!=null&&!settings.sva)return;
    /**@type {HTMLVideoElement}*/
    var v=null;
    function getv()
    {
        var vc=document.getElementsByTagName('video');
        if(vc.length)
        {
            v=vc[0];
            console.log(v);
            fuck();
        }
        else setTimeout(getv,1000);
    }
    getv();
    function fuck()
    {
        if(v.hasAttribute('fucked'))return;
        v.setAttribute('fucked',1);
        var div=document.createElement('div');
        div.className="vf";
        div.style.left=db.clientWidth-210+"px";
        div.style.top=db.clientHeight-310+"px";
        div.draggable="true";
        div.addEventListener('dragenter',function(e){e.preventDefault();})
        div.addEventListener('dragover',function(e){e.preventDefault();})
        /**@typedef {{x:number;y:number;}} pos
         * @type {pos} div被拖动时鼠标相对元素偏移的位置*/
        var divp={x:0,y:0};
        div.addEventListener('dragstart',function(e)
        {
            divp.x=div.offsetLeft-e.x;
            divp.y=div.offsetTop-e.y;
        })
        div.addEventListener('dragend',function(e){
            div.style.left=e.x+divp.x+"px";
            div.style.top=e.y+divp.y+"px";
        })
        db.append(div);
        var div2=document.createElement('div');
        div2.innerText="显示浏览器自带播放器扩展控制台";
        div2.setAttribute('i',0);
        div.append(div2);
        var div3=document.createElement('div');
        div3.style.display="none";
        div.append(div3);
        function showhidecontrols()
        {
            var i=div2.getAttribute('i')-1+1;
            if(i)
            {
                div2.innerText="显示浏览器自带播放器扩展控制台";
                div3.style.display="none";
                div2.setAttribute('i',0);
            }
            else
            {
                div2.innerText="隐藏浏览器自带播放器扩展控制台";
                div3.style.display=null;
                div2.setAttribute('i',1);
            }
        }
        div2.addEventListener('click',showhidecontrols);
        if(settings!=null&&settings.svc)showhidecontrols();
        var speedd=document.createElement('div');
        div3.append(speedd);
        var speedl1=document.createElement('div');
        speedl1.className="id";
        speedl1.innerText="播放速度调整";
        speedd.append(speedl1);
        var speedi=document.createElement('input');
        speedi.value=v.playbackRate;
        speedi.className="id";
        speedi.style.width="40px";
        speedd.append(speedi);
        var speedb=document.createElement('button');
        speedb.innerText="调整播放速度";
        speedd.append(speedb);
        var speedo=document.createElement('div');
        speedo.className="id";
        speedd.append(speedo);
        function getratechange()
        {
            speedi.value=v.playbackRate;
        }
        v.addEventListener('ratechange',getratechange);
        function setrate()
        {
            try
            {
                var speed=speedi.value-1+1;
                v.playbackRate=speed;
                speedo.innerText="速度已调整为："+speed;
            }
            catch(e){speedo.innerText="发生错误："+e.message;}
        }
        speedb.addEventListener('click',setrate);
    }
}
/**@type chrome插件设置*/
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
                videoalone();
            });
        });
        if(!r)videoalone();
    });
}
catch(e)
{
    console.log(e);
    settings=null;
    videoalone();
}
})();

console.log('videofuck.js');
(function(){
/**@type {HTMLCollectionOf<HTMLIFrameElement>} */
var vf=null;
function fuck()
{
    var a=document.getElementsByTagName('iframe');
    if(a.length!=0)
    {
        vf=a;
        console.log(vf);
        var first=0;
        /**@param {HTMLIFrameElement} vf*/
        function fuck2(vf)
        {
            if(vf.src=="")return;
            first++;
            function cz(vf)
            {
                var temp=document.getElementsByTagName('iframe');
                var f=false;
                for(var i=0;i<temp.length;i++)
                {
                    if(vf==temp[i])f=true;
                }
                if(!f)
                {
                    fuck();
                }
                else
                {
                    setTimeout(function(){cz(vf);},1000);
                }
            }
            if(first)(function(vf){setTimeout(function(){cz(vf)},1000);})(vf);
            var vfd=vf.contentDocument;
            /**@type {HTMLCollectionOf<HTMLIFrameElement>} */
            var vff=null;
            /**@param {Document} vfd*/
            function getfuckiframe(vfd)
            {
                var vf2=vfd.getElementsByTagName('iframe');
                if(vf2.length!=0)
                {
                    vff=vf2;
                    console.log(vf2);
                    then();
                }
                else (function(vfd){setTimeout(function(){getfuckiframe(vfd)},1000)})(vfd);
            }
            getfuckiframe(vfd);
            /**@param {HTMLIFrameElement} vfi*/
            function fuckvideo(vfi)
            {
                var vd=vfi.contentDocument;
                function getvd()
                {
                    var vdd=vfi.contentDocument;
                    if(vdd!=null)
                    {
                        vd=vdd;
                        console.log(vd);
                        getfuckvideo(vd);
                    }
                    else
                    {
                        setTimeout(getvd,1000);
                    }
                }
                getvd();
                /**@type {HTMLVideoElement}*/
                var v;
                /**@param {Document} vd*/
                function getfuckvideo(vd)
                {
                    var a=vd.getElementById('video_html5_api');
                    if(a!=null)
                    {
                        v=a;
                        console.log(v);
                        thendo();
                    }
                    else setTimeout(function(){getfuckvideo(vd);},1000);
                }
                /**对视频元素进行处理 */
                function thendo()
                {
                    var p=v.parentElement.parentElement;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(v.parentElement==p.children[i])break;
                    }
                    i++;
                    function getdiv()
                    {
                        var d=vd.createElement('div');
                        var st=vd.createElement('style');
                        st.innerText=".id{display:inline-block;}";
                        d.append(st);
                        /**添加 | */
                        function addfg()
                        {
                            var div=vd.createElement('div');
                            div.innerText="|";
                            div.className="id";
                            return div;
                        }
                        var div=vd.createElement('div');
                        div.innerText='展开插件控制面板';
                        div.className="id";
                        div.setAttribute('i',0);
                        v.setAttribute('fucked',1);
                        /**@param {HTMLIFrameElement} vfi
                         * @param {HTMLDivElement} src
                         * @param {HTMLDivElement} div2
                         * @param {HTMLDivElement} div3
                        */
                        function openhideconsole(vfi,src,div2,div3)
                        {
                            var i=src.getAttribute('i')-1+1;
                            var i2=div3.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i==0)
                            {
                                src.innerText="隐藏插件控制面板";
                                div2.style.display='block';
                                if(i2==0)showhidedm(vfi,div3,1);
                                vfi.style.height="642px";
                                seta(1);
                            }
                            else
                            {
                                src.innerText='展开插件控制面板';
                                div2.style.display='none';
                                vfi.style.height="602px";
                                if(i2==0)showhidedm(vfi,div3,2);
                                seta(0);
                            }
                        }
                        d.append(div);
                        var div2=vd.createElement('div');
                        div2.style.display='none';
                        var bscontrolbutton=vd.createElement('button');
                        bscontrolbutton.innerText="显示浏览器控制条";
                        bscontrolbutton.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function showhidecontrol(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i==0)
                            {
                                src.innerText="隐藏浏览器控制条";
                                v.controls=true;
                                seta(1);
                            }
                            else
                            {
                                src.innerText="显示浏览器控制条";
                                v.controls=false;
                                seta(0);
                            }
                        }
                        bscontrolbutton.addEventListener('click',function(e){showhidecontrol(e.srcElement)});
                        div2.append(bscontrolbutton);
                        var xxtcontrolbutton=vd.createElement('button');
                        xxtcontrolbutton.innerText="隐藏学习通视频控制条";
                        xxtcontrolbutton.setAttribute('i',1);
                        /**@param {HTMLButtonElement} src*/
                        function showhidexxtcontrol(src)
                        {
                            var barc=vd.getElementsByClassName('vjs-control-bar');
                            if(barc.length>0)
                            {
                                var i=src.getAttribute('i')-1+1;
                                /**@type {HTMLElement}*/
                                var bar=barc[0];
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if(i==0)
                                {
                                    bar.style.display=null;
                                    src.innerText="隐藏学习通视频控制条";
                                    seta(1);
                                }
                                else
                                {
                                    bar.style.display="none";
                                    src.innerText="显示学习通视频控制条";
                                    seta(0);
                                }
                            }
                        }
                        xxtcontrolbutton.addEventListener('click',function(e){showhidexxtcontrol(e.srcElement)});
                        div2.append(xxtcontrolbutton);
                        div2.append(vd.createElement('br'));
                        var autoplaybutton=vd.createElement('button');
                        autoplaybutton.innerText="视频暂停后自动继续播放";
                        autoplaybutton.setAttribute('i',0);
                        /**@param {HTMLVideoElement} v
                         * @param {HTMLButtonElement} src
                        */
                        function autoplay(v,src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i==0)
                            {
                                src.innerText="关闭视频暂停后自动继续播放";
                                v.addEventListener('pause',autoplay2);
                                seta(1);
                            }
                            else
                            {
                                src.innerText="视频暂停后自动继续播放";
                                v.removeEventListener('pause',autoplay2);
                                seta(0);
                            }
                        }
                        function autoplay2()
                        {
                            if(v.duration!=v.currentTime)v.play();
                        }
                        autoplaybutton.addEventListener('click',function(e){autoplay(v,e.srcElement)});
                        div2.append(autoplaybutton);
                        div2.append(vd.createElement('br'));
                        var pbspeeddiv=vd.createElement('div');
                        pbspeeddiv.className="id";
                        div2.append(pbspeeddiv);
                        var pbspeedlabel=vd.createElement('div');
                        pbspeedlabel.className="id";
                        pbspeedlabel.innerText="播放速度调整：";
                        pbspeeddiv.append(pbspeedlabel);
                        var pbspeedinput=vd.createElement('input');
                        pbspeedinput.className="id";
                        pbspeedinput.value=v.playbackRate;
                        pbspeedinput.style.width="40px";
                        pbspeeddiv.append(pbspeedinput);
                        var pbspeedbutton=vd.createElement('button');
                        pbspeedbutton.className="id";
                        pbspeedbutton.innerText="调整播放速度";
                        pbspeeddiv.append(pbspeedbutton);
                        var pbspeedout=vd.createElement('div');
                        pbspeedout.className="id";
                        pbspeeddiv.append(pbspeedout);
                        /**@param {HTMLVideoElement} v
                         * @param {HTMLInputElement} input
                         * @param {HTMLDivElement} out
                        */
                        function setplaybackrate(v,input,out)
                        {
                            try
                            {
                                var speed=input.value-1+1;
                                v.playbackRate=speed;
                                out.innerText="速度已调整为"+speed;
                            }
                            catch(e)
                            {
                                out.innerText="发生错误："+e.message;
                            }
                        }
                        pbspeedbutton.addEventListener('click',function(){setplaybackrate(v,pbspeedinput,pbspeedout);});
                        var div3=vd.createElement('div');
                        div3.innerText="隐藏弹幕行";
                        div3.className="id";
                        div3.setAttribute('i',0);
                        d.append(addfg());
                        d.append(div3);
                        /**@param {HTMLIFrameElement} vfi
                         * @param {HTMLDivElement} src
                        */
                        function showhidedm(vfi,src,b=0)
                        {
                            var i=src.getAttribute('i')-1+1;
                            var dm=vd.getElementsByClassName('rage_bd');
                            if(dm.length>0)
                            {
                                dm=dm[0];
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if((i==0&b==0)||b==1)
                                {
                                    dm.style.display="none";
                                    src.innerText="显示弹幕行";
                                    vfi.style.height="562px";
                                    if(!b)seta(1);
                                }
                                else
                                {
                                    dm.style.display=null;
                                    src.innerText="隐藏弹幕行";
                                    vfi.style.height="602px";
                                    if(!b)seta(0);
                                }
                            }
                        }
                        div3.addEventListener('click',function(e){showhidedm(vfi,e.srcElement)});
                        div.addEventListener('click',function(e){openhideconsole(vfi,e.srcElement,div2,div3)});
                        var nnode=null;
                        if(i!=p.childElementCount)nnode=p.children[i];
                        p.insertBefore(d,nnode);
                        p.insertBefore(div2,nnode);
                    }
                    getdiv();
                    vfi.style.height="602px";
                }
            }
            function then()
            {for(var i=0;i<vff.length;i++)
            {
                for(var j=0;j<vff[i].classList.length;j++)
                {
                    if(vff[i].classList[j]=='ans-insertvideo-online')
                    {
                        (function(vfi){fuckvideo(vfi);})(vff[i]);
                        break;
                    }
                }
            }}
        }
        for(var i=0;i<vf.length;i++)
        {
            (function(vf){fuck2(vf)})(vf[i]);
        }
    }
    else
    {
        setTimeout(fuck,1000);
    }
}
fuck();
})();

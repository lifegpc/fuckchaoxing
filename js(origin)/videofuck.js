console.log('videofuck.js');
(function(){
/**@type {HTMLCollectionOf<HTMLIFrameElement>} */
var vf=null;
/**@constant {string} 超星学习通数据*/
var cxsturl="https://mooc1-2.chaoxing.com/ananas/status/";
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
                    setTimeout(function(){fuck();},3000);
                }
                else
                {
                    setTimeout(function(){cz(vf);},1000);
                }
            }
            if(first==1)(function(vf){setTimeout(function(){cz(vf)},1000);})(vf);
            /**@type {Document}*/
            var vfd=null;
            function getfuckvfd()
            {
                var temp=vf.contentDocument;
                if(temp!=null)
                {
                    vfd=vf.contentDocument;
                    getfuckiframe(vfd);
                }
                else setTimeout(getfuckvfd,1000);
            }
            getfuckvfd();
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
                    if(v.hasAttribute('fucked'))return;
                    var p=v.parentElement.parentElement;
                    var h=vfi.clientHeight;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(v.parentElement==p.children[i])break;
                    }
                    i++;
                    function getdiv()
                    {
                        var d=vd.createElement('div');
                        var st=vd.createElement('style');
                        /**@type {number} 插件控制面板高度*/
                        var ch=100;
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
                                if(i2==0)showhidedm(vfi,div3,src,1);
                                vfi.style.height=h+ch+"px";
                                seta(1);
                            }
                            else
                            {
                                src.innerText='展开插件控制面板';
                                div2.style.display='none';
                                vfi.style.height=h+20+"px";
                                if(i2==0)showhidedm(vfi,div3,src,2);
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
                        var zmsettingsbutton=vd.createElement('button');
                        var zmsettingsmbc=vd.getElementsByClassName('vjs-modal-dialog vjs-hidden  vjs-text-track-settings');
                        if(zmsettingsmbc.length)
                        {
                            zmsettingsbutton.innerText='显示字幕控制面板';
                            zmsettingsbutton.setAttribute('i',0);
                            /**@type {HTMLDivElement}*/
                            var zmsettingsmb=zmsettingsmbc[0];
                            /**@param {HTMLDivElement} div
                             * @param {HTMLButtonElement} src
                            */
                            function showhidezmsettings(div,src)
                            {
                                var i=src.getAttribute('i')-1+1;
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if(i)
                                {
                                    div.style.display="none";
                                    src.innerText="显示字幕控制面板";
                                    seta(0);
                                }
                                else
                                {
                                    div.style.display="block";
                                    src.innerText="隐藏字幕控制面板";
                                    seta(1);
                                }
                            }
                            (function(div){zmsettingsbutton.addEventListener('click',function(e){showhidezmsettings(div,e.srcElement)})})(zmsettingsmb);
                            zmsettingsmb.className="'vjs-modal-dialog vjs-text-track-settings";
                            zmsettingsmb.style.display="none";
                            zmsettingsmb.style.position="relative";
                            zmsettingsmb.style.background="#000000AA";
                            div2.append(zmsettingsbutton);
                        }
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
                        if(settings!=null&&settings.vpautoplay)autoplay(v,autoplaybutton);
                        autoplaybutton.addEventListener('click',function(e){autoplay(v,e.srcElement)});
                        div2.append(autoplaybutton);
                        var popquestionc1=vd.getElementsByClassName('x-container ans-timelineobjects x-container-default');
                        var popquestionc2=vd.getElementsByClassName('x-component ans-timelineobjectsbg x-component-default');
                        if(popquestionc1.length&&popquestionc2.length)
                        {
                            var popquestionbutton1=vd.createElement('button');
                            popquestionbutton1.innerText="隐藏问题窗口";
                            popquestionbutton1.setAttribute('i',0);
                            /**@type {HTMLDivElement}*/
                            var popquestion1=popquestionc1[0];
                            /**@type {HTMLDivElement}*/
                            var popquestion2=popquestionc2[0];
                            /**@param {HTMLDivElement} div1
                             * @param {HTMLDivElement} div2
                             * @param {HTMLButtonElement} src
                            */
                            function showhidepopquestion(div1,div2,src)
                            {
                                var i=src.getAttribute('i')-1+1;
                                function seta(value)
                                {
                                    src.setAttribute('i',value);
                                }
                                if(i)
                                {
                                    div1.style.display=null;
                                    div2.style.display=null;
                                    src.innerText="隐藏问题窗口";
                                    seta(0);
                                }
                                else
                                {
                                    div1.style.display="none";
                                    div2.style.display="none";
                                    src.innerText="显示问题窗口";
                                    seta(1);
                                }
                            }
                            (function(div1,div2){popquestionbutton1.addEventListener('click',function(e){showhidepopquestion(div1,div2,e.srcElement)})})(popquestion1,popquestion2);
                            div2.append(popquestionbutton1);
                            var popquestiondiv=vd.createElement('div');
                            var popquestionbutton2=vd.createElement('button');
                            popquestiondiv.className="id";
                            popquestionbutton2.className="id";
                            popquestionbutton2.innerText="勾选问题答案";
                            var popquestiondivo=vd.createElement('div');
                            popquestiondivo.className="id";
                            popquestiondiv.append(popquestionbutton2);
                            popquestiondiv.append(popquestiondivo);
                            /**@param {HTMLDivElement} divo*/
                            function showanswer(divo)
                            {
                                try
                                {
                                    var opts=vd.getElementsByClassName('ans-videoquiz-opt');
                                    if(opts.length>0)
                                    {
                                        var f=false;
                                        for(var i=0;i<opts.length;i++)
                                        {
                                            /**@type {HTMLInputElement}*/
                                            var opt=opts[i].children[0].children[0];
                                            if(opt.value=="true")
                                            {
                                                opt.checked=true;
                                                f=true;
                                            }
                                        }
                                        if(!f)
                                        {
                                            divo.innerText="未找到正确选项";
                                        }
                                        else
                                        {
                                            divo.innerText="已勾选正确选项";
                                        }
                                    }
                                    else divo.innerText="未找到选项";
                                }
                                catch(e)
                                {
                                    divo.innerText="发送错误："+e.message;
                                }
                            }
                            (function(divo){popquestionbutton2.addEventListener('click',function(){showanswer(divo)})})(popquestiondivo);
                            div2.append(popquestiondiv);
                        }
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
                        var pbspeedlockbutton=vd.createElement('button');
                        pbspeedlockbutton.className="id";
                        pbspeedlockbutton.innerText="锁定播放速度";
                        pbspeedlockbutton.setAttribute('i',0);
                        pbspeeddiv.append(pbspeedlockbutton);
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
                        function getratechange(){pbspeedinput.value=v.playbackRate;}
                        function lockratechange(){try{v.playbackRate=pbspeedinput.value-1+1;}catch(e){}}
                        v.addEventListener('ratechange',getratechange);
                        /**@param {HTMLButtonElement} src*/
                        function lockrate(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="锁定播放速度";
                                v.removeEventListener('ratechange',lockratechange);
                                v.addEventListener('ratechange',getratechange);
                                seta(0);
                            }
                            else
                            {
                                src.innerText="取消锁定播放速度";
                                v.removeEventListener('ratechange',getratechange);
                                v.addEventListener('ratechange',lockratechange);
                                seta(1);
                            }
                        }
                        pbspeedlockbutton.addEventListener('click',function(e){lockrate(e.srcElement)});
                        div2.append(vd.createElement('br'));
                        var downloadvideob=vd.createElement('button');
                        downloadvideob.innerText="下载视频（原视频）";
                        var downloadvideobm=vd.createElement('button');
                        downloadvideobm.innerText="下载视频（极速）";
                        var downloadvideobs=vd.createElement('button');
                        downloadvideobs.innerText="下载视频（标清）";
                        var downloadvideobh=vd.createElement('button');
                        downloadvideobh.innerText="下载视频（高清）";
                        var downloadaudio=vd.createElement('button');
                        downloadaudio.innerText="下载音频（MP3）";
                        downloadaudio.style.display="none";//被拒，不知道这URL放API里作甚
                        var downloadsubb=vd.createElement('button');
                        downloadsubb.innerText="下载字幕";
                        downloadsubb.className="id";
                        var downloadsubd=vd.createElement('div');
                        downloadsubd.className="id";
                        var downloadsubs=vd.createElement('select');
                        downloadsubs.className="id";
                        downloadsubd.append(downloadsubs);
                        downloadsubd.append(downloadsubb);
                        /**@param {HTMLSelectElement} select*/
                        function downloadsub(select)
                        {
                            chrome.runtime.sendMessage({action:"getzm",url:select.value},function(data){console.log(data)});
                        }
                        /**@param {string} url*/
                        function downloadvideo(url)
                        {
                            window.open(url,"_blank");
                        }
                        var objectid=vfi.getAttribute('objectid');
                        var mid=vfi.getAttribute('mid');
                        console.log(objectid);
                        console.log(mid);
                        $.getJSON(cxsturl+objectid,function(data,success){
                            console.log(data);
                            var have=false;
                            if(data['download']!=undefined)
                            {
                                have=true;
                                (function(d){downloadvideob.addEventListener('click',function(){downloadvideo(d)})})(data.download);
                                div2.append(downloadvideob);
                            }
                            if(data['httpmd']!=undefined)
                            {
                                have=true;
                                (function(d){downloadvideobm.addEventListener('click',function(){downloadvideo(d)})})(data.httpmd);
                                div2.append(downloadvideobm);
                            }
                            if(data['http']!=undefined)
                            {
                                have=true;
                                (function(d){downloadvideobs.addEventListener('click',function(){downloadvideo(d)})})(data.http);
                                div2.append(downloadvideobs);
                            }
                            if(data['httphd']!=undefined)
                            {
                                have=true;
                                (function(d){downloadvideobh.addEventListener('click',function(){downloadvideo(d)})})(data.httphd);
                                div2.append(downloadvideobh);
                            }
                            if(data['mp3']!=undefined)
                            {
                                have=true;
                                (function(d){downloadaudio.addEventListener('click',function(){downloadvideo(d)})})(data.mp3);
                                div2.append(downloadaudio);
                            }
                            $.getJSON("https://mooc1-2.chaoxing.com/richvideo/subtitle",{'mid':mid,'_dc':getnow()},function(data,success)
                            {
                                if(data.length)
                                {
                                    console.log(data);
                                    if(have)
                                    {
                                        div2.append(vd.createElement('br'));
                                        ch=150;
                                    }
                                    else ch=130;
                                    div2.append(downloadsubd);
                                    /**@param data 字幕返回的object*/
                                    function createoption(data)
                                    {
                                        var option=vd.createElement('option');
                                        option.innerText=data.name;
                                        option.value=data.url;
                                        downloadsubs.append(option);
                                        if(data.selected)downloadsubs.value=data.url;
                                    }
                                    for(var i=0;i<data.length;i++)
                                    {
                                        createoption(data[i]);
                                    }
                                    downloadsubb.addEventListener('click',function(){downloadsub(downloadsubs)});
                                }
                                else if(have)
                                {
                                    ch=130;
                                }
                                if(ch!=100&&settings!=null&&settings.showvc&&div.getAttribute('i')=="1")
                                {
                                    vfi.style.height=h+ch+"px";
                                }
                            })
                        });
                        var div3=vd.createElement('div');
                        div3.innerText="隐藏弹幕行";
                        div3.className="id";
                        div3.setAttribute('i',0);
                        d.append(addfg());
                        d.append(div3);
                        /**@param {HTMLIFrameElement} vfi
                         * @param {HTMLDivElement} src
                         * @param {HTMLDivElement} div
                         * @param {number} b
                        */
                        function showhidedm(vfi,src,div,b=0)
                        {
                            var i=src.getAttribute('i')-1+1;
                            var i2=div.getAttribute('i')-1+1;
                            if(!b&&i2)return;
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
                                    vfi.style.height=h+20+"px";
                                    if(!b)seta(1);
                                }
                                else
                                {
                                    dm.style.display=null;
                                    src.innerText="隐藏弹幕行";
                                    vfi.style.height=h+60+"px";
                                    if(!b)seta(0);
                                }
                            }
                        }
                        vfi.style.height=h+60+"px";
                        if(settings!=null&&settings.hidedm)showhidedm(vfi,div3,div);
                        if(settings!=null&&settings.showvc)openhideconsole(vfi,div,div2,div3);
                        div3.addEventListener('click',function(e){showhidedm(vfi,e.srcElement,div)});
                        div.addEventListener('click',function(e){openhideconsole(vfi,e.srcElement,div2,div3)});
                        var nnode=null;
                        if(i!=p.childElementCount)nnode=p.children[i];
                        p.insertBefore(d,nnode);
                        p.insertBefore(div2,nnode);
                    }
                    getdiv();
                }
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckaudio(vfi)
            {
                var vd=vfi.contentDocument;
                /**@type {HTMLAudioElement}*/
                var a=null;
                function getvd()
                {
                    var vd2=vfi.contentDocument;
                    if(vd2!=null)
                    {
                        vd=vd2;
                        console.log(vd);
                        getfuckaudio();
                    }
                    else
                    {
                        setTimeout(getvd,1000);
                    }
                }
                function getfuckaudio()
                {
                    var a2=vd.getElementById('audio_html5_api');
                    if(a2!=null)
                    {
                        a=a2;
                        console.log(a);
                        thendo();
                    }
                    else
                    {
                        setTimeout(getfuckaudio,1000);
                    }
                }
                getvd();
                /**对音频元素进行处理*/
                function thendo()
                {
                    if(a.hasAttribute('fucked'))return;
                    var p=a.parentElement.parentElement;
                    var h=vfi.clientHeight;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(a.parentElement==p.children[i])break;
                    }
                    i++;
                    a.setAttribute('fucked',1);
                    function getdiv()
                    {
                        var div=vd.createElement('div');
                        var st=vd.createElement('style');
                        st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                        div.className="id2";
                        var div2=vd.createElement('div');
                        div2.innerText="显示音频控制台";
                        div2.setAttribute('i',0);
                        /**@param {HTMLDivElement} src
                         * @param {HTMLDivElement} d2
                        */
                        function shwohideacontrol(src,d2)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="显示音频控制台";
                                d2.style.display="none";
                                vfi.style.setProperty('height',h+20+"px","important");
                                seta(0);
                            }
                            else
                            {
                                src.innerText="隐藏音频控制台";
                                d2.style.display=null;
                                vfi.style.setProperty('height',h+130+"px","important");
                                seta(1);
                            }
                        }
                        div.append(div2);
                        var d2=vd.createElement('div');
                        d2.className="id2";
                        d2.style.display="none";
                        (function(d2){div2.addEventListener('click',function(e){shwohideacontrol(e.srcElement,d2)})})(d2);
                        var bscontrolbutton=vd.createElement('button');
                        bscontrolbutton.innerText="显示浏览器控制条";
                        bscontrolbutton.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function showhideacontrols(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="显示浏览器控制条";
                                a.controls=false;
                                seta(0);
                            }
                            else
                            {
                                src.innerText="隐藏浏览器控制条";
                                a.controls=true;
                                seta(1);
                            }
                        }
                        bscontrolbutton.addEventListener('click',function(e){showhideacontrols(e.srcElement)});
                        d2.append(bscontrolbutton);
                        var xxtcontrolbutton=vd.createElement('button');
                        xxtcontrolbutton.innerText="隐藏学习通视频控制条";
                        xxtcontrolbutton.setAttribute('i',1);
                        /**@param {HTMLButtonElement} src*/
                        function shwohidexxtacontrol(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            var coc=vd.getElementsByClassName('vjs-control-bar');
                            if(coc.length)
                            {
                                /**@type {HTMLDivElement}*/
                                var co=coc[0];
                                if(i)
                                {
                                    co.style.setProperty('display','none','important');
                                    src.innerText="显示学习通视频控制条";
                                    seta(0);
                                }
                                else
                                {
                                    co.style.display=null;
                                    src.innerText="隐藏学习通视频控制条";
                                    seta(1);
                                }
                            }
                        }
                        xxtcontrolbutton.addEventListener('click',function(e){shwohidexxtacontrol(e.srcElement)});
                        d2.append(xxtcontrolbutton);
                        d2.append(vd.createElement('br'));
                        var autoplaybutton=vd.createElement('button');
                        autoplaybutton.innerText="音频暂停后继续播放";
                        autoplaybutton.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function autoplay(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="音频暂停后继续播放";
                                a.removeEventListener('pause',autoplay2);
                                seta(0);
                            }
                            else
                            {
                                src.innerText="关闭音频暂停后继续播放";
                                a.addEventListener('pause',autoplay2);
                                seta(1);
                            }
                        }
                        function autoplay2()
                        {
                            if(a.currentTime!=a.duration)a.play();
                        }
                        if(settings!=null&&settings.apautoplay)autoplay(autoplaybutton);
                        autoplaybutton.addEventListener('click',function(e){autoplay(e.srcElement)});
                        d2.append(autoplaybutton);
                        d2.append(vd.createElement('br'));
                        var pbrd=vd.createElement('div');
                        pbrd.className="id";
                        var pbrl=vd.createElement('div');
                        pbrl.innerText="播放速度调整：";
                        pbrl.className="id";
                        pbrd.append(pbrl);
                        var pbri=vd.createElement('input');
                        pbri.className="id";
                        pbri.value=a.playbackRate;
                        pbri.style.width="40px";
                        pbrd.append(pbri);
                        var pbrb=vd.createElement('button');
                        pbrb.className="id";
                        pbrb.innerText="调整播放速度";
                        /**@param {HTMLInputElement} inp
                         * @param {HTMLDivElement} out
                        */
                        function pbr(inp,out)
                        {
                            try
                            {
                                var speed=inp.value-1+1;
                                a.playbackRate=speed;
                                out.innerText="速度已调整为"+speed;
                            }
                            catch(e)
                            {
                                out.innerText="发生错误："+e.message;
                            }
                        }
                        pbrd.append(pbrb);
                        function getratechange(){pbri.value=a.playbackRate;}
                        function lockratechange(){try{a.playbackRate=pbri.value-1+1;}catch(e){}}
                        a.addEventListener('ratechange',getratechange);
                        var pbrb2=vd.createElement('button');
                        pbrb2.className="id";
                        pbrb2.innerText="锁定播放速度";
                        pbrb2.setAttribute('i',0);
                        /**@param {HTMLButtonElement} src*/
                        function lockrate(src)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                src.innerText="锁定播放速度";
                                a.removeEventListener('ratechange',lockratechange);
                                a.addEventListener('ratechange',getratechange);
                                seta(0);
                            }
                            else
                            {
                                src.innerText="取消锁定播放速度";
                                a.removeEventListener('ratechange',getratechange);
                                a.addEventListener('ratechange',lockratechange);
                                seta(1);
                            }
                        }
                        pbrb2.addEventListener('click',function(e){lockrate(e.srcElement)});
                        pbrd.append(pbrb2);
                        var pbro=vd.createElement('div');
                        pbro.className="id";
                        pbrd.append(pbro);
                        pbrb.addEventListener('click',function(){pbr(pbri,pbro)});
                        d2.append(pbrd);
                        d2.append(vd.createElement('br'));
                        /**@param {string} url*/
                        function downloadaudio(url)
                        {
                            window.open(url,'_blank');
                        }
                        var downloadaudiob=vd.createElement('button');
                        downloadaudiob.innerText="下载音频（原音频）";
                        var downloadaudiob2=vd.createElement('button');
                        downloadaudiob2.innerText="下载音频（在线）";
                        var objectid=vfi.getAttribute('objectid');
                        console.log(objectid);
                        $.getJSON(cxsturl+objectid,function(data,success)
                        {
                            console.log(data);
                            if(data['download']!=undefined)
                            {
                                (function(d){downloadaudiob.addEventListener('click',function(){downloadaudio(d)})})(data.download);
                                d2.append(downloadaudiob);
                            }
                            if(data['http']!=undefined)
                            {
                                (function(d){downloadaudiob2.addEventListener('click',function(){downloadaudio(d)})})(data.http);
                                d2.append(downloadaudiob2);
                            }
                        });
                        vfi.style.setProperty("height",h+20+"px","important");
                        if(settings!=null&&settings.showac)shwohideacontrol(div2,d2);
                        return [st,div,d2];
                    }
                    var r=getdiv();
                    var nnode=null;
                    if(i!=p.childElementCount)nnode=p.children[i];
                    for(var j=0;j<r.length;j++)p.insertBefore(r[j],nnode);
                }
            }
            /**取得内部的嵌套层
             * @param {HTMLIFrameElement} vfi
            */
            function fuckqbook(vfi)
            {
                var vd=vfi.contentDocument;
                /**书籍信息*/
                var bookinfo={};
                /**书籍信息 json*/
                var bookdata;
                /**框架内书籍信息*/
                var bookinfo2=null;
                function getvd()
                {
                    var d2=vfi.contentDocument;
                    if(d2!=null)
                    {
                        vd=d2;
                        console.log(vd);
                        getbookinfo();
                        getfuckbookiframe();
                    }
                    else setTimeout(getvd,1000);
                }
                setTimeout(getvd,1000);
                /**获取书的信息*/
                function getbookinfo()
                {
                    bookdata=$.parseJSON(vfi.getAttribute('data'));
                    console.log(bookdata);
                    bookinfo.bn=bookdata.bookname;
                    bookinfo.a=bookdata.author;
                    bookinfo.p=bookdata.publisher;
                    bookinfo.pd=bookdata.publishdate;
                    console.log(bookinfo);
                }
                function getfuckbookiframe()
                {
                    var fc=vd.getElementsByTagName('iframe');
                    if(fc.length)
                    {
                        console.log(fc);
                        for(var i=0;i<fc.length;i++)
                        {
                            if(fc[i].name=='bookifame')
                            (function(vfii){fuckbook(vfii)})(fc[i]);
                        }
                    }
                    else setTimeout(getfuckbookiframe,1000);
                }
                /**@param {HTMLIFrameElement} vfii*/
                function fuckbook(vfii)
                {
                    if(vfii.hasAttribute('fucked'))return;
                    var h=vfi.clientHeight;
                    console.log(vfii);
                    vfii.setAttribute('fucked',1);
                    /**比较数据信息是否相等*/
                    function comparebookinfo(bi1,bi2)
                    {
                        return bi1.a==bi2.a&&bi1.bn==bi2.bn;
                    }
                    chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
                        if(message.action=="bookfuckc2"&&comparebookinfo(bookinfo,message.bi))
                        {
                            sendResponse(bookinfo);
                            bookinfo2=message.bi;
                            adddiv();
                        }
                    });
                    console.log('ok');
                    function adddiv()
                    {
                        var p=vfii.parentElement;
                        for(var i=0;i<p.childElementCount;i++)
                        {
                            if(vfii==p.children[i])break;
                        }
                        i++;
                        var node;
                        if(i==p.childElementCount)node=null; else node=p.children[i];
                        var st=vd.createElement('style');
                        st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                        var div=vd.createElement('div');
                        div.innerText="显示书籍插件控制面板";
                        div.className="id2";
                        div.setAttribute('i',0);
                        var div2=vd.createElement('div');
                        div2.className="id2";
                        div2.style.display="none";
                        var bookinfod=vd.createElement('div');
                        var bookinfol1=vd.createElement('div');
                        bookinfol1.innerText="书籍信息：";
                        bookinfod.append(bookinfol1);
                        var bookinfol2=vd.createElement('div');
                        bookinfol2.innerText="书名：";
                        bookinfol2.className="id";
                        bookinfod.append(bookinfol2);
                        var bookinfobn=vd.createElement('div');
                        bookinfobn.innerText=bookinfo.bn;
                        bookinfobn.className="id";
                        bookinfod.append(bookinfobn);
                        bookinfod.append(vd.createElement('br'));
                        var bookinfol3=vd.createElement('div');
                        bookinfol3.innerText="作者名：";
                        bookinfol3.className="id";
                        bookinfod.append(bookinfol3);
                        var bookinfoa=vd.createElement('div');
                        bookinfoa.innerText=bookinfo.a;
                        bookinfoa.className="id";
                        bookinfod.append(bookinfoa);
                        bookinfod.append(vd.createElement('br'));
                        var bookinfol4=vd.createElement('div');
                        bookinfol4.innerText="出版社：";
                        bookinfol4.className="id";
                        bookinfod.append(bookinfol4);
                        var bookinfop=vd.createElement('div');
                        if(bookinfo.p==bookinfo2.p)
                        {
                            bookinfop.innerText=bookinfo.p;
                        }
                        else
                        {
                            bookinfop.innerText=bookinfo.p+"("+bookinfo2.p+")";
                        }
                        bookinfop.className="id";
                        bookinfod.append(bookinfop);
                        bookinfod.append(vd.createElement('br'));
                        var bookinfol5=vd.createElement('div');
                        bookinfol5.innerText="出版时间：";
                        bookinfol5.className="id";
                        bookinfod.append(bookinfol5);
                        var bookinfopd=vd.createElement('div');
                        if(bookinfo.pd==bookinfo2.pd)
                        {
                            bookinfopd.innerText=bookinfo.pd;
                        }
                        else
                        {
                            bookinfopd.innerText=bookinfo.pd+"("+bookinfo2.pd+")";
                        }
                        bookinfopd.className="id";
                        bookinfod.append(bookinfopd);
                        div2.append(bookinfod);
                        var bookdownd=vd.createElement('div');
                        var bookdownl=vd.createElement('div');
                        bookdownl.innerText="下载书籍：";
                        bookdownl.className="id";
                        bookdownd.append(bookdownl);
                        var bookdowns=vd.createElement('select');
                        var bookdowno1=vd.createElement('option');
                        bookdowno1.value="zip";
                        bookdowno1.innerText="zip";
                        bookdowns.append(bookdowno1);
                        bookdowns.value=bookdowno1.value;
                        bookdownd.append(bookdowns);
                        bookdowns.className="id";
                        var bookdownb=vd.createElement('button');
                        bookdownb.className="id";
                        bookdownb.innerText="下载";
                        /**@type {boolean} 是否正在下载书籍*/
                        var bookdownz=false;
                        /**发起下书或停止下书的请求
                         * @param {HTMLButtonElement} src
                         * @param {HTMLSelectElement} s
                        */
                        function downloadbook(src,s)
                        {
                            if(bookdownz)
                            {
                                src.disabled=true;
                                //发出停止请求
                                chrome.runtime.sendMessage({action:"downloadbooks",bi:bookinfo});
                            }
                            else
                            {
                                src.disabled=true;
                                //发出下书请求
                                chrome.runtime.sendMessage({action:'downloadbook',bi:bookinfo,e:s.value});
                            }
                        }
                        chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
                            if(message.action=="downloadbook3"&&comparebookinfo(bookinfo,message.r))
                            {
                                bookdownz=true;
                                sendResponse(1);
                                bookdownb.innerText="停止下载";
                                bookdownb.disabled=false;
                                bookdowno.innerText="已经开始下载";
                            }
                            if(message.action=="downloadbooks3"&&comparebookinfo(bookinfo,message.r))
                            {
                                bookdownz=false;
                                sendResponse(1);
                                bookdownb.innerText="下载";
                                bookdownb.disabled=false;
                                bookdowno.innerText="停止下载成功";
                            }
                            if(message.action=="downloadbookc2"&&comparebookinfo(bookinfo,message.bi))
                            {
                                bookdownz=false;
                                sendResponse(1);
                                bookdownb.innerText="下载";
                                bookdownb.disabled=false;
                                bookdowno.innerText="下载成功";
                            }
                            if(message.action=="bookautoscroll3"&&comparebookinfo(bookinfo,message.r))
                            {
                                autoscrollz=true;
                                sendResponse(1);
                                bookscrollb.innerText="停止自动滚动";
                                bookscrollb.disabled=false;
                                bookscrollo.innerText="已经开始自动滚动";
                            }
                            if(message.action=="bookautoscrolls3"&&comparebookinfo(bookinfo,message.r))
                            {
                                autoscrollz=false;
                                sendResponse(1);
                                bookscrollb.innerText="自动滚动";
                                bookscrollb.disabled=false;
                                bookscrollo.innerText="自动滚动已停止";
                            }
                            if(message.action=="bookautoscrollc2"&&comparebookinfo(bookinfo,message.bi))
                            {
                                autoscrollz=false;
                                sendResponse(1);
                                bookscrollb.innerText="自动滚动";
                                bookscrollb.disabled=false;
                                bookscrollo.innerText="自动滚动已自动停止";
                            }
                            if(message.action=="downloadbooki2"&&comparebookinfo(bookinfo,message.bi))//下载信息
                            {
                                bookdowno.innerText=message.n+"/"+message.l;
                                sendResponse(1);
                            }
                        });
                        (function(s){bookdownb.addEventListener('click',function(e){downloadbook(e.srcElement,s)});})(bookdowns);
                        bookdownd.append(bookdownb);
                        var bookdowno=vd.createElement('div');
                        bookdowno.className="id";
                        bookdownd.append(bookdowno);
                        div2.append(bookdownd);
                        var bookscrolld=vd.createElement('div');
                        var bookscrolll1=vd.createElement('div');
                        bookscrolll1.innerText="自动滚动方向：";
                        bookscrolll1.className="id";
                        bookscrolld.append(bookscrolll1);
                        var bookscrolls=vd.createElement('select');
                        bookscrolls.className="id";
                        var bookscrollo1=vd.createElement('option');
                        bookscrollo1.innerText="向下";
                        bookscrollo1.value="down";
                        bookscrolls.append(bookscrollo1);
                        var bookscrollo2=vd.createElement('option');
                        bookscrollo2.innerText="向上";
                        bookscrollo2.value="up";
                        bookscrolls.append(bookscrollo2);
                        bookscrolls.value=bookscrollo1.value;
                        bookscrolld.append(bookscrolls);
                        var bookscrolll2=vd.createElement('div');
                        bookscrolll2.innerText="自动滚动速度：";
                        bookscrolll2.className="id";
                        bookscrolld.append(bookscrolll2);
                        var bookscrolli=vd.createElement('input');
                        bookscrolli.value=100;
                        bookscrolli.className="id";
                        bookscrolli.style.width="50px";
                        bookscrolld.append(bookscrolli);
                        var bookscrolll3=vd.createElement('div');
                        bookscrolll3.innerText="像素/s";
                        bookscrolll3.className="id";
                        bookscrolld.append(bookscrolll3);
                        bookscrolld.append(vd.createElement('br'));
                        var bookscrolll4=vd.createElement('div');
                        bookscrolll4.innerText="每秒钟滚动次数：";
                        bookscrolll4.className="id";
                        bookscrolld.append(bookscrolll4);
                        var bookscrolli2=vd.createElement('input');
                        bookscrolli2.value=1;
                        bookscrolli2.className="id";
                        bookscrolli2.style.width="50px";
                        bookscrolld.append(bookscrolli2);
                        var bookscrollb=vd.createElement('button');
                        bookscrollb.innerText="自动滚动";
                        bookscrollb.className="id";
                        /**@type {boolean} 是否正在自动滚动*/
                        var autoscrollz=false;
                        function autoscroll()
                        {
                            if(autoscrollz)
                            {
                                bookscrollb.disabled=true;
                                //发送停止请求
                                chrome.runtime.sendMessage({action:"bookautoscrolls",bi:bookinfo});
                            }
                            else
                            {
                                var speed=bookscrolli.value-1+1;
                                if(isNaN(speed)){bookscrollo.innerText="自动滚动速度不是数字";return;}
                                if(speed<1){bookscrollo.innerText="自动滚动速度应大于等于1";return;}
                                var speed2=Math.round(bookscrolli2.value-1+1);
                                if(isNaN(speed2)){bookscrollo.innerText="每秒钟滚动次数不是数字";return;}
                                if(speed2<1||speed2>100){bookscrollo.innerText="每秒钟滚动次数应是1-100间的整数";return;}
                                bookscrollb.disabled=true;
                                //发出自动滚动请求
                                chrome.runtime.sendMessage({action:"bookautoscroll",bi:bookinfo,f:bookscrolls.value,s:speed,j:speed2});
                            }
                        }
                        bookscrollb.addEventListener('click',autoscroll);
                        bookscrolld.append(bookscrollb);
                        var bookscrollo=vd.createElement('div');
                        bookscrollo.className="id";
                        bookscrolld.append(bookscrollo);
                        div2.append(bookscrolld);
                        /**@param {HTMLDivElement} src
                         * @param {HTMLDivElement} div2
                        */
                        function showhidebcontrols(src,div2)
                        {
                            var i=src.getAttribute('i')-1+1;
                            function seta(value)
                            {
                                src.setAttribute('i',value);
                            }
                            if(i)
                            {
                                div2.style.display="none";
                                src.innerText="显示书籍插件控制面板";
                                vfi.style.setProperty('height',h+20+"px","important");
                                seta(0);
                            }
                            else
                            {
                                div2.style.display=null;
                                src.innerText="隐藏书籍插件控制面板";
                                vfi.style.setProperty('height',h+170+"px","important");
                                seta(1);
                            }
                        }
                        (function(div,div2){div.addEventListener('click',function(e){showhidebcontrols(e.srcElement,div2)})})(div,div2);
                        p.insertBefore(st,node);
                        p.insertBefore(div,node);
                        p.insertBefore(div2,node);
                        vfii.style.height=h+"px";
                        vfi.style.setProperty('height',h+20+"px","important");
                        if(settings!=null&&settings.showbk)
                        {
                            showhidebcontrols(div,div2);
                        }
                    }
                }
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckdocpdf(vfi)
            {
                var vd=vfi.contentDocument;
                /**@type {HTMLDivElement} img*/
                var img=null;
                function getvd()
                {
                    var vv=vfi.contentDocument;
                    if(vv!=null)
                    {
                        vd=vv;
                        console.log(vd);
                        getimg();
                    }
                    else setTimeout(getvd,1000);
                }
                getvd();
                function getimg()
                {
                    var img2=vd.getElementById('img')
                    if(img2!=null)
                    {
                        img=img2;
                        console.log(img);
                        fuckimg();
                    }
                    else setTimeout(getimg,1000);
                }
                function fuckimg()
                {
                    if(img.hasAttribute('fucked'))return;
                    img.setAttribute('fucked',1);
                    var h=vfi.clientHeight;
                    var p=img.parentElement;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(img==p.children[i])break;
                    }
                    i++;
                    var st=vd.createElement('style');
                    st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                    var div=vd.createElement('div');
                    div.innerText="显示pdf控制面板";
                    div.className="id2";
                    var div2=vd.createElement('div');
                    div2.style.display="none";
                    div2.className="id2";
                    /**@param {HTMLDivElement} src*/
                    function showhidepdfcontrols(src)
                    {
                        var i=src.getAttribute('i')-1+1;
                        function seta(value)
                        {
                            src.setAttribute('i',value);
                        }
                        if(i)
                        {
                            src.innerText="显示pdf控制面板";
                            div2.style.display="none";
                            vfi.style.height=h+40+"px";
                            seta(0);
                        }
                        else
                        {
                            src.innerText="隐藏pdf控制面板";
                            div2.style.display=null;
                            vfi.style.height=h+100+"px";
                            seta(1);
                        }
                    }
                    div.addEventListener('click',function(e){showhidepdfcontrols(e.srcElement)});
                    var imgscolld=vd.createElement('div');
                    var imgscolll1=vd.createElement('div');
                    imgscolll1.className="id";
                    imgscolll1.innerText="自动滚动方向：";
                    imgscolld.append(imgscolll1);
                    div2.append(imgscolld);
                    var imgscolls=vd.createElement('select');
                    imgscolls.className="id";
                    var imgscollo1=vd.createElement('option');
                    imgscollo1.innerText="向下";
                    imgscollo1.value="down";
                    imgscolls.append(imgscollo1);
                    var imgscollo2=vd.createElement('option');
                    imgscollo2.innerText="向上";
                    imgscollo2.value="up";
                    imgscolls.append(imgscollo2);
                    imgscolls.value=imgscollo1.value;
                    imgscolld.append(imgscolls);
                    var imgscolll2=vd.createElement('div');
                    imgscolll2.className="id";
                    imgscolll2.innerText="自动滚动速度：";
                    imgscolld.append(imgscolll2);
                    var imgscolli=vd.createElement('input');
                    imgscolli.value=100;
                    imgscolli.style.width="50px";
                    imgscolli.className="id";
                    imgscolld.append(imgscolli);
                    var imgscolll3=vd.createElement('div');
                    imgscolll3.className="id";
                    imgscolll3.innerText="像素/s";
                    imgscolld.append(imgscolll3);
                    imgscolld.append(vd.createElement('br'));
                    var imgscolll4=vd.createElement('div');
                    imgscolll4.className="id";
                    imgscolll4.innerText="每秒钟滚动次数：";
                    imgscolld.append(imgscolll4);
                    var imgscolli2=vd.createElement('input');
                    imgscolli2.className="id";
                    imgscolli2.value=1;
                    imgscolli2.style.width="50px";
                    imgscolld.append(imgscolli2);
                    var imgscollb=vd.createElement('button');
                    imgscollb.className="id";
                    imgscollb.innerText="自动滚动";
                    imgscollb.setAttribute('i',0);
                    imgscolld.append(imgscollb);
                    var imgscollo=vd.createElement('div');
                    imgscollo.className="id";
                    imgscolld.append(imgscollo);
                    /**@type {number} img滚动计时器ID*/
                    var imgsid=null;
                    /**@param {number} lastTop 上一次滚动的位置
                     * @param {number} s 每次滚动的距离 正向下 负向上
                     * @param {number} j 计时器间隔
                    */
                    function imgscroll(lastTop,s,j)
                    {
                        img.scrollTo(img.scrollLeft,lastTop+s);
                        if(lastTop!=img.scrollTop)
                        {
                            (function(lastTop){imgsid=setTimeout(function(){imgscroll(lastTop,s,j)},j);})(img.scrollTop);
                        }
                        else
                        {
                            imgsid=null;
                            imgscollb.setAttribute('i',0);
                            imgscollb.innerText="自动滚动";
                            imgscollo.innerText="已自动停止滚动";
                        }
                    }
                    /**@param {HTMLButtonElement} src*/
                    function imgscrollb(src)
                    {
                        var i=src.getAttribute('i')-1+1;
                        if(i)
                        {
                            if(imgsid!=null)
                            {
                                clearTimeout(imgsid);
                                imgsid=null;
                            }
                            src.setAttribute('i',0);
                            src.innerText="自动滚动";
                            imgscollo.innerText="已停止滚动";
                        }
                        else
                        {
                            var speed=imgscolli.value-1+1;
                            if(isNaN(speed)){imgscollo.innerText="自动滚动速度不是数字";return;}
                            if(speed<1){imgscollo.innerText="自动滚动速度应大于等于1";return;}
                            var speed2=Math.round(imgscolli2.value-1+1);
                            if(isNaN(speed2)){imgscollo.innerText="每秒钟滚动次数不是数字";return;}
                            if(speed2<1||speed2>100){imgscollo.innerText="每秒钟滚动次数应是1-100间的整数";return;}
                            src.setAttribute('i',1);
                            src.innerText="停止自动滚动";
                            var s=speed/speed2;
                            if(imgscolls.value=="up")s*=-1;
                            imgscroll(img.scrollTop,s,1000/speed2);
                            imgscollo.innerText="已开始自动滚动";
                        }
                    }
                    imgscollb.addEventListener('click',function(e){imgscrollb(e.srcElement)});
                    var downloadb=vd.createElement('button');
                    downloadb.innerText="下载原文件";
                    var downloadpb=vd.createElement('button');
                    downloadpb.innerText="下载pdf文件";
                    function download(url)
                    {
                        window.open(url,"_blank");
                    }
                    var objectid=vfi.getAttribute('objectid');
                    console.log(objectid);
                    $.getJSON(cxsturl+objectid,function(data)
                    {
                        console.log(data);
                        if(data.download!=undefined)
                        {
                            div2.append(downloadb);
                            (function(url){downloadb.addEventListener('click',function(){download(url)})})(data.download);
                        }
                        if(data.pdf!=undefined)
                        {
                            div2.append(downloadpb);
                            (function(url){downloadpb.addEventListener('click',function(){download(url)})})(data.pdf);
                        }
                    });
                    var node=null;
                    if(i<p.childElementCount)node=p.children[i];
                    p.insertBefore(st,node);
                    p.insertBefore(div,node);
                    p.insertBefore(div2,node);
                    vfi.style.height=h+40+"px";
                    if(settings!=null&&settings.showpdf)
                    {
                        showhidepdfcontrols(div);
                    }
                }
            }
            /**@param {HTMLIFrameElement} vfi*/
            function fuckppt(vfi)
            {
                var vd=vfi.contentDocument;
                /**@type {HTMLDivElement}*/
                var img=null;
                function getvd()
                {
                    var vd2=vfi.contentDocument;
                    if(vd2!=null)
                    {
                        vd=vd2;
                        console.log(vd)
                        getimg();
                    }
                    else setTimeout(getvd,1000);
                }
                getvd();
                function getimg()
                {
                    var img2=vd.getElementById('img');
                    if(img2!=null)
                    {
                        img=img2;
                        console.log(img);
                        fuckimg();
                    }
                    else setTimeout(getimg,1000);
                }
                function fuckimg()
                {
                    if(img.hasAttribute('fucked'))return;
                    img.setAttribute('fucked',1);
                    var h=vfi.clientHeight;
                    var p=img.parentElement;
                    for(var i=0;i<p.childElementCount;i++)
                    {
                        if(img==p.children[i])break;
                    }
                    i++;
                    var st=vd.createElement('style');
                    st.innerText=".id{display:inline-block;}.id2{font-size:12px;color:red;}";
                    var div=vd.createElement('div');
                    div.className="id2";
                    div.innerText="显示ppt控制面板";
                    div.setAttribute('i',0);
                    var div2=vd.createElement('div2');
                    div2.className="id2";
                    div2.style.display="none";
                    function showhidepptcontrols()
                    {
                        var i=div.getAttribute('i')-1+1;
                        if(i)
                        {
                            div.innerText="显示ppt控制面板";
                            div2.style.display="none";
                            vfi.style.height=h+40+"px";
                            div.setAttribute('i',0);
                        }
                        else
                        {
                            div.innerText="隐藏ppt控制面板";
                            div2.style.display=null;
                            vfi.style.height=h+100+"px";
                            div.setAttribute('i',1);
                        }
                    }
                    div.addEventListener('click',showhidepptcontrols);
                    var imgscolld=vd.createElement('div');
                    var imgscolll1=vd.createElement('div');
                    imgscolll1.className="id";
                    imgscolll1.innerText="自动滚动方向：";
                    imgscolld.append(imgscolll1);
                    div2.append(imgscolld);
                    var imgscolls=vd.createElement('select');
                    imgscolls.className="id";
                    var imgscollo1=vd.createElement('option');
                    imgscollo1.innerText="向下";
                    imgscollo1.value="down";
                    imgscolls.append(imgscollo1);
                    var imgscollo2=vd.createElement('option');
                    imgscollo2.innerText="向上";
                    imgscollo2.value="up";
                    imgscolls.append(imgscollo2);
                    imgscolls.value=imgscollo1.value;
                    imgscolld.append(imgscolls);
                    var imgscolll2=vd.createElement('div');
                    imgscolll2.className="id";
                    imgscolll2.innerText="自动滚动速度：";
                    imgscolld.append(imgscolll2);
                    var imgscolli=vd.createElement('input');
                    imgscolli.value=100;
                    imgscolli.style.width="50px";
                    imgscolli.className="id";
                    imgscolld.append(imgscolli);
                    var imgscolll3=vd.createElement('div');
                    imgscolll3.className="id";
                    imgscolll3.innerText="像素/s";
                    imgscolld.append(imgscolll3);
                    imgscolld.append(vd.createElement('br'));
                    var imgscolll4=vd.createElement('div');
                    imgscolll4.className="id";
                    imgscolll4.innerText="每秒钟滚动次数：";
                    imgscolld.append(imgscolll4);
                    var imgscolli2=vd.createElement('input');
                    imgscolli2.className="id";
                    imgscolli2.value=1;
                    imgscolli2.style.width="50px";
                    imgscolld.append(imgscolli2);
                    var imgscollb=vd.createElement('button');
                    imgscollb.className="id";
                    imgscollb.innerText="自动滚动";
                    imgscollb.setAttribute('i',0);
                    imgscolld.append(imgscollb);
                    var imgscollo=vd.createElement('div');
                    imgscollo.className="id";
                    imgscolld.append(imgscollo);
                    /**@type {number} img滚动计时器ID*/
                    var imgsid=null;
                    /**@param {number} lastTop 上一次滚动的位置
                     * @param {number} s 每次滚动的距离 正向下 负向上
                     * @param {number} j 计时器间隔
                    */
                    function imgscroll(lastTop,s,j)
                    {
                        img.scrollTo(img.scrollLeft,lastTop+s);
                        if(lastTop!=img.scrollTop)
                        {
                            (function(lastTop){imgsid=setTimeout(function(){imgscroll(lastTop,s,j)},j);})(img.scrollTop);
                        }
                        else
                        {
                            imgsid=null;
                            imgscollb.setAttribute('i',0);
                            imgscollb.innerText="自动滚动";
                            imgscollo.innerText="已自动停止滚动";
                        }
                    }
                    /**@param {HTMLButtonElement} src*/
                    function imgscrollb(src)
                    {
                        var i=src.getAttribute('i')-1+1;
                        if(i)
                        {
                            if(imgsid!=null)
                            {
                                clearTimeout(imgsid);
                                imgsid=null;
                            }
                            src.setAttribute('i',0);
                            src.innerText="自动滚动";
                            imgscollo.innerText="已停止滚动";
                        }
                        else
                        {
                            var speed=imgscolli.value-1+1;
                            if(isNaN(speed)){imgscollo.innerText="自动滚动速度不是数字";return;}
                            if(speed<1){imgscollo.innerText="自动滚动速度应大于等于1";return;}
                            var speed2=Math.round(imgscolli2.value-1+1);
                            if(isNaN(speed2)){imgscollo.innerText="每秒钟滚动次数不是数字";return;}
                            if(speed2<1||speed2>100){imgscollo.innerText="每秒钟滚动次数应是1-100间的整数";return;}
                            src.setAttribute('i',1);
                            src.innerText="停止自动滚动";
                            var s=speed/speed2;
                            if(imgscolls.value=="up")s*=-1;
                            imgscroll(img.scrollTop,s,1000/speed2);
                            imgscollo.innerText="已开始自动滚动";
                        }
                    }
                    imgscollb.addEventListener('click',function(e){imgscrollb(e.srcElement)});
                    var downloadb=vd.createElement('button');
                    downloadb.innerText="下载原文件";
                    var downloadpb=vd.createElement('button');
                    downloadpb.innerText="下载pdf文件";
                    function download(url)
                    {
                        window.open(url,"_blank");
                    }
                    var objectid=vfi.getAttribute('objectid');
                    console.log(objectid);
                    $.getJSON(cxsturl+objectid,function(data)
                    {
                        console.log(data);
                        if(data.download!=undefined)
                        {
                            div2.append(downloadb);
                            (function(url){downloadb.addEventListener('click',function(){download(url)})})(data.download);
                        }
                        if(data.pdf!=undefined)
                        {
                            div2.append(downloadpb);
                            (function(url){downloadpb.addEventListener('click',function(){download(url)})})(data.pdf);
                        }
                    });
                    var node=null;
                    if(i!=p.childElementCount)node=p.children[i];
                    p.insertBefore(st,node);
                    p.insertBefore(div,node);
                    p.insertBefore(div2,node);
                    vfi.style.height=h+40+"px";
                    if(settings!=null&&settings.showppt)showhidepptcontrols();
                }
            }
            function then()
            {for(var i=0;i<vff.length;i++)
            {
                czz(i,vff[i]);
                for(var j=0;j<vff[i].classList.length;j++)
                {
                    if(vff[i].classList[j]=='ans-insertvideo-online')
                    {
                        (function(vfi){fuckvideo(vfi);})(vff[i]);
                        break;
                    }
                    else if(vff[i].classList[j]=='ans-insertaudio')
                    {
                        (function(vfi){fuckaudio(vfi);})(vff[i]);
                        break;
                    }
                    else if(vff[i].classList[j]=="ans-book")
                    {
                        (function(vfi){fuckqbook(vfi);})(vff[i]);
                    }
                    else if(vff[i].classList[j]=="insertdoc-online-pdf")
                    {
                        (function(vfi){fuckdocpdf(vfi);})(vff[i]);
                    }
                    else if(vff[i].classList[j]=="insertdoc-online-ppt")
                    {
                        (function(vfi){fuckppt(vfi);})(vff[i]);
                    }
                }
            }}
            function czz(i,vfi)
            {
                if(i)return;
                /**@param {HTMLIFrameElement} vf
                 * @param {HTMLIFrameElement} vfi
                */
                function cz2(vfi,vf)
                {
                    function check()
                    {
                        var temp=document.getElementsByTagName('iframe');
                        var f=false;
                        for(var i=0;i<temp.length;i++)
                        {
                            if(vf==temp[i])f=true;
                        }
                        return f;
                    }
                    if(check())
                    {
                        var vfd=vf.contentDocument;
                        var temp2=vfd.getElementsByTagName('iframe');
                        var f2=false;
                        for(var i=0;i<temp2.length;i++)
                        {
                            if(vfi==temp2[i])f2=true;
                        }
                        if(!f2)
                        {
                            setTimeout(function(){if(check())fuck();},3000);
                        }
                        else
                        {
                            setTimeout(function(){cz2(vfi,vf)},1000);
                        }
                    }
                }
                if(!i)(function(vf,vfi){setTimeout(function(){cz2(vfi,vf)},1000)})(vf,vfi);
            }
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
                fuck();
            });
        });
        if(!r)fuck();
    });
}
catch(e)
{
    console.log(e);
    settings=null;
    fuck();
}
function getnow()
{
var d=new Date();
return d.getTime();
}
})();

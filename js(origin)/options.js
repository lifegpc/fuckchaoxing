console.log("options.js");
(function(){
/**插件设置*/
var settings=null;
var d=document;
/**设置初始值
 * @param setting 设置
*/
function set(setting=settings)
{
    d.getElementById('vpautoplay').value=setting.vpautoplay;
    d.getElementById('apautoplay').value=setting.apautoplay;
    d.getElementById('hidedm').value=setting.hidedm;
    d.getElementById('showvc').value=setting.showvc;
    d.getElementById('showac').value=setting.showac;
    d.getElementById('showbk').value=setting.showbk;
    d.getElementById('showpdf').value=setting.showpdf;
    d.getElementById('showppt').value=setting.showppt;
    d.getElementById('showta').value=setting.showta;
    d.getElementById('tatxt').value=setting.tatxt;
    d.getElementById('showco').value=setting.showco;
    d.getElementById('coal').value=setting.coal;
    d.getElementById('cola').value=setting.cola;
    d.getElementById('zhsvpap').value=setting.zhsvpap;
    d.getElementById('zhsshowvc').value=setting.zhsshowvc;
    d.getElementById('zhsctc').value=setting.zhsctc;
    d.getElementById('zhsant').value=setting.zhsant;
    d.getElementById('sva').value=setting.sva;
    d.getElementById('svc').value=setting.svc;
}
function get()
{chrome.storage.sync.get(function(data)
{
    settings=data;
    var r=scheck(settings,function()
    {
        chrome.storage.sync.get(function(data)
        {
            settings=data;
            set();
        });
    });
    if(!r)set();
})};
get();
function clear()
{
    set(scheck(null,null,1));
}
function save()
{
    var qd={};
    qd.vpautoplay=d.getElementById('vpautoplay').value=="true";
    qd.apautoplay=d.getElementById('apautoplay').value=="true";
    qd.hidedm=d.getElementById('hidedm').value=="true";
    qd.showvc=d.getElementById('showvc').value=="true";
    qd.showac=d.getElementById('showac').value=="true";
    qd.showbk=d.getElementById('showbk').value=="true";
    qd.showpdf=d.getElementById('showpdf').value=="true";
    qd.showppt=d.getElementById('showppt').value=="true";
    qd.showta=d.getElementById('showta').value=="true";
    qd.tatxt=d.getElementById('tatxt').value=="true";
    qd.showco=d.getElementById('showco').value=="true";
    qd.coal=d.getElementById('coal').value=="true";
    qd.cola=d.getElementById('cola').value=="true";
    qd.zhsvpap=d.getElementById('zhsvpap').value=="true";
    qd.zhsshowvc=d.getElementById('zhsshowvc').value=="true";
    qd.zhsctc=d.getElementById('zhsctc').value=="true";
    qd.zhsant=d.getElementById('zhsant').value=="true";
    qd.sva=d.getElementById('sva').value=="true";
    qd.svc=d.getElementById('svc').value=="true";
    chrome.storage.sync.set(qd);
}
d.addEventListener('DOMContentLoaded',function(){
    d.getElementById('a').addEventListener('click',get);
    d.getElementById('c').addEventListener('click',clear);
    d.getElementById('s').addEventListener('click',save);
});
})();

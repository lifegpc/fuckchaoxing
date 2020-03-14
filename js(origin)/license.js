console.log('license.js');
(function(){
/**@param {number} wid windowID*/
function get(wid)
{
    var ac=document.getElementsByTagName('a');
    for(var i=0;i<ac.length;i++)
    {
        ac[i].addEventListener('click',function(e)
        {
            /**@type {HTMLLinkElement}*/
            var t=e.srcElement;
            chrome.tabs.create({url:t.href,windowId:wid});
        });
    }
}
document.addEventListener('DOMContentLoaded',function()
{
    chrome.windows.getCurrent(function(window)
    {
        chrome.tabs.query({active:true,windowId:window.id},function(tabs)
        {
            var tab=tabs[0];
            document.body.style.width=tab.width/2+"px";
            get(window.id);
        })
    })
});
})();

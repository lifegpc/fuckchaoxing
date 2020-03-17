console.log('settings.js');
/**检查设置选项
 * @param {Object} settings
 * @param {Function} callback 设置更新完后执行的函数
 * @param {number} o 特殊返回
 * @returns 是否需要重新获取设置 o为1时返回新的设置
*/
function scheck(settings,callback,o=0)
{
    /**获取版本数组
     * @param {string} version
     * @returns {Array<number>}
    */
    function getv(version)
    {
        var l=version.split(".");
        for(var i=0;i<l.length;i++)l[i]=l[i]-1+1;
        return l;
    }
    /**比较版本数组
     * @param {Array<number>} v1 版本数组
     * @param {Array<number>} v2 版本数组
     * @returns {-1|0|1} 前面大 1，相等 0，后面大 -1*/
    function comv(v1,v2)
    {
        if (v1>v2)return 1;
        else if(v1<v2)return -1;
        else return 0;
    }
    /**判断obj是否为name类型
     * @param {string} name constructor名字
    */
    function iss(obj,name)
    {
        return obj.constructor.name==name;
    }
    /**判断obj是否不存在或不是相应类型 
     * @param {string} name constructor名字
    */
    function isa(obj,name)
    {
        return obj==undefined||!iss(obj,name);
    }
    /**@type {Object} chrome插件配置*/
    var mf=chrome.runtime.getManifest();
    /**@type {Array<number>} chrome插件版本数组*/
    var nv=getv(mf.version);
    /**@type {boolean} 是否需要重新获取设置*/
    var need=false;
    /**@type {Object} 新chrome插件配置*/
    var news={};
    /**获取初始清单*/
    function getnews()
    {
        news.version=mf.version;
        news.vpautoplay=false;
        news.apautoplay=false;
        news.hidedm=false;
        news.showvc=false;
        news.showac=false;
    }
    if(o==1)
    {
        getnews();
        return news;
    }
    if(settings.version==undefined)
    {
        need=true;
        getnews();
    }
    else
    {
        /**@type {Array<number>} 当前设置版本数组*/
        var sv=getv(settings.version);
        var r=comv(nv,sv);
        /**@export 当前版本检查*/
        function needcheck()
        {
            /**设置需要的内容
             * @param {string} key 需要设置的设置名字
             * @param value 设置内容
            */
            function setneed(key,value)
            {
                if(!need)
                {
                    need=true;
                    getnews();
                }
                news[key]=value;
            }
            /**检查并设置内容
             * @param {string} key 设置名称
             * @param {string} name constructor名字
             * @param value 初始值
             */
            function isn(key,name,value)
            {
                if(isa(settings[key],name))
                {
                    setneed(key,value);
                    if(temp.length)
                    {
                        for(var i=0;i<temp.length;i++)
                        {
                            news[temp[i][0]]=temp[i][1];
                        }
                    }
                }
                else if(need)//内容存在将原值给新清单
                {
                    news[key]=settings[key];
                }
                else
                {
                    temp[temp.length]=[key,settings[key]];
                }
            }
            /**临时清单*/
            var temp=[];
            isn('vpautoplay','Boolean',false);
            isn('apautoplay','Boolean',false);
            isn('hidedm','Boolean',false);
            isn('showvc','Boolean',false);
            isn('showac','Boolean',false);
        }
        if(r==-1)
        {
            need=true;
            getnews();
        }
        else if(r==0)//版本相同
        {
            needcheck();
        }
        else//需要升级设置
        {
            /**设置与当前版本相同*/
            function equalnow()
            {
                need=true;
                getnews();
                needcheck();
            }
            if(!comv(sv,[1,0,5])||!comv(sv,[1,0,6]))equalnow();
        }
    }
    if(need)
    {
        chrome.storage.sync.clear(function(){
            chrome.storage.sync.set(news,callback);
        });
    }
    return need;
}

import Sortable from 'sortablejs'
export default {
    /**
     * * 对象的深度克隆
     * @param obj 要克隆的对象，数组和对象都可以
     * @returns {[]} 返回克隆好的新对象
     */
    objectDeepClone(obj) {
        function deepCopy(obj) {
            let result = Array.isArray(obj) ? [] : {};
            for (let key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (typeof obj[key] === 'object') {
                        result[key] = deepCopy(obj[key]);
                    } else {
                        result[key] = obj[key];
                    }
                }
            }
            return result;
        }

        return deepCopy(obj);
    },
    /**
     * 将数字转化为中文大写
     * @param num 数字
     * @returns {string} 对应的中文大写
     */
    numToChinesNum(num) {
        let changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
        let unit = ["", "十", "百", "千", "万"];
        num = parseInt(num);
        let getWan = (temp) => {
            let strArr = temp.toString().split("").reverse();
            let newNum = "";
            for (var i = 0; i < strArr.length; i++) {
                newNum = (i === 0 && strArr[i] === 0 ? "" : (i > 0 && strArr[i] === 0 && strArr[i - 1] === 0 ? "" : changeNum[strArr[i]] + (strArr[i] === 0 ? unit[0] : unit[i]))) + newNum;
            }
            return newNum;
        };
        let overWan = Math.floor(num / 10000);
        let noWan = num % 10000;
        if (noWan.toString().length < 4) noWan = "0" + noWan;
        return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
    },
    /**
     * 数字转化为大写字母，数字从0开始
     * @param num 数字
     * @returns {string} 转化后的大写字母
     */
    numToCharCode(num) {
        return String.fromCharCode(parseInt(num) + 65);
    },
    /**
     * 返回页面的scrollTop
     * @returns {number}
     */
    getScrollTop() {
        let scrollTop = 0;
        if(document.documentElement && document.documentElement.scrollTop){
            scrollTop = document.documentElement.scrollTop;
        }else if(document.body){
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    },
    /**
     * 处理BLOB对象的下载
     * @param data
     * @param fileName
     * @param onlyUrl 使用相对路径下载
     */
    downloadBlobObject(data, fileName, onlyUrl) {
        const blob = new Blob([data]);
        if ('download' in document.createElement('a')) { // 非IE下载
            const eLink = document.createElement('a');
            eLink.download = fileName;
            eLink.style.display = 'none';
            if(onlyUrl) {
                eLink.href = data;
            } else {
                eLink.href = URL.createObjectURL(blob);
            }
            document.body.appendChild(eLink);
            eLink.click();
            URL.revokeObjectURL(eLink.href);// 释放URL 对象
            document.body.removeChild(eLink)
        } else if(!onlyUrl) { // IE10+下载
            navigator.msSaveBlob(blob, fileName)
        }
    },
    /**
     * 判断浏览器种类
     * @returns {string} Opera，Firefox，Chrome，Safari，IE
     */
    getBrowserName(){
        let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        let isOpera = userAgent.indexOf("Opera") > -1;
        //判断是否Opera浏览器
        if (isOpera) {
            return "Opera"
        }
        //判断是否Firefox浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "Firefox";
        }
        if (userAgent.indexOf("Chrome") > -1){
            return "Chrome";
        }
        //判断是否Safari浏览器
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        }
        //判断是否IE浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }
    },
    /**
     * 获取我的产品，返回产品名的数组和产品id的数组
     * @param productsStr
     * @returns {{idArr: *, nameArr: *}}
     */
    getMyProduct(productsStr) {
        const products = {
            JcStomach: '1', //巨成胃管置入系统
            JcCpr: '2', //巨成心肺复苏系统
            jcExam:	'3', //巨成考试系统
            jcUrinary: '4', //巨成男性导尿系统
            jcInjection: '5' //巨成肌肉注射系统
        };
        let myProductNameArr = productsStr.split(',');
        let myProductIdArr = myProductNameArr.map(item => products[item]);

        return {
            nameArr: myProductNameArr,
            idArr: myProductIdArr
        }
    },
    /**
     * 根据位数在前面补0
     * @param num 要补0的数字
     * @param length 补成几位数
     * @returns {string}
     */
    addZeroByLength(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    },
    /**
     * 获取一个完整文件名的后缀
     * @param name
     * @returns {string}
     */
    getFileSuffix(name) {
        let fileName = name.lastIndexOf("."); //取到文件名开始到最后一个点的长度
        let fileNameLength = name.length; //取到文件名长度
        return name.substring(fileName + 1, fileNameLength)
    },

    /**
     * 初始化拖拽
     * 可以调用option方法进行设置，例如this.sortableObj.option('disabled', false)
     * @param className
     * @param endFn
     * @param startFn
     * @returns {Sortable|Sortable|Sortable}
     */
    initMySortable(className, endFn, startFn) {
        return Sortable.create(document.querySelector('.' + className), {
            disabled: false, // boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
            animation: 150,
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true,
            onStart() {
                startFn && startFn()
            },
            onEnd({ newIndex, oldIndex }) {
                endFn && endFn(newIndex, oldIndex);
            }
        })
    },
    /**
     * 获取url的指定传入参数
     * @param variable
     * @returns {string|boolean}
     */
    getUrlData(variable) {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i ++) {
            let pair = vars[i].split("=");
            if(pair[0] === variable) return pair[1];
        }
        return false;
    },
    /**
     * 在新窗口打开页面
     * @param that 需要把this传进来
     * @param pagePath router里定义的path
     */
    goToNextPage_newWindow(that, pagePath) {
        let routeUrl = that.$router.resolve({
            path: `/${pagePath}`
        });
        window.open(routeUrl.href, '_blank');
    },
    /**
     * 判断字符在另一个字符串中出现次数
     * @param reg 要判断的字符
     * @param str
     * @returns {*}
     */
    getNumberOfAppearByString(reg, str) {
        let num = 0;
        for(let i = 0, len = str.length; i < len; i++){
            if(str[i] === reg) num++
        }
        return num
    }
}

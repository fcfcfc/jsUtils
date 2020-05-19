export default {
    /**
     对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
     可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
     Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
     * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
     * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
     * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
     * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
     */
    initDatePattern() {
        Date.prototype.pattern = function (fmt) {
            let o = {
                "M+": this.getMonth() + 1, //月份
                "d+": this.getDate(), //日
                "h+": this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, //小时 (12小时制)
                "H+": this.getHours(), //小时 (24小时制)
                "m+": this.getMinutes(), //分
                "s+": this.getSeconds(), //秒
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度
                "S": this.getMilliseconds() //毫秒
            };
            let week = {
                "0": "日",
                "1": "一",
                "2": "二",
                "3": "三",
                "4": "四",
                "5": "五",
                "6": "六"
            };
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            if (/(E+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[this.getDay() + ""]);
            }
            for (let k in o) {
                if (new RegExp(`(${k})`).test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr(("" + o[k]).length)));
                }
            }
            return fmt;
        };
    },
    /**
     * 获取指定日期的前一个日期，默认为当天,比如当前:2016-01-28  则返回 2015-12-28
     * @returns {string}
     */
    getPreMonth(str = new Date()) {
        let date = new Date(str);
        let daysInMonth = [[0],[31],[28],[31],[30],[31],[30],[31],[31],[30],[31],[30],[31]];
        let strYear = date.getFullYear();
        let strDay = date.getDate();
        let strMonth = date.getMonth() + 1;

        if(strYear % 4 === 0 && strYear % 100 !== 0) daysInMonth[2] = 29;
        if(strMonth - 1 === 0) {
            strYear -= 1;
            strMonth = 12;
        } else {
            strMonth -= 1;
        }
        strDay = daysInMonth[strMonth] >= strDay ? strDay : daysInMonth[strMonth];
        if(strMonth < 10) strMonth = `0${strMonth}`;
        if(strDay < 10) strDay = `0${strDay}`;

        return `${strYear}-${strMonth}-${strDay}`;
    },
    /**
     * 获取半年前的new Date
     * @param str
     * @returns {Date}
     */
    getPastHalfYear(str = new Date()) {
        let curDate = (new Date(str)).getTime();
        let halfYear = 365 / 2 * 24 * 3600 * 1000;
        let pastResult = curDate - halfYear;
        return new Date(pastResult);
    },
    /**
     * 判断早上好,上午好,下午好,傍晚好,晚上好
     * @param time 可以被new Date()的时间字符串，不传则为当前时间
     * @returns {string}
     */
    getNowTimeType(time = new Date()) {
        let text = '';
        let now = new Date(time);
        let hour = now.getHours();
        if(hour < 6) {
            text = '凌晨好！';
        } else if(hour < 9) {
            text = '早上好！';
        } else if(hour < 12) {
            text = '上午好！';
        } else if(hour < 14) {
            text = '中午好！';
        } else if(hour < 17) {
            text = '下午好！';
        } else if(hour < 19) {
            text = '傍晚好！';
        } else if(hour < 22) {
            text = '晚上好！';
        } else {
            text = '夜里好！';
        }
        return text
    },
    /**
     * 秒转时分秒
     * @param second
     * @returns {{hour: *, minute: *, second: *}}
     */
    secondToDate(second = 0) {
        let h = Math.floor(second / 3600) < 10 ? `0${Math.floor(second / 3600)}` : Math.floor(second / 3600);
        let m = Math.floor((second / 60 % 60)) < 10 ? `0${Math.floor((second / 60 % 60))}` : Math.floor((second / 60 % 60));
        let s = Math.floor((second % 60)) < 10 ? `0${Math.floor((second % 60))}` : Math.floor((second % 60));

        return {
            hour: h,
            minute: m,
            second: s
        }
    }
}
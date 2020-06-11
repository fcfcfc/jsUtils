import {Loading, MessageBox, Message, Notification} from 'element-ui';
export default {
    /**
     * 自定义alert
     * @param msg alert消息
     * @param callback 点击x或者确定后执行的方法
     * @param tip 提示语，默认为‘提示’
     */
    myAlert(msg = '', callback = () => {}, tip = '提示') {
        MessageBox.alert(msg, tip, {
            confirmButtonText: '确定',
            type: 'warning',
            lockScroll: false
        }).then(() => {
            callback()
        }).catch(() => {
            callback()
        });
    },
    /**
     * 自定义confirm
     * @param msg confirm消息
     * @param callback 点击确定后执行的方法
     * @param cancelFn 点击取消后执行的方法
     * @param confirmButtonText 确定按钮的文字，默认为‘确定’
     * @param cancelButtonText
     */
    myConfirm(msg = '', callback = () => {}, cancelFn = () => {}, confirmButtonText = '确定', cancelButtonText = '取消') {
        MessageBox.confirm(msg, '提示', {
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            type: 'warning'
        }).then(() => {
            callback()
        }).catch(() => {
            cancelFn()
        });
    },
    /**
     * 自定义toast，多用于系统级通知的被动提醒
     * @param msg toast消息
     */
    myToast(msg = '') {
        Notification({
            title: '成功',
            message: msg,
            type: 'success',
            offset: 100
        });
    },
    /**
     * 自定义prompt
     * @param title 标题
     * @param inputValue 输入框的初始值
     * @param callback 点击确定后执行的方法，参数为输入框的值
     * @param cancelCallback
     * @param placeholder
     */
    myPrompt(title, inputValue = '', callback = () => {}, cancelCallback = () => {}, placeholder = '') {
        return MessageBox.prompt(title, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputValue: inputValue,
            inputPlaceholder: placeholder,
            callback: (status, vueObj) => {
                let val = vueObj.$children[0].value;
                if(status === 'confirm') {
                    callback && callback(val)
                } else if(status === 'cancel') {
                    cancelCallback && cancelCallback(val)
                }
            }
        });
    },
    /**
     * 自定义toast，常用于主动操作后的反馈提示
     * @param msg toast消息
     * @param offset 距离窗口顶部的偏移量
     * @param type 主题，默认success，可选值success/warning/info/error
     * @param duration 显示时间, 毫秒。设为 0 则不会自动关闭
     */
    myMessage(msg = '', offset = 20, type = 'success', duration = 3000) {
        return Message({
            message: msg,
            type: type,
            offset: offset,
            duration: duration
        });
    },
    /**
     * 显示loading遮罩
     * @returns
     */
    showLoadingFn() {
        return Loading.service({
            lock: true,
            text: '努力加载中...',
            spinner: 'el-icon-loading',
            fullscreen: false,
            background: 'rgba(255, 255, 255, 0.3)'
        })
    }
}

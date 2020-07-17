import {Loading, MessageBox, Message, Notification} from 'element-ui';
export default {
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
    myToast(msg = '') {
        Notification({
            title: '成功',
            message: msg,
            type: 'success',
            offset: 100
        });
    },
    myPrompt(title, inputValue = '', callback = () => {}, cancelCallback = () => {}, placeholder = '') {
        MessageBox.prompt(title, '提示', {
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
    myMessage(msg = '', offset = 20, type = 'success', duration = 3000) {
        return Message({
            message: msg,
            type: type,
            offset: offset,
            duration: duration
        });
    },
    showLoadingFn() {
        return Loading.service({
            lock: true,
            text: '努力加载中...',
            spinner: 'el-icon-loading',
            fullscreen: false,
            background: 'rgba(#000, 0.3)'
        })
    }
}

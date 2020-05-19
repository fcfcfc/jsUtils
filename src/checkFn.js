export default {
    /**
     * 校验手机号
     * @param str 手机号
     * @param ifNotShowAlert 设置为true，不弹窗提示校验错误
     * @returns {boolean} 校验成功返回true，失败false
     */
    checkMobile(str = '', ifNotShowAlert = false) {
        const re = /^1[3456789]\d{9}$/;

        if (!re.test(str)) {
            if (!ifNotShowAlert) {
                if(str !== '') {
                    this.myAlert('请输入正确的手机号码');
                }else {
                    this.myAlert('请输入你的手机号');
                }
            }
            return false;
        } else {
            return true;
        }
    },
    /**
     * 校验密码，要求字母+数字长度8-16位
     * @param str 密码
     * @param ifNotShowAlert 设置为true，不弹窗提示校验错误信息
     * @returns {boolean} 成功返回true，失败false
     */
    checkPassword(str = '', ifNotShowAlert = false) {
        const re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

        if (!re.test(str)) {
            if (!ifNotShowAlert) {
                if(str !== '') {
                    this.myAlert('请输入8位以上密码，密码中必须同时包含数字、字母');
                }else {
                    this.myAlert('请输入你的登录密码');
                }
            }
            return false;
        } else {
            return true;
        }
    },
    /**
     * 校验是否返回扫码进行考核
     * @param that
     * @param flag
     * @param role
     * @returns {boolean}
     */
    checkIfReturnSkillOverview(that, flag, role) {
        let url = role === 'student' ? 'student/skillOverview' : 'teacher/scoreQuery';

        if(flag) {
            this.myAlert(role === 'student' ? '没有考核结果，请先扫码进行考核' : '没有考核结果，请返回后重试', () => this.goToNextPage(that, url));
            return true
        }else {
            return false
        }
    }
}
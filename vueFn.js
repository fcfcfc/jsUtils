export default {
    /**
     * 打开新页面
     * @param that 需要把this传进来
     * @param pagePath router里定义的path
     * @param params 传递的参数，需要传参时，需要name参数
     * @param name router里定义的name
     */
    goToNextPage(that, pagePath, params, name) {
        if(params) {
            that.$router.push({
                name: name,
                params: params
            })
        }else {
            that.$router.push({
                path: `/${pagePath}`
            })
        }
    },
    /**
     * 打开新页面，但不会向history添加新记录
     * @param that 需要把this传进来
     * @param pagePath router里定义的path
     */
    goToNextPage_notPushHistory(that, pagePath) {
        that.$router.replace({
            path: `/${pagePath}`
        });
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
     * 返回上一页
     * @param that 需要把this传进来
     */
    goPageBack(that) {
        that.$router.back()
    }
}
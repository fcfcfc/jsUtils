import Sortable from 'sortablejs'
export default {
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
    }
}

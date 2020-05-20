import arrayFn from "./arrayFn";
import elementUIFn from "./elementUIFn"
import timeFn from "./timeFn";
import checkFn from "./checkFn";
import vueFn from "./vueFn";
import otherFn from "./otherFn";
const utils = Object.assign(arrayFn, elementUIFn, timeFn, checkFn, vueFn, otherFn);
window.myJsUtils = utils;
export default utils

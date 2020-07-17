import arrayFn from "./arrayFn";
import elementUIFn from "./elementUIFn"
import timeFn from "./date";
import checkFn from "./checkFn";
import otherFn from "./otherFn";
const utils = Object.assign(arrayFn, elementUIFn, timeFn, checkFn, otherFn);
window.myJsUtils = utils;
export default utils

import arrayFn from "./arrayFn";
import elementUIFn from "./elementUIFn"
import timeFn from "./date";
import checkFn from "./checkFn";
import plugsFn from "./plugsFn";
import numberFn from "./numberFn";
import stringFn from "./stringFn";
import windowFn from "./windowFn";
const utils = Object.assign(arrayFn, elementUIFn, timeFn, checkFn, plugsFn, numberFn, stringFn, windowFn);
window.myJsUtils = utils;
export default utils

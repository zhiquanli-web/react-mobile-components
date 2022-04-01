/**
 * 校验 Array 类型
 *
 * @param {unknown} val
 */
export function isArray(val) {
  return Array.isArray(val);
}

/**
 * 校验 Object 类型
 *
 * @param {unknown} val
 */
export function isObject(val) {
  return !isArray(val) && typeof val === "object";
}

/**
 * 校验 Function 类型
 *
 * @param {unknown} fn
 */
export function isFunction(fn) {
  return typeof fn === "function";
}

/**
 * 校验 String 类型
 *
 * @param {unknown} val
 */
export function isString(val) {
  return typeof val === "string";
}

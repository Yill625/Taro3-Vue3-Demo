/**
 *
 * @param func
 * @param wait
 * @returns
 */
const useDebounceFn = (func, wait) => {
  var timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}

export default useDebounceFn

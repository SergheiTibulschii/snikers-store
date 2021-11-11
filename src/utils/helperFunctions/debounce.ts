export const debounce = (fn: VoidFunction, delay: number) => {
    let timer: NodeJS.Timeout

    return function () {
        const args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(null, args as never)
        }, delay)
    }
}

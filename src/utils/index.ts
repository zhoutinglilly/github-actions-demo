/** @format */

export const Log = (str?: string): void => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(str)
    }
}

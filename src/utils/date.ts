const hour = 1000 * 60 * 60 * 1
const inaccuracy = 2000

export const isLessThanHourAgo = (time: number) => time + hour >= Date.now() - inaccuracy

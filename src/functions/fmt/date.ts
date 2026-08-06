import { format, formatDistanceToNow, isToday, isYesterday } from 'date-fns'
import { id } from 'date-fns/locale'

// by providing a default string of 'PP' or any of its variants for `formatStr`
// it will format dates in whichever way is appropriate to the locale
const dateFormat = (dt: string | number | Date, fmt: string = 'PP') => {
  return format(dt, fmt, { locale: id })
}
export default {
  /**
   * Format date with given string format. Set locale to id
   * See https://date-fns.org/docs/format for accepted tokens
   */
  date: dateFormat,
  dateLong: (dt: string | number | Date) => {
    return dateFormat(dt, 'cccc, dd MMMM yyyy HH:mm')
  },

  /**
   * Shorter format date. If date is today, it will only show time,
   * otherwise show the date.
   */
  dateShort: (dt: string | number | Date) => {
    if (isToday(dt)) {
      return dateFormat(dt, 'HH:mm')
    }
    if (isYesterday(dt)) {
      return 'Kemarin'
    }

    return dateFormat(dt)
  },

  /**
   * Get texts of calculation given date from now.
   * e.g: 2 hari yang lalu, kemarin, 5 jam yang lalu.
   * See https://date-fns.org/docs/formatDistanceToNow.
   */
  dateRelative: (dt: string | number | Date, addSuffix = true) => {
    return formatDistanceToNow(new Date(dt), { locale: id, addSuffix })
  },
}

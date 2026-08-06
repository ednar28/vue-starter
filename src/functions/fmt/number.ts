export default {
  /**
   * Format number with thousand separator.
   * e.g 2500000 to "2.500.000"
   */
  number: (num: string | number | bigint | null) => {
    if (typeof num === 'string') {
      num = Number(num)
    }

    if (typeof num === 'number' || typeof num === 'bigint') {
      return new Intl.NumberFormat('id-ID').format(num)
    }

    return '0'
  },
}

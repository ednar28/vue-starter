export const sanitizePhone = (phone: string): string => {
  if (phone.startsWith('0')) {
    phone = phone.substring(1)
    return sanitizePhone(phone)
  }
  if (phone.startsWith('+62')) {
    phone = phone.substring(3)
    return sanitizePhone(phone)
  }
  return phone
}

/**
 * Format phone number for easier reading.
 *
 *  6: 012345 => 012-345
 *  7: 0123456 => 012-3456
 *  8: 01234567 => 0123-4567
 *  9: +621234567 => 62-123-4567
 * 10: +6231345678 => 62-31-345-678
 * 11: +62317451133 => 62-31-745-1133
 * 12: +628123456789 => 62-812-345-6789
 * 13: +6281234567890 => +62-812-3456-7890
 * 14: +62812345678901 => +62-8123-4567-8901
 */
export const phone = (phoneNumber: string) => {
  function insertDashAfter (str: string, spaceAt: number[]) {
    spaceAt.forEach((at) => {
      str = str.slice(0, at) + ' ' + str.slice(at)
    })

    return str
  }

  /**
   * Get location where to insert a dash.
   * From the end for easier insert.
   */
  function calculateSpace (phoneNumber: string) {
    switch (phoneNumber.length) {
      case 6:
        return [4]
      case 7:
        return [4]
      case 8:
        return [6, 4]
      case 9:
        return [6, 3]
      case 10:
        return [8, 7]
      case 11:
        return [8, 5]
      case 12:
        return [8, 5]
      case 13:
        return [9, 6, 3]
      case 14:
        return [10, 6, 3]
      case 15:
        return [11, 7, 3]
      default:
        return []
    }
  }

  const spaceAt = calculateSpace(phoneNumber)
  return insertDashAfter(phoneNumber, spaceAt)
}

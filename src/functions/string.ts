export const stringTitle = (str: string) => {
  return String(str).split(' ').map(stringUpperFirst).join(' ')
}

export const stringUpperFirst = (str: string) => {
  return String(str).charAt(0).toUpperCase() + str.substring(1)
}

export const maskName = (str: string, showLast: boolean = false) => {
  if (!str || str.length <= 2) return str

  if (showLast) {
    // Show last 3 characters
    const visibleLength = Math.min(3, str.length - 1)
    const hiddenLength = str.length - visibleLength
    const maskedPart = '*'.repeat(hiddenLength)
    const visiblePart = str.substring(str.length - visibleLength)
    return maskedPart + visiblePart
  }

  // Default: show first and last character
  const firstChar = str.charAt(0)
  const lastChar = str.charAt(str.length - 1)
  const maskedMiddle = '*'.repeat(str.length - 2)
  return firstChar + maskedMiddle + lastChar
}

/**
 * Filter array by javascript (example usage: search in region page list)
 */
export const jsSearch = <T>(needle: string, haystack: T[], callback: (item: T) => string) => {
  const sanitize = (str: string) => str.toLowerCase().replace(/\s+/g, '')
  const sanitizedNeedle = sanitize(needle)
  return haystack.filter((item: T) => {
    const sanitizedName = sanitize(callback(item))
    return sanitizedName.includes(sanitizedNeedle)
  })
}

export default {
  stringTitle,
  stringUpperFirst,
  maskName,
  jsSearch,
}

function stringToHslColor (str: string) {
  // https://medium.com/@pppped/compute-an-arbitrary-color-for-user-avatar-starting-from-his-username-with-javascript-cd0675943b66
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  hash = Math.abs(hash)

  const h = hash % 360 // 0-359
  const s = 30 + (hash % 50) // 40-79
  const l = 40
  return { h, s, l }
}

function stringToHex (str: string) {
  // https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex
  const { h, s, l } = stringToHslColor(str)

  const L = l / 100
  const a = (s * Math.min(L, 1 - L)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = L - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0') // convert to Hex and prefix "0" if needed
  }
  return `${f(0)}${f(8)}${f(4)}`
}

export function uiAvatarSrc (name: string | null) {
  const option = new URLSearchParams({
    color: 'fff',
    background: stringToHex(name ?? ''),
    name: name ?? '',
  })
  return 'https://ui-avatars.com/api?' + option.toString()
}

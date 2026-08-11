/**
 * Convert number into H:M:SS format.
 * 50 -> 0:50
 * 150 -> 2:30
 * 600 -> 10:00
 * 3600 -> 1:00:00
 * 36000 -> 10:00:00
 * 360000 -> 100:00:00
 */
export default function (seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = String(seconds % 60).padStart(2, '0')
  const result = [remainingSeconds]

  if (hours > 0) {
    result.unshift(String(minutes).padStart(2, '0'))
    result.unshift(String(hours))
  } else {
    result.unshift(String(minutes))
  }

  return result.join(':')
}

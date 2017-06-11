import { ConferenceStartTime } from '../constants'

const time = () => {
  const launchDate = new Date(ConferenceStartTime).getTime()
  const cDate = new Date().getTime()
  let ms = launchDate - cDate
  ms = ms <= 0 ? 0 : ms

  function formatNumber(number) {
    number = number.toString()
    return number.length === 1 ? '0' + number : number
  }

  return {
    ms,
    days: formatNumber(Math.floor(ms / (1000 * 60 * 60 * 24))),
    hours: formatNumber(
      Math.floor(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    ),
    minutes: formatNumber(Math.floor(ms % (1000 * 60 * 60) / (1000 * 60))),
    seconds: formatNumber(Math.floor(ms % (1000 * 60) / 1000))
  }
}

module.exports = time

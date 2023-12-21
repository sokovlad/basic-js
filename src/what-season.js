const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof date === 'undefined') {
    return 'Unable to determine the time of year!'
  }
  if(!(date instanceof Date)) {
    throw new Error('Invalid date!')
  }
  try {
    date.toISOString()
  } catch (e) {
    throw new Error('Invalid date!')
  }
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const milliseconds = date.getMilliseconds()
  const fakeDate = new Date(year, month, day, hours, minutes, seconds, milliseconds)
  let season = ''
  if(date.toString() !== fakeDate.toString()) {
    throw new Error('Invalid date!')
  }
  if(month >= 0 && month < 2 || month === 11) {
    season = 'winter'
  }
  if(month >= 2 && month < 5) {
    season = 'spring'
  }
  if(month >= 5 && month < 8) {
    season = 'summer'
  }
  if(month >= 8 && month < 11) {
    season = 'autumn'
  }
  return season
}

module.exports = {
  getSeason
};

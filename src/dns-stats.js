const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsArr = [];
  const domainsObj = {};
  domains.forEach(element => {
    const arr = element.split('.');
    let domain = '';
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      arr[i] = '.' + arr[i];
      domain += arr[i];
      domainsArr.push(domain);
    }
  });
  domainsArr.forEach((item) => {
    domainsObj[item] = 0;
    for (let i = 0; i < domainsArr.length; i += 1) {
      if(item === domainsArr[i]) {
          domainsObj[item] += 1;
      }
    }
  })
  return domainsObj;
}

module.exports = {
  getDNSStats
};

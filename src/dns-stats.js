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
  const shortDomains = [],
        resObj = {};
  domains.map((el) => {
    const domainArr = el.split('.').reverse();
    let addDomain = '';
    domainArr.map((domainEl) => {
      addDomain += '.' + domainEl;
      shortDomains.push(addDomain);
    })
  })
  shortDomains.forEach((el) => {
    (resObj[el] !== undefined)
      ? resObj[el] ++
      : resObj[el] = 1;
});
  return resObj;
}

module.exports = {
  getDNSStats
};

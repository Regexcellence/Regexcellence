exports = module.exports = {};

exports.parseChallengeName = str => (
  str.replace(/\s/g, '-')
  .replace(/[^-\w\d]/g, '')
  .replace(/[A-Z]/g, p1 => p1.toLowerCase())
);

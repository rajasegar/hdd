const htmlOverTheWire = require('./html-over-the-wire');
const justEnoughJS = require('./just-enough-javascript');
const progressiveHtml = require('./progressive-html');
const ssr = require('./ssr');
const serverRouting = require('./server-side-routing');
const optionalBuild = require('./optional-build');
const progressiveEnhancement = require('./progressive-enhancement');
const monolith = require('./monolith');
const cdn = require('./cdn');
const avoidClientState = require('./avoid-state-on-client');

module.exports = {
  'html-over-the-wire': htmlOverTheWire,
  'just-enough-javascript': justEnoughJS,
  'progressive-html': progressiveHtml,
  ssr,
  'server-side-routing': serverRouting,
  'optional-build': optionalBuild,
  'progressive-enhancement': progressiveEnhancement,
  monolith,
  cdn,
  'avoid-state-on-client': avoidClientState,
};

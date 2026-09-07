function readPackage(pkg) {
  pkg.pnpm = pkg.pnpm || {};
  
  // Add dependency overrides here
  if (!pkg.pnpm.overrides) {
    pkg.pnpm.overrides = {};
  }
  
  Object.assign(pkg.pnpm.overrides, {
    "axios": "^1.15.2",
    "defu": "^6.1.5",
    "follow-redirects": "^1.16.0",
    "h3": "^1.15.9",
    "hono": "^4.12.18",
    "lodash": "^4.18.0",
    "picomatch@<2.3.2": "2.3.2",
    "picomatch@>=4.0.0 <4.0.4": "4.0.4",
    "postcss": "^8.5.10",
    "rollup": "^4.59.0",
    "socket.io-parser": "^4.2.6",
    "yaml": "^2.8.3"
  });

  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
};

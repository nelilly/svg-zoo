const replace = require("replace-in-file");
const options = {
  files: ['./build/*.html', './build/**/*.html', './build/browserconfig.xml', './build/site.webmanifest' ],
  from: [/src="\//g, /href="\//g, /url\(\//g, /src": "\//g],
  to: ['src="/svg-zoo/', 'href="/svg-zoo/', 'url(/svg-zoo/', 'src": "/svg-zoo/'],
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();

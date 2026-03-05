const fs = require("fs");
const path = require("path");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Bus builder webapp" />
    <title>Build your Bulli</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <script type="text/javascript" src="/build-your-bulli/bundle.js"></script>
  </body>
</html>`;

const distDir = path.join(__dirname, "..", "dist");

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(path.join(distDir, "index.html"), html, "utf8");
console.log("Generated dist/index.html");

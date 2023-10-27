const path = require("path");

function getFilePath(url) {
  switch (url) {
    case "/":
      return path.join("public", "landingPage.html");
    case "/cars":
      return path.join("public", "searchCar.html");
    default:
      return path.join("public", url);
  }
}

module.exports = getFilePath;

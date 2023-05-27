const newman = require("newman");

newman.run(
  {
    //collection: require("./collection/dmoney.json"),
    collection:
      "https://api.postman.com/collections/24414195-451196e5-362b-4711-bc8c-1fa74b3c3723?access_key=PMAT-01H1CXBT0WRJ5X4ATKMCHRQYXP",
    //environment:require('./collection/env.json'),

    reporters: "htmlextra",

    iterationCount: 1,

    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to newman/ in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);

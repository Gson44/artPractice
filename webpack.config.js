const path = require("path");

module.exports = {
    entry: ['./src/firebaseConfiguration.js',"./src/index.js", ],
    output : {
        filename: "config.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: 'eval-source-map'
};
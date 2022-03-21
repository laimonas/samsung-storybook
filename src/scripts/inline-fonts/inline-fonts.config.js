const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/scripts/inline-fonts/inline-fonts.js",
    output: { path: __dirname + "/bin" },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "inline-fonts.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },

            {
                test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: "base64-inline-loader?limit=1000&name=[name].[ext]",
            },
        ],
    },
};

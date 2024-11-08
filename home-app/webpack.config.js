//home-app/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import ModuleFederationPlugin from webpack
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// import dependencies from package.json, which includes react and react-dom
const { dependencies } = require("./package.json");

module.exports = {
    entry: "./src/entry.js",
    mode: "development",
    devServer: {
        port: 3000,  // port 3001 for header-app
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "HomeApp",  // This application named 'HomeApp'
            // This is where we define the federated modules that we want to consume in this app. 
            // Note that we specify "Header" as the internal name 
            // so that we can load the components using import("Header/"). 
            // We also define the location where the remote's module definition is hosted: 
            // Header@[http://localhost:3001/remoteEntry.js]. 
            // This URL provides three important pieces of information: the module's name is "Header", it is hosted on "localhost:3001", 
            // and its module definition is "remoteEntry.js".
            remotes: { 
                "HeaderApp": "HeaderApp@http://localhost:3001/remoteEntry.js",         
                "UserRegApp": "UserRegApp@http://localhost:3002/remoteEntry.js",    
            },
            shared: {  // and shared
                ...dependencies,  // other dependencies
                react: { // react
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": { // react-dom
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
                // "react-router-dom": { 
                //     singleton: true,
                //     requiredVersion: dependencies["react-router-dom"],
                // },
            },
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    target: "web",
};
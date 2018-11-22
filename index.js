import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const app = express();
const port = 3000;

export default (app) => {
    const webpackConfig = require('./webpack.config.dev')[0];
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {}));
}


if (process.env.NODE_ENV === "dev") developmentMode(app);

app.get('/', (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
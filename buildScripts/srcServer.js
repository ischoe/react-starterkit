//import express from 'express';
//import path from 'path';
//import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev.js';
import config from '../config';

/*eslint-disable no-console*/
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(webpackConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(config.port, 'localhost', function (err) {
  if (err) {
    return console.log('Error : ', err);
  }

  console.log('Listening at http://localhost:'+config.port+'/');
});
/*
const port = config.port,
	app = express(),
	compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
}));

app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
*/

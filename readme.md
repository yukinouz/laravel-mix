# yukinouz-laravel-mix
## 環境
require node.js
https://nodejs.org/ja/

## setup
```bash
npm install
```

## build
```bash
#development mode
npx mix
#production mode
npx mix -p
#watch and Live Reload
npx mix watch
```
## reference
### Github : JeffreyWay / laravel-mix
https://github.com/JeffreyWay/laravel-mix

### Blog : flex-box.net
https://flex-box.net/laravel-mix


## Memo
laravel-mix公式(https://laravel-mix.com/docs/5.0/installation)の方法で進めると、cross-envを使ったnpm scriptで下記のエラーが出る。

該当部分
```javascript
"scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
}
```

```bash
error: unknown option '--hide-modules'
```
または、
```bash
error: unknown option '--no-progress'
```

Webpack 5から上記はサポートされなくなったため、代わりにnpx mixを使います。

### See Github issue for more detail.
https://qiita.com/yutarou/items/e00a05b4d84ed40dc444
https://github.com/JeffreyWay/laravel-mix/issues/2523

```
Remove those two options from your build script in package.json. Webpack 5 no longer supports them.

Or use the new Mix executable.

npx mix -p
```
# yukinouz laravel-mix

## 環境
node v12.18.0
npm v6.14.5

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

## error: unknown option '--hide-modules' の対処法

https://qiita.com/yutarou/items/e00a05b4d84ed40dc444
https://github.com/JeffreyWay/laravel-mix/issues/2523

```
Remove those two options from your build script in package.json. Webpack 5 no longer supports them.

Or use the new Mix executable.

npx mix -p
```

公式にあるcross-envを使った方法ではなく、npx mixを使う。
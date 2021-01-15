const mix = require('laravel-mix');
const fs = require('fs');

mix.setResourceRoot('dist');
mix.setPublicPath('dist').version();
mix.webpackConfig({ devtool: "source-map" });
mix.browserSync({
  server: {
    baseDir: '.',
    index: 'index.html'
  },
  port: 8081,
  proxy: false,
  files: '**/*'
});

mix
  .js('src/js/app.js', 'dist/js/')
  .autoload({
    jquery: ['$', 'window.jQuery']
  })
  .options({
    terser: {
        terserOptions: {
            compress: {
                drop_console: true // console.logを削除
            }
        }
    }
  });

mix
  .sass('src/scss/app.scss', 'dist/css/')
  .options({
    processCssUrls: false,
    autoprefixer: {
      options: {
        grid: true,
      }
    }
  });


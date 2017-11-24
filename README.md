# @freshes/style-import-loader

### Usage

``` bash
yarn add -D @freshes/style-import-loader
```

``` javascript
module: {
  rules: {
    test: /\.(js|vue)$/,
    use: [
      {
        loader: '@freshes/style-import-loader',
        options: {
          scoped: '@humans/[\\w-]+', // e.g. @human/icon
          style: 'dist/main.css' // e.g. @human/icon/dist/main.css
        }
      }
    ]
  }
}
```

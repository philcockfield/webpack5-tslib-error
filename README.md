# Sample Error: Webpack5 and TSLIB

There seems to be an error loading projects that use `tslib` using `webpack@5.0.0-rc.3`.

## Setup

```
yarn install
```

Open browser to http://localhost:3000

## Error State

If `webpack@4.44.2` is used, the project loads in the browser without error. (see `package.works.json`)

Update the package to use `webpack@5.0.0-rc.3` and the following error occurs in the browser:

![Error](https://user-images.githubusercontent.com/185555/95528250-1281b680-0a34-11eb-97ea-d880306658dd.png)

```
Uncaught TypeError: Cannot destructure property '__extends'
of '_tslib_js__WEBPACK_IMPORTED_MODULE_0___default(...)' as it is undefined.
```

This error is enduced when `rxjs` is imported and used.

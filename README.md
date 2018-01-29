# mrpt-web

> MRPT frontend webinterface

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

To upload to heroku
```
heroku login
heroku create <YOUR APP NAME>
heroku config:set NODE_ENV=production --app <YOUR-PROJECT-NAME-HERE>
heroku git:remote --app <YOUR-PROJECT-NAME-HERE>

#Now to deploythe master branch
git push heroku master
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

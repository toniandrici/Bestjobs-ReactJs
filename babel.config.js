module.exports = {
  presets:  [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers":[
            "last 5 versions",
            "ie >= 9"
          ],
          "node": "current"
        } 
      }
    ],
      "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-arrow-functions",
    "transform-es2015-arrow-functions"
  ]
};

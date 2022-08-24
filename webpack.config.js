function getStyleUse(bundleFilename) {
    return [
      {
        loader: 'file-loader',
        options: {
          name: bundleFilename,
        },
      },
      { loader: 'extract-loader' },
      { loader: 'css-loader' },
      {
        loader: 'sass-loader',
        options: {
          includePaths: ['./node_modules'],
          implementation: require('dart-sass'),
          fiber: require('fibers'),
        }
      },
    ];
}
module.exports = [
    {
        entry: './idm-search-bar.scss',
        output: {
            // This is necessary for webpack to compile
            // But we never use style-bundle.js
            filename: 'style-bundle.js',
        },
        module: {
            rules: [
                {
                    test: /idm-search-bar.scss$/,
                    use: getStyleUse('bundle-idm-search-bar.css')
                }
            ]
        },
    },
    {
        entry: "./dist/idm-search-bar.js",
        output: {
          filename: "bundle-idm-search-bar.js"
        },
        module: {
          loaders: [{
            test: /idm-search-bar.js$/,
            loader: 'babel-loader',
            query: {presets: ['env']}
          }]
        }
    }
];
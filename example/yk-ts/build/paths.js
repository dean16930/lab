'use strict'

const path = require('path')
const fs = require('fs')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(__dirname)
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const envPublicUrl = process.env.PUBLIC_URL

const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx'
]

// config after eject: we're in ./config/
module.exports = {
  appPath: resolveApp('../'),
  appBuild: resolveApp('../output'),
  appSrc: resolveApp('../web'),
  entry: resolveApp('../web/entry'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: getPublicUrl(resolveApp('../package.json')),
  resolveApp: resolveApp
}

module.exports.moduleFileExtensions = moduleFileExtensions

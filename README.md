# webpack_demo
## Basic Setup
****install webpack locally*
```
npm init -y
npm install webpack webpack-cli --save-cli
```
We also need to adjust our package.json file in order to make sure
we mark our package as *private, as well as removing the *main* e-
ntry.This prevent an accidental publish of your code.
## using a Configuration
As of version 4, webpack doesn't require any configuration, but most
projects will need a more complex setup, which is why webpack supports
a configuration file. This is much more efficient than having to manually
type in a lot of commands in the terminal.
## NPM Scripts
Given it's not particularly fun to run a local copy of webpack from
the CLI, we can set up a little shortcut.Let's adjust our *package.json*
by adding an npm script:

## Asset Management
### Loading CSS
In order to *import* a CSS file from within a JavaScript module,
you need to install and add the *style-loader* and *css-loader* to 
your *module* configuration:
```
npm install --save-dev style-loader css-loader
```
### Loding Images
Using the *file-loader* we can easily incorporate those in our system
as well
```
npm install --save-dev file-loader
```
### Loading Fonts
The file and url loaders will take any file you load through them
and output it to your build directory.This means we can use them 
for any kind of file, including fonts.
With the loader configured and fonts in place, you can incorporate
them via an *@font-face* declaration.The local *url(...)* directive
will be picked up by webpack just as it was with the image:
```
@font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'),
  src: url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
```
# Output-management
As your application grows and once you start using hashes in filenames
and outputting multiple bundles, it will be difficult to keep managing
your *index.html* file manually.However, a few plugins exist that will
make this process much easier to manage.
## Preparation
## Setting up HtmlWebpackPlugin
First install the plugin and adjust the webpack.config.js file:
```
npm install --save-dev html-webpack-plugin
```
Before we do a build, you should know that the *HtmlWebpackPlugin* by
default will generate its own *index.html* file, even though we already
have one in the *dist/* folder.This means that it will replace our 
*index.html* file with a newly generated one.
If you open *index.html* in your code editor, you'll see that the *HtmlWebpackPlugin*
has created an entirely new file for your and that all the bundles are 
automatically added.

## Cleaning up the *****dist/* folder
A popular plugin to manage this is the *clean-webpack-plugin"

## The Manifest
You might be wondering how webpack and its plugins seem to "know" what files are being generated. 
The answer is in the manifest that webpack keeps to track how all the modules map to the output bundles. 
If you're interested in managing webpack's output in other ways, 
the manifest would be a good place to start.

The manifest data can be extracted into a json file for easy consumption using the
*WebpackManifestPlugin*.

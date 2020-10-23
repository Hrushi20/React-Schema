﻿# React Webpack Custom Configuration

This is a React Starter Code made without Create-React-App. It gives more control to the developer and is customizable. 

Webpack packages used in the project-
* webpack
* webpack-cli
* webpack-dev-server

Javascript Loaders -
* babel-loader
* @babel-core
* @babel/preset-env
* @babel/preset-react

Css Loaders - 
* css-loader
* auto-prefixer
* post-css
* post-css-loader

Image Loader - 
* file-loader
* url-loader

Webpack-Config-Plugins - 
* clean-webpack-plugin
* html-webpack-plugin

React -
* react
* react-dom
* react-router
* react-router-dom

#### Note-
.babelrc file is automatically searched by the babel-loader.
.babelrc file, consists an object with a presets key with an array value(@babel/preset-env and @babel/preset-react)

@babel/preset-env allows you to use latest javascript.
@babel/preset-react converts jsx to javascript

clean-webpack-plugin will remove all files inside webpack's output.path directory, as well as all unused webpack assets after every successful rebuild.

html-webpack-plugin targets the desired html file and all the js,css etc are bundled into the single html file.



#   R e a c t - B l o g  
 #   R e a c t - B l o g  
 
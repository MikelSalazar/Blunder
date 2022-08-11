# Blunder
An all-in-one development toolkit for web projects developed with TypeScript.

__Please note this project is in alpha stage. It still needs some work to make it secure and feature complete.__


## Motivation

The complexity of current module bundlers and frontend builders makes it difficult to control what it is really happpening with the TypeScript code you have been working so hard to write. While nowhere near as feature-rich as other solutions, Blunder offers a comprehensive set of tools that developers can easily tinker with to obtain the exact results they want.

It might be a massive mistake (hence, the name of the project)... but it one we can make together.


## Features

The Bundler toolkit provides several tools to facilitate the development of JavaScript applications/frameworks for the web:

 * __Static Code Analyzing:__ Inspects the Typescript files to detect logic errors, spelling mistakes... while offering suggestions to improve the quality of the code.
 
 * __Documentation Generator:__ Automatically generates documentation files from the JavaDoc comments included in the code.
 
 * __TypeScript Transpiler:__ Traduces the TypeScript code into JavaScript (EcmaScript) modules.
 
 * __Static Module Bundler:__ Combines multiple Javascript modules into bundle files to limit the number fetch requests.
 
 * __Data Compressor:__ Minimizes the JavaScript code and embeds external resources into the bundle files for better distribution.
 

## Development Guidelines

Some of the principles that guide the development of this project are:

 * __Clean Code Generation:__ The resulting JavaScript code must be easy to debug and, even, to embed into the HTML file to create autocontained web apps.

 * __No External Dependencies:__ Bundler is distributed as a single NodeJS package with no required dependencies to any other packages.

 * __Easy to Use, Easy to Understand:__ All the code of the Blunder toolkit has been designed with simplicity and teachability in mind.
 
 


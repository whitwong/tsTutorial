"use strict";
// Created tsconfig.json via `tsc --init` command.
// Created a more realistic workflow (aka: public directory and src directory).
// In tsconfig.json, used rootDir and outDir options to specify root directory where .ts files were and an out directory for the compiled .js files. Now it's possible to just run `tsc` or `tsc -w` in the terminal and typescript will compile all .ts files in the /src directory and place the outputs in the /public directory.
// Still an issue with placing .ts files at the root of the project --> tsc wants to compile even though we specified a source directory/root directory. Added an "include" option to tsconfig.json to specify that typescript only compile files in the /src directory. "include" option uses an arry type.
console.log('mario');

#!/usr/bin/env node
"use strict"

const program = require('commander');
const pkg = require('../package.json');
const vue = require('../src/vue');

program
    .version(pkg.version)
    .arguments('<app>')
    .option('-u, --ui <ui>', 'ui framework, include 1.iview 2.element')
    .action((appName) => {
        const { ui } = program;
        vue(appName, ui)
    })

program.parse(process.argv);




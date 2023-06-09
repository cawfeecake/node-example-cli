#!/usr/bin/env -S node --no-warnings

import { realpathSync } from 'node:fs'

import colors from 'colors'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import pkg from './package.json' assert { type: 'json' }
import utilities from './utilities.js'

const OPTIONS = {}

function startApp() {

  utilities.title('Starting boilerplate');

  if (utilities.dirExists(OPTIONS.directory)) {

    utilities.o('log', 'Hello.'.green);
    utilities.o(
      'log',
      OPTIONS.directory,
      OPTIONS.foo,
      OPTIONS.baz,
      OPTIONS.other
    );
    utilities.o('log', 'Goodbye.'.red);

  } else {

    utilities.o('log', `Chosen directory does not exist: ${OPTIONS.directory}`.red.bold);
    utilities.o('log', 'Double check your path and try again'.toUpperCase().rainbow);

  }

  utilities.exitGraceful();

}

function getOptions() {

  let argv = yargs(hideBin(process.argv))
    .version(pkg.version)
    .usage(`Usage: $0 -d [/path/to/directory/]`)
    .boolean([
      'foo',
      'baz'
    ])
    .option('foo', {
      alias: [
        'f',
      ],
      description: 'Create foo text files?',
      type: 'boolean',
    })
    .option('baz', {
      alias: [
        'b',
      ],
      description: 'What will this option do?',
      type: 'boolean',
    })
    .option('other', {
      alias: [
        'o',
      ],
      description: 'Some other option?',
      type: 'number',
      default: 3,
    })
    .option('directory', {
      alias: [
        'd',
      ],
      description: 'A directory!',
      type: 'string',
      demand: true,
    })
    .alias('h', 'help')
    .help('h', 'Show help.')
    .argv;

  OPTIONS.directory = realpathSync(argv.directory);
  OPTIONS.foo = argv.foo;
  OPTIONS.baz = argv.baz;
  OPTIONS.other = argv.other;

  startApp();

}

getOptions();

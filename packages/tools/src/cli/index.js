#!/usr/bin/env node

'use strict'

import { program } from 'commander'
import packageInfo from '../../package.json'

program
  .version(packageInfo.version)
  .command('build [name]', 'build specified task')
  .parse(process.argv)

// https://github.com/tj/commander.js/pull/260
const proc = program.runningCommand
if (proc) {
  proc.on('close', process.exit.bind(process))
  proc.on('error', () => {
    process.exit(1)
  })
}

const subCmd = program.args[0]
if (!subCmd || subCmd !== 'build') {
  program.help()
}

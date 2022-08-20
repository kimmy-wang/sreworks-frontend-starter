#!/usr/bin/env node

'use strict'

import { program } from 'commander'
import chalk from 'chalk'
import { runTask } from '../utils/runTask'

program.on('--help', () => {
  console.log(chalk.blue.bold('  Usage:'))
  console.log()
})

program.parse(process.argv)

const task = program.args[0] || 'build'

console.log('sw-tools build', task)

require('../task/build')

runTask(task)

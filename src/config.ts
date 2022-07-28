import core from '@actions/core'

export interface Config {
  wranglerVersion: string
  environment: string
  secrets: string[]
  command: string
  config_file: string
  failMissingSecret: boolean
}

export function CreateConfig(): Config {
  return {
    wranglerVersion: core.getInput('wranglerVersion'),
    environment: core.getInput('environment'),
    secrets: core.getMultilineInput('secrets'),
    command: core.getInput('command'),
    config_file: core.getInput('config'),
    failMissingSecret: core.getBooleanInput('failMissingSecret')
  }
}

import { setup, teardown } from '@ark/attest'

// config options can be passed here
export const mochaGlobalSetup = () => setup({})

export const mochaGlobalTeardown = teardown

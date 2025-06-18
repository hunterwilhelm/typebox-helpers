import { setup } from "@ark/attest"

// config options can be passed here
export default () => setup({
  benchPercentThreshold: 20,  
  benchErrorOnThresholdExceeded: true  
})
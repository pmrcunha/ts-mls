import { Capabilities } from "./capabilities"
import { ciphersuites, CiphersuiteName } from "./crypto/ciphersuite"
import { greaseCapabilities, defaultGreaseConfig } from "./grease"

/**
 * The default capabilities for a key package.
 *
 * @public
 * */
export function defaultCapabilities(): Capabilities {
  return greaseCapabilities(defaultGreaseConfig, {
    versions: ["mls10"],
    ciphersuites: Object.keys(ciphersuites) as CiphersuiteName[],
    extensions: [],
    proposals: [],
    credentials: ["basic", "x509"],
  })
}

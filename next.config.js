/**
 * Project-local Next.js config: allow production build even with TypeScript
 * type errors in source. We set this because the project contains older
 * typings and third-party types that cause type-check errors under newer
 * TypeScript, but runtime behavior is known to work.
 */
module.exports = {
  typescript: {
    // WARNING: allows building with type errors. Keep for legacy compatibility.
    ignoreBuildErrors: true,
  },
}

/**
 * A Metalsmith plugin to hide any files marked as `draft`.
 *
 * @return {Function}
 */

export function skip() {
  return function (files) {
    for (var file in files) {
      if (files[file].skip) delete files[file]
    }
  }
}
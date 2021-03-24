/**
 *
 * @param path
 * @returns {boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:|ftp:)/.test(path)
}

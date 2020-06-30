export function buildUrl(url, data) {
  if (data && typeof data === 'object') {
    let parts = []

    for (let key in data) {
      let values,
          value = data[key]

      if (value === null || typeof value === "undefined") {
        return
      }

      if (Array.isArray(value)) {
        values = value
        key += '[]'
      } else {
        values = [value]
      }
      values.forEach(val => {
        if (isDate(val)) {
          val = val.toISOString()
        } else if (isPlaneObject(val)) {
          val = JSON.stringify(val)
        }
        parts.push(`${enCodeURI(key)}=${enCodeURI(val)}`)
      })
    }
    let str = parts.join('&')
    if (url.indexOf('#') !== -1) {
      url = url.substring(0, url.indexOf('#'))
    }

    return url + (url.indexOf('?') === -1 ? '?' : '&') + str
  }
}

export function enCodeURI(val) {
  return encodeURIComponent(val)
      .replace(/%40/g, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']')
}

export function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]'
}


export function isPlaneObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]'
}


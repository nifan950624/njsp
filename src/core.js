import {isDate, enCodeURI, isPlaneObject, buildUrl} from './utils'

function loadScript(url, data, callback) {
  var src = buildUrl(url, data),
      script = document.createElement('script');
  script.src = src;
  window[data.callback] = function (res) {
    script.onload = () => {
      callback(null, res)
      document.body.removeChild(script)
      script = null
    }
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  }
  document.body.append(script);
}

function promisify(fn) {
  return function (url, data = null) {
    if (!url) {
      throw new Error('url not defined')
    }
    return new Promise((res, rej) => {
      function callback(err, result) {
        if (err) {
          rej(err)
        } else {
          res(result)
        }
      }

      fn.call(this, url, data, callback)
    })
  }
}


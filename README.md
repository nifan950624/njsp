# njsp

用来处理jsonp类型的请求.

## example
``` javascript
njsp(url, {callback: 'cb'}).then(res => res.data)
```

接受参数 `url`为`String`,`data`为`Object`

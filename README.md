# njsp

```
npm install njsp --save
```

用来处理 jsonp 类型的请求.

## example

```javascript
njsp(url, { callback: 'cb' }).then(res => res.data)
```

接受参数 `url`为`String`,`data`为`Object`

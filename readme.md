# Dot Notation

```
npm install dot-notation
```

## Getting started

```js
var DotNotation = require('dot-notation');
var myobject = {};
DotNotation.set(myobject, 'my.deep.prop', 'foo');

console.log(myobject); 
// {
//   my: {
//     deep: {
//       prop: 'foo' 
//     }
//   }
// }
```

## API Reference

### set
```js
DotNotation.set(obj, path, value);
```

### get
```js
DotNotation.get(obj, path);
```

### delete
```js
DotNotation.delete(obj, path);
```

### copy
```js
DotNotation.delete(src_obj, src_path, dest_obj, dest_path);
```

### move
```js
DotNotation.delete(src_obj, src_path, dest_obj, dest_path);
```


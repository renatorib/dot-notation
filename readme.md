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
// -> {
//   my: {
//     deep: {
//       prop: 'foo' 
//     }
//   }
// }

console.log(DotNotation.get(myobject, 'my.deep.prop'));
// -> 'foo'

console.log(DotNotation.get(myobject, 'it.does.not.exist'));
// -> undefined
```

```js
var DotNotation = require('dot-notation');

var me = new DotNotation({
  name: {
    first: 'Renato',
    last: 'Ribeiro'
  },
  age: 20
});

console.log(me.get('name.first'));
// -> 'Renato'
```

## API Reference

```js
var DN = require('dot-notation');
```

### set(obj, path, value)
```js
DN.set(obj, 'foo.bar', 'baz');
```

### get(obj, path)
```js
DN.get(obj, 'foo.bar');
```

### delete(obj, path)
```js
DN.delete(obj, 'foo.bar');
```

### copy(src_obj, src_path, dest_obj, dest_path)
```js
DN.copy(obj, 'bar.foo', obj2, 'bar.baz');
```

### move(src_obj, src_path, dest_obj, dest_path)
```js
DN.move(obj, 'bar.baz', obj2, 'bar.foo');
```


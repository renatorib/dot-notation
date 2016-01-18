var assert = require('assert');
var DotNotation = require('../src/dot-notation');

describe('DotNotation', function() {

    var obj = {
        values: {
            limit: 100
        }
    }

    var obj2 = {};

    it('should set & get object', function () {
        DotNotation.set(obj, 'values.limit', 200);
        assert.equal(200, obj.values.limit);
        assert.equal(200, DotNotation.get(obj, 'values.limit'));
    });

    it('should return undefined when get path that not exist', function(){
        assert.equal(undefined, DotNotation.get(obj, 'foo.bar.baz'));
    });

    it('should set a deep path', function(){
        DotNotation.set(obj, 'foo.bar.baz', 'bazinga!')
        assert.equal('bazinga!', obj.foo.bar.baz);
    });

    it('should delete', function(){
        assert.equal('bazinga!', obj.foo.bar.baz);
        DotNotation.delete(obj, 'foo.bar.baz');
        assert.equal(undefined, obj.foo.bar.baz);
    });

    it('should push', function(){
        DotNotation.set(obj, 'values.array', []);
        DotNotation.push(obj, 'values.array', 'foo');
        DotNotation.push(obj, 'values.array', 'bar');
        assert.equal('foo', obj.values.array[0]);
        assert.equal('bar', obj.values.array[1]);
        assert.equal(2, obj.values.array.length);
    });

    it('should copy', function(){
        DotNotation.set(obj, 'copying.bar.foo', 500);
        DotNotation.copy(obj, 'copying.bar', obj2, 'copied');
        assert.equal(500, obj2.copied.foo);
    });

    it('should move', function(){
        DotNotation.set(obj, 'bazinga', {a: 1, b: 'c'});
        DotNotation.move(obj, 'bazinga', obj2, 'bazinga');
        assert.equal(undefined, obj.bazinga);
        assert.equal('c', obj2.bazinga.b);
    });

});

describe('DotNotation Instance', function() {

    var dn = DotNotation.new({
        profile: {
            age: 20,
            name: "Renato"
        }
    });

    it('should set & get', function(){
        dn.set('profile.name', "Ribeiro");
        assert.equal('Ribeiro', dn.get('profile.name'));
    });

    it('should delete', function(){
        assert.equal(20, dn.get('profile.age'));
        dn.delete('profile.age');
        assert.equal(undefined, dn.get('profile.age'));
    });

    it('should push', function(){
        dn.set('profile.items', []);
        dn.push('profile.items', 'foo');
        assert.equal('foo', dn.get('profile.items.0'));
        assert.equal(1, dn.get('profile.items').length);
    });

    it('should copy', function(){
        var obj3 = {};
        dn.copy('profile', obj3, 'profile');
        assert.equal('Ribeiro', obj3.profile.name);
    });

    it('should move', function(){
        var obj4 = {};
        dn.move('profile', obj4, 'profile');
        assert.equal('Ribeiro', obj4.profile.name);
        assert.equal(undefined, dn.get('profile'));
    });

});

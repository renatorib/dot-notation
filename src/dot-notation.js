var DotNotation = function(object){
    this.object = object;
}

DotNotation.new = function(object){
    return new DotNotation(object);
}

/* Methods */

DotNotation.set = function(object, prop, value){
    var deepAccess = object || {};
    var propArr = prop.split(".");
    while(propArr.length){
        var deepProp = propArr.shift();
        if(deepAccess[deepProp] === undefined){
            deepAccess[deepProp] = {};
        }
        if(propArr.length == 0){
            deepAccess[deepProp] = value;
        } else {
            deepAccess = deepAccess[deepProp];
        }
    };
    return object;
}

DotNotation.get = function(object, prop){
    var deepAccess = object;
    var propArr = prop.split(".");
    while(propArr.length){
        try {
            deepAccess = deepAccess[propArr.shift()]
        } catch(e){
            return undefined;
        }
    };
    return deepAccess;
}

DotNotation.delete = function(object, prop){
    var deepAccess = object;
    var propArr = prop.split(".");
    while(propArr.length){
        if(propArr.length === 1){
            delete deepAccess[propArr.shift()];
        } else {
            deepAccess = deepAccess[propArr.shift()];
        }
    };
    return object;
}

DotNotation.push = function(object, prop, push){
    var find = DotNotation.get(object, prop);
    if(Array.isArray(find)){
        find.push(push);
    }
    return find;
}

DotNotation.copy = function(src, srcprop, dest, destprop){
    var value = DotNotation.get(src, srcprop);
    return DotNotation.set(dest, destprop, value);
}

DotNotation.move = function(src, srcprop, dest, destprop){
    var value = DotNotation.get(src, srcprop);
    DotNotation.delete(src, srcprop);
    return DotNotation.set(dest, destprop, value);
}

/* Prototype */

DotNotation.prototype.set = function(prop, value){
    return DotNotation.set(this.object, prop, value);
}

DotNotation.prototype.get = function(prop){
    return DotNotation.get(this.object, prop);
}

DotNotation.prototype.delete = function(prop){
    return DotNotation.delete(this.object, prop);
}

DotNotation.prototype.push = function(prop, push){
    return DotNotation.push(this.object, prop, push);
}

DotNotation.prototype.copy = function(srcprop, dest, prop){
    return DotNotation.copy(this.object, srcprop, dest, prop);
}

DotNotation.prototype.move = function(srcprop, dest, prop){
    return DotNotation.move(this.object, srcprop, dest, prop);
}

module.exports = DotNotation;

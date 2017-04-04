var Entity = (function () {
    // constructor(attrs) {
    function Entity(attrs) {
        var eid = attrs.eid, _keys = attrs._keys;
        for (var k in attrs) {
            this[k] = attrs[k];
        }
        this._keys = Object.keys(attrs);
        this.eid = eid;
        this.type;
    }
    Entity.prototype.toJSON = function (flags) {
        var _this = this;
        if (flags === void 0) { flags = []; }
        var output = {
            eid: this.eid,
            type: this.type
        };
        flags.forEach(function (f) {
            if (_this._keys.indexOf(f) === 0)
                return;
            else {
                output[f] = _this[f];
            }
        });
        return output;
    };
    return Entity;
}());

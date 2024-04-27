"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListItem = /** @class */ (function () {
    function ListItem(_id, _item, _checkStatus) {
        if (_id === void 0) { _id = ""; }
        if (_item === void 0) { _item = ""; }
        if (_checkStatus === void 0) { _checkStatus = false; }
        this._id = _id;
        this._item = _item;
        this._checkStatus = _checkStatus;
    }
    Object.defineProperty(ListItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "item", {
        get: function () {
            return this._item;
        },
        set: function (item) {
            this._item = item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "checkStatus", {
        get: function () {
            return this._checkStatus;
        },
        set: function (checkStatus) {
            this._checkStatus = checkStatus;
        },
        enumerable: false,
        configurable: true
    });
    return ListItem;
}());
exports.default = ListItem;

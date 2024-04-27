"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listTamplate = /** @class */ (function () {
    function listTamplate() {
        this.ul = document.getElementById("listItems");
    }
    listTamplate.prototype.clear = function () {
        this.ul.innerHTML = "";
    };
    listTamplate.prototype.render = function (fullList) {
        var _this = this;
        this.clear();
        fullList.list.forEach(function (item) {
            var li = document.createElement("li");
            li.className = "item";
            var check = document.createElement("input");
            check.type = "checkbox";
            check.id = item.id;
            check.tabIndex = 0;
            check.checked = item.checkStatus;
            li.append(check);
            check.addEventListener("change", function () {
                item.checkStatus = !item.checkStatus;
                fullList.save();
            });
            var label = document.createElement("label");
            label.htmlFor = item.id;
            // Item prop is a description written in interface "Item" in ListItem.js:
            label.textContent = item.item;
            li.append(label);
            var btn = document.createElement("button");
            btn.className = "button";
            btn.textContent = "X";
            li.append(btn);
            btn.addEventListener("click", function (evt) {
                evt.preventDefault();
                fullList.removeItem(item.id);
                _this.render(fullList);
            });
            _this.ul.append(li);
        });
    };
    listTamplate.instance = new listTamplate();
    return listTamplate;
}());
exports.default = listTamplate;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/style.css");
var FullList_1 = require("./model/FullList");
var ListItem_1 = require("./model/ListItem");
var ListTemplate_1 = require("./templates/ListTemplate");
var initApp = function () {
    var fulllist = FullList_1.default.instance;
    var template = ListTemplate_1.default.instance;
    var itemEntryForm = document.getElementById("itemEntryForm");
    itemEntryForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        var input = document.getElementById("newItem");
        var newEntryText = input.value.trim();
        if (!newEntryText.length)
            return;
        //To find out next id number:
        var itemId = fulllist.list.length
            //it counts the next id number when we already have something inside ("true"):
            ? parseInt(fulllist.list[fulllist.list.length - 1].id) + 1
            // otherwise it would be the first item:
            : 1;
        //console.log(itemiId);
        //console.log(parseInt(fulllist.list[fulllist.list.length - 1].id) + 1) i.e. next number;
        //console.log(parseInt(fulllist.list[fulllist.list.length - 1].id)) i.e current number;
        var newItem = new ListItem_1.default(itemId.toString(), newEntryText);
        fulllist.addItem(newItem);
        template.render(fulllist);
    });
    var clearItems = document.getElementById("clearItemsButton");
    clearItems.addEventListener("click", function (evt) {
        evt.preventDefault();
        fulllist.clearList();
        template.clear();
    });
    fulllist.load();
    template.render(fulllist);
};
document.addEventListener("DOMContentLoaded", initApp);

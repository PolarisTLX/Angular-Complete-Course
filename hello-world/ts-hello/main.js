"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
// create instance of this class:
var component = new like_component_1.LikeComponent(10, true);
// this example it has 10 likes to start, and like has already been clicked
// call the onClick function
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);

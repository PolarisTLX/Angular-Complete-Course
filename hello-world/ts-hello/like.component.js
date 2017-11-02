"use strict";
// EXERCISE:  Facebook "like" component:
Object.defineProperty(exports, "__esModule", { value: true });
/* more novice version:
export class LikeComponent {

  constructor(public likesCount: number, public isSelected: boolean) {
  }

  onClick() {
    if (this.isSelected) {
      this.likesCount--;
      this.isSelected = false;
    } else {
      this.likesCount++;
      this.isSelected = true;
    }
  }
}
*/
// Cleaner version:
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;

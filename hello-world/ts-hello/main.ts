//  CONSTRUCTORS (to save you lines at the bottom):

class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    //  the ? marks means those parameters are optional
    // for cases when those values may not be known yet
    this.x = x;
    this.y = y;
  }

  //  this is called a mthod:
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

//  this is an Object, which is an instance of a Class
let point = new Point(1, 2);
//  let point = new Point();
//  if there are ? marks above, then don't need to specify the values, in this case (1, 2) for X and Y, right away
point.draw();

// to prevent ability to change a values// this is done with "access modifyers"
// using "private keyword:"
class Point {
  private x: number;
  y: number;

  constructor(x?: number, y?: number) {
    //  the ? marks means those parameters are optional
    // for cases when those values may not be known yet
    this.x = x;
    this.y = y;
  }

  //  this is called a mthod:
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);
// this below is no longer possible because we set x: number to be "private" above:
point.x = 3;
point.draw();

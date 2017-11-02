import { LikeComponent } from './like.component';

// create instance of this class:
let component = new LikeComponent(10, true);
// this example it has 10 likes to start, and like has already been clicked
// call the onClick function
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);
tsc *.ts --target ES5 && node main.js

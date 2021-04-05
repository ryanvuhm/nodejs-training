var buffer = new ArrayBuffer(8);

// ArrayBuffer is a feature in JS

var view = new Int32Array(buffer);
//  => can store 2 number in this view

view[0]=6;
view[1]=7;
view[2]=8;

console.log(view);
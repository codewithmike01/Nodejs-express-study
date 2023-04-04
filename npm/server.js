const Color = require('color');

// Generate Random Colors

const color = Color('#7743CE').alpha(0.5).lighten(0.5);

const singleColor = color.hsl().toString();

console.log(singleColor);

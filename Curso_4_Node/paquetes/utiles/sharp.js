const sharp = require('sharp');

sharp('1.png')
.resize(80)
.grayscale()
.toFile('resized.png');
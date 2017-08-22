const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');


const optimizeImage = () => {
	return imagemin(['public/*.{jpg,png}'], 'dist/images', {
		plugins: [
			imageminJpegtran({
				progressive: true,
			}),
			imageminPngquant({
				quality: '65-90',
				speed: 4
			})
		]
	})
		.then(images => images.map(image => image.path))
		.then(imagePaths => imagePaths.map(r => console.log(r)))
}

optimizeImage();

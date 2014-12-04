/**
	使用canvas对图片进行简单压缩
	@param {Image} source_img_obj The source Image Object
     @param {Integer} quality The output quality of Image Object
     @return {Image} result_image_obj The compressed Image Object
*/
function zipPic(imgSouce, quality, format){
	var _source = imgSouce || "";
	var _quality = quality || 60;
	var _format = format || "png";
	var _mineType = 'image/jpeg';
	var _width = _source.naturalWidth;
	var _height = _source.naturalHeight;
	var _cvs = document.createElement("canvas");
	var _result = new Image();

	if(_width>480){
		_width = 480;
		_height = _height*480/_source.naturalWidth;
	}

	_cvs.width = _width;
	_cvs.height = _height;

	
	cvs.getContext("2d")
		.drawImage(_source,0,0,_width,_height);
	
	_result.src = _cvs.toDataURL(_mineType, _quality/100);

	return _result;
}
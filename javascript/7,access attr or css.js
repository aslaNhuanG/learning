
jQuery.extend({
	/**
		该函数为jquery.attr, jquery.prop, jquery.css的基础函数
	*/
	access:function  (elems, key, value, exec, fn, pass) {
		var length = elems.length;

		// Setting many attributes
		// 如果传入的是对象，则对对象各个属性做遍历设置
		if(typeof key === "object"){
			for(var i in key){
				jQuery.access( elems, key, key[i], true, fn, value);
			}
			return elems;
		}

		// Setting one attribute
		// 如果value设置了，则认为是对单个属性设置
		if(value !== undefined){
			// 判断pass是否传入了可执行函数
			exec = !pass && exec && jQuery.isFunction(fn);

			// 遍历elems
			for(var i;i<length;i++){
				var _val = "";
				if(exec){
					// 如果为执行函数，则求出值，例如，fn为jQuery.attr
					var _v = fn(elems[i], key);	
					// 此时value为可执行的回调函数,如$.css("id", function(){ return "qq" })
					_val = value.call(elems[i], i, _v)
				}else{
					_val = value;
				}
				// 设置值
				fn(elems[i], key, _val, pass);
			}
			return elems;
		}	

		// 取第一个属性值作为返回值
		return length ? fn(elems[0], key) : undefined;
	},

	// usage 用法

	//attr
	attr: function(key, value){
		return jQuery.access(this, key, value, true, jQuery.attr);
	},

	prop: function(key, value){
		return jQuery.access(this, key, value, true, jQuery.prop);
	},

	css: function(key, value){
		return jQuery.access(this, key, value, true, function(elem, key, value){
			return value !== undefined?
					jQuery.style(elem, name, value):
					jQuery.css(elem, value);
		})

	}
})


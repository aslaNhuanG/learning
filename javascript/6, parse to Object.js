function parseToObject(data){
	// JSON RegExp 详细查看RegExp解释
	var rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;

	if(typeof(data) !== "string"|| !data){
		return null;
	}
	data = data.trim();
	if(window.JSON && window.JSON.parse){
		return window.JSON.parse(data);
	}
	if(rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, ""))){
		return (new Function("return " + data))();	
	}
	console.log("invalid JSON" + data);	
}

function parseToXML(data){
	if(typeof data !== "string" || !data){
		return null;
	}

	val xml, tmp;

	try{
		if(window.DOMParser){
			tmp = new DOMParser();
			xml = xml.parseFormString(data, "text/xml");
		}else{
			tmp = new ActiveXObject("Microsoft.XMLDOM");
			xml.async = "false";
			xml.loadXML(data);
		}
	}catch(e){
		xml = undefined;
	}
	if(!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length){
		 console.log("invalide xml: "+data);
	}
	return xml;	
}
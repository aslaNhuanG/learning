function parseToObj(data){
	return (new Function("return " + data))();
}
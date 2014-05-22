var Bulllog = function bullog(opts) {
  /* creating a buffer to hold the styles passed as options */
	this.styleBuffer = [];
	/* next we iterate over the styles to fing the property: value; pairs */
	for(key in opts) {
		this.styleBuffer.push(key + ':' + opts[key] + ';');
	};
	/* 
	because we get an array like ["prop: value", "prop: value"] we
	then convert our array to a string  
  */
  var tmpStyle = this.styleBuffer.toString();
	/* and finally remove the commata between each property value pair */
	this.style = tmpStyle.replace(/\,/g, '');
}

Bulllog.prototype.msg = function(msg) {
  var msg = "%c" + msg;
  return console.log(msg, this.style);
}

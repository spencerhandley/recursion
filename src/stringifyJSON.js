function stringifyJSON(obj) {
  switch (typeof obj) {
  	case "function":
  		return
  	case "undefined":
  		return
  	case "number": 
  		if(obj != '[object Array]' && !isNaN(obj) && obj !== "" ) {
			  	return obj.toString()
			  }
		case "boolean":
			return obj.toString()
    case 'string':
      return '"' + obj + '"';
    case 'object':
      if (Array.isArray(obj)) {
        return '[' + obj.map(stringifyJSON) + ']';
      } else if (null === obj) {
        return "null";
      } else if(_.isEmpty(obj)) {
  		return "{}"
      } else {
      	var keys = Object.keys(obj),
				total = keys.length;
        return Object.keys(obj).reduce(function (str, key, index) {
        	if(typeof obj[key] == "function"){
        		return ""
        	}
        	if(typeof obj[key] == "undefined"){
        		return "{}"
        	}
          str += '"' + key.toString() + '":';
          str += stringifyJSON(obj[key]);
          console.log(total, index)
          if (index + 1 < total && total > 1) str += ',';
          if(keys.indexOf(key) == total - 1) {
      			return "{" + str + "}"}
          return str;
        }, '');
      }
      break;
    default:
    	console.log(obj)
      return "{" + obj.toString() + "}"
  }
}



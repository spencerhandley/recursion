function stringifyJSON(obj) {
  switch (typeof obj) {
  	case "number": 
  		if(obj != '[object Array]' && !isNaN(obj) && obj !== "" ) {
			  	return obj.toString()
			  }
			break;

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
        return Object.keys(obj).reduce(function (str, key) {
          str += '"' + key.toString() + '":';
          str += stringifyJSON(obj[key]);
          if (total === index) str += ',';
          if(Object.keys(obj).indexOf(key) == Object.keys(obj).length - 1) {
      			return "{" + str + "}"}
          return str;
        }, '');
      }
      break;
    default:
      return "{" + obj.toString() + "}"
  }
}



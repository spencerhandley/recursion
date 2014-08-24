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
// // this is what you would do if you liked things to be easy:
// // var stringifyJSON = JSON.stringify;

// // but you don't so you're going to write it from scratch:

// function stringifyJSON(obj, idx) {
//   var json;
//   console.log(obj)
//   // checks id obj is null
//   if(obj === null) {
//   	console.log("is null")
//   	return "null"
//   } 
//   var objStr = toString.call(obj);
//   // checks if obj is a number
//   if(objStr != '[object Array]' && !isNaN(obj) && obj !== "" ) {
//   	console.log("is number")
//   	return obj.toString()
//   }

// 	// checks if obj is a string
 
// 	if(objStr == '[object String]') {
// 		console.log("is String")
// 		return '"' + obj + '"' 
// 	}

// 	// sets index
// 	idx = idx || 0

//   // Handle arrays
//   if(objStr == '[object Array]') {
//   	console.log("is array")
//     if(idx >= obj.length) {
//       // The code below ensures we'll never go past the end of the array,
//       // so we can assume this is an empty array
//       return "[]"
//     }

//     // stringifyJSON the value at idx
//     json = stringifyJSON( obj[idx] )

//     if(idx < obj.length - 1) {
//       // There are items left in the array, so increment the index and
//       // stringifyJSON the rest
//       json = json + "," + stringifyJSON( obj, idx + 1 )
//     }

//     // If this is the first item in the array, wrap the result in brackets
//     if(idx === 0) { return "[" + json + "]" }

//     return json
//   }

//   // Handle objects
//   if(obj === Object(obj)) {
//   	if(_.isEmpty(obj)) {
//   		console.log("is empty obj")
//   		return "{}"
//   	}
//   	console.log("is object")
//   	console.log("keys", Object.keys(obj))
//     var keys = Object.keys(obj)
//     console.log(keys[idx])
//     var key = keys[idx]

//     // stringifyJSON the key and value
//     json = '"' + key.toString() + '":' + stringifyJSON( obj[key] )
//     console.log(json)

//     if(idx < keys.length - 1) {
//       // There are more keys, so increment the index and stringifyJSON the rest
//       return json + "," + stringifyJSON( obj, idx + 1 )
//     }
//         console.log(keys.length, idx)

//     if(idx === keys.length - 1 && idx != 0 && keys.length -1 >= 1 ) {
//     	console.log("{" + json +"}")
//  			return "{" + json +"}"
//     }

//     // If this is the first key, wrap the result in curly braces
//     if(idx === 0) { return "{" + json + "}" }

//     return json
// //   }

//   return   obj.toString() // Naively handle everything else
// }


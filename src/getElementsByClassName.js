// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, pass){
  var holder = (pass || document),
    children = holder.childNodes,
    results = [],
    classes = [];
  for(var i = 0; i<children.length ; i++){    
    if(children[i].className && children[i].className !== '') {
      classes = children[i].className.split(' ');
      classes.forEach(function(singleClass){
        if(singleClass === className) {
          results.push(children[i]);
        }
      });
    }
    results = results.concat(getElementsByClassName.call(this, className, children[i]));
  }

  return results;
};

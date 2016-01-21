// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(element, className) {
  //initalize a filtered array to return
  var filtered = [];
  //Create an object to iterate through
  var classList = element.classList();
  //Gather all items within the element
  for(var i = 0 ; i < classList.length ; i++){
  	//if the className is found in the classList
  	//add push that class to filtered.
  	if(className in classList){
  		filtered.push(classList[i])
  	}
  }
  //Check to see if element has Children
  if( element.childNodes() ) {
  	//creat reference variable for the children of the element
  	var children = element.childNodes();
  	//iterate over children object and search for children with matching className
  	for(var child in children){
  		filtered.concat(getElementsByClassName(children[child], className))
  	}
  }

  //return results
  return filtered;
};

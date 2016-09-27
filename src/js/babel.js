var arr=[1,2,3];
function print () {
	for(var i in arguments){
	  console.log(i);
	}
}
print(...arr);
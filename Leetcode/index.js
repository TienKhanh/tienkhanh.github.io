// function compressArray(original) {
 
// 	var compressed = [];
// 	// make a copy of the input array
// 	var copy = original.slice(0);
 
// 	// first loop goes over every element
// 	for (var i = 0; i < original.length; i++) {
 
// 		var myCount = 0;	
// 		// loop over every element in the copy and see if it's the same
// 		for (var w = 0; w < copy.length; w++) {
// 			if (original[i] == copy[w]) {
// 				// increase amount of times duplicate is found
// 				myCount++;
// 				// sets item to undefined
// 				delete copy[w];
//                 console.log(copy)
// 			}
// 		}
 
// 		if (myCount > 0) {
// 			var a = new Object();
// 			a.value = original[i];
// 			a.count = myCount;
// 			compressed.push(a);
// 		}
// 	}
 
// 	return compressed;
// };

// // It should go something like this:

// var testArray = new Array("dog", "dog", "cat", "buffalo", "wolf", "cat", "tiger", "cat");
// var newArray = compressArray(testArray);

// console.log(newArray)

var nums = [2,2,1,4,1,5]

var target = 5;

for(let i = 0; i < nums.length; i++){
    var searchNum = target - nums[i];
    if(nums.includes(searchNum)){
        
    }
}

// var single_number = []

// for(let i = 0; i< nums.length; i++){
//     if(!single_number.includes(nums[i])){
//         single_number.push(nums[i])
//     }else{
//         single_number = single_number.filter (e => e !== nums[i])
//     }
// }
// console.log(single_number)

// var copy = nums.splice(0)
// for(let i = 0; i< nums.length; i++){
//     var count = 0;
//     for(let w = 0; w<copy.length;w++){
//         if(nums[i] == copy[w]){
//             count++;
//             // delete copy[w]
//         }
//     }
//     if(count == 1){
//         return nums[i]
//     }
// }
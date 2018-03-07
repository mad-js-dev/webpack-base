'use strict';
//import data from './scripts/data.json';

//import QuickSort from './scripts/quicksort';
import CountingSort from './scripts/counting-sort';

var arr = [
	{apdex: 3},
	{apdex: 2},
	{apdex: 6},
	{apdex: 4},
	{apdex: 1},
	{apdex: 5}
];
//[3,7,8,4,3,5]
let sortedData = new CountingSort(arr);

console.log(sortedData)

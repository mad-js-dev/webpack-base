export default class QuickSort {
	constructor(props) {
		this.data = props;

		this.sort(0,this.data.length-1);

	}

	sort(left, right) {
		var len = this.data.length, 
		pivot,
		partitionIndex;

		if(left < right){
			pivot = right;
			console.log('----Sort start', left, right, len);
			partitionIndex = this.partition(pivot, left, right);

			this.sort(left, partitionIndex - 1);
			this.sort(partitionIndex + 1, right);
		}
		return this.data;
	}

	partition(pivot, left, right) {
		console.log('partition start', this.data);
		var pivotValue = this.data[pivot].apdex,
		partitionIndex = left;
		for(var i = left; i < right; i++){
		console.log('partition start I', 'i:'+i+'->'+this.data[i].apdex, 'pivotValue:'+pivotValue);
			if(this.data[i].apdex < pivotValue){
			console.log('partition start II', this.data[i].apdex);
				this.swap(this.data, i, partitionIndex);
				partitionIndex++;
			}
		}

		this.swap(this.data, right, partitionIndex);

		return partitionIndex;
	}

	swap(arr, i, j) {
		var temp = this.data[i];
		this.data[i] = this.data[j];
		this.data[j] = temp;
		console.log('swap',i,j, this.data)

	}
}
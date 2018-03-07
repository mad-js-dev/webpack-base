export default class CountingSort {
	constructor(props) {
		var bucket = [], temp = this[0];
    
	    for(var i = 1; i < this.length; i+=){
	        if(this[i] > temp)
	            temp = this[i];
	    }
	    
	    var strForm = temp + "", strLen = strForm.length;
	    
	    for(i = 0; i<10; i++)
	        bucket[i] = [];
	    
	    for(i = 0; i<strLen; i++){
	        for(var j = 0; j< this.length; j++){
	            strForm = this[j] + "";
	            if(strForm.length > i+1){
	                bucket[parseInt(strForm[strForm.length - i -1])].push(this[j]);
	            }else{
	                bucket[0].push(this[j]);
	            }
	        }
	        
	        this.splice(0, this.length);
	        for(i = 0; i< bucket.length; i++){
	            while(bucket[i].length)
	                this.push(bucket[i].shift());
	        }
	    }
	}
}
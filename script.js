function palindrome(str){
	
// Step 1. The first part is the same as earlier
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
	
	 // Step 2. Create the FOR loop
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}
module.exports = palindrome

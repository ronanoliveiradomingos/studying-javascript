String.prototype.isPalindrome = function () {
    console.log(this);
    console.log(this.split(""));
    console.log(this.split("").reverse().join(''));
    const reverse = this.split("").reverse().join('');
    console.log(reverse == this);
};

"ABCD".isPalindrome();
"OVO".isPalindrome();
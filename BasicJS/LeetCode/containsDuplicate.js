function containsDuplicate (nums) {
    const  seen = new  Set();

    for(const num of  nums){
        if(seen.has(num)) // if the data is already  available in the set  
        {
            return true;
        }
        seen.add(num)
    }
    return false;
};


console.log(containsDuplicate([1,2,3]));
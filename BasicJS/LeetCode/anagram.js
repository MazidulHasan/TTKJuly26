function anagram(s,t){
    if (s.lenght !==  t.lenght) {
        return false;
    }

    const chars  =   new Set(s);

    for (const char of chars) {
        if (! t.includes(char)) {
            return false;
        }
    }

    return true;
}

console.log(anagram("aab", "abb")); // false
console.log(anagram("listen", "silent")); // true

// show palindrom code
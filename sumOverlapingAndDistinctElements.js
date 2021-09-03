const sumOverlappingElements=(set1, set2) =>{
    let sum=0
    for (let i = 0; i < set1.length; i++) {
        
        if (set2.includes(set1[i])) {
            // console.log(set1[i]);
            sum+= set1[i]
        }
        
    }
    return sum*2
}
console.log(sumOverlappingElements([12, 13, 6, 10], [13, 10, 16, 15]));

const sumDistinctElements=(set1, set2) =>{
    let sum=0;
    set1.map(s1 => {
        if(!set2.includes(s1)) sum+= s1
    })
    set2.map(s2 => {
        if(!set1.includes(s2)) sum+= s2
    })
    return sum
}
console.log(sumDistinctElements([3, 1, 7, 9], [2, 4, 1, 9, 3]));

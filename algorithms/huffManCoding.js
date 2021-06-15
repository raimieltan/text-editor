// function frequency(str){
//     let freqs = {};
//     for (let i = 0; i<=str.length - 1;i++){
//         if (str[i] in freqs){
//             freqs[str[i]] ++;
//         }
//         else{
//             freqs[str[i]] = 1;
//         }
//     }

//     return freqs    
// }


// function sortfreq(freqs){
//     let letters = [];
//     for (let ch in freqs){
//         letters.push([freqs[ch],ch]);
//     }
//     return letters.sort();

// }

// let freq = frequency('aaaaabbbbcccdde')



// function buildtree(letters){
//     while(letters.length>1){
//         let leasttwo = letters.slice(0,2);
//         let therest = letters.slice(2,letters.length);
//         let combfreq = letters[0][0] + letters[1][0];
//         letters = therest;
//         //console.log(letters);
//         let two = [combfreq,leasttwo];
//         letters.push(two);
//         //console.log(letters);
//         letters.sort();
// }
//     return letters[0];
// }

// let tree = buildtree(sortfreq(freq))

// function trimtree(tree)
// {
//     let p = tree[1];
//     if (typeof p === 'string'){
//         return p;
// }
//     else
// {
//         return (Array(trimtree(p[0]),trimtree(p[1])));
// }
// }

// let codes = {}; 
// function assigncodes(node,pat){
//     pat = pat || "";
//     if(typeof(node) == typeof("")){
//         codes[node] = pat;
//     }
//     else{
//         assigncodes(node[0],pat+"0");
//         assigncodes(node[1],pat+"1");
//     }
//     return codes;
// }

// let node = (trimtree(tree))

// let coded = (assigncodes(node))

// function encode(str){
//     let output = "";
//     for (let i=0;i<str.length;i++){
//         output = output+codes[str[i]];
//     }
//     return output;
// }

// return  output = (encode('aaaaabbbbcccdde'))



// console.log(decode(node,output ))

const compression = (str) => {

    function frequency(str) {
        let freqs = {};
        for (let i = 0; i <= str.length - 1; i++) {
            if (str[i] in freqs) {
                freqs[str[i]]++;
            }
            else {
                freqs[str[i]] = 1;
            }
        }

        return freqs
    }


    function sortfreq(freqs) {
        let letters = [];
        for (let ch in freqs) {
            letters.push([freqs[ch], ch]);
        }
        return letters.sort();

    }

    let freq = frequency(str)



    function buildtree(letters) {
        while (letters.length > 1) {
            let leasttwo = letters.slice(0, 2);
            let therest = letters.slice(2, letters.length);
            let combfreq = letters[0][0] + letters[1][0];
            letters = therest;
            //console.log(letters);
            let two = [combfreq, leasttwo];
            letters.push(two);
            //console.log(letters);
            letters.sort();
        }
        return letters[0];
    }

    let tree = buildtree(sortfreq(freq))

    function trimtree(tree) {
        let p = tree[1];
        if (typeof p === 'string') {
            return p;
        }
        else {
            return (Array(trimtree(p[0]), trimtree(p[1])));
        }
    }

    let codes = {};
    function assigncodes(node, pat) {
        pat = pat || "";
        if (typeof (node) == typeof ("")) {
            codes[node] = pat;
        }
        else {
            assigncodes(node[0], pat + "0");
            assigncodes(node[1], pat + "1");
        }
        return codes;
    }

    let node = (trimtree(tree))
    console.log(node)

    assigncodes(node)
    console.log(codes)

    function encode(str) {
        let output = "";
        for (let i = 0; i < str.length; i++) {
            output = output + codes[str[i]];
        }
        return output;
    }

    const output = (encode(str))

    return { output: output, tree: node }

}




function decode(tree, str) {
    let output = "";
    let p = tree;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '0') {
            p = p[0];
        }
        else {
            p = p[1];
        }
        if (typeof p === 'string') {
            output = output + p;
            p = tree;
        }
    }
    return output;
}

console.log(compression('hello'))

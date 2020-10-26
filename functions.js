/**
 * @param {string} string
 * @param {number} limit
 * @return {string}
 */
const removeRepeted = (string, limit) =>{
    var a = string.charAt(0);
    var aux = 1;
    var res = a;
    for(i = 1; i< string.length;i++){
        if(a == string.charAt(i) && aux <= limit-1){
            res += string.charAt(i);
            aux++;
        }else{
            if(a != string.charAt(i)) {
                res += string.charAt(i);
                aux = 1;
                a = string.charAt(i);
            }
        }
    }
    return res;
}

/**
 * @param {string} string
 * @param {number} times
 * @return {string}
 */
const replaceChar = (string, times) => {
    var res = "";
    for (i =0;i<string.length;i++) {
        if (string.charAt(i) == '?') {
            for(j=0;j<times;j++){
                res+=string.charAt(i-1);
            }
        }else{
            res+=string.charAt(i);
        }
    }
    return res;
}
/**
 * @param {string} string1
 * @param {string} string2
 * @return {number}
 */
const lettersSum = (string1, string2) => {
    var BigS1 = getBg(string1);
    var BigS2 = getBg(string2);
    var LittS1 = getLt(string1);
    var LittS2 = getLt(string2);
    return (Number((trasform(BigS1))*Number(trasform(LittS2)))+(Number(trasform(BigS2))*Number(trasform(LittS1))));
}
/**
 * @param {string}character
 * @return {number}
 */
function trasform(character){
    switch (character){
        case 'a' : return 1
        case 'b' : return 2
        case 'c' : return 3
        case 'd' : return 4
        case 'e' : return 5
        case 'f' : return 6
        case 'g' : return 7
        case 'h' : return 8
        case 'i' : return 9
        case 'j' : return 10
        case 'k' : return 11
        case 'l' : return 12
        case 'm' : return 13
        case 'n' : return 14
        case 'o' : return 15
        case 'p' : return 16
        case 'q' : return 17
        case 'r' : return 18
        case 's' : return 19
        case 't' : return 20
        case 'u' : return 21
        case 'v' : return 22
        case 'w' : return 23
        case 'x' : return 24
        case 'y' : return 25
        case 'z' : return 26
    }
}
/**
 * @param {string}string
 * @return {number}
 */
function getBg(string){
    //pegar o maior valor de letra
    let aux = trasform(string.charAt(0));
    let resp = string.charAt(0);
    for(i=1;i<string.length;i++){
        if(trasform(string.charAt(i))>aux){
            resp = string.charAt(i);
            aux = trasform(string.charAt(i));
        }
    }
    return resp;
}
/**
 * @param {string}string
 * @return {number}
 */
function getLt(string){
    //pegar o menor valor de letra
    let aux = trasform(string.charAt(0));
    let resp = string.charAt(0);
    for(i=1;i<string.length;i++){
        if(trasform(string.charAt(i))<aux){
            resp = string.charAt(i);
            aux = trasform(string.charAt(i));
        }
    }
    return resp;
}

console.log(removeRepeted("xxxyyzcccczsss", 2));
console.log(replaceChar("xz?yas?xxa?",3));
console.log(lettersSum("skdjfb","aosid"))
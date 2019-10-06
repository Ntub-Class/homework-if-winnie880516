// 請介紹兩個字串方法跟數字方法

//conact:將指定字串連接到此字串的結尾。
var str1 = '我'; //宣告變數1
var str2 = '想'; //宣告變數2
var str3 = '睡'; //宣告變數3
var str4 = '覺'; //宣告變數4
console.log(str1.concat('', str2,str3,str4)); //從變數1連接至變數4
console.log(str4.concat('', str3,str2,str1));//從變數4連接至變數1



//includes:判斷是否能找出指定的字串
let string="Merry Christmas and Happy New Year";
console.log(string.includes("Merry")); //當找到此字串true
console.log(string.includes("new"));   //未找到false



//min 找出數字中最小數值
console.log(Math.min(100, 50, 0));

//max 找出數字中最大數值
console.log(Math.max(100, 50, 0));


// 錢錢大於一個值，叫乾爹，限制值以上叫土豪，否則是窮逼
let money = 2000;
let limit = 500000; // 限制值
if(money >= 40000){
    console.log('乾爹');
}else if(money>=500000){ 
    console.log('你是土豪');    // 條件2成立時跑這裡   
}else{
    console.log('死窮逼');
}

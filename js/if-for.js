'use strict'

// let i = 1;

// if(i = 1){
//     console.log("真です。");
// }

// ＝＝の場合、左辺と右辺の値が同じ　7==7(true)
// ＝＝＝の場合、左辺と右辺の値と方が等しい　'7'===7(false)

// let testscore = 80;

// if(testscore >= 80){
//     document.write("合格です!おめでとうございます。");
// }　else if(testscore >= 70){
//     document.write("惜しい！あと少し！");
// } else{
//     document.write("不合格です！もう少し勉強しましょう！");
// }

// const namelist = ["田中","山田","林"];

// // console.log(namelist[0])
// // console.log(namelist[1])
// // console.log(namelist[2])

// for (let i = 0; i < namelist.length; i++){
//     console.log(namelist[i]);
// }


// const namelist = ["田中","山田","林","佐藤"];

// 下記のループ分を次のように表示しなさい
// １．田中
// ２．山田
// ３．林
// ４．佐藤

// for (let i = 0; i < namelist.length; i++){
//     console.log(`${i + 1}.${namelist[i]}`);
// }
// ＊ヒント；iの値を利用する

// // コンティニュー文
// for(let i = 0; i < 10; i++){
//     if (i % 2 === 0) continue;
//     console.log(i);
// }
// ＊使用例：部署が営業部の時だけcontinue

// // ブレイク文
// for(let i = 1; i < 1000; i++){
//     if(i > 10) break;
//     console.log(i);
// }
// ＊使用例：生年月日が1990年以前からbreak

// function scoreCheak(){
//     let testscore = document.getElementById('score').value
//     if(testscore >= 80){
//         document.write("合格です!おめでとうございます。");
//     }　else if(testscore >= 70){
//         document.write("惜しい！あと少し！");
//     } else{
//         document.write("不合格です！もう少し勉強しましょう！");
//     }
// }

// データベースを呼び出す処理を関数という。
// プログラミングでは自分で関数を作ることができる。
// excel等の関数は元々ソフトに入っているもの

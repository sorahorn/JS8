const pullDownList = document.getElementById('pull-down');


const listsButton = document.getElementById('pullDownButton');

listsButton.addEventListener('click', function() {


    if (pullDownList.getAttribute('style') === "display:block;") {

        pullDownList.removeAttribute('style');
        console.log("ドロップダウンリストを非表示にしました");
    } else {
  
        pullDownList.setAttribute('style', 'display:block;');
        console.log("ドロップダウンリストを表示しました");
    }

    this.setAttribute('style', 'background-color: green;');
    console.log("プルダウンボタンがクリックされました（緑色に変更）");
});
listsButton.addEventListener('mouseover', function() {
    this.setAttribute('style', 'background-color: blue;');
    console.log("プルダウンボタンの上にカーソルが乗りました（青色に変更）");
});

listsButton.addEventListener('mouseout', function() {
    this.removeAttribute('style');
    console.log("プルダウンボタンからカーソルが外れました（スタイル削除で元に戻す）");
});
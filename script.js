
function pullDown() {
    const pullDownList = document.getElementById('pull-down');
    const listsButton = document.getElementById('pullDownButton');
    const pullDownChild = document.querySelectorAll('.pull-down-list');
    const currentList = document.getElementById('current-list');     

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
        console.log("マウスがボタンの上に乗りました（青色に変更）"); 
    });
    listsButton.addEventListener('mouseout', function() {
        this.removeAttribute('style');
        console.log("マウスがボタンから外れました（スタイル削除で元に戻す）"); 
    });

    pullDownChild.forEach(function(list) {
        list.addEventListener('click', function() {

            const value = list.innerHTML;  
            console.log(value); 

            if (value === 'リスト1') {
                window.location.href = 'https://www.google.com/';
                console.log("リスト1がクリックされました。Googleに遷移します。"); 
                        }
            else {
                currentList.innerHTML = value;   
                pullDownList.removeAttribute('style'); 
            }
        });
    })
}

window.addEventListener('load', pullDown);
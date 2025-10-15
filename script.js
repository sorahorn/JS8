
const listsButton = document.getElementById("lists");


const pullDownList = document.getElementById("pull-down");


listsButton.addEventListener("click", function() {

    pullDownList.classList.toggle("hidden");


    if (pullDownList.classList.contains("hidden")) {
        console.log("ドロップダウンリストを非表示にしました (hiddenクラスが追加されました)");
    } else {
        console.log("ドロップダウンリストを表示しました (hiddenクラスが削除されました)");
    }

});

const pullDownList = document.getElementById('pull-down');


const listsButton = document.getElementById('pullDownButton');

listsButton.addEventListener('click', function() {
  pullDownList.classList.toggle("hidden");

  if (pullDownList.classList.contains("hidden")) {
    console.log("ドロップダウンリストを非表示にしました (hiddenクラスが追加されました)");
  } else {
    console.log("ドロップダウンリストを表示しました (hiddenクラスが削除されました)");
  }
});


listsButton.addEventListener('mouseover', function() {
  listsButton.setAttribute('style', 'background-color: blue;');
  console.log("プルダウンボタンの上にカーソルが乗りました（青色に変更）");
});


listsButton.addEventListener('mouseout', function() {
  listsButton.removeAttribute('style');
  console.log("プルダウンボタンからカーソルが外れました（スタイルを削除して元に戻す）");
});


listsButton.addEventListener('click', function() {
  listsButton.setAttribute('style', 'background-color: green;');
  console.log("プルダウンボタンがクリックされました（緑色に変更）");
});

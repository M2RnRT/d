const fireworks = document.querySelector('.fireworks');

function fireworkLaunch(event) {
  const firworkType = Math.floor(Math.random() * 6) + 1;
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.classList.add(`firework__${firworkType}`);
  firework.style.left = `${event.x}px`;
  firework.style.top = `${event.y}px`;
  fireworks.appendChild(firework);
  setTimeout(() => {
    firework.remove();
  }, 8000);
}

fireworks.addEventListener("click", fireworkLaunch);
fireworks.addEventListener("touch", fireworkLaunch);

// document.querySelector('.details-button').addEventListener('click', function() {
//     var detailsContent = document.getElementById('detailsContent');
//     var detailsButton = document.querySelector('.details-button');
    
//     if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
//         detailsContent.style.display = "block";
//         detailsContent.style.transform = "scale(1)";
//         detailsButton.textContent = "Close";
//     } else {
//         detailsContent.style.display = "none";
//         detailsContent.style.transform = "scale(0)";
//         detailsButton.textContent = "Show Details";
//     }
// });
document.querySelector('.details-button').addEventListener('click', function() {
    var detailsContent = document.getElementById('detailsContent');
    var detailsButton = document.querySelector('.details-button');
    
    if (detailsContent.style.display === "none" || detailsContent.style.display === "") {
        detailsContent.style.display = "block";
        setTimeout(function() {
            detailsContent.style.transform = "scale(1)";
            detailsButton.style.marginTop = "2vmin"; // ボタンの位置を少し下に移動
        }, 50);
        detailsButton.textContent = "✖︎";
    } else {
        detailsContent.style.transform = "scale(0)";
        detailsButton.style.marginTop = "0"; // ボタンの位置を元に戻す
        setTimeout(function() {
            detailsContent.style.display = "none";
        }, 500);
        detailsButton.textContent = "⚪︎";
    }
});

// 人物の写真がクリックされたときに実行する関数
function rotateImage() {
    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  }
  
  // イベントリスナーを設定
  document.querySelector('.person-image').addEventListener('click', rotateImage);
  

// // 人物の写真がクリックされたときに実行する関数
// function rotateImage() {
//     var image = document.querySelector('.person-image img');
//     var text = document.querySelector('.rotate-text');
//     image.classList.toggle('rotate');
//     text.classList.toggle('show');
//   }
  
//   // ボタンがクリックされたときに実行する関数
//   function toggleDetails() {
//     var content = document.querySelector('.details-content');
//     content.style.display = content.style.display === 'none' ? 'block' : 'none';
//     content.classList.toggle('open');
//   }
  
//   // イベントリスナーを設定
//   document.querySelector('.person-image').addEventListener('click', rotateImage);
//   document.querySelector('.details-button').addEventListener('click', toggleDetails);  



// 等待 HTML 頁面完全載入
document.addEventListener('DOMContentLoaded', () => {

    console.log("頁面載入完成，可以開始設定按鈕功能。");

    // 找到棄牌按鈕並加上點擊事件
    const foldBtn = document.getElementById('fold-btn');
    if (foldBtn) {
        foldBtn.addEventListener('click', () => {
            console.log("點擊了【棄牌】按鈕");
            // 實際遊戲中，這裡會發送訊息給伺服器
            alert("你點了 棄牌 (這只是個提示)");
        });
    }

    // 找到看牌/過牌按鈕並加上點擊事件
    const checkBtn = document.getElementById('check-btn');
    if (checkBtn) {
        checkBtn.addEventListener('click', () => {
            console.log("點擊了【看牌/過牌】按鈕");
            alert("你點了 看牌/過牌 (這只是個提示)");
        });
    }

    // 找到跟注按鈕並加上點擊事件
    const callBtn = document.getElementById('call-btn');
    if (callBtn) {
        callBtn.addEventListener('click', () => {
            console.log("點擊了【跟注】按鈕");
            alert("你點了 跟注 (這只是個提示)");
        });
    }

    // 找到所有的加注按鈕
    const raiseBtns = document.querySelectorAll('.raise-btn');
    raiseBtns.forEach(button => {
        button.addEventListener('click', () => {
            const amount = button.dataset.amount; // 獲取按鈕上設定的金額或 'allin'
            if (amount === 'allin') {
                console.log("點擊了【梭哈】按鈕");
                alert("你點了 梭哈 (這只是個提示)");
            } else {
                console.log(`點擊了【加注 ${amount}】按鈕`);
                alert(`你點了 加注 ${amount} (這只是個提示)`);
            }
            // 實際遊戲中，這裡會發送包含金額的訊息給伺服器
        });
    });

    // 給當前玩家加上醒目提示 (僅為示範)
    const player1 = document.getElementById('player-1');
    if (player1) {
        player1.classList.add('active');
    }

});

// 如何打開瀏覽器控制台？
// 在 Chrome/Edge/Firefox 中，通常按 F12 鍵，然後選擇 "Console" 或 "控制台" 標籤。
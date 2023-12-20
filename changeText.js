function changeText() {
    var mainText = document.getElementById('main-text');
    var secondaryText = document.getElementById('secondary-text');
var thirdText=document.getElementById('third-text');
    // 현재 표시된 텍스트를 숨기고 반대의 텍스트를 표시
    if (mainText.style.display === '' || mainText.style.display === 'block') {
        mainText.style.display = 'none';
        secondaryText.style.display = 'block';
        thirdText.style.display = 'none';
    } else if (secondaryText.style.display === 'block') {
        mainText.style.display = 'none';
        secondaryText.style.display = 'none';
        thirdText.style.display = 'block';
    } else {
        mainText.style.display = 'block';
        secondaryText.style.display = 'none';
        thirdText.style.display = 'none';
    }
}

// 텍스트를 일정 시간 간격으로 변경
setInterval(changeText, 5000); // 5000 밀리초(5초)마다 변경

var apiKey = '여기에_발급받은_키_입력';

// Open API 호출 URL
var openApiUrl = 'https://musclewiki.com/api/v1/exercise/';

// 클릭된 부위의 API 엔드포인트
var apiEndpoints = {
  'shoulders': 'male/shoulders',
  'chest': 'male/chest',
  'abdominals': 'male/abdominals',
  // ... (다른 부위들 추가)
};

// 이미지 클릭 이벤트 핸들러
$('map[name="이미지맵"]').on('click', 'area', function() {
  var bodyPart = $(this).attr('href').substring(openApiUrl.length); // 클릭된 부위의 API 엔드포인트 추출

  // API 호출
  $.ajax({
    url: openApiUrl + apiEndpoints[bodyPart],
    method: 'GET',
    dataType: 'json',
    headers: {
      'Authorization': 'Bearer ' + apiKey
    },
    success: function(data) {
      // API 호출 성공 시 처리
      console.log('API 호출 성공',data);
      // 예시: 결과를 어딘가에 표시 (예: alert 창)
      alert('운동 정보: ' + JSON.stringify(data));
    },
    error: function(error) {
      // API 호출 실패 시 처리
      console.error('API 호출 에러:', error);
    }
  });
});
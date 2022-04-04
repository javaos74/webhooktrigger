$(document).ready(function () {
    // 자바스크립트 코드 작성
});
        
function send_trigger( screen_code) {
    $.support.cors = true;
    $.ajax({
        url: "http://localhost:8080",
        type: "post",
        crossdomain: true,
        accept: "application/json",
        contentType: "application/json; charset=utf-8",
        data: {screen_cd: screen_code},
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
        },
        error: function(jqXHR,textStatus,errorThrown) {
            alert( message);
        }
    });
}
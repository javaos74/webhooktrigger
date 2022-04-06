//const { stringify } = require("jade/lib/utils");

$(document).ready(function () {
    // 자바스크립트 코드 작성
});
        
function send_trigger( prcname) {
    $.support.cors = true;
    $.ajax({
        url: "http://localhost:8000/trigger",
        type: "post",
        crossdomain: true,
        accept: "application/json",
        data: JSON.stringify({task_name: prcname}),
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function(jqXHR,textStatus,errorThrown) {
            alert( textStatus);
        }
    });
}
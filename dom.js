//間違ったコード


function setData(results,listId) {
    // ヘッダー
       QuestionData.order('createDate',true) // 保存日時降順
                   .fetchAll()
                   .then(function(results){
                       var dom = "<div id=inputTitle>" + " 結果：" + results.length + "件</li>";
                        console.log('全件検索成功：' + results.length + '件');
                        for (var i = 0; i < results.length; i++) {
                        var object = results[i];
                        document.getElementById("test2").innerHTML =(object.title + " - " + object.get("inputContents"));
                        }
                        for (var i = 0; i < results.length; i++) {
                            var object   = results[i];
                            var title = object.get("inputTitle");
                            var comment = object.get("inputContents");
                            var userName = object.get("userName");
                            //ぽいんたーで取ってきたら二重で取得する必要がある
                            var createDate = object.get("createDate");
                            dom = dom + "<li class='list-item list-item--material' style='text-align: left;' onClick='ons.notification.alert(\"" + comment + "\");'>";
                            dom = dom + "<div class='list-item__center list-item--material__center'>";
                            dom = dom + "<div class='list-item__title list-item--material__title'>" + title + "</div>";
                            dom = dom + "<br>" + userName;
                            dom = dom + "</div></div></li>";
                        }
                        //(listId).append(dom);
                     })
}

//正しいコード

function setData(data, modal) {
    var dom = '<ons-list-header>'+ data.length +'件</ons-list-header>';
    for (var i=0; i<data.length; i++) {
        var question   = data[i];
        var id = question.get("objectId");
        var title = question.get("title");
        var user = question.get("userName")
        var userName = user.userName;
        var createDate = question.get("createDate");

        var dateString = makeDate(createDate);

        dom = dom + '<ons-list-item id ="'+ id +'" modifier="longdivider" onclick="toDetailPage(this)" tappable><div class="center">'
                + '<span class="list-item__title">'
                + title 
                + '</span><span class="list-item__subtitle">'
                + '投稿日: ' + dateString
                + '　投稿者: ' + userName
                + '</span></div></ons-list-item>';
    }
    document.getElementById("questionList").innerHTML = dom;
    modal.hide();
}

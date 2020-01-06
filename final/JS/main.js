var count = 0;

$("button").click(function() {
    var people = $("#1").val();
    var iss = $("#2").val();
    count = count + 1
    if (count % 4 == 1) {
        var ask = "<p>" + people + ":那具體上要什麼嘛？</p>"
        var reply = "<p>韓總機：報告" + people + "，當然是高雄要什麼！</p>"
    }
    if (count % 4 == 2) {
        var ask = "<p>" + people + ":要什麼</p>"
        var reply = "<p>韓總機：報告" + people + "，高雄要" + iss + "嘛！對不對？</p>"
    }
    if (count % 4 == 3) {
        var ask = "<p>" + people + ":天吶，市長！我們都要" + iss + "，但是具體上你要開放什麼東西，什麼項目？或者說現在有什麼限制， 你要現在告訴我呀， 我們想知道的是這個， 不是說高雄要" + iss + "這麼簡單， 就可以呼攏過去了</p>"
        var reply = "<p>韓總機：" + people + "，" + people + "，總目標是高雄要" + iss + "！</p>"
    }
    if (count % 4 == 0) {
        var ask = "<p>" + people + ": 這個都是我們共同的目標。</p>"
        var reply = "<p>韓總機：很多事情，我們所做的一切，都是希望往高雄" + iss + "的目標</p>"
    }
    $("body").append(ask, reply)
});
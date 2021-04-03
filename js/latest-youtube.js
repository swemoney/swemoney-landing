var channelID = "UCI3sBTMRJxIHcU5AaN9Goqg";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id="
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
    var link = data.items[0].link;
    var id = link.substr(link.indexOf("=")+1);
    $("#youtube-iframe").attr("src","https://youtube.com/embed/"+id);
});
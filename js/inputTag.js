function addTagOnList(){
    var tags = document.getElementById("inputTag").value;
    if(tags.includes(',')){
        var list = document.getElementById("listTags");
        var tagToList = tags.replace(',','');
        list.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="like_tag" onclick="deleteLikeTag()">'+tagToList+'</button>';
        document.getElementById("inputTag").value='';
    }
}
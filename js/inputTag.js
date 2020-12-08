
function addTagOnList(){
    var tags = document.getElementById("inputTag").value;
    var list = document.getElementById("listTags");
    if(tags.includes(',') || tags.includes(';')){
        var tagToList = tags.replace(',','').replace(';','');
        if(tagToList!=''){
            list.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="like_tag" onclick="deleteLikeTag()">'+tagToList+'</button>';
            document.getElementById("inputTag").value='';
        }
    }
}
function dislikeTagFromPeople(){
    var tags = document.getElementById("inputTag").value;
    var list = document.getElementById("listTags");
    if(tags.includes(',') || tags.includes(';')){
        var tagToList = tags.replace(',','').replace(';','');
        if(tagToList!=''){
            list.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="like_tag" onclick="deleteLikeTag()">'+tagToList+'</button>';
            document.getElementById("inputTag").value='';
        }
    }
}

function show_input_tag()
{
    document.getElementById("tags").style.visibility = "visible";
}
function hidden_input_tag()
{
    document.getElementById("tags").style.visibility = "hidden";
}
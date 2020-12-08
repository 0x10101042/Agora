var tagList = new Array(0);
var tagListListed = new Array(0);

$(document).ready(function() {
    slider = $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        pager:false,
        freeMove:false,
        controls:false,
        enableDrag:false,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });

});


function addTagsLike(){

    var selectedTag = document.getElementById("selectedTag");
    var id = tagList.length+1;
    id = 'Tag' + id;
    selectedTag.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="'+tagList.length+'" onclick="deleteLikedDislikedTag(this.id)">'+id+'</button>';
    tagList[tagList.length] = tagList.length;
    slider.goToNextSlide();
}

function addTagsDislike(){
    var selectedTag = document.getElementById("selectedTag");
    var id = tagList.length+1;
    id = 'Tag' + id;
    selectedTag.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="'+tagList.length+'" onclick="deleteLikedDislikedTag(this.id)">'+id+'</button>';
    tagList[tagList.length] = tagList.length;
    slider.goToNextSlide();
}
function deleteLikedDislikedTag(clickedId){
    var tagRemove = document.getElementById(clickedId);
    tagRemove.remove();
    tagList.splice(clickedId, 1);
    slider.goToPrevSlide();
}

function nextTag(){
    var selectedTag = document.getElementById("selectedTag");
    var id = tagList.length+1;
    id = 'Tag' + id;
    selectedTag.innerHTML += '<button type="button" class="btn btn-secondary" style="margin: 10px" id="'+tagList.length+'" onclick="deleteLikedDislikedTag(this.id)">'+id+'</button>';
    tagList[tagList.length] = 0;
    slider.goToNextSlide();
}

function addTagsLikeListed(){

    var id = tagListListed.length+1;
    id = 'Tag' + id +'Listed';
    selectedTag.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="'+tagListListed.length+'" onclick="deleteLikedDislikedTag(this.id)">'+id+'</button>';
    tagList[tagList.length] = tagList.length;
    slider.goToNextSlide();
}

function addTagsDislikeListed(){
    var id = tagListListed.length+1;
    id = 'Tag' + id +'Listed';
    selectedTag.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="'+tagListListed.length+'" onclick="deleteLikedDislikedTagListed(this.id)">'+id+'</button>';
    tagList[tagList.length] = tagList.length;
    slider.goToNextSlide();
}
function deleteLikedDislikedTagListed(clickedId){
    var tagRemove = document.getElementById(clickedId);
    tagRemove.remove();
    tagListListed.splice(clickedId, 1);
}

function addTagOnListLiked(){
    var tags = document.getElementById("inputLikeTag").value;
    var list = document.getElementById("selectedTag");
    if(tags.includes(',') || tags.includes(';')){
        tags = tags.replace(',','').replace(';','');
        if(tags!=''){
            list.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="'+tags+'" onclick="deleteTagEnter(this.id)">'+tags+'</button>';
            document.getElementById("inputTag").value='';
        }
    }
}
function deleteTagEnter(clickedId){
    var tagRemove = document.getElementById(clickedId);
    tagRemove.remove();
}

function addTagOnListDisliked(){
    var tags = document.getElementById("inputDisikeTag").value;
    var list = document.getElementById("selectedTag");
    if(tags.includes(',') || tags.includes(';')){
        tags = tags.replace(',','').replace(';','');
        if(tags!=''){
            list.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="'+tags+'" onclick="deleteTagEnter(this.id)">'+tags+'</button>';
            document.getElementById("inputTag").value='';
        }
    }
}
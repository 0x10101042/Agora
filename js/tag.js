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

function addTagsLike1(){
    var selectedTag = document.getElementById("selectedTag");
    selectedTag.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="like_tag1" onclick="deleteLikeTag1()">tag1</button>';
    slider.goToNextSlide();
}

function addTagsDislike1(){
    var selectedTag = document.getElementById("selectedTag");
    selectedTag.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="dislike_tag1" onclick="deleteDislikeTag1()">tag1</button>';
    slider.goToNextSlide();
}
function addTagsLike2(){
    var selectedTag = document.getElementById("selectedTag");
    selectedTag.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="like_tag2" onclick="deleteLikeTag2()">tag2</button>';
    slider.goToNextSlide();
}

function addTagsDislike2(){
    var selectedTag = document.getElementById("selectedTag");
    selectedTag.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="dislike_tag2" onclick="deleteDislikeTag2()">tag2</button>';
    slider.goToNextSlide();
}
function addTagsLike3(){
    var selectedTag = document.getElementById("selectedTag");
    selectedTag.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="like_tag3" onclick="deleteLikeTag3()">tag3</button>';
    slider.goToNextSlide();
}

function addTagsDislike3(){
    var selectedTag = document.getElementById("selectedTag");
    selectedTag.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="dislike_tag3" onclick="deleteDislikeTag3()">tag3</button>';
    slider.goToNextSlide();
}
function deleteDislikeTag1(){
    var tagRemove = document.getElementById("dislike_tag1");
    tagRemove.remove();
    slider.goToPrevSlide();
}

function deleteLikeTag1(){
    var tagRemove = document.getElementById("like_tag1");
    tagRemove.remove();
    slider.goToPrevSlide();
}

function deleteDislikeTag2(){
    var tagRemove = document.getElementById("dislike_tag2");
    tagRemove.remove();
    slider.goToPrevSlide();
}

function deleteLikeTag2(){
    var tagRemove = document.getElementById("like_tag2");
    tagRemove.remove();
    slider.goToPrevSlide();
}

function deleteDislikeTag3(){
    var tagRemove = document.getElementById("dislike_tag3");
    tagRemove.remove();
    slider.goToPrevSlide();
}

function deleteLikeTag3(){
    var tagRemove = document.getElementById("like_tag3");
    tagRemove.remove();
    slider.goToPrevSlide();
}

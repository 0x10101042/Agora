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
    selectedTag.innerHTML += '<button type="button" class="btn btn-success" style="margin: 10px" id="like_tag" onclick="deleteLikeTag()">tag1</button>';
    slider.goToNextSlide();
}

function addTagsDislike(){
    var selectedTag = document.getElementById("selectedTag");
    selectedTag.innerHTML += '<button type="button" class="btn btn-danger" style="margin: 10px" id="dislike_tag" onclick="deleteDislikeTag()">tag1</button>';
    slider.goToNextSlide();
}

function deleteDislikeTag(){
    var tagRemove = document.getElementById("dislike_tag");
    tagRemove.remove();
    slider.goToPrevSlide();
}

function deleteLikeTag(){
    var tagRemove = document.getElementById("like_tag");
    tagRemove.remove();
    slider.goToPrevSlide();
}
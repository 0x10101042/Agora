


function show_discussion(id)
{
  if(id == "thomas_conv")
  {
    document.getElementById("base").style.display = "none";
    document.getElementById("malory_conv").style.display = "none";
    document.getElementById(id).style.display = "block";
    document.getElementById("font_thomas_friend_list").style.backgroundColor = "#512d31";
    document.getElementById("font_malory_friend_list").style.backgroundColor = "#844b52";
    document.getElementById("nomUtilisateur1").innerHTML = 'Thomas';
  }
  if(id == "malory_conv")
  {
    document.getElementById("base").style.display = "none";
    document.getElementById("thomas_conv").style.display = "none";
    document.getElementById(id).style.display = "block";
    document.getElementById("font_malory_friend_list").style.backgroundColor = "#512d31";
    document.getElementById("font_thomas_friend_list").style.backgroundColor = "#844b52";
    document.getElementById("nomUtilisateur2").innerHTML = 'Malory';
  }
}


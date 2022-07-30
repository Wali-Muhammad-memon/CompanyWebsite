// top nav language 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// Open Sidebar

$("#side_menu_bar").click(function(){
  $("#sidebar_on").addClass("active");
})

// Close Sidebar 

$("#close_cross").click(function(){
  $("#sidebar_on").removeClass("active");
})

// Search close 

$("#search--close").click(function(){
  $(".search-form-full").removeClass("active")
})

$("#index_search_bar").click(function(){
  $("#search-box").slideToggle();
})


function changeIcon1(){
    $('#eye-one').find("i").toggleClass("fa-chevron-right");
    $('#eye-one').find("i").toggleClass("fa-chevron-down");
}

function changeIcon2(){
  $('#eye-two').find("i").toggleClass("fa-chevron-right");
  $('#eye-two').find("i").toggleClass("fa-chevron-down");
}

function changeIcon3(){
  $('#eye-three').find("i").toggleClass("fa-chevron-right");
  $('#eye-three').find("i").toggleClass("fa-chevron-down");
}



$(".c1").click(function(){
  $("#service_one_content").slideToggle()
})

$(".c2").click(function(){
  $("#service_two_content").slideToggle()
})

$(".c3").click(function(){
  $("#service_three_content").slideToggle()
})
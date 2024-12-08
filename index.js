
//ON SCROLL ADDS A CSS PROPERTY BACKGROUND on HOME PAGE ON SCROLL RESPONSIVE

$(window).scroll(function() {
   var screenWidth = $(window).width();
   var scrollHeight = $(window).scrollTop();
  
   if(screenWidth < 767) {
       // Actions for screens smaller than 767px wide
       if(scrollHeight < 4300) {
         $("#price").removeClass("backgroundcolorchange" ,1000);      
       } else {
         $("#price").addClass("backgroundcolorchange", 1000, );
       }
   } else if(screenWidth >= 768 && screenWidth <= 1024) {
       // Actions for screens between 768px and 1024px wide
       if(scrollHeight <4100) {
         $("#price").removeClass("backgroundcolorchange"  ,1000);
       } else {
         
         $("#price").addClass("backgroundcolorchange" , 1000,)
       }
   } else {
       // Actions for screens larger than 1024px wide
       if(scrollHeight < 3100) {
         $("#price").removeClass("backgroundcolorchange" ,1000);
       } else {
         $("#price").addClass("backgroundcolorchange" ,1000,)
         
       }
   }
});

// Navigation Bar

$(".nav-item").hover(function(){
   $(this).toggleClass("nav-itemjs") //Adds-Removes Underline
});
$(".nav-item").on("click", function(){
   $(this).css("background-color","grey") //Adds a grey background on click 
});
$(".nav-item").hover(function(){
   $(this).animate({fontWeight:'600'},"fast",)
   $(this).animate({letterSpacing:'0.4rem'},"slow",)
   
});


// logo 'on click go to homepage
$(".logo").on("click", function(){
   location.href="index.html";
});

// CONTACT PAGE LINKS JS 
// adds and removes color classes

$(".links-a").hover(function() {
   $(this).addClass("links-a-js");
}, function(){
   $(this).removeClass("links-a-js"); 
});

$(".ojust").hover(function() {
   $(this).addClass("just");
}, function(){
   $(this).removeClass("just"); 
}); 

$(".hello").hover(function() {
   $(this).addClass("hellojs");
}, function(){
   $(this).removeClass("hellojs"); 
});
    
$(".hi").hover(function() {
   $(this).addClass("hellojs");
}, function(){
   $(this).removeClass("hellojs"); 
});
// CONTACT FORM ON CLICK MESSAGE CONTACT PAGE



function theSubmitPress(){
   
var theName = document.getElementById("name").value;
var theEmail = document.getElementById("email").value;
var theTextArea = document.getElementById("textarea").value;

   if(theName==="" || theName===null){

      alert("Please enter your Name") 
      

   }else if (theEmail==="" || theEmail===null){

      alert("Please enter your E-mail")

   }else if (theTextArea==="" || theTextArea===null ){

      alert("Please type your message")
   }
   else
   {
      alert
      (`Thank you ${theName} 
      for your message we will contact you as soon as 
      possible at your email address ${theEmail}`)
      
      }  
      
}




// P BLUE COLOR HEADER START
$(".dev1").hover(function(){
   $(this).addClass("devjs");
}, function(){
   $(this).removeClass("devjs");
});

$(".dev2").hover(function(){
   $(this).addClass("devjs");
}, function(){
   $(this).removeClass("devjs");
});

// P BLUE COLOR HEADER END
$(".changecolor").hover(function(){
   $(this).addClass("changecolorjs");
}, function(){
   $(this).removeClass("changecolorjs");
});

// About Page Css
$( ".h1-about" ).on( "click", function() {
   $( this ).slideUp( "slow", function() {
     });
 });
 $( ".h1-about" ).on( "click", function() {
   $( this ).slideDown( "slow", function() {
     });
 });

 // ABOUT PAGE MODAL 
//  variables
 var modal = document.getElementById("myModal");
 var modal1= document.getElementById("myModal1");
 var modal2= document.getElementById("myModal2");
 // Get the button that opens the modal
 var theModal = document.getElementById("testModal");
 var theModal1 = document.getElementById("testModal1");
 var theModal2 = document.getElementById("testModal2");
 // Get the <span> element that closes the modal

 var spanModal = document.getElementsByClassName("close")[0];
 var spanModal1 = document.getElementsByClassName("close1")[0];
 var spanModal2 = document.getElementsByClassName("close2")[0];

 // When the user clicks on the element, opens the modal

 theModal.onclick = function() {
   modal.style.display = "block";
 }
 theModal1.onclick = function() {
   modal1.style.display = "block";
 }
 theModal2.onclick = function() {
   modal2.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 spanModal.onclick = function() {
   modal.style.display = "none";
}
spanModal1.onclick = function() {
   modal1.style.display = "none";
}
spanModal2.onclick = function() {
   modal2.style.display = "none";
}
 
//  When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
   else if (event.target == modal1) {
      modal1.style.display = "none";
    }
    else if (event.target == modal2) {
      modal2.style.display = "none";
    }
 }


 // open the links in Repositories page
 function theLinkOpen(){
   window.open("https://alexandrosmrv.github.io/Demo./");
}
function theLinkOpen1(){
   window.open("https://alexandrosmrv.github.io/btstrap.jquery-demo/");
}
function theLinkOpen2(){
   window.open("https://alexandrosmrv.github.io/flex_grid/");
}
function theLinkOpen3(){
   window.open("https://alexandrosmrv.github.io/tind_vanillaJs/");
}
function theLinkOpen4(){
   window.open("https://alexandrosmrv.github.io/checkList_Spv/");
}
function theLinkOpen5(){
   window.open("https://alexandrosmrv.github.io/overtimecheck/");
}
function theLinkOpen6(){
   window.open("https://alexandrosmrv.github.io/curriculum-vitae/");
}
function theLinkOpen7(){
   window.open("https://github.com/alexandrosmrv/reactDemoSinglePage");
}
 
$(document).ready(function() {
   $(".paralax1").animate({
     marginLeft: '200px' // Slide to the right by 200px
   }, 2000); // Duration of the animation in milliseconds (1 second in this case)
 });




//  $(".about").toggle(7000);

//  $(".about").toggle(function(){
//    $(this).slideDown(100);
//  });
// $(".endSection").hide();
//  $(".endSection").toggle(function(){
//    $(this).slideup(9000);
//  });

//  $(".footer-container").hide();

//  $("#btnCont").on("click", function(){
//    $(".footer-container").toggle(5000);
//  });

















//ON SCROLL ADDS A CSS PROPERTY BACKGROUND on HOME PAGE ON SCROLL RESPONSIVE

$(window).scroll(function() {
   var screenWidth = $(window).width();
   var scrollHeight = $(window).scrollTop();
  
   if(screenWidth < 767) {
       // Actions for screens smaller than 767px wide
       if(scrollHeight < 5100) {
         $("#price").removeClass("backgroundcolorchange" ,1000);      
       } else {
         $("#price").addClass("backgroundcolorchange", 1000, );
       }
   } else if(screenWidth >= 768 && screenWidth <= 1024) {
       // Actions for screens between 768px and 1024px wide
       if(scrollHeight <5300) {
         $("#price").removeClass("backgroundcolorchange"  ,1000);
       } else {
         
         $("#price").addClass("backgroundcolorchange" , 1000,)
       }
   } else {
       // Actions for screens larger than 1024px wide
       if(scrollHeight < 4200) {
         $("#price").removeClass("backgroundcolorchange" ,1000);
       } else {
         $("#price").addClass("backgroundcolorchange" ,1000,)
         
       }
   }
});






// Navigation Bar
$(".nav-item").on({
   mouseenter: function () {
     $(this).addClass("nav-itemjs");
   },
   mouseleave: function () {
     $(this).removeClass("nav-itemjs");
   }
 });
 



// $(".nav-item").hover(function(){
//    $(this).toggleClass("nav-itemjs") //Adds-Removes Underline
// });
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
// CONTACT FORM ON CLICK MESSAGE CONTACT PAGE

document.getElementById('contactForm').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the form from submitting

   const name = document.getElementById('name').value.trim();
   const email = document.getElementById('email').value.trim();
   const message = document.getElementById('message').value.trim();

   if (!name) {
     alert('Please enter your name.');
     return;
   }

   if (!email) {
     alert('Please enter your email.');
     return;
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email)) {
     alert('Please enter a valid email address.');
     return;
   }

   if (!message) {
     alert('Please enter your message.');
     return;
   }

   alert('Form submitted successfully!');
   
 });

 




// P BLUE COLOR HEADER START



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












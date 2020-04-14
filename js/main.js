
$('.loop').owlCarousel({
    center: true,
    items:1,
    loop:false,
    margin:10
});

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	dots:false,
	responsive:{
		0:{
			items:2
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
})

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

$(".read-seo").hide();

$(".read1").click(function(){
	$(".read-seo").toggle();
});


$(".mobile-nav .form-inline").hide();

$(".button-ss").click(function(){
	$(".mobile-nav .form-inline").toggle();
	$(".button-ss").toggle();
});
  
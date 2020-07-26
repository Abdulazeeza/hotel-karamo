let num =1;
const menu_icon = () => {
	$('.header_navbar--mobile').toggleClass('header_navbar--mobile--active');
}
const currentSlide = (position) =>{

	if(position == 1){
		document.querySelector('.header_slider').src = "images/landingpagepicture.png";
		document.querySelector('.slide1').style.background = "#B18B11";
		document.querySelector('.slide2').style.background = "white";
		document.querySelector('.slide3').style.background = "white";
	}else if(position == 2){
		document.querySelector('.header_slider').src = "images/792bde889998651.png";
		document.querySelector('.slide1').style.background = "white";
		document.querySelector('.slide2').style.background = "#B18B11";
		document.querySelector('.slide3').style.background = "white";
	}else if(position == 3){
		document.querySelector('.header_slider').src = "images/img7.png";
		document.querySelector('.slide1').style.background = "white";
		document.querySelector('.slide2').style.background = "white";
		document.querySelector('.slide3').style.background = "#B18B11";
	}

	if (num <= 3) {
		num = num + 1;
	}else{
		num = 1;
	}
}
const plusSlides = () =>{
	if(document.querySelector('.header_slider').getAttribute('src') == "images/landingpagepicture.png"){
		currentSlide(2);
	}
	else if (document.querySelector('.header_slider').getAttribute('src')== "images/792bde889998651.png"){
		currentSlide(3);
	}
	else if(document.querySelector('.header_slider').getAttribute('src') == "images/img7.png"){
		currentSlide(1);
	}
}
const minusSlides = () =>{
	if(document.querySelector('.header_slider').getAttribute('src') == "images/landingpagepicture.png"){
		currentSlide(3);
	}
	else if (document.querySelector('.header_slider').getAttribute('src') == "images/792bde889998651.png"){
		currentSlide(1);
	}
	else if(document.querySelector('.header_slider').getAttribute('src') == "images/img7.png"){
		currentSlide(2);
	}
}

document.querySelector('.slide1').style.background = "#B18B11";
document.querySelector('.slide2').style.background = "white";
document.querySelector('.slide3').style.background = "white";
setInterval(function(){currentSlide(num)}, 3000);
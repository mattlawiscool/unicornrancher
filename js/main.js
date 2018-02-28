const unicorn = $(".unicorns");

console.log(unicorn);

unicorn.click(function() {
	if ($(this).hasClass("barn") === true){
		$(this).removeClass("barn");
		$(this).addClass('pasture');
	}else if ($(this).hasClass("pasture") === true){
		$(this).removeClass("pasture")
		$(this).addClass("trails")
	}else {
		$(this).removeClass("trails");
		$(this).addClass("barn");
	}
	

})


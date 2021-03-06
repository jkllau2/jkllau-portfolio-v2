
$(document).ready(function(){	

	$('#abtMe_wrapper').hide();
	$('#pdf_wrapper').hide();

	function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
	}

	preload([
	    'img/bike.png',
	    'img/bike_b.png',
	    'img/car.png',
	    'img/car_b.png',
	    'img/ciw.png',
	    'img/ciw_b.png',
	    'img/comp.png',
	    'img/comp_b.png',
	    'img/database.png',
	    'img/database_b.png',
	    'img/ftp.png',
	    'img/ftp_b.png',
	    'img/ge.png',
	    'img/ge_b.png',
	    'img/marep.png',
	    'img/marep_b.png'
	]);
	
	$('a#getContact').click(function(){
		$('#getAbtMe').removeClass('current');
		$('#getResume').removeClass('current');

		$('a#nav_p').removeClass('current');
		$('a#nav_pd').removeClass('current');
		$('a#nav_all').removeClass('current');
		$('a#nav_wd').removeClass('current');

		$('#pdf_wrapper').hide();
		$('#portfolio_wrapper').hide();
		$('#abtMe_wrapper').show();

		$(this).addClass('current');
	});
	$('a#getAbtMe').click(function(){
		$('#getContact').removeClass('current');
		$('#getResume').removeClass('current');

		$('a#nav_p').removeClass('current');
		$('a#nav_pd').removeClass('current');
		$('a#nav_all').removeClass('current');
		$('a#nav_wd').removeClass('current');

		$('#pdf_wrapper').hide();
		$('#portfolio_wrapper').hide();
		$('#abtMe_wrapper').show();

		$(this).addClass('current');
	});
	$('a#getResume').click(function(){
		$('#getContact').removeClass('current');
		$('#getAbtMe').removeClass('current');
		
		$('a#nav_p').removeClass('current');
		$('a#nav_pd').removeClass('current');
		$('a#nav_all').removeClass('current');
		$('a#nav_wd').removeClass('current');

		$('#pdf_wrapper').show();
		$('#portfolio_wrapper').hide();
		$('#abtMe_wrapper').hide();

		$(this).addClass('current');
	});
	$('a#nav_all').click(function(){
		$('#getContact').removeClass('current');
		$('#getAbtMe').removeClass('current');
		$('#getResume').removeClass('current');

		$('#pdf_wrapper').hide();
		$('#abtMe_wrapper').hide();
		$('#portfolio_wrapper').show();

		$(this).addClass('current');
	});
	$('a#nav_wd').click(function(){
		$('#getContact').removeClass('current');
		$('#getAbtMe').removeClass('current');
		$('#getResume').removeClass('current');

		$('#pdf_wrapper').hide();
		$('#abtMe_wrapper').hide();
		$('#portfolio_wrapper').show();

		$(this).addClass('current');
	});
	$('a#nav_p').click(function(){
		$('#getContact').removeClass('current');
		$('#getAbtMe').removeClass('current');
		$('#getResume').removeClass('current');

		$('#pdf_wrapper').hide();
		$('#abtMe_wrapper').hide();
		$('#portfolio_wrapper').show();

		$(this).addClass('current');
	});
	$('a#nav_pd').click(function(){
		$('#getContact').removeClass('current');
		$('#getAbtMe').removeClass('current');
		$('#getResume').removeClass('current');

		$('#pdf_wrapper').hide();
		$('#abtMe_wrapper').hide();
		$('#portfolio_wrapper').show();

		$(this).addClass('current');
	});


});
/* ----------------------------------------------
	Item Name: Selector - pricing tables and plans
	Author: Ashish Maraviya
	Version: 2.0
	Copyright 2020
---------------------------------------------- */

'use strict';

$(document).ready(function(){
	
	//Design 2 (plan-1 script)
	var TotalBasic = 0;
	
	$('.checkbox_basic_2').parent().find('span.one_price').addClass('txt-light');
	$('input:checkbox[name=checkbox_basic_2]:checked').each(function(){
		TotalBasic = TotalBasic + parseInt($(this).val());
		$(this).parent().find('span.one_price').removeClass('txt-light');
	});
	$('#basic_price_2').html(TotalBasic);		
	
	$('.checkbox_basic_2').on('click', function() {
		var currentvalue = $(this).val();
		
		if (!$(this).is(':checked')) {
			$(this).parent().find('span.one_price').addClass('txt-light');	
			
			TotalBasic = TotalBasic - parseInt(currentvalue);
			}else{
			$(this).parent().find('span.one_price').removeClass('txt-light');
			TotalBasic = TotalBasic + parseInt(currentvalue);
		}
		
		$('#basic_price_2').html(TotalBasic);
		
		if(TotalBasic > 0){
			$("#basicSignup_2").removeClass('btn-disable');
			$('#basicSignup_2').unbind('click');
			}else{
			$("#basicSignup_2").addClass('btn-disable');
			$('#basicSignup_2').bind('click', false);
		}
	});
	
    //Design 2 (plan-1 script)
	var Totalwebsitee = 0;
	
	$('.checkbox_websitee_2').parent().find('span.one_price').addClass('txt-light');
	$('input:checkbox[name=checkbox_websitee_2]:checked').each(function(){
		Totalwebsitee = Totalwebsitee + parseInt($(this).val());
		$(this).parent().find('span.one_price').removeClass('txt-light');
	});
	$('#websitee_price_2').html(Totalwebsitee);		
	
	$('.checkbox_websitee_2').on('click', function() {
		var currentvalue = $(this).val();
		
		if (!$(this).is(':checked')) {
			$(this).parent().find('span.one_price').addClass('txt-light');	
			
			Totalwebsitee = Totalwebsitee - parseInt(currentvalue);
			}else{
			$(this).parent().find('span.one_price').removeClass('txt-light');
			Totalwebsitee = Totalwebsitee + parseInt(currentvalue);
		}
		
		$('#websitee_price_2').html(Totalwebsitee);
		
		if(Totalwebsitee > 0){
			$("#websiteeSignup_2").removeClass('btn-disable');
			$('#websiteeSignup_2').unbind('click');
			}else{
			$("#websiteeSignup_2").addClass('btn-disable');
			$('#websiteeSignup_2').bind('click', false);
		}
	});
	



    //Design 2 (plan-1 script)
	var Totalpackaging = 0;
	
	$('.checkbox_packaging_2').parent().find('span.one_price').addClass('txt-light');
	$('input:checkbox[name=checkbox_packaging_2]:checked').each(function(){
		Totalpackaging = Totalpackaging + parseInt($(this).val());
		$(this).parent().find('span.one_price').removeClass('txt-light');
	});
	$('#packaging_price_2').html(Totalpackaging);		
	
	$('.checkbox_packaging_2').on('click', function() {
		var currentvalue = $(this).val();
		
		if (!$(this).is(':checked')) {
			$(this).parent().find('span.one_price').addClass('txt-light');	
			
			Totalpackaging = Totalpackaging - parseInt(currentvalue);
			}else{
			$(this).parent().find('span.one_price').removeClass('txt-light');
			Totalpackaging = Totalpackaging + parseInt(currentvalue);
		}
		
		$('#packaging_price_2').html(Totalpackaging);
		
		if(Totalpackaging > 0){
			$("#packagingSignup_2").removeClass('btn-disable');
			$('#packagingSignup_2').unbind('click');
			}else{
			$("#packagingSignup_2").addClass('btn-disable');
			$('#packagingSignup_2').bind('click', false);
		}
	});
	



	//Design 2 (plan-2 script)
	var TotalStanderd = 0;
	
	$('.checkbox_standerd_2').parent().find('span.one_price').addClass('txt-light');
	$('input:checkbox[name=checkbox_standerd_2]:checked').each(function(){
		TotalStanderd = TotalStanderd + parseInt($(this).val());
		$(this).parent().find('span.one_price').removeClass('txt-light');
	});
	$('#standard_price_2').html(TotalStanderd);		
	
	$('.checkbox_standerd_2').on('click', function() {
		var currentvalue = $(this).val();
		
		if (!$(this).is(':checked')) {
			$(this).parent().find('span.one_price').addClass('txt-light');
			TotalStanderd = TotalStanderd - parseInt(currentvalue);
			}else{
			$(this).parent().find('span.one_price').removeClass('txt-light');
			TotalStanderd = TotalStanderd + parseInt(currentvalue);
		}
		
		$('#standard_price_2').html(TotalStanderd);
		
		if(TotalStanderd > 0){
			$("#standardSignup_2").removeClass('btn-disable');
			$('#standardSignup_2').unbind('click');
			}else{
			$("#standardSignup_2").addClass('btn-disable');
			$('#standardSignup_2').bind('click', false);
		}
	});
	
	//Design 2 (plan-3 script)
	var TotalPremium = 0;
	
	$('.checkbox_premium_2').parent().find('span.one_price').addClass('txt-light');
	$('input:checkbox[name=checkbox_premium_2]:checked').each(function(){
		TotalPremium = TotalPremium + parseInt($(this).val());
		$(this).parent().find('span.one_price').removeClass('txt-light');
	});
	$('#premium_price_2').html(TotalPremium);		
	
	$('.checkbox_premium_2').on('click', function() {
		var currentvalue = $(this).val();
		
		if (!$(this).is(':checked')) {
			$(this).parent().find('span.one_price').addClass('txt-light');	
			TotalPremium = TotalPremium - parseInt(currentvalue);
			}else{
			$(this).parent().find('span.one_price').removeClass('txt-light');
			TotalPremium = TotalPremium + parseInt(currentvalue);
		}
		
		$('#premium_price_2').html(TotalPremium);
		
		if(TotalPremium > 0){
			$("#premiumSignup_2").removeClass('btn-disable');
			$('#premiumSignup_2').unbind('click');
			}else{
			$("#premiumSignup_2").addClass('btn-disable');
			$('#premiumSignup_2').bind('click', false);
		}
	});
});
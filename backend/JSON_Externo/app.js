$.ajax({
	url: 'http://services.groupkt.com/country/get/all',
	success: function(responseText,xhr,settings){
		console.log(responseText)
	}
});
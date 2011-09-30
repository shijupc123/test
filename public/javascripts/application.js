// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function getSearch(){
	var keyword_value= $('addressname_idsearch_txt').value;
	if ((keyword_value.trim()).length) {
		new Ajax.Request('/addresses/search', {
			method: 'post',
			parameters: {
				keyword: keyword_value
			},
			onSuccess: function(transport){
				var response = transport.responseText || "no response text";
				$('results').update(response);
			},
			onFailure: function(){
				alert('Something went wrong...')
			}
		});
	}	  
}


String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g,"");
}
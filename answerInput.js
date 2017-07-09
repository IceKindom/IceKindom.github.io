var getQuestionsUrl = ""

//保证加载
$(document).ready(function initWeb(){
	$.ajax({
		        url:getQuestionsUrl,
		        action:"get",
		        dataType: "json",
	        	data:{
		        	areaId:areaId,
		        	dateStart:dateStart,
		        	dateEnd:dateEnd,
		        	city:city,
		        	house:house,
		        	orderId:orderId,
		        	pageNo:pageNo
	       		},
		        success: function(data){
				    
				}
			});
}

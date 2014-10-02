window.onload = function(){

	var dataSet = [
		{skill:"PHP",value:"50",color:"blue"},
		{skill:"CSS",value:"15",color:"red"},
		{skill:"HTML",value:"70",color:"green"},
		{skill:"Javascript",value:"20",color:"orange"}

		
	];

	var svg = d3.select("svg");
	svg.selectAll("rect").data(dataSet,function(d){return d.skill}).enter().append("rect")
	.attr("fill",function(d){return d.color})
	.attr("width",50)
	.attr("x",function(d,i){return i*100})
	.attr("height",0)
	.attr("y",function(d){return 380})
	.transition().duration(2000)
	.attr("height",function(d){return d.value*4})
	.attr("y",function(d){return 380-(d.value*4)});



	
};
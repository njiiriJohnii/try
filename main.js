$('h1').on("click",function(){
	$("h1").css('color','blue');
})

/*for(var i=0;i<myArray.length;i++)
{
 	document.write("<br>"+myArray[i].Name);
}*/

/*$.each(myArray,function(index, person){
	$('#people').append('<li>'+person.Name+'</li>');
});*/
function generateEq(){
	var eq={
		a:Math.floor((Math.random()*150)+1),
		b:Math.floor((Math.random()*150)+1)
	};
	return eq;
}
var eq=generateEq();
$("#questions").text(eq.a+"+"+eq.b);
correctAnswer=eq.a+eq.b;
$("#answer").on("click",function(){
	var input=$("input").val();
	if(input==correctAnswer)
	{
		$("#message").text("Correct.");
	}
	else
	{
		$("#message").text("Incorrect.");
	}
	var eq=generateEq();
	$("#questions").text(eq.a+"+"+eq.b);
	correctAnswer=eq.a+eq.b;
	var input=$("input").val('');
})



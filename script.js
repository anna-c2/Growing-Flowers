$(".warning").hide();
$(".moon").hide();
/*Pots*/
$(".second").hide();
$(".third").hide();
$(".fourth").hide();
$(".fifth").hide();
$(".sixth").hide();
$(".seventh").hide();
$(".eigth").hide();
$(".ninth").hide();

/*Buttons*/
$(".second-button").hide();
$(".next").hide();
$(".next2").hide();
$(".third-button").hide();
$(".next3").hide();
$(".fourth-button").hide();
$(".next4").hide();
$(".reset").hide();

$(".sun").click(function() {
   	$("body").css("background","#736c91");
    $(".main").css("background","#b8afdb");
    $(".main").css("border-color","#ead6ff");
    $(".title").css("text-shadow","#fffcd9");
    $(".title").css("color","#f2edae");
    $(".moon").show();
     $(".sun").hide();
   /* $(".sun").attr("src","https://i.imgur.com/rmUCGQe.png");
    $(".sun").css("height","200");*/
    $("button").css("background","#e6c1df");
    $("button").mouseover(function() {
        $("button").css("background","#ffe0f9");
    });
     $("button").mouseleave(function() {
        $("button").css("background","#e6c1df");
    });
    $(".warning").show(); 
    $(".warning").css("margin-top","20px");    
	    
});

$(".moon").click(function() {
   	$("body").css("background","#fcf4cc");
    $(".main").css("background","#fffee6");
    $(".main").css("border-color","black");
    $(".title").css("text-shadow","#b0a99b");
    $(".title").css("color","#33312f");
    $(".warning").hide();
    $(".sun").show();
    $(".moon").hide();
    $("button").css("background","#ad9e93"); 
    $("button").mouseover(function() {
        $("button").css("background","#e3d7cf");
    });
     $("button").mouseleave(function() {
        $("button").css("background","#ad9e93");
    });
    
});

$(".first-button").click(function() {
    $(".first").hide();
    $(".second").show();
    $(".first-button").hide();
    $(".next").show();
});

$(".next").click(function() {
    $(".third").show();
    $(".second").hide();
    $(".second-button").show();
    $(".next").hide();

});

$(".second-button").click(function() {
    $(".fourth").show();
    $(".third").hide();
    $(".second-button").hide();
    $(".next2").show();
});

$(".next2").click(function() {
    $(".fifth").show();
    $(".fourth").hide();
    $(".next2").hide();
    $(".third-button").show();

});

$(".third-button").click(function() {
    $(".sixth").show();
    $(".fifth").hide();
    $(".third-button").hide();
    $(".next3").show();
});

$(".next3").click(function() {
    $(".seventh").show();
    $(".sixth").hide();
    $(".next3").hide();
    $(".fourth-button").show();
});

$(".fourth-button").click(function() {
    $(".eigth").show();
    $(".seventh").hide();
    $(".fourth-button").hide();
    $(".next4").show();
});

$(".next4").click(function() {
    $(".eigth").hide();
    $(".ninth").show();
    $(".eigth").hide();
    $(".next4").text("---The End---");
    $(".next4").css("background-color","transparent");
    $(".next4").css("font-family","cursive");
    $(".next4").css("font-size","30px");
    $(".reset").show();
});

$(".fertilizer").click(function() {
    $(".reset").show();
    $(".x").hide();
    $(".ninth").show();
    $(".next4").show();
    $(".next4").text("---The End---");
    $(".next4").css("background-color","transparent");
    $(".next4").css("font-family","cursive");
    $(".next4").css("font-size","30px");
});

$(".reset").click(function() {
    location.reload();
});


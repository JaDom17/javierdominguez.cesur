$("body").dblclick(function(){
    $(this).css("background", function(){
        var r = Math.round(Math.random()*255);
        var g = Math.round(Math.random()*255);
        var b = Math.round(Math.random()*255);
        return "rgb("+r+", "+g+", "+b+")";
    });
});
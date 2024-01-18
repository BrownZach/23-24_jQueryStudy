/* Put code for the task below */
/*$(document).ready(function(){
    $("#red").click(function(){
        $(".table").css("background-color", "red")
    });
    $("#green").click(function(){
        $(".table").css("background-color", "green")
    });
    $("#blue").click(function(){
        $(".table").css("background-color", "blue")
    });
});*/
$(".color").click(function(){
    $(".table").css("background-color", $(this).val());
}
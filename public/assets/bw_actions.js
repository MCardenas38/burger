$(function(){
    $("#add").on("click",function(event){
        event.preventDefault();
        var object= {
            name: $("#burger_name").val().trim()
        }
        console.log("here......");
        $.post("/api/burgers",object).then(function(){
            location.reload();
        });    
    });

    $(".eat").on("click",function(event){
        var id= $(this).data("id");
        $.ajax("/api/burgers/"+id,{
            type: "PUT"
        }).then(function(){
            location.reload();
        });
    });
});
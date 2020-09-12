$(function(){
    $("#submitBurger").on("click", function(e){
        e.preventDefault();
        let newBurger = {
          burger_name: $("#burgerInput").val().trim(),
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(response){
                console.log(response)
                location.reload();
            }
        )
    });

    $(".eatBurger").on("click", function(){
     let id = $(this).data("burgerid");
     let newDevoured = $(this).data("newDevoured");
     let newDevouredState = {
         devoured: newDevoured
         
     };console.log(id)
     $.ajax("/api/burgers/" + id, {
         method: "PUT",
         data: newDevouredState
     }).then(function(){
         console.log("changed devoured to", newDevoured);
         location.reload();
     })
    });

    $(".digestBurger").on("click", function(e){
        e.preventDefault();
        let id = $(this).data("burgerid");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function(){
            location.reload();
        })
    })

});
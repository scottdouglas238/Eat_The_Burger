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
    })
})
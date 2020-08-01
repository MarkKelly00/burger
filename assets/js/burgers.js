$(function() {
    $(".change-devour").on("click", function(event) {
        let id = $(this).data("id");
        let devouredBurger = $(this).data("devoured");

        let newDevouredState = {
            devoured: devouredBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("devoured the burger", devouredBurger);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            name: $("burg").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

    $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
    }).then (
        function() {
            console.log("added a new Burger");
            location.reload();
        }
    );
    });
});
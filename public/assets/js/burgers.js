$(function() {
    $(".change-devour").on("click", function(event) {
        let id = $(this).val();

        let newDevouredState = {
            devoured: true
        };

        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: $("input[name=devoured]:checked").val(),
        };

    $.ajax("/burgers/create", {
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
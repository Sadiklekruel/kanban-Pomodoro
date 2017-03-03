$(document).ready(function() {

    var text;
    var temps = 5;

    $(".ajouter").click(function() {
        var text = $('input').val();
        $(".board").append('<li class="tache">' + text + '<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></li>')
        $(".glyphicon-remove-sign").click(function() {
            $(this).parent().remove();
        })
        $(".tache").click(function() {
            $(".board2").append($(this));
        });

    })

    $("#popupconfirmation").dialog({
        autoOpen: false,
        width: 400
    });

    $("#popupconfirmation").dialog({
        buttons: [{
            text: "Oui",
            click: function() {
                alert("bravo");
            }
        },
        {
            text: "Non",
            click: function() {
                $(".timer").data("seconds-left", temps);
            }
        }]
    });

    $(".start").click(function() {
        $(".timer").data("seconds-left", temps);
            $('.timer').startTimer({
                    onComplete: function() {
                        $("#popupconfirmation").dialog("open");
                    }
                });


    });


});

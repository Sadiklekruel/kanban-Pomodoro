$(document).ready(function() {
    console.log("hello");

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
    var sec = $("#s");
    var min = $("#m");
    var timerencours=false;
    var currentsec;
    var currentmin;
    $(".start").click(function(){
        if(timerencours==false){
            var refresh = setInterval(function() {
            monTimer(sec, min)
            console.log(currentmin, currentsec);
            }, 1000);
            timerencours=true;
        }
    });
    function monTimer(s, m){
        if(m.val()==0 && s.val()==0){
            m.val(0);
            s.val(0)
            currentmin=m.val()
            currentsec=s.val()
        }else{
            if(s.val()>0){
                s.val(s.val()-1)
                currentsec=s.val()
            }else{
                if(s.val()==0){
                    s.val(10)
                    m.val(m.val()-1)
                    currentsec=s.val()
                    currentmin=m.val()
                }
            }
        }

    }
    var curentTs=sec.val();
    var currentTm=min.val();

    $(".break").click(function(){
        sec.val(sec.val())
    })


});

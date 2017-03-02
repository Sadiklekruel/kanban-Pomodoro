$(document).ready(function() {

            $(".ajouter").click(function() {
                var text = $('input').val();
                $(".board").append('<li class="tache">' + text + '<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></li>')
            })

            $(".glyphicon.glyphicon-remove-sign").click(function(){
                var maTache= $(this).parent();
                console.log(maTache);
                $(".board2").append(maTache);
            })







            // $(function() {
            //             $('.timer').startTimer({
            //                     onComplete: function() {
            //
            //
            //             })
})

$("document").ready(function () {
    $('#btn1').on('click', function() {
        
        var price = $('<h1 id="unagi">Its Working Fine</h1>');
        $('.jumbotron').append(price);
        price.appendTo($('.jumbotron'));
        $('#btn1').remove();
        $('p').text("its Changed By JQuery");
        var newbtn = $('<button id="btn2" class="btn btn-default">Bring It Back</button>');
        $('.jumbotron').append(newbtn);

        //Reloading it
        $('#btn2').on('click', function () {
            $('p').text("People use Business Reviewer to search for everything from the city's tastiest burger to the most renowned cardiologist. What will you uncover in your neighborhood?");
            $('#btn2').remove();
            $('#unagi').remove();
            var oldbtn = $('<button id="btn1" class="btn btn-default">Thats It</button>');
            $('.jumbotron').append(oldbtn);
        });


    });
    
});
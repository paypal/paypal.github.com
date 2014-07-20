$(function () {

    //Format code blocks
    prettyPrint();

    //Keep the docs menu in place
    var staticMenu = $(".staticMenu");
    var initialMenuPadding = staticMenu.position().top;
    var initialMenuPosition = staticMenu.offset().top - initialMenuPadding;
    $(window).scroll(function(){
        var diff =  $(window).scrollTop() - initialMenuPosition;
        staticMenu.css("top",Math.max(initialMenuPadding,diff));

    });

    //Build the index by parsing the H2's in the documentation
    var index=$("<ul class='nav'></ul>");
    $(".docsContent section").each(function(){

        var title = $($(this).find("h3")[0]);
        var rand = title.html();//+Math.random();
        rand = rand.split(" ")[0];
        title.attr('id', rand);
        var entry = $("<a data-target='#" + rand + "'></a>");
        entry
            .html(title.html())
            .attr('href',"#"+rand);


        index.append($("<li data-offset='0'></li>").append(entry));
    });

    staticMenu.append(index);

    $('body').scrollspy({
		target: '#staticMenuNav'
    });

});



































































































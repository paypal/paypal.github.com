/**
 * Created with IntelliJ IDEA.
 * User: lmarkus
 * Date: 11/13/13
 * Time: 3:58 PM
 * To change this template use File | Settings | File Templates.
 */

$(function(){

    var uri = "https://api.github.com/orgs/paypal/repos?callback=?"
        + "&per_page=100";

   /*
   //Auto populate option
    $.getJSON(uri, function (response) {
        var repos = response.data;
        for(var i in repos){
            createBlock(repos[i]);

        }
        //console.log(data);
    })
     */

    //List Option
    for(var i in PAYPAL.projects){
        createBlock(PAYPAL.projects[i]);
    }

    function createBlock(repo){
        var block=$("<div></div>");
        var name=$("<h1></h1>").html(repo.name);
        var desc=$("<p></p>").html(repo.desc);

        block
            .append(name)
            .append(desc)

        $('#repos').append(block);

    }

})

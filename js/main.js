/**
 * Created with IntelliJ IDEA.
 * User: lmarkus
 * Date: 11/13/13
 * Time: 3:58 PM
 * To change this template use File | Settings | File Templates.
 */

$(function () {
        var uri = 'https://api.github.com/orgs/paypal/repos?callback=?'
            + '&per_page=100';

        function createBlock(repo) {
            var block = $('<div></div>').addClass('project');

            var name = $('<h2></h2>').html(repo.name);
            var lang = $('<div></div>').html(repo.language).addClass(repo.language + ' language');
            var desc = $('<p></p>').html(repo.desc);
            var link = $('<a>&gt;</a>')
                .attr('href', repo.repo)
                .attr('aria-label', 'View ' + repo.name + ' on GitHub')
                .attr('target', '_BLANK')
                .addClass(repo.language);
            ;
            block
                .append(name)
                .append(lang)
                .append(desc)
                .append(link)

            $('#repos').append(block);

        };

        //List Option
        for (var i in PAYPAL.projects) {
              createBlock(PAYPAL.projects[i]);
        }
        $('#repos').append($('<div>&nbsp</div>'));
})

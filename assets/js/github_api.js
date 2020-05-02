$(document).ready(function() {
  let users = [];
  let repos = [];
  $(".ghbtn").each( function () {
    var user = $(this).attr('user');
    var repo = $(this).attr('repo');
    repos.push(user + '/' + repo);
      if (users.indexOf($(this).attr('user')) === -1) {
        users.push($(this).attr('user'))
      }
  });
  for (var i = 0; i < repos.length; i++) {
    $.ajax({
    type: "GET",
    url: "https://api.github.com/repos/" + repos[i],
    tryCount : 0,
    retryLimit : 3,
    async: true,
    dataType: "json",
    success: function (data) {
      $(`div[repo='${data.name}']`).find("span[class='star']").html("&nbsp;"+data.stargazers_count);
      $(`div[repo='${data.name}']`).find("span[class='fork']").html("&nbsp;"+data.forks_count);
      $(`div[repo='${data.name}']`).find("span[class='watchers']").html("&nbsp;"+data.watchers_count);
    }
  })}
});

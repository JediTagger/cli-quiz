define(["jquery", "q"], function($, Q) {
  
  return function() {
    var deferred = Q.defer();

    $('#start').click(function() {
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
        method: "GET"
      }).done(function() {
        deferred.resolve();
      }).fail(function(xhr, status, error) {
        deferred.reject(error);
      });
    });
  };
});
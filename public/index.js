(function(){

  google.load("feeds", "1");

  function initialize() {
    var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
    feed.includeHistoricalEntries();
    feed.setNumEntries(20);
    feed.load(function(result) {
      if (!result.error) {
        var container = $("#feed");
        _.each(result.feed.entries, function(entry){
          var div = $("<div></div>").addClass("entry row");
          // store entry in jQuery data attribute
          div.data("talk-info", entry);
          // using lodash template
          compiledEntry = entryTemplate(entry);
          div.append(compiledEntry);
          console.log(entry);
          // div.append(entry.content);
          container.append(div);
        })
      }
    });
  }
  google.setOnLoadCallback(initialize);

  $(".linkSpan").on("click", function(){
    event.stopPropagation();
  })

  // click event on 'more info' link bubbles up to entry div
  $(document).on("click", ".entry", function(){
    // retrieve stored entry from jQuery data attribute
    if($(event.target).is(".info")){
      console.log("winner");
      var talkInfo = $(this).data("talk-info");
      // using lodash template
      compiledModal = modalTemplate(talkInfo);
      $(".modalContent").html('');
      $(".modalContent").append(compiledModal);

      var options = {};
      $('[data-remodal-id=modal]').remodal(options);
      var inst = $('[data-remodal-id=modal]').remodal();

      inst.open();
    }
  })

  $(window).on("unload", function(){
    inst.close();
    inst.destroy();
    this.location = this.location.origin;
  })

})();

(function(){

  // TED talk videos RSS feed URL
  var feedUrl = "http://feeds.feedburner.com/tedtalks_video";
  // Google Feeds API setup. will deliver RSS as JSON
  google.load("feeds", "1");
  // fn initialize will be passed as a callback to the asynchronous fn that fetches the RSS data
  function initialize() {
    // setup to ask feed for 50 most recent entries
    var feed = new google.feeds.Feed(feedUrl);
    feed.includeHistoricalEntries();
    feed.setNumEntries(50);

    feed.load(function(result) {
      if (!result.error) {
        var container = $("#feed");
        // create one .entry div for each entry object
        _.each(result.feed.entries, function(entry){
          var div = $("<div></div>").addClass("entry row");
          // store entry in jQuery data attribute for possible use in the info modal
          div.data("talk-info", entry);
          // compile lodash template then append to div
          compiledEntry = entryTemplate(entry);
          div.append(compiledEntry);
          container.append(div);
        })
      }
    });
  }
  // asynchronously fetch rss feed. initialize will handle the data once it returns
  google.setOnLoadCallback(initialize);

  // listen for click on .entry div. click will bubble up from .info link
  $(document).on("click", ".entry", function(){
    if($(event.target).is(".info")){
      // retrieve stored entry object from jQuery data attribute
      var talkInfo = $(this).data("talk-info");
      // compile lodash template
      compiledModal = modalTemplate(talkInfo);
      // remove any remaining html from .modalContent before appending new compiled template
      $(".modalContent").html('');
      $(".modalContent").append(compiledModal);

      // create instance of remodal modal
      $('[data-remodal-id=modal]').remodal({});
      var inst = $('[data-remodal-id=modal]').remodal();

      inst.open();
    }
  })

  // if the user refreshes with the modal active, this closes it cleanly and goes to main list
  $(window).on("unload", function(){
    inst.close();
    inst.destroy();
    this.location = this.location.origin;
  })

})();

// notes:
// I considered an MVC framework but decided it was overkill.  
// jQuery handles the events and the lodash templates generate html when needed

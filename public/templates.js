var entryTemplate = _.template("<article>" +
  "<h5><%=title %></h5><p><a href='#modal'><%=contentSnippet %></a></p>" +
  "<span class='linkSpan'><a href=<%=link %>>Watch this Ted Talk</a></span>" +
  "<span class='moreInfoSpan'><a href='#modal'>More Info</a></span>" +
  "</article>"
);

var modalTemplate = _.template("<h3><%= title %></h3>" +
  "<p><%= content %></p>" +
  "<p><a href=<%=link %>>Watch this Ted Talk</a></p>"
);

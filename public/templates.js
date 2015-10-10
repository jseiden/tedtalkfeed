// template for an entry. contains title, contentSnippet, video link, and info link
var entryTemplate = _.template("<article>" +
  "<h4><%=title %></h4><p><%=contentSnippet %></p>" +
  "<span class='linkSpan'><a href=<%=link %>>Watch this Ted Talk</a></span>" +
  "<span class='moreInfoSpan'><a href='#modal' class='info'>More Info</a></span>" +
  "</article>"
);

// template for 'details view' info modal. contains title, content (i.e. larger snippet), video link again, data published, and cat(egory)
var modalTemplate = _.template("<h5><%= title %></h5>" +
  "<blockquote><%= content %></blockquote>" +
  "<p><a href=<%=link %>>Watch this Ted Talk</a></p>" +
  "<span class='dateSpan'>Posted on <% var date = new Date(publishedDate); print(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()) %></span>" +
  "<span class='categorySpan'>Cat: <%=categories %></span>"
);

var entryTemplate = _.template("<article>" +
  "<h4><%=title %></h4><p><%=contentSnippet %></p>" +
  "<span class='linkSpan'><a href=<%=link %>>Watch this Ted Talk</a></span>" +
  "<span class='moreInfoSpan'><a href='#modal' class='info'>More Info</a></span>" +
  "</article>"
);

var modalTemplate = _.template("<h5><%= title %></h5>" +
  "<blockquote><%= content %></blockquote>" +
  "<p><a href=<%=link %>>Watch this Ted Talk</a></p>" +
  "<span class='dateSpan'>Posted on <% var date = new Date(publishedDate); print(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()) %></span>" +
  "<span class='categorySpan'>Category: <%=categories %></span>"
);

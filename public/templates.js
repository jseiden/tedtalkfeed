var entryTemplate = _.template("<article><h3><%=title %></h3><p><%=contentSnippet %></p>" +
  "<h5><a href=<%=link %>>Watch this Ted Talk</a></h5>" +
  "<h5><a href='#modal'>More Info</a></h5>" +
  "</article>"
);

var modalTemplate = _.template("<h4><%= title %></h4>" +
  "<h5><a href=<%=link %>>Watch this Ted Talk</a></h5>" 
);

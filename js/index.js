$("document").ready(() => {
  // Get the ul that is the parent of courseName list

  let listCourses = $(
    '#block-region-side-post p:contains("Các khoá học của tôi")~ul'
  );

  listCourses.children().each((index, element) => {
    // get the a tag that contains the course's name
    let aTag = $(element).children().first().children().first();

    aTag.html(aTag.attr("title"));
  });
});

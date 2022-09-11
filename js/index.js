$("document").ready(() => {
  // Get the ul that is the parent of courseName list
  let listCourses = $(
    '#block-region-side-post p:contains("Các khoá học của tôi")~ul'
  );

  // Display in English page
  if (listCourses.children().length == 0) {
    listCourses = $('#block-region-side-post p:contains("My courses")~ul');
  }

  listCourses.children().each((index, element) => {
    // get the a tag that contains the course's name
    let aTag = $(element).children().first().children().first();

    aTag.html(aTag.attr("title"));
  });
});

/*
  Todo:
  1. Tạo giao diện cho pop up -> Có thể bật tắt chức năng
  2. Làm file README.md -> mô tả lại extension
  3. Up lên chrome.

*/

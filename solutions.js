// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];
// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('pages')[0];
document.getElementsByClassName('groups')[0];
// Exercise: Find all of the comments on the page.
document.getElementsByClassName('posts');
// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
var comments = document.getElementsByClassName('comments');
var lastCommentsIndex = comments.length - 1;
comments[lastCommentsIndex];
// Exercise: Find the fourth comment on the page.
document.getElementsByClassName('media-body')[6]
// Exercise: Find one of the ads in the sidebar and hide them.
var adUpdateForm = document.getElementsByClassName('ad-slot')[0];
adUpdateForm.style.visibility = "hidden";
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
var adUpdateForm = document.getElementsByClassName('ad-slot')[0];
adUpdateForm.style.visibility = "visible";
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var adUpdate = document.getElementsByClassName('ad-slot')[0];
var textArea = adUpdate.getElementsByTagName('img')[0];
textArea.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
var postArea = document.getElementsByClassName('post')[3];
var postElement = postArea.getElementsByClassName('media-body')[0];
var text = postElement.getElementsByTagName('p')[0];
text.innerHTML = 'HELLLLZZZZZZ YEEAAAAAAA!!';
// Exercise: Find the first post and add the .post-liked class to it.
var post = document.getElementsByClassName('post media')[0];
post.className = post.className + " post-liked"
// Exercise: Find the second post and remove the .post-liked class.
var post = document.getElementsByClassName('post media')[1];
post.classList.remove("post-liked");
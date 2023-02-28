const blogs = {
  "6353227688162363":["Surely this simple recursive function won't produce ridiculous results?",
   "A friend sent an image of this unassuming functional equation (calling it 'hell')<br>\
\\(f(x) = -x\\) for \(x<0\),<br>\
\\(\\frac{1}{2}*f(x-f(x-1))\\) otherwise,<br>\
find \\(f(3)\\).<br>\
My first thought was, since it is defined for negative numbers, let's find \\(f(0)\\), then \\(f(1)\\), then \\(f(2)\\), then \\(f(3)\\).<br>\
In essence this is what we will do. But let's just try doing it.<br>\
\\(f(0)=\\frac{1}{2}f(0-f(-1)) = \frac{1}{2}f(-1)=\frac{1}{2}\\)<br>\
Then f(1)...<br>\
\\(f(1)=\frac{1}{2}f(1-f(0))=\frac{1}{2}f(1/2)\\)<br>\
Oh, it looks like we need f(1/2) first.<br>\
\\(f(\frac{1}{2})=\frac{1}{2}f(\frac{1}{2}-f(-\frac{1}{2}))=\frac{1}{2}f({1}{2}-{1}{2})=\frac{1}{2}f(0)=\frac{1}{4}\\)<br>\
So \\(f(1)=\frac{1}{8}\\)."]


}
const urlPath = (new URL(window.location.href).search.substr(1))
window.onload = function() {
  if (urlPath === "") {
    let rhtml = "<h1>Blog</h1>";
    for (blog in blogs) {
      rhtml += "<a href='/blog?" + blog + "'>" + blogs[blog][0] + "</a>";
    }
    document.body.innerHTML += rhtml;
  } else if (blogs[1*urlPath]) {
    document.body.innerHTML += "<h1>" + blogs[1*urlPath][0] + "</h1>" + blogs[1*urlPath][1];
  } else {
    document.body.innerHTML = "Not found";
  }
}


document.addEventListener('load', function(){
    MathJax.typeset()
});

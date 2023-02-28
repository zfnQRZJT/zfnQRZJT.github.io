const blogs = {
  "6353227688162363":["Surely this simple recursive function won't produce ridiculous results?",
   "A friend sent an image of this unassuming functional equation (calling it 'hell')<br>\
$(f\left(x\right)=-x)$ for $(x<0)$,<br>\
$(\frac{1}{2}f\left(x-f\left(x-1\right)\right))$ otherwise,<br>\
find $(f\left(3\right))$.<br>\
My first thought was, since it is defined for negative numbers, let's find $(f\left(0\right))$, then $(f\left(1\right))$, then $(f\left(2\right))$, then $(f\left(3\right))$.<br>\
In essence this is what we will do. But let's just try doing it.<br>\
$(f\left(0\right)=\frac{1}{2}f\left(0-f\left(-1\right)\right)\ =\ \frac{1}{2}f\left(-1\right)=\frac{1}{2})$<br>\
Then f(1)...<br>\
$(f\left(1\right)=\frac{1}{2}f\left(1-f\left(0\right)\right)=\frac{1}{2}f\left(\frac{1}{2}\right))$<br>\
Oh, it looks like we need f(1/2) first.<br>\
$(f\left(\frac{1}{2}\right)=\frac{1}{2}f\left(\frac{1}{2}-f\left(-\frac{1}{2}\right)\right)=\frac{1}{2}f\left(\frac{1}{2}-\frac{1}{2}\right)=\frac{1}{2}f\left(0\right)=\frac{1}{4})$<br>\
So $(f\left(1\right)=\frac{1}{4})$."]


}
const urlPath = (new URL(window.location.href).pathname.substr(6))
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

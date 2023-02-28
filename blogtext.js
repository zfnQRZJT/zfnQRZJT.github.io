const blogs = {
  "6353227688162363":["Surely this simple recursive function won't return ridiculous results?",
"A friend sent an image of this unassuming functional equation (calling it \"hell\")<br>\
\\(f(x) = -x\\) for x < 0,<br>\
\\(\\frac{1}{2}f(x-f(x-1))\\) otherwise,<br>\
find \\(f(3)\\).<br><br><br>\
My first thought was, since it is defined for negative numbers, let's find \\(f(0)\\), then \\(f(1)\\), then \\(f(2)\\), then \\(f(3)\\).<br>\
In essence this is what we will do. But let's just try doing it.<br>\
\\(f(0)=\\frac{1}{2}f(0-f(-1)) = \\frac{1}{2}f(-1)=\\frac{1}{2}\\)<br><br>\
<b>Then f(1)...</b><br>\
\\(f(1)=\\frac{1}{2}f(1-f(0))=\\frac{1}{2}f(\\frac{1}{2})\\)<br>\
Oh, it looks like we need f(1/2) first.<br>\
\\(f(\\frac{1}{2})=\\frac{1}{2}f(\\frac{1}{2}-f(-\\frac{1}{2}))=\\frac{1}{2}f(\\frac{1}{2}-\\frac{1}{2})=\\frac{1}{2}f(0)=\\frac{1}{4}\\)<br>\
So \\(f(1)=\\frac{1}{2}\\frac{1}{4} = \\frac{1}{8}\\).<br><br>\
<b>Now f(2)...</b><br>\
\\(f(2) = \\frac{1}{2}f(2 - f(1)) = \\frac{1}{2}f(2 - \\frac{1}{8}) = \\frac{1}{2}f(\\frac{15}{8})\\)<br>\
First we need f(15/8).<br>\
\\(f(\\frac{15}{8}) = \\frac{1}{2}f(\\frac{15}{8} - f(\\frac{7}{8}))\\)<br>\
Now we need f(7/8).<br>\
\\(f(\\frac{7}{8}) = \\frac{1}{2}f(\\frac{7}{8} - f(\\frac{-1}{8})) = \\frac{1}{2}f(\\frac{7}{8} - \\frac{1}{8}) = \\frac{1}{2}f(\\frac{3}{4})\\)<br><br><br>\
Okay, I think this is taking too long. f(7/8) will be some tiny number from all the multiplications by 1/2, so f(15/8) will be half of f(x) where x is barely smaller than 15/8. It will take too long to get even f(2). So let's generalize.<br><br><br>\
<b>For 0 <= x < 1:</b><br>\
\\(f(x) = \\frac{1}{2}f(x - f(x - 1))\\) but x - 1 < 0 so<br>\
\\(f(x) = \\frac{1}{2}f(x - (1 - x)) = \\frac{1}{2}f(2x - 1)\\)<br><br>\
Let's try finding f(7/8) with this.<br>\
\\(f(\\frac{7}{8}) = \\frac{1}{2}f(\\frac{3}{4}) = \\frac{1}{4}f(\\frac{1}{2}) = \\frac{1}{8}f(0) = \\frac{1}{16}\\). Each time we double our distance from 1 the function attains a new multiplier of \\(\\frac{1}{2}\\). Based on this I'll declare this equation, verifiable with induction:<br>\
\\(f(1 - \\frac{1}{2^{x}}) = \\frac{1}{2^{x+1}}\\).<br><br>\
Now applying that:<br>\
\\(f(\\frac{15}{8}) = \\frac{1}{2}f(\\frac{15}{8} - \\frac{1}{16}) = \\frac{1}{2}f(\\frac{29}{16})\\)<br>\
Hm. We'll need f(13/16) for that. Let's generalize some more.<br><br>\
I'll leave it to you to prove that the function evaluated at a dyadic rational will always return a dyadic rational. I'm going to try to find \\(f(1 - \\frac{n}{2^{x}})\\) for n < \\(2^{x}\\), n odd.<br>\
Starting at \\(1 - \\frac{n}{2^{x}}\\) we double our distance from 1 multiple times. Each time we attain another multiplication by \\frac{1}{2}.<br>\
But how many times do we double our distance from 1 before the argument becomes negative?<br>\
Well, once n > 2^y the argument will be negative. In other words y < \\(\\log_{2}{n}\\), or specifically, y = \\(\\lfloor \\log_{2}{n} \\rfloor\\). I'll call this \\(L2(n)\\).<br><br>\
So with \\(f(1 - \\frac{n}{2^{x}})\\) we do this division x - y times to get \\(\\frac{1}{2^{x - y}}f(1 - \\frac{n}{2^{y}}) = \\frac{\\frac{n}{2^{y}} - 1}{2^{x - y}} = \\frac{n - 2^{y}}{2^{x}}\\).<br><br><br>\
Now let's find a closed form for \\(f(2 - \\frac{n}{2^{x}})\\).<br>\
\\(f(2 - \\frac{n}{2^{x}}) = \\frac{1}{2}f(2 - \\frac{n}{2^{x}} - \\frac{n - 2^{y}}{2^{x}} = \\frac{1}{2}f(2 - \\frac{2n - 2^{y}}{2^x})\\).<br><br>\
It may be difficult to understand what exactly the transformation inside the function is that gives a coefficient of 1/2 outside the function. In the range [0,1) it was easy to understand: 2x - 1 doubles the distance from 1. What is this one doing?<br>\
Let's look at some examples.<br>\
(I will ignore the \"2 -\" part for now)<br>\
\\(\\frac{141}{256} \\Rightarrow \\frac{154}{256} \\Rightarrow \\frac{180}{256} \\Rightarrow \\frac{232}{256} \\Rightarrow \\frac{336}{256} \\).<br><br>\
It's very unclear what this is doing. It finds the largest power of 2 less than n, then subtracts from 2n that power? It's easier to understand if I write it as n + n - 2^y. This is actually doubling n's distance from that power.<br><br>"/*
If n is a power of 2 this is actually easy. It will double the distance from n/2, leaving 3n/2, then it will double the distance from n, leaving 2n, and in general it will double every 2 steps. <br>\
Now here's where <b>writing n in binary</b> will be a lifesaver. Given some number, like 10100001, this transformation leaves the first digit untouched, and doubles all digits after it.<br><br>\
If n > 2^x/2 (as it is in the case of 141/256) it simply surpasses 2^x after 1 more than the number of 0's iterations. (Multiplying by 2 in binary moves a section of digits left 1 and adds a 0 at the end, just like multiplying by 10 works in base 10.) Let's write that as \\(y - L2(n - 2^{y})\\)<br><br>\
If n < 2^x/2 it is a bit more complicated. Let's write n in binary as 1 [a zeroes] 1...<br>\
After a doublings this will come to 11...<br>\*/+
"Understanding the truly amazing complexity of this transformation is critical for the solution of this problem. But we can actually simplify for now.<br>\
n starts as a power of 2, namely 1, in 2 - 1/8. In iteration 1 it will double the distance from n/2, giving 3n/2. Then it will double the distance from n, giving 2n. In general, it will double its distance from 2 every 2 steps, giving an additional multiplication of 1/4.<br>\
We know that \\(f(2) = \\frac{1}{2}f(15/8)\\). We can now see that this is \\(\\frac{1}{2}f(15/8) = \\frac{1}{8}f(14/8) = \\frac{1}{32}f(12/8) = \\frac{1}{128}f(8/8) = \\frac{1}{128}f(1) = \\frac{1}{128}\\frac{1}{8} = \\frac{1}{1024}\\).]<br>\
In general, \\(f(2 - \\frac{1}{2^{x}}) = \\frac{1}{2^{2x + 3}}\\).<br>\
<b>f(2) = 1/1024.</b><br><br><br>\
Now it's time for our final stand. \\(f(2) = \\frac{1}{1024}\\). \\(f(3) = \\frac{1}{2}f(3 - \\frac{1}{1024}) = \\frac{1}{2}f(\\frac{3071}{1024})\\). This will relate to \\(f(2 - 1/1024)\\)
}
const urlPath = (new URL(window.location.href).search.substr(1));
window.onload = function() {
  if (urlPath === "") {
    let rhtml = "<h1>Blog</h1>";
    for (blog in blogs) {
      rhtml += "<a href='/blog?" + blog + "'>" + blogs[blog][0] + "</a>";
    }
    document.querySelector(".section").innerHTML += rhtml;
  } else if (blogs[1*urlPath]) {
    document.querySelector(".section").innerHTML += "<h2 style='font-size:><u>" + blogs[1*urlPath][0] + "</u></h2>" + blogs[1*urlPath][1];
    setTimeout(function() {
      MathJax.typeset()
    },1000);
  } else {
    document.querySelector(".section").innerHTML = "Not found";
  }
}

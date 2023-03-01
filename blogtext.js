const blogs = {
  "6353227688162363":["Surely this simple recursive function won't return ridiculous results?",
"A friend sent an image of this unassuming functional equation (calling it \"hell\")<br>\
<m>f(x) = -x</m> for <m>x < 0</m>,<br>\
<m><frac><n>1</n><d>2</d></frac>f(x-f(x-1))</m> otherwise,<br>\
find <m>f(3)</m>.<br><br><br>\
My first thought was, since it is defined for negative numbers, let's find <m>f(0))</m>, then <m>f(1)</m>, then <m>f(2)</m>, then <m>f(3)</m>.<br>\
In essence this is what we will do. But let's just try doing it.<br>\
<m>f(0)=\\frac{1}{2}f(0-f(-1)) = \\frac{1}{2}f(-1)=\\frac{1}{2}</m><br><br>\
<b>Then f(1)...</b><br>\
<m>f(1)=\\frac{1}{2}f(1-f(0))=\\frac{1}{2}f(\\frac{1}{2})</m><br>\
Oh, it looks like we need f(1/2) first.<br>\
<m>f(\\frac{1}{2})=\\frac{1}{2}f(\\frac{1}{2}-f(-\\frac{1}{2}))=\\frac{1}{2}f(\\frac{1}{2}-\\frac{1}{2})=\\frac{1}{2}f(0)=\\frac{1}{4}</m><br>\
So <m>f(1)=\\frac{1}{2}\\frac{1}{4} = \\frac{1}{8}</m>.<br><br>\
<b>Now f(2)...</b><br>\
<m>f(2) = \\frac{1}{2}f(2 - f(1)) = \\frac{1}{2}f(2 - \\frac{1}{8}) = \\frac{1}{2}f(\\frac{15}{8})</m><br>\
First we need f(15/8).<br>\
<m>f(\\frac{15}{8}) = \\frac{1}{2}f(\\frac{15}{8} - f(\\frac{7}{8}))</m><br>\
Now we need f(7/8).<br>\
<m>f(\\frac{7}{8}) = \\frac{1}{2}f(\\frac{7}{8} - f(\\frac{-1}{8})) = \\frac{1}{2}f(\\frac{7}{8} - \\frac{1}{8}) = \\frac{1}{2}f(\\frac{3}{4})</m><br><br><br>\
Okay, I think this is taking too long. f(7/8) will be some tiny number from all the multiplications by 1/2, so f(15/8) will be half of f(x) where x is barely smaller than 15/8. It will take too long to get even f(2). So let's generalize.<br><br><br>\
<b>For 0 <= x < 1:</b><br>\
<m>f(x) = \\frac{1}{2}f(x - f(x - 1))</m> but x - 1 < 0 so<br>\
<m>f(x) = \\frac{1}{2}f(x - (1 - x)) = \\frac{1}{2}f(2x - 1)</m><br><br>\
Let's try finding f(7/8) with this.<br>\
<m>f(\\frac{7}{8}) = \\frac{1}{2}f(\\frac{3}{4}) = \\frac{1}{4}f(\\frac{1}{2}) = \\frac{1}{8}f(0) = \\frac{1}{16}</m>. Each time we double our distance from 1 the function attains a new multiplier of <m>\\frac{1}{2}</m>. Based on this I'll declare this equation, verifiable with induction:<br>\
<m>f(1 - \\frac{1}{2^{x}}) = \\frac{1}{2^{x+1}}</m>.<br><br>\
Now applying that:<br>\
<m>f(\\frac{15}{8}) = \\frac{1}{2}f(\\frac{15}{8} - \\frac{1}{16}) = \\frac{1}{2}f(\\frac{29}{16})</m><br>\
Hm. We'll need f(13/16) for that. Let's generalize some more.<br><br>\
I'll leave it to you to prove that the function evaluated at a dyadic rational will always return a dyadic rational. I'm going to try to find <m>f(1 - \\frac{n}{2^{x}})</m> for <m>n < 2^{x}</m>, n odd.<br>\
Starting at <m>1 - \\frac{n}{2^{x}}</m> we double our distance from 1 multiple times. Each time we attain another multiplication by \\frac{1}{2}.<br>\
But how many times do we double our distance from 1 before the argument becomes negative?<br>\
Well, once n > 2^y the argument will be negative. In other words y < <m>\\log_{2}{n}</m>, or specifically, y = <m>\\lfloor \\log_{2}{n} \\rfloor</m>. I'll call this <m>L2(n)</m>.<br><br>\
So with <m>f(1 - \\frac{n}{2^{x}})</m> we do this division x - y times to get <m>\\frac{1}{2^{x - y}}f(1 - \\frac{n}{2^{y}}) = \\frac{\\frac{n}{2^{y}} - 1}{2^{x - y}} = \\frac{n - 2^{y}}{2^{x}}</m>.<br><br><br>\
Now let's find a closed form for <m>f(2 - \\frac{n}{2^{x}})</m>.<br>\
<m>f(2 - \\frac{n}{2^{x}}) = \\frac{1}{2}f(2 - \\frac{n}{2^{x}} - \\frac{n - 2^{y}}{2^{x}} = \\frac{1}{2}f(2 - \\frac{2n - 2^{y}}{2^x})</m>.<br><br>\
It may be difficult to understand what exactly the transformation inside the function is that gives a coefficient of 1/2 outside the function. In the range [0,1) it was easy to understand: 2x - 1 doubles the distance from 1. What is this one doing?<br>\
Let's look at some examples.<br>\
(I will ignore the \"2 -\" part for now)<br>\
<m>\\frac{141}{256} \\Rightarrow \\frac{154}{256} \\Rightarrow \\frac{180}{256} \\Rightarrow \\frac{232}{256} \\Rightarrow \\frac{336}{256}</m>.<br><br>\
It's very unclear what this is doing. It finds the largest power of 2 less than n, then subtracts from 2n that power? It's easier to understand if I write it as n + n - 2^y. This is actually doubling n's distance from that power.<br><br>"/*
If n is a power of 2 this is actually easy. It will double the distance from n/2, leaving 3n/2, then it will double the distance from n, leaving 2n, and in general it will double every 2 steps. <br>\
Now here's where <b>writing n in binary</b> will be a lifesaver. Given some number, like 10100001, this transformation leaves the first digit untouched, and doubles all digits after it.<br><br>\
If n > 2^x/2 (as it is in the case of 141/256) it simply surpasses 2^x after 1 more than the number of 0's iterations. (Multiplying by 2 in binary moves a section of digits left 1 and adds a 0 at the end, just like multiplying by 10 works in base 10.) Let's write that as \\(y - L2(n - 2^{y})\\)<br><br>\
If n < 2^x/2 it is a bit more complicated. Let's write n in binary as 1 [a zeroes] 1...<br>\
After a doublings this will come to 11...<br>\*/+
"Understanding the truly amazing complexity of this transformation is critical for the solution of this problem. But we can actually simplify for now.<br>\
n starts as a power of 2, namely 1, in 2 - 1/8. In iteration 1 it will double the distance from n/2, giving 3n/2. Then it will double the distance from n, giving 2n. In general, it will double its distance from 2 every 2 steps, giving an additional multiplication of 1/4.<br>\
We know that <m>f(2) = \\frac{1}{2}f(15/8)</m>. We can now see that this is <m>\\frac{1}{2}f(15/8) = \\frac{1}{8}f(14/8) = \\frac{1}{32}f(12/8) = \\frac{1}{128}f(8/8) = \\frac{1}{128}f(1) = \\frac{1}{128}\\frac{1}{8} = \\frac{1}{1024}</m>.]<br>\
In general, <m>f(2 - \\frac{1}{2^{x}}) = \\frac{1}{2^{2x + 3}}</m>.<br>\
<b>f(2) = 1/1024.</b><br><br><br>\
Now it's time for our final stand. <m>f(2) = \\frac{1}{1024}</m>. <m>f(3) = \\frac{1}{2}f(3 - \\frac{1}{1024}) = \\frac{1}{2}f(\\frac{3071}{1024})</m>. This will relate to <m>f(2 - 1/1024) = \\frac{1}{2^{23}}</m><br>\
Take a moment to think about that. f(3) is half of <m>f(3 - \\frac{1}{1024})</m> which is half of <m>f(3 - \\frac{1}{1024} - \\frac{1}{8388608})</m>. See how many steps it will take to get down to f(2) again? We should expect the answer for f(3) to be on the order of <m>2^{-10 000 000}</m>.\
Let's try to figure that out. <b>We'll write it in binary.</b> It's <m>f(10.11111111101111111111) = f(11 - 0.00000000010000000000001).</m> When we double n's distance from the highest power of 2 less than n, we're really just doubling the digits after the first 1 in this small number. How many times does it take to get the small number above 1?<br>\
<m>0.00000000010000000000001 \\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow 0.0000000001001 \\Rightarrow 0.000000000101 \\Rightarrow 0.00000000011 \\Rightarrow 0.000000001 \\Rightarrow\\Rightarrow 0.00000001 \\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow\\Rightarrow 0.01 \\Rightarrow\\Rightarrow 0.1 \\Rightarrow\\Rightarrow 1</m><br>\
As you can see, it increases at a much greater rate when it is exactly a power of 2. If there is even 1 single 1 way after the 1st one, it has to bring that far-off 1 all the way to combine with the first 1 before it will get anywhere.<br><br>\
Let's standardize that idea. Given ordered set [a,b,c,d...] how long will it take for <m>1/2^{a} + 1/2^{b} + 1/2^{c}...</m> to surpass 1, and how much will it surpass by?<br>\
<i>This line of reasoning is arguably the critical piece of this entire problem. You can easily find f(2) manually. You cannot easily recurse millions of times to find f(3).</i><br><br><br>\
After b - a doublings, we get a new set S [a - 1, a - b + c, a - b + d...]<br>\
We just removed one of the 1s in the binary expansion simply to decrease a by 1. Call the number of elements in the set, t. So we will get a down to at most a - t + 1 through this method.<br>\
If a - t + 1 >= 0, in other words, if a >= t - 1, then the highest element, S[t] (starting from 1) will have taken S[t] - (a - t + 2) steps, so S[t] + t - a - 2 steps, plus an additional 2(a - t + 1) steps to reach 1. This totals S[t] + t - a - 2 + 2a - 2t + 2 = S[t] - t + a<br>\
If a - t + 1 < 0, in other words, if a < t - 1, then we will not use the highest element S[t]. We will in fact only use a elements of S after a to get all the way to 1.<br>\
"]
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

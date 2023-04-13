const half = "<frac><n>1</n><d>2</d></frac>";
const frac = function(n,d) {
  return("<frac><n>" + n + "</n><d>" + d + "</d></frac>");
}
const sum = function(start,end,fun) {
  return("<sum><sumtop>" + end + "</sumtop><sumsym>∑</sumsym><sumbot>" + start + "</sumbot></sum>");
}
const lfl = "<lfl></lfl>";
const rfl = "<rfl></rfl>";
const blogs = {
  "6353227688162363":["Surely this small, simple-seeming recursive relation won't return ridiculous results?",true,
`A friend sent an image of this unassuming functional equation (calling it "absolute hell")<br>\
<m>f(x) = -x</m> for <m>x < 0</m>,<br>
<m>${half}f(x-f(x-1))</m> otherwise,<br>
find <m>f(3)</m>.<hline></hline>
My first thought was, since it is defined for negative numbers, let's find <m>f(0)</m>, then <m>f(1)</m>, then <m>f(2)</m>, then <m>f(3)</m>.<br>\
In essence this is what we will do. But let's just try doing it.<br>
<m>f(0)=${half}f(0-f(-1)) = ${half}f(-1)=${half}</m><br><br>
<b>Then f(1)...</b><br>
<m>f(1)=${half}f(1-f(0))=${half}f(${half})</m><br>
Oh, it looks like we need f(1/2) first.<br>
<m>f(${half})=${half}f(${half}-f(-${half}))=${half}f(${half}-${half})=${half}f(0)=${frac(1,4)}</m><br>\
So <m>f(1)=${half}${frac(1,4)} = ${frac(1,8)}</m>.<br><br>
<b>Now f(2)...</b><br>
<m>f(2) = ${half}f(2 - f(1)) = ${half}f(2 - ${frac(1,8)}) = ${half}f(${frac(15,8)})</m><br>
First we need f(15/8).<br>
<m>f(${frac(15,8)}) = ${half}f(${frac(15,8)} - f(${frac(7,8)}))</m><br>\
Now we need f(7/8).<br>
<m>f(${frac(7,8)}) = ${half}f(${frac(7,8)} - f(${frac(-1,8)})) = ${half}f(${frac(7,8)} - ${frac(1,8)}) = ${half}f(${frac(3,4)})</m><br><br>\
Okay, I think this is taking too long. f(7/8) will be some tiny number from all the multiplications by 1/2, so f(15/8) will be half of f(x) where x is barely smaller than 15/8. It will take too long to get even f(2). So let's generalize.<hline></hline>\
<b>For <m>0 <= x < 1</m>:</b><br>
<m>f(x) = ${half}f(x - f(x - 1))</m> but <m>x - 1 < 0</m> so<br>
<m>f(x) = ${half}f(x - (1 - x)) = ${half}f(2x - 1)</m><br><br>
Let's try finding f(7/8) with this.<br>
<m>f(${frac(7,8)}) = ${half}f(${frac(3,4)}) = ${frac(1,4)}f(${frac(1,2)}) = ${frac(1,8)}f(0) = ${frac(1,16)}</m>. Each time we double our distance from 1 the function attains a new multiplier of <m>${half}</m>. Based on this I'll declare this equation, verifiable with induction:<br>\
<m>f(1 - ${frac(1,"2<s>x</s>")}) = ${frac(1,"2<s>x+1</s>")}</m>.<br><br>\
Now applying that:<br>\
<m>f(${frac(15,8)}) = ${half}f(${frac(15,8)} - ${frac(1,16)}) = ${half}f(${frac(29,16)})</m><br>
Hm. We'll need f(13/16) for that. Let's generalize some more.<br><br>
I'll leave it to you to prove that the function evaluated at a dyadic rational will always return a dyadic rational. I'm going to try to find <m>f(1 - ${frac("n","2<s>x</s>")})</m> for <m>n < 2<s>x</s></m>, n odd.<br>\
Starting at <m>1 - ${frac("n","2<s>x</s>")}</m> we double our distance from 1 multiple times. Each time we attain another multiplication by ${half}.<br>\
But how many times do we double our distance from 1 before the argument becomes negative?<br>\
Well, once <m>n > 2<s>y</s></m> the argument will be negative. In other words <m>y < log<u>2</u>n</m>, or specifically, y = <m>${lfl}log<u>2</u>n${rfl}</m>. I'll call this <m>L2(n)</m>.<br><br>
So with <m>f(1 - ${frac("n","2<s>x</s>")})</m> we do this division x - y times to get <m>${frac(1,"2<s>x - y</s>")}f(1 - ${frac("n","2<s>y</s>")}) = ${frac("n/2<s>y</s> - 1","2<s>x - y</s>")} = ${frac("n - 2<s>y</s>","2<s>x</s>")}</m>.<br><br>\
Now let's find a closed form for <m>f(2 - ${frac("n","2<s>x</s>")})</m>.<br>
<m>f(2 - ${frac("n","2<s>x</s>")}) = ${half}f(2 - ${frac("n","2<s>x</s>")} - ${frac("n - 2<s>y</s>","2<s>x</s>")}) = ${half}f(2 - ${frac("2n - 2<s>y</s>","2<s>x</s>")})</m>.<br><br>
It may be difficult to understand what exactly the transformation inside the function is that gives a coefficient of 1/2 outside the function. In the range <m>[0,1)</m> it was easy to understand: 2x - 1 doubles the distance from 1. What is this one doing?<br>\
It finds the largest power of 2 less than n, then subtracts from 2n that power? It's easier to understand if I write it as n + n - 2^y. This is actually doubling n's distance from that power.<br><br>`
/*Let's look at some examples.<br>
(I will ignore the "2 -" part for now)<br>
<m>141}{256} \\Rightarrow \\frac{154}{256} \\Rightarrow \\frac{180}{256} \\Rightarrow \\frac{232}{256} \\Rightarrow \\frac{336}{256}</m>.<br><br>
It's very unclear what this is doing."/*
If n is a power of 2 this is actually easy. It will double the distance from n/2, leaving 3n/2, then it will double the distance from n, leaving 2n, and in general it will double every 2 steps. <br>
Now here's where <b>writing n in binary</b> will be a lifesaver. Given some number, like 10100001, this transformation leaves the first digit untouched, and doubles all digits after it.<br><br>
If <m>n > 2^x/2 (as it is in the case of 141/256) it simply surpasses 2^x after 1 more than the number of 0's iterations. (Multiplying by 2 in binary moves a section of digits left 1 and adds a 0 at the end, just like multiplying by 10 works in base 10.) Let's write that as <m>y - L2(n - 2<s>y</s>)</m><br><br>\
If n < 2^x/2 it is a bit more complicated. Let's write n in binary as 1 [a zeroes] 1...<br>
After a doublings this will come to 11...<br>*/+
`Understanding the truly amazing complexity of this transformation is critical for the solution of this problem. But we can actually simplify for now.<br>
n starts as a power of 2, namely 1, in 2 - 1/8. In iteration 1 it will double the distance from n/2, giving 3n/2. Then it will double the distance from n, giving 2n. In general, it will double its distance from 2 every 2 steps, giving an additional multiplication of 1/4.<br>
We know that <m>f(2) = ${half}f(${frac(15,8)})</m>. We can now see that this is <m>${frac(1,8)}f(${frac(14,8)}) = ${frac(1,32)}f(${frac(12,8)}) = ${frac(1,128)}f(${frac(8,8)}) = ${frac(1,128)}f(1) = ${frac(1,128)}${frac(1,8)} = ${frac(1,1024)}</m>.<br>
In general, <m>f(2 - ${frac(1,"2<s>x</s>")}) = ${frac(1,"2<s>2x + 3</s>")}</m>.<br>
<b><m>f(2) = ${frac(1,1024)}.</m></b><hline></hline>
Now it's time for our final stand. <m>f(2) = ${frac(1,1024)}</m>. <m>f(3) = ${half}f(3 - ${frac(1,1024)})</m>. This will relate to <m>f(2 - ${frac(1,1024)}) = ${frac(1,"2<s>23</s>")}</m><br>
Take a moment to think about that. f(3) is a fourth of <m>f(3 - ${frac(1,1024)} - ${frac(1,8388608)})</m>. See how many steps it will take to get down to f(2) again? We should expect the answer for f(3) to be on the order of <m>2<s>-10 000 000</s></m>.
Let's try to figure that out. <b>We'll write it in binary.</b> It's <m>f(10.11111111101111111111) = f(11 - 0.00000000010000000000001).</m> When we double n's distance from the highest power of 2 less than n, we're really just doubling the digits after the first 1 in this small number. How many times does it take to get the small number above 1?<br>\
<m>0.00000000010000000000001 => => => => => => => => => => => => 0.00000000011 => 0.000000001 => => => => => => => => => => => => => => => => 0.1 => => 1</m><br><br>
As you can see, it increases at a much greater rate when it is exactly a power of 2. If there is even a single 1 way after the first 1, it has to bring the far-off 1 all the way to combine with the first 1 before it will get anywhere.<hline></hline>
Let's standardize that idea. I'll use the notation S = [a,b,c,d...] to mean <m>${frac(1,"2<s>a</s>")} + ${frac(1,"2<s>b</s>")} + ${frac(1,"2<s>c</s>")}...</m>. How long will it take this to surpass 1, and how much will it surpass by?<br>
<u><i>This line of reasoning is arguably the critical piece of this entire problem. You can easily find f(2) manually. You cannot easily recurse millions of times to find f(3).</i></u><br><br>
After b - a doublings, we get a new set S = [a - 1, a - b + c, a - b + d...]<br>
We just removed one of the 1s in the binary expansion simply to decrease a by 1. Call the number of elements in the set, t. So we will get a down to at most a - t + 1 through this method.<br><br>
<b>If a - t + 1 >= 0</b>, in other words, if a >= t - 1, then the highest element, S[t] (starting from 1) will have taken S[t] - (a - t + 2) steps, so S[t] + t - a - 2 steps, plus an additional 2(a - t + 1) steps to reach 1. This totals <m>S[t] + t - a - 2 + 2a - 2t + 2 = S[t] - t + a steps, each multiplying the function by 1/2. The number is subtracted from 2 so this leaves us with 1, which we know is ${frac(1,8)}</m>.<br>
So <m>f(2 - S) = ${frac(1,"2<s>S[t] - t + a + 3</s>")}</m><br>
<b>If a - t + 1 = -1</b>, if a = t - 2, then we will not use the highest element S[t]. We'll get 1.00...001. How many 0s? Well, on the previous step it was 0.1100...001. There are S[t] - S[t - 1] - 1 0s there. The final doubling adds 1 more 0 to this, giving S[t] - S[t - 1]. So the number 1.00...001 = [0,S[t] - S[t - 1] + 1], with S[t - 1] - 1 halvings. <m>f(2 - 1 - ${frac(1,"2<s>S[t] - S[t - 1] + 1</s>")}) = f(1 - ${frac(1,"2<s>S[t] - S[t - 1] + 1</s>")}) = ${frac(1,"2<s>S[t] - S[t - 1] + 2</s>")}</m>.<br>
So <m>f(2 - S) = ${frac(1,"2<s>S[t] - S[t - 1] + 2</s>")}${frac(1,"2<s>S[t - 1] - 1</s>")} = ${frac(1,"2<s>S[t] + 1</s>")}</m>.<br>
<b>If a - t + 1 <= -2</b>, if a <= t - 3, we'll get 2 - 1.00...001... . This will become 1 - 0.00...001wxyz.., which will become -0.wxyz... As long as wxyz... is nonzero, this is 0.wxyz... Now, what will this come out to?<br>
We will use up to element S[a + 1] to move a down to 0. S[a + 1] will have to move down to 1, where it will add to the a (also 1) and make a 0. This will take S[a + 1] - 1 steps. The number has now entered the (0,1) range. S[a + 2] must make a total (including the first section) of S[a + 2] steps to become 0. Since it is subtracted from 1 we can now write the full argument of the function as 1 - [0,S[a + 3] - S[a+2]...] = -[S[a + 3] - S[a+2]...] which took S[a + 2] steps.
In summary, <m>f(2 - S) = [S[a + 3],...]</m>.<br><br>
Do you see what that means?
Every list that results from applying the function to S is added to S. Why? Well, it's f(3 - S) = 1/2f(3 - S - f(2 - S)) = 1/4f(3 - S - f(2 - S) - f(2 - S - f(2 - S))). Our real end goal is to find out how many times we will repeat this process, to find <m>f(3 - ${frac(1,1024)})</m>. But that's later.
I'm going to show that if a > t - 3 the answer will be an element not already in S.<br><br>
If a >= t - 1 the new element is [S[t] - t + a + 3].<br>
S[t] - t + a + 3 > S[t]<br>
a + 3 > t<br>
a > t - 3<br>
But a > t - 2 because a >= t - 1, so this is true.<br>
If a = t - 2 the new element is [S[t] + 1] which is clearly not in S (S[t] is the greatest element).<br>
So if t is too small we will keep adding a new element to the set. When a = t - 2 the new element will be the direct successor of the previous element. This will be the tipping point, meaning that the only way to get into the 3rd scenario is when a = t - 3. At this point the new element added will be equal to the last element added.<hline></hline>
Alright, time to try it out.<br>
[10, 23] a = 10, t = 2<br>
[10, 23, 34] t = 3<br>
[10, 23, 34, 44] t = 4<br>
At this point you can see the pattern. The increase in the new element from S[t] is decreasing by 1 every step because t is increasing and nothing else is changing.<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86] t = 11<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 88] t = 12<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 88, 89] t = 13<br>
At this point the math tells us to add an 89 to the set. We know this is actually a binary number, 0.00000000010000000000001000000000010000000001000000001000000010000001000001000010001001011, and we need to add a <m>2<s>-89</s></m> to it.<br>
So what are we left with?<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 87] t = 12<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 87, 88] t = 13<br>
It's tempting to just do it manually but let's try to figure out exactly how many iterations this will take to get to a = 9. It took 2 steps to move the recent chain of 1s left by 1.
We are making progress.
To get to a = 9 we will need to get S to be [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] because the only duplicate element that can be added is when t = 13.
You can now intuitively see that this will take a really long time, just for a = 10 to a = 9 - then it will have to get to a = 8, etc.
So how long does it take to decrease a by 1? Well, you have to decrease S[2] by S[2] - S[1]. To do that you need to decrease S[3] by (S[3] - S[2]), S[2] - S[1] times. Know what this is? This is multiplication. We're basically going to take the product of the gaps between numbers.<br><br>
Let's just confirm this.<br>
It seems like we're multiplying the gaps but we also have to add 1 every time to generate a new next element. [A][B][C][D] has to take 1 step just to make a [E]; [E] will then decrease until it becomes [D] and then [D] will decrease by 1.<br>
So, if #(N) is number of steps for N, #(N - 1) = 1 + #(N)*gap.<br>
We will get 1 + gap1(1 + gap2(1 + gap3....))) = #(1). Expanding out, the answer will be something like this<br>
<img src="/fusiblegapsumproduct.png"><br><br>
Time to test it out, with an actual possible set.
Start with a = 2. By <m>f(2 - ${frac(1,"2<s>x</s>")}) = ${frac(1,"2<s>2x + 3</s>")}</m>, next element is 7. Then we can apply the iteration.<br>
[2] after 0 steps<br>
[2, 7] after 1 step<br>
[2, 7, 10, 12, 13] after 4 steps<br>
[2, 7, 10, 11, 12] after 6 steps<br>
[2, 7, 9, 11, 12] after 9 steps<br>
[2, 7, 9, 10, 11] after 11 steps<br>
[2, 7, 8] after 12 steps<br>
[2, 7, 8, 10, 11] after 14 steps<br>
[2, 7, 8, 9, 10] after 16 steps<br>
[2, 6] after 17 steps<br>
It took 16 steps to get from [2, 7] to [2, 6]<br>
[2, 5] after 33 steps<br>
[2, 4] after 49 steps<br>
[2, 3] after 65 steps<br>
[1] after 81 steps<br>
Is 81 correct? Well, gaps are 5, 3, 2, 1 so we should get 1 + 5 + 5*3 + 5*3*2 + 5*3*2*1 = 81. So yes, this formula works. And we can finally get the answer.<hline></hline>
So, we start at 3 - []. After one step this becomes 3 - [10]. How many steps does it take for 10 to become 9?<br>
1 + (13)(1 + 11 + 11*10 + 11*10*9 + ... + 11!)<br>
Then how many steps to get to 3 - [8]?<br>
1 + (12)(1 + 10 + 10*9 + 10*9*8 + .. 10!)<br>
You can see the pattern. Eventually we will get down to 3 - [1], which after 1 + 4(2 + 2 + 1) steps will reach 3 - [0] = 2. We know f(2) is ${frac(1,1024)}. We just need to compute this sum:<br>
<img src="/fusibleanswersum.png"><br>
I actually did this by hand without a calculator in class (you know, for fun, and I wanted to do this whole problem with no calculator):<br>
<img src="/fusiblezfnswork.png"><br>
Therefore<br><br>
<h2 style='font-size:30px;'><b><m>f(3) = 2<s>-1541023937</s></m></b></h2><br>
And that's the answer.<hline></hline>
Now for f(4)...
`],
  "381603815512885":["Mathjax update",true,"This is going to be a short blogpost but I have an update on the state of math in this blog.<br><br>\
Math is now fixed!!<br><br>\
The first blogpost will remain the only one not to use MathJax, which, for those who don't know, is a way to easily write LaTeX on websites and the MathJax robot will convert it into beautiful symbols.<br>\
Like Desmos. Except better in some ways and worse in others.<br><br>\
On the Find f(3) post I created my own semi-working system to embed math, although the only thing I really got to was fractions. Everything else (sums, etc) was too hard.<br><br>\
That leaves the question, why didn't I use MathJax?<br>\
Well, as a matter of fact, I did try it, but it looked HORRIBLE. Like this<br>\
<img src='/horriblemathjax.png'><br>\
It turns out this was caused by one css rule I've put for a long time in the <code>* {}</code> block:<br><br>\
<code>* {<br>&nbsp;&nbsp;vertical-align:top;<br>}</code><br><br>\
This just means the position of an element is the top of the bounding box. The default is vertical-align:baseline, which I don't know or care to find out the meaning of (and no, it's not the bottom), but which I am convicted is entirely illogical. The top should be the position.<br><br>\
In any case I figured out that if I removed that rule MathJax worked properly. I had to fix a few goofy design failures due to the change but now I will be able to embed sums and stuff in text.<br><br>\
I'll see you next time."],
  "24985796172591412":["The sum of rational series",false,`Differential calculus, which is the study of functions and the rate that they change, is universally considered hard. Limits and full differentiation and integrals oh my. In particular finding integrals and antiderivatives seems like a very unfun puzzle. But you may be surprised to learn that typically the humble sumble is more difficult.<br>
    \\[\\sum_{n=1}^{\\infty}\\frac{1}{n^2}\\]
    The famous Basel problem. Its value is \\(\\frac{\\pi^2}{6}\\). If you exchange the \\(n^2\\) for \\(n^3\\) you get a number very little is known about.
    \\[\\sum_{n=1}^{N}n^{e}\\]
    Good luck finding the induction here. I'll be attacking this sum later in the post.
    \\[\\sum_{n=1}^{\\infty}\\frac{\\tan(n)}{n^{4}}\\]
    Wolfram|Alpha says it diverges. Are you convinced?
    \\[\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}{3n-1}\\]
    A delectable morsel of mathematics.
    <hline></hline>
    So why are these hard? The simple answer is that they just are. This is the way the cookie crumbles. To some extent I think the reason is that continuity is smooth, while series, if you see them as area under a step function, have jagged edges that are hard to deal with. Or maybe it's that people care more about integration and emphasize techniques to do it when equally good techniques exist for series. In any case, our goal will be to transform a series into an integral. Let's begin.<br><br>
    I'll start with this well-known series.
    \\[\\sum_{n=1}^{\\infty}\\frac{1}{n}\\]
    We know this is infinity. Can we use calculus to prove it?<br>
    Here's the key insight.
    \\[\\frac{1}{1} + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} ... = \\frac{1^1}{1} + \\frac{1^2}{2} + \\frac{1^3}{3} + \\frac{1^4}{4} ... = f(1) - f(0), f(x) = \\frac{x^1}{1} + \\frac{x^2}{2} + \\frac{x^3}{3} + \\frac{x^4}{4} ...\\]
    Now we will take the derivative with the power rule.
    \\[f'(x) = \\frac{1x^0}{1} + \\frac{2x^1}{2} + \\frac{3x^2}{3} + \\frac{4x^3}{4} ... = 1 + x + x^2 + x^3 ... = \\frac{1}{1 - x}, x\\neq1\\]
    We are allowed to make that substitution because on all but one point of the domain, \\(|x| < 1\\).
    \\[f'(x) = \\frac{1}{1-x}\\Longrightarrow\\sum_{n=1}^{\\infty}\\frac{1}{n}=\\lim_{a\\rightarrow1^-}\\int_{0}^{a}\\frac{1}{1-x}dx\\]
    There we have it. The sum becomes an integral. It's actually simple to find:
    \\[u = 1 - x\\]\\[\\lim_{a\\rightarrow0^+}\\int_{a}^{1}\\frac{1}{u}du=\\lim_{a\\rightarrow0^+}\\ln(x)\\Big|_{\\small{a}}^{\\small1}=-\\lim_{a\\rightarrow0^+}\\ln(a)=\\infty\\]
    We can use a similar technique for \\(\\sum_{n=1}^{\\infty}\\frac{(-1)^n}{n}\\)
    \\[\\frac{1}{1} - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} ... = \\frac{x^1}{1} - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4}\\Big|_{\\small0}^{\\small1}=\\int_{0}{1}\\Big(\\frac{1x^0}{1}-\\frac{2x^1}{2}+\\frac{3x^2}{3}-\\frac{4x^3}{4}...\\Big)dx=\\int_{0}^{1}\\frac{1}{1+x}dx=\\ln(1+x)\\Big|_{\\small0}^{\\small1}=\\ln(2)\\]
    As a last fun exercise before the big explosion let's do this.
    \\[\\sum_{n=1}^{\\infty}\\frac{(-1)^{n}}{3n-1}\\]
    The answer is below.
    <button class="spoiler" onclick="spoil(this)">
    \\[f(x) = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^{3n-1}}{3n-1}, f(1) = \\int_{0}^{1}f'(x)dx\\]
    \\[= \\int_{0}^{1}\\sum_{n=1}^{\\infty}(-1)^{n-1}x^{3n-2}dx = \\int_{0}^{1}x*\\sum_{n=0}^{\\infty}(-x^3)^n dx = \\int_{0}{1}\\frac{x}{(x+1)(x^2-x+1)}dx\\]
    </button>`]
}
const urlPath = (new URL(window.location.href).search.substr(1));
window.onload = function() {
  if (urlPath === "") {
    let rhtml = "<h1>Blog</h1>";
    for (blog in blogs) {
      if (blogs[blog][1]) {
        rhtml += "<div class='blogbox'><a class='bloglink' href='/blog?" + blog + "'>" + blogs[blog][0] + "</a>" + blogs[blog][2].replaceAll("\\(","[mathstart]").replaceAll("\\)","[mathend]") + "</div>";
      }
    }
    document.querySelector(".section").innerHTML += rhtml;
  } else if (blogs[1*urlPath]) {
    document.title = blogs[1*urlPath][0];
    document.querySelector(".section").innerHTML += "<h2 style='font-size:30px;'><u>" + blogs[1*urlPath][0] + "</u></h2>" + blogs[1*urlPath][2];
    setTimeout(function() {
      MathJax.typeset()
    },1000);
  } else {
    document.querySelector(".section").innerHTML = "Not found";
  }
}
const spoil = function(e) {
  e.className = "spoiled";
  e.style.pointerEvents = "none";
}

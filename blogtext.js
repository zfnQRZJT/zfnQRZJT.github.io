const half = "\\frac{1}{2}";
const frac = function(n,d) {
  return("\\frac{" + n + "}{" + d + "}");
}
const sum = function(start,end,fun) {
  return("<sum><sumtop>" + end + "</sumtop><sumsym>∑</sumsym><sumbot>" + start + "</sumbot></sum>");
}
const lfl = "<lfl></lfl>";
const rfl = "<rfl></rfl>";
const blogs = {
  "6353227688162363":["Surely this small, simple-seeming recursive relation won't return ridiculous results?",true,
`A friend sent an image of this unassuming functional equation (calling it "absolute hell")<br>\
\\(f(x) = -x\\) for \\(x < 0\\),<br>
\\(\\frac{1}{2}f(x-f(x-1))\\) otherwise,<br>
find \\(f(3)\\).<hline></hline>
My first thought was, since it is defined for negative numbers, let's find \\(f(0)\\), then \\(f(1)\\), then \\(f(2)\\), then \\(f(3)\\).<br>\
In essence this is what we will do. But let's just try doing it.<br>
\\[f(0)=\\frac{1}{2}f(0-f(-1)) = \\frac{1}{2}f(-1)=\\frac{1}{2}\\]<br>
<b>Then f(1)...</b><br>
\\[f(1)=\\frac{1}{2}f(1-f(0))=\\frac{1}{2}f\\left(\\frac{1}{2}\\right)\\]
Oh, it looks like we need f(1/2) first.<br>
\\[f\\left(\\frac{1}{2}\\right)=\\frac{1}{2}f\\left(\\frac{1}{2}-f\\left(-\\frac{1}{2}\\right)\\right)=\\frac{1}{2}f\\left(\\frac{1}{2}-\\frac{1}{2}\\right)=\\frac{1}{2}f(0)=\\frac{1}{4}\\]<br>\
So \\(f(1)=\\frac{1}{2}\\frac{1}{4} = \\frac{1}{8}\\).<br><br>
<b>Now f(2)...</b><br>
\\[f(2) = \\frac{1}{2}f(2 - f(1)) = \\frac{1}{2}f\\left(2 - \\frac{1}{8}\\right) = \\frac{1}{2}f\\left(\\frac{15}{8}\\right)\\]
First we need f(15/8).<br>
\\[f\\left(\\frac{15}{8}\\right) = \\frac{1}{2}f\\left(\\frac{15}{8} - f\\left(\\frac{7}{8}\\right)\\right)\\]\
Now we need f(7/8).<br>
\\[f\\left(\\frac{7}{8}\\right) = \\frac{1}{2}f\\left(\\frac{7}{8} - f\\left(\\frac{-1}{8}\\right)\\right) = \\frac{1}{2}f\\left(\\frac{7}{8} - \\frac{1}{8}\\right) = \\frac{1}{2}f\\left(\\frac{3}{4}\\right)\\]<br><br>\
Okay, I think this is taking too long. f(7/8) will be some tiny number from all the multiplications by 1/2, so f(15/8) will be half of f(x) where x is barely smaller than 15/8. It will take too long to get even f(2). So let's generalize.<hline></hline>\
<b>For \\(0 \\leq x < 1\\):</b><br>
\\(f(x) = \\frac{1}{2}f(x - f(x - 1))\\) but \\(x - 1 < 0\\) so<br>
\\[f(x) = \\frac{1}{2}f(x - (1 - x)) = \\frac{1}{2}f(2x - 1)\\]<br><br>
Let's try finding f(7/8) with this.<br>
\\(f\\left(\\frac{7}{8}\\right) = \\frac{1}{2}f\\left(\\frac{3}{4}\\right) = \\frac{1}{4}f\\left(\\frac{1}{2}\\right) = \\frac{1}{8}f(0) = \\frac{1}{16}\\). Each time we double our distance from 1 the function attains a new multiplier of 1/2. Based on this I'll declare this equation, verifiable with induction:<br>\
\\[f\\left(1 - \\frac{1}{2^x}\\right) = \\frac{1}{2^{x+1}}\\]<br>\
Now applying that:<br>\
\\[f\\left(\\frac{15}{8}\\right) = \\frac{1}{2}f\\left(\\frac{15}{8} - \\frac{1}{16}\\right) = \\frac{1}{2}f\\left(\\frac{29}{16}\\right)\\]
Hm. We'll need f(13/16) for that. Let's generalize some more.<br><br>
I'll leave it to you to prove that the function evaluated at a dyadic rational will always return a dyadic rational. I'm going to try to find \\(f\\left(1 - \\frac{n}{2^x}\\right)\\) for \\(n < 2^x\\), \\(n\\) odd.<br>\
Starting at \\(1 - \\frac{n}{2^x}\\) we double our distance from 1 multiple times. Each time we attain another multiplication by \\(\\frac{1}{2}\\).<br>\
But how many times do we double our distance from 1 before the argument becomes negative?<br>\
Well, once \\(n > 2^y\\) the argument will be negative. In other words \\(y < \\log_2 n\\), or specifically, \\(y = \\lfloor \\log_2 \\rfloor\\).<br><br>
So with \\(f\\left(1 - \\frac{n}{2^x}\\right)\\) we do this division \\(x - y\\) times to get \\(\\frac{1}{2^{x-y}}f\\left(1 - \\frac{n}{2^y}\\right) = \\frac{n/2^y - 1}{2^{x-y}} = \\frac{n - 2^y}{2^x}\\).<br><br>\
Now let's find a closed form for \\(f\\left(2 - \\frac{n}{2^x}\\right)\\).<br>
\\[f\\left(2 - \\frac{n}{2^x}\\right) = \\frac{1}{2}f\\left(2 - \\frac{n}{2^x} - \\frac{n - 2^y}{2^x}\\right) = \\frac{1}{2}f\\left(2 - \\frac{2n - 2^y}{2^x}\\right)\\]<br><br>
It may be difficult to understand what exactly the transformation inside the function is that gives a coefficient of 1/2 outside the function. In the range <m>[0,1)</m> it was easy to understand: 2x - 1 doubles the distance from 1. What is this one doing?<br>\
It finds the largest power of 2 less than n, then subtracts from 2n that power? It's easier to understand if I write it as \\(n + n - 2^y\\). This is actually doubling \\(n\\)'s distance from that power.<br><br>`
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
We know that \\(f(2) = \\frac{1}{2}f\\left(${frac(15,8)}\\right)\\). We can now see that this is \\(${frac(1,8)}f\\left(${frac(14,8)}\\right) = ${frac(1,32)}f\\left(${frac(12,8)}\\right) = ${frac(1,128)}f\\left(${frac(8,8)}\\right) = ${frac(1,128)}f(1) = ${frac(1,128)}${frac(1,8)} = ${frac(1,1024)}\\).<br>
In general, \\(f\\left(2 - \\frac{1}{2^x}\\right) = \\frac{1}{2^{2x+3}}\\).<br>
\\(\\mathbf{f(2) = ${frac(1,1024)}}.\\)</b><hline></hline>
Now it's time for our final stand. \\(f(2) = ${frac(1,1024)}\\). \\(f(3) = ${half}f\\left(3 - ${frac(1,1024)}\\right)\\). This will relate to \\(f\\left(2 - \\frac{1}{1024}\\right) = \\frac{1}{2^{23}}\\)<br>
Take a moment to think about that. f(3) is a fourth of \\(f\\left(3 - ${frac(1,1024)} - ${frac(1,8388608)}\\right)\\). See how many steps it will take to get down to f(2) again? We should expect the answer for f(3) to be on the order of \\(2^{-10 000 000}\\).
Let's try to figure that out. <b>We'll write it in binary.</b> It's \\(f(10.11111111101111111111) = f(11 - 0.00000000010000000000001)\\). When we double n's distance from the highest power of 2 less than n, we're really just doubling the digits after the first 1 in this small number. How many times does it take to get the small number above 1?<br>\
\\(0.00000000010000000000001 \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to 0.00000000011 \\to 0.000000001 \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to \\to 0.1 \\to \\to 1\\)<br><br>
As you can see, it increases at a much greater rate when it is exactly a power of 2. If there is even a single 1 way after the first 1, it has to bring the far-off 1 all the way to combine with the first 1 before it will get anywhere.<hline></hline>
Let's standardize that idea. I'll use the notation \\(S = [a,b,c,d...]\\) to mean \\(${frac(1,"2^a")} + ${frac(1,"2^b")} + ${frac(1,"2^c")}...\\). How long will it take this to surpass 1, and how much will it surpass by?<br>
<u><i>This line of reasoning is arguably the critical piece of this entire problem. You can easily find f(2) manually. You cannot easily recurse millions of times to find f(3).</i></u><br><br>
After \\(b - a\\) doublings, we get a new set \\(S = [a - 1, a - b + c, a - b + d...]\\)<br>
We just removed one of the 1s in the binary expansion simply to decrease \\(a\\) by \\(1\\). Call the number of elements in the set \\(t\\). So we will get \\(a\\) down to at most \\(a - t + 1\\) through this method.<br><br>
<b>If \\(\\mathbf{a - t + 1 \\geq 0}\\)</b>, in other words, if \\(a \\geq t - 1\\), then the highest element, \\(S[t]\\) (starting from 1) will have taken \\(S[t] - (a - t + 2)\\) steps, so \\(S[t] + t - a - 2\\) steps, plus an additional \\(2(a - t + 1)\\) steps to reach 1. This totals \\(S[t] + t - a - 2 + 2a - 2t + 2 = S[t] - t + a\\) steps, each multiplying the function by 1/2. The number is subtracted from 2 so this leaves us with 1, which we know is \\(${frac(1,8)}\\).<br>
So \\(f(2 - S) = \\frac{1}{2^{S[t] - t + a + 3}}\\)<br>
<b>If \\(\\mathbf{a - t + 1 = -1}\\)</b>, if \\(a = t - 2\\), then we will not use the highest element \\(S[t]\\). We'll get 1.00...001. How many 0s? Well, on the previous step it was 0.1100...001. There are \\(S[t] - S[t - 1] - 1\\) 0s there. The final doubling adds 1 more 0 to this, giving \\(S[t] - S[t - 1]\\). So the number 1.00...001 = \\([0,S[t] - S[t - 1] + 1], with S[t - 1] - 1\\) halvings. \\(f\\left(2 - 1 - \\frac{1}{2^{S[t] - S[t - 1] + 1}}\\right) = f\\left(1 - \\frac{1}{2^{S[t] - S[t - 1] + 1}}\\right) = \\frac{1}{2^{S[t] - S[t - 1] + 2}}\\).<br>
So \\(f(2 - S) = \\frac{1}{2^{S[t] - S[t - 1] + 2}}\\frac{1}{2^{S[t - 1] - 1}} = \\frac{1}{2^{S[t] + 1}}\\).<br>
<b>If \\(\\mathbf{a - t + 1 \\leq -2}\\)</b>, if \\(a \\leq t - 3\\), we'll get 2 - 1.00...001... . This will become 1 - 0.00...001wxyz.., which will become -0.wxyz... As long as wxyz... is nonzero, this is 0.wxyz... Now, what will this come out to?<br>
We will use up to element \\(S[a + 1]\\) to move a down to 0. \\(S[a + 1]\\) will have to move down to 1, where it will add to the a (also 1) and make a 0. This will take \\(S[a + 1] - 1\\) steps. The number has now entered the \\((0,1)\\) range. \\(S[a + 2]\\) must make a total (including the first section) of \\(S[a + 2]\\) steps to become 0. Since it is subtracted from 1 we can now write the full argument of the function as \\(1 - [0,S[a + 3] - S[a+2]...] = -[S[a + 3] - S[a+2]...]\\) which took \\(S[a + 2]\\) steps.
In summary, \\(f(2 - S) = [S[a + 3],...]\\).<br><br>
Do you see what that means?
Every list that results from applying the function to S is added to S. Why? Well, it's \\(f(3 - S) = \\frac{1}{2}f(3 - S - f(2 - S)) = \\frac{1}{4}f(3 - S - f(2 - S) - f(2 - S - f(2 - S)))\\). Our real end goal is to find out how many times we will repeat this process, to find \\(f\\left(3 - ${frac(1,1024)}\\right)\\). But that's later.
I'm going to show that if \\(a > t - 3\\) the answer will be an element not already in S.<br><br>
If \\(a \\geq t - 1\\) the new element is \\([S[t] - t + a + 3]\\).<br>
\\(S[t] - t + a + 3 > S[t]\\)<br>
\\(a + 3 > t\\)<br>
\\(a > t - 3\\)<br>
But \\(a > t - 2\\) because \\(a \\geq t - 1\\), so this is true.<br>
If \\(a = t - 2\\) the new element is \\([S[t] + 1]\\) which is clearly not in \\(S\\) (\\(S[t]\\) is the greatest element).<br>
So if \\(t\\) is too small we will keep adding a new element to the set. When \\(a = t - 2\\) the new element will be the direct successor of the previous element. This will be the tipping point, meaning that the only way to get into the 3rd scenario is when \\(a = t - 3\\). At this point the new element added will be equal to the last element added.<hline></hline>
Alright, time to try it out.<br>
[10, 23] a = 10, t = 2<br>
[10, 23, 34] t = 3<br>
[10, 23, 34, 44] t = 4<br>
At this point you can see the pattern. The increase in the new element from \\(S[t]\\) is decreasing by 1 every step because \\(t\\) is increasing and nothing else is changing.<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86] t = 11<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 88] t = 12<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 88, 89] t = 13<br>
At this point the math tells us to add an 89 to the set. We know this is actually a binary number, 0.00000000010000000000001000000000010000000001000000001000000010000001000001000010001001011, and we need to add a \\(2^{-89}\\) to it.<br>
So what are we left with?<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 87] t = 12<br>
[10, 23, 34, 44, 53, 61, 68, 74, 79, 83, 86, 87, 88] t = 13<br>
It's tempting to just do it manually but let's try to figure out exactly how many iterations this will take to get to a = 9. It took 2 steps to move the recent chain of 1s left by 1.
We are making progress.
To get to \\(a = 9\\) we will need to get \\(S\\) to be [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] because the only duplicate element that can be added is when \\(t = 13\\).
You can now intuitively see that this will take a really long time, just for \\(a = 10\\) to \\(a = 9\\) - then it will have to get to \\(a = 8\\), etc.
So how long does it take to decrease \\(a\\) by 1? Well, you have to decrease S[2] by S[2] - S[1]. To do that you need to decrease S[3] by (S[3] - S[2]), S[2] - S[1] times. Know what this is? This is multiplication. We're basically going to take the product of the gaps between numbers.<br><br>
Let's just confirm this.<br>
It seems like we're multiplying the gaps but we also have to add 1 every time to generate a new next element. [A][B][C][D] has to take 1 step just to make a [E]; [E] will then decrease until it becomes [D] and then [D] will decrease by 1.<br>
So, if #(N) is number of steps for N, #(N - 1) = 1 + #(N)*gap.<br>
We will get 1 + gap1(1 + gap2(1 + gap3....))) = #(1). Expanding out, the answer will be something like this<br>
<img src="/fusiblegapsumproduct.png"><br><br>
Time to test it out, with an actual possible set.
Start with \\(a = 2\\). By \\(f\\left(2 - \\frac{1}{2^x}\\right) = \\frac{1}{2^{2x + 3}}\\), next element is 7. Then we can apply the iteration.<br>
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
Is 81 correct? Well, gaps are 5, 3, 2, 1 so we should get \\(1 + 5 + 5\\cdot 3 + 5\\cdot 3\\cdot 2 + 5\\cdot 3\\cdot 2\\cdot 1 = 81\\). So yes, this formula works. And we can finally get the answer.<hline></hline>
So, we start at 3 - []. After one step this becomes 3 - [10]. How many steps does it take for 10 to become 9?<br>
1 + (13)(1 + 11 + 11*10 + 11*10*9 + ... + 11!)<br>
Then how many steps to get to 3 - [8]?<br>
1 + (12)(1 + 10 + 10*9 + 10*9*8 + .. 10!)<br>
You can see the pattern. Eventually we will get down to 3 - [1], which after 1 + 4(2 + 2 + 1) steps will reach 3 - [0] = 2. We know f(2) is \\(\\frac{1}{1024}\\). We just need to compute this sum:<br>
<img src="/fusibleanswersum.png"><br>
I actually did this by hand without a calculator in class (you know, for fun, and I wanted to do this whole problem with no calculator):<br>
<img src="/fusiblezfnswork.png"><br>
Therefore<br><br>
<h2 style='font-size:30px;'><b>\\[\\mathbf{f(3) = 2^{-1541023937}}\\]</b></h2><br>
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
  "24985796172591412":["Summing up rational functions",true,`Infinitesimal calculus, the study of functions and the rate that they change, is universally considered hard. Limits and full differentiation and integrals oh my. In particular finding integrals and antiderivatives seems like a very unfun puzzle. But you may be surprised to learn that typically the humble sumble is more difficult.<br>
    \\[\\sum_{n=1}^{\\infty}\\frac{1}{n^2}\\]
    The famous Basel problem. Its value is \\(\\frac{\\pi^2}{6}\\). If you exchange the \\(n^2\\) for \\(n^3\\) you get a number very little is known about.
    \\[\\sum_{n=1}^{N}n^{e}\\]
    Good luck finding the induction here. There's a pretty good approximation for large values of x. I'm not sure if we can do better. More on this problem coming soon.
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
    \\[\\frac{1}{1} - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} ... = \\frac{x^1}{1} - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4}\\Big|_{\\small0}^{\\small1}=\\int_{0}^{1}\\Big(\\frac{1x^0}{1}-\\frac{2x^1}{2}+\\frac{3x^2}{3}-\\frac{4x^3}{4}...\\Big)dx=\\int_{0}^{1}\\frac{1}{1+x}dx=\\ln(1+x)\\Big|_{\\small0}^{\\small1}=\\ln(2)\\]
    As a last fun exercise in rational functions let's do the one I hinted at in the intro.
    \\[\\sum_{n=1}^{\\infty}\\frac{(-1)^{n}}{3n-1}\\]
    The answer is below.
    <!--button class="spoiler" onclick="spoil(this)"-->
    \\[f(x) = \\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}x^{3n-1}}{3n-1}, f(1) = \\int_{0}^{1}f'(x)dx\\ = \\int_{0}^{1}\\sum_{n=1}^{\\infty}(-1)^{n-1}x^{3n-2}dx = \\int_{0}^{1}x*\\sum_{n=0}^{\\infty}(-x^3)^n dx = \\int_{0}^{1}\\frac{x}{(x+1)(x^2-x+1)}dx\\]
    Partial fractions.
    \\[= \\frac{1}{3}\\int_{0}^{1}\\frac{x}{x^2-x+1} - \\frac{1}{x+1}dx\\]
    Completing the square.
    \\[u = \\frac{2x - 1}{\\sqrt3}\\]
    \\[\\Longrightarrow \\frac{2}{9}\\int_{-\\frac{1}{\\sqrt3}}^{\\frac{1}{\\sqrt3}}\\frac{\\sqrt3u-3}{u^2-1}\\frac{\\sqrt3}{2}du - \\frac{1}{3}\\ln(2) = \\frac{\\pi}{3\\sqrt3} - \\frac{1}{3}\\ln(2)\\]
    <!--/button-->
    There comes a time when you're sick of the answer being the most random combination of \\(\\pi\\) and \\(\\ln\\).<br><br>`
    /*
    Anyway it's time for the grand finish. (Don't leave though, I have more fun stuff below)
    \\[\\sum_{n=1}^{\\infty}\\frac{(n-\\alpha)(n - \\beta)}{(n-\\gamma)(n-\\delta)(n - \\varepsilon)(n-\\zeta)}, \\gamma, \\delta, \\varepsilon, \\zeta \\notin \\mathbb{Z}^+\\]
    How do we deal with this?
    So far the way was to add x^(some exponent) so that when taking the derivative of the sum with respect to x, it made it simpler, and so integrating the simpler thing got the original sum.
    Here we'll do basically the same thing. If we insert \\(x^{n-\\gamma}\\) it will remove one of the things in the bottom, so integrating once will get back to this. Then we can multiply the sum by the necessary power of x to make the power of x inside the series \\(n - delta\\). If we keep doing this we'll get a quadruple integral that looks something like this.
    \\[\\int\\int\\int\\int\\sum_{n=1}^{\\infty}(n-\\alpha)(n-\\beta)x^n\\]
    And now that the (n - greekletterIchosespecificallytopunishyou) is in the numerator taking the derivative will never work. It will just make it more complicated.<br><br>
    The answer, of course, is integrating instead. With the correct power, the power rule in reverse vacuums terms up into the exponent. Very cool.<br>
    Keep in mind that since taking the derivative ends up in the final thing as an integral, and integrating ends up as a derivative. If one simplifies, the original expression equals the reverse operation on the simpler thing.<br>
    Now we should be careful. Which do we do first, get rid of the denominator or the numerator?<br>
    Would you rather end up with
    \\[\\int\\int\\int\\int\\frac{d}{dx}\\frac{d}{dx}f(x)dxdxdxdx\\]
    or
    \\[\\frac{d}{dx}\\frac{d}{dx}\\int\\int\\int\\intf(x)dxdxdxdx\\]
    It turns out that the f(x) will be some fraction with x in the numerator and denominator, so taking the derivative will make it worse. So we're going to take the derivatives and clear the numerator first.
    \\[\\sum_{n=1}^{\\infty}\\frac{(n-\\alpha)(n - \\beta)x^{n - \\alpha}}{(n-\\gamma)(n-\\delta)(n - \\varepsilon)(n-\\zeta)} = \\frac{d}{dx}\\sum_{n=1}^{\\infty}\\frac{(n - \\beta)x^{n - \\alpha + 1}}{(n-\\gamma)(n-\\delta)(n - \\varepsilon)(n-\\zeta)}\\]
    Now, as I said, since x is a constant in the frame of the sum, we can take this annoyingly complicated power of x out.
    \\[\\frac{d}{dx}x^{-\\alpha + 1 + \\beta}\\sum_{n=1}^{\\infty}\\frac{(n - \\beta)x^{n - \\beta}}{(n-\\gamma)(n-\\delta)(n - \\varepsilon)(n-\\zeta)}\\]*/],
  "5726309034840841":["My proof of the stupid term problem",true,`I got in the discord/maths newspaper with this!<br><br>
  The problem is as follows: On a finite sequence of arbitrary real-valued terms \\(a_{n}\\), a "stupid term" refers to a term that is greater than the term before and greater than the one after, or less than the term before and less than the one after. P is the least-ordered polynomial such that for all n in the sequence, \\(P(n) = a_{n}\\). Show that the order of P is no less than the number of stupid terms in the sequence (its "stupid number").<hline></hline>The solution:<br><br>
  P(n) is a polynomial therefore it is continuous and differentiable everywhere.<br>
  For every stupid term a_n, \\(P(n) < P(n + 1) \\) and \\(P(n) < P(n - 1)\\) or<br>
\\(P(n) > P(n + 1)\\) and \\(P(n) > P(n - 1)\\). This leaves 6 cases:
\\[P(n) < P(n + 1) < P(n - 1)\\]
\\[\\Longrightarrow IVT: \\exists x_{1} \\in (n - 1, n) | P(x_{1}) = P(n + 1), \\text{ Rolle's Theorem (RT): } \\exists x_{2} \\in (x_{1}, n + 1) | P'(x_{2}) = 0 \\text{ and } x_{2} \\text{ is a minimum of P}\\]
\\[P(n) < P(n - 1) < P(n + 1)\\]
\\[\\Longrightarrow IVT: \\exists x_{1} \\in (n, n + 1) | P(x_{1}) = P(n - 1), RT: \\exists x_{2} \\in (n - 1, x_{1}) | P'(x_{2}) = 0 \\text{ and } x_{2} \\text{ is a minimum of P}\\]
\\[P(n) < P(n + 1) = P(n - 1)\\]
\\[\\Longrightarrow RT: \\exists x_{1} \\in (n - 1, n + 1) | P'(x_{1}) = 0 \\text{ and } x_{1} \\text{ is a minimum of P }\\]
\\[P(n) > P(n + 1) > P(n - 1)\\]
\\[\\Longrightarrow IVT: \\exists x_{1} \\in (n - 1, n) | P(x_{1}) = P(n + 1), RT: \\exists x_{2} \\in (x_{1}, n + 1) | P'(x_{2}) = 0\\text{ and } x_{2} \\text{ is a maximum of P }\\]
\\[P(n) > P(n - 1) > P(n + 1)\\]
\\[\\Longrightarrow IVT: \\exists x_{1} \\in (n, n + 1) | P(x_{1}) = P(n - 1), RT: \\exists x_{2} \\in (n - 1, x_{1}) | P'(x_{2}) = 0\\text{ and } x_{2} \\text{ is a maximum of P }\\]
\\[P(n) > P(n + 1) = P(n - 1)\\]
\\[\\Longrightarrow RT: \\exists x_{1} \\in (n - 1, n + 1) | P'(x_{1}) = 0\\text{ and } x_{1} \\text{ is a maximum of P }\\]
Therefore every stupid term \\(a_n\\) greater than both its preceding and succeeding term is associated with at least one maximum of P(x) strictly between n - 1 and n + 1, and every stupid term \\(a_n\\) is associated with at least one minimum of P(x) strictly between n - 1 and n + 1.<br>
The only ways a 0 of P'(x) can be associated with multiple stupid terms \\(a_n\\) are if it is a maximum in both open ranges of 2 maximum stupid terms, or a minimum in both open ranges of 2 minimum stupid terms.<br>
However 2 maximum stupid terms cannot occur adjacent because each must be greater than its neighbors, and the same for 2 minimum stupid terms.<br>
Therefore there are at least as many 0s of P'(x) as the stupid number of the sequence.<br>
Therefore the order of P'(x) >= stupid number.
Since P is a polynomial the order of P'(x) = the order of P(x) - 1. (Order of P(x) > 0 because if P(x) = 0 it is a constant implying the sequence has no stupid terms. Stupid number = 0 = order, and statement holds.)<br>
Since order of P'(x) >= stupid number, order of P(x) = order of P'(x) + 1 > stupid number.`],
  "4334807026388001":[
    "Professional timewasting with math",
    true,
    `Here's a method to find the antiderivative of sec(x): $$\\int \\sec(x)dx = \\int \\sec(x) \\frac{\\sec(x) + \\tan(x)}{\\sec(x) + \\tan(x)} = \\frac{\\sec(x)\\tan(x) + \\sec^2(x)}{\\sec(x) + \\tan(x)} = \\ln(\\sec(x) + \\tan(x)) + C$$
    This relies on the fact that the derivatives of sec(x), tan(x) are each the other multiplied by sec(x). In other words, taking the derivative, dividing by sec(x), taking the derivative again, and dividing by sec(x) returns us to the original function.<br>
    Let's find all functions that do that.
    $$y(x) := y, \\cos(x)\\frac{d}{dx}\\left(y'\\cos(x)\\right) = y$$
    Product rule:
    $$y''\\cos^2(x) - y'\\sin(x)\\cos(x) - y = 0$$
    I want to get rid of the trig. So, I made the ill-advised decision to substitute t = cos(x).
    Now, we have to convert y(x) and its derivatives into y(t) and its derivatives.
    $$\\frac{dy}{dx} = \\frac{dy}{dt}\\frac{dt}{dx} = -y'\\sin(x) = -y'\\sqrt{1-t^2}$$
    
    \\[ \\frac{d^2y}{dx^2} = \\left(\\frac{d}{dt} \\frac{dy}{dx}\\right) \\frac{dt}{dx} = \\frac{d}{dt}(-y'\\sqrt{1-t^2})(-\\sqrt{1-t^2}) = \\left(-y''\\sqrt{1-t^2} + \\frac{y't}{\\sqrt{1-t^2}} \\right)(-\\sqrt{1-t^2}) = y''(1 - t^2) - y't \\]
    And remember that \\(\\cos^2(x) = t^2, \\sin(x) = \\sqrt{1-t^2}\\), and we can resubstitute into the differential equation.
    $$(y''(1 - t^2) - y't)t^2 + y'(1-t^2)(t) - y = 0$$
    $$y''(t^2 - t^4) + y'(t - 2t^3) - y = 0$$
    Now, it is not obvious how to solve this. We can take some inspiration from our two existing solutions, sec(x) and tan(x), and see that they are both divided by cos(x) = t. So, let's make the function \\(z(t) = ty(t)\\):
    $$z' = ty' + y = ty' + \\frac{z}{t}, z'' = 2y' + ty'' \\implies y' = \\frac{z' - z/t}{t} = \\frac{z'}{t} - \\frac{z}{t^2}, y'' = \\frac{z'' - 2y'}{t} = \\frac{z'' - \\frac{2z'}{t} + \\frac{2z}{t^2}}{t} = \\frac{z''}{t} - \\frac{2z'}{t^2} + \\frac{2z}{t^3}$$
    $$\\left(\\frac{z''}{t} - \\frac{2z'}{t^2} + \\frac{2z}{t^3}\\right)(t^2 - t^4) + \\left(\\frac{z'}{t} - \\frac{z}{t^2}\\right)(t - 2t^3) - \\frac{z}{t} = 0$$
    Oh no. Fortunately, it simplifies a lot after distribution.
    $$(t-t^3)z'' - 2(1-t^2)z' + 2\\left(\\frac{1}{t} - t\\right)z + (1-2t^2)z' - \\left(\\frac{1}{t} - 2t\\right)z - \\frac{z}{t} = 0$$
    $$(t-t^3)z'' - z' = 0$$
    $$z'(t) = a(t) \\implies (t-t^3)a' = a \\implies \\frac{da}{a} = \\frac{1}{t - t^3} \\implies \\ln(a) = \\int \\frac{dt}{t - t^3} = \\int \\left(\\frac{A}{t} + \\frac{B}{1 - t^2}\\right) dt$$
    To solve for A, B note that by comparing coefficients, A needs to be constant and B needs to be linear:
    $$A(1 - t^2) + (B_1t + B_2)t = 1 \\forall t \\implies A = B_1 = 1, B_2 = 0$$
    $$\\ln(a) = \\int \\left(\\frac{1}{t} + \\frac{t}{1 - t^2}\\right)dt = \\ln(t) - \\frac{1}{2}\\ln(1 - t^2) + C$$
    $$a = C\\frac{t}{\\sqrt{1-t^2}}$$
    $$z' = a \\implies z = \\int a dt = C\\sqrt{1 - t^2} + D$$
    (the e^C gets absorbed into the C, as do the - and the factor of 2)
    $$y(t) = C\\frac{\\sqrt{1-t^2}}{t} + \\frac{D}{t}$$
    $$y(x) = C\\tan(x) + D\\sec(x)$$
    Well, so it turns out that the 2 solutions we started with can be linearly combined to produce all solutions. When I saw this, I realized I had done a lot of work for nothing, and I could just have seen that the original equation was linear, and since we had 2 degrees of freedom with a 2nd degree differential equation, that these would be all of the solutions. But, I didn't see it, and I still enjoyed the problem solving process.
    `
  ],
  "7366858041736281":["A fun puzzle about a sequence of shapes",true,`Let \\(\\{S_n\\}_{n=0}^{\\infty}\\) be a sequence of sets with \\(S_n \\subseteq \\mathbb{R}^2\\), such that
\\[S_0 = \\{(1,0)\\}\\]
\\[\\forall n \\in \\mathbb{Z}^+, S_n = \\{(x,y):x^2 + y^2 = \\inf(\\{(a-x)^2 + (b-y)^2: (a,b) \\in S_{n-1}\\})\\}\\]

<br>For \\(n \\geq 3\\), \\(S_n\\) is a Jordan curve. Find the area it encloses in terms of \\(n\\).
<br><br>
And now for a human readable version. We define the distance from a point to a curve (in the euclidean plane) as the lowest possible distance. This is just how distances between points and lines is defined, we can just extend it. For example, the distance between the unit circle and the point (2,2) is the shortest distance, which is the length of the segment from (2,2) to \\((\\frac{\\sqrt{2}}{2},\\frac{\\sqrt{2}}{2})\\).
<br>
Now, the question says we start with the "curve" of just one point, (1,0). Then we find the set of points equidistant from that curve, and the point (0,0). This forms \\(S_1\\). We can pretty easily see that \\(S_1\\) is a line, specifically the perpendicular bisector of the unit segment, or \\(x = \\frac{1}{2}\\).
<br><br>
\\(S_2\\) will be the points \\((x,y)\\) so that \\(\\text{distance}((x,y),(0,0))\\) is the same as the distance to the line, which is \\(|\\frac{1}{2}-x|\\) (it's the perpendicular distance, which is of course the shortest distance).
Using the pythagorean theorem, \\(x^2 + y^2 = (\\frac{1}{2}-x)^2 \\implies y^2 = \\frac{1}{4}-x\\) which is a sideways parabola. This may remind you that parabolas can be defined as curves equidistant from a point and a line.
<br><br>
Now, let's just try finding \\(S_3\\) the same way. What's the formula for distance from a point \\((x,y)\\) to a parabola? I have no idea. If we try using some calculus to minimize the distance, we end up having to solve a cubic equation, just to get the point on the parabola - then we have to find the points where the distance to that nearest point is equal to the distance to the origin. Nobody wants to do that.
<br><br>
Here's a new idea: instead of starting from the point \\((x,y)\\) and trying to make it equidistant, let's start from a point on the parabola. Since \\(x\\) is in terms of \\(y\\), let's say \\(y\\) is the parameter \\(t\\). The use of parametric equations might be a surprise here. But it's a case where they are absolutely essential. \\(S_2\\) is described by \\(y^2 = \\frac{1}{4} - x \\implies S_2 = \\{(\\frac{1}{4} - t^2,t)\\}\\).
<br><br>
For what points \\((x,y)\\) is point \\((\\frac{1}{4} - t^2,t)\\) closest to them? We can realize that it must be the points along the line normal to the parabola at that point. If the line \\((x,y) \\to (\\frac{1}{4} - t^2,t)\\) is not perpendicular to the curve, we can adjust \\(t\\) to make it closer. The normal line will be the line whose slope is the negative reciprocal of the slope at the \\(t\\) point, i.e. \\(-(\\frac{dx}{dt})/(\\frac{dy}{dt}) = 2t\\), so the lines are \\(y = 2t(x - \\frac{1}{4} + t^2) + t\\). Meanwhile, to find the points along that line equally far from \\((0,0)\\) we just need to find the perpendicular bisector of the \\(t\\) point and the origin:
\\[y = \\frac{t^2 - \\frac{1}{4}}{t}(x - \\frac{1}{8} + \\frac{1}{2}t^2) + \\frac{t}{2}\\]

These 2 lines will have 1 intersection point:

\\[\\frac{t^2 - \\frac{1}{4}}{t}(x - \\frac{1}{8} + \\frac{1}{2}t^2) + \\frac{t}{2} = 2t(x - \\frac{1}{4} + t^2) + t\\]

After some simplification, the intersection point in terms of \\(t\\) is exactly

\\[\\left(-\\frac{3}{2}t^{2}+\\frac{1}{8},-t^{3}+\\frac{3}{4}t\\right)\\]

With that, we have basically found \\(S_3\\). There is an important detail to mention: \\(S_3\\) is bounded. As we zoom out on the interior of \\(S_2\\), most points in it are much closer to the parabola than the origin, because it is much thinner than it is wide. Because we know \\(S_3\\) points form a closed curve, and we can see that negating \\(t\\) flips it over the \\(x\\)-axis, we can assume that the highest and lowest \\(t\\)-values will be on the \\(x\\)-axis, when \\[-t^{3}+\\frac{3}{4}t = 0 \\implies t = 0, \\pm \\frac{\\sqrt{3}}{2}\\]
Therefore, \\(S_3 = \\{\\left(-\\frac{3}{2}t^{2}+\\frac{1}{8},-t^{3}+\\frac{3}{4}t\\right)\\}, |t| \\leq \\frac{\\sqrt{3}}{2}\\)
<br>
Just looking at this, if you can figure out a formula without manually performing this process and simplifying, good for you. I went ahead and did the algebra for \\(S_4, S_5, S_6\\) (yes, it took a long time even with Desmos basically finding the functions for me):
\\[S_0 = (1,0)\\]
\\[S_1 = \\left(\\frac{1}{2},t\\right)\\]
\\[S_2 = \\left(-t^2 + \\frac{1}{4},t\\right)\\]
\\[S_3 = \\left(-\\frac{3}{2}t^2 + \\frac{1}{8},-t^3 + \\frac{3}{4}t\\right)\\]
\\[S_4 = \\left(t^4 - \\frac{3}{2}t^2 + \\frac{1}{16},-2t^3 + \\frac{1}{2}t\\right)\\]
\\[S_5 = \\left(\\frac{5}{2}t^4 - \\frac{5}{4}t^2 + \\frac{1}{32},t^5 - \\frac{5}{2}t^3 + \\frac{5}{16}t\\right)\\]
\\[S_6 = \\left(-t^{6}+\\frac{15}{4}t^{4}-\\frac{15}{16}t^{2}+\\frac{1}{64},3t^{5}-\\frac{5}{2}t^{3}+\\frac{3}{16}t\\right)\\]

It's a little surprising that all of them are polynomial in both \\(x\\) and \\(y\\), at best we should expect it to be a rational function. So it's lucky that it actually always simplifies.
<br>
I did a lot of pattern seeking on these. If you multiply each point in set \\(S_n\\) by \\(2^n\\), you will notice that the constant in \\(x\\) is 1, the linear term in \\(y\\) is \\(2n\\), the quadratic term in \\(x\\) is \\(-2n(n-1)\\), the cubic term in \\(y\\) is \\(-\\frac{4}{3}n(n-1)(n-2)\\), and so on. Those constants end up being \\(1,2,-2,\\frac{-4}{3},\\frac{2}{3},\\frac{4}{15},-\\frac{4}{45} = \\frac{2^n}{n!}(-1)^{\\lfloor n/2 \\rfloor}\\). Putting it all together, we get this (for now unproven) formula for \\((x,y)\\):

\\[S_n = \\frac{1}{2^{n}}\\left(\\sum_{k=0}^{\\lfloor n/2\\rfloor}\\left(-4t^2\\right)^{k}\\binom{n}{2k},2t\\sum_{k=0}^{\\lfloor n/2\\rfloor}\\left(-4t^2\\right)^{k}\\binom{n}{2k+1}\\right)\\]

Well, that definitely looks very nice. If we now look at \\(2^n(x + yi)\\):

\\[\\sum_{k=0}^{\\lfloor n/2\\rfloor}\\left(2it\\right)^{2k}\\binom{n}{2k} + \\sum_{k=0}^{\\lfloor n/2\\rfloor}(2it)^{2k+1}\\binom{n}{2k+1} = \\sum_{k=0}^{n}\\left(2it\\right)^{k}\\binom{n}{k} = (1+2it)^n\\]

Thus, \\(S_n = \\left(\\mathbf{Re}\\left(\\frac{1}{2} + it\\right)^n,\\mathbf{Im}\\left(\\frac{1}{2} + it\\right)^n\\right)\\).

Amazing! Each set \\(S_n\\) is just the \\(n\\)th power of \\(S_1\\).

Let's prove this now. The normal slope is \\[-\\frac{dx/dt}{dy/dt} = -\\frac{\\mathbf{Re}(in(1/2+it)^{n-1})}{\\mathbf{Im}(in(1/2+it)^{n-1})} = \\frac{\\mathbf{Im} (1/2+it)^{n-1}}{\\mathbf{Re} (1/2+it)^{n-1}}\\]

Interestingly, this is perpendicular to the perpendicular bisector of the point in \\(S_{n-1}\\)-as such, that bisector is tangent to \\(S_n\\).

Set \\(z := 1/2 + it\\) for space reasons. Setting the normal line and perpendicular bisector equal:

\\[\\frac{\\mathbf{Im }(z^{n-1})}{\\mathbf{Re}(z^{n-1})}\\left(x - \\mathbf{Re } (z^n)\\right) + \\mathbf{Im }(z^n) = -\\frac{\\mathbf{Re }(z^n)}{\\mathbf{Im } (z^n)}\\left(x - \\frac{1}{2}\\mathbf{Re }(z^n)\\right) + \\frac{1}{2}\\mathbf{Im } (z^n)\\]

\\[\\frac{\\mathbf{Im }(z^{n-1})}{\\mathbf{Re}(z^{n-1})}x - \\frac{\\mathbf{Im }(z^{n-1})}{\\mathbf{Re}(z^{n-1})}\\mathbf{Re } (z^n) = -\\frac{\\mathbf{Re }(z^n)}{\\mathbf{Im } (z^n)}x + \\frac{\\mathbf{Re }(z^n)}{\\mathbf{Im } (z^n)}\\frac{1}{2}\\mathbf{Re }(z^n) - \\frac{1}{2}\\mathbf{Im } (z^n)\\]

\\[x = \\frac{\\frac{\\mathbf{Im }(z^{n-1})}{\\mathbf{Re}(z^{n-1})}\\mathbf{Re } (z^n) + \\frac{\\mathbf{Re }(z^n)}{\\mathbf{Im } (z^n)}\\frac{1}{2}\\mathbf{Re }(z^n) - \\frac{1}{2}\\mathbf{Im } (z^n)}{\\frac{\\mathbf{Im }(z^{n-1})}{\\mathbf{Re}(z^{n-1})} + \\frac{\\mathbf{Re }(z^n)}{\\mathbf{Im } (z^n)}}\\]

\\[= \\frac{2\\mathbf{Im }(z^{n-1})\\mathbf{Re } (z^n)\\mathbf{Im } (z^n) + \\mathbf{Re }(z^n)\\mathbf{Re }(z^n)\\mathbf{Re}(z^{n-1}) - \\mathbf{Im } (z^n)\\mathbf{Im } (z^n)\\mathbf{Re}(z^{n-1})}{2\\mathbf{Im }(z^{n-1})\\mathbf{Im } (z^n) + 2\\mathbf{Re }(z^n)\\mathbf{Re}(z^{n-1})}\\]

We can use some complex number multiplication to justify that \\(\\mathbf{Im}(z_1)\\mathbf{Im}(z_2) + \\mathbf{Re}(z_1)\\mathbf{Re}(z_2) = \\mathbf{Re}(z_1\\overline{z_2})\\), \\(\\mathbf{Im}(z_1)\\mathbf{Re}(z_2) - \\mathbf{Re}(z_1)\\mathbf{Im}(z_2) = \\mathbf{Im}(z_1\\overline{z_2})\\) (you can also get there using trig formulas, but it's annoying). And remember, \\(\\overline{z_2} = \\frac{|z_2|^2}{z_2}\\). From all these, we can simplify to

\\[x = \\frac{|z|^{2n-2}\\mathbf{Re}(z)\\mathbf{Re}(z^n) - |z|^{2n-2}\\mathbf{Im}(z)\\mathbf{Im}(z^n)}{2|z|^{2n-2}\\mathbf{Re}(z)}\\]

and finally \\(x = \\frac{\\mathbf{Re}(z^{n+1})}{2\\mathbf{Re}(z)} = \\mathbf{Re}(z^{n+1})\\) as we wanted. Proof that \\(y\\) ends up being the imaginary part is left to the reader.
<br><br>
Note that we need to again solve for the first nonzero \\(t\\)-value in which \\(y = 0\\) to get only the actual points in \\(S_n\\). This is easy, though: \\((\\frac{1}{2}+it)^{n}\\) is real when \\(2t = \\tan\\left(\\frac{\\pi}{n}\\right)\\), so \\(t\\) should vary from \\(-\\frac{1}{2}\\tan\\left(\\frac{\\pi}{n}\\right)\\) to \\(\\frac{1}{2}\\tan\\left(\\frac{\\pi}{n}\\right)\\).
<br>
OK, we still need to find the area like the question asked. We can use the parameterized area formula:

\\[A = -2\\int_{0}^{\\tan(\\pi/n)/2} \\mathbf{Im}(1/2+it)^{n} \\frac{d}{dt} \\mathbf{Re}(1/2+it)^n dt\\]

The 2 is by symmetry, the negative is because it is going right to left.

\\[= -\\frac{2}{4^n}\\int_{0}^{\\tan(\\pi/n)/2} \\mathbf{Im}(1+2it)^{n} \\frac{d}{dt} \\mathbf{Re}(1+2it)^n dt \\] \\[= -\\frac{2}{4^n}\\int_{0}^{\\pi/n} \\mathbf{Im}(1+i\\tan(\\theta))^{n} \\frac{d}{dt} \\mathbf{Re}(1+i\\tan(\\theta))^n d\\theta\\]
\\[= -\\frac{2}{4^n}\\int_{0}^{\\tan(\\pi/n)/2} \\mathbf{Im}(1+2it)^{n} \\frac{d}{dt} \\mathbf{Re}(1+2it)^n dt \\] \\[= \\frac{2n}{4^n}\\int_{0}^{\\pi/n} \\mathbf{Im}(1+i\\tan(\\theta))^{n} \\mathbf{Im}((1+i\\tan(\\theta))^{n-1})\\sec^2(\\theta) d\\theta\\]
\\[= \\frac{2n}{4^n}\\int_{0}^{\\pi/n} \\sin(n\\theta)\\sin((n-1)\\theta)\\sec^{2n+1}(\\theta) d\\theta\\]
\\[= \\frac{n}{4^n}\\int_{0}^{\\pi/n}\\left(\\sec^{2n}(\\theta) + \\cos((2n-1)\\theta)\\sec^{2n+1}(\\theta)\\right) d\\theta\\]
For reasons I do not know, \\(\\int_{0}^{\\pi/n}\\cos((2n-1)\\theta)\\sec^{2n+1}(\\theta) d\\theta\\) is always \\(0\\) so we can simplify to
\\[= \\frac{n}{4^n}\\int_{0}^{\\pi/n}\\sec^{2n}(\\theta) d\\theta\\]
\\[= \\frac{n}{4^n}\\int_{0}^{\\pi/n}\\left(1 + \\tan^2(\\theta)\\right)^{n-1}\\sec^2(\\theta)d\\theta\\]
\\[= \\frac{n}{4^n}\\int_{0}^{\\pi/n}\\sum_{k=0}^{n-1}\\tan^{2k}(\\theta) \\binom{n-1}{k} d\\tan(\\theta)\\]
\\[= \\frac{n}{4^n}\\sum_{k=0}^{n-1} \\frac{\\tan^{2k+1}(\\pi/n)}{2k+1}\\binom{n-1}{k}\\]
Well, we could have hoped for something a little bit neater, but I guess this is a good enough final answer.`]
}
const urlPath = (new URL(window.location.href).search.substr(1));
window.onload = function() {
  if (urlPath === "") {
    let rhtml = "<h1>Blog</h1>";
    for (let blogi = Object.keys(blogs).length - 1; blogi >= 0; blogi--) {
      const blog = Object.keys(blogs)[blogi];
      if (blogs[blog][1]) {
        rhtml += "<div class='blogbox'><a class='bloglink' href='/blog?" + blog + "'>" + blogs[blog][0] + "</a>" + blogs[blog][2].replaceAll("\\(","").replaceAll("\\)","").replaceAll("<","").substring(0,500) + "</div>";
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

export blogs as [
  ["Surely this simple recursive function won't produce ridiculous results?",
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


]

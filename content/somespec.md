---
title: some spec practice
---
(if you don't have latex support, too bad!)
### practice test
Q1a: $$a_{21}+b_{22}=2+6=8$$
Q1b: $$A^2=\begin{bmatrix} -5 & -6 \\ 4 & -5 \end{bmatrix}; A^2 + A - B = \begin{bmatrix} -8 & -4 \\ 3 & -10 \end{bmatrix}; A^{-1} \times(A^2 + A + B) = X = \begin{bmatrix} \frac{1}{7} & \frac{3}{7} \\ -\frac{2}{7} &\frac{1}{7} \end{bmatrix} $$
Q1c: $$B^{-1} = \begin{bmatrix} \frac{6}{39} & \frac{5}{39} \\ -\frac{3}{39} & \frac{4}{39} \end{bmatrix}; AB^{-1} =  \begin{bmatrix} \frac{5}{13} & \frac{-7}{39} \\ \frac{3}{13} & \frac{14}{39}\end{bmatrix}$$
Q1d: $$\begin{aligned}
det(M) = M_{11}M_{22}-M_{12}M_{21} \\ 
X^{-1}=\frac{1}{det(X)}\begin{bmatrix} X_{22} & -X_{12} \\ -X_{21} & X_{11}\end{bmatrix} \\
Y^{-1}=\frac{1}{det(Y)}\begin{bmatrix} Y_{22} & -Y_{12} \\ -Y_{21} & Y_{11}\end{bmatrix} \\
Y^{-1}X^{-1}=\frac{1}{det(X) \times det(Y)}
\begin{bmatrix}
X_{22}Y_{22} + X_{12}Y_{21} & -X_{22}Y_{12} - X_{12}Y_{11} &\\
-X_{21}Y_{22} - X_{11}Y_{21} & X_{12}Y_{21} + X_{11}Y_{11} 
\end{bmatrix} \\
XY \text{it was at this point i realised that none of this is needed.}
\end{aligned}$$

The fibonacci one: $$\begin{aligned}
&\text{Let }P(n)\text{ stand for } (f_1)^2 + (f_2)^2 + \space ... \space + (f_n)^2 = f_nf_{n+1}\text{.}&\\
&\text{First we prove P(1).} &\\
P(1) :\space&1^2=1\times1&\\
&\text{This is self-evidently true.}&\\
&\text{Now we assume }P(k)\text{ is true. }&\\
&\therefore (f_1)^2 + (f_2)^2 + \space ... \space + (f_k)^2 = f_kf_{k+1}\\
&\text{Now we wish to prove } P(k+1) \text{.}&\\
LHS&=(f_1)^2 + (f_2)^2 + \space ... \space + (f_k)^2 + (f_{k+1})^2&\\
&\text{But }(f_1)^2 + (f_2)^2 + \space ... \space + (f_k)^2=f_kf_{k+1}\text{!}&\\
\therefore LHS&=f_kf_{k+1}+(f_{k+1})^2&\\
&=(f_k+f_{k+1})(f_{k+1})&\\
&\text{But }f_k+f_{k+1} = f_{k+2}\text{!}&\\
\therefore LHS&=f_{k+1}f_{k+2}=RHS&\\
&\text{As we have proven }P(1)\text{ and }P(k+1)\text{, by the Principle of Mathematical Induction, we have proven this for all integers.}&\\
&&QED.
\end{aligned}$$
+++
title = "Math testing"
date = 2019-07-05
[taxonomies]
categories = ["Odd"]
tags = ["placeholder posts", "prime-number posts"]
+++

```tex
> **引理1**
> 假设 $y \geq 0$ ,而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:
> $$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}},x > 1$$
> 显见，当 $0 \leq y \leq 1$ 时，有 $\Phi(y) = 0$. 对于所有 $y \geq 0$, 则 $\Phi(y)$ 是一个非减函数.
> 当 $\log x\geq 10^4$ 及 $y\geq e^{2{(\log x)}^{-0.1}}$ 时，则有:
> $$1 - x^{- 0.1} \leq \Phi (y) \leq 1$$
```

> **引理1**
> 假设 $y \geq 0$ ,而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:
> $$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}},x > 1$$
> 显见，当 $0 \leq y \leq 1$ 时，有 $\Phi(y) = 0$. 对于所有 $y \geq 0$, 则 $\Phi(y)$ 是一个非减函数.
> 当 $\log x\geq 10^4$ 及 $y\geq e^{2{(\log x)}^{-0.1}}$ 时，则有:
> $$1 - x^{- 0.1} \leq \Phi (y) \leq 1$$


<!-- more -->


<p>[>_<]:
<span class="math">$\displaystyle{\prod_{\begin{aligned} p &\mid x \\ p &> 2\end{aligned}}}$</span> </p><p>取 <span class="math">$\displaystyle{r(p) = \frac {p} {p - 1} , K = x , Z = x^{\frac {1} {10}}}$</span> , 我们有</p><p class="math">$$\begin{aligned}
\Gamma_{x} (x^{\frac {1} {10}})
&=\frac {x} {\varphi (x)} \prod_{p\nmid x} \frac {1 - \frac {1} {p - 1}} {1 - \frac {1} {p}} \frac {e^{- r}} {\log x^{\frac {1} {10}}} \left\{1 + O\left(\frac {1} {\log x}\right) \right\}\\
&= \frac {x} {\varphi (x)}\prod_{{p|x}\vee{p > 2}}\frac {(p - 1)^{2}} {p (p - 2)}\prod_{p > 2} \left(1 - \frac {1} {(p - 1)^{2}}\right) \frac {e^{- r}} {\log x^{\frac {1} {10}}} \left\{1 + O \left(\frac {1}{\log x}\right) \right\}\\
&= \frac {20 e^{- \gamma} C_{x}} {\log x}\left\{1 + O \left(\frac {1}{\log x}\right) \right\}
\end{aligned}$$</span> <p>其中 <span class="math">$\gamma$</span>  是 Euler 常数.</p><p>又当 <span class="math">$0\le u\leq2$</span>  时, 令 <span class="math">$F(u)=\dfrac{2e^r}{u},f(u)=0$</span> , 而当 <span class="math">$u\geq2$</span>  时, 令 <span class="math">$(uF(u))'=f(u-1),(uf(u))'=F(u-1)$</span> .</p><p>当 <span class="math">$2\le u\leq 3$</span>  时, 有:</p><p class="math">$$uF(u)=2F(2),F(u)=\frac{2e^r}{u}$$</span> <p>又当 <span class="math">$2\leq u\leq 4$</span>  时, 则有</p><p class="math">$$u f (u) = \int_{2}^{u} F (t - 1) d t = 2 e^{r} \log (u - 1) , \quad f (u) = \frac {2 e^{r} \log (u - 1)} {u}$$</span> <p>当 <span class="math">$3\leq u\leq 4$</span>  时, 我们有:</p><p class="math">$$u F (u) = 2 e^r + \int_{3}^{u} f (t - 1) d t = 2 e^r \left(1 + \int_{2}^{u - 1} \frac {\log (t - 1)} {t} d t\right)$$</span> <p>又有:</p><p class="math">$$5 f (5) = 2 e^r \log 3 + \int_{4}^{5} F (u - 1) d u = 2 e^r \left(\log 4 + \int_{3}^{4} \frac {d u} {u} \int_{2}^{n - 1} \frac {\log (t - 1)} {t} d t\right)$$</span> <p>取 <span class="math">$\xi^{2} = x^{\frac {1} {2} - \epsilon} , q = 1 ,  z = x^{\frac {1}{10}}$</span> , 则由上式可知, 当 <span class="math">$x$</span>  很大时, 有:</p><p class="math">$$\begin{aligned}
P_{x} (x , x^{\frac {1} {10}})
&\geq \frac {2 (1 - \sqrt {e}) e^{- r} x C_{x} f (5)} {(\log x) (\log x^{\frac {1} {10}})} \\
&\geq \left\{\frac {8 (1 - \sqrt {e}) x C_{x}} {(\log x)^{2}} \right\}\cdot \left\{\log 4 + \int_{3}^{4} \frac {d u} {u} \int_{2}^{n - 1} \frac {\log (t - 1)} {t} \mathrm{d} t \right\}
\end{aligned}$$</span> <p>再取 <span class="math">$\xi^{2} = \dfrac{x^{\frac {1} {2} - \epsilon}}{p} , q = p ,  z = x^{\frac {1}{10}}$</span> , 我们有</p><p class="math">$$\begin{aligned}
\sum_{x^\frac{1}{10} < r \leq x^{\frac{1}{3}}} P_{x} (x , p , x^{\frac {1} {10}})
&\leq\left\{\frac {20 (1 + \sqrt {e}) e^{- r} x C_{r}} {(\log x)^{2}} \right\}
\left\{\sum_{x^\frac{1}{10} < r \leq x^{\frac{1}{5}}}\left(\frac {2 c^{r}} {p}\right)\cdot \left(1 + \int_{2}^{4 - \frac {100 \log p} {\log x}} \frac {\log (t - 1)} {t} \mathrm{d}t\right)\left(\frac {\log x^{\frac {1} {10}}} {\log \frac {x^{\frac {1} {2}}} {p}}\right)+\sum_{x^\frac{1}{5} < r \leq x^{\frac{1}{3}}}\frac {2 e^{r} \log x^{\frac {1} {10}}} {p \log \frac {x^{\frac {1} {2}}} {p}}\right\}\\
&\leq\left\{\frac {(4 + 5 \sqrt {e}) x C_{x}} {\log x} \right\}
\left\{\int_{x^\frac{1}{10}}^{x^\frac{1}{5}}\frac {\mathrm{d} S} {S (\log S) (\log \frac {x^{\frac {1} {2}}} {S})}\int_{2}^{4 - \frac {10 \log s} {\log x}} \frac {\log (t - 1)} {t} \mathrm{d} t+ \int_{x^{\frac {1} {2}}}^{x^{\frac {1} {3}}} \cdot \frac {d S} {S (\log S) (\log \frac {x^{\frac {1} {2}}} {S})}\right\}\\
&=\left\{\frac {(4 + 5 \sqrt {e}) x C_{x}} {\log x} \right\}
\left\{\int_{\frac {1} {10}}^{\frac {1} {5}} \frac {d \alpha} {u (\frac {1} {2} - \alpha)} \int_{2}^{t - 10 a} \frac {\log (t - 1)} {t} \mathrm{d} t+\int_{\frac {1} {10}}^{\frac {2} {3}} \frac {d \alpha} {\alpha (\frac {1} {2} - \alpha)}\right\}\\
&=\left\{\frac {(8 + 10 \sqrt {e}) x C_{x}} {\log x} \right\}
\left\{\log 8 + \int_{\frac {1} {10}}^{\frac {1} {5}} \frac {d \alpha} {2 \pi (\frac {1} {2} - \alpha)} \int_{2}^{4 - 10 a} \frac {\log (t - 1)} {t} d t \right\}
\end{aligned}$$</span> <p>显见, 当 <span class="math">$1\leq x \leq 2$</span> 时, 有 <span class="math">$\log x \leq \dfrac {x - 1} {2} + \dfrac {x - 1} {1 + x}$</span> , 故有:</p><p class="math">$$\begin{aligned}
&\int_{3}^{4} \frac {d u} {u} \int_{2}^{u - 1} \frac {\log (t - 1)} {t} d t - \frac {1} {4} \int_{\frac {1} {10}}^{\frac {1} {3}} \frac {d \alpha} {\alpha (\frac {1} {2} - \alpha)} \int_{2}^{4 - 1) a} \frac {\log (t - 1)} {t} d t\\
=& \int_{3}^{4} \left(\frac {1} {u} - \frac {2.5} {u (5 - u)}\right) d u \int_{2}^{u - 1} \frac {\log (t - 1)} {t} d t \\
\geq& \int_{3}^{4} \frac {2.5 - u} {u (5 - u)} \mathrm{d}t \int_{2}^{u - 1} (\frac {t - 2} {2} + \frac {t - 2} {t}) \frac {d t} {t} \\
=& \int_{3}^{4} \left\{\frac {2.5 - u} {2 u (5 - u)} \right\} (u - 3 + \frac {4} {u - 1} - 2) d u\\
=& \int_{3}^{4} \left(\frac {1} {2} - \frac {2.25} {u} - \frac {1} {4 (5 - u)} + \frac {0.75} {u - 1}\right) d u \\
=& \frac {1} {2} - 2.25 \log \frac {4} {3} - \frac {\log 2} {4}+ 0.75 \log \frac {3} {2} \\
=& \frac {1} {2} + 0.75 \log \frac {9} {8} - 1.5 \log \frac {4} {3} - \frac {\log 2} {4}\\
\geq& 0.588335 - 0.6048075 \\
=& - 0.0164725
\end{aligned}$$</span> <p>综上所述:
<span class="math">$\displaystyle{\begin{aligned}
&P_{x} (x , x^{\frac {1} {10}}) - \frac {1} {2}\sum_{x^\frac{1}{10} < r \leq x^{\frac{1}{3}}} P_{x} (x , p , x^{\frac {1} {10}}) \\
\geq& \left(\frac {(8 - 50 \sqrt {e}) x C_{x}} {(\log x)^{2}}\right)\cdot (\log 4 - \frac {\log 8} {2} - 0.0164725) \\
\geq& \frac {(8 x C_{x}) (0.3301)} {(\log x)^{2}}
\end{aligned}}$</span> </p><p>于是原命题得证</p>

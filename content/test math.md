+++
title = "Math Testing"
date = 2019-07-05

[taxonomies]
categories = ["Tests", "Math"]
tags = ["Goldbach Conjecture"]
+++

> **引理1**
> 假设 $y \geq 0$ ,而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:
> $$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}},x > 1$$
> 显见，当 $0 \leq y \leq 1$ 时，有 $\Phi(y) = 0$. 对于所有 $y \geq 0$, 则 $\Phi(y)$ 是一个非减函数.
> 当 $\log x\geq 10^4$ 及 $y\geq e^{2{(\log x)}^{-0.1}}$ 时，则有:
> $$1 - x^{- 0.1} \leq \Phi (y) \leq 1$$

<!-- more -->

<p><b>证:</b></p><p>我们先来证明</p><p class="math">$$\frac {\partial^{r}} {\partial \omega^{r}} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right)  \left\{(\log y)^{r} + \sum_{i = 1}^{r} \frac {(- 1)^{i} r \cdots (r - i + 1) (\log y)^{r - i}} {\omega^{i}} \right\}$$</span> <p>成立, 显见 (1) 式当 <span class="math">$r=1$</span>  和 <span class="math">$r=2$</span>  时都成立.</p><p>现假定 (1) 式对于  <span class="math">$r = 2 , \cdots , S$</span>  时都成立, 而证明对于 <span class="math">$S+1$</span>  也成立.</p><p>由于:</p><p class="math">$$\begin{aligned}
\frac {\partial^{S + 1}} {\partial \omega^{S + 1}} \left(\frac {y^{\omega}} {\omega}\right)
&= \frac{\partial}{\partial \omega} \left\{y^{\omega} \left(\frac {(\log y)^{S}} {\omega} + \sum_{i = 1}^{S} \frac {(- 1)^{i}\cdot S \cdots (S - i + 1) (\log y)^{S - i}} {\omega^{i + 1}}\right)\right\}\\
&= y^{\omega} \left\{\frac {(\log y)^{S + 1}} {\omega} + \sum_{i = 1}^{S} \frac {(- 1)^{i}\cdot S \cdots (S - i + 1) (\log y)^{S + 1 - i}} {\omega^{i + 1}} - \frac {(\log y)^{S}} {\omega^{2}}+ \sum_{i = 1}^{S} \frac {(- 1)^{i + 1} S \cdot \cdot (S - i + 1) (i + 1) (\log y)^{S - i}} {\omega^{t + 2}} \right\}\\
&=\left({\frac {y^{\omega}} {\omega}}\right) (\log y)^{S + 1}- \frac {(S + 1) (\log y)^{S}} {\omega} + \frac {(- 1)^{S+1} (S + 1) !} {\omega^{S + 1}}+\sum_{i=2}^{S}\left((-1)^{i} S \cdots(S-i+1)(\log y)^{S+1-i}+\left.\frac{(-1)^i S \cdots(S+2-i) i(\log y)^{x+1-i}}{\omega^{i}}\right)\right\}\\
&=\left(\frac{y^{\omega}}{\omega}\right)\left\{(\log y)^{S+1}+\sum_{i=1}^{S+1} \frac{(-1)^i(S+1)\cdots(S+1-i+1)(\log y)^{S+1-i}}{\omega^{i}}\right\}
\end{aligned}$$</span> <p>故 (1) 式得证.</p><p>又当  <span class="math">$y \geq 1$</span>  时, 我们有:</p><p class="math">$$\begin{aligned}
\Phi(y)
&=1+\left\{\frac {(\log x)^{1.1 + 1.1 [ \log x} ]} {[ \log x ] !} \right\}\left\{\frac {\partial^{[ \log x ]}} {\partial \omega^{[ \log x)}} \left(\frac {y^{\omega}} {\omega}\right) \right\}_{\omega=-(\log x)^{1.1}}\\
&= 1 - e^{- (\log x)^{1.1} \cdot (\log y)} \sum_{\nu = 0}^{[\log x]} \frac {(\log x)^{1.1} (\log y)^{\nu}} {\nu !}\\
&= \left\{\frac {1} {[ \log x ] !} \right\} \int_{0}^{(\log x) ! \cdot (\log y)} e^{- \lambda} \lambda^{[ \log x ]} \mathrm{d} \lambda
\end{aligned}$$</span> <p>因为  <span class="math">$0\leq y \leq1$</span>  时,  <span class="math">$\Phi(y)=0$</span> . 故由上式得到: 当  <span class="math">$y\geq0$</span>   时, 则  <span class="math">$\Phi(y)$</span>  是一个非减函数.</p><p>又当  <span class="math">$y \geq e^{2 (\log x) - 1.0}$</span>   时, 有:</p><p class="math">$$\begin{aligned}
0 < 1 - \Phi (y)
&=\left\{\frac {1} {[ \log x ] !} \right\} \int_{(\log x)^{1.1} (\log y)}^{\infty} e^{- \lambda} \lambda^{[\log x ]} \mathrm{d} \lambda\\
&\leq \left\{\frac {1} {[ \log x ] !} \right\} \int_{2 [ \log x ]}^{\infty} e^{- \lambda} \lambda^{[ \log x ]} \mathrm{d} \lambda \\
&= \left\{\frac {([ \log x ])^{1 + [ \log x)}} {[ \log x ] !} \right\}\cdot\int_{2}^{\infty} e^{- \lambda [\log x]} \lambda^{[ \log x ]} \mathrm{d} \lambda\\
&=\left\{\frac {e^{-[ \log x ]} ([ \log x ])^{1 +[\log x]}} {[ \log x ] !} \right\}\cdot \int_{1}^{\infty} e^{- \lambda [\log x]} (1 + \lambda)^{[\log x]} \mathrm{d} \lambda \\
&\leq x^{- 0.1}
\end{aligned}$$</span> <p>其中用到 <span class="math">$\log x\geq10^4$</span>  及当 <span class="math">$\lambda\geq1$</span>  时, 有 <span class="math">$e^{\log (1 + \lambda)} \leq e^{\lambda \log 2}$</span> .</p>

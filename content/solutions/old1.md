# 早期档案：数学组参考解答

本站整理。对应考试时间为 11 月 4 日的试卷；第 6 题按原卷恢复为偶数阶。

## 1. 黎曼函数

极限为 $0$。对任意 $\varepsilon>0$，使 $R(x)\ge\varepsilon$ 的最简分母只能满足 $q\le1/\varepsilon$，这样的有理数只有有限多个。在有理数的不重复枚举中，它们只占有限项，故充分大 $n$ 有 $R(x_n)<\varepsilon$。

## 2. 极限

在零点展开至四次项：

$$
\sin(\log(1+x))-\log(1+\sin x)=\frac{x^4}{12}+O(x^5),
$$

$$
\arcsin(e^x-1)-e^{\arcsin x}+1=\frac{x^4}{12}+O(x^5).
$$

所以极限为 $1$。上述展开分别将 $\log(1+x)$、$e^x-1$ 的四阶展开代入 $\sin u=u-u^3/6+O(u^5)$、$\arcsin u=u+u^3/6+O(u^5)$ 即得。

## 3. 沿整数倍收敛但不全局收敛

存在。令 $f$ 为集合 $\{\sqrt p:p\text{ 为素数}\}$ 的示性函数。不同素数平方根的比是无理数，因此固定 $x>0$ 时，不可能有两个不同正整数 $m,n$ 同时使 $mx,nx$ 属于该集合。于是 $f(nx)$ 至多一项非零，必趋于零。但沿 $x=\sqrt p\to\infty$ 有 $f(x)=1$，故全局极限不为零。

## 4. 根式方程

记三个根式内的多项式为 $P=x^2+x+1$、$Q=2x^2+x+5$、$R=x^2-3x+13$，它们均为正。原方程等价于

$$
R-P-Q\ge0,\qquad (R-P-Q)^2=4PQ.
$$

其中 $R-P-Q=-(x-1)(2x+7)$，而

$$
(R-P-Q)^2-4PQ=-(2x^2-7x+29)(2x^2+3x-1).
$$

第一因子恒正，故候选解为 $x=(-3\pm\sqrt{17})/4$。两者均满足 $-7/2<x<1$，所以符号条件成立，恰为全部解。

## 5. 大参数矩阵

前 $n$ 列的行列式 $\det(tI+C)$ 是首项为 $t^n$ 的多项式，故大 $t$ 时非零。于是 $A$ 的秩为 $n$，$A^T$ 的 $n$ 个列向量线性无关，齐次方程仅有零解。

## 6. 偶数阶斜对称矩阵

写 $n=2r$。对斜对称矩阵定义整数多项式

$$
\operatorname{Pf}(A)=\sum_{\mathcal P}\operatorname{sgn}(i_1,j_1,\ldots,i_r,j_r)
\prod_{s=1}^r a_{i_sj_s},
$$

其中求和遍历 $\{1,\ldots,2r\}$ 的全部无序配对，每对写作 $i_s<j_s$，各对按 $i_1<\cdots<i_r$ 排列。我们说明 $\det A=\operatorname{Pf}(A)^2$。

令 $\omega=\sum_{i<j}a_{ij}e_i\wedge e_j$，展开外积即得 $\omega^r/r!=\operatorname{Pf}(A)e_1\wedge\cdots\wedge e_{2r}$，从而换基给出 $\operatorname{Pf}(P^TAP)=\det P\operatorname{Pf}(A)$。对实斜对称矩阵，通过同时的行列消元，可将其合同化为若干 $\begin{pmatrix}0&c\\-c&0\end{pmatrix}$ 块与零块：选取一个非零非对角元作为首块，用其两行、两列消去其余交叉元，再归纳。对这种块对角矩阵，行列式恰为 Pfaffian 的平方；利用换基公式，恒等式对 $A$ 也成立。

原矩阵元素为整数，配对公式说明 $\operatorname{Pf}(A)$ 为整数，所以行列式是整数的完全平方。

## 7. 旋转单叶双曲面的直纹

经刚体运动，设曲面为 $(x^2+y^2)/a^2-z^2/c^2=1$，$a,c>0$。两族直纹可参数化为

$$
p_\varphi=(a\cos\varphi,a\sin\varphi,0),\qquad
v_{\varphi,\pm}=(-a\sin\varphi,a\cos\varphi,\pm c).
$$

每条直纹到旋转轴的距离为 $a$，与轴夹角为 $\beta=\arctan(a/c)$。

异族方向的内积为 $a^2\cos(\varphi-\psi)-c^2$。若 $a\ge c$，可取到零内积，最大夹角为直角，与条件矛盾。故 $a<c$，异族直线夹角最大值为

$$
\arccos\frac{c^2-a^2}{c^2+a^2}=2\arctan(a/c)=2\beta.
$$

同族两条直纹，令参数差为 $2q$。由异面直线距离公式，距离为

$$
\frac{2ac|\sin q|}{\sqrt{c^2+a^2\cos^2q}},
$$

其最大值为 $2a$，在参数差为 $\pi$ 时取得。因此答案为夹角 $\theta/2$、距离 $d/2$。

## 8. 椭球内接长方体

设长方体中心为 $p$，三个半棱向量为两两垂直且非零的 $u,v,w$。八个顶点是 $p\pm u\pm v\pm w$。令 $Q=\operatorname{diag}(a^{-2},b^{-2},c^{-2})$。

把八个方程 $(p\pm u\pm v\pm w)^TQ(p\pm u\pm v\pm w)=1$ 分别按各符号求和或相减，得到

$$
p^TQu=p^TQv=p^TQw=0,\qquad u^TQv=u^TQw=v^TQw=0.
$$

因 $u,v,w$ 是基且 $Q$ 可逆，前式给出 $p=0$。将三个方向归一化后，它们同时为欧氏正交基并对角化 $Q$，所以都是 $Q$ 的特征向量。三个特征值互异，故这些方向只能分别沿三条坐标轴。

## 9. 正十二面体体积

设 $\phi=(1+\sqrt5)/2$。一个正十二面体的二十个顶点可取为

$$
(\pm1,\pm1,\pm1),\quad(0,\pm\phi^{-1},\pm\phi),\quad
(\pm\phi^{-1},\pm\phi,0),\quad(\pm\phi,0,\pm\phi^{-1}).
$$

各面的五个顶点共面且边长均为 $2/\phi$；例如面 $x+\phi z=\phi^2$ 上的五点为 $(1,\pm1,1)$、$(0,\pm\phi^{-1},\phi)$、$(\phi,0,\phi^{-1})$，按邻接顺序可直接核验它们为正五边形。缩放 $\phi/2$ 后边长为 $1$，内切球半径为

$$
r=\frac{\phi^3}{2\sqrt{1+\phi^2}}.
$$

一个面的面积为 $5\cot(\pi/5)/4$。分成十二个以中心为顶点的五棱锥，得到

$$
V=\frac{12}{3}\cdot\frac54\cot\frac\pi5\cdot r
=\frac{15+7\sqrt5}{4}.
$$

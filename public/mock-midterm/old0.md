# 数学模拟考试题集（含参考答案）


---

## 第一套 试题

### 1. (20分)

**(a)** (10分) 数列 $\{x_n\}$ 满足

$$
\lim_{n\to\infty} (2x_{n+1} + x_n) = a
$$

证明：$\{x_n\}$ 收敛，并求其极限。

> **参考答案思路：** 先证 $\{x_n\}$ 有界，再设 $\lim x_{2n} = A$，$\lim x_{2n+1} = B$，由递推关系得 $A = B = \frac{a}{3}$。

**(b)** (10分) 设 $f: [0, 1] \to [0, 1]$，定义 $f_n(x) = f(f_{n-1}(x))$，$f_1(x) = f(x)$（即 $f_n$ 为 $f$ 的 $n$ 次复合）。若 $f_{2017}(x) = x$（$\forall x \in [0, 1]$），证明：$f(x) = x$。

> **参考答案思路：** 反证法。若 $\exists x_1 \neq x_2$ 使得 $f(x_1) = f(x_2)$，则 $x_1 = f_{2017}(x_1) = f_{2017}(x_2) = x_2$，矛盾，故 $f$ 单射。又若 $\exists x_0$ 使得 $f(x_0) \neq x_0$，不妨设 $f(x_0) < x_0$，由单调性导出矛盾。

---

### 2. (15分)

集合 $\{x_n\} \subset [0, 1]$，满足对任意 $(a, b) \subset [0, 1]$，都有

$$
\lim_{N\to\infty} \frac{|\{1 \leq k \leq N \mid x_k \in (a, b)\}|}{N} = b - a
$$

证明：$\{x_n\}$ 在 $[0, 1]$ 中稠密。

> **参考答案思路：** 反证法。若 $\{x_n\}$ 不稠密，则 $\exists$ 区间不含任何 $x_n$，与等分布性质矛盾。

---

### 3. (15分)

数列 $\{x_n\} \subset [0, 1]$，满足：

**(1)** $\displaystyle\lim_{n\to\infty} (x_{n+1} - x_n) = 0$

**(2)** $\displaystyle\lim_{n\to\infty} n(x_{n+1} - x_n) = +\infty$

证明：$\{x_n\}$ 是 $[0, 1]$ 上的稠密集。

---

### 4. (20分)

单位圆 $x^2 + y^2 = 2$ 上有一点 $P_0(\sqrt{2}, 0)$，任取圆上另外三个点 $P_i = (x_i, y_i)$（$i = 1, 2, 3$），$x_i, y_i \in \mathbb{Q}$。证明：$P_0, P_1, P_2, P_3$ 四点共圆。

---

### 5. (15分)

设 $\alpha = (1, 2, 3)$，$\beta = (4, 5, 6)$，$\gamma = (7, 8, 9)$。问是否存在 $3 \times 3$ 矩阵 $A$，使得

$$
\alpha A = \beta, \quad \beta A = \gamma, \quad \gamma A = \alpha \;?
$$

> **参考答案：** 不存在。若存在 $A$，则 $(\gamma - \beta)A = \alpha - \beta = -3\alpha$（经计算），而 $\beta A - \alpha A = \gamma - \beta$，导出矛盾 $-2\lambda = \lambda$（$\lambda$ 为某特征量），故不存在这样的矩阵 $A$。

---

### 6. (15分)

设 $p$ 为素数，$F_p$ 为 $p$ 元有限域。记 $\mu_{p-1}$ 为 $\mathbb{C}$ 中 $p-1$ 次单位根群，$\omega_n = e^{\frac{2\pi i}{n}}$。对 $a = (a_1, \ldots, a_k) \in \mathbb{Z}^k$，定义 $\omega^a = \prod_{j=1}^k \omega_j^{a_j}$。设 $f: \{1, 2, \ldots, nk\} \to \mathbb{Z}^k$ 为映射，考虑 Vandermonde 型行列式：

$$
\det\left(x^{f(i)-f(j)}\right)_{1 \leq i, j \leq nk}
$$

证明该行列式非零（利用特征和与正交性关系）。

---

### 7. (10分)

给定直角坐标系中的三个圆：

$$
C_1: \begin{cases} x^2 + y^2 = 4 \\ z = 1 \end{cases}, \quad
C_2: \begin{cases} x^2 + y^2 = 1 \\ z = 0 \end{cases}, \quad
C_3: \begin{cases} x^2 + y^2 = 7 \\ z = -1 \end{cases}
$$

求空间中与这三个圆同时相交的直线的并集。

> **参考答案思路：** 考虑过点 $P = (1, 0, 0)$ 的圆锥面 $z = \frac{1}{3}(x^2 + y^2)$，以及过三条直线的一般二次曲面。三个圆 $C_1, C_2, C_3$ 在某二次曲面上，所求直线为该二次曲面的母线。最终答案为双曲抛物面 $x^2 + y^2 = \frac{9}{2}z^2 - \frac{3}{2}z + 1$ 的直母线族。

---

### 8. (10分)

设线性变换 $A$ 是 $\mathbb{R}^3$ 上的正交变换，满足

$$
\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = A \begin{pmatrix} x \\ y \\ z \end{pmatrix}
$$

且 $x' + y' + z' = 0$ 当 $x + y + z = 0$ 时成立（即 $x + y + z = 0$ 平面是不变子空间）。已知 $a_{31} = a_{32} = a_{33}$，求 $A$ 的具体形式。

> **参考答案：**
>
> $$
> A = \begin{pmatrix}
> \frac{\sqrt{6}}{6} & \frac{\sqrt{6}}{6} - \frac{\sqrt{6}}{3} & \frac{\sqrt{6}}{3} \\
> \frac{\sqrt{6}}{2} & -\frac{\sqrt{6}}{2} & 0 \\
> \frac{\sqrt{2}}{3} & \frac{\sqrt{2}}{3} & \frac{\sqrt{2}}{3}
> \end{pmatrix}
> $$
>
> 所求轨迹为：$z = x^2 - y^2$ 上的直母线族 $(x', y', z')$ 满足 $\sqrt{6}x' + 2\sqrt{3}z' = 3(x + y)$ 等关系。

---

### 9. (10分)

构造正十二面体。已知黄金分割率 $\phi = \frac{\sqrt{5}+1}{2}$。

取 $t = \frac{\sqrt{5}+3}{4}$，顶点坐标为 $A_1(-1, 0, t)$，$A_2(1, 0, t)$，$B_1\left(\frac{\sqrt{5}+1}{4}, -\frac{\sqrt{5}+1}{4\sqrt{2}}, \frac{\sqrt{5}+1}{4}\right)$ 等共 20 个顶点。证明以此构成的多面体是正十二面体，并求其体积。

> 正十二面体体积公式：$V = \frac{15 + 7\sqrt{5}}{4} a^3$（$a$ 为边长）

---

### 10. (10分)

设 $f(x) = rx(1-x)$，$r \geq 1$。$f_0 = \mathrm{id}$，$f_n = f \circ f_{n-1}$。对 $r \leq 3$，证明：$\forall x \in (0, 1)$，有

$$
\lim_{n\to\infty} f_n(x) = 1 - \frac{1}{r}
$$

> **参考答案思路：**
> - 当 $r \leq 2$ 时，$|1 - rx| < 1$，$f_n(x)$ 单调收敛到 $1 - \frac{1}{r}$。
> - 当 $2 < r \leq 3$ 时，$\forall x \in (0, \frac{1}{r})$，$\exists n$ 使得 $f_n(x) \in [\frac{1}{r}, 1 - \frac{1}{r}]$；对 $x \in (1 - \frac{1}{r}, 1)$ 同理。在区间 $[\frac{1}{r}, 1 - \frac{1}{r}]$ 上利用 $f(f(x)) - x = -r^3x^3 + 2r^3x^2 - r^2(r+1)x + r^2 - 1$，证明 $x \leq f(f(x)) \leq 1 - \frac{1}{r}$，故 $f_{2n}(x)$ 单调收敛。

---

### 11. (10分)

设 $p$ 为素数，$p \equiv 2 \pmod{3}$。在仿射平面 $\mathbb{F}_p^2$ 上，"点"是 $\mathbb{F}_p^2$ 中的元素，"直线"是 $ax + by + c = 0$ 的解集（$a, b, c \in \mathbb{F}_p$，$a, b$ 不全为零）。证明：存在点的配置使得某些特定共线关系成立。

> 关键结论：当 $p \equiv 1 \pmod{3}$ 时，取 $\omega \in \mathbb{F}_p \setminus \{1\}$ 使得 $\omega^3 = 1$，构造 $A_1(-1, 0)$，$A_2(-\omega, 0)$，$A_3(-\omega^2, 0)$，$B_1(0, -\frac{1}{2})$ 等 12 个点，可证明相应的共线关系。

---

### 12. (10分)

设 $\Gamma_1, \Gamma_2$ 为两条三次曲线，$l_1, l_2$ 为两条直线。已知 $\Gamma_1 \cap l_1 = \{A, B, C, D, E_1, F_1\}$，$\Gamma_2 \cap l_2 = \{A, B, C, D, E_2, F_2\}$。若 $C, D, E_1, F_1, E_2, F_2$ 共于一条三次曲线，证明：$C, D, E_1, F_1, E_2, F_2$ 六点共锥线（即落在某条二次曲线上）。

> **提示：** 利用 Cayley-Bacharach 定理。

---

## 参考答案

### 第一套

**1.**

**(1)** 极限为 $\displaystyle\frac{1}{2}$

**(2)** 极限为 $-\ln a$

**2.**

**(1)** 极限为 $\displaystyle\frac{2}{3}$

**(2)** 极限为 $1$

**3.** 例如取 $\{a_n\} = \{0, 1, 0, 1, \ldots\}$，$\{b_n\} = \{1, 0, 1, 0, \ldots\}$，则 $\{a_n + b_n\} = \{1, 1, 1, 1, \ldots\}$ 收敛。

**4.** 令 $f(x) = x\ln(1 + \frac{1}{x})$，证明 $f(x) < 1 < (x+1)\ln(1 + \frac{1}{x})$，即得 $(1 + \frac{1}{x})^x < e < (1 + \frac{1}{x})^{x+1}$。

**5.**

$$
\int \frac{e^{\arctan x}}{(1+x^2)^{\frac{3}{2}}} \, dx = \frac{x + 1}{\sqrt{x^2 + 1}} e^{\arctan x} + C
$$

**6.** 部分分式分解：

$$
f(x) = x + 5 + \frac{7}{10(x-1)} - \frac{27}{10(x-2)} + \frac{1093}{34(x-3)} - \frac{35x + 6}{170(x^2 + 2x + 2)}
$$

积分得：

$$
\int f(x) \, dx = \frac{x^2}{2} + 5x + \frac{7\ln|x-1|}{10} - \frac{27\ln|x-2|}{10} + \frac{1093\ln|x-3|}{34} - \frac{35\ln(x^2+2x+2)}{68} + \frac{19\arctan(x+1)}{17} - 390 + C
$$

**7.**

$$
B = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}
$$

**8.** $(A + 2I)^{-1} = -\frac{A - I}{3}$

**9.** $|A|$ 的可能取值为 $0, \pm 2, \pm 4$。

**10.** (1) 若 $f'_+(x)$ 右连续，则 $f(x)$ 可导。反例构造：设 $f(x) = -x + 1$（$x < 0$），$f(x) = x$（$x \geq 0$）。

**11.** 对任意 $\alpha \in B = \{\alpha = \alpha_1, \alpha_2, \ldots, \alpha_n\}$，设 $\phi(\alpha) = \sum_{n=1}^{\infty} c_n \alpha_n$，若 $c_i \neq 0$，则 $B \setminus \{\alpha_i\}$ 的维数为 $n-1$，导出 $\phi$ 为相似变换（位似变换），即 $\exists a \in \mathbb{R}$ 使得 $\phi(\alpha) = a\alpha$。

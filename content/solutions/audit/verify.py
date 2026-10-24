"""Exact algebra checks supplementing the manual review in 2026-10-24.md.

Run with Python 3 and SymPy. Finite examples do not prove general statements.
"""
import sympy as s
from itertools import combinations
x,t,u,v=s.symbols('x t u v',real=True)
A=s.Matrix([[2,2,3],[2,u,4],[4,u-v,2]]);B=s.Matrix([[0,2-v,1],[2,1,2],[2,u+v+1,6]]);b=s.Matrix([1,2,2])
assert s.expand((A+B).det()+4*(v-3))==0
assert s.expand((A-B).det()+4*(3*u-3*v-4))==0
assert s.simplify(((A+B).adjugate()*b)[1])==-4
assert s.simplify(((A-B).adjugate()*b)[1])==-28
A=s.Matrix([[3,2,1,6],[-3,4,0,-1],[2,0,1,4],[5,-6,-1,0]])
assert A.rref()[0]==s.Matrix([[1,0,0,1],[0,1,0,s.Rational(1,2)],[0,0,1,2],[0,0,0,0]])
assert A*s.Matrix([2,-1,3,0])==s.Matrix([7,-10,7,13])
D=s.Matrix([[3,7,9,1],[-7,9,5,8],[2,4,-3,5],[1,-6,2,1]])
assert D.cofactor(0,2)+2*D.cofactor(1,3)-3*D.cofactor(0,0)+D.cofactor(3,3)==-316
P=s.Matrix([2,1,1]);Q=s.Matrix([-6,-5,0]);w=s.Matrix([3,3,2]);H=2*w*w.T/(w.dot(w))-s.eye(3)
assert Q+H*(P-Q)==s.Matrix([-2,1,7])
assert H*s.Matrix([9,4,6])==s.Matrix([54,109,36])/11
f=sum(x**i for i in range(7))/((x-1)*(x-2)*(x-3)*(x*x+2*x+2))
F=x*x/2+5*x+s.Rational(7,10)*s.log(x-1)-s.Rational(127,10)*s.log(x-2)+s.Rational(1093,34)*s.log(x-3)-s.Rational(5,68)*s.log(x*x+2*x+2)+s.Rational(19,170)*s.atan(x+1)
assert s.simplify(s.diff(F,x)-f)==0
assert s.simplify(s.diff((x+1)*s.exp(s.atan(x))/(2*s.sqrt(1+x*x)),x)-s.exp(s.atan(x))/(1+x*x)**s.Rational(3,2))==0
E=s.exp(x*x-x);R=s.sqrt(2+s.cos(x))
assert s.simplify(s.diff(s.log(s.sin(E))*s.atan(R),x)-((2*x-1)*E*s.cot(E)*s.atan(R)-s.sin(x)*s.log(s.sin(E))/(2*R*(3+s.cos(x)))))==0
assert s.simplify(s.diff(s.cos(t)/(1+s.exp(t)),t)/(1+s.exp(t))+((1+s.exp(t))*s.sin(t)+s.exp(t)*s.cos(t))/(1+s.exp(t))**3)==0
num=s.sin(s.log(1+x))-s.log(1+s.sin(x));den=s.asin(s.exp(x)-1)-s.exp(s.asin(x))+1
assert s.series(num,x,0,5).removeO()==x**4/12
assert s.series(den,x,0,5).removeO()==x**4/12
r=s.symbols('r');f=r*x*(1-x)
assert s.expand(f.subs(x,f)-x-x*(r-1-r*x)*(r*r*x*x-r*(r+1)*x+r+1))==0
e1=s.Matrix([1,1,-2])/s.sqrt(6)
e2=s.Matrix([1,-1,0])/s.sqrt(2)
e3=-s.Matrix([1,1,1])/s.sqrt(3)
assert e1.cross(e2)==e3
assert s.Matrix.hstack(e1,e2,e3).det()==1
X,Y,Z=u*e1+v*e2+t*e3
projection_equation=t*(s.sqrt(3)-2*s.sqrt(6)*v)+u*(s.sqrt(6)+s.sqrt(12)*v)
assert s.simplify(3*(Z-X*X+Y*Y)+projection_equation)==0
assert s.simplify(projection_equation.subs(v,1/(2*s.sqrt(2))))==3*s.sqrt(6)*u/2
# Verify the nine-point construction over two fields, including absence of 4-collinear points.
for p,w in [(7,2),(13,3)]:
 pts=[(0,1,-pow(w,i,p)%p) for i in range(3)]+[(-pow(w,i,p)%p,0,1) for i in range(3)]+[(1,-pow(w,i,p)%p,0) for i in range(3)]
 for a,b in combinations(pts,2):
  line=s.Matrix(a).cross(s.Matrix(b))
  assert sum(sum(int(line[i])*q[i] for i in range(3))%p==0 for q in pts)==3

# All eight vertices of the right-parallelepiped counterexample lie on E.
a,b,c=s.symbols('a b c', positive=True)
base=[s.Matrix([a,0,0])/s.sqrt(2),s.Matrix([0,b,0])/s.sqrt(2),
      s.Matrix([-a,0,0])/s.sqrt(2),s.Matrix([0,-b,0])/s.sqrt(2)]
for pt in base:
    for sign in [-1,1]:
        px,py,pz=pt+s.Matrix([0,0,sign*c/s.sqrt(2)])
        assert s.simplify(px**2/a**2+py**2/b**2+pz**2/c**2)==1
side=s.Matrix([0,0,s.sqrt(2)*c])
edges=[base[1]-base[0],base[3]-base[0]]
assert base[0]+base[2]==base[1]+base[3]
assert all(edge.dot(side)==0 for edge in edges)
assert s.simplify(edges[0].dot(edges[1]))==(a*a-b*b)/2

# 2025 determinant formulas, parabola, and the linear-algebra paper.
xs=s.symbols('x1:4'); ys=s.symbols('y1:4')
M=s.Matrix(2,2,lambda i,j:(xs[i]+ys[j])**2)
D2=(xs[0]-xs[1])*(ys[1]-ys[0])*((xs[0]+ys[0])*(xs[1]+ys[1])+(xs[0]+ys[1])*(xs[1]+ys[0]))
assert s.expand(M.det()-D2)==0
M=s.Matrix(3,3,lambda i,j:(xs[i]+ys[j])**2)
vand=s.prod(xs[j]-xs[i] for i,j in combinations(range(3),2))*s.prod(ys[j]-ys[i] for i,j in combinations(range(3),2))
assert s.expand(M.det()+2*vand)==0
X=(u+2*v)/s.sqrt(5); Y=(-2*u+v)/s.sqrt(5)
assert s.expand(X**2-4*X*Y+4*Y**2+(t+4)*X+(2-2*t)*Y+2-(5*u*u+t*s.sqrt(5)*u+2*s.sqrt(5)*v+2))==0
assert s.expand(t*t/20+(t*t-12)**2/320-((t*t-4)**2+128)/320)==0
assert s.Matrix([[1,0,1],[1,1,0],[0,1,1]]).det()==2
assert s.Matrix([[1,0,2],[2,1,0],[0,2,1]]).det()==9
assert s.Rational(10,7)*s.Matrix([-3,1,4,2])+s.Rational(5,7)*s.Matrix([2*s.Rational(31,5)-5,-2,1-s.Rational(31,5),-s.Rational(31,5)-2])==s.Matrix([1,0,2,-3])

# 2023 squared distances and 2020/2019 original matrix data.
directions=[s.Matrix(d)/3 for d in [(2,2,1),(2,1,2),(1,2,2)]]
Q=3*s.eye(3)-sum((d*d.T for d in directions),s.zeros(3))
assert Q==s.Rational(26,9)*s.eye(3)-s.Rational(8,9)*s.ones(3)
assert Q.eigenvals()=={s.Rational(2,9):1,s.Rational(26,9):2}
aa=s.symbols('a0:4')
M=s.Matrix([[z**k for z in aa] for k in [0,1,3,4]])
assert s.expand(M.det()-sum(aa[i]*aa[j] for i,j in combinations(range(4),2))*s.prod(aa[j]-aa[i] for i,j in combinations(range(4),2)))==0
M=s.Matrix([[1,2,2,2],[2,5,2,3],[3,6,1,3],[4,7,5,6]])
assert M[:3,:3].det()==-5
assert M*s.Matrix([2,1,3,-5])==s.zeros(4,1)
M=s.Matrix([[2,-4,3,1],[7,7,0,2],[1,3,1,1],[6,6,3,3]])
assert M[:3,:3].det()==84
assert M*s.Matrix([1,1,3,-7])==s.zeros(4,1)
assert M*s.Matrix([3,2,-1,0])==s.Matrix([-5,35,8,27])
for n in range(1,9):
    M=s.Matrix(n,n,lambda i,j:8 if i==j else 5 if j==i+1 else 3 if i==j+1 else 0)
    assert M.det()==(5**(n+1)-3**(n+1))//2
for d in [(2,s.sqrt(6),s.sqrt(6)),(2,-s.sqrt(6),-s.sqrt(6)),
          (2,-1+s.sqrt(5),1+s.sqrt(5)),(2,-1-s.sqrt(5),1-s.sqrt(5))]:
    d=s.Matrix(d)
    assert s.simplify(d.dot(d))==16
    assert s.simplify(9-s.Matrix([1,2,-2]).dot(d)**2/16)==s.Rational(35,4)

# Calculus and geometry identities, with symbolic parameters.
F=s.exp(a*x)*(a*s.sin(b*x)-b*s.cos(b*x))/(a*a+b*b)
assert s.simplify(s.diff(F,x)-s.exp(a*x)*s.sin(b*x))==0
# Both logarithm arguments are positive; combine them before simplification.
assert s.simplify(s.logcombine(s.integrate(s.sqrt(1+x*x),(x,-1,1))-s.sqrt(2)-s.log(1+s.sqrt(2)),force=True))==0
P=x*x+x+1; Q=2*x*x+x+5; R=x*x-3*x+13
assert s.expand((R-P-Q)**2-4*P*Q+(2*x*x-7*x+29)*(2*x*x+3*x-1))==0
phi=(1+s.sqrt(5))/2
radius=phi**3/(2*s.sqrt(1+phi*phi))
assert s.simplify((5*s.cot(s.pi/5)*radius)**2-((15+7*s.sqrt(5))/4)**2)==0
q=s.symbols('q', real=True)
p1=s.Matrix([a*s.cos(q),a*s.sin(q),0]); p2=s.Matrix([a*s.cos(q),-a*s.sin(q),0])
d1=s.Matrix([-a*s.sin(q),a*s.cos(q),c]); d2=s.Matrix([a*s.sin(q),a*s.cos(q),c])
cross=d1.cross(d2)
assert s.trigsimp(((p2-p1).dot(cross))**2-4*a*a*c*c*s.sin(q)**2/(c*c+a*a*s.cos(q)**2)*cross.dot(cross))==0
assert s.expand((1-3*x/4)**2+63*x*x/16-(1-3*x/2+9*x*x/2))==0
assert s.limit(1/x**2-s.cot(x)**2,x,0)==s.Rational(2,3)
assert s.limit((s.sin(x)-s.atan(x))/(s.tan(x)-s.asin(x)),x,0)==1
assert s.rem((x+2)*(3-x)-9,x*x-x+3,x)==0
assert s.Matrix([[1,1,1],[1,s.I,1],[1,1,-s.I]]).det()==2
assert s.Matrix([[1,1,1],[1,-1,1],[1,1,-1]]).det()==4
print('PASS: exact matrix, derivative, integral, series, geometry and recurrence checks; finite examples checked separately from general proofs.')

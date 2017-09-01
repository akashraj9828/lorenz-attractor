# lorenz-attractor

[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif)](https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif)
works on simple maths equation


```sh
1. dX/dT	=	sigma(Y-X)	=> dX	=	sigma(Y-X)*dT
2. dY/dT	=	X(rho-Z)-Y	=> dY	=	(X(rho-Z)-Y)*dT
3. dZ/dT	=	XY-beta(Z)  =>  dZ	=	(XY-beta(Z))*dT
```
>x=x+dX
>y=y+dY
>z=z+dZ

Here x,y,z make up the system state,T is time, and sigma ,rho ,beta  are the system parameters;

One normally assumes that the parameters sigma ,rho ,beta  are positive. Lorenz used the values 
sigma =10,
beta =8/3 and
rho =28.
The system exhibits chaotic behavior for these (and nearby) values.

you can change these values and experiment with the equation as you like to create more beautiful patterns :)
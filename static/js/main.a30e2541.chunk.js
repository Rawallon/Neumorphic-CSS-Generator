(this["webpackJsonpneumorphic-css-generator"]=this["webpackJsonpneumorphic-css-generator"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),s=n.n(o),c=(n(9),n(1));n(10);function l(e){var t=e.title,n=e.value,a=e.onChange,o=e.min,s=e.max,c=e.step,l=void 0===c?1:c,i=e.px,m=void 0===i||i;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"lbl",htmlFor:"size"},t),r.a.createElement("input",{className:"slider",id:t,type:"range",min:o,max:s,step:l,value:n,onChange:function(e){return a(Number(e.target.value))}}),r.a.createElement("span",{className:"stat"},n," ",m&&"px"))}function i(e){var t=e.size,n=e.setSize,o=e.bg,s=e.bgGF,c=e.bgGS,i=e.setBg,m=e.bgInput,u=e.setBgInput,p=e.radius,d=e.setRadius,g=e.dist,E=e.setDist,y=e.intensity,h=e.setIntensity,b=e.blur,v=e.setBlur,x=e.colors,f=e.shape,S=e.setShape;return Object(a.useEffect)((function(){var e=2*g;e>=5&&e<=50&&v(e)}),[g,v]),Object(a.useEffect)((function(){var e=Math.floor(t/10);e>=5&&e<=50&&E(e)}),[t,E]),r.a.createElement("div",{className:"conf"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"head"},"Color"),r.a.createElement("span",null),r.a.createElement("input",{type:"color",id:"head",name:"head",value:o,onChange:function(e){i(e.target.value),u(e.target.value)}}),r.a.createElement("input",{type:"text",id:"head",name:"head",value:m,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"row"},r.a.createElement(l,{title:"size",value:t,onChange:n,min:10,max:400})),r.a.createElement("div",{className:"row"},r.a.createElement(l,{title:"radius",value:p,onChange:d,min:0,max:t/2})),r.a.createElement("div",{className:"row"},r.a.createElement(l,{title:"distance",value:g,onChange:E,min:5,max:50})),r.a.createElement("div",{className:"row"},r.a.createElement(l,{title:"strength",value:y,onChange:h,step:.01,min:.01,max:.6,px:!1})),r.a.createElement("div",{className:"row"},r.a.createElement(l,{title:"blur",value:b,onChange:v,min:0,max:100})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"shape-switch"},r.a.createElement("button",{className:0===f?"active":"",onClick:function(){return S(0)},"data-shape":"0",name:"flat",title:"Flat"},r.a.createElement("svg",{viewBox:"0 0 145 24",fill:"none",stroke:"white",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 22H7C15.2843 22 22 15.2843 22 7.00001V3C22 2.44772 22.4477 2 23 2H121C121.552 2 122 2.44772 122 3V7.00001C122 15.2843 128.716 22 137 22H145",stroke:"inherit",strokeWidth:"6"}))),r.a.createElement("button",{className:1===f?"active":"",onClick:function(){return S(1)},"data-shape":"1",name:"pressed",title:"Pressed"},r.a.createElement("svg",{viewBox:"0 0 145 24",fill:"none",stroke:"white",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145",stroke:"inherit",strokeWidth:"6"}))),r.a.createElement("button",{className:2===f?"active":"",onClick:function(){return S(2)},"data-shape":"2",name:"concave",title:"Concave"},r.a.createElement("svg",{viewBox:"0 0 145 24",fill:"none",stroke:"white",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 22H7C15.2843 22 22 15.2843 22 7.00001V3.39336C22 2.7091 22.6808 2.2299 23.3304 2.44485C59.2066 14.3156 85.7767 12.9047 120.7 2.39438C121.343 2.20072 122 2.67921 122 3.3512V7.00001C122 15.2843 128.716 22 137 22H145",stroke:"inherit",strokeWidth:"6"}))),r.a.createElement("button",{className:3===f?"active":"",onClick:function(){return S(3)},"data-shape":"3",name:"convex",title:"Convex"},r.a.createElement("svg",{viewBox:"0 0 145 33",fill:"none",stroke:"white",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M0 31H7C15.2843 31 22 24.2843 22 16V11.7329C22 11.2966 22.2898 10.9083 22.7061 10.7779C60.0722 -0.924818 84.913 -0.925978 121.302 10.7745C121.714 10.9071 122 11.2935 122 11.727V16C122 24.2843 128.716 31 137 31H145",stroke:"inherit",strokeWidth:"6"}))))),r.a.createElement("div",{className:"code neu"},r.a.createElement("span",null,"border-radius: "),p,"px;",r.a.createElement("br",null),r.a.createElement("span",null,"background: "),(0===f||3===f)&&o+";",1===f&&"linear-gradient(145deg, "+s+", "+c+");",2===f&&"linear-gradient(145deg, "+c+", "+s+");",r.a.createElement("br",null),r.a.createElement("span",null,"box-shadow:")," ",g,"px ",g,"px ",b,"px"," ",x.split("-")[0],",",r.a.createElement("br",null),"-",g,"px -",g,"px ",b,"px"," ",x.split("-")[1],";",r.a.createElement("br",null)))}n(11);function m(e){var t=e.size,n=e.radius,o=e.shape,s=e.angle,c=e.setAngle;return Object(a.useEffect)((function(){document.documentElement.style.setProperty("--size",String(t)+"px"),document.documentElement.style.setProperty("--radius",String(n)+"px")}),[t,n]),r.a.createElement("div",{className:"preview"},r.a.createElement("button",{className:"leftU".concat(0===s?" activeA":""),onClick:function(){return c(0)}}),r.a.createElement("button",{className:"rightU".concat(1===s?" activeA":""),onClick:function(){return c(1)}}),r.a.createElement("button",{className:"rightD".concat(2===s?" activeA":""),onClick:function(){return c(2)}}),r.a.createElement("button",{className:"leftD".concat(3===s?" activeA":""),onClick:function(){return c(3)}}),r.a.createElement("div",{className:"box".concat(3===o?" pressed":"")}))}function u(e,t){var n=String(e).replace(/[^0-9a-f]/gi,"");n.length<6&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]);var a,r,o="#";for(r=0;r<3;r++)a=parseInt(n.substr(2*r,2),16),o+=("00"+(a=Math.round(Math.min(Math.max(0,a+a*t),255)).toString(16))).substr(a.length);return o}var p=function(){var e=Object(a.useState)(300),t=Object(c.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(50),l=Object(c.a)(s,2),p=l[0],d=l[1],g=Object(a.useState)(20),E=Object(c.a)(g,2),y=E[0],h=E[1],b=Object(a.useState)(.15),v=Object(c.a)(b,2),x=v[0],f=v[1],S=Object(a.useState)(60),P=Object(c.a)(S,2),w=P[0],C=P[1],k=Object(a.useState)("#efeeee"),O=Object(c.a)(k,2),N=O[0],j=O[1],B=Object(a.useState)(N),A=Object(c.a)(B,2),H=A[0],X=A[1],Y=Object(a.useState)(0),z=Object(c.a)(Y,2),F=z[0],M=z[1],I=Object(a.useState)(0),V=Object(c.a)(I,2),D=V[0],G=V[1];return Object(a.useEffect)((function(){document.documentElement.style.setProperty("--background",N),0===F||402===F?(document.documentElement.style.setProperty("--backgroundFirst",N),document.documentElement.style.setProperty("--backgroundSecond",N)):1===F?(document.documentElement.style.setProperty("--backgroundFirst",u(N,-.1)),document.documentElement.style.setProperty("--backgroundSecond",u(N,.1))):2===F&&(document.documentElement.style.setProperty("--backgroundFirst",u(N,.1)),document.documentElement.style.setProperty("--backgroundSecond",u(N,-.1))),document.documentElement.style.setProperty("--blur",String(w)+"px"),document.documentElement.style.setProperty("--positionX",String(y)+"px"),document.documentElement.style.setProperty("--positionY",String(y)+"px"),document.documentElement.style.setProperty("--positionXOpposite","-"+String(y)+"px"),document.documentElement.style.setProperty("--positionYOpposite","-"+String(y)+"px"),document.documentElement.style.setProperty("--intensityL",u(N,x)),document.documentElement.style.setProperty("--intensityD",u(N,-1*x)),document.documentElement.style.setProperty("--intensityS",u(N,-1*(x-.7))),document.documentElement.style.setProperty("--intensityB",u(N,x-.15)),"1"===N.toString().charAt(1)||"0"===N.toString().charAt(1)?document.documentElement.style.setProperty("--intensityBaa","#fff"):"f"===N.toString().charAt(1)||"e"===N.toString().charAt(1)||"d"===N.toString().charAt(1)||"b"===N.toString().charAt(1)?document.documentElement.style.setProperty("--intensityBaa","#000"):document.documentElement.style.setProperty("--intensityBaa",u(N,.7))}),[N,y,x,w,F]),Object(a.useEffect)((function(){switch(D){case 0:document.documentElement.style.setProperty("--positionX",String(y)+"px"),document.documentElement.style.setProperty("--positionY",String(y)+"px"),document.documentElement.style.setProperty("--positionXOpposite","-"+String(y)+"px"),document.documentElement.style.setProperty("--positionYOpposite","-"+String(y)+"px"),document.documentElement.style.setProperty("--angle","145deg");break;case 1:document.documentElement.style.setProperty("--positionX","-"+String(y)+"px"),document.documentElement.style.setProperty("--positionY",String(y)+"px"),document.documentElement.style.setProperty("--positionXOpposite",String(y)+"px"),document.documentElement.style.setProperty("--positionYOpposite","-"+String(y)+"px"),document.documentElement.style.setProperty("--angle","225deg");break;case 2:document.documentElement.style.setProperty("--positionX","-"+String(y)+"px"),document.documentElement.style.setProperty("--positionY","-"+String(y)+"px"),document.documentElement.style.setProperty("--positionXOpposite",String(y)+"px"),document.documentElement.style.setProperty("--positionYOpposite",String(y)+"px"),document.documentElement.style.setProperty("--angle","315deg");break;case 3:document.documentElement.style.setProperty("--positionX",String(y)+"px"),document.documentElement.style.setProperty("--positionY","-"+String(y)+"px"),document.documentElement.style.setProperty("--positionXOpposite","-"+String(y)+"px"),document.documentElement.style.setProperty("--positionYOpposite",String(y)+"px"),document.documentElement.style.setProperty("--angle","45deg");break;default:document.documentElement.style.setProperty("--angle","145deg")}}),[D,y]),r.a.createElement("div",{className:"App"},r.a.createElement(i,{size:n,setSize:o,bg:N,setBg:j,bgGF:F>0?u(N,-.1):N,bgGS:F>0?u(N,.1):N,bgInput:H,setBgInput:function(e){X(e),7===e.length&&"#"===e.charAt(0)?j(e):X(e)},radius:p,setRadius:d,dist:y,setDist:h,intensity:x,setIntensity:f,blur:w,setBlur:C,colors:u(N,x)+"-"+u(N,-1*x),shape:F,setShape:M}),r.a.createElement(m,{size:n,radius:p,shape:F,angle:D,setAngle:G}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.a30e2541.chunk.js.map
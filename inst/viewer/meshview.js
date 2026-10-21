/* meshview (meshcore, MIT). Bundles three 0.169.0 (MIT) and apache-arrow 17.0.0 (Apache-2.0). */
(()=>{var ty=Object.defineProperty;var ns=(n,t)=>{for(var e in t)ty(n,e,{get:t[e],enumerable:!0})};var ef="169",bs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ey=0,Tp=1,ny=2;var Rm=1,iy=2,$i=3,Vr=0,Mn=1,Yn=2,Fr=0,so=1,Ep=2,Ip=3,Rp=4,ry=5,hs=100,sy=101,oy=102,ay=103,cy=104,ly=200,hy=201,uy=202,dy=203,zu=204,Vu=205,fy=206,py=207,my=208,gy=209,_y=210,yy=211,vy=212,xy=213,by=214,ku=0,Hu=1,Gu=2,lo=3,Wu=4,Xu=5,Yu=6,qu=7,nf=0,Sy=1,My=2,zr=0,wy=1,Ay=2,Ty=3,Ey=4,Iy=5,Ry=6,Cy=7;var Cm=300,ho=301,uo=302,ju=303,Zu=304,xl=306,$u=1e3,fs=1001,Ju=1002,qn=1003,Dy=1004;var mc=1005;var oi=1006,cu=1007;var ps=1008;var tr=1009,Dm=1010,Pm=1011,ra=1012,rf=1013,ms=1014,Ji=1015,da=1016,sf=1017,of=1018,fo=1020,Lm=35902,Um=1021,Nm=1022,ai=1023,Bm=1024,Om=1025,oo=1026,po=1027,Fm=1028,af=1029,zm=1030,cf=1031;var lf=1033,kc=33776,Hc=33777,Gc=33778,Wc=33779,Ku=35840,Qu=35841,td=35842,ed=35843,nd=36196,id=37492,rd=37496,sd=37808,od=37809,ad=37810,cd=37811,ld=37812,hd=37813,ud=37814,dd=37815,fd=37816,pd=37817,md=37818,gd=37819,_d=37820,yd=37821,Xc=36492,vd=36494,xd=36495,Vm=36283,bd=36284,Sd=36285,Md=36286;var qc=2300,wd=2301,lu=2302,Cp=2400,Dp=2401,Pp=2402;var Py=3200,Ly=3201;var km=0,Uy=1,Or="",Ri="srgb",kr="srgb-linear",hf="display-p3",bl="display-p3-linear",jc="linear",Ce="srgb",Zc="rec709",$c="p3";var Gs=7680;var Lp=519,Ny=512,By=513,Oy=514,Hm=515,Fy=516,zy=517,Vy=518,ky=519,Up=35044;var Np="300 es",Ki=2e3,Jc=2001,er=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bp=1234567,ea=Math.PI/180,sa=180/Math.PI;function vo(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function un(n,t,e){return Math.max(t,Math.min(e,n))}function uf(n,t){return(n%t+t)%t}function Hy(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Gy(n,t,e){return n!==t?(e-n)/(t-n):0}function na(n,t,e){return(1-e)*n+e*t}function Wy(n,t,e,i){return na(n,t,1-Math.exp(-e*i))}function Xy(n,t=1){return t-Math.abs(uf(n,t*2)-t)}function Yy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function qy(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function jy(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Zy(n,t){return n+Math.random()*(t-n)}function $y(n){return n*(.5-Math.random())}function Jy(n){n!==void 0&&(Bp=n);let t=Bp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ky(n){return n*ea}function Qy(n){return n*sa}function t0(n){return(n&n-1)===0&&n!==0}function e0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function n0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function i0(n,t,e,i,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),d=o((t-i)/2),m=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*_,c*m,a*l);break;case"YXY":n.set(c*m,a*h,c*_,a*l);break;case"ZYZ":n.set(c*_,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function io(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Gm={DEG2RAD:ea,RAD2DEG:sa,generateUUID:vo,clamp:un,euclideanModulo:uf,mapLinear:Hy,inverseLerp:Gy,lerp:na,damp:Wy,pingpong:Xy,smoothstep:Yy,smootherstep:qy,randInt:jy,randFloat:Zy,randFloatSpread:$y,seededRandom:Jy,degToRad:Ky,radToDeg:Qy,isPowerOfTwo:t0,ceilPowerOfTwo:e0,floorPowerOfTwo:n0,setQuaternionFromProperEuler:i0,normalize:fn,denormalize:io},Zt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class n{constructor(t,e,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l)}set(t,e,i,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],_=i[8],v=r[0],p=r[3],f=r[6],w=r[1],S=r[4],A=r[7],F=r[2],C=r[5],T=r[8];return s[0]=o*v+a*w+c*F,s[3]=o*p+a*S+c*C,s[6]=o*f+a*A+c*T,s[1]=l*v+h*w+u*F,s[4]=l*p+h*S+u*C,s[7]=l*f+h*A+u*T,s[2]=d*v+m*w+_*F,s[5]=d*p+m*S+_*C,s[8]=d*f+m*A+_*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*s*h+i*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,_=e*u+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=u*v,t[1]=(r*l-h*i)*v,t[2]=(a*i-r*o)*v,t[3]=d*v,t[4]=(h*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=m*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hu.makeScale(t,e)),this}rotate(t){return this.premultiply(hu.makeRotation(-t)),this}translate(t,e){return this.premultiply(hu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hu=new Qt;function Wm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Kc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function r0(){let n=Kc("canvas");return n.style.display="block",n}var Op={};function Yc(n){n in Op||(Op[n]=!0,console.warn(n))}function s0(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function o0(n){let t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function a0(n){let t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Fp=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jo={[kr]:{transfer:jc,primaries:Zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ri]:{transfer:Ce,primaries:Zc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bl]:{transfer:jc,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(zp),fromReference:n=>n.applyMatrix3(Fp)},[hf]:{transfer:Ce,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(zp),fromReference:n=>n.applyMatrix3(Fp).convertLinearToSRGB()}},c0=new Set([kr,bl]),fe={enabled:!0,_workingColorSpace:kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!c0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=jo[t].toReference,r=jo[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return jo[n].primaries},getTransfer:function(n){return n===Or?jc:jo[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(jo[t].luminanceCoefficients)}};function ao(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function uu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ws,Ad=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ws===void 0&&(Ws=Kc("canvas")),Ws.width=t.width,Ws.height=t.height;let i=Ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ws}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Kc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ao(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ao(e[i]/255)*255):e[i]=ao(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},l0=0,Qc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=vo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(du(r[o].image)):s.push(du(r[o]))}else s=du(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function du(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ad.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var h0=0,jn=class n extends er{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=fs,r=fs,s=oi,o=ps,a=ai,c=tr,l=n.DEFAULT_ANISOTROPY,h=Or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=vo(),this.name="",this.source=new Qc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $u:t.x=t.x-Math.floor(t.x);break;case fs:t.x=t.x<0?0:1;break;case Ju:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $u:t.y=t.y-Math.floor(t.y);break;case fs:t.y=t.y<0?0:1;break;case Ju:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Cm;jn.DEFAULT_ANISOTROPY=1;var Oe=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],_=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(l+1)/2,A=(m+1)/2,F=(f+1)/2,C=(h+d)/4,T=(u+v)/4,z=(_+p)/4;return S>A&&S>F?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=C/i,s=T/i):A>F?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=C/r,s=z/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=T/s,r=z/s),this.set(i,r,s,e),this}let w=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-_)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Td=class extends er{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e);let r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new jn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Td{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},tl=class extends jn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ed=class extends jn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var li=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=s[o+0],m=s[o+1],_=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(u!==v||c!==d||l!==m||h!==_){let p=1-a,f=c*d+l*m+h*_+u*v,w=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let F=Math.sqrt(S),C=Math.atan2(F,f*w);p=Math.sin(p*C)/F,a=Math.sin(a*C)/F}let A=a*w;if(c=c*p+d*A,l=l*p+m*A,h=h*p+_*A,u=u*p+v*A,p===1-a){let F=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=F,l*=F,h*=F,u*=F}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+h*u+c*m-l*d,t[e+1]=c*_+h*d+l*u-a*m,t[e+2]=l*_+h*m+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(r/2),u=a(s/2),d=c(i/2),m=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"YZX":this._x=d*h*u+l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u-d*m*_;break;case"XZY":this._x=d*h*u-l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-i*l,this._z=s*h+o*l+i*c-r*a,this._w=o*h-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fu.copy(this).projectOnVector(t),this.sub(fu)}reflect(t){return this.sub(fu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fu=new U,Vp=new li,gs=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gc.copy(i.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),_c.subVectors(this.max,Zo),Xs.subVectors(t.a,Zo),Ys.subVectors(t.b,Zo),qs.subVectors(t.c,Zo),Dr.subVectors(Ys,Xs),Pr.subVectors(qs,Ys),is.subVectors(Xs,qs);let e=[0,-Dr.z,Dr.y,0,-Pr.z,Pr.y,0,-is.z,is.y,Dr.z,0,-Dr.x,Pr.z,0,-Pr.x,is.z,0,-is.x,-Dr.y,Dr.x,0,-Pr.y,Pr.x,0,-is.y,is.x,0];return!pu(e,Xs,Ys,qs,_c)||(e=[1,0,0,0,1,0,0,0,1],!pu(e,Xs,Ys,qs,_c))?!1:(yc.crossVectors(Dr,Pr),e=[yc.x,yc.y,yc.z],pu(e,Xs,Ys,qs,_c))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xi=[new U,new U,new U,new U,new U,new U,new U,new U],ni=new U,gc=new gs,Xs=new U,Ys=new U,qs=new U,Dr=new U,Pr=new U,is=new U,Zo=new U,_c=new U,yc=new U,rs=new U;function pu(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){rs.fromArray(n,s);let a=r.x*Math.abs(rs.x)+r.y*Math.abs(rs.y)+r.z*Math.abs(rs.z),c=t.dot(rs),l=e.dot(rs),h=i.dot(rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var u0=new gs,$o=new U,mu=new U,_s=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):u0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);let e=$o.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector($o,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(mu)),this.expandByPoint($o.copy(t.center).sub(mu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yi=new U,gu=new U,vc=new U,Lr=new U,_u=new U,xc=new U,yu=new U,ys=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){gu.copy(t).add(e).multiplyScalar(.5),vc.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(gu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(vc),a=Lr.dot(this.direction),c=-Lr.dot(vc),l=Lr.lengthSq(),h=Math.abs(1-o*o),u,d,m,_;if(h>0)if(u=o*c-a,d=o*a-c,_=s*h,u>=0)if(d>=-_)if(d<=_){let v=1/h;u*=v,d*=v,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gu).addScaledVector(vc,d),m}intersectSphere(t,e){Yi.subVectors(t.center,this.origin);let i=Yi.dot(this.direction),r=Yi.dot(Yi)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,i,r,s){_u.subVectors(e,t),xc.subVectors(i,t),yu.crossVectors(_u,xc);let o=this.direction.dot(yu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Lr.subVectors(this.origin,t);let c=a*this.direction.dot(xc.crossVectors(Lr,xc));if(c<0)return null;let l=a*this.direction.dot(_u.cross(Lr));if(l<0||c+l>o)return null;let h=-a*Lr.dot(yu);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class n{constructor(t,e,i,r,s,o,a,c,l,h,u,d,m,_,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,c,l,h,u,d,m,_,v,p)}set(t,e,i,r,s,o,a,c,l,h,u,d,m,_,v,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=_,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/js.setFromMatrixColumn(t,0).length(),s=1/js.setFromMatrixColumn(t,1).length(),o=1/js.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,m=o*u,_=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+_*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=_+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*u,_=l*h,v=l*u;e[0]=d+v*a,e[4]=_*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-_,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*u,_=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*u,_=a*h,v=a*u;e[0]=c*h,e[4]=_*l-m,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=m*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,_=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=_*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+_,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*c,m=o*l,_=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(d0,t,f0)}lookAt(t,e,i){let r=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ur.crossVectors(i,Ln),Ur.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ur.crossVectors(i,Ln)),Ur.normalize(),bc.crossVectors(Ln,Ur),r[0]=Ur.x,r[4]=bc.x,r[8]=Ln.x,r[1]=Ur.y,r[5]=bc.y,r[9]=Ln.y,r[2]=Ur.z,r[6]=bc.z,r[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],_=i[2],v=i[6],p=i[10],f=i[14],w=i[3],S=i[7],A=i[11],F=i[15],C=r[0],T=r[4],z=r[8],nt=r[12],g=r[1],b=r[5],W=r[9],V=r[13],Y=r[2],Q=r[6],k=r[10],et=r[14],G=r[3],st=r[7],lt=r[11],vt=r[15];return s[0]=o*C+a*g+c*Y+l*G,s[4]=o*T+a*b+c*Q+l*st,s[8]=o*z+a*W+c*k+l*lt,s[12]=o*nt+a*V+c*et+l*vt,s[1]=h*C+u*g+d*Y+m*G,s[5]=h*T+u*b+d*Q+m*st,s[9]=h*z+u*W+d*k+m*lt,s[13]=h*nt+u*V+d*et+m*vt,s[2]=_*C+v*g+p*Y+f*G,s[6]=_*T+v*b+p*Q+f*st,s[10]=_*z+v*W+p*k+f*lt,s[14]=_*nt+v*V+p*et+f*vt,s[3]=w*C+S*g+A*Y+F*G,s[7]=w*T+S*b+A*Q+F*st,s[11]=w*z+S*W+A*k+F*lt,s[15]=w*nt+S*V+A*et+F*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],v=t[7],p=t[11],f=t[15];return _*(+s*c*u-r*l*u-s*a*d+i*l*d+r*a*m-i*c*m)+v*(+e*c*m-e*l*d+s*o*d-r*o*m+r*l*h-s*c*h)+p*(+e*l*u-e*a*m-s*o*u+i*o*m+s*a*h-i*l*h)+f*(-r*a*h-e*c*u+e*a*d+r*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],v=t[13],p=t[14],f=t[15],w=u*p*l-v*d*l+v*c*m-a*p*m-u*c*f+a*d*f,S=_*d*l-h*p*l-_*c*m+o*p*m+h*c*f-o*d*f,A=h*v*l-_*u*l+_*a*m-o*v*m-h*a*f+o*u*f,F=_*u*c-h*v*c-_*a*d+o*v*d+h*a*p-o*u*p,C=e*w+i*S+r*A+s*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return t[0]=w*T,t[1]=(v*d*s-u*p*s-v*r*m+i*p*m+u*r*f-i*d*f)*T,t[2]=(a*p*s-v*c*s+v*r*l-i*p*l-a*r*f+i*c*f)*T,t[3]=(u*c*s-a*d*s-u*r*l+i*d*l+a*r*m-i*c*m)*T,t[4]=S*T,t[5]=(h*p*s-_*d*s+_*r*m-e*p*m-h*r*f+e*d*f)*T,t[6]=(_*c*s-o*p*s-_*r*l+e*p*l+o*r*f-e*c*f)*T,t[7]=(o*d*s-h*c*s+h*r*l-e*d*l-o*r*m+e*c*m)*T,t[8]=A*T,t[9]=(_*u*s-h*v*s-_*i*m+e*v*m+h*i*f-e*u*f)*T,t[10]=(o*v*s-_*a*s+_*i*l-e*v*l-o*i*f+e*a*f)*T,t[11]=(h*a*s-o*u*s-h*i*l+e*u*l+o*i*m-e*a*m)*T,t[12]=F*T,t[13]=(h*v*r-_*u*r+_*i*d-e*v*d-h*i*p+e*u*p)*T,t[14]=(_*a*r-o*v*r-_*i*c+e*v*c+o*i*p-e*a*p)*T,t[15]=(o*u*r-h*a*r+h*i*c-e*u*c-o*i*d+e*a*d)*T,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+i,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,_=s*u,v=o*h,p=o*u,f=a*u,w=c*l,S=c*h,A=c*u,F=i.x,C=i.y,T=i.z;return r[0]=(1-(v+f))*F,r[1]=(m+A)*F,r[2]=(_-S)*F,r[3]=0,r[4]=(m-A)*C,r[5]=(1-(d+f))*C,r[6]=(p+w)*C,r[7]=0,r[8]=(_+S)*T,r[9]=(p-w)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,s=js.set(r[0],r[1],r[2]).length(),o=js.set(r[4],r[5],r[6]).length(),a=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],ii.copy(this);let l=1/s,h=1/o,u=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=h,ii.elements[5]*=h,ii.elements[6]*=h,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,e.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Ki){let c=this.elements,l=2*s/(e-t),h=2*s/(i-r),u=(e+t)/(e-t),d=(i+r)/(i-r),m,_;if(a===Ki)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Jc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Ki){let c=this.elements,l=1/(e-t),h=1/(i-r),u=1/(o-s),d=(e+t)*l,m=(i+r)*h,_,v;if(a===Ki)_=(o+s)*u,v=-2*u;else if(a===Jc)_=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},js=new U,ii=new Ue,d0=new U(0,0,0),f0=new U(1,1,1),Ur=new U,bc=new U,Ln=new U,kp=new Ue,Hp=new li,Pi=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var el=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},p0=0,Gp=new U,Zs=new li,qi=new Ue,Sc=new U,Jo=new U,m0=new U,g0=new li,Wp=new U(1,0,0),Xp=new U(0,1,0),Yp=new U(0,0,1),qp={type:"added"},_0={type:"removed"},$s={type:"childadded",child:null},vu={type:"childremoved",child:null},rn=class n extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,e=new Pi,i=new li,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Qt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(Wp,t)}rotateY(t){return this.rotateOnAxis(Xp,t)}rotateZ(t){return this.rotateOnAxis(Yp,t)}translateOnAxis(t,e){return Gp.copy(t).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wp,t)}translateY(t){return this.translateOnAxis(Xp,t)}translateZ(t){return this.translateOnAxis(Yp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Sc.copy(t):Sc.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Jo,Sc,this.up):qi.lookAt(Sc,Jo,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(qi),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qp),$s.child=t,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_0),vu.child=t,this.dispatchEvent(vu),vu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qp),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,m0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,g0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};rn.DEFAULT_UP=new U(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new U,ji=new U,xu=new U,Zi=new U,Js=new U,Ks=new U,jp=new U,bu=new U,Su=new U,Mu=new U,wu=new Oe,Au=new Oe,Tu=new Oe,us=class n{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),ri.subVectors(t,e),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){ri.subVectors(r,e),ji.subVectors(i,e),xu.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(ji),c=ri.dot(xu),l=ji.dot(ji),h=ji.dot(xu),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,m=(l*c-a*h)*d,_=(o*h-a*c)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(t,e,i,r,s,o,a,c){return this.getBarycoord(t,e,i,r,Zi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Zi.x),c.addScaledVector(o,Zi.y),c.addScaledVector(a,Zi.z),c)}static getInterpolatedAttribute(t,e,i,r,s,o){return wu.setScalar(0),Au.setScalar(0),Tu.setScalar(0),wu.fromBufferAttribute(t,e),Au.fromBufferAttribute(t,i),Tu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(wu,s.x),o.addScaledVector(Au,s.y),o.addScaledVector(Tu,s.z),o}static isFrontFacing(t,e,i,r){return ri.subVectors(i,e),ji.subVectors(t,e),ri.cross(ji).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),ri.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;Js.subVectors(r,i),Ks.subVectors(s,i),bu.subVectors(t,i);let c=Js.dot(bu),l=Ks.dot(bu);if(c<=0&&l<=0)return e.copy(i);Su.subVectors(t,r);let h=Js.dot(Su),u=Ks.dot(Su);if(h>=0&&u<=h)return e.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Js,o);Mu.subVectors(t,s);let m=Js.dot(Mu),_=Ks.dot(Mu);if(_>=0&&m<=_)return e.copy(s);let v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Ks,a);let p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return jp.subVectors(s,r),a=(u-h)/(u-h+(m-_)),e.copy(r).addScaledVector(jp,a);let f=1/(p+v+d);return o=v*f,a=d*f,e.copy(i).addScaledVector(Js,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Eu(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ee=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=i,fe.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=fe.workingColorSpace){if(t=uf(t,1),e=un(e,0,1),i=un(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Eu(o,s,t+1/3),this.g=Eu(o,s,t),this.b=Eu(o,s,t-1/3)}return fe.toWorkingColorSpace(this,r),this}setStyle(t,e=Ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ri){let i=Xm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}copyLinearToSRGB(t){return this.r=uu(t.r),this.g=uu(t.g),this.b=uu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ri){return fe.fromWorkingColorSpace(hn.copy(this),t),Math.round(un(hn.r*255,0,255))*65536+Math.round(un(hn.g*255,0,255))*256+Math.round(un(hn.b*255,0,255))}getHexString(t=Ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.fromWorkingColorSpace(hn.copy(this),e);let i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=Ri){fe.fromWorkingColorSpace(hn.copy(this),t);let e=hn.r,i=hn.g,r=hn.b;return t!==Ri?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Nr),this.setHSL(Nr.h+t,Nr.s+e,Nr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Nr),t.getHSL(Mc);let i=na(Nr.h,Mc.h,e),r=na(Nr.s,Mc.s,e),s=na(Nr.l,Mc.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ee;ee.NAMES=Xm;var y0=0,nr=class extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=so,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zu,this.blendDst=Vu,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(i.blending=this.blending),this.side!==Vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zu&&(i.blendSrc=this.blendSrc),this.blendDst!==Vu&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},mo=class extends nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new U,wc=new Zt,Ge=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Up,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wc.fromBufferAttribute(this,e),wc.applyMatrix3(t),this.setXY(e,wc.x,wc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=io(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=io(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=io(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=io(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=io(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),r=fn(r,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Up&&(t.usage=this.usage),t}};var nl=class extends Ge{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var il=class extends Ge{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Di=class extends Ge{constructor(t,e,i){super(new Float32Array(t),e,i)}},v0=0,Xn=new Ue,Iu=new rn,Qs=new U,Un=new gs,Ko=new gs,tn=new U,gn=class n extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wm(t)?il:nl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,i){return Xn.makeTranslation(t,e,i),this.applyMatrix4(Xn),this}scale(t,e,i){return Xn.makeScale(t,e,i),this.applyMatrix4(Xn),this}lookAt(t){return Iu.lookAt(t),Iu.updateMatrix(),this.applyMatrix4(Iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){let e=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Di(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Un.min,Ko.min),Un.expandByPoint(tn),tn.addVectors(Un.max,Ko.max),Un.expandByPoint(tn)):(Un.expandByPoint(Ko.min),Un.expandByPoint(Ko.max))}Un.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)tn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(tn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)tn.fromBufferAttribute(a,l),c&&(Qs.fromBufferAttribute(t,l),tn.add(Qs)),r=Math.max(r,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let z=0;z<i.count;z++)a[z]=new U,c[z]=new U;let l=new U,h=new U,u=new U,d=new Zt,m=new Zt,_=new Zt,v=new U,p=new U;function f(z,nt,g){l.fromBufferAttribute(i,z),h.fromBufferAttribute(i,nt),u.fromBufferAttribute(i,g),d.fromBufferAttribute(s,z),m.fromBufferAttribute(s,nt),_.fromBufferAttribute(s,g),h.sub(l),u.sub(l),m.sub(d),_.sub(d);let b=1/(m.x*_.y-_.x*m.y);isFinite(b)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(b),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(b),a[z].add(v),a[nt].add(v),a[g].add(v),c[z].add(p),c[nt].add(p),c[g].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let z=0,nt=w.length;z<nt;++z){let g=w[z],b=g.start,W=g.count;for(let V=b,Y=b+W;V<Y;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new U,A=new U,F=new U,C=new U;function T(z){F.fromBufferAttribute(r,z),C.copy(F);let nt=a[z];S.copy(nt),S.sub(F.multiplyScalar(F.dot(nt))).normalize(),A.crossVectors(C,nt);let b=A.dot(c[z])<0?-1:1;o.setXYZW(z,S.x,S.y,S.z,b)}for(let z=0,nt=w.length;z<nt;++z){let g=w[z],b=g.start,W=g.count;for(let V=b,Y=b+W;V<Y;V+=3)T(t.getX(V+0)),T(t.getX(V+1)),T(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){let _=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),m=0,_=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*h;for(let f=0;f<h;f++)d[_++]=l[m++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,i);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=t(d,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zp=new Ue,ss=new ys,Ac=new _s,$p=new U,Tc=new U,Ec=new U,Ic=new U,Ru=new U,Rc=new U,Jp=new U,Cc=new U,Sn=class extends rn{constructor(t=new gn,e=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Ru.fromBufferAttribute(u,t),o?Rc.addScaledVector(Ru,h):Rc.addScaledVector(Ru.sub(e),h))}e.add(Rc)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(s),ss.copy(t.ray).recast(t.near),!(Ac.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Ac,$p)===null||ss.origin.distanceToSquared($p)>(t.far-t.near)**2))&&(Zp.copy(s).invert(),ss.copy(t.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let p=d[_],f=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=w,F=S;A<F;A+=3){let C=a.getX(A),T=a.getX(A+1),z=a.getX(A+2);r=Dc(this,f,t,i,l,h,u,C,T,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){let w=a.getX(p),S=a.getX(p+1),A=a.getX(p+2);r=Dc(this,o,t,i,l,h,u,w,S,A),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){let p=d[_],f=o[p.materialIndex],w=Math.max(p.start,m.start),S=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=w,F=S;A<F;A+=3){let C=A,T=A+1,z=A+2;r=Dc(this,f,t,i,l,h,u,C,T,z),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=_,f=v;p<f;p+=3){let w=p,S=p+1,A=p+2;r=Dc(this,o,t,i,l,h,u,w,S,A),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function x0(n,t,e,i,r,s,o,a){let c;if(t.side===Mn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,t.side===Vr,a),c===null)return null;Cc.copy(a),Cc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Cc);return l<e.near||l>e.far?null:{distance:l,point:Cc.clone(),object:n}}function Dc(n,t,e,i,r,s,o,a,c,l){n.getVertexPosition(a,Tc),n.getVertexPosition(c,Ec),n.getVertexPosition(l,Ic);let h=x0(n,t,e,i,Tc,Ec,Ic,Jp);if(h){let u=new U;us.getBarycoord(Jp,Tc,Ec,Ic,u),r&&(h.uv=us.getInterpolatedAttribute(r,a,c,l,u,new Zt)),s&&(h.uv1=us.getInterpolatedAttribute(s,a,c,l,u,new Zt)),o&&(h.normal=us.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};us.getNormal(Tc,Ec,Ic,d.normal),h.face=d,h.barycoord=u}return h}var oa=class n extends gn{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,m=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Di(l,3)),this.setAttribute("normal",new Di(h,3)),this.setAttribute("uv",new Di(u,2));function _(v,p,f,w,S,A,F,C,T,z,nt){let g=A/T,b=F/z,W=A/2,V=F/2,Y=C/2,Q=T+1,k=z+1,et=0,G=0,st=new U;for(let lt=0;lt<k;lt++){let vt=lt*b-V;for(let ae=0;ae<Q;ae++){let ce=ae*g-W;st[v]=ce*w,st[p]=vt*S,st[f]=Y,l.push(st.x,st.y,st.z),st[v]=0,st[p]=0,st[f]=C>0?1:-1,h.push(st.x,st.y,st.z),u.push(ae/T),u.push(1-lt/z),et+=1}}for(let lt=0;lt<z;lt++)for(let vt=0;vt<T;vt++){let ae=d+vt+Q*lt,ce=d+vt+Q*(lt+1),X=d+(vt+1)+Q*(lt+1),tt=d+(vt+1)+Q*lt;c.push(ae,ce,tt),c.push(ce,X,tt),G+=6}a.addGroup(m,G,nt),m+=G,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function go(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=go(n[e]);for(let r in i)t[r]=i[r]}return t}function b0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ym(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var S0={clone:go,merge:pn},M0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Li=class extends nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M0,this.fragmentShader=w0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=b0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},rl=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Br=new U,Kp=new Zt,Qp=new Zt,mn=class extends rl{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Br.x,Br.y).multiplyScalar(-t/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Br.x,Br.y).multiplyScalar(-t/Br.z)}getViewSize(t,e){return this.getViewBounds(t,Kp,Qp),e.subVectors(Qp,Kp)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ea*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},to=-90,eo=1,Id=class extends rn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new mn(to,eo,t,e);r.layers=this.layers,this.add(r);let s=new mn(to,eo,t,e);s.layers=this.layers,this.add(s);let o=new mn(to,eo,t,e);o.layers=this.layers,this.add(o);let a=new mn(to,eo,t,e);a.layers=this.layers,this.add(a);let c=new mn(to,eo,t,e);c.layers=this.layers,this.add(c);let l=new mn(to,eo,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Jc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,c),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},sl=class extends jn{constructor(t,e,i,r,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ho,super(t,e,i,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rd=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new sl(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:oi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Fr});s.uniforms.tEquirect.value=e;let o=new Sn(r,s),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=oi),new Id(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}},Cu=new U,A0=new U,T0=new Qt,si=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Cu.subVectors(i,e).cross(A0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||T0.getNormalMatrix(t),r=this.coplanarPoint(Cu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new _s,Pc=new U,aa=class{constructor(t=new si,e=new si,i=new si,r=new si,s=new si,o=new si){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ki){let i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],_=r[9],v=r[10],p=r[11],f=r[12],w=r[13],S=r[14],A=r[15];if(i[0].setComponents(c-s,d-l,p-m,A-f).normalize(),i[1].setComponents(c+s,d+l,p+m,A+f).normalize(),i[2].setComponents(c+o,d+h,p+_,A+w).normalize(),i[3].setComponents(c-o,d-h,p-_,A-w).normalize(),i[4].setComponents(c-a,d-u,p-v,A-S).normalize(),e===Ki)i[5].setComponents(c+a,d+u,p+v,A+S).normalize();else if(e===Jc)i[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Pc.x=r.normal.x>0?t.max.x:t.min.x,Pc.y=r.normal.y>0?t.max.y:t.min.y,Pc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qm(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function E0(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<u.length;m++){let _=u[d],v=u[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let m=0,_=u.length;m<_;m++){let v=u[m];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var ol=class n extends gn{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),c=Math.floor(r),l=a+1,h=c+1,u=t/a,d=e/c,m=[],_=[],v=[],p=[];for(let f=0;f<h;f++){let w=f*d-o;for(let S=0;S<l;S++){let A=S*u-s;_.push(A,-w,0),v.push(0,0,1),p.push(S/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<a;w++){let S=w+l*f,A=w+l*(f+1),F=w+1+l*(f+1),C=w+1+l*f;m.push(S,A,C),m.push(A,F,C)}this.setIndex(m),this.setAttribute("position",new Di(_,3)),this.setAttribute("normal",new Di(v,3)),this.setAttribute("uv",new Di(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,J0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ev=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ov=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$v=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ox=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:I0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:D0,alphatest_fragment:P0,alphatest_pars_fragment:L0,aomap_fragment:U0,aomap_pars_fragment:N0,batching_pars_vertex:B0,batching_vertex:O0,begin_vertex:F0,beginnormal_vertex:z0,bsdfs:V0,iridescence_fragment:k0,bumpmap_pars_fragment:H0,clipping_planes_fragment:G0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:Y0,color_fragment:q0,color_pars_fragment:j0,color_pars_vertex:Z0,color_vertex:$0,common:J0,cube_uv_reflection_fragment:K0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:tv,displacementmap_vertex:ev,emissivemap_fragment:nv,emissivemap_pars_fragment:iv,colorspace_fragment:rv,colorspace_pars_fragment:sv,envmap_fragment:ov,envmap_common_pars_fragment:av,envmap_pars_fragment:cv,envmap_pars_vertex:lv,envmap_physical_pars_fragment:xv,envmap_vertex:hv,fog_vertex:uv,fog_pars_vertex:dv,fog_fragment:fv,fog_pars_fragment:pv,gradientmap_pars_fragment:mv,lightmap_pars_fragment:gv,lights_lambert_fragment:_v,lights_lambert_pars_fragment:yv,lights_pars_begin:vv,lights_toon_fragment:bv,lights_toon_pars_fragment:Sv,lights_phong_fragment:Mv,lights_phong_pars_fragment:wv,lights_physical_fragment:Av,lights_physical_pars_fragment:Tv,lights_fragment_begin:Ev,lights_fragment_maps:Iv,lights_fragment_end:Rv,logdepthbuf_fragment:Cv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Lv,map_fragment:Uv,map_pars_fragment:Nv,map_particle_fragment:Bv,map_particle_pars_fragment:Ov,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:zv,morphinstance_vertex:Vv,morphcolor_vertex:kv,morphnormal_vertex:Hv,morphtarget_pars_vertex:Gv,morphtarget_vertex:Wv,normal_fragment_begin:Xv,normal_fragment_maps:Yv,normal_pars_fragment:qv,normal_pars_vertex:jv,normal_vertex:Zv,normalmap_pars_fragment:$v,clearcoat_normal_fragment_begin:Jv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:tx,opaque_fragment:ex,packing:nx,premultiplied_alpha_fragment:ix,project_vertex:rx,dithering_fragment:sx,dithering_pars_fragment:ox,roughnessmap_fragment:ax,roughnessmap_pars_fragment:cx,shadowmap_pars_fragment:lx,shadowmap_pars_vertex:hx,shadowmap_vertex:ux,shadowmask_pars_fragment:dx,skinbase_vertex:fx,skinning_pars_vertex:px,skinning_vertex:mx,skinnormal_vertex:gx,specularmap_fragment:_x,specularmap_pars_fragment:yx,tonemapping_fragment:vx,tonemapping_pars_fragment:xx,transmission_fragment:bx,transmission_pars_fragment:Sx,uv_pars_fragment:Mx,uv_pars_vertex:wx,uv_vertex:Ax,worldpos_vertex:Tx,background_vert:Ex,background_frag:Ix,backgroundCube_vert:Rx,backgroundCube_frag:Cx,cube_vert:Dx,cube_frag:Px,depth_vert:Lx,depth_frag:Ux,distanceRGBA_vert:Nx,distanceRGBA_frag:Bx,equirect_vert:Ox,equirect_frag:Fx,linedashed_vert:zx,linedashed_frag:Vx,meshbasic_vert:kx,meshbasic_frag:Hx,meshlambert_vert:Gx,meshlambert_frag:Wx,meshmatcap_vert:Xx,meshmatcap_frag:Yx,meshnormal_vert:qx,meshnormal_frag:jx,meshphong_vert:Zx,meshphong_frag:$x,meshphysical_vert:Jx,meshphysical_frag:Kx,meshtoon_vert:Qx,meshtoon_frag:tb,points_vert:eb,points_frag:nb,shadow_vert:ib,shadow_frag:rb,sprite_vert:sb,sprite_frag:ob},ct={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ci={basic:{uniforms:pn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:pn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ee(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:pn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:pn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:pn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new ee(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:pn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:pn([ct.points,ct.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:pn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:pn([ct.common,ct.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:pn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:pn([ct.sprite,ct.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:pn([ct.common,ct.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:pn([ct.lights,ct.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ci.physical={uniforms:pn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Lc={r:0,b:0,g:0},as=new Pi,ab=new Ue;function cb(n,t,e,i,r,s,o){let a=new ee(0),c=s===!0?0:1,l,h,u=null,d=0,m=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function v(w){let S=!1,A=_(w);A===null?f(a,c):A&&A.isColor&&(f(A,1),S=!0);let F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,S){let A=_(S);A&&(A.isCubeTexture||A.mapping===xl)?(h===void 0&&(h=new Sn(new oa(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:go(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),as.copy(S.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ab.makeRotationFromEuler(as)),h.material.toneMapped=fe.getTransfer(A.colorSpace)!==Ce,(u!==A||d!==A.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,m=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Sn(new ol(2,2),new Li({name:"BackgroundMaterial",uniforms:go(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=fe.getTransfer(A.colorSpace)!==Ce,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,m=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,S){w.getRGB(Lc,Ym(n)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:v,addToRenderList:p}}function lb(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(g,b,W,V,Y){let Q=!1,k=u(V,W,b);s!==k&&(s=k,l(s.object)),Q=m(g,V,W,Y),Q&&_(g,V,W,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,A(g,b,W,V),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return n.createVertexArray()}function l(g){return n.bindVertexArray(g)}function h(g){return n.deleteVertexArray(g)}function u(g,b,W){let V=W.wireframe===!0,Y=i[g.id];Y===void 0&&(Y={},i[g.id]=Y);let Q=Y[b.id];Q===void 0&&(Q={},Y[b.id]=Q);let k=Q[V];return k===void 0&&(k=d(c()),Q[V]=k),k}function d(g){let b=[],W=[],V=[];for(let Y=0;Y<e;Y++)b[Y]=0,W[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:V,object:g,attributes:{},index:null}}function m(g,b,W,V){let Y=s.attributes,Q=b.attributes,k=0,et=W.getAttributes();for(let G in et)if(et[G].location>=0){let lt=Y[G],vt=Q[G];if(vt===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(vt=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(vt=g.instanceColor)),lt===void 0||lt.attribute!==vt||vt&&lt.data!==vt.data)return!0;k++}return s.attributesNum!==k||s.index!==V}function _(g,b,W,V){let Y={},Q=b.attributes,k=0,et=W.getAttributes();for(let G in et)if(et[G].location>=0){let lt=Q[G];lt===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(lt=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(lt=g.instanceColor));let vt={};vt.attribute=lt,lt&&lt.data&&(vt.data=lt.data),Y[G]=vt,k++}s.attributes=Y,s.attributesNum=k,s.index=V}function v(){let g=s.newAttributes;for(let b=0,W=g.length;b<W;b++)g[b]=0}function p(g){f(g,0)}function f(g,b){let W=s.newAttributes,V=s.enabledAttributes,Y=s.attributeDivisors;W[g]=1,V[g]===0&&(n.enableVertexAttribArray(g),V[g]=1),Y[g]!==b&&(n.vertexAttribDivisor(g,b),Y[g]=b)}function w(){let g=s.newAttributes,b=s.enabledAttributes;for(let W=0,V=b.length;W<V;W++)b[W]!==g[W]&&(n.disableVertexAttribArray(W),b[W]=0)}function S(g,b,W,V,Y,Q,k){k===!0?n.vertexAttribIPointer(g,b,W,Y,Q):n.vertexAttribPointer(g,b,W,V,Y,Q)}function A(g,b,W,V){v();let Y=V.attributes,Q=W.getAttributes(),k=b.defaultAttributeValues;for(let et in Q){let G=Q[et];if(G.location>=0){let st=Y[et];if(st===void 0&&(et==="instanceMatrix"&&g.instanceMatrix&&(st=g.instanceMatrix),et==="instanceColor"&&g.instanceColor&&(st=g.instanceColor)),st!==void 0){let lt=st.normalized,vt=st.itemSize,ae=t.get(st);if(ae===void 0)continue;let ce=ae.buffer,X=ae.type,tt=ae.bytesPerElement,mt=X===n.INT||X===n.UNSIGNED_INT||st.gpuType===rf;if(st.isInterleavedBufferAttribute){let ft=st.data,Yt=ft.stride,Ut=st.offset;if(ft.isInstancedInterleavedBuffer){for(let $t=0;$t<G.locationSize;$t++)f(G.location+$t,ft.meshPerAttribute);g.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let $t=0;$t<G.locationSize;$t++)p(G.location+$t);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let $t=0;$t<G.locationSize;$t++)S(G.location+$t,vt/G.locationSize,X,lt,Yt*tt,(Ut+vt/G.locationSize*$t)*tt,mt)}else{if(st.isInstancedBufferAttribute){for(let ft=0;ft<G.locationSize;ft++)f(G.location+ft,st.meshPerAttribute);g.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ft=0;ft<G.locationSize;ft++)p(G.location+ft);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let ft=0;ft<G.locationSize;ft++)S(G.location+ft,vt/G.locationSize,X,lt,vt*tt,vt/G.locationSize*ft*tt,mt)}}else if(k!==void 0){let lt=k[et];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(G.location,lt);break;case 3:n.vertexAttrib3fv(G.location,lt);break;case 4:n.vertexAttrib4fv(G.location,lt);break;default:n.vertexAttrib1fv(G.location,lt)}}}}w()}function F(){z();for(let g in i){let b=i[g];for(let W in b){let V=b[W];for(let Y in V)h(V[Y].object),delete V[Y];delete b[W]}delete i[g]}}function C(g){if(i[g.id]===void 0)return;let b=i[g.id];for(let W in b){let V=b[W];for(let Y in V)h(V[Y].object),delete V[Y];delete b[W]}delete i[g.id]}function T(g){for(let b in i){let W=i[b];if(W[g.id]===void 0)continue;let V=W[g.id];for(let Y in V)h(V[Y].object),delete V[Y];delete W[g.id]}}function z(){nt(),o=!0,s!==r&&(s=r,l(s.object))}function nt(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:nt,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function hb(n,t,e){let i;function r(l){i=l}function s(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,i,1)}function c(l,h,u,d){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v];for(let v=0;v<d.length;v++)e.update(_,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ub(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ai&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let z=T===da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==tr&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ji&&!z)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){let T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:A,vertexTextures:F,maxSamples:C}}function db(n){let t=this,e=null,i=0,r=!1,s=!1,o=new si,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,m){let _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!r||_===null||_.length===0||s&&!p)s?h(null):l();else{let w=s?0:i,S=w*4,A=f.clippingState||null;c.value=A,A=h(_,d,S,m);for(let F=0;F!==S;++F)A[F]=e[F];f.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,_){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=c.value,_!==!0||p===null){let f=m+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let S=0,A=m;S!==v;++S,A+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(p,A),p[A+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function fb(n){let t=new WeakMap;function e(o,a){return a===ju?o.mapping=ho:a===Zu&&(o.mapping=uo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===ju||a===Zu)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Rd(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var al=class extends rl{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ro=4,tm=[.125,.215,.35,.446,.526,.582],ds=20,Du=new al,em=new ee,Pu=null,Lu=0,Uu=0,Nu=!1,ls=(1+Math.sqrt(5))/2,no=1/ls,nm=[new U(-ls,no,0),new U(ls,no,0),new U(-no,0,ls),new U(no,0,ls),new U(0,ls,-no),new U(0,ls,no),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],cl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pu,Lu,Uu),this._renderer.xr.enabled=Nu,t.scissorTest=!1,Uc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ho||t.mapping===uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:da,format:ai,colorSpace:kr,depthBuffer:!1},r=im(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pb(s)),this._blurMaterial=mb(s,t,e)}return r}_compileMaterial(t){let e=new Sn(this._lodPlanes[0],t);this._renderer.compile(e,Du)}_sceneToCubeUV(t,e,i,r){let a=new mn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(em),h.toneMapping=zr,h.autoClear=!1;let m=new mo({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Sn(new oa,m),v=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(em),v=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):w===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let S=this._cubeSize;Uc(r,w*S,f>2?S:0,S,S),h.setRenderTarget(r),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===ho||t.mapping===uo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Uc(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Du)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nm[(r-s-1)%nm.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Sn(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ds-1),v=s/_,p=isFinite(s)?1+Math.floor(h*v):ds;p>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ds}`);let f=[],w=0;for(let T=0;T<ds;++T){let z=T/v,nt=Math.exp(-z*z/2);f.push(nt),T===0?w+=nt:T<p&&(w+=2*nt)}for(let T=0;T<f.length;T++)f[T]=f[T]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;let A=this._sizeLods[r],F=3*A*(r>S-ro?r-S+ro:0),C=4*(this._cubeSize-A);Uc(e,F,C,3*A,2*A),c.setRenderTarget(e),c.render(u,Du)}};function pb(n){let t=[],e=[],i=[],r=n,s=n-ro+1+tm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-ro?c=tm[o-n+ro-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,p=2,f=1,w=new Float32Array(v*_*m),S=new Float32Array(p*_*m),A=new Float32Array(f*_*m);for(let C=0;C<m;C++){let T=C%3*2/3-1,z=C>2?0:-1,nt=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];w.set(nt,v*_*C),S.set(d,p*_*C);let g=[C,C,C,C,C,C];A.set(g,f*_*C)}let F=new gn;F.setAttribute("position",new Ge(w,v)),F.setAttribute("uv",new Ge(S,p)),F.setAttribute("faceIndex",new Ge(A,f)),t.push(F),r>ro&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function im(n,t,e){let i=new ci(n,t,e);return i.texture.mapping=xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uc(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function mb(n,t,e){let i=new Float32Array(ds),r=new U(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function rm(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function sm(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gb(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===ju||c===Zu,h=c===ho||c===uo;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cl(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return l&&m&&m.height>0||h&&m&&r(m)?(e===null&&(e=new cl(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function _b(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Yc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yb(n,t,e,i){let r={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);for(let _ in d.morphAttributes){let v=d.morphAttributes[_];for(let p=0,f=v.length;p<f;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let _ in d)t.update(d[_],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let _ in m){let v=m[_];for(let p=0,f=v.length;p<f;p++)t.update(v[p],n.ARRAY_BUFFER)}}function l(u){let d=[],m=u.index,_=u.attributes.position,v=0;if(m!==null){let w=m.array;v=m.version;for(let S=0,A=w.length;S<A;S+=3){let F=w[S+0],C=w[S+1],T=w[S+2];d.push(F,C,C,T,T,F)}}else if(_!==void 0){let w=_.array;v=_.version;for(let S=0,A=w.length/3-1;S<A;S+=3){let F=S+0,C=S+1,T=S+2;d.push(F,C,C,T,T,F)}}else return;let p=new(Wm(d)?il:nl)(d,1);p.version=v;let f=s.get(u);f&&t.remove(f),s.set(u,p)}function h(u){let d=s.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function vb(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){n.drawElements(i,m,s,d*o),e.update(m,i,1)}function l(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,d*o,_),e.update(m,i,_))}function h(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];e.update(p,i,1)}function u(d,m,_,v){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,_);let f=0;for(let w=0;w<_;w++)f+=m[w];for(let w=0;w<v.length;w++)e.update(f,i,v[w])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xb(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function bb(n,t,e){let i=new WeakMap,r=new Oe;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let nt=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",nt)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;m===!0&&(S=1),_===!0&&(S=2),v===!0&&(S=3);let A=a.attributes.position.count*S,F=1;A>t.maxTextureSize&&(F=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let C=new Float32Array(A*F*4*u),T=new tl(C,A,F,u);T.type=Ji,T.needsUpdate=!0;let z=S*4;for(let g=0;g<u;g++){let b=p[g],W=f[g],V=w[g],Y=A*F*4*g;for(let Q=0;Q<b.count;Q++){let k=Q*z;m===!0&&(r.fromBufferAttribute(b,Q),C[Y+k+0]=r.x,C[Y+k+1]=r.y,C[Y+k+2]=r.z,C[Y+k+3]=0),_===!0&&(r.fromBufferAttribute(W,Q),C[Y+k+4]=r.x,C[Y+k+5]=r.y,C[Y+k+6]=r.z,C[Y+k+7]=0),v===!0&&(r.fromBufferAttribute(V,Q),C[Y+k+8]=r.x,C[Y+k+9]=r.y,C[Y+k+10]=r.z,C[Y+k+11]=V.itemSize===4?r.w:1)}}d={count:u,texture:T,size:new Zt(A,F)},i.set(a,d),a.addEventListener("dispose",nt)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];let _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Sb(n,t,e,i){let r=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var ll=class extends jn{constructor(t,e,i,r,s,o,a,c,l,h=oo){if(h!==oo&&h!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===oo&&(i=ms),i===void 0&&h===po&&(i=fo),super(null,r,s,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qn,this.minFilter=c!==void 0?c:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},jm=new jn,om=new ll(1,1),Zm=new tl,$m=new Ed,Jm=new sl,am=[],cm=[],lm=new Float32Array(16),hm=new Float32Array(9),um=new Float32Array(4);function xo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=am[r];if(s===void 0&&(s=new Float32Array(r),am[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Sl(n,t){let e=cm[t];e===void 0&&(e=new Int32Array(t),cm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Mb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function wb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Ab(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function Tb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function Eb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;um.set(i),n.uniformMatrix2fv(this.addr,!1,um),Ze(e,i)}}function Ib(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;hm.set(i),n.uniformMatrix3fv(this.addr,!1,hm),Ze(e,i)}}function Rb(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;lm.set(i),n.uniformMatrix4fv(this.addr,!1,lm),Ze(e,i)}}function Cb(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Db(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function Pb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function Lb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function Ub(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Nb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Bb(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function Ob(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function Fb(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(om.compareFunction=Hm,s=om):s=jm,e.setTexture2D(t||s,r)}function zb(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||$m,r)}function Vb(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Jm,r)}function kb(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Zm,r)}function Hb(n){switch(n){case 5126:return Mb;case 35664:return wb;case 35665:return Ab;case 35666:return Tb;case 35674:return Eb;case 35675:return Ib;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Db;case 35668:case 35672:return Pb;case 35669:case 35673:return Lb;case 5125:return Ub;case 36294:return Nb;case 36295:return Bb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return kb}}function Gb(n,t){n.uniform1fv(this.addr,t)}function Wb(n,t){let e=xo(t,this.size,2);n.uniform2fv(this.addr,e)}function Xb(n,t){let e=xo(t,this.size,3);n.uniform3fv(this.addr,e)}function Yb(n,t){let e=xo(t,this.size,4);n.uniform4fv(this.addr,e)}function qb(n,t){let e=xo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jb(n,t){let e=xo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zb(n,t){let e=xo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $b(n,t){n.uniform1iv(this.addr,t)}function Jb(n,t){n.uniform2iv(this.addr,t)}function Kb(n,t){n.uniform3iv(this.addr,t)}function Qb(n,t){n.uniform4iv(this.addr,t)}function tS(n,t){n.uniform1uiv(this.addr,t)}function eS(n,t){n.uniform2uiv(this.addr,t)}function nS(n,t){n.uniform3uiv(this.addr,t)}function iS(n,t){n.uniform4uiv(this.addr,t)}function rS(n,t,e){let i=this.cache,r=t.length,s=Sl(e,r);je(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||jm,s[o])}function sS(n,t,e){let i=this.cache,r=t.length,s=Sl(e,r);je(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||$m,s[o])}function oS(n,t,e){let i=this.cache,r=t.length,s=Sl(e,r);je(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Jm,s[o])}function aS(n,t,e){let i=this.cache,r=t.length,s=Sl(e,r);je(i,s)||(n.uniform1iv(this.addr,s),Ze(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Zm,s[o])}function cS(n){switch(n){case 5126:return Gb;case 35664:return Wb;case 35665:return Xb;case 35666:return Yb;case 35674:return qb;case 35675:return jb;case 35676:return Zb;case 5124:case 35670:return $b;case 35667:case 35671:return Jb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return tS;case 36294:return eS;case 36295:return nS;case 36296:return iS;case 35678:case 36198:case 36298:case 36306:case 35682:return rS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return oS;case 36289:case 36303:case 36311:case 36292:return aS}}var Cd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Hb(e.type)}},Dd=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cS(e.type)}},Pd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},Bu=/(\w+)(\])?(\[|\.)?/g;function dm(n,t){n.seq.push(t),n.map[t.id]=t}function lS(n,t,e){let i=n.name,r=i.length;for(Bu.lastIndex=0;;){let s=Bu.exec(i),o=Bu.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){dm(e,l===void 0?new Cd(a,n,t):new Dd(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Pd(a),dm(e,u)),e=u}}}var co=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);lS(s,o,this)}}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function fm(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var hS=37297,uS=0;function dS(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function fS(n){let t=fe.getPrimaries(fe.workingColorSpace),e=fe.getPrimaries(n),i;switch(t===e?i="":t===$c&&e===Zc?i="LinearDisplayP3ToLinearSRGB":t===Zc&&e===$c&&(i="LinearSRGBToLinearDisplayP3"),n){case kr:case bl:return[i,"LinearTransferOETF"];case Ri:case hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function pm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+dS(n.getShaderSource(t),o)}else return r}function pS(n,t){let e=fS(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function mS(n,t){let e;switch(t){case wy:e="Linear";break;case Ay:e="Reinhard";break;case Ty:e="Cineon";break;case Ey:e="ACESFilmic";break;case Ry:e="AgX";break;case Cy:e="Neutral";break;case Iy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nc=new U;function gS(){fe.getLuminanceCoefficients(Nc);let n=Nc.x.toFixed(4),t=Nc.y.toFixed(4),e=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _S(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function yS(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function vS(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ta(n){return n!==""}function mm(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(n){return n.replace(xS,SS)}var bS=new Map;function SS(n,t){let e=Kt[t];if(e===void 0){let i=bS.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ld(e)}var MS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(n){return n.replace(MS,wS)}function wS(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function AS(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===iy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function TS(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ho:case uo:t="ENVMAP_TYPE_CUBE";break;case xl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ES(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case uo:t="ENVMAP_MODE_REFRACTION";break}return t}function IS(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nf:t="ENVMAP_BLENDING_MULTIPLY";break;case Sy:t="ENVMAP_BLENDING_MIX";break;case My:t="ENVMAP_BLENDING_ADD";break}return t}function RS(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function CS(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=AS(e),l=TS(e),h=ES(e),u=IS(e),d=RS(e),m=_S(e),_=yS(s),v=r.createProgram(),p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ta).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ta).join(`
`),f.length>0&&(f+=`
`)):(p=[ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),f=[ym(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zr?"#define TONE_MAPPING":"",e.toneMapping!==zr?Kt.tonemapping_pars_fragment:"",e.toneMapping!==zr?mS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,pS("linearToOutputTexel",e.outputColorSpace),gS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ta).join(`
`)),o=Ld(o),o=mm(o,e),o=gm(o,e),a=Ld(a),a=mm(a,e),a=gm(a,e),o=_m(o),a=_m(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=w+p+o,A=w+f+a,F=fm(r,r.VERTEX_SHADER,S),C=fm(r,r.FRAGMENT_SHADER,A);r.attachShader(v,F),r.attachShader(v,C),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(b){if(n.debug.checkShaderErrors){let W=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(F).trim(),Y=r.getShaderInfoLog(C).trim(),Q=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,F,C);else{let et=pm(r,F,"vertex"),G=pm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+W+`
`+et+`
`+G)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||Y==="")&&(k=!1);k&&(b.diagnostics={runnable:Q,programLog:W,vertexShader:{log:V,prefix:p},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(F),r.deleteShader(C),z=new co(r,v),nt=vS(r,v)}let z;this.getUniforms=function(){return z===void 0&&T(this),z};let nt;this.getAttributes=function(){return nt===void 0&&T(this),nt};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,hS)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uS++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=C,this}var DS=0,Ud=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Nd(t),e.set(t,i)),i}},Nd=class{constructor(t){this.id=DS++,this.code=t,this.usedTimes=0}};function PS(n,t,e,i,r,s,o){let a=new el,c=new Ud,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,_=r.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function f(g,b,W,V,Y){let Q=V.fog,k=Y.geometry,et=g.isMeshStandardMaterial?V.environment:null,G=(g.isMeshStandardMaterial?e:t).get(g.envMap||et),st=G&&G.mapping===xl?G.image.height:null,lt=v[g.type];g.precision!==null&&(_=r.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));let vt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=vt!==void 0?vt.length:0,ce=0;k.morphAttributes.position!==void 0&&(ce=1),k.morphAttributes.normal!==void 0&&(ce=2),k.morphAttributes.color!==void 0&&(ce=3);let X,tt,mt,ft;if(lt){let bn=Ci[lt];X=bn.vertexShader,tt=bn.fragmentShader}else X=g.vertexShader,tt=g.fragmentShader,c.update(g),mt=c.getVertexShaderID(g),ft=c.getFragmentShaderID(g);let Yt=n.getRenderTarget(),Ut=Y.isInstancedMesh===!0,$t=Y.isBatchedMesh===!0,de=!!g.map,ie=!!g.matcap,E=!!G,qe=!!g.aoMap,re=!!g.lightMap,se=!!g.bumpMap,zt=!!g.normalMap,Se=!!g.displacementMap,Nt=!!g.emissiveMap,M=!!g.metalnessMap,y=!!g.roughnessMap,N=g.anisotropy>0,Z=g.clearcoat>0,K=g.dispersion>0,j=g.iridescence>0,xt=g.sheen>0,ot=g.transmission>0,gt=N&&!!g.anisotropyMap,le=Z&&!!g.clearcoatMap,L=Z&&!!g.clearcoatNormalMap,q=Z&&!!g.clearcoatRoughnessMap,rt=j&&!!g.iridescenceMap,_t=j&&!!g.iridescenceThicknessMap,J=xt&&!!g.sheenColorMap,kt=xt&&!!g.sheenRoughnessMap,Bt=!!g.specularMap,qt=!!g.specularColorMap,I=!!g.specularIntensityMap,at=ot&&!!g.transmissionMap,H=ot&&!!g.thicknessMap,$=!!g.gradientMap,ht=!!g.alphaMap,yt=g.alphaTest>0,ue=!!g.alphaHash,ke=!!g.extensions,xn=zr;g.toneMapped&&(Yt===null||Yt.isXRRenderTarget===!0)&&(xn=n.toneMapping);let me={shaderID:lt,shaderType:g.type,shaderName:g.name,vertexShader:X,fragmentShader:tt,defines:g.defines,customVertexShaderID:mt,customFragmentShaderID:ft,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:$t,batchingColor:$t&&Y._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&Y.instanceColor!==null,instancingMorph:Ut&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Yt===null?n.outputColorSpace:Yt.isXRRenderTarget===!0?Yt.texture.colorSpace:kr,alphaToCoverage:!!g.alphaToCoverage,map:de,matcap:ie,envMap:E,envMapMode:E&&G.mapping,envMapCubeUVHeight:st,aoMap:qe,lightMap:re,bumpMap:se,normalMap:zt,displacementMap:m&&Se,emissiveMap:Nt,normalMapObjectSpace:zt&&g.normalMapType===Uy,normalMapTangentSpace:zt&&g.normalMapType===km,metalnessMap:M,roughnessMap:y,anisotropy:N,anisotropyMap:gt,clearcoat:Z,clearcoatMap:le,clearcoatNormalMap:L,clearcoatRoughnessMap:q,dispersion:K,iridescence:j,iridescenceMap:rt,iridescenceThicknessMap:_t,sheen:xt,sheenColorMap:J,sheenRoughnessMap:kt,specularMap:Bt,specularColorMap:qt,specularIntensityMap:I,transmission:ot,transmissionMap:at,thicknessMap:H,gradientMap:$,opaque:g.transparent===!1&&g.blending===so&&g.alphaToCoverage===!1,alphaMap:ht,alphaTest:yt,alphaHash:ue,combine:g.combine,mapUv:de&&p(g.map.channel),aoMapUv:qe&&p(g.aoMap.channel),lightMapUv:re&&p(g.lightMap.channel),bumpMapUv:se&&p(g.bumpMap.channel),normalMapUv:zt&&p(g.normalMap.channel),displacementMapUv:Se&&p(g.displacementMap.channel),emissiveMapUv:Nt&&p(g.emissiveMap.channel),metalnessMapUv:M&&p(g.metalnessMap.channel),roughnessMapUv:y&&p(g.roughnessMap.channel),anisotropyMapUv:gt&&p(g.anisotropyMap.channel),clearcoatMapUv:le&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:L&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:J&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:kt&&p(g.sheenRoughnessMap.channel),specularMapUv:Bt&&p(g.specularMap.channel),specularColorMapUv:qt&&p(g.specularColorMap.channel),specularIntensityMapUv:I&&p(g.specularIntensityMap.channel),transmissionMapUv:at&&p(g.transmissionMap.channel),thicknessMapUv:H&&p(g.thicknessMap.channel),alphaMapUv:ht&&p(g.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(zt||N),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!k.attributes.uv&&(de||ht),fog:!!Q,useFog:g.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:xn,decodeVideoTexture:de&&g.map.isVideoTexture===!0&&fe.getTransfer(g.map.colorSpace)===Ce,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Yn,flipSided:g.side===Mn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ke&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&g.extensions.multiDraw===!0||$t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function w(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let W in g.defines)b.push(W),b.push(g.defines[W]);return g.isRawShaderMaterial===!1&&(S(b,g),A(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function S(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function A(g,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),g.push(a.mask)}function F(g){let b=v[g.type],W;if(b){let V=Ci[b];W=S0.clone(V.uniforms)}else W=g.uniforms;return W}function C(g,b){let W;for(let V=0,Y=h.length;V<Y;V++){let Q=h[V];if(Q.cacheKey===b){W=Q,++W.usedTimes;break}}return W===void 0&&(W=new CS(n,b,g,s),h.push(W)),W}function T(g){if(--g.usedTimes===0){let b=h.indexOf(g);h[b]=h[h.length-1],h.pop(),g.destroy()}}function z(g){c.remove(g)}function nt(){c.dispose()}return{getParameters:f,getProgramCacheKey:w,getUniforms:F,acquireProgram:C,releaseProgram:T,releaseShaderCache:z,programs:h,dispose:nt}}function LS(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function US(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xm(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,d,m,_,v,p){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=p),t++,f}function a(u,d,m,_,v,p){let f=o(u,d,m,_,v,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):e.push(f)}function c(u,d,m,_,v,p){let f=o(u,d,m,_,v,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||US),i.length>1&&i.sort(d||vm),r.length>1&&r.sort(d||vm)}function h(){for(let u=t,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function NS(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new xm,n.set(i,[o])):r>=s.length?(o=new xm,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function BS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ee};break;case"SpotLight":e={position:new U,direction:new U,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function OS(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var FS=0;function zS(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function VS(n){let t=new BS,e=OS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let r=new U,s=new Ue,o=new Ue;function a(l){let h=0,u=0,d=0;for(let nt=0;nt<9;nt++)i.probe[nt].set(0,0,0);let m=0,_=0,v=0,p=0,f=0,w=0,S=0,A=0,F=0,C=0,T=0;l.sort(zS);for(let nt=0,g=l.length;nt<g;nt++){let b=l[nt],W=b.color,V=b.intensity,Y=b.distance,Q=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=W.r*V,u+=W.g*V,d+=W.b*V;else if(b.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(b.sh.coefficients[k],V);T++}else if(b.isDirectionalLight){let k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let et=b.shadow,G=e.get(b);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=b.shadow.matrix,w++}i.directional[m]=k,m++}else if(b.isSpotLight){let k=t.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(W).multiplyScalar(V),k.distance=Y,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,i.spot[v]=k;let et=b.shadow;if(b.map&&(i.spotLightMap[F]=b.map,F++,et.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[v]=et.matrix,b.castShadow){let G=e.get(b);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=Q,A++}v++}else if(b.isRectAreaLight){let k=t.get(b);k.color.copy(W).multiplyScalar(V),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=k,p++}else if(b.isPointLight){let k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){let et=b.shadow,G=e.get(b);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=Q,i.pointShadowMatrix[_]=b.shadow.matrix,S++}i.point[_]=k,_++}else if(b.isHemisphereLight){let k=t.get(b);k.skyColor.copy(b.color).multiplyScalar(V),k.groundColor.copy(b.groundColor).multiplyScalar(V),i.hemi[f]=k,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let z=i.hash;(z.directionalLength!==m||z.pointLength!==_||z.spotLength!==v||z.rectAreaLength!==p||z.hemiLength!==f||z.numDirectionalShadows!==w||z.numPointShadows!==S||z.numSpotShadows!==A||z.numSpotMaps!==F||z.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+F-C,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,z.directionalLength=m,z.pointLength=_,z.spotLength=v,z.rectAreaLength=p,z.hemiLength=f,z.numDirectionalShadows=w,z.numPointShadows=S,z.numSpotShadows=A,z.numSpotMaps=F,z.numLightProbes=T,i.version=FS++)}function c(l,h){let u=0,d=0,m=0,_=0,v=0,p=h.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){let S=l[f];if(S.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),u++}else if(S.isSpotLight){let A=i.spot[m];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),m++}else if(S.isRectAreaLight){let A=i.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){let A=i.hemi[v];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:i}}function bm(n){let t=new VS(n),e=[],i=[];function r(h){l.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function kS(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new bm(n),t.set(r,[a])):s>=o.length?(a=new bm(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Bd=class extends nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Od=class extends nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},HS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WS(n,t,e){let i=new aa,r=new Zt,s=new Zt,o=new Oe,a=new Bd({depthPacking:Ly}),c=new Od,l={},h=e.maxTextureSize,u={[Vr]:Mn,[Mn]:Vr,[Yn]:Yn},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:HS,fragmentShader:GS}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let _=new gn;_.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Sn(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let f=this.type;this.render=function(C,T,z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let nt=n.getRenderTarget(),g=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Fr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let V=f!==$i&&this.type===$i,Y=f===$i&&this.type!==$i;for(let Q=0,k=C.length;Q<k;Q++){let et=C[Q],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let st=G.getFrameExtents();if(r.multiply(st),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/st.x),r.x=s.x*st.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/st.y),r.y=s.y*st.y,G.mapSize.y=s.y)),G.map===null||V===!0||Y===!0){let vt=this.type!==$i?{minFilter:qn,magFilter:qn}:{};G.map!==null&&G.map.dispose(),G.map=new ci(r.x,r.y,vt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let lt=G.getViewportCount();for(let vt=0;vt<lt;vt++){let ae=G.getViewport(vt);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),W.viewport(o),G.updateMatrices(et,vt),i=G.getFrustum(),A(T,z,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===$i&&w(G,z),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(nt,g,b)};function w(C,T){let z=t.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ci(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,z,d,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,z,m,v,null)}function S(C,T,z,nt){let g=null,b=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(b!==void 0)g=b;else if(g=z.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=g.uuid,V=T.uuid,Y=l[W];Y===void 0&&(Y={},l[W]=Y);let Q=Y[V];Q===void 0&&(Q=g.clone(),Y[V]=Q,T.addEventListener("dispose",F)),g=Q}if(g.visible=T.visible,g.wireframe=T.wireframe,nt===$i?g.side=T.shadowSide!==null?T.shadowSide:T.side:g.side=T.shadowSide!==null?T.shadowSide:u[T.side],g.alphaMap=T.alphaMap,g.alphaTest=T.alphaTest,g.map=T.map,g.clipShadows=T.clipShadows,g.clippingPlanes=T.clippingPlanes,g.clipIntersection=T.clipIntersection,g.displacementMap=T.displacementMap,g.displacementScale=T.displacementScale,g.displacementBias=T.displacementBias,g.wireframeLinewidth=T.wireframeLinewidth,g.linewidth=T.linewidth,z.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let W=n.properties.get(g);W.light=z}return g}function A(C,T,z,nt,g){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===$i)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);let V=t.update(C),Y=C.material;if(Array.isArray(Y)){let Q=V.groups;for(let k=0,et=Q.length;k<et;k++){let G=Q[k],st=Y[G.materialIndex];if(st&&st.visible){let lt=S(C,st,nt,g);C.onBeforeShadow(n,C,T,z,V,lt,G),n.renderBufferDirect(z,null,V,lt,C,G),C.onAfterShadow(n,C,T,z,V,lt,G)}}}else if(Y.visible){let Q=S(C,Y,nt,g);C.onBeforeShadow(n,C,T,z,V,Q,null),n.renderBufferDirect(z,null,V,Q,C,null),C.onAfterShadow(n,C,T,z,V,Q,null)}}let W=C.children;for(let V=0,Y=W.length;V<Y;V++)A(W[V],T,z,nt,g)}function F(C){C.target.removeEventListener("dispose",F);for(let z in l){let nt=l[z],g=C.target.uuid;g in nt&&(nt[g].dispose(),delete nt[g])}}}var XS={[ku]:Hu,[Gu]:Yu,[Wu]:qu,[lo]:Xu,[Hu]:ku,[Yu]:Gu,[qu]:Wu,[Xu]:lo};function YS(n){function t(){let I=!1,at=new Oe,H=null,$=new Oe(0,0,0,0);return{setMask:function(ht){H!==ht&&!I&&(n.colorMask(ht,ht,ht,ht),H=ht)},setLocked:function(ht){I=ht},setClear:function(ht,yt,ue,ke,xn){xn===!0&&(ht*=ke,yt*=ke,ue*=ke),at.set(ht,yt,ue,ke),$.equals(at)===!1&&(n.clearColor(ht,yt,ue,ke),$.copy(at))},reset:function(){I=!1,H=null,$.set(-1,0,0,0)}}}function e(){let I=!1,at=!1,H=null,$=null,ht=null;return{setReversed:function(yt){at=yt},setTest:function(yt){yt?mt(n.DEPTH_TEST):ft(n.DEPTH_TEST)},setMask:function(yt){H!==yt&&!I&&(n.depthMask(yt),H=yt)},setFunc:function(yt){if(at&&(yt=XS[yt]),$!==yt){switch(yt){case ku:n.depthFunc(n.NEVER);break;case Hu:n.depthFunc(n.ALWAYS);break;case Gu:n.depthFunc(n.LESS);break;case lo:n.depthFunc(n.LEQUAL);break;case Wu:n.depthFunc(n.EQUAL);break;case Xu:n.depthFunc(n.GEQUAL);break;case Yu:n.depthFunc(n.GREATER);break;case qu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}$=yt}},setLocked:function(yt){I=yt},setClear:function(yt){ht!==yt&&(n.clearDepth(yt),ht=yt)},reset:function(){I=!1,H=null,$=null,ht=null}}}function i(){let I=!1,at=null,H=null,$=null,ht=null,yt=null,ue=null,ke=null,xn=null;return{setTest:function(me){I||(me?mt(n.STENCIL_TEST):ft(n.STENCIL_TEST))},setMask:function(me){at!==me&&!I&&(n.stencilMask(me),at=me)},setFunc:function(me,bn,Wi){(H!==me||$!==bn||ht!==Wi)&&(n.stencilFunc(me,bn,Wi),H=me,$=bn,ht=Wi)},setOp:function(me,bn,Wi){(yt!==me||ue!==bn||ke!==Wi)&&(n.stencilOp(me,bn,Wi),yt=me,ue=bn,ke=Wi)},setLocked:function(me){I=me},setClear:function(me){xn!==me&&(n.clearStencil(me),xn=me)},reset:function(){I=!1,at=null,H=null,$=null,ht=null,yt=null,ue=null,ke=null,xn=null}}}let r=new t,s=new e,o=new i,a=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],m=null,_=!1,v=null,p=null,f=null,w=null,S=null,A=null,F=null,C=new ee(0,0,0),T=0,z=!1,nt=null,g=null,b=null,W=null,V=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,k=0,et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(et)[1]),Q=k>=1):et.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),Q=k>=2);let G=null,st={},lt=n.getParameter(n.SCISSOR_BOX),vt=n.getParameter(n.VIEWPORT),ae=new Oe().fromArray(lt),ce=new Oe().fromArray(vt);function X(I,at,H,$){let ht=new Uint8Array(4),yt=n.createTexture();n.bindTexture(I,yt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<H;ue++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,$,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(at+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return yt}let tt={};tt[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),tt[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),tt[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),mt(n.DEPTH_TEST),s.setFunc(lo),re(!1),se(Tp),mt(n.CULL_FACE),E(Fr);function mt(I){l[I]!==!0&&(n.enable(I),l[I]=!0)}function ft(I){l[I]!==!1&&(n.disable(I),l[I]=!1)}function Yt(I,at){return h[I]!==at?(n.bindFramebuffer(I,at),h[I]=at,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=at),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=at),!0):!1}function Ut(I,at){let H=d,$=!1;if(I){H=u.get(at),H===void 0&&(H=[],u.set(at,H));let ht=I.textures;if(H.length!==ht.length||H[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,ue=ht.length;yt<ue;yt++)H[yt]=n.COLOR_ATTACHMENT0+yt;H.length=ht.length,$=!0}}else H[0]!==n.BACK&&(H[0]=n.BACK,$=!0);$&&n.drawBuffers(H)}function $t(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let de={[hs]:n.FUNC_ADD,[sy]:n.FUNC_SUBTRACT,[oy]:n.FUNC_REVERSE_SUBTRACT};de[ay]=n.MIN,de[cy]=n.MAX;let ie={[ly]:n.ZERO,[hy]:n.ONE,[uy]:n.SRC_COLOR,[zu]:n.SRC_ALPHA,[_y]:n.SRC_ALPHA_SATURATE,[my]:n.DST_COLOR,[fy]:n.DST_ALPHA,[dy]:n.ONE_MINUS_SRC_COLOR,[Vu]:n.ONE_MINUS_SRC_ALPHA,[gy]:n.ONE_MINUS_DST_COLOR,[py]:n.ONE_MINUS_DST_ALPHA,[yy]:n.CONSTANT_COLOR,[vy]:n.ONE_MINUS_CONSTANT_COLOR,[xy]:n.CONSTANT_ALPHA,[by]:n.ONE_MINUS_CONSTANT_ALPHA};function E(I,at,H,$,ht,yt,ue,ke,xn,me){if(I===Fr){_===!0&&(ft(n.BLEND),_=!1);return}if(_===!1&&(mt(n.BLEND),_=!0),I!==ry){if(I!==v||me!==z){if((p!==hs||S!==hs)&&(n.blendEquation(n.FUNC_ADD),p=hs,S=hs),me)switch(I){case so:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ep:n.blendFunc(n.ONE,n.ONE);break;case Ip:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case so:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ep:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ip:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,w=null,A=null,F=null,C.set(0,0,0),T=0,v=I,z=me}return}ht=ht||at,yt=yt||H,ue=ue||$,(at!==p||ht!==S)&&(n.blendEquationSeparate(de[at],de[ht]),p=at,S=ht),(H!==f||$!==w||yt!==A||ue!==F)&&(n.blendFuncSeparate(ie[H],ie[$],ie[yt],ie[ue]),f=H,w=$,A=yt,F=ue),(ke.equals(C)===!1||xn!==T)&&(n.blendColor(ke.r,ke.g,ke.b,xn),C.copy(ke),T=xn),v=I,z=!1}function qe(I,at){I.side===Yn?ft(n.CULL_FACE):mt(n.CULL_FACE);let H=I.side===Mn;at&&(H=!H),re(H),I.blending===so&&I.transparent===!1?E(Fr):E(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?mt(n.SAMPLE_ALPHA_TO_COVERAGE):ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(I){nt!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),nt=I)}function se(I){I!==ey?(mt(n.CULL_FACE),I!==g&&(I===Tp?n.cullFace(n.BACK):I===ny?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ft(n.CULL_FACE),g=I}function zt(I){I!==b&&(Q&&n.lineWidth(I),b=I)}function Se(I,at,H){I?(mt(n.POLYGON_OFFSET_FILL),(W!==at||V!==H)&&(n.polygonOffset(at,H),W=at,V=H)):ft(n.POLYGON_OFFSET_FILL)}function Nt(I){I?mt(n.SCISSOR_TEST):ft(n.SCISSOR_TEST)}function M(I){I===void 0&&(I=n.TEXTURE0+Y-1),G!==I&&(n.activeTexture(I),G=I)}function y(I,at,H){H===void 0&&(G===null?H=n.TEXTURE0+Y-1:H=G);let $=st[H];$===void 0&&($={type:void 0,texture:void 0},st[H]=$),($.type!==I||$.texture!==at)&&(G!==H&&(n.activeTexture(H),G=H),n.bindTexture(I,at||tt[I]),$.type=I,$.texture=at)}function N(){let I=st[G];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(I){ae.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function J(I){ce.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ce.copy(I))}function kt(I,at){let H=c.get(at);H===void 0&&(H=new WeakMap,c.set(at,H));let $=H.get(I);$===void 0&&($=n.getUniformBlockIndex(at,I.name),H.set(I,$))}function Bt(I,at){let $=c.get(at).get(I);a.get(at)!==$&&(n.uniformBlockBinding(at,$,I.__bindingPointIndex),a.set(at,$))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},G=null,st={},h={},u=new WeakMap,d=[],m=null,_=!1,v=null,p=null,f=null,w=null,S=null,A=null,F=null,C=new ee(0,0,0),T=0,z=!1,nt=null,g=null,b=null,W=null,V=null,ae.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:mt,disable:ft,bindFramebuffer:Yt,drawBuffers:Ut,useProgram:$t,setBlending:E,setMaterial:qe,setFlipSided:re,setCullFace:se,setLineWidth:zt,setPolygonOffset:Se,setScissorTest:Nt,activeTexture:M,bindTexture:y,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:q,texImage3D:rt,updateUBOMapping:kt,uniformBlockBinding:Bt,texStorage2D:le,texStorage3D:L,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:gt,scissor:_t,viewport:J,reset:qt}}function Sm(n,t,e,i){let r=qS(i);switch(e){case Um:return n*t;case Bm:return n*t;case Om:return n*t*2;case Fm:return n*t/r.components*r.byteLength;case af:return n*t/r.components*r.byteLength;case zm:return n*t*2/r.components*r.byteLength;case cf:return n*t*2/r.components*r.byteLength;case Nm:return n*t*3/r.components*r.byteLength;case ai:return n*t*4/r.components*r.byteLength;case lf:return n*t*4/r.components*r.byteLength;case kc:case Hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qu:case ed:return Math.max(n,16)*Math.max(t,8)/4;case Ku:case td:return Math.max(n,8)*Math.max(t,8)/2;case nd:case id:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case rd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sd:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ad:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case cd:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ld:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case hd:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ud:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dd:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fd:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case pd:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case md:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case gd:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _d:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case yd:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xc:case vd:case xd:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Vm:case bd:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Sd:case Md:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qS(n){switch(n){case tr:case Dm:return{byteLength:1,components:1};case ra:case Pm:case da:return{byteLength:2,components:1};case sf:case of:return{byteLength:2,components:4};case ms:case rf:case Ji:return{byteLength:4,components:1};case Lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jS(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,y){return m?new OffscreenCanvas(M,y):Kc("canvas")}function v(M,y,N){let Z=1,K=Nt(M);if((K.width>N||K.height>N)&&(Z=N/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let j=Math.floor(Z*K.width),xt=Math.floor(Z*K.height);u===void 0&&(u=_(j,xt));let ot=y?_(j,xt):u;return ot.width=j,ot.height=xt,ot.getContext("2d").drawImage(M,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+xt+")."),ot}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==qn&&M.minFilter!==oi}function f(M){n.generateMipmap(M)}function w(M,y,N,Z,K=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let j=y;if(y===n.RED&&(N===n.FLOAT&&(j=n.R32F),N===n.HALF_FLOAT&&(j=n.R16F),N===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.R8UI),N===n.UNSIGNED_SHORT&&(j=n.R16UI),N===n.UNSIGNED_INT&&(j=n.R32UI),N===n.BYTE&&(j=n.R8I),N===n.SHORT&&(j=n.R16I),N===n.INT&&(j=n.R32I)),y===n.RG&&(N===n.FLOAT&&(j=n.RG32F),N===n.HALF_FLOAT&&(j=n.RG16F),N===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RG8UI),N===n.UNSIGNED_SHORT&&(j=n.RG16UI),N===n.UNSIGNED_INT&&(j=n.RG32UI),N===n.BYTE&&(j=n.RG8I),N===n.SHORT&&(j=n.RG16I),N===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RGB8UI),N===n.UNSIGNED_SHORT&&(j=n.RGB16UI),N===n.UNSIGNED_INT&&(j=n.RGB32UI),N===n.BYTE&&(j=n.RGB8I),N===n.SHORT&&(j=n.RGB16I),N===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),N===n.UNSIGNED_INT&&(j=n.RGBA32UI),N===n.BYTE&&(j=n.RGBA8I),N===n.SHORT&&(j=n.RGBA16I),N===n.INT&&(j=n.RGBA32I)),y===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){let xt=K?jc:fe.getTransfer(Z);N===n.FLOAT&&(j=n.RGBA32F),N===n.HALF_FLOAT&&(j=n.RGBA16F),N===n.UNSIGNED_BYTE&&(j=xt===Ce?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(M,y){let N;return M?y===null||y===ms||y===fo?N=n.DEPTH24_STENCIL8:y===Ji?N=n.DEPTH32F_STENCIL8:y===ra&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ms||y===fo?N=n.DEPTH_COMPONENT24:y===Ji?N=n.DEPTH_COMPONENT32F:y===ra&&(N=n.DEPTH_COMPONENT16),N}function A(M,y){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==qn&&M.minFilter!==oi?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function F(M){let y=M.target;y.removeEventListener("dispose",F),T(y),y.isVideoTexture&&h.delete(y)}function C(M){let y=M.target;y.removeEventListener("dispose",C),nt(y)}function T(M){let y=i.get(M);if(y.__webglInit===void 0)return;let N=M.source,Z=d.get(N);if(Z){let K=Z[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&z(M),Object.keys(Z).length===0&&d.delete(N)}i.remove(M)}function z(M){let y=i.get(M);n.deleteTexture(y.__webglTexture);let N=M.source,Z=d.get(N);delete Z[y.__cacheKey],o.memory.textures--}function nt(M){let y=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let K=0;K<y.__webglFramebuffer[Z].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[Z][K]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let N=M.textures;for(let Z=0,K=N.length;Z<K;Z++){let j=i.get(N[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(N[Z])}i.remove(M)}let g=0;function b(){g=0}function W(){let M=g;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),g+=1,M}function V(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function Y(M,y){let N=i.get(M);if(M.isVideoTexture&&zt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){let Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(N,M,y);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function Q(M,y){let N=i.get(M);if(M.version>0&&N.__version!==M.version){ce(N,M,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function k(M,y){let N=i.get(M);if(M.version>0&&N.__version!==M.version){ce(N,M,y);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function et(M,y){let N=i.get(M);if(M.version>0&&N.__version!==M.version){X(N,M,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}let G={[$u]:n.REPEAT,[fs]:n.CLAMP_TO_EDGE,[Ju]:n.MIRRORED_REPEAT},st={[qn]:n.NEAREST,[Dy]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[cu]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},lt={[Ny]:n.NEVER,[ky]:n.ALWAYS,[By]:n.LESS,[Hm]:n.LEQUAL,[Oy]:n.EQUAL,[Vy]:n.GEQUAL,[Fy]:n.GREATER,[zy]:n.NOTEQUAL};function vt(M,y){if(y.type===Ji&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===oi||y.magFilter===cu||y.magFilter===mc||y.magFilter===ps||y.minFilter===oi||y.minFilter===cu||y.minFilter===mc||y.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,G[y.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,G[y.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,G[y.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,st[y.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qn||y.minFilter!==mc&&y.minFilter!==ps||y.type===Ji&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ae(M,y){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",F));let Z=y.source,K=d.get(Z);K===void 0&&(K={},d.set(Z,K));let j=V(y);if(j!==M.__cacheKey){K[j]===void 0&&(K[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[j].usedTimes++;let xt=K[M.__cacheKey];xt!==void 0&&(K[M.__cacheKey].usedTimes--,xt.usedTimes===0&&z(y)),M.__cacheKey=j,M.__webglTexture=K[j].texture}return N}function ce(M,y,N){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);let K=ae(M,y),j=y.source;e.bindTexture(Z,M.__webglTexture,n.TEXTURE0+N);let xt=i.get(j);if(j.version!==xt.__version||K===!0){e.activeTexture(n.TEXTURE0+N);let ot=fe.getPrimaries(fe.workingColorSpace),gt=y.colorSpace===Or?null:fe.getPrimaries(y.colorSpace),le=y.colorSpace===Or||ot===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let L=v(y.image,!1,r.maxTextureSize);L=Se(y,L);let q=s.convert(y.format,y.colorSpace),rt=s.convert(y.type),_t=w(y.internalFormat,q,rt,y.colorSpace,y.isVideoTexture);vt(Z,y);let J,kt=y.mipmaps,Bt=y.isVideoTexture!==!0,qt=xt.__version===void 0||K===!0,I=j.dataReady,at=A(y,L);if(y.isDepthTexture)_t=S(y.format===po,y.type),qt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,_t,L.width,L.height):e.texImage2D(n.TEXTURE_2D,0,_t,L.width,L.height,0,q,rt,null));else if(y.isDataTexture)if(kt.length>0){Bt&&qt&&e.texStorage2D(n.TEXTURE_2D,at,_t,kt[0].width,kt[0].height);for(let H=0,$=kt.length;H<$;H++)J=kt[H],Bt?I&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,J.width,J.height,q,rt,J.data):e.texImage2D(n.TEXTURE_2D,H,_t,J.width,J.height,0,q,rt,J.data);y.generateMipmaps=!1}else Bt?(qt&&e.texStorage2D(n.TEXTURE_2D,at,_t,L.width,L.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,L.width,L.height,q,rt,L.data)):e.texImage2D(n.TEXTURE_2D,0,_t,L.width,L.height,0,q,rt,L.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,_t,kt[0].width,kt[0].height,L.depth);for(let H=0,$=kt.length;H<$;H++)if(J=kt[H],y.format!==ai)if(q!==null)if(Bt){if(I)if(y.layerUpdates.size>0){let ht=Sm(J.width,J.height,y.format,y.type);for(let yt of y.layerUpdates){let ue=J.data.subarray(yt*ht/J.data.BYTES_PER_ELEMENT,(yt+1)*ht/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,yt,J.width,J.height,1,q,ue,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,J.width,J.height,L.depth,q,J.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,H,_t,J.width,J.height,L.depth,0,J.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,H,0,0,0,J.width,J.height,L.depth,q,rt,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,H,_t,J.width,J.height,L.depth,0,q,rt,J.data)}else{Bt&&qt&&e.texStorage2D(n.TEXTURE_2D,at,_t,kt[0].width,kt[0].height);for(let H=0,$=kt.length;H<$;H++)J=kt[H],y.format!==ai?q!==null?Bt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,H,0,0,J.width,J.height,q,J.data):e.compressedTexImage2D(n.TEXTURE_2D,H,_t,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?I&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,J.width,J.height,q,rt,J.data):e.texImage2D(n.TEXTURE_2D,H,_t,J.width,J.height,0,q,rt,J.data)}else if(y.isDataArrayTexture)if(Bt){if(qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,_t,L.width,L.height,L.depth),I)if(y.layerUpdates.size>0){let H=Sm(L.width,L.height,y.format,y.type);for(let $ of y.layerUpdates){let ht=L.data.subarray($*H/L.data.BYTES_PER_ELEMENT,($+1)*H/L.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,L.width,L.height,1,q,rt,ht)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,q,rt,L.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,L.width,L.height,L.depth,0,q,rt,L.data);else if(y.isData3DTexture)Bt?(qt&&e.texStorage3D(n.TEXTURE_3D,at,_t,L.width,L.height,L.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,q,rt,L.data)):e.texImage3D(n.TEXTURE_3D,0,_t,L.width,L.height,L.depth,0,q,rt,L.data);else if(y.isFramebufferTexture){if(qt)if(Bt)e.texStorage2D(n.TEXTURE_2D,at,_t,L.width,L.height);else{let H=L.width,$=L.height;for(let ht=0;ht<at;ht++)e.texImage2D(n.TEXTURE_2D,ht,_t,H,$,0,q,rt,null),H>>=1,$>>=1}}else if(kt.length>0){if(Bt&&qt){let H=Nt(kt[0]);e.texStorage2D(n.TEXTURE_2D,at,_t,H.width,H.height)}for(let H=0,$=kt.length;H<$;H++)J=kt[H],Bt?I&&e.texSubImage2D(n.TEXTURE_2D,H,0,0,q,rt,J):e.texImage2D(n.TEXTURE_2D,H,_t,q,rt,J);y.generateMipmaps=!1}else if(Bt){if(qt){let H=Nt(L);e.texStorage2D(n.TEXTURE_2D,at,_t,H.width,H.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,q,rt,L)}else e.texImage2D(n.TEXTURE_2D,0,_t,q,rt,L);p(y)&&f(Z),xt.__version=j.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function X(M,y,N){if(y.image.length!==6)return;let Z=ae(M,y),K=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+N);let j=i.get(K);if(K.version!==j.__version||Z===!0){e.activeTexture(n.TEXTURE0+N);let xt=fe.getPrimaries(fe.workingColorSpace),ot=y.colorSpace===Or?null:fe.getPrimaries(y.colorSpace),gt=y.colorSpace===Or||xt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let le=y.isCompressedTexture||y.image[0].isCompressedTexture,L=y.image[0]&&y.image[0].isDataTexture,q=[];for(let $=0;$<6;$++)!le&&!L?q[$]=v(y.image[$],!0,r.maxCubemapSize):q[$]=L?y.image[$].image:y.image[$],q[$]=Se(y,q[$]);let rt=q[0],_t=s.convert(y.format,y.colorSpace),J=s.convert(y.type),kt=w(y.internalFormat,_t,J,y.colorSpace),Bt=y.isVideoTexture!==!0,qt=j.__version===void 0||Z===!0,I=K.dataReady,at=A(y,rt);vt(n.TEXTURE_CUBE_MAP,y);let H;if(le){Bt&&qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,kt,rt.width,rt.height);for(let $=0;$<6;$++){H=q[$].mipmaps;for(let ht=0;ht<H.length;ht++){let yt=H[ht];y.format!==ai?_t!==null?Bt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,kt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,yt.width,yt.height,_t,J,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,kt,yt.width,yt.height,0,_t,J,yt.data)}}}else{if(H=y.mipmaps,Bt&&qt){H.length>0&&at++;let $=Nt(q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,kt,$.width,$.height)}for(let $=0;$<6;$++)if(L){Bt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,q[$].width,q[$].height,_t,J,q[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,q[$].width,q[$].height,0,_t,J,q[$].data);for(let ht=0;ht<H.length;ht++){let ue=H[ht].image[$].image;Bt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,ue.width,ue.height,_t,J,ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,kt,ue.width,ue.height,0,_t,J,ue.data)}}else{Bt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_t,J,q[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,kt,_t,J,q[$]);for(let ht=0;ht<H.length;ht++){let yt=H[ht];Bt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,_t,J,yt.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,kt,_t,J,yt.image[$])}}}p(y)&&f(n.TEXTURE_CUBE_MAP),j.__version=K.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function tt(M,y,N,Z,K,j){let xt=s.convert(N.format,N.colorSpace),ot=s.convert(N.type),gt=w(N.internalFormat,xt,ot,N.colorSpace);if(!i.get(y).__hasExternalTextures){let L=Math.max(1,y.width>>j),q=Math.max(1,y.height>>j);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,j,gt,L,q,y.depth,0,xt,ot,null):e.texImage2D(K,j,gt,L,q,0,xt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,K,i.get(N).__webglTexture,0,re(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,K,i.get(N).__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(M,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,M),y.depthBuffer){let Z=y.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,j=S(y.stencilBuffer,K),xt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=re(y);se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,j,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,M)}else{let Z=y.textures;for(let K=0;K<Z.length;K++){let j=Z[K],xt=s.convert(j.format,j.colorSpace),ot=s.convert(j.type),gt=w(j.internalFormat,xt,ot,j.colorSpace),le=re(y);N&&se(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,gt,y.width,y.height):se(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,gt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,gt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);let Z=i.get(y.depthTexture).__webglTexture,K=re(y);if(y.depthTexture.format===oo)se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(y.depthTexture.format===po)se(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Yt(M){let y=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==M.depthTexture){let Z=M.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=Z}if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");ft(y.__webglFramebuffer,M)}else if(N){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),mt(y.__webglDepthbuffer[Z],M,!1);else{let K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),mt(y.__webglDepthbuffer,M,!1);else{let Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,K)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(M,y,N){let Z=i.get(M);y!==void 0&&tt(Z.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Yt(M)}function $t(M){let y=M.texture,N=i.get(M),Z=i.get(y);M.addEventListener("dispose",C);let K=M.textures,j=M.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),j){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let gt=0;gt<y.mipmaps.length;gt++)N.__webglFramebuffer[ot][gt]=n.createFramebuffer()}else N.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)N.__webglFramebuffer[ot]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ot=0,gt=K.length;ot<gt;ot++){let le=i.get(K[ot]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&se(M)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){let gt=K[ot];N.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);let le=s.convert(gt.format,gt.colorSpace),L=s.convert(gt.type),q=w(gt.internalFormat,le,L,gt.colorSpace,M.isXRRenderTarget===!0),rt=re(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),mt(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),vt(n.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)tt(N.__webglFramebuffer[ot][gt],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,gt);else tt(N.__webglFramebuffer[ot],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(y)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,gt=K.length;ot<gt;ot++){let le=K[ot],L=i.get(le);e.bindTexture(n.TEXTURE_2D,L.__webglTexture),vt(n.TEXTURE_2D,le),tt(N.__webglFramebuffer,M,le,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(le)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ot=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),vt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let gt=0;gt<y.mipmaps.length;gt++)tt(N.__webglFramebuffer[gt],M,y,n.COLOR_ATTACHMENT0,ot,gt);else tt(N.__webglFramebuffer,M,y,n.COLOR_ATTACHMENT0,ot,0);p(y)&&f(ot),e.unbindTexture()}M.depthBuffer&&Yt(M)}function de(M){let y=M.textures;for(let N=0,Z=y.length;N<Z;N++){let K=y[N];if(p(K)){let j=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(K).__webglTexture;e.bindTexture(j,xt),f(j),e.unbindTexture()}}}let ie=[],E=[];function qe(M){if(M.samples>0){if(se(M)===!1){let y=M.textures,N=M.width,Z=M.height,K=n.COLOR_BUFFER_BIT,j=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(M),ot=y.length>1;if(ot)for(let gt=0;gt<y.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let gt=0;gt<y.length;gt++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[gt]);let le=i.get(y[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,N,Z,0,0,N,Z,K,n.NEAREST),c===!0&&(ie.length=0,E.length=0,ie.push(n.COLOR_ATTACHMENT0+gt),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ie.push(j),E.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let gt=0;gt<y.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[gt]);let le=i.get(y[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,le,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function re(M){return Math.min(r.maxSamples,M.samples)}function se(M){let y=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function zt(M){let y=o.render.frame;h.get(M)!==y&&(h.set(M,y),M.update())}function Se(M,y){let N=M.colorSpace,Z=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==kr&&N!==Or&&(fe.getTransfer(N)===Ce?(Z!==ai||K!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function Nt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=b,this.setTexture2D=Y,this.setTexture2DArray=Q,this.setTexture3D=k,this.setTextureCube=et,this.rebindTextures=Ut,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=se}function ZS(n,t){function e(i,r=Or){let s,o=fe.getTransfer(r);if(i===tr)return n.UNSIGNED_BYTE;if(i===sf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===of)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dm)return n.BYTE;if(i===Pm)return n.SHORT;if(i===ra)return n.UNSIGNED_SHORT;if(i===rf)return n.INT;if(i===ms)return n.UNSIGNED_INT;if(i===Ji)return n.FLOAT;if(i===da)return n.HALF_FLOAT;if(i===Um)return n.ALPHA;if(i===Nm)return n.RGB;if(i===ai)return n.RGBA;if(i===Bm)return n.LUMINANCE;if(i===Om)return n.LUMINANCE_ALPHA;if(i===oo)return n.DEPTH_COMPONENT;if(i===po)return n.DEPTH_STENCIL;if(i===Fm)return n.RED;if(i===af)return n.RED_INTEGER;if(i===zm)return n.RG;if(i===cf)return n.RG_INTEGER;if(i===lf)return n.RGBA_INTEGER;if(i===kc||i===Hc||i===Gc||i===Wc)if(o===Ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===kc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===kc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ku||i===Qu||i===td||i===ed)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ku)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===td)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ed)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nd||i===id||i===rd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nd||i===id)return o===Ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sd||i===od||i===ad||i===cd||i===ld||i===hd||i===ud||i===dd||i===fd||i===pd||i===md||i===gd||i===_d||i===yd)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===od)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ad)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ld)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ud)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===md)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_d)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yd)return o===Ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xc||i===vd||i===xd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Xc)return o===Ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vm||i===bd||i===Sd||i===Md)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Md)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Fd=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qi=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},$S={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($S)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Qi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let r=new jn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Li({vertexShader:JS,fragmentShader:KS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new ol(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vd=class extends er{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,_=null,v=new zd,p=e.getContextAttributes(),f=null,w=null,S=[],A=[],F=new Zt,C=null,T=new mn;T.layers.enable(1),T.viewport=new Oe;let z=new mn;z.layers.enable(2),z.viewport=new Oe;let nt=[T,z],g=new Fd;g.layers.enable(1),g.layers.enable(2);let b=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=S[X];return tt===void 0&&(tt=new ia,S[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=S[X];return tt===void 0&&(tt=new ia,S[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=S[X];return tt===void 0&&(tt=new ia,S[X]=tt),tt.getHandSpace()};function V(X){let tt=A.indexOf(X.inputSource);if(tt===-1)return;let mt=S[tt];mt!==void 0&&(mt.update(X.inputSource,X.frame,l||o),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Q);for(let X=0;X<S.length;X++){let tt=A[X];tt!==null&&(A[X]=null,S[X].disconnect(tt))}b=null,W=null,v.reset(),t.setRenderTarget(f),m=null,d=null,u=null,r=null,w=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){let tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new ci(m.framebufferWidth,m.framebufferHeight,{format:ai,type:tr,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,mt=null,ft=null;p.depth&&(ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?po:oo,mt=p.stencil?fo:ms);let Yt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};u=new XRWebGLBinding(r,e),d=u.createProjectionLayer(Yt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ci(d.textureWidth,d.textureHeight,{format:ai,type:tr,depthTexture:new ll(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(X){for(let tt=0;tt<X.removed.length;tt++){let mt=X.removed[tt],ft=A.indexOf(mt);ft>=0&&(A[ft]=null,S[ft].disconnect(mt))}for(let tt=0;tt<X.added.length;tt++){let mt=X.added[tt],ft=A.indexOf(mt);if(ft===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=A.length){A.push(mt),ft=Ut;break}else if(A[Ut]===null){A[Ut]=mt,ft=Ut;break}if(ft===-1)break}let Yt=S[ft];Yt&&Yt.connect(mt)}}let k=new U,et=new U;function G(X,tt,mt){k.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(mt.matrixWorld);let ft=k.distanceTo(et),Yt=tt.projectionMatrix.elements,Ut=mt.projectionMatrix.elements,$t=Yt[14]/(Yt[10]-1),de=Yt[14]/(Yt[10]+1),ie=(Yt[9]+1)/Yt[5],E=(Yt[9]-1)/Yt[5],qe=(Yt[8]-1)/Yt[0],re=(Ut[8]+1)/Ut[0],se=$t*qe,zt=$t*re,Se=ft/(-qe+re),Nt=Se*-qe;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Nt),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Yt[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let M=$t+Se,y=de+Se,N=se-Nt,Z=zt+(ft-Nt),K=ie*de/y*M,j=E*de/y*M;X.projectionMatrix.makePerspective(N,Z,K,j,M,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let tt=X.near,mt=X.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),g.near=z.near=T.near=tt,g.far=z.far=T.far=mt,(b!==g.near||W!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),b=g.near,W=g.far);let ft=X.parent,Yt=g.cameras;st(g,ft);for(let Ut=0;Ut<Yt.length;Ut++)st(Yt[Ut],ft);Yt.length===2?G(g,T,z):g.projectionMatrix.copy(T.projectionMatrix),lt(X,g,ft)};function lt(X,tt,mt){mt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=sa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let vt=null;function ae(X,tt){if(h=tt.getViewerPose(l||o),_=tt,h!==null){let mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let ft=!1;mt.length!==g.cameras.length&&(g.cameras.length=0,ft=!0);for(let Ut=0;Ut<mt.length;Ut++){let $t=mt[Ut],de=null;if(m!==null)de=m.getViewport($t);else{let E=u.getViewSubImage(d,$t);de=E.viewport,Ut===0&&(t.setRenderTargetTextures(w,E.colorTexture,d.ignoreDepthValues?void 0:E.depthStencilTexture),t.setRenderTarget(w))}let ie=nt[Ut];ie===void 0&&(ie=new mn,ie.layers.enable(Ut),ie.viewport=new Oe,nt[Ut]=ie),ie.matrix.fromArray($t.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray($t.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(de.x,de.y,de.width,de.height),Ut===0&&(g.matrix.copy(ie.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),ft===!0&&g.cameras.push(ie)}let Yt=r.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")){let Ut=u.getDepthInformation(mt[0]);Ut&&Ut.isValid&&Ut.texture&&v.init(t,Ut,r.renderState)}}for(let mt=0;mt<S.length;mt++){let ft=A[mt],Yt=S[mt];ft!==null&&Yt!==void 0&&Yt.update(ft,tt,l||o)}vt&&vt(X,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}let ce=new qm;ce.setAnimationLoop(ae),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}},cs=new Pi,QS=new Ue;function tM(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Ym(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,w,S,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),u(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,A)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),v(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,w,S):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Mn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Mn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=t.get(f),S=w.envMap,A=w.envMapRotation;S&&(p.envMap.value=S,cs.copy(A),cs.x*=-1,cs.y*=-1,cs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),p.envMapRotation.value.setFromMatrix4(QS.makeRotationFromEuler(cs)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,w,S){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=S*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){let w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eM(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){let A=S.program;i.uniformBlockBinding(w,A)}function l(w,S){let A=r[w.id];A===void 0&&(_(w),A=h(w),r[w.id]=A,w.addEventListener("dispose",p));let F=S.program;i.updateUBOMapping(w,F);let C=t.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function h(w){let S=u();w.__bindingPointIndex=S;let A=n.createBuffer(),F=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,F,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,A),A}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let S=r[w.id],A=w.uniforms,F=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let C=0,T=A.length;C<T;C++){let z=Array.isArray(A[C])?A[C]:[A[C]];for(let nt=0,g=z.length;nt<g;nt++){let b=z[nt];if(m(b,C,nt,F)===!0){let W=b.__offset,V=Array.isArray(b.value)?b.value:[b.value],Y=0;for(let Q=0;Q<V.length;Q++){let k=V[Q],et=v(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,Y),Y+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,S,A,F){let C=w.value,T=S+"_"+A;if(F[T]===void 0)return typeof C=="number"||typeof C=="boolean"?F[T]=C:F[T]=C.clone(),!0;{let z=F[T];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return F[T]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function _(w){let S=w.uniforms,A=0,F=16;for(let T=0,z=S.length;T<z;T++){let nt=Array.isArray(S[T])?S[T]:[S[T]];for(let g=0,b=nt.length;g<b;g++){let W=nt[g],V=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,Q=V.length;Y<Q;Y++){let k=V[Y],et=v(k),G=A%F,st=G%et.boundary,lt=G+st;A+=st,lt!==0&&F-lt<et.storage&&(A+=F-lt),W.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=A,A+=et.storage}}}let C=A%F;return C>0&&(A+=F-C),w.__size=A,w.__cache={},this}function v(w){let S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function p(w){let S=w.target;S.removeEventListener("dispose",p);let A=o.indexOf(S.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(let w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var hl=class{constructor(t={}){let{canvas:e=r0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),_=new Int32Array(4),v=null,p=null,f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ri,this.toneMapping=zr,this.toneMappingExposure=1;let S=this,A=!1,F=0,C=0,T=null,z=-1,nt=null,g=new Oe,b=new Oe,W=null,V=new ee(0),Y=0,Q=e.width,k=e.height,et=1,G=null,st=null,lt=new Oe(0,0,Q,k),vt=new Oe(0,0,Q,k),ae=!1,ce=new aa,X=!1,tt=!1,mt=new Ue,ft=new Ue,Yt=new U,Ut=new Oe,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ie(){return T===null?et:1}let E=i;function qe(x,D){return e.getContext(x,D)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ef}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",yt,!1),E===null){let D="webgl2";if(E=qe(D,x),E===null)throw qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let re,se,zt,Se,Nt,M,y,N,Z,K,j,xt,ot,gt,le,L,q,rt,_t,J,kt,Bt,qt,I;function at(){re=new _b(E),re.init(),Bt=new ZS(E,re),se=new ub(E,re,t,Bt),zt=new YS(E),se.reverseDepthBuffer&&zt.buffers.depth.setReversed(!0),Se=new xb(E),Nt=new LS,M=new jS(E,re,zt,Nt,se,Bt,Se),y=new fb(S),N=new gb(S),Z=new E0(E),qt=new lb(E,Z),K=new yb(E,Z,Se,qt),j=new Sb(E,K,Z,Se),_t=new bb(E,se,M),L=new db(Nt),xt=new PS(S,y,N,re,se,qt,L),ot=new tM(S,Nt),gt=new NS,le=new kS(re),rt=new cb(S,y,N,zt,j,d,c),q=new WS(S,j,se),I=new eM(E,Se,se,zt),J=new hb(E,re,Se),kt=new vb(E,re,Se),Se.programs=xt.programs,S.capabilities=se,S.extensions=re,S.properties=Nt,S.renderLists=gt,S.shadowMap=q,S.state=zt,S.info=Se}at();let H=new Vd(S,E);this.xr=H,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let x=re.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=re.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(x){x!==void 0&&(et=x,this.setSize(Q,k,!1))},this.getSize=function(x){return x.set(Q,k)},this.setSize=function(x,D,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=x,k=D,e.width=Math.floor(x*et),e.height=Math.floor(D*et),B===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(Q*et,k*et).floor()},this.setDrawingBufferSize=function(x,D,B){Q=x,k=D,et=B,e.width=Math.floor(x*B),e.height=Math.floor(D*B),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(g)},this.getViewport=function(x){return x.copy(lt)},this.setViewport=function(x,D,B,O){x.isVector4?lt.set(x.x,x.y,x.z,x.w):lt.set(x,D,B,O),zt.viewport(g.copy(lt).multiplyScalar(et).round())},this.getScissor=function(x){return x.copy(vt)},this.setScissor=function(x,D,B,O){x.isVector4?vt.set(x.x,x.y,x.z,x.w):vt.set(x,D,B,O),zt.scissor(b.copy(vt).multiplyScalar(et).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(x){zt.setScissorTest(ae=x)},this.setOpaqueSort=function(x){G=x},this.setTransparentSort=function(x){st=x},this.getClearColor=function(x){return x.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(x=!0,D=!0,B=!0){let O=0;if(x){let P=!1;if(T!==null){let it=T.texture.format;P=it===lf||it===cf||it===af}if(P){let it=T.texture.type,ut=it===tr||it===ms||it===ra||it===fo||it===sf||it===of,bt=rt.getClearColor(),wt=rt.getClearAlpha(),Ht=bt.r,Xt=bt.g,At=bt.b;ut?(m[0]=Ht,m[1]=Xt,m[2]=At,m[3]=wt,E.clearBufferuiv(E.COLOR,0,m)):(_[0]=Ht,_[1]=Xt,_[2]=At,_[3]=wt,E.clearBufferiv(E.COLOR,0,_))}else O|=E.COLOR_BUFFER_BIT}D&&(O|=E.DEPTH_BUFFER_BIT,E.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(O|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),gt.dispose(),le.dispose(),Nt.dispose(),y.dispose(),N.dispose(),j.dispose(),qt.dispose(),I.dispose(),xt.dispose(),H.dispose(),H.removeEventListener("sessionstart",yp),H.removeEventListener("sessionend",vp),es.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let x=Se.autoReset,D=q.enabled,B=q.autoUpdate,O=q.needsUpdate,P=q.type;at(),Se.autoReset=x,q.enabled=D,q.autoUpdate=B,q.needsUpdate=O,q.type=P}function yt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ue(x){let D=x.target;D.removeEventListener("dispose",ue),ke(D)}function ke(x){xn(x),Nt.remove(x)}function xn(x){let D=Nt.get(x).programs;D!==void 0&&(D.forEach(function(B){xt.releaseProgram(B)}),x.isShaderMaterial&&xt.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,B,O,P,it){D===null&&(D=$t);let ut=P.isMesh&&P.matrixWorld.determinant()<0,bt=$_(x,D,B,O,P);zt.setMaterial(O,ut);let wt=B.index,Ht=1;if(O.wireframe===!0){if(wt=K.getWireframeAttribute(B),wt===void 0)return;Ht=2}let Xt=B.drawRange,At=B.attributes.position,be=Xt.start*Ht,Re=(Xt.start+Xt.count)*Ht;it!==null&&(be=Math.max(be,it.start*Ht),Re=Math.min(Re,(it.start+it.count)*Ht)),wt!==null?(be=Math.max(be,0),Re=Math.min(Re,wt.count)):At!=null&&(be=Math.max(be,0),Re=Math.min(Re,At.count));let Be=Re-be;if(Be<0||Be===1/0)return;qt.setup(P,O,bt,B,wt);let Dn,ye=J;if(wt!==null&&(Dn=Z.get(wt),ye=kt,ye.setIndex(Dn)),P.isMesh)O.wireframe===!0?(zt.setLineWidth(O.wireframeLinewidth*ie()),ye.setMode(E.LINES)):ye.setMode(E.TRIANGLES);else if(P.isLine){let Tt=O.linewidth;Tt===void 0&&(Tt=1),zt.setLineWidth(Tt*ie()),P.isLineSegments?ye.setMode(E.LINES):P.isLineLoop?ye.setMode(E.LINE_LOOP):ye.setMode(E.LINE_STRIP)}else P.isPoints?ye.setMode(E.POINTS):P.isSprite&&ye.setMode(E.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)ye.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))ye.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let Tt=P._multiDrawStarts,nn=P._multiDrawCounts,ve=P._multiDrawCount,ei=wt?Z.get(wt).bytesPerElement:1,Hs=Nt.get(O).currentProgram.getUniforms();for(let Pn=0;Pn<ve;Pn++)Hs.setValue(E,"_gl_DrawID",Pn),ye.render(Tt[Pn]/ei,nn[Pn])}else if(P.isInstancedMesh)ye.renderInstances(be,Be,P.count);else if(B.isInstancedBufferGeometry){let Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,nn=Math.min(B.instanceCount,Tt);ye.renderInstances(be,Be,nn)}else ye.render(be,Be)};function me(x,D,B){x.transparent===!0&&x.side===Yn&&x.forceSinglePass===!1?(x.side=Mn,x.needsUpdate=!0,pc(x,D,B),x.side=Vr,x.needsUpdate=!0,pc(x,D,B),x.side=Yn):pc(x,D,B)}this.compile=function(x,D,B=null){B===null&&(B=x),p=le.get(B),p.init(D),w.push(p),B.traverseVisible(function(P){P.isLight&&P.layers.test(D.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),x!==B&&x.traverseVisible(function(P){P.isLight&&P.layers.test(D.layers)&&(p.pushLight(P),P.castShadow&&p.pushShadow(P))}),p.setupLights();let O=new Set;return x.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let it=P.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){let bt=it[ut];me(bt,B,P),O.add(bt)}else me(it,B,P),O.add(it)}),w.pop(),p=null,O},this.compileAsync=function(x,D,B=null){let O=this.compile(x,D,B);return new Promise(P=>{function it(){if(O.forEach(function(ut){Nt.get(ut).currentProgram.isReady()&&O.delete(ut)}),O.size===0){P(x);return}setTimeout(it,10)}re.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let bn=null;function Wi(x){bn&&bn(x)}function yp(){es.stop()}function vp(){es.start()}let es=new qm;es.setAnimationLoop(Wi),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(x){bn=x,H.setAnimationLoop(x),x===null?es.stop():es.start()},H.addEventListener("sessionstart",yp),H.addEventListener("sessionend",vp),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,D,T),p=le.get(x,w.length),p.init(D),w.push(p),ft.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ce.setFromProjectionMatrix(ft),tt=this.localClippingEnabled,X=L.init(this.clippingPlanes,tt),v=gt.get(x,f.length),v.init(),f.push(v),H.enabled===!0&&H.isPresenting===!0){let it=S.xr.getDepthSensingMesh();it!==null&&ru(it,D,-1/0,S.sortObjects)}ru(x,D,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(G,st),de=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,de&&rt.addToRenderList(v,x),this.info.render.frame++,X===!0&&L.beginShadows();let B=p.state.shadowsArray;q.render(B,x,D),X===!0&&L.endShadows(),this.info.autoReset===!0&&this.info.reset();let O=v.opaque,P=v.transmissive;if(p.setupLights(),D.isArrayCamera){let it=D.cameras;if(P.length>0)for(let ut=0,bt=it.length;ut<bt;ut++){let wt=it[ut];bp(O,P,x,wt)}de&&rt.render(x);for(let ut=0,bt=it.length;ut<bt;ut++){let wt=it[ut];xp(v,x,wt,wt.viewport)}}else P.length>0&&bp(O,P,x,D),de&&rt.render(x),xp(v,x,D);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),x.isScene===!0&&x.onAfterRender(S,x,D),qt.resetDefaultState(),z=-1,nt=null,w.pop(),w.length>0?(p=w[w.length-1],X===!0&&L.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ru(x,D,B,O){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ce.intersectsSprite(x)){O&&Ut.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ft);let ut=j.update(x),bt=x.material;bt.visible&&v.push(x,ut,bt,B,Ut.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ce.intersectsObject(x))){let ut=j.update(x),bt=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ut.copy(x.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ut.copy(ut.boundingSphere.center)),Ut.applyMatrix4(x.matrixWorld).applyMatrix4(ft)),Array.isArray(bt)){let wt=ut.groups;for(let Ht=0,Xt=wt.length;Ht<Xt;Ht++){let At=wt[Ht],be=bt[At.materialIndex];be&&be.visible&&v.push(x,ut,be,B,Ut.z,At)}}else bt.visible&&v.push(x,ut,bt,B,Ut.z,null)}}let it=x.children;for(let ut=0,bt=it.length;ut<bt;ut++)ru(it[ut],D,B,O)}function xp(x,D,B,O){let P=x.opaque,it=x.transmissive,ut=x.transparent;p.setupLightsView(B),X===!0&&L.setGlobalState(S.clippingPlanes,B),O&&zt.viewport(g.copy(O)),P.length>0&&fc(P,D,B),it.length>0&&fc(it,D,B),ut.length>0&&fc(ut,D,B),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function bp(x,D,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new ci(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?da:tr,minFilter:ps,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace}));let it=p.state.transmissionRenderTarget[O.id],ut=O.viewport||g;it.setSize(ut.z,ut.w);let bt=S.getRenderTarget();S.setRenderTarget(it),S.getClearColor(V),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),de&&rt.render(B);let wt=S.toneMapping;S.toneMapping=zr;let Ht=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),X===!0&&L.setGlobalState(S.clippingPlanes,O),fc(x,B,O),M.updateMultisampleRenderTarget(it),M.updateRenderTargetMipmap(it),re.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let At=0,be=D.length;At<be;At++){let Re=D[At],Be=Re.object,Dn=Re.geometry,ye=Re.material,Tt=Re.group;if(ye.side===Yn&&Be.layers.test(O.layers)){let nn=ye.side;ye.side=Mn,ye.needsUpdate=!0,Sp(Be,B,O,Dn,ye,Tt),ye.side=nn,ye.needsUpdate=!0,Xt=!0}}Xt===!0&&(M.updateMultisampleRenderTarget(it),M.updateRenderTargetMipmap(it))}S.setRenderTarget(bt),S.setClearColor(V,Y),Ht!==void 0&&(O.viewport=Ht),S.toneMapping=wt}function fc(x,D,B){let O=D.isScene===!0?D.overrideMaterial:null;for(let P=0,it=x.length;P<it;P++){let ut=x[P],bt=ut.object,wt=ut.geometry,Ht=O===null?ut.material:O,Xt=ut.group;bt.layers.test(B.layers)&&Sp(bt,D,B,wt,Ht,Xt)}}function Sp(x,D,B,O,P,it){x.onBeforeRender(S,D,B,O,P,it),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),P.onBeforeRender(S,D,B,O,x,it),P.transparent===!0&&P.side===Yn&&P.forceSinglePass===!1?(P.side=Mn,P.needsUpdate=!0,S.renderBufferDirect(B,D,O,P,x,it),P.side=Vr,P.needsUpdate=!0,S.renderBufferDirect(B,D,O,P,x,it),P.side=Yn):S.renderBufferDirect(B,D,O,P,x,it),x.onAfterRender(S,D,B,O,P,it)}function pc(x,D,B){D.isScene!==!0&&(D=$t);let O=Nt.get(x),P=p.state.lights,it=p.state.shadowsArray,ut=P.state.version,bt=xt.getParameters(x,P.state,it,D,B),wt=xt.getProgramCacheKey(bt),Ht=O.programs;O.environment=x.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(x.isMeshStandardMaterial?N:y).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Ht===void 0&&(x.addEventListener("dispose",ue),Ht=new Map,O.programs=Ht);let Xt=Ht.get(wt);if(Xt!==void 0){if(O.currentProgram===Xt&&O.lightsStateVersion===ut)return wp(x,bt),Xt}else bt.uniforms=xt.getUniforms(x),x.onBeforeCompile(bt,S),Xt=xt.acquireProgram(bt,wt),Ht.set(wt,Xt),O.uniforms=bt.uniforms;let At=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(At.clippingPlanes=L.uniform),wp(x,bt),O.needsLights=K_(x),O.lightsStateVersion=ut,O.needsLights&&(At.ambientLightColor.value=P.state.ambient,At.lightProbe.value=P.state.probe,At.directionalLights.value=P.state.directional,At.directionalLightShadows.value=P.state.directionalShadow,At.spotLights.value=P.state.spot,At.spotLightShadows.value=P.state.spotShadow,At.rectAreaLights.value=P.state.rectArea,At.ltc_1.value=P.state.rectAreaLTC1,At.ltc_2.value=P.state.rectAreaLTC2,At.pointLights.value=P.state.point,At.pointLightShadows.value=P.state.pointShadow,At.hemisphereLights.value=P.state.hemi,At.directionalShadowMap.value=P.state.directionalShadowMap,At.directionalShadowMatrix.value=P.state.directionalShadowMatrix,At.spotShadowMap.value=P.state.spotShadowMap,At.spotLightMatrix.value=P.state.spotLightMatrix,At.spotLightMap.value=P.state.spotLightMap,At.pointShadowMap.value=P.state.pointShadowMap,At.pointShadowMatrix.value=P.state.pointShadowMatrix),O.currentProgram=Xt,O.uniformsList=null,Xt}function Mp(x){if(x.uniformsList===null){let D=x.currentProgram.getUniforms();x.uniformsList=co.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function wp(x,D){let B=Nt.get(x);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function $_(x,D,B,O,P){D.isScene!==!0&&(D=$t),M.resetTextureUnits();let it=D.fog,ut=O.isMeshStandardMaterial?D.environment:null,bt=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:kr,wt=(O.isMeshStandardMaterial?N:y).get(O.envMap||ut),Ht=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Xt=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),At=!!B.morphAttributes.position,be=!!B.morphAttributes.normal,Re=!!B.morphAttributes.color,Be=zr;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Be=S.toneMapping);let Dn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ye=Dn!==void 0?Dn.length:0,Tt=Nt.get(O),nn=p.state.lights;if(X===!0&&(tt===!0||x!==nt)){let Wn=x===nt&&O.id===z;L.setState(O,x,Wn)}let ve=!1;O.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==nn.state.version||Tt.outputColorSpace!==bt||P.isBatchedMesh&&Tt.batching===!1||!P.isBatchedMesh&&Tt.batching===!0||P.isBatchedMesh&&Tt.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Tt.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Tt.instancing===!1||!P.isInstancedMesh&&Tt.instancing===!0||P.isSkinnedMesh&&Tt.skinning===!1||!P.isSkinnedMesh&&Tt.skinning===!0||P.isInstancedMesh&&Tt.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Tt.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Tt.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Tt.instancingMorph===!1&&P.morphTexture!==null||Tt.envMap!==wt||O.fog===!0&&Tt.fog!==it||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==L.numPlanes||Tt.numIntersection!==L.numIntersection)||Tt.vertexAlphas!==Ht||Tt.vertexTangents!==Xt||Tt.morphTargets!==At||Tt.morphNormals!==be||Tt.morphColors!==Re||Tt.toneMapping!==Be||Tt.morphTargetsCount!==ye)&&(ve=!0):(ve=!0,Tt.__version=O.version);let ei=Tt.currentProgram;ve===!0&&(ei=pc(O,D,P));let Hs=!1,Pn=!1,su=!1,ze=ei.getUniforms(),Cr=Tt.uniforms;if(zt.useProgram(ei.program)&&(Hs=!0,Pn=!0,su=!0),O.id!==z&&(z=O.id,Pn=!0),Hs||nt!==x){se.reverseDepthBuffer?(mt.copy(x.projectionMatrix),o0(mt),a0(mt),ze.setValue(E,"projectionMatrix",mt)):ze.setValue(E,"projectionMatrix",x.projectionMatrix),ze.setValue(E,"viewMatrix",x.matrixWorldInverse);let Wn=ze.map.cameraPosition;Wn!==void 0&&Wn.setValue(E,Yt.setFromMatrixPosition(x.matrixWorld)),se.logarithmicDepthBuffer&&ze.setValue(E,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ze.setValue(E,"isOrthographic",x.isOrthographicCamera===!0),nt!==x&&(nt=x,Pn=!0,su=!0)}if(P.isSkinnedMesh){ze.setOptional(E,P,"bindMatrix"),ze.setOptional(E,P,"bindMatrixInverse");let Wn=P.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),ze.setValue(E,"boneTexture",Wn.boneTexture,M))}P.isBatchedMesh&&(ze.setOptional(E,P,"batchingTexture"),ze.setValue(E,"batchingTexture",P._matricesTexture,M),ze.setOptional(E,P,"batchingIdTexture"),ze.setValue(E,"batchingIdTexture",P._indirectTexture,M),ze.setOptional(E,P,"batchingColorTexture"),P._colorsTexture!==null&&ze.setValue(E,"batchingColorTexture",P._colorsTexture,M));let ou=B.morphAttributes;if((ou.position!==void 0||ou.normal!==void 0||ou.color!==void 0)&&_t.update(P,B,ei),(Pn||Tt.receiveShadow!==P.receiveShadow)&&(Tt.receiveShadow=P.receiveShadow,ze.setValue(E,"receiveShadow",P.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Cr.envMap.value=wt,Cr.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&D.environment!==null&&(Cr.envMapIntensity.value=D.environmentIntensity),Pn&&(ze.setValue(E,"toneMappingExposure",S.toneMappingExposure),Tt.needsLights&&J_(Cr,su),it&&O.fog===!0&&ot.refreshFogUniforms(Cr,it),ot.refreshMaterialUniforms(Cr,O,et,k,p.state.transmissionRenderTarget[x.id]),co.upload(E,Mp(Tt),Cr,M)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(co.upload(E,Mp(Tt),Cr,M),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ze.setValue(E,"center",P.center),ze.setValue(E,"modelViewMatrix",P.modelViewMatrix),ze.setValue(E,"normalMatrix",P.normalMatrix),ze.setValue(E,"modelMatrix",P.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){let Wn=O.uniformsGroups;for(let au=0,Q_=Wn.length;au<Q_;au++){let Ap=Wn[au];I.update(Ap,ei),I.bind(Ap,ei)}}return ei}function J_(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function K_(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(x,D,B){Nt.get(x.texture).__webglTexture=D,Nt.get(x.depthTexture).__webglTexture=B;let O=Nt.get(x);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=B===void 0,O.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){let B=Nt.get(x);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,B=0){T=x,F=D,C=B;let O=!0,P=null,it=!1,ut=!1;if(x){let wt=Nt.get(x);if(wt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(E.FRAMEBUFFER,null),O=!1;else if(wt.__webglFramebuffer===void 0)M.setupRenderTarget(x);else if(wt.__hasExternalTextures)M.rebindTextures(x,Nt.get(x.texture).__webglTexture,Nt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let At=x.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&Nt.has(At)&&(x.width!==At.image.width||x.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(x)}}let Ht=x.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(ut=!0);let Xt=Nt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Xt[D])?P=Xt[D][B]:P=Xt[D],it=!0):x.samples>0&&M.useMultisampledRTT(x)===!1?P=Nt.get(x).__webglMultisampledFramebuffer:Array.isArray(Xt)?P=Xt[B]:P=Xt,g.copy(x.viewport),b.copy(x.scissor),W=x.scissorTest}else g.copy(lt).multiplyScalar(et).floor(),b.copy(vt).multiplyScalar(et).floor(),W=ae;if(zt.bindFramebuffer(E.FRAMEBUFFER,P)&&O&&zt.drawBuffers(x,P),zt.viewport(g),zt.scissor(b),zt.setScissorTest(W),it){let wt=Nt.get(x.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+D,wt.__webglTexture,B)}else if(ut){let wt=Nt.get(x.texture),Ht=D||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,wt.__webglTexture,B||0,Ht)}z=-1},this.readRenderTargetPixels=function(x,D,B,O,P,it,ut){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ut!==void 0&&(bt=bt[ut]),bt){zt.bindFramebuffer(E.FRAMEBUFFER,bt);try{let wt=x.texture,Ht=wt.format,Xt=wt.type;if(!se.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-O&&B>=0&&B<=x.height-P&&E.readPixels(D,B,O,P,Bt.convert(Ht),Bt.convert(Xt),it)}finally{let wt=T!==null?Nt.get(T).__webglFramebuffer:null;zt.bindFramebuffer(E.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(x,D,B,O,P,it,ut){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Nt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ut!==void 0&&(bt=bt[ut]),bt){let wt=x.texture,Ht=wt.format,Xt=wt.type;if(!se.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-O&&B>=0&&B<=x.height-P){zt.bindFramebuffer(E.FRAMEBUFFER,bt);let At=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,At),E.bufferData(E.PIXEL_PACK_BUFFER,it.byteLength,E.STREAM_READ),E.readPixels(D,B,O,P,Bt.convert(Ht),Bt.convert(Xt),0);let be=T!==null?Nt.get(T).__webglFramebuffer:null;zt.bindFramebuffer(E.FRAMEBUFFER,be);let Re=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await s0(E,Re,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,At),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,it),E.deleteBuffer(At),E.deleteSync(Re),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,B=0){x.isTexture!==!0&&(Yc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);let O=Math.pow(2,-B),P=Math.floor(x.image.width*O),it=Math.floor(x.image.height*O),ut=D!==null?D.x:0,bt=D!==null?D.y:0;M.setTexture2D(x,0),E.copyTexSubImage2D(E.TEXTURE_2D,B,0,0,ut,bt,P,it),zt.unbindTexture()},this.copyTextureToTexture=function(x,D,B=null,O=null,P=0){x.isTexture!==!0&&(Yc("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1],D=arguments[2],P=arguments[3]||0,B=null);let it,ut,bt,wt,Ht,Xt;B!==null?(it=B.max.x-B.min.x,ut=B.max.y-B.min.y,bt=B.min.x,wt=B.min.y):(it=x.image.width,ut=x.image.height,bt=0,wt=0),O!==null?(Ht=O.x,Xt=O.y):(Ht=0,Xt=0);let At=Bt.convert(D.format),be=Bt.convert(D.type);M.setTexture2D(D,0),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);let Re=E.getParameter(E.UNPACK_ROW_LENGTH),Be=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Dn=E.getParameter(E.UNPACK_SKIP_PIXELS),ye=E.getParameter(E.UNPACK_SKIP_ROWS),Tt=E.getParameter(E.UNPACK_SKIP_IMAGES),nn=x.isCompressedTexture?x.mipmaps[P]:x.image;E.pixelStorei(E.UNPACK_ROW_LENGTH,nn.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,nn.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,bt),E.pixelStorei(E.UNPACK_SKIP_ROWS,wt),x.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,P,Ht,Xt,it,ut,At,be,nn.data):x.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,P,Ht,Xt,nn.width,nn.height,At,nn.data):E.texSubImage2D(E.TEXTURE_2D,P,Ht,Xt,it,ut,At,be,nn),E.pixelStorei(E.UNPACK_ROW_LENGTH,Re),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Be),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Dn),E.pixelStorei(E.UNPACK_SKIP_ROWS,ye),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Tt),P===0&&D.generateMipmaps&&E.generateMipmap(E.TEXTURE_2D),zt.unbindTexture()},this.copyTextureToTexture3D=function(x,D,B=null,O=null,P=0){x.isTexture!==!0&&(Yc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,O=arguments[1]||null,x=arguments[2],D=arguments[3],P=arguments[4]||0);let it,ut,bt,wt,Ht,Xt,At,be,Re,Be=x.isCompressedTexture?x.mipmaps[P]:x.image;B!==null?(it=B.max.x-B.min.x,ut=B.max.y-B.min.y,bt=B.max.z-B.min.z,wt=B.min.x,Ht=B.min.y,Xt=B.min.z):(it=Be.width,ut=Be.height,bt=Be.depth,wt=0,Ht=0,Xt=0),O!==null?(At=O.x,be=O.y,Re=O.z):(At=0,be=0,Re=0);let Dn=Bt.convert(D.format),ye=Bt.convert(D.type),Tt;if(D.isData3DTexture)M.setTexture3D(D,0),Tt=E.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)M.setTexture2DArray(D,0),Tt=E.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,D.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,D.unpackAlignment);let nn=E.getParameter(E.UNPACK_ROW_LENGTH),ve=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ei=E.getParameter(E.UNPACK_SKIP_PIXELS),Hs=E.getParameter(E.UNPACK_SKIP_ROWS),Pn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Be.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Be.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,wt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ht),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Xt),x.isDataTexture||x.isData3DTexture?E.texSubImage3D(Tt,P,At,be,Re,it,ut,bt,Dn,ye,Be.data):D.isCompressedArrayTexture?E.compressedTexSubImage3D(Tt,P,At,be,Re,it,ut,bt,Dn,Be.data):E.texSubImage3D(Tt,P,At,be,Re,it,ut,bt,Dn,ye,Be),E.pixelStorei(E.UNPACK_ROW_LENGTH,nn),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ve),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ei),E.pixelStorei(E.UNPACK_SKIP_ROWS,Hs),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Pn),P===0&&D.generateMipmaps&&E.generateMipmap(Tt),zt.unbindTexture()},this.initRenderTarget=function(x){Nt.get(x).__webglFramebuffer===void 0&&M.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),zt.unbindTexture()},this.resetState=function(){F=0,C=0,T=null,zt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===hf?"display-p3":"srgb",e.unpackColorSpace=fe.workingColorSpace===bl?"display-p3":"srgb"}};var ca=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var la=class extends nr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ul=new U,dl=new U,Mm=new Ue,Qo=new ys,Bc=new _s,Ou=new U,wm=new U,kd=class extends rn{constructor(t=new gn,e=new la){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)ul.fromBufferAttribute(e,r-1),dl.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=ul.distanceTo(dl);t.setAttribute("lineDistance",new Di(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bc.copy(i.boundingSphere),Bc.applyMatrix4(r),Bc.radius+=s,t.ray.intersectsSphere(Bc)===!1)return;Mm.copy(r).invert(),Qo.copy(t.ray).applyMatrix4(Mm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=l){let f=h.getX(v),w=h.getX(v+1),S=Oc(this,t,Qo,c,f,w);S&&e.push(S)}if(this.isLineLoop){let v=h.getX(_-1),p=h.getX(m),f=Oc(this,t,Qo,c,v,p);f&&e.push(f)}}else{let m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=m,p=_-1;v<p;v+=l){let f=Oc(this,t,Qo,c,v,v+1);f&&e.push(f)}if(this.isLineLoop){let v=Oc(this,t,Qo,c,_-1,m);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Oc(n,t,e,i,r,s){let o=n.geometry.attributes.position;if(ul.fromBufferAttribute(o,r),dl.fromBufferAttribute(o,s),e.distanceSqToSegment(ul,dl,Ou,wm)>i)return;Ou.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ou);if(!(c<t.near||c>t.far))return{distance:c,point:wm.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}var fl=class extends kd{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},_o=class extends nr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Am=new Ue,Hd=new ys,Fc=new _s,zc=new U,ha=class extends rn{constructor(t=new gn,e=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(r),Fc.radius+=s,t.ray.intersectsSphere(Fc)===!1)return;Am.copy(r).invert(),Hd.copy(t.ray).applyMatrix4(Am);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=d,v=m;_<v;_++){let p=l.getX(_);zc.fromBufferAttribute(u,p),Tm(zc,p,c,r,t,e,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,v=m;_<v;_++)zc.fromBufferAttribute(u,_),Tm(zc,_,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Tm(n,t,e,i,r,s,o){let a=Hd.distanceSqToPoint(n);if(a<e){let c=new U;Hd.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pl=class extends nr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=km,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vc(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function nM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var yo=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let o;n:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break e}o=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=e[--i-1],t>=s)break e}o=i,i=0;break n}break t}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gd=class extends yo{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cp,endingEnd:Cp}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dp:s=t,a=2*e-i;break;case Pp:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Dp:o=t,c=2*i-e;break;case Pp:o=1,c=i+r[1]-r[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(i-e)/(r-e),v=_*_,p=v*_,f=-d*p+2*d*v-d*_,w=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*_+1,S=(-1-m)*p+(1.5+m)*v+.5*_,A=m*p-m*v;for(let F=0;F!==a;++F)s[F]=f*o[h+F]+w*o[l+F]+S*o[c+F]+A*o[u+F];return s}},Wd=class extends yo{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Xd=class extends yo{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},hi=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vc(e,this.TimeBufferType),this.values=Vc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vc(t.times,Array),values:Vc(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Xd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gd(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qc:e=this.InterpolantFactoryMethodDiscrete;break;case wd:e=this.InterpolantFactoryMethodLinear;break;case lu:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qc;case this.InterpolantFactoryMethodLinear:return wd;case this.InterpolantFactoryMethodSmooth:return lu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&nM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===lu,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*i,d=u-i,m=u+i;for(let _=0;_!==i;++_){let v=e[u+_];if(v!==e[d+_]||v!==e[m+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[u+m]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=wd;var vs=class extends hi{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=qc;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yd=class extends hi{};Yd.prototype.ValueTypeName="color";var qd=class extends hi{};qd.prototype.ValueTypeName="number";var jd=class extends yo{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)li.slerpFlat(s,0,o,l-a,o,l,c);return s}},ml=class extends hi{InterpolantFactoryMethodLinear(t){return new jd(this.times,this.values,this.getValueSize(),t)}};ml.prototype.ValueTypeName="quaternion";ml.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends hi{constructor(t,e,i){super(t,e,i)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=qc;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zd=class extends hi{};Zd.prototype.ValueTypeName="vector";var $d=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],_=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}},iM=new $d,Jd=class{constructor(t){this.manager=t!==void 0?t:iM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Jd.DEFAULT_MATERIAL_NAME="__DEFAULT";var gl=class extends rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},_l=class extends gl{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Fu=new Ue,Em=new U,Im=new U,Kd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new Oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Em.setFromMatrixPosition(t.matrixWorld),e.position.copy(Em),Im.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Im),e.updateMatrixWorld(),Fu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Qd=class extends Kd{constructor(){super(new al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yl=class extends gl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Qd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ff="\\[\\]\\.:\\/",rM=new RegExp("["+ff+"]","g"),pf="[^"+ff+"]",sM="[^"+ff.replace("\\.","")+"]",oM=/((?:WC+[\/:])*)/.source.replace("WC",pf),aM=/(WCOD+)?/.source.replace("WCOD",sM),cM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pf),lM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pf),hM=new RegExp("^"+oM+aM+cM+lM+"$"),uM=["material","materials","bones","map"],tf=class{constructor(t,e,i){let r=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rM,"")}static parseTrackName(t){let e=hM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);uM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=tf;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QA=new Float32Array(1);var ua=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(un(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vl=class extends er{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);var Km={type:"change"},gf={type:"start"},tg={type:"end"},Ml=new ys,Qm=new si,fM=Math.cos(70*Gm.DEG2RAD),$e=new U,wn=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mf=1e-6,wl=class extends vl{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:bs.ROTATE,MIDDLE:bs.DOLLY,RIGHT:bs.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new li,this._lastTargetPosition=new U,this._quat=new li().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ua,this._sphericalDelta=new ua,this._scale=1,this._panOffset=new U,this._rotateStart=new Zt,this._rotateEnd=new Zt,this._rotateDelta=new Zt,this._panStart=new Zt,this._panEnd=new Zt,this._panDelta=new Zt,this._dollyStart=new Zt,this._dollyEnd=new Zt,this._dollyDelta=new Zt,this._dollyDirection=new U,this._mouse=new Zt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mM.bind(this),this._onPointerDown=pM.bind(this),this._onPointerUp=gM.bind(this),this._onContextMenu=MM.bind(this),this._onMouseWheel=vM.bind(this),this._onKeyDown=xM.bind(this),this._onTouchStart=bM.bind(this),this._onTouchMove=SM.bind(this),this._onMouseDown=_M.bind(this),this._onMouseMove=yM.bind(this),this._interceptControlDown=wM.bind(this),this._interceptControlUp=AM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Km),this.update(),this.state=Me.NONE}update(t=null){let e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=wn:i>Math.PI&&(i-=wn),r<-Math.PI?r+=wn:r>Math.PI&&(r-=wn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=$e.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<fM?this.object.lookAt(this.target):(Qm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(Qm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>mf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mf||this._lastTargetPosition.distanceToSquared(this.target)>mf?(this.dispatchEvent(Km),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?wn/60*this.autoRotateSpeed*t:wn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;$e.copy(r).sub(this.target);let s=$e.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-wn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(wn*this._rotateDelta.x/e.clientHeight),this._rotateUp(wn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Zt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function pM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function mM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tg),this.state=Me.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function _M(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case bs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Me.DOLLY;break;case bs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}break;case bs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(gf)}function yM(n){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function vM(n){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(n.preventDefault(),this.dispatchEvent(gf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(tg))}function xM(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function bM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Me.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Me.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(gf)}function SM(n){switch(this._trackPointer(n),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Me.NONE}}function MM(n){this.enabled!==!1&&n.preventDefault()}function wM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ng(n,t){var e={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(e[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(e[i[r]]=n[i[r]]);return e}function dt(n,t,e,i){function r(s){return s instanceof e?s:new e(function(o){o(s)})}return new(e||(e=Promise))(function(s,o){function a(h){try{l(i.next(h))}catch(u){o(u)}}function c(h){try{l(i.throw(h))}catch(u){o(u)}}function l(h){h.done?s(h.value):r(h.value).then(a,c)}l((i=i.apply(n,t||[])).next())})}function eg(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],i=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function jt(n){return this instanceof jt?(this.v=n,this):new jt(n)}function Nn(n,t,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(n,t||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(m){return function(_){return Promise.resolve(_).then(m,u)}}function a(m,_){i[m]&&(r[m]=function(v){return new Promise(function(p,f){s.push([m,v,p,f])>1||c(m,v)})},_&&(r[m]=_(r[m])))}function c(m,_){try{l(i[m](_))}catch(v){d(s[0][3],v)}}function l(m){m.value instanceof jt?Promise.resolve(m.value.v).then(h,u):d(s[0][2],m)}function h(m){c("next",m)}function u(m){c("throw",m)}function d(m,_){m(_),s.shift(),s.length&&c(s[0][0],s[0][1])}}function bo(n){var t,e;return t={},i("next"),i("throw",function(r){throw r}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(r,s){t[r]=n[r]?function(o){return(e=!e)?{value:jt(n[r](o)),done:!1}:s?s(o):o}:s}}function ui(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],e;return t?t.call(n):(n=typeof eg=="function"?eg(n):n[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(s){e[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Sf={};ns(Sf,{compareArrayLike:()=>bf,joinUint8Arrays:()=>On,memcpy:()=>ma,rebaseValueOffsets:()=>Pl,toArrayBufferView:()=>Jt,toArrayBufferViewAsyncIterator:()=>fi,toArrayBufferViewIterator:()=>Ni,toBigInt64Array:()=>Dl,toBigUint64Array:()=>UM,toFloat32Array:()=>NM,toFloat32ArrayAsyncIterator:()=>JM,toFloat32ArrayIterator:()=>GM,toFloat64Array:()=>BM,toFloat64ArrayAsyncIterator:()=>KM,toFloat64ArrayIterator:()=>WM,toInt16Array:()=>DM,toInt16ArrayAsyncIterator:()=>qM,toInt16ArrayIterator:()=>zM,toInt32Array:()=>Ms,toInt32ArrayAsyncIterator:()=>jM,toInt32ArrayIterator:()=>VM,toInt8Array:()=>CM,toInt8ArrayAsyncIterator:()=>YM,toInt8ArrayIterator:()=>FM,toUint16Array:()=>PM,toUint16ArrayAsyncIterator:()=>ZM,toUint16ArrayIterator:()=>kM,toUint32Array:()=>LM,toUint32ArrayAsyncIterator:()=>$M,toUint32ArrayIterator:()=>HM,toUint8Array:()=>Lt,toUint8ArrayAsyncIterator:()=>xf,toUint8ArrayIterator:()=>vf,toUint8ClampedArray:()=>OM,toUint8ClampedArrayAsyncIterator:()=>QM,toUint8ClampedArrayIterator:()=>XM});var TM=new TextDecoder("utf-8"),fa=n=>TM.decode(n),EM=new TextEncoder,Ui=n=>EM.encode(n);var IM=n=>typeof n=="number",ig=n=>typeof n=="boolean",Je=n=>typeof n=="function",_n=n=>n!=null&&Object(n)===n,Bn=n=>_n(n)&&Je(n.then);var di=n=>_n(n)&&Je(n[Symbol.iterator]),Zn=n=>_n(n)&&Je(n[Symbol.asyncIterator]),Al=n=>_n(n)&&_n(n.schema);var Tl=n=>_n(n)&&"done"in n&&"value"in n;var El=n=>_n(n)&&Je(n.stat)&&IM(n.fd);var Il=n=>_n(n)&&pa(n.body),Rl=n=>"_getDOMStream"in n&&"_getNodeStream"in n,rg=n=>_n(n)&&Je(n.abort)&&Je(n.getWriter)&&!Rl(n),pa=n=>_n(n)&&Je(n.cancel)&&Je(n.getReader)&&!Rl(n),sg=n=>_n(n)&&Je(n.end)&&Je(n.write)&&ig(n.writable)&&!Rl(n),Cl=n=>_n(n)&&Je(n.read)&&Je(n.pipe)&&ig(n.readable)&&!Rl(n),og=n=>_n(n)&&Je(n.clear)&&Je(n.bytes)&&Je(n.position)&&Je(n.setPosition)&&Je(n.capacity)&&Je(n.getBufferIdentifier)&&Je(n.createLong);var yf=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer;function RM(n){let t=n[0]?[n[0]]:[],e,i,r,s;for(let o,a,c=0,l=0,h=n.length;++c<h;){if(o=t[l],a=n[c],!o||!a||o.buffer!==a.buffer||a.byteOffset<o.byteOffset){a&&(t[++l]=a);continue}if({byteOffset:e,byteLength:r}=o,{byteOffset:i,byteLength:s}=a,e+r<i||i+s<e){a&&(t[++l]=a);continue}t[l]=new Uint8Array(o.buffer,e,i-e+s)}return t}function ma(n,t,e=0,i=t.byteLength){let r=n.byteLength,s=new Uint8Array(n.buffer,n.byteOffset,r),o=new Uint8Array(t.buffer,t.byteOffset,Math.min(i,r));return s.set(o,e),n}function On(n,t){let e=RM(n),i=e.reduce((h,u)=>h+u.byteLength,0),r,s,o,a=0,c=-1,l=Math.min(t||Number.POSITIVE_INFINITY,i);for(let h=e.length;++c<h;){if(r=e[c],s=r.subarray(0,Math.min(r.length,l-a)),l<=a+s.length){s.length<r.length?e[c]=r.subarray(s.length):s.length===r.length&&c++,o?ma(o,s,a):o=s;break}ma(o||(o=new Uint8Array(l)),s,a),a+=s.length}return[o||new Uint8Array(0),e.slice(c),i-(o?o.byteLength:0)]}function Jt(n,t){let e=Tl(t)?t.value:t;return e instanceof n?n===Uint8Array?new n(e.buffer,e.byteOffset,e.byteLength):e:e?(typeof e=="string"&&(e=Ui(e)),e instanceof ArrayBuffer?new n(e):e instanceof yf?new n(e):og(e)?Jt(n,e.bytes()):ArrayBuffer.isView(e)?e.byteLength<=0?new n(0):new n(e.buffer,e.byteOffset,e.byteLength/n.BYTES_PER_ELEMENT):n.from(e)):new n(0)}var CM=n=>Jt(Int8Array,n),DM=n=>Jt(Int16Array,n),Ms=n=>Jt(Int32Array,n),Dl=n=>Jt(BigInt64Array,n),Lt=n=>Jt(Uint8Array,n),PM=n=>Jt(Uint16Array,n),LM=n=>Jt(Uint32Array,n),UM=n=>Jt(BigUint64Array,n),NM=n=>Jt(Float32Array,n),BM=n=>Jt(Float64Array,n),OM=n=>Jt(Uint8ClampedArray,n),_f=n=>(n.next(),n);function*Ni(n,t){let e=function*(r){yield r},i=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof yf?e(t):di(t)?t:e(t);return yield*_f(function*(r){let s=null;do s=r.next(yield Jt(n,s));while(!s.done)}(i[Symbol.iterator]())),new n}var FM=n=>Ni(Int8Array,n),zM=n=>Ni(Int16Array,n),VM=n=>Ni(Int32Array,n),vf=n=>Ni(Uint8Array,n),kM=n=>Ni(Uint16Array,n),HM=n=>Ni(Uint32Array,n),GM=n=>Ni(Float32Array,n),WM=n=>Ni(Float64Array,n),XM=n=>Ni(Uint8ClampedArray,n);function fi(n,t){return Nn(this,arguments,function*(){if(Bn(t))return yield jt(yield jt(yield*bo(ui(fi(n,yield jt(t))))));let i=function(o){return Nn(this,arguments,function*(){yield yield jt(yield jt(o))})},r=function(o){return Nn(this,arguments,function*(){yield jt(yield*bo(ui(_f(function*(a){let c=null;do c=a.next(yield c?.value);while(!c.done)}(o[Symbol.iterator]())))))})},s=typeof t=="string"||ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof yf?i(t):di(t)?r(t):Zn(t)?t:i(t);return yield jt(yield*bo(ui(_f(function(o){return Nn(this,arguments,function*(){let a=null;do a=yield jt(o.next(yield yield jt(Jt(n,a))));while(!a.done)})}(s[Symbol.asyncIterator]()))))),yield jt(new n)})}var YM=n=>fi(Int8Array,n),qM=n=>fi(Int16Array,n),jM=n=>fi(Int32Array,n),xf=n=>fi(Uint8Array,n),ZM=n=>fi(Uint16Array,n),$M=n=>fi(Uint32Array,n),JM=n=>fi(Float32Array,n),KM=n=>fi(Float64Array,n),QM=n=>fi(Uint8ClampedArray,n);function Pl(n,t,e){if(n!==0){e=e.slice(0,t);for(let i=-1,r=e.length;++i<r;)e[i]+=n}return e.subarray(0,t)}function bf(n,t){let e=0,i=n.length;if(i!==t.length)return!1;if(i>0)do if(n[e]!==t[e])return!1;while(++e<i);return!0}var sn={fromIterable(n){return Ll(tw(n))},fromAsyncIterable(n){return Ll(ew(n))},fromDOMStream(n){return Ll(nw(n))},fromNodeStream(n){return Ll(iw(n))},toDOMStream(n,t){throw new Error('"toDOMStream" not available in this environment')},toNodeStream(n,t){throw new Error('"toNodeStream" not available in this environment')}},Ll=n=>(n.next(),n);function*tw(n){let t,e=!1,i=[],r,s,o,a=0;function c(){return s==="peek"?On(i,o)[0]:([r,i,a]=On(i,o),r)}({cmd:s,size:o}=(yield null)||{cmd:"read",size:0});let l=vf(n)[Symbol.iterator]();try{do if({done:t,value:r}=Number.isNaN(o-a)?l.next():l.next(o-a),!t&&r.byteLength>0&&(i.push(r),a+=r.byteLength),t||o<=a)do({cmd:s,size:o}=yield c());while(o<a);while(!t)}catch(h){(e=!0)&&typeof l.throw=="function"&&l.throw(h)}finally{e===!1&&typeof l.return=="function"&&l.return(null)}return null}function ew(n){return Nn(this,arguments,function*(){let e,i=!1,r=[],s,o,a,c=0;function l(){return o==="peek"?On(r,a)[0]:([s,r,c]=On(r,a),s)}({cmd:o,size:a}=(yield yield jt(null))||{cmd:"read",size:0});let h=xf(n)[Symbol.asyncIterator]();try{do if({done:e,value:s}=Number.isNaN(a-c)?yield jt(h.next()):yield jt(h.next(a-c)),!e&&s.byteLength>0&&(r.push(s),c+=s.byteLength),e||a<=c)do({cmd:o,size:a}=yield yield jt(l()));while(a<c);while(!e)}catch(u){(i=!0)&&typeof h.throw=="function"&&(yield jt(h.throw(u)))}finally{i===!1&&typeof h.return=="function"&&(yield jt(h.return(new Uint8Array(0))))}return yield jt(null)})}function nw(n){return Nn(this,arguments,function*(){let e=!1,i=!1,r=[],s,o,a,c=0;function l(){return o==="peek"?On(r,a)[0]:([s,r,c]=On(r,a),s)}({cmd:o,size:a}=(yield yield jt(null))||{cmd:"read",size:0});let h=new wf(n);try{do if({done:e,value:s}=Number.isNaN(a-c)?yield jt(h.read()):yield jt(h.read(a-c)),!e&&s.byteLength>0&&(r.push(Lt(s)),c+=s.byteLength),e||a<=c)do({cmd:o,size:a}=yield yield jt(l()));while(a<c);while(!e)}catch(u){(i=!0)&&(yield jt(h.cancel(u)))}finally{i===!1?yield jt(h.cancel()):n.locked&&h.releaseLock()}return yield jt(null)})}var wf=class{constructor(t){this.source=t,this.reader=null,this.reader=this.source.getReader(),this.reader.closed.catch(()=>{})}get closed(){return this.reader?this.reader.closed.catch(()=>{}):Promise.resolve()}releaseLock(){this.reader&&this.reader.releaseLock(),this.reader=null}cancel(t){return dt(this,void 0,void 0,function*(){let{reader:e,source:i}=this;e&&(yield e.cancel(t).catch(()=>{})),i&&i.locked&&this.releaseLock()})}read(t){return dt(this,void 0,void 0,function*(){if(t===0)return{done:this.reader==null,value:new Uint8Array(0)};let e=yield this.reader.read();return!e.done&&(e.value=Lt(e)),e})}},Mf=(n,t)=>{let e=r=>i([t,r]),i;return[t,e,new Promise(r=>(i=r)&&n.once(t,e))]};function iw(n){return Nn(this,arguments,function*(){let e=[],i="error",r=!1,s=null,o,a,c=0,l=[],h;function u(){return o==="peek"?On(l,a)[0]:([h,l,c]=On(l,a),h)}if({cmd:o,size:a}=(yield yield jt(null))||{cmd:"read",size:0},n.isTTY)return yield yield jt(new Uint8Array(0)),yield jt(null);try{e[0]=Mf(n,"end"),e[1]=Mf(n,"error");do{if(e[2]=Mf(n,"readable"),[i,s]=yield jt(Promise.race(e.map(m=>m[2]))),i==="error")break;if((r=i==="end")||(Number.isFinite(a-c)?(h=Lt(n.read(a-c)),h.byteLength<a-c&&(h=Lt(n.read()))):h=Lt(n.read()),h.byteLength>0&&(l.push(h),c+=h.byteLength)),r||a<=c)do({cmd:o,size:a}=yield yield jt(u()));while(a<c)}while(!r)}finally{yield jt(d(e,i==="error"?s:null))}return yield jt(null);function d(m,_){return h=l=null,new Promise((v,p)=>{for(let[f,w]of m)n.off(f,w);try{let f=n.destroy;f&&f.call(n,_),_=void 0}catch(f){_=f||_}finally{_!=null?p(_):v()}})}})}var xe;(function(n){n[n.V1=0]="V1",n[n.V2=1]="V2",n[n.V3=2]="V3",n[n.V4=3]="V4",n[n.V5=4]="V5"})(xe||(xe={}));var Te;(function(n){n[n.Sparse=0]="Sparse",n[n.Dense=1]="Dense"})(Te||(Te={}));var we;(function(n){n[n.HALF=0]="HALF",n[n.SINGLE=1]="SINGLE",n[n.DOUBLE=2]="DOUBLE"})(we||(we={}));var Ve;(function(n){n[n.DAY=0]="DAY",n[n.MILLISECOND=1]="MILLISECOND"})(Ve||(Ve={}));var St;(function(n){n[n.SECOND=0]="SECOND",n[n.MILLISECOND=1]="MILLISECOND",n[n.MICROSECOND=2]="MICROSECOND",n[n.NANOSECOND=3]="NANOSECOND"})(St||(St={}));var en;(function(n){n[n.YEAR_MONTH=0]="YEAR_MONTH",n[n.DAY_TIME=1]="DAY_TIME",n[n.MONTH_DAY_NANO=2]="MONTH_DAY_NANO"})(en||(en={}));var Bi=new Int32Array(2),Ul=new Float32Array(Bi.buffer),Nl=new Float64Array(Bi.buffer),So=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var ga;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(ga||(ga={}));var Fn=class n{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new n(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return Bi[0]=this.readInt32(t),Ul[0]}readFloat64(t){return Bi[So?0:1]=this.readInt32(t),Bi[So?1:0]=this.readInt32(t+4),Nl[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){Ul[0]=e,this.writeInt32(t,Bi[0])}writeFloat64(t,e){Nl[0]=e,this.writeInt32(t,Bi[So?0:1]),this.writeInt32(t+4,Bi[So?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+4+4)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<4;e++)t+=String.fromCharCode(this.readInt8(this.position_+4+e));return t}__offset(t,e){let i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);let i=this.readInt32(t);t+=4;let r=this.bytes_.subarray(t,t+i);return e===ga.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+4}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=4)throw new Error("FlatBuffers: file identifier must be length "+4);for(let e=0;e<4;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+4+e))return!1;return!0}createScalarList(t,e){let i=[];for(let r=0;r<e;++r){let s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){let i=[];for(let r=0;r<e;++r){let s=t(r);s!==null&&i.push(s.unpack())}return i}};var ws=class n{constructor(t){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let e;t?e=t:e=1024,this.bb=Fn.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);let i=~(this.bb.capacity()-this.space+e)+1&t-1;for(;this.space<i+t+e;){let r=this.bb.capacity();this.bb=n.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){let e=t.capacity();if(e&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");let i=e<<1,r=Fn.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(4,0),this.writeInt32(this.offset()-t+4)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);let t=this.offset(),e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);let i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);let r=2;this.addInt16(t-this.object_start);let s=(i+r)*2;this.addInt16(s);let o=0,a=this.space;t:for(e=0;e<this.vtables.length;e++){let c=this.bb.capacity()-this.vtables[e];if(s==this.bb.readInt16(c)){for(let l=2;l<s;l+=2)if(this.bb.readInt16(a+l)!=this.bb.readInt16(c+l))continue t;o=this.vtables[e];break}}return o?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,o-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){let r=i?4:0;if(e){let s=e;if(this.prep(this.minalign,8+r),s.length!=4)throw new TypeError("FlatBuffers: file identifier must be length "+4);for(let o=3;o>=0;o--)this.writeInt8(s.charCodeAt(o))}this.prep(this.minalign,4+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){let i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(4,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);let e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return t instanceof Uint8Array?e=t:e=this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){let e=[];for(let i=0;i<t.length;++i){let r=t[i];if(r!==null)e.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}};var _a;(function(n){n[n.BUFFER=0]="BUFFER"})(_a||(_a={}));var ya;(function(n){n[n.LZ4_FRAME=0]="LZ4_FRAME",n[n.ZSTD=1]="ZSTD"})(ya||(ya={}));var Ol=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBodyCompression(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBodyCompression(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}codec(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt8(this.bb_pos+t):ya.LZ4_FRAME}method(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt8(this.bb_pos+t):_a.BUFFER}static startBodyCompression(t){t.startObject(2)}static addCodec(t,e){t.addFieldInt8(0,e,ya.LZ4_FRAME)}static addMethod(t,e){t.addFieldInt8(1,e,_a.BUFFER)}static endBodyCompression(t){return t.endObject()}static createBodyCompression(t,e,i){return n.startBodyCompression(t),n.addCodec(t,e),n.addMethod(t,i),n.endBodyCompression(t)}};var Mo=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}length(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createBuffer(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}};var wo=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}length(){return this.bb.readInt64(this.bb_pos)}nullCount(){return this.bb.readInt64(this.bb_pos+8)}static sizeOf(){return 16}static createFieldNode(t,e,i){return t.prep(8,16),t.writeInt64(BigInt(i??0)),t.writeInt64(BigInt(e??0)),t.offset()}};var zn=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsRecordBatch(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsRecordBatch(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}length(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}nodes(t,e){let i=this.bb.__offset(this.bb_pos,6);return i?(e||new wo).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}nodesLength(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}buffers(t,e){let i=this.bb.__offset(this.bb_pos,8);return i?(e||new Mo).__init(this.bb.__vector(this.bb_pos+i)+t*16,this.bb):null}buffersLength(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}compression(t){let e=this.bb.__offset(this.bb_pos,10);return e?(t||new Ol).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}static startRecordBatch(t){t.startObject(4)}static addLength(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addNodes(t,e){t.addFieldOffset(1,e,0)}static startNodesVector(t,e){t.startVector(16,e,8)}static addBuffers(t,e){t.addFieldOffset(2,e,0)}static startBuffersVector(t,e){t.startVector(16,e,8)}static addCompression(t,e){t.addFieldOffset(3,e,0)}static endRecordBatch(t){return t.endObject()}};var ir=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryBatch(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryBatch(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}id(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}data(t){let e=this.bb.__offset(this.bb_pos,6);return e?(t||new zn).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isDelta(){let t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startDictionaryBatch(t){t.startObject(3)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addData(t,e){t.addFieldOffset(1,e,0)}static addIsDelta(t,e){t.addFieldInt8(2,+e,0)}static endDictionaryBatch(t){return t.endObject()}};var Hr;(function(n){n[n.Little=0]="Little",n[n.Big=1]="Big"})(Hr||(Hr={}));var va;(function(n){n[n.DenseArray=0]="DenseArray"})(va||(va={}));var mi=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInt(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInt(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}bitWidth(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}isSigned(){let t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startInt(t){t.startObject(2)}static addBitWidth(t,e){t.addFieldInt32(0,e,0)}static addIsSigned(t,e){t.addFieldInt8(1,+e,0)}static endInt(t){return t.endObject()}static createInt(t,e,i){return n.startInt(t),n.addBitWidth(t,e),n.addIsSigned(t,i),n.endInt(t)}};var Oi=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDictionaryEncoding(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDictionaryEncoding(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}id(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}indexType(t){let e=this.bb.__offset(this.bb_pos,6);return e?(t||new mi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}isOrdered(){let t=this.bb.__offset(this.bb_pos,8);return t?!!this.bb.readInt8(this.bb_pos+t):!1}dictionaryKind(){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt16(this.bb_pos+t):va.DenseArray}static startDictionaryEncoding(t){t.startObject(4)}static addId(t,e){t.addFieldInt64(0,e,BigInt("0"))}static addIndexType(t,e){t.addFieldOffset(1,e,0)}static addIsOrdered(t,e){t.addFieldInt8(2,+e,0)}static addDictionaryKind(t,e){t.addFieldInt16(3,e,va.DenseArray)}static endDictionaryEncoding(t){return t.endObject()}};var Ke=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsKeyValue(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsKeyValue(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}key(t){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}value(t){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startKeyValue(t){t.startObject(2)}static addKey(t,e){t.addFieldOffset(0,e,0)}static addValue(t,e){t.addFieldOffset(1,e,0)}static endKeyValue(t){return t.endObject()}static createKeyValue(t,e,i){return n.startKeyValue(t),n.addKey(t,e),n.addValue(t,i),n.endKeyValue(t)}};var xa=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBinary(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBinary(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startBinary(t){t.startObject(0)}static endBinary(t){return t.endObject()}static createBinary(t){return n.startBinary(t),n.endBinary(t)}};var ba=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsBool(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsBool(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startBool(t){t.startObject(0)}static endBool(t){return t.endObject()}static createBool(t){return n.startBool(t),n.endBool(t)}};var Gr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDate(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDate(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}unit(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Ve.MILLISECOND}static startDate(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,Ve.MILLISECOND)}static endDate(t){return t.endObject()}static createDate(t,e){return n.startDate(t),n.addUnit(t,e),n.endDate(t)}};var Fi=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDecimal(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDecimal(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}precision(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}scale(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):0}bitWidth(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt32(this.bb_pos+t):128}static startDecimal(t){t.startObject(3)}static addPrecision(t,e){t.addFieldInt32(0,e,0)}static addScale(t,e){t.addFieldInt32(1,e,0)}static addBitWidth(t,e){t.addFieldInt32(2,e,128)}static endDecimal(t){return t.endObject()}static createDecimal(t,e,i,r){return n.startDecimal(t),n.addPrecision(t,e),n.addScale(t,i),n.addBitWidth(t,r),n.endDecimal(t)}};var Wr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsDuration(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsDuration(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}unit(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):St.MILLISECOND}static startDuration(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,St.MILLISECOND)}static endDuration(t){return t.endObject()}static createDuration(t,e){return n.startDuration(t),n.addUnit(t,e),n.endDuration(t)}};var Xr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeBinary(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeBinary(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}byteWidth(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeBinary(t){t.startObject(1)}static addByteWidth(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeBinary(t){return t.endObject()}static createFixedSizeBinary(t,e){return n.startFixedSizeBinary(t),n.addByteWidth(t,e),n.endFixedSizeBinary(t)}};var Yr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFixedSizeList(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFixedSizeList(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}listSize(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt32(this.bb_pos+t):0}static startFixedSizeList(t){t.startObject(1)}static addListSize(t,e){t.addFieldInt32(0,e,0)}static endFixedSizeList(t){return t.endObject()}static createFixedSizeList(t,e){return n.startFixedSizeList(t),n.addListSize(t,e),n.endFixedSizeList(t)}};var qr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFloatingPoint(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFloatingPoint(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}precision(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):we.HALF}static startFloatingPoint(t){t.startObject(1)}static addPrecision(t,e){t.addFieldInt16(0,e,we.HALF)}static endFloatingPoint(t){return t.endObject()}static createFloatingPoint(t,e){return n.startFloatingPoint(t),n.addPrecision(t,e),n.endFloatingPoint(t)}};var jr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsInterval(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsInterval(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}unit(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):en.YEAR_MONTH}static startInterval(t){t.startObject(1)}static addUnit(t,e){t.addFieldInt16(0,e,en.YEAR_MONTH)}static endInterval(t){return t.endObject()}static createInterval(t,e){return n.startInterval(t),n.addUnit(t,e),n.endInterval(t)}};var Sa=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeBinary(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeBinary(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startLargeBinary(t){t.startObject(0)}static endLargeBinary(t){return t.endObject()}static createLargeBinary(t){return n.startLargeBinary(t),n.endLargeBinary(t)}};var Ma=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsLargeUtf8(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsLargeUtf8(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startLargeUtf8(t){t.startObject(0)}static endLargeUtf8(t){return t.endObject()}static createLargeUtf8(t){return n.startLargeUtf8(t),n.endLargeUtf8(t)}};var wa=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsList(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsList(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startList(t){t.startObject(0)}static endList(t){return t.endObject()}static createList(t){return n.startList(t),n.endList(t)}};var Zr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMap(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMap(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}keysSorted(){let t=this.bb.__offset(this.bb_pos,4);return t?!!this.bb.readInt8(this.bb_pos+t):!1}static startMap(t){t.startObject(1)}static addKeysSorted(t,e){t.addFieldInt8(0,+e,0)}static endMap(t){return t.endObject()}static createMap(t,e){return n.startMap(t),n.addKeysSorted(t,e),n.endMap(t)}};var Aa=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsNull(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsNull(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startNull(t){t.startObject(0)}static endNull(t){return t.endObject()}static createNull(t){return n.startNull(t),n.endNull(t)}};var Ta=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStruct_(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStruct_(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startStruct_(t){t.startObject(0)}static endStruct_(t){return t.endObject()}static createStruct_(t){return n.startStruct_(t),n.endStruct_(t)}};var rr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTime(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTime(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}unit(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):St.MILLISECOND}bitWidth(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readInt32(this.bb_pos+t):32}static startTime(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,St.MILLISECOND)}static addBitWidth(t,e){t.addFieldInt32(1,e,32)}static endTime(t){return t.endObject()}static createTime(t,e,i){return n.startTime(t),n.addUnit(t,e),n.addBitWidth(t,i),n.endTime(t)}};var sr=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsTimestamp(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsTimestamp(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}unit(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):St.SECOND}timezone(t){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startTimestamp(t){t.startObject(2)}static addUnit(t,e){t.addFieldInt16(0,e,St.SECOND)}static addTimezone(t,e){t.addFieldOffset(1,e,0)}static endTimestamp(t){return t.endObject()}static createTimestamp(t,e,i){return n.startTimestamp(t),n.addUnit(t,e),n.addTimezone(t,i),n.endTimestamp(t)}};var gi=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUnion(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUnion(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}mode(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Te.Sparse}typeIds(t){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+t*4):0}typeIdsLength(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}typeIdsArray(){let t=this.bb.__offset(this.bb_pos,6);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startUnion(t){t.startObject(2)}static addMode(t,e){t.addFieldInt16(0,e,Te.Sparse)}static addTypeIds(t,e){t.addFieldOffset(1,e,0)}static createTypeIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTypeIdsVector(t,e){t.startVector(4,e,4)}static endUnion(t){return t.endObject()}static createUnion(t,e,i){return n.startUnion(t),n.addMode(t,e),n.addTypeIds(t,i),n.endUnion(t)}};var Ea=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsUtf8(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsUtf8(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static startUtf8(t){t.startObject(0)}static endUtf8(t){return t.endObject()}static createUtf8(t){return n.startUtf8(t),n.endUtf8(t)}};var Ae;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.FloatingPoint=3]="FloatingPoint",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct_=13]="Struct_",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.LargeList=21]="LargeList",n[n.RunEndEncoded=22]="RunEndEncoded"})(Ae||(Ae={}));var dn=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsField(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsField(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}name(t){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__string(this.bb_pos+e,t):null}nullable(){let t=this.bb.__offset(this.bb_pos,6);return t?!!this.bb.readInt8(this.bb_pos+t):!1}typeType(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readUint8(this.bb_pos+t):Ae.NONE}type(t){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__union(t,this.bb_pos+e):null}dictionary(t){let e=this.bb.__offset(this.bb_pos,12);return e?(t||new Oi).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}children(t,e){let i=this.bb.__offset(this.bb_pos,14);return i?(e||new n).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}childrenLength(){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){let i=this.bb.__offset(this.bb_pos,16);return i?(e||new Ke).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}static startField(t){t.startObject(7)}static addName(t,e){t.addFieldOffset(0,e,0)}static addNullable(t,e){t.addFieldInt8(1,+e,0)}static addTypeType(t,e){t.addFieldInt8(2,e,Ae.NONE)}static addType(t,e){t.addFieldOffset(3,e,0)}static addDictionary(t,e){t.addFieldOffset(4,e,0)}static addChildren(t,e){t.addFieldOffset(5,e,0)}static createChildrenVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startChildrenVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(6,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endField(t){return t.endObject()}};var An=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsSchema(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsSchema(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}endianness(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):Hr.Little}fields(t,e){let i=this.bb.__offset(this.bb_pos,6);return i?(e||new dn).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}fieldsLength(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){let i=this.bb.__offset(this.bb_pos,8);return i?(e||new Ke).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}features(t){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt64(this.bb.__vector(this.bb_pos+e)+t*8):BigInt(0)}featuresLength(){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}static startSchema(t){t.startObject(4)}static addEndianness(t,e){t.addFieldInt16(0,e,Hr.Little)}static addFields(t,e){t.addFieldOffset(1,e,0)}static createFieldsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startFieldsVector(t,e){t.startVector(4,e,4)}static addCustomMetadata(t,e){t.addFieldOffset(2,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static addFeatures(t,e){t.addFieldOffset(3,e,0)}static createFeaturesVector(t,e){t.startVector(8,e.length,8);for(let i=e.length-1;i>=0;i--)t.addInt64(e[i]);return t.endVector()}static startFeaturesVector(t,e){t.startVector(8,e,8)}static endSchema(t){return t.endObject()}static finishSchemaBuffer(t,e){t.finish(e)}static finishSizePrefixedSchemaBuffer(t,e){t.finish(e,void 0,!0)}static createSchema(t,e,i,r,s){return n.startSchema(t),n.addEndianness(t,e),n.addFields(t,i),n.addCustomMetadata(t,r),n.addFeatures(t,s),n.endSchema(t)}};var ne;(function(n){n[n.NONE=0]="NONE",n[n.Schema=1]="Schema",n[n.DictionaryBatch=2]="DictionaryBatch",n[n.RecordBatch=3]="RecordBatch",n[n.Tensor=4]="Tensor",n[n.SparseTensor=5]="SparseTensor"})(ne||(ne={}));var R;(function(n){n[n.NONE=0]="NONE",n[n.Null=1]="Null",n[n.Int=2]="Int",n[n.Float=3]="Float",n[n.Binary=4]="Binary",n[n.Utf8=5]="Utf8",n[n.Bool=6]="Bool",n[n.Decimal=7]="Decimal",n[n.Date=8]="Date",n[n.Time=9]="Time",n[n.Timestamp=10]="Timestamp",n[n.Interval=11]="Interval",n[n.List=12]="List",n[n.Struct=13]="Struct",n[n.Union=14]="Union",n[n.FixedSizeBinary=15]="FixedSizeBinary",n[n.FixedSizeList=16]="FixedSizeList",n[n.Map=17]="Map",n[n.Duration=18]="Duration",n[n.LargeBinary=19]="LargeBinary",n[n.LargeUtf8=20]="LargeUtf8",n[n.Dictionary=-1]="Dictionary",n[n.Int8=-2]="Int8",n[n.Int16=-3]="Int16",n[n.Int32=-4]="Int32",n[n.Int64=-5]="Int64",n[n.Uint8=-6]="Uint8",n[n.Uint16=-7]="Uint16",n[n.Uint32=-8]="Uint32",n[n.Uint64=-9]="Uint64",n[n.Float16=-10]="Float16",n[n.Float32=-11]="Float32",n[n.Float64=-12]="Float64",n[n.DateDay=-13]="DateDay",n[n.DateMillisecond=-14]="DateMillisecond",n[n.TimestampSecond=-15]="TimestampSecond",n[n.TimestampMillisecond=-16]="TimestampMillisecond",n[n.TimestampMicrosecond=-17]="TimestampMicrosecond",n[n.TimestampNanosecond=-18]="TimestampNanosecond",n[n.TimeSecond=-19]="TimeSecond",n[n.TimeMillisecond=-20]="TimeMillisecond",n[n.TimeMicrosecond=-21]="TimeMicrosecond",n[n.TimeNanosecond=-22]="TimeNanosecond",n[n.DenseUnion=-23]="DenseUnion",n[n.SparseUnion=-24]="SparseUnion",n[n.IntervalDayTime=-25]="IntervalDayTime",n[n.IntervalYearMonth=-26]="IntervalYearMonth",n[n.DurationSecond=-27]="DurationSecond",n[n.DurationMillisecond=-28]="DurationMillisecond",n[n.DurationMicrosecond=-29]="DurationMicrosecond",n[n.DurationNanosecond=-30]="DurationNanosecond"})(R||(R={}));var _i;(function(n){n[n.OFFSET=0]="OFFSET",n[n.DATA=1]="DATA",n[n.VALIDITY=2]="VALIDITY",n[n.TYPE=3]="TYPE"})(_i||(_i={}));var Wf={};ns(Wf,{clampRange:()=>Da,createElementComparator:()=>Qr,wrapIndex:()=>As});var Af={};ns(Af,{valueToString:()=>yi});function yi(n){if(n===null)return"null";if(n===void 0)return"undefined";switch(typeof n){case"number":return`${n}`;case"bigint":return`${n}`;case"string":return`"${n}"`}return typeof n[Symbol.toPrimitive]=="function"?n[Symbol.toPrimitive]("string"):ArrayBuffer.isView(n)?n instanceof BigInt64Array||n instanceof BigUint64Array?`[${[...n].map(t=>yi(t))}]`:`[${n}]`:ArrayBuffer.isView(n)?`[${n}]`:JSON.stringify(n,(t,e)=>typeof e=="bigint"?`${e}`:e)}var Rf={};ns(Rf,{BN:()=>Ra,bigNumToBigInt:()=>cg,bigNumToNumber:()=>If,bigNumToString:()=>Eo,isArrowBigNumSymbol:()=>ag});function he(n){if(typeof n=="bigint"&&(n<Number.MIN_SAFE_INTEGER||n>Number.MAX_SAFE_INTEGER))throw new TypeError(`${n} is not safe to convert to a number.`);return Number(n)}function Tf(n,t){return he(n/t)+he(n%t)/he(t)}var ag=Symbol.for("isArrowBigNum");function vi(n,...t){return t.length===0?Object.setPrototypeOf(Jt(this.TypedArray,n),this.constructor.prototype):Object.setPrototypeOf(new this.TypedArray(n,...t),this.constructor.prototype)}vi.prototype[ag]=!0;vi.prototype.toJSON=function(){return`"${Eo(this)}"`};vi.prototype.valueOf=function(n){return If(this,n)};vi.prototype.toString=function(){return Eo(this)};vi.prototype[Symbol.toPrimitive]=function(n="default"){switch(n){case"number":return If(this);case"string":return Eo(this);case"default":return cg(this)}return Eo(this)};function Ao(...n){return vi.apply(this,n)}function To(...n){return vi.apply(this,n)}function Ia(...n){return vi.apply(this,n)}Object.setPrototypeOf(Ao.prototype,Object.create(Int32Array.prototype));Object.setPrototypeOf(To.prototype,Object.create(Uint32Array.prototype));Object.setPrototypeOf(Ia.prototype,Object.create(Uint32Array.prototype));Object.assign(Ao.prototype,vi.prototype,{constructor:Ao,signed:!0,TypedArray:Int32Array,BigIntArray:BigInt64Array});Object.assign(To.prototype,vi.prototype,{constructor:To,signed:!1,TypedArray:Uint32Array,BigIntArray:BigUint64Array});Object.assign(Ia.prototype,vi.prototype,{constructor:Ia,signed:!0,TypedArray:Uint32Array,BigIntArray:BigUint64Array});var rw=BigInt(4294967296)*BigInt(4294967296),sw=rw-BigInt(1);function If(n,t){let{buffer:e,byteOffset:i,byteLength:r,signed:s}=n,o=new BigUint64Array(e,i,r/8),a=s&&o.at(-1)&BigInt(1)<<BigInt(63),c=BigInt(0),l=0;if(a){for(let h of o)c|=(h^sw)*(BigInt(1)<<BigInt(64*l++));c*=BigInt(-1),c-=BigInt(1)}else for(let h of o)c|=h*(BigInt(1)<<BigInt(64*l++));if(typeof t=="number"){let h=BigInt(Math.pow(10,t)),u=c/h,d=c%h;return he(u)+he(d)/he(h)}return he(c)}function Eo(n){if(n.byteLength===8)return`${new n.BigIntArray(n.buffer,n.byteOffset,1)[0]}`;if(!n.signed)return Ef(n);let t=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2);if(new Int16Array([t.at(-1)])[0]>=0)return Ef(n);t=t.slice();let i=1;for(let s=0;s<t.length;s++){let o=t[s],a=~o+i;t[s]=a,i&=o===0?1:0}return`-${Ef(t)}`}function cg(n){return n.byteLength===8?new n.BigIntArray(n.buffer,n.byteOffset,1)[0]:Eo(n)}function Ef(n){let t="",e=new Uint32Array(2),i=new Uint16Array(n.buffer,n.byteOffset,n.byteLength/2),r=new Uint32Array((i=new Uint16Array(i).reverse()).buffer),s=-1,o=i.length-1;do{for(e[0]=i[s=0];s<o;)i[s++]=e[1]=e[0]/10,e[0]=(e[0]-e[1]*10<<16)+i[s];i[s]=e[1]=e[0]/10,e[0]=e[0]-e[1]*10,t=`${e[0]}${t}`}while(r[0]||r[1]||r[2]||r[3]);return t??"0"}var Ra=class n{static new(t,e){switch(e){case!0:return new Ao(t);case!1:return new To(t)}switch(t.constructor){case Int8Array:case Int16Array:case Int32Array:case BigInt64Array:return new Ao(t)}return t.byteLength===16?new Ia(t):new To(t)}static signed(t){return new Ao(t)}static unsigned(t){return new To(t)}static decimal(t){return new Ia(t)}constructor(t,e){return n.new(t,e)}};var lg,hg,ug,dg,fg,pg,mg,gg,_g,yg,vg,xg,bg,Sg,Mg,wg,Ag,Tg,Eg,Ig,Rg,Cg,pt=class n{static isNull(t){return t?.typeId===R.Null}static isInt(t){return t?.typeId===R.Int}static isFloat(t){return t?.typeId===R.Float}static isBinary(t){return t?.typeId===R.Binary}static isLargeBinary(t){return t?.typeId===R.LargeBinary}static isUtf8(t){return t?.typeId===R.Utf8}static isLargeUtf8(t){return t?.typeId===R.LargeUtf8}static isBool(t){return t?.typeId===R.Bool}static isDecimal(t){return t?.typeId===R.Decimal}static isDate(t){return t?.typeId===R.Date}static isTime(t){return t?.typeId===R.Time}static isTimestamp(t){return t?.typeId===R.Timestamp}static isInterval(t){return t?.typeId===R.Interval}static isDuration(t){return t?.typeId===R.Duration}static isList(t){return t?.typeId===R.List}static isStruct(t){return t?.typeId===R.Struct}static isUnion(t){return t?.typeId===R.Union}static isFixedSizeBinary(t){return t?.typeId===R.FixedSizeBinary}static isFixedSizeList(t){return t?.typeId===R.FixedSizeList}static isMap(t){return t?.typeId===R.Map}static isDictionary(t){return t?.typeId===R.Dictionary}static isDenseUnion(t){return n.isUnion(t)&&t.mode===Te.Dense}static isSparseUnion(t){return n.isUnion(t)&&t.mode===Te.Sparse}constructor(t){this.typeId=t}};lg=Symbol.toStringTag;pt[lg]=(n=>(n.children=null,n.ArrayType=Array,n.OffsetArrayType=Int32Array,n[Symbol.toStringTag]="DataType"))(pt.prototype);var yn=class extends pt{constructor(){super(R.Null)}toString(){return"Null"}};hg=Symbol.toStringTag;yn[hg]=(n=>n[Symbol.toStringTag]="Null")(yn.prototype);var Qe=class extends pt{constructor(t,e){super(R.Int),this.isSigned=t,this.bitWidth=e}get ArrayType(){switch(this.bitWidth){case 8:return this.isSigned?Int8Array:Uint8Array;case 16:return this.isSigned?Int16Array:Uint16Array;case 32:return this.isSigned?Int32Array:Uint32Array;case 64:return this.isSigned?BigInt64Array:BigUint64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`${this.isSigned?"I":"Ui"}nt${this.bitWidth}`}};ug=Symbol.toStringTag;Qe[ug]=(n=>(n.isSigned=null,n.bitWidth=null,n[Symbol.toStringTag]="Int"))(Qe.prototype);var Fl=class extends Qe{constructor(){super(!0,8)}get ArrayType(){return Int8Array}},zl=class extends Qe{constructor(){super(!0,16)}get ArrayType(){return Int16Array}},zi=class extends Qe{constructor(){super(!0,32)}get ArrayType(){return Int32Array}},Vl=class extends Qe{constructor(){super(!0,64)}get ArrayType(){return BigInt64Array}},kl=class extends Qe{constructor(){super(!1,8)}get ArrayType(){return Uint8Array}},Hl=class extends Qe{constructor(){super(!1,16)}get ArrayType(){return Uint16Array}},Gl=class extends Qe{constructor(){super(!1,32)}get ArrayType(){return Uint32Array}},Wl=class extends Qe{constructor(){super(!1,64)}get ArrayType(){return BigUint64Array}};Object.defineProperty(Fl.prototype,"ArrayType",{value:Int8Array});Object.defineProperty(zl.prototype,"ArrayType",{value:Int16Array});Object.defineProperty(zi.prototype,"ArrayType",{value:Int32Array});Object.defineProperty(Vl.prototype,"ArrayType",{value:BigInt64Array});Object.defineProperty(kl.prototype,"ArrayType",{value:Uint8Array});Object.defineProperty(Hl.prototype,"ArrayType",{value:Uint16Array});Object.defineProperty(Gl.prototype,"ArrayType",{value:Uint32Array});Object.defineProperty(Wl.prototype,"ArrayType",{value:BigUint64Array});var Jn=class extends pt{constructor(t){super(R.Float),this.precision=t}get ArrayType(){switch(this.precision){case we.HALF:return Uint16Array;case we.SINGLE:return Float32Array;case we.DOUBLE:return Float64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}toString(){return`Float${this.precision<<5||16}`}};dg=Symbol.toStringTag;Jn[dg]=(n=>(n.precision=null,n[Symbol.toStringTag]="Float"))(Jn.prototype);var Xl=class extends Jn{constructor(){super(we.HALF)}},Yl=class extends Jn{constructor(){super(we.SINGLE)}},ql=class extends Jn{constructor(){super(we.DOUBLE)}};Object.defineProperty(Xl.prototype,"ArrayType",{value:Uint16Array});Object.defineProperty(Yl.prototype,"ArrayType",{value:Float32Array});Object.defineProperty(ql.prototype,"ArrayType",{value:Float64Array});var or=class extends pt{constructor(){super(R.Binary)}toString(){return"Binary"}};fg=Symbol.toStringTag;or[fg]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Binary"))(or.prototype);var ar=class extends pt{constructor(){super(R.LargeBinary)}toString(){return"LargeBinary"}};pg=Symbol.toStringTag;ar[pg]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeBinary"))(ar.prototype);var cr=class extends pt{constructor(){super(R.Utf8)}toString(){return"Utf8"}};mg=Symbol.toStringTag;cr[mg]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Utf8"))(cr.prototype);var lr=class extends pt{constructor(){super(R.LargeUtf8)}toString(){return"LargeUtf8"}};gg=Symbol.toStringTag;lr[gg]=(n=>(n.ArrayType=Uint8Array,n.OffsetArrayType=BigInt64Array,n[Symbol.toStringTag]="LargeUtf8"))(lr.prototype);var hr=class extends pt{constructor(){super(R.Bool)}toString(){return"Bool"}};_g=Symbol.toStringTag;hr[_g]=(n=>(n.ArrayType=Uint8Array,n[Symbol.toStringTag]="Bool"))(hr.prototype);var ur=class extends pt{constructor(t,e,i=128){super(R.Decimal),this.scale=t,this.precision=e,this.bitWidth=i}toString(){return`Decimal[${this.precision}e${this.scale>0?"+":""}${this.scale}]`}};yg=Symbol.toStringTag;ur[yg]=(n=>(n.scale=null,n.precision=null,n.ArrayType=Uint32Array,n[Symbol.toStringTag]="Decimal"))(ur.prototype);var dr=class extends pt{constructor(t){super(R.Date),this.unit=t}toString(){return`Date${(this.unit+1)*32}<${Ve[this.unit]}>`}get ArrayType(){return this.unit===Ve.DAY?Int32Array:BigInt64Array}};vg=Symbol.toStringTag;dr[vg]=(n=>(n.unit=null,n[Symbol.toStringTag]="Date"))(dr.prototype);var fr=class extends pt{constructor(t,e){super(R.Time),this.unit=t,this.bitWidth=e}toString(){return`Time${this.bitWidth}<${St[this.unit]}>`}get ArrayType(){switch(this.bitWidth){case 32:return Int32Array;case 64:return BigInt64Array}throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)}};xg=Symbol.toStringTag;fr[xg]=(n=>(n.unit=null,n.bitWidth=null,n[Symbol.toStringTag]="Time"))(fr.prototype);var pr=class extends pt{constructor(t,e){super(R.Timestamp),this.unit=t,this.timezone=e}toString(){return`Timestamp<${St[this.unit]}${this.timezone?`, ${this.timezone}`:""}>`}};bg=Symbol.toStringTag;pr[bg]=(n=>(n.unit=null,n.timezone=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Timestamp"))(pr.prototype);var mr=class extends pt{constructor(t){super(R.Interval),this.unit=t}toString(){return`Interval<${en[this.unit]}>`}};Sg=Symbol.toStringTag;mr[Sg]=(n=>(n.unit=null,n.ArrayType=Int32Array,n[Symbol.toStringTag]="Interval"))(mr.prototype);var gr=class extends pt{constructor(t){super(R.Duration),this.unit=t}toString(){return`Duration<${St[this.unit]}>`}};Mg=Symbol.toStringTag;gr[Mg]=(n=>(n.unit=null,n.ArrayType=BigInt64Array,n[Symbol.toStringTag]="Duration"))(gr.prototype);var xi=class extends pt{constructor(t){super(R.List),this.children=[t]}toString(){return`List<${this.valueType}>`}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}};wg=Symbol.toStringTag;xi[wg]=(n=>(n.children=null,n[Symbol.toStringTag]="List"))(xi.prototype);var Ee=class extends pt{constructor(t){super(R.Struct),this.children=t}toString(){return`Struct<{${this.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}};Ag=Symbol.toStringTag;Ee[Ag]=(n=>(n.children=null,n[Symbol.toStringTag]="Struct"))(Ee.prototype);var bi=class extends pt{constructor(t,e,i){super(R.Union),this.mode=t,this.children=i,this.typeIds=e=Int32Array.from(e),this.typeIdToChildIndex=e.reduce((r,s,o)=>(r[s]=o)&&r||r,Object.create(null))}toString(){return`${this[Symbol.toStringTag]}<${this.children.map(t=>`${t.type}`).join(" | ")}>`}};Tg=Symbol.toStringTag;bi[Tg]=(n=>(n.mode=null,n.typeIds=null,n.children=null,n.typeIdToChildIndex=null,n.ArrayType=Int8Array,n[Symbol.toStringTag]="Union"))(bi.prototype);var _r=class extends pt{constructor(t){super(R.FixedSizeBinary),this.byteWidth=t}toString(){return`FixedSizeBinary[${this.byteWidth}]`}};Eg=Symbol.toStringTag;_r[Eg]=(n=>(n.byteWidth=null,n.ArrayType=Uint8Array,n[Symbol.toStringTag]="FixedSizeBinary"))(_r.prototype);var Si=class extends pt{constructor(t,e){super(R.FixedSizeList),this.listSize=t,this.children=[e]}get valueType(){return this.children[0].type}get valueField(){return this.children[0]}get ArrayType(){return this.valueType.ArrayType}toString(){return`FixedSizeList[${this.listSize}]<${this.valueType}>`}};Ig=Symbol.toStringTag;Si[Ig]=(n=>(n.children=null,n.listSize=null,n[Symbol.toStringTag]="FixedSizeList"))(Si.prototype);var Mi=class extends pt{constructor(t,e=!1){var i,r,s;if(super(R.Map),this.children=[t],this.keysSorted=e,t&&(t.name="entries",!((i=t?.type)===null||i===void 0)&&i.children)){let o=(r=t?.type)===null||r===void 0?void 0:r.children[0];o&&(o.name="key");let a=(s=t?.type)===null||s===void 0?void 0:s.children[1];a&&(a.name="value")}}get keyType(){return this.children[0].type.children[0].type}get valueType(){return this.children[0].type.children[1].type}get childType(){return this.children[0].type}toString(){return`Map<{${this.children[0].type.children.map(t=>`${t.name}:${t.type}`).join(", ")}}>`}};Rg=Symbol.toStringTag;Mi[Rg]=(n=>(n.children=null,n.keysSorted=null,n[Symbol.toStringTag]="Map_"))(Mi.prototype);var ow=(n=>()=>++n)(-1),Vn=class extends pt{constructor(t,e,i,r){super(R.Dictionary),this.indices=e,this.dictionary=t,this.isOrdered=r||!1,this.id=i==null?ow():he(i)}get children(){return this.dictionary.children}get valueType(){return this.dictionary}get ArrayType(){return this.dictionary.ArrayType}toString(){return`Dictionary<${this.indices}, ${this.dictionary}>`}};Cg=Symbol.toStringTag;Vn[Cg]=(n=>(n.id=null,n.indices=null,n.isOrdered=null,n.dictionary=null,n[Symbol.toStringTag]="Dictionary"))(Vn.prototype);function kn(n){let t=n;switch(n.typeId){case R.Decimal:return n.bitWidth/32;case R.Interval:return 1+t.unit;case R.FixedSizeList:return t.listSize;case R.FixedSizeBinary:return t.byteWidth;default:return 1}}var Et=class{visitMany(t,...e){return t.map((i,r)=>this.visit(i,...e.map(s=>s[r])))}visit(...t){return this.getVisitFn(t[0],!1).apply(this,t)}getVisitFn(t,e=!0){return aw(this,t,e)}getVisitFnByTypeId(t,e=!0){return Io(this,t,e)}visitNull(t,...e){return null}visitBool(t,...e){return null}visitInt(t,...e){return null}visitFloat(t,...e){return null}visitUtf8(t,...e){return null}visitLargeUtf8(t,...e){return null}visitBinary(t,...e){return null}visitLargeBinary(t,...e){return null}visitFixedSizeBinary(t,...e){return null}visitDate(t,...e){return null}visitTimestamp(t,...e){return null}visitTime(t,...e){return null}visitDecimal(t,...e){return null}visitList(t,...e){return null}visitStruct(t,...e){return null}visitUnion(t,...e){return null}visitDictionary(t,...e){return null}visitInterval(t,...e){return null}visitDuration(t,...e){return null}visitFixedSizeList(t,...e){return null}visitMap(t,...e){return null}};function aw(n,t,e=!0){return typeof t=="number"?Io(n,t,e):typeof t=="string"&&t in R?Io(n,R[t],e):t&&t instanceof pt?Io(n,Dg(t),e):t?.type&&t.type instanceof pt?Io(n,Dg(t.type),e):Io(n,R.NONE,e)}function Io(n,t,e=!0){let i=null;switch(t){case R.Null:i=n.visitNull;break;case R.Bool:i=n.visitBool;break;case R.Int:i=n.visitInt;break;case R.Int8:i=n.visitInt8||n.visitInt;break;case R.Int16:i=n.visitInt16||n.visitInt;break;case R.Int32:i=n.visitInt32||n.visitInt;break;case R.Int64:i=n.visitInt64||n.visitInt;break;case R.Uint8:i=n.visitUint8||n.visitInt;break;case R.Uint16:i=n.visitUint16||n.visitInt;break;case R.Uint32:i=n.visitUint32||n.visitInt;break;case R.Uint64:i=n.visitUint64||n.visitInt;break;case R.Float:i=n.visitFloat;break;case R.Float16:i=n.visitFloat16||n.visitFloat;break;case R.Float32:i=n.visitFloat32||n.visitFloat;break;case R.Float64:i=n.visitFloat64||n.visitFloat;break;case R.Utf8:i=n.visitUtf8;break;case R.LargeUtf8:i=n.visitLargeUtf8;break;case R.Binary:i=n.visitBinary;break;case R.LargeBinary:i=n.visitLargeBinary;break;case R.FixedSizeBinary:i=n.visitFixedSizeBinary;break;case R.Date:i=n.visitDate;break;case R.DateDay:i=n.visitDateDay||n.visitDate;break;case R.DateMillisecond:i=n.visitDateMillisecond||n.visitDate;break;case R.Timestamp:i=n.visitTimestamp;break;case R.TimestampSecond:i=n.visitTimestampSecond||n.visitTimestamp;break;case R.TimestampMillisecond:i=n.visitTimestampMillisecond||n.visitTimestamp;break;case R.TimestampMicrosecond:i=n.visitTimestampMicrosecond||n.visitTimestamp;break;case R.TimestampNanosecond:i=n.visitTimestampNanosecond||n.visitTimestamp;break;case R.Time:i=n.visitTime;break;case R.TimeSecond:i=n.visitTimeSecond||n.visitTime;break;case R.TimeMillisecond:i=n.visitTimeMillisecond||n.visitTime;break;case R.TimeMicrosecond:i=n.visitTimeMicrosecond||n.visitTime;break;case R.TimeNanosecond:i=n.visitTimeNanosecond||n.visitTime;break;case R.Decimal:i=n.visitDecimal;break;case R.List:i=n.visitList;break;case R.Struct:i=n.visitStruct;break;case R.Union:i=n.visitUnion;break;case R.DenseUnion:i=n.visitDenseUnion||n.visitUnion;break;case R.SparseUnion:i=n.visitSparseUnion||n.visitUnion;break;case R.Dictionary:i=n.visitDictionary;break;case R.Interval:i=n.visitInterval;break;case R.IntervalDayTime:i=n.visitIntervalDayTime||n.visitInterval;break;case R.IntervalYearMonth:i=n.visitIntervalYearMonth||n.visitInterval;break;case R.Duration:i=n.visitDuration;break;case R.DurationSecond:i=n.visitDurationSecond||n.visitDuration;break;case R.DurationMillisecond:i=n.visitDurationMillisecond||n.visitDuration;break;case R.DurationMicrosecond:i=n.visitDurationMicrosecond||n.visitDuration;break;case R.DurationNanosecond:i=n.visitDurationNanosecond||n.visitDuration;break;case R.FixedSizeList:i=n.visitFixedSizeList;break;case R.Map:i=n.visitMap;break}if(typeof i=="function")return i;if(!e)return()=>null;throw new Error(`Unrecognized type '${R[t]}'`)}function Dg(n){switch(n.typeId){case R.Null:return R.Null;case R.Int:{let{bitWidth:t,isSigned:e}=n;switch(t){case 8:return e?R.Int8:R.Uint8;case 16:return e?R.Int16:R.Uint16;case 32:return e?R.Int32:R.Uint32;case 64:return e?R.Int64:R.Uint64}return R.Int}case R.Float:switch(n.precision){case we.HALF:return R.Float16;case we.SINGLE:return R.Float32;case we.DOUBLE:return R.Float64}return R.Float;case R.Binary:return R.Binary;case R.LargeBinary:return R.LargeBinary;case R.Utf8:return R.Utf8;case R.LargeUtf8:return R.LargeUtf8;case R.Bool:return R.Bool;case R.Decimal:return R.Decimal;case R.Time:switch(n.unit){case St.SECOND:return R.TimeSecond;case St.MILLISECOND:return R.TimeMillisecond;case St.MICROSECOND:return R.TimeMicrosecond;case St.NANOSECOND:return R.TimeNanosecond}return R.Time;case R.Timestamp:switch(n.unit){case St.SECOND:return R.TimestampSecond;case St.MILLISECOND:return R.TimestampMillisecond;case St.MICROSECOND:return R.TimestampMicrosecond;case St.NANOSECOND:return R.TimestampNanosecond}return R.Timestamp;case R.Date:switch(n.unit){case Ve.DAY:return R.DateDay;case Ve.MILLISECOND:return R.DateMillisecond}return R.Date;case R.Interval:switch(n.unit){case en.DAY_TIME:return R.IntervalDayTime;case en.YEAR_MONTH:return R.IntervalYearMonth}return R.Interval;case R.Duration:switch(n.unit){case St.SECOND:return R.DurationSecond;case St.MILLISECOND:return R.DurationMillisecond;case St.MICROSECOND:return R.DurationMicrosecond;case St.NANOSECOND:return R.DurationNanosecond}return R.Duration;case R.Map:return R.Map;case R.List:return R.List;case R.Struct:return R.Struct;case R.Union:switch(n.mode){case Te.Dense:return R.DenseUnion;case Te.Sparse:return R.SparseUnion}return R.Union;case R.FixedSizeBinary:return R.FixedSizeBinary;case R.FixedSizeList:return R.FixedSizeList;case R.Dictionary:return R.Dictionary}throw new Error(`Unrecognized type '${R[n.typeId]}'`)}Et.prototype.visitInt8=null;Et.prototype.visitInt16=null;Et.prototype.visitInt32=null;Et.prototype.visitInt64=null;Et.prototype.visitUint8=null;Et.prototype.visitUint16=null;Et.prototype.visitUint32=null;Et.prototype.visitUint64=null;Et.prototype.visitFloat16=null;Et.prototype.visitFloat32=null;Et.prototype.visitFloat64=null;Et.prototype.visitDateDay=null;Et.prototype.visitDateMillisecond=null;Et.prototype.visitTimestampSecond=null;Et.prototype.visitTimestampMillisecond=null;Et.prototype.visitTimestampMicrosecond=null;Et.prototype.visitTimestampNanosecond=null;Et.prototype.visitTimeSecond=null;Et.prototype.visitTimeMillisecond=null;Et.prototype.visitTimeMicrosecond=null;Et.prototype.visitTimeNanosecond=null;Et.prototype.visitDenseUnion=null;Et.prototype.visitSparseUnion=null;Et.prototype.visitIntervalDayTime=null;Et.prototype.visitIntervalYearMonth=null;Et.prototype.visitDuration=null;Et.prototype.visitDurationSecond=null;Et.prototype.visitDurationMillisecond=null;Et.prototype.visitDurationMicrosecond=null;Et.prototype.visitDurationNanosecond=null;var Cf={};ns(Cf,{float64ToUint16:()=>Ca,uint16ToFloat64:()=>jl});var Pg=new Float64Array(1),Ro=new Uint32Array(Pg.buffer);function jl(n){let t=(n&31744)>>10,e=(n&1023)/1024,i=Math.pow(-1,(n&32768)>>15);switch(t){case 31:return i*(e?Number.NaN:1/0);case 0:return i*(e?6103515625e-14*e:0)}return i*Math.pow(2,t-15)*(1+e)}function Ca(n){if(n!==n)return 32256;Pg[0]=n;let t=(Ro[1]&2147483648)>>16&65535,e=Ro[1]&2146435072,i=0;return e>=1089470464?Ro[0]>0?e=31744:(e=(e&2080374784)>>16,i=(Ro[1]&1048575)>>10):e<=1056964608?(i=1048576+(Ro[1]&1048575),i=1048576+(i<<(e>>20)-998)>>21,e=0):(e=e-1056964608>>10,i=(Ro[1]&1048575)+512>>10),t|e|i&65535}var Pt=class extends Et{};function Vt(n){return(t,e,i)=>{if(t.setValid(e,i!=null))return n(t,e,i)}}var cw=(n,t,e)=>{n[t]=Math.floor(e/864e5)},Lg=(n,t,e,i)=>{if(e+1<t.length){let r=he(t[e]),s=he(t[e+1]);n.set(i.subarray(0,s-r),r)}},lw=({offset:n,values:t},e,i)=>{let r=n+e;i?t[r>>3]|=1<<r%8:t[r>>3]&=~(1<<r%8)},yr=({values:n},t,e)=>{n[t]=e},Df=({values:n},t,e)=>{n[t]=e},Ug=({values:n},t,e)=>{n[t]=Ca(e)},hw=(n,t,e)=>{switch(n.type.precision){case we.HALF:return Ug(n,t,e);case we.SINGLE:case we.DOUBLE:return Df(n,t,e)}},Zl=({values:n},t,e)=>{cw(n,t,e.valueOf())},$l=({values:n},t,e)=>{n[t]=BigInt(e)},Pf=({stride:n,values:t},e,i)=>{t.set(i.subarray(0,n),n*e)},Ng=({values:n,valueOffsets:t},e,i)=>Lg(n,t,e,i),Bg=({values:n,valueOffsets:t},e,i)=>Lg(n,t,e,Ui(i)),Lf=(n,t,e)=>{n.type.unit===Ve.DAY?Zl(n,t,e):$l(n,t,e)},Jl=({values:n},t,e)=>{n[t]=BigInt(e/1e3)},Kl=({values:n},t,e)=>{n[t]=BigInt(e)},Ql=({values:n},t,e)=>{n[t]=BigInt(e*1e3)},th=({values:n},t,e)=>{n[t]=BigInt(e*1e6)},Uf=(n,t,e)=>{switch(n.type.unit){case St.SECOND:return Jl(n,t,e);case St.MILLISECOND:return Kl(n,t,e);case St.MICROSECOND:return Ql(n,t,e);case St.NANOSECOND:return th(n,t,e)}},eh=({values:n},t,e)=>{n[t]=e},nh=({values:n},t,e)=>{n[t]=e},ih=({values:n},t,e)=>{n[t]=e},rh=({values:n},t,e)=>{n[t]=e},Nf=(n,t,e)=>{switch(n.type.unit){case St.SECOND:return eh(n,t,e);case St.MILLISECOND:return nh(n,t,e);case St.MICROSECOND:return ih(n,t,e);case St.NANOSECOND:return rh(n,t,e)}},Bf=({values:n,stride:t},e,i)=>{n.set(i.subarray(0,t),t*e)},uw=(n,t,e)=>{let i=n.children[0],r=n.valueOffsets,s=on.getVisitFn(i);if(Array.isArray(e))for(let o=-1,a=r[t],c=r[t+1];a<c;)s(i,a++,e[++o]);else for(let o=-1,a=r[t],c=r[t+1];a<c;)s(i,a++,e.get(++o))},dw=(n,t,e)=>{let i=n.children[0],{valueOffsets:r}=n,s=on.getVisitFn(i),{[t]:o,[t+1]:a}=r,c=e instanceof Map?e.entries():Object.entries(e);for(let l of c)if(s(i,o,l),++o>=a)break},fw=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[s]),pw=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(s)),mw=(n,t)=>(e,i,r,s)=>i&&e(i,n,t.get(r.name)),gw=(n,t)=>(e,i,r,s)=>i&&e(i,n,t[r.name]),_w=(n,t,e)=>{let i=n.type.children.map(s=>on.getVisitFn(s.type)),r=e instanceof Map?mw(t,e):e instanceof oe?pw(t,e):Array.isArray(e)?fw(t,e):gw(t,e);n.type.children.forEach((s,o)=>r(i[o],n.children[o],s,o))},yw=(n,t,e)=>{n.type.mode===Te.Dense?Og(n,t,e):Fg(n,t,e)},Og=(n,t,e)=>{let i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];on.visit(r,n.valueOffsets[t],e)},Fg=(n,t,e)=>{let i=n.type.typeIdToChildIndex[n.typeIds[t]],r=n.children[i];on.visit(r,t,e)},vw=(n,t,e)=>{var i;(i=n.dictionary)===null||i===void 0||i.set(n.values[t],e)},Of=(n,t,e)=>{n.type.unit===en.DAY_TIME?sh(n,t,e):oh(n,t,e)},sh=({values:n},t,e)=>{n.set(e.subarray(0,2),2*t)},oh=({values:n},t,e)=>{n[t]=e[0]*12+e[1]%12},ah=({values:n},t,e)=>{n[t]=e},ch=({values:n},t,e)=>{n[t]=e},lh=({values:n},t,e)=>{n[t]=e},hh=({values:n},t,e)=>{n[t]=e},Ff=(n,t,e)=>{switch(n.type.unit){case St.SECOND:return ah(n,t,e);case St.MILLISECOND:return ch(n,t,e);case St.MICROSECOND:return lh(n,t,e);case St.NANOSECOND:return hh(n,t,e)}},xw=(n,t,e)=>{let{stride:i}=n,r=n.children[0],s=on.getVisitFn(r);if(Array.isArray(e))for(let o=-1,a=t*i;++o<i;)s(r,a+o,e[o]);else for(let o=-1,a=t*i;++o<i;)s(r,a+o,e.get(o))};Pt.prototype.visitBool=Vt(lw);Pt.prototype.visitInt=Vt(yr);Pt.prototype.visitInt8=Vt(yr);Pt.prototype.visitInt16=Vt(yr);Pt.prototype.visitInt32=Vt(yr);Pt.prototype.visitInt64=Vt(yr);Pt.prototype.visitUint8=Vt(yr);Pt.prototype.visitUint16=Vt(yr);Pt.prototype.visitUint32=Vt(yr);Pt.prototype.visitUint64=Vt(yr);Pt.prototype.visitFloat=Vt(hw);Pt.prototype.visitFloat16=Vt(Ug);Pt.prototype.visitFloat32=Vt(Df);Pt.prototype.visitFloat64=Vt(Df);Pt.prototype.visitUtf8=Vt(Bg);Pt.prototype.visitLargeUtf8=Vt(Bg);Pt.prototype.visitBinary=Vt(Ng);Pt.prototype.visitLargeBinary=Vt(Ng);Pt.prototype.visitFixedSizeBinary=Vt(Pf);Pt.prototype.visitDate=Vt(Lf);Pt.prototype.visitDateDay=Vt(Zl);Pt.prototype.visitDateMillisecond=Vt($l);Pt.prototype.visitTimestamp=Vt(Uf);Pt.prototype.visitTimestampSecond=Vt(Jl);Pt.prototype.visitTimestampMillisecond=Vt(Kl);Pt.prototype.visitTimestampMicrosecond=Vt(Ql);Pt.prototype.visitTimestampNanosecond=Vt(th);Pt.prototype.visitTime=Vt(Nf);Pt.prototype.visitTimeSecond=Vt(eh);Pt.prototype.visitTimeMillisecond=Vt(nh);Pt.prototype.visitTimeMicrosecond=Vt(ih);Pt.prototype.visitTimeNanosecond=Vt(rh);Pt.prototype.visitDecimal=Vt(Bf);Pt.prototype.visitList=Vt(uw);Pt.prototype.visitStruct=Vt(_w);Pt.prototype.visitUnion=Vt(yw);Pt.prototype.visitDenseUnion=Vt(Og);Pt.prototype.visitSparseUnion=Vt(Fg);Pt.prototype.visitDictionary=Vt(vw);Pt.prototype.visitInterval=Vt(Of);Pt.prototype.visitIntervalDayTime=Vt(sh);Pt.prototype.visitIntervalYearMonth=Vt(oh);Pt.prototype.visitDuration=Vt(Ff);Pt.prototype.visitDurationSecond=Vt(ah);Pt.prototype.visitDurationMillisecond=Vt(ch);Pt.prototype.visitDurationMicrosecond=Vt(lh);Pt.prototype.visitDurationNanosecond=Vt(hh);Pt.prototype.visitFixedSizeList=Vt(xw);Pt.prototype.visitMap=Vt(dw);var on=new Pt;var wi=Symbol.for("parent"),Co=Symbol.for("rowIndex"),$r=class{constructor(t,e){return this[wi]=t,this[Co]=e,new Proxy(this,new Vf)}toArray(){return Object.values(this.toJSON())}toJSON(){let t=this[Co],e=this[wi],i=e.type.children,r={};for(let s=-1,o=i.length;++s<o;)r[i[s].name]=We.visit(e.children[s],t);return r}toString(){return`{${[...this].map(([t,e])=>`${yi(t)}: ${yi(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}[Symbol.iterator](){return new zf(this[wi],this[Co])}},zf=class{constructor(t,e){this.childIndex=0,this.children=t.children,this.rowIndex=e,this.childFields=t.type.children,this.numChildren=this.childFields.length}[Symbol.iterator](){return this}next(){let t=this.childIndex;return t<this.numChildren?(this.childIndex=t+1,{done:!1,value:[this.childFields[t].name,We.visit(this.children[t],this.rowIndex)]}):{done:!0,value:null}}};Object.defineProperties($r.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[wi]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Co]:{writable:!0,enumerable:!1,configurable:!1,value:-1}});var Vf=class{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[wi].type.children.map(e=>e.name)}has(t,e){return t[wi].type.children.findIndex(i=>i.name===e)!==-1}getOwnPropertyDescriptor(t,e){if(t[wi].type.children.findIndex(i=>i.name===e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];let i=t[wi].type.children.findIndex(r=>r.name===e);if(i!==-1){let r=We.visit(t[wi].children[i],t[Co]);return Reflect.set(t,e,r),r}}set(t,e,i){let r=t[wi].type.children.findIndex(s=>s.name===e);return r!==-1?(on.visit(t[wi].children[r],t[Co],i),Reflect.set(t,e,i)):Reflect.has(t,e)||typeof e=="symbol"?Reflect.set(t,e,i):!1}};var It=class extends Et{};function Ot(n){return(t,e)=>t.getValid(e)?n(t,e):null}var bw=(n,t)=>864e5*n[t],Sw=(n,t)=>null,zg=(n,t,e)=>{if(e+1>=t.length)return null;let i=he(t[e]),r=he(t[e+1]);return n.subarray(i,r)},Mw=({offset:n,values:t},e)=>{let i=n+e;return(t[i>>3]&1<<i%8)!==0},Vg=({values:n},t)=>bw(n,t),kg=({values:n},t)=>he(n[t]),Jr=({stride:n,values:t},e)=>t[n*e],ww=({stride:n,values:t},e)=>jl(t[n*e]),Hg=({values:n},t)=>n[t],Aw=({stride:n,values:t},e)=>t.subarray(n*e,n*(e+1)),Gg=({values:n,valueOffsets:t},e)=>zg(n,t,e),Wg=({values:n,valueOffsets:t},e)=>{let i=zg(n,t,e);return i!==null?fa(i):null},Tw=({values:n},t)=>n[t],Ew=({type:n,values:t},e)=>n.precision!==we.HALF?t[e]:jl(t[e]),Iw=(n,t)=>n.type.unit===Ve.DAY?Vg(n,t):kg(n,t),Xg=({values:n},t)=>1e3*he(n[t]),Yg=({values:n},t)=>he(n[t]),qg=({values:n},t)=>Tf(n[t],BigInt(1e3)),jg=({values:n},t)=>Tf(n[t],BigInt(1e6)),Rw=(n,t)=>{switch(n.type.unit){case St.SECOND:return Xg(n,t);case St.MILLISECOND:return Yg(n,t);case St.MICROSECOND:return qg(n,t);case St.NANOSECOND:return jg(n,t)}},Zg=({values:n},t)=>n[t],$g=({values:n},t)=>n[t],Jg=({values:n},t)=>n[t],Kg=({values:n},t)=>n[t],Cw=(n,t)=>{switch(n.type.unit){case St.SECOND:return Zg(n,t);case St.MILLISECOND:return $g(n,t);case St.MICROSECOND:return Jg(n,t);case St.NANOSECOND:return Kg(n,t)}},Dw=({values:n,stride:t},e)=>Ra.decimal(n.subarray(t*e,t*(e+1))),Pw=(n,t)=>{let{valueOffsets:e,stride:i,children:r}=n,{[t*i]:s,[t*i+1]:o}=e,c=r[0].slice(s,o-s);return new oe([c])},Lw=(n,t)=>{let{valueOffsets:e,children:i}=n,{[t]:r,[t+1]:s}=e,o=i[0];return new Vi(o.slice(r,s-r))},Uw=(n,t)=>new $r(n,t),Nw=(n,t)=>n.type.mode===Te.Dense?Qg(n,t):t_(n,t),Qg=(n,t)=>{let e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return We.visit(i,n.valueOffsets[t])},t_=(n,t)=>{let e=n.type.typeIdToChildIndex[n.typeIds[t]],i=n.children[e];return We.visit(i,t)},Bw=(n,t)=>{var e;return(e=n.dictionary)===null||e===void 0?void 0:e.get(n.values[t])},Ow=(n,t)=>n.type.unit===en.DAY_TIME?e_(n,t):n_(n,t),e_=({values:n},t)=>n.subarray(2*t,2*(t+1)),n_=({values:n},t)=>{let e=n[t],i=new Int32Array(2);return i[0]=Math.trunc(e/12),i[1]=Math.trunc(e%12),i},i_=({values:n},t)=>n[t],r_=({values:n},t)=>n[t],s_=({values:n},t)=>n[t],o_=({values:n},t)=>n[t],Fw=(n,t)=>{switch(n.type.unit){case St.SECOND:return i_(n,t);case St.MILLISECOND:return r_(n,t);case St.MICROSECOND:return s_(n,t);case St.NANOSECOND:return o_(n,t)}},zw=(n,t)=>{let{stride:e,children:i}=n,s=i[0].slice(t*e,e);return new oe([s])};It.prototype.visitNull=Ot(Sw);It.prototype.visitBool=Ot(Mw);It.prototype.visitInt=Ot(Tw);It.prototype.visitInt8=Ot(Jr);It.prototype.visitInt16=Ot(Jr);It.prototype.visitInt32=Ot(Jr);It.prototype.visitInt64=Ot(Hg);It.prototype.visitUint8=Ot(Jr);It.prototype.visitUint16=Ot(Jr);It.prototype.visitUint32=Ot(Jr);It.prototype.visitUint64=Ot(Hg);It.prototype.visitFloat=Ot(Ew);It.prototype.visitFloat16=Ot(ww);It.prototype.visitFloat32=Ot(Jr);It.prototype.visitFloat64=Ot(Jr);It.prototype.visitUtf8=Ot(Wg);It.prototype.visitLargeUtf8=Ot(Wg);It.prototype.visitBinary=Ot(Gg);It.prototype.visitLargeBinary=Ot(Gg);It.prototype.visitFixedSizeBinary=Ot(Aw);It.prototype.visitDate=Ot(Iw);It.prototype.visitDateDay=Ot(Vg);It.prototype.visitDateMillisecond=Ot(kg);It.prototype.visitTimestamp=Ot(Rw);It.prototype.visitTimestampSecond=Ot(Xg);It.prototype.visitTimestampMillisecond=Ot(Yg);It.prototype.visitTimestampMicrosecond=Ot(qg);It.prototype.visitTimestampNanosecond=Ot(jg);It.prototype.visitTime=Ot(Cw);It.prototype.visitTimeSecond=Ot(Zg);It.prototype.visitTimeMillisecond=Ot($g);It.prototype.visitTimeMicrosecond=Ot(Jg);It.prototype.visitTimeNanosecond=Ot(Kg);It.prototype.visitDecimal=Ot(Dw);It.prototype.visitList=Ot(Pw);It.prototype.visitStruct=Ot(Uw);It.prototype.visitUnion=Ot(Nw);It.prototype.visitDenseUnion=Ot(Qg);It.prototype.visitSparseUnion=Ot(t_);It.prototype.visitDictionary=Ot(Bw);It.prototype.visitInterval=Ot(Ow);It.prototype.visitIntervalDayTime=Ot(e_);It.prototype.visitIntervalYearMonth=Ot(n_);It.prototype.visitDuration=Ot(Fw);It.prototype.visitDurationSecond=Ot(i_);It.prototype.visitDurationMillisecond=Ot(r_);It.prototype.visitDurationMicrosecond=Ot(s_);It.prototype.visitDurationNanosecond=Ot(o_);It.prototype.visitFixedSizeList=Ot(zw);It.prototype.visitMap=Ot(Lw);var We=new It;var Kr=Symbol.for("keys"),Po=Symbol.for("vals"),Do=Symbol.for("kKeysAsStrings"),kf=Symbol.for("_kKeysAsStrings"),Vi=class{constructor(t){return this[Kr]=new oe([t.children[0]]).memoize(),this[Po]=t.children[1],new Proxy(this,new Gf)}get[Do](){return this[kf]||(this[kf]=Array.from(this[Kr].toArray(),String))}[Symbol.iterator](){return new Hf(this[Kr],this[Po])}get size(){return this[Kr].length}toArray(){return Object.values(this.toJSON())}toJSON(){let t=this[Kr],e=this[Po],i={};for(let r=-1,s=t.length;++r<s;)i[t.get(r)]=We.visit(e,r);return i}toString(){return`{${[...this].map(([t,e])=>`${yi(t)}: ${yi(e)}`).join(", ")}}`}[Symbol.for("nodejs.util.inspect.custom")](){return this.toString()}},Hf=class{constructor(t,e){this.keys=t,this.vals=e,this.keyIndex=0,this.numKeys=t.length}[Symbol.iterator](){return this}next(){let t=this.keyIndex;return t===this.numKeys?{done:!0,value:null}:(this.keyIndex++,{done:!1,value:[this.keys.get(t),We.visit(this.vals,t)]})}},Gf=class{isExtensible(){return!1}deleteProperty(){return!1}preventExtensions(){return!0}ownKeys(t){return t[Do]}has(t,e){return t[Do].includes(e)}getOwnPropertyDescriptor(t,e){if(t[Do].indexOf(e)!==-1)return{writable:!0,enumerable:!0,configurable:!0}}get(t,e){if(Reflect.has(t,e))return t[e];let i=t[Do].indexOf(e);if(i!==-1){let r=We.visit(Reflect.get(t,Po),i);return Reflect.set(t,e,r),r}}set(t,e,i){let r=t[Do].indexOf(e);return r!==-1?(on.visit(Reflect.get(t,Po),r,i),Reflect.set(t,e,i)):Reflect.has(t,e)?Reflect.set(t,e,i):!1}};Object.defineProperties(Vi.prototype,{[Symbol.toStringTag]:{enumerable:!1,configurable:!1,value:"Row"},[Kr]:{writable:!0,enumerable:!1,configurable:!1,value:null},[Po]:{writable:!0,enumerable:!1,configurable:!1,value:null},[kf]:{writable:!0,enumerable:!1,configurable:!1,value:null}});var a_;function Da(n,t,e,i){let{length:r=0}=n,s=typeof t!="number"?0:t,o=typeof e!="number"?r:e;return s<0&&(s=(s%r+r)%r),o<0&&(o=(o%r+r)%r),o<s&&(a_=s,s=o,o=a_),o>r&&(o=r),i?i(n,s,o):[s,o]}var As=(n,t)=>n<0?t+n:n,c_=n=>n!==n;function Qr(n){if(typeof n!=="object"||n===null)return c_(n)?c_:e=>e===n;if(n instanceof Date){let e=n.valueOf();return i=>i instanceof Date?i.valueOf()===e:!1}return ArrayBuffer.isView(n)?e=>e?bf(n,e):!1:n instanceof Map?kw(n):Array.isArray(n)?Vw(n):n instanceof oe?Hw(n):Gw(n,!0)}function Vw(n){let t=[];for(let e=-1,i=n.length;++e<i;)t[e]=Qr(n[e]);return uh(t)}function kw(n){let t=-1,e=[];for(let i of n.values())e[++t]=Qr(i);return uh(e)}function Hw(n){let t=[];for(let e=-1,i=n.length;++e<i;)t[e]=Qr(n.get(e));return uh(t)}function Gw(n,t=!1){let e=Object.keys(n);if(!t&&e.length===0)return()=>!1;let i=[];for(let r=-1,s=e.length;++r<s;)i[r]=Qr(n[e[r]]);return uh(i,e)}function uh(n,t){return e=>{if(!e||typeof e!="object")return!1;switch(e.constructor){case Array:return Ww(n,e);case Map:return l_(n,e,e.keys());case Vi:case $r:case Object:case void 0:return l_(n,e,t||Object.keys(e))}return e instanceof oe?Xw(n,e):!1}}function Ww(n,t){let e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t[i]))return!1;return!0}function Xw(n,t){let e=n.length;if(t.length!==e)return!1;for(let i=-1;++i<e;)if(!n[i](t.get(i)))return!1;return!0}function l_(n,t,e){let i=e[Symbol.iterator](),r=t instanceof Map?t.keys():Object.keys(t)[Symbol.iterator](),s=t instanceof Map?t.values():Object.values(t)[Symbol.iterator](),o=0,a=n.length,c=s.next(),l=i.next(),h=r.next();for(;o<a&&!l.done&&!h.done&&!c.done&&!(l.value!==h.value||!n[o](c.value));++o,l=i.next(),h=r.next(),c=s.next());return o===a&&l.done&&h.done&&c.done?!0:(i.return&&i.return(),r.return&&r.return(),s.return&&s.return(),!1)}var Xf={};ns(Xf,{BitIterator:()=>Ts,getBit:()=>h_,getBool:()=>fh,packBools:()=>Is,popcnt_array:()=>u_,popcnt_bit_range:()=>Pa,popcnt_uint32:()=>dh,setBool:()=>Yw,truncateBitmap:()=>Es});function fh(n,t,e,i){return(e&1<<i)!==0}function h_(n,t,e,i){return(e&1<<i)>>i}function Yw(n,t,e){return e?!!(n[t>>3]|=1<<t%8)||!0:!(n[t>>3]&=~(1<<t%8))&&!1}function Es(n,t,e){let i=e.byteLength+7&-8;if(n>0||e.byteLength<i){let r=new Uint8Array(i);return r.set(n%8===0?e.subarray(n>>3):Is(new Ts(e,n,t,null,fh)).subarray(0,i)),r}return e}function Is(n){let t=[],e=0,i=0,r=0;for(let o of n)o&&(r|=1<<i),++i===8&&(t[e++]=r,r=i=0);(e===0||i>0)&&(t[e++]=r);let s=new Uint8Array(t.length+7&-8);return s.set(t),s}var Ts=class{constructor(t,e,i,r,s){this.bytes=t,this.length=i,this.context=r,this.get=s,this.bit=e%8,this.byteIndex=e>>3,this.byte=t[this.byteIndex++],this.index=0}next(){return this.index<this.length?(this.bit===8&&(this.bit=0,this.byte=this.bytes[this.byteIndex++]),{value:this.get(this.context,this.index++,this.byte,this.bit++)}):{done:!0,value:null}}[Symbol.iterator](){return this}};function Pa(n,t,e){if(e-t<=0)return 0;if(e-t<8){let s=0;for(let o of new Ts(n,t,e-t,n,h_))s+=o;return s}let i=e>>3<<3,r=t+(t%8===0?0:8-t%8);return Pa(n,t,r)+Pa(n,i,e)+u_(n,r>>3,i-r>>3)}function u_(n,t,e){let i=0,r=Math.trunc(t),s=new DataView(n.buffer,n.byteOffset,n.byteLength),o=e===void 0?n.byteLength:r+e;for(;o-r>=4;)i+=dh(s.getUint32(r)),r+=4;for(;o-r>=2;)i+=dh(s.getUint16(r)),r+=2;for(;o-r>=1;)i+=dh(s.getUint8(r)),r+=1;return i}function dh(n){let t=Math.trunc(n);return t=t-(t>>>1&1431655765),t=(t&858993459)+(t>>>2&858993459),(t+(t>>>4)&252645135)*16843009>>>24}var qw=-1,pe=class n{get typeId(){return this.type.typeId}get ArrayType(){return this.type.ArrayType}get buffers(){return[this.valueOffsets,this.values,this.nullBitmap,this.typeIds]}get nullable(){if(this._nullCount!==0){let{type:t}=this;return pt.isSparseUnion(t)?this.children.some(e=>e.nullable):pt.isDenseUnion(t)?this.children.some(e=>e.nullable):this.nullBitmap&&this.nullBitmap.byteLength>0}return!0}get byteLength(){let t=0,{valueOffsets:e,values:i,nullBitmap:r,typeIds:s}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),this.children.reduce((o,a)=>o+a.byteLength,t)}get nullCount(){if(pt.isUnion(this.type))return this.children.reduce((i,r)=>i+r.nullCount,0);let t=this._nullCount,e;return t<=qw&&(e=this.nullBitmap)&&(this._nullCount=t=e.length===0?0:this.length-Pa(e,this.offset,this.offset+this.length)),t}constructor(t,e,i,r,s,o=[],a){this.type=t,this.children=o,this.dictionary=a,this.offset=Math.floor(Math.max(e||0,0)),this.length=Math.floor(Math.max(i||0,0)),this._nullCount=Math.floor(Math.max(r||0,-1));let c;s instanceof n?(this.stride=s.stride,this.values=s.values,this.typeIds=s.typeIds,this.nullBitmap=s.nullBitmap,this.valueOffsets=s.valueOffsets):(this.stride=kn(t),s&&((c=s[0])&&(this.valueOffsets=c),(c=s[1])&&(this.values=c),(c=s[2])&&(this.nullBitmap=c),(c=s[3])&&(this.typeIds=c)))}getValid(t){let{type:e}=this;if(pt.isUnion(e)){let i=e,r=this.children[i.typeIdToChildIndex[this.typeIds[t]]],s=i.mode===Te.Dense?this.valueOffsets[t]:t;return r.getValid(s)}if(this.nullable&&this.nullCount>0){let i=this.offset+t;return(this.nullBitmap[i>>3]&1<<i%8)!==0}return!0}setValid(t,e){let i,{type:r}=this;if(pt.isUnion(r)){let s=r,o=this.children[s.typeIdToChildIndex[this.typeIds[t]]],a=s.mode===Te.Dense?this.valueOffsets[t]:t;i=o.getValid(a),o.setValid(a,e)}else{let{nullBitmap:s}=this,{offset:o,length:a}=this,c=o+t,l=1<<c%8,h=c>>3;(!s||s.byteLength<=h)&&(s=new Uint8Array((o+a+63&-64)>>3).fill(255),this.nullCount>0?(s.set(Es(o,a,this.nullBitmap),0),Object.assign(this,{nullBitmap:s})):Object.assign(this,{nullBitmap:s,_nullCount:0}));let u=s[h];i=(u&l)!==0,s[h]=e?u|l:u&~l}return i!==!!e&&(this._nullCount=this.nullCount+(e?-1:1)),e}clone(t=this.type,e=this.offset,i=this.length,r=this._nullCount,s=this,o=this.children){return new n(t,e,i,r,s,o,this.dictionary)}slice(t,e){let{stride:i,typeId:r,children:s}=this,o=+(this._nullCount===0)-1,a=r===16?i:1,c=this._sliceBuffers(t,e,i,r);return this.clone(this.type,this.offset+t,e,o,c,s.length===0||this.valueOffsets?s:this._sliceChildren(s,a*t,a*e))}_changeLengthAndBackfillNullBitmap(t){if(this.typeId===R.Null)return this.clone(this.type,0,t,0);let{length:e,nullCount:i}=this,r=new Uint8Array((t+63&-64)>>3).fill(255,0,e>>3);r[e>>3]=(1<<e-(e&-8))-1,i>0&&r.set(Es(this.offset,e,this.nullBitmap),0);let s=this.buffers;return s[_i.VALIDITY]=r,this.clone(this.type,0,t,i+(t-e),s)}_sliceBuffers(t,e,i,r){let s,{buffers:o}=this;return(s=o[_i.TYPE])&&(o[_i.TYPE]=s.subarray(t,t+e)),(s=o[_i.OFFSET])&&(o[_i.OFFSET]=s.subarray(t,t+e+1))||(s=o[_i.DATA])&&(o[_i.DATA]=r===6?s:s.subarray(i*t,i*(t+e))),o}_sliceChildren(t,e,i){return t.map(r=>r.slice(e,i))}};pe.prototype.children=Object.freeze([]);var Yf=class n extends Et{visit(t){return this.getVisitFn(t.type).call(this,t)}visitNull(t){let{["type"]:e,["offset"]:i=0,["length"]:r=0}=t;return new pe(e,i,r,r)}visitBool(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length>>3,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitInt(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitFloat(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitUtf8(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.data),s=Lt(t.nullBitmap),o=Ms(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new pe(e,i,a,c,[o,r,s])}visitLargeUtf8(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.data),s=Lt(t.nullBitmap),o=Dl(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new pe(e,i,a,c,[o,r,s])}visitBinary(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.data),s=Lt(t.nullBitmap),o=Ms(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new pe(e,i,a,c,[o,r,s])}visitLargeBinary(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.data),s=Lt(t.nullBitmap),o=Dl(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new pe(e,i,a,c,[o,r,s])}visitFixedSizeBinary(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length/kn(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitDate(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length/kn(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitTimestamp(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length/kn(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitTime(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length/kn(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitDecimal(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length/kn(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitList(t){let{["type"]:e,["offset"]:i=0,["child"]:r}=t,s=Lt(t.nullBitmap),o=Ms(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new pe(e,i,a,c,[o,void 0,s],[r])}visitStruct(t){let{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Lt(t.nullBitmap),{length:o=r.reduce((c,{length:l})=>Math.max(c,l),0),nullCount:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,void 0,s],r)}visitUnion(t){let{["type"]:e,["offset"]:i=0,["children"]:r=[]}=t,s=Jt(e.ArrayType,t.typeIds),{["length"]:o=s.length,["nullCount"]:a=-1}=t;if(pt.isSparseUnion(e))return new pe(e,i,o,a,[void 0,void 0,void 0,s],r);let c=Ms(t.valueOffsets);return new pe(e,i,o,a,[c,void 0,void 0,s],r)}visitDictionary(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.indices.ArrayType,t.data),{["dictionary"]:o=new oe([new n().visit({type:e.dictionary})])}=t,{["length"]:a=s.length,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new pe(e,i,a,c,[void 0,s,r],[],o)}visitInterval(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length/kn(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitDuration(t){let{["type"]:e,["offset"]:i=0}=t,r=Lt(t.nullBitmap),s=Jt(e.ArrayType,t.data),{["length"]:o=s.length,["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,s,r])}visitFixedSizeList(t){let{["type"]:e,["offset"]:i=0,["child"]:r=new n().visit({type:e.valueType})}=t,s=Lt(t.nullBitmap),{["length"]:o=r.length/kn(e),["nullCount"]:a=t.nullBitmap?-1:0}=t;return new pe(e,i,o,a,[void 0,void 0,s],[r])}visitMap(t){let{["type"]:e,["offset"]:i=0,["child"]:r=new n().visit({type:e.childType})}=t,s=Lt(t.nullBitmap),o=Ms(t.valueOffsets),{["length"]:a=o.length-1,["nullCount"]:c=t.nullBitmap?-1:0}=t;return new pe(e,i,a,c,[o,void 0,s],[r])}},jw=new Yf;function Gt(n){return jw.visit(n)}var La=class{constructor(t=0,e){this.numChunks=t,this.getChunkIterator=e,this.chunkIndex=0,this.chunkIterator=this.getChunkIterator(0)}next(){for(;this.chunkIndex<this.numChunks;){let t=this.chunkIterator.next();if(!t.done)return t;++this.chunkIndex<this.numChunks&&(this.chunkIterator=this.getChunkIterator(this.chunkIndex))}return{done:!0,value:null}}[Symbol.iterator](){return this}};function d_(n){return n.some(t=>t.nullable)}function ph(n){return n.reduce((t,e)=>t+e.nullCount,0)}function mh(n){return n.reduce((t,e,i)=>(t[i+1]=t[i]+e.length,t),new Uint32Array(n.length+1))}function gh(n,t,e,i){let r=[];for(let s=-1,o=n.length;++s<o;){let a=n[s],c=t[s],{length:l}=a;if(c>=i)break;if(e>=c+l)continue;if(c>=e&&c+l<=i){r.push(a);continue}let h=Math.max(0,e-c),u=Math.min(i-c,l);r.push(a.slice(h,u-h))}return r.length===0&&r.push(n[0].slice(0,0)),r}function qf(n,t,e,i){let r=0,s=0,o=t.length-1;do{if(r>=o-1)return e<t[o]?i(n,r,e-t[r]):null;s=r+Math.trunc((o-r)*.5),e<t[s]?o=s:r=s}while(r<o)}function Ua(n,t){return n.getValid(t)}function Lo(n){function t(e,i,r){return n(e[i],r)}return function(e){let i=this.data;return qf(i,this._offsets,e,t)}}function _h(n){let t;function e(i,r,s){return n(i[r],s,t)}return function(i,r){let s=this.data;t=r;let o=qf(s,this._offsets,i,e);return t=void 0,o}}function yh(n){let t;function e(i,r,s){let o=s,a=0,c=0;for(let l=r-1,h=i.length;++l<h;){let u=i[l];if(~(a=n(u,t,o)))return c+a;o=0,c+=u.length}return-1}return function(i,r){t=i;let s=this.data,o=typeof r!="number"?e(s,0,0):qf(s,this._offsets,r,e);return t=void 0,o}}var Rt=class extends Et{};function Zw(n,t){return t===null&&n.length>0?0:-1}function $w(n,t){let{nullBitmap:e}=n;if(!e||n.nullCount<=0)return-1;let i=0;for(let r of new Ts(e,n.offset+(t||0),n.length,e,fh)){if(!r)return i;++i}return-1}function Wt(n,t,e){if(t===void 0)return-1;if(t===null)switch(n.typeId){case R.Union:break;case R.Dictionary:break;default:return $w(n,e)}let i=We.getVisitFn(n),r=Qr(t);for(let s=(e||0)-1,o=n.length;++s<o;)if(r(i(n,s)))return s;return-1}function f_(n,t,e){let i=We.getVisitFn(n),r=Qr(t);for(let s=(e||0)-1,o=n.length;++s<o;)if(r(i(n,s)))return s;return-1}Rt.prototype.visitNull=Zw;Rt.prototype.visitBool=Wt;Rt.prototype.visitInt=Wt;Rt.prototype.visitInt8=Wt;Rt.prototype.visitInt16=Wt;Rt.prototype.visitInt32=Wt;Rt.prototype.visitInt64=Wt;Rt.prototype.visitUint8=Wt;Rt.prototype.visitUint16=Wt;Rt.prototype.visitUint32=Wt;Rt.prototype.visitUint64=Wt;Rt.prototype.visitFloat=Wt;Rt.prototype.visitFloat16=Wt;Rt.prototype.visitFloat32=Wt;Rt.prototype.visitFloat64=Wt;Rt.prototype.visitUtf8=Wt;Rt.prototype.visitLargeUtf8=Wt;Rt.prototype.visitBinary=Wt;Rt.prototype.visitLargeBinary=Wt;Rt.prototype.visitFixedSizeBinary=Wt;Rt.prototype.visitDate=Wt;Rt.prototype.visitDateDay=Wt;Rt.prototype.visitDateMillisecond=Wt;Rt.prototype.visitTimestamp=Wt;Rt.prototype.visitTimestampSecond=Wt;Rt.prototype.visitTimestampMillisecond=Wt;Rt.prototype.visitTimestampMicrosecond=Wt;Rt.prototype.visitTimestampNanosecond=Wt;Rt.prototype.visitTime=Wt;Rt.prototype.visitTimeSecond=Wt;Rt.prototype.visitTimeMillisecond=Wt;Rt.prototype.visitTimeMicrosecond=Wt;Rt.prototype.visitTimeNanosecond=Wt;Rt.prototype.visitDecimal=Wt;Rt.prototype.visitList=Wt;Rt.prototype.visitStruct=Wt;Rt.prototype.visitUnion=Wt;Rt.prototype.visitDenseUnion=f_;Rt.prototype.visitSparseUnion=f_;Rt.prototype.visitDictionary=Wt;Rt.prototype.visitInterval=Wt;Rt.prototype.visitIntervalDayTime=Wt;Rt.prototype.visitIntervalYearMonth=Wt;Rt.prototype.visitDuration=Wt;Rt.prototype.visitDurationSecond=Wt;Rt.prototype.visitDurationMillisecond=Wt;Rt.prototype.visitDurationMicrosecond=Wt;Rt.prototype.visitDurationNanosecond=Wt;Rt.prototype.visitFixedSizeList=Wt;Rt.prototype.visitMap=Wt;var Rs=new Rt;var Ct=class extends Et{};function Ft(n){let{type:t}=n;if(n.nullCount===0&&n.stride===1&&(pt.isInt(t)&&t.bitWidth!==64||pt.isTime(t)&&t.bitWidth!==64||pt.isFloat(t)&&t.precision!==we.HALF))return new La(n.data.length,i=>{let r=n.data[i];return r.values.subarray(0,r.length)[Symbol.iterator]()});let e=0;return new La(n.data.length,i=>{let s=n.data[i].length,o=n.slice(e,e+s);return e+=s,new jf(o)})}var jf=class{constructor(t){this.vector=t,this.index=0}next(){return this.index<this.vector.length?{value:this.vector.get(this.index++)}:{done:!0,value:null}}[Symbol.iterator](){return this}};Ct.prototype.visitNull=Ft;Ct.prototype.visitBool=Ft;Ct.prototype.visitInt=Ft;Ct.prototype.visitInt8=Ft;Ct.prototype.visitInt16=Ft;Ct.prototype.visitInt32=Ft;Ct.prototype.visitInt64=Ft;Ct.prototype.visitUint8=Ft;Ct.prototype.visitUint16=Ft;Ct.prototype.visitUint32=Ft;Ct.prototype.visitUint64=Ft;Ct.prototype.visitFloat=Ft;Ct.prototype.visitFloat16=Ft;Ct.prototype.visitFloat32=Ft;Ct.prototype.visitFloat64=Ft;Ct.prototype.visitUtf8=Ft;Ct.prototype.visitLargeUtf8=Ft;Ct.prototype.visitBinary=Ft;Ct.prototype.visitLargeBinary=Ft;Ct.prototype.visitFixedSizeBinary=Ft;Ct.prototype.visitDate=Ft;Ct.prototype.visitDateDay=Ft;Ct.prototype.visitDateMillisecond=Ft;Ct.prototype.visitTimestamp=Ft;Ct.prototype.visitTimestampSecond=Ft;Ct.prototype.visitTimestampMillisecond=Ft;Ct.prototype.visitTimestampMicrosecond=Ft;Ct.prototype.visitTimestampNanosecond=Ft;Ct.prototype.visitTime=Ft;Ct.prototype.visitTimeSecond=Ft;Ct.prototype.visitTimeMillisecond=Ft;Ct.prototype.visitTimeMicrosecond=Ft;Ct.prototype.visitTimeNanosecond=Ft;Ct.prototype.visitDecimal=Ft;Ct.prototype.visitList=Ft;Ct.prototype.visitStruct=Ft;Ct.prototype.visitUnion=Ft;Ct.prototype.visitDenseUnion=Ft;Ct.prototype.visitSparseUnion=Ft;Ct.prototype.visitDictionary=Ft;Ct.prototype.visitInterval=Ft;Ct.prototype.visitIntervalDayTime=Ft;Ct.prototype.visitIntervalYearMonth=Ft;Ct.prototype.visitDuration=Ft;Ct.prototype.visitDurationSecond=Ft;Ct.prototype.visitDurationMillisecond=Ft;Ct.prototype.visitDurationMicrosecond=Ft;Ct.prototype.visitDurationNanosecond=Ft;Ct.prototype.visitFixedSizeList=Ft;Ct.prototype.visitMap=Ft;var Uo=new Ct;var p_,m_={},g_={},oe=class n{constructor(t){var e,i,r;let s=t[0]instanceof n?t.flatMap(a=>a.data):t;if(s.length===0||s.some(a=>!(a instanceof pe)))throw new TypeError("Vector constructor expects an Array of Data instances.");let o=(e=s[0])===null||e===void 0?void 0:e.type;switch(s.length){case 0:this._offsets=[0];break;case 1:{let{get:a,set:c,indexOf:l}=m_[o.typeId],h=s[0];this.isValid=u=>Ua(h,u),this.get=u=>a(h,u),this.set=(u,d)=>c(h,u,d),this.indexOf=u=>l(h,u),this._offsets=[0,h.length];break}default:Object.setPrototypeOf(this,g_[o.typeId]),this._offsets=mh(s);break}this.data=s,this.type=o,this.stride=kn(o),this.numChildren=(r=(i=o.children)===null||i===void 0?void 0:i.length)!==null&&r!==void 0?r:0,this.length=this._offsets.at(-1)}get byteLength(){return this.data.reduce((t,e)=>t+e.byteLength,0)}get nullable(){return d_(this.data)}get nullCount(){return ph(this.data)}get ArrayType(){return this.type.ArrayType}get[Symbol.toStringTag](){return`${this.VectorName}<${this.type[Symbol.toStringTag]}>`}get VectorName(){return`${R[this.type.typeId]}Vector`}isValid(t){return!1}get(t){return null}at(t){return this.get(As(t,this.length))}set(t,e){}indexOf(t,e){return-1}includes(t,e){return this.indexOf(t,e)>-1}[Symbol.iterator](){return Uo.visit(this)}concat(...t){return new n(this.data.concat(t.flatMap(e=>e.data).flat(Number.POSITIVE_INFINITY)))}slice(t,e){return new n(Da(this,t,e,({data:i,_offsets:r},s,o)=>gh(i,r,s,o)))}toJSON(){return[...this]}toArray(){let{type:t,data:e,length:i,stride:r,ArrayType:s}=this;switch(t.typeId){case R.Int:case R.Float:case R.Decimal:case R.Time:case R.Timestamp:switch(e.length){case 0:return new s;case 1:return e[0].values.subarray(0,i*r);default:return e.reduce((o,{values:a,length:c})=>(o.array.set(a.subarray(0,c*r),o.offset),o.offset+=c*r,o),{array:new s(i*r),offset:0}).array}}return[...this]}toString(){return`[${[...this].join(",")}]`}getChild(t){var e;return this.getChildAt((e=this.type.children)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.numChildren?new n(this.data.map(({children:e})=>e[t])):null}get isMemoized(){return pt.isDictionary(this.type)?this.data[0].dictionary.isMemoized:!1}memoize(){if(pt.isDictionary(this.type)){let t=new vh(this.data[0].dictionary),e=this.data.map(i=>{let r=i.clone();return r.dictionary=t,r});return new n(e)}return new vh(this)}unmemoize(){if(pt.isDictionary(this.type)&&this.isMemoized){let t=this.data[0].dictionary.unmemoize(),e=this.data.map(i=>{let r=i.clone();return r.dictionary=t,r});return new n(e)}return this}};p_=Symbol.toStringTag;oe[p_]=(n=>{n.type=pt.prototype,n.data=[],n.length=0,n.stride=1,n.numChildren=0,n._offsets=new Uint32Array([0]),n[Symbol.isConcatSpreadable]=!0;let t=Object.keys(R).map(e=>R[e]).filter(e=>typeof e=="number"&&e!==R.NONE);for(let e of t){let i=We.getVisitFnByTypeId(e),r=on.getVisitFnByTypeId(e),s=Rs.getVisitFnByTypeId(e);m_[e]={get:i,set:r,indexOf:s},g_[e]=Object.create(n,{isValid:{value:Lo(Ua)},get:{value:Lo(We.getVisitFnByTypeId(e))},set:{value:_h(on.getVisitFnByTypeId(e))},indexOf:{value:yh(Rs.getVisitFnByTypeId(e))}})}return"Vector"})(oe.prototype);var vh=class n extends oe{constructor(t){super(t.data);let e=this.get,i=this.set,r=this.slice,s=new Array(this.length);Object.defineProperty(this,"get",{value(o){let a=s[o];if(a!==void 0)return a;let c=e.call(this,o);return s[o]=c,c}}),Object.defineProperty(this,"set",{value(o,a){i.call(this,o,a),s[o]=a}}),Object.defineProperty(this,"slice",{value:(o,a)=>new n(r.call(this,o,a))}),Object.defineProperty(this,"isMemoized",{value:!0}),Object.defineProperty(this,"unmemoize",{value:()=>new oe(this.data)}),Object.defineProperty(this,"memoize",{value:()=>this})}};function __(n){if(!n||n.length<=0)return function(r){return!0};let t="",e=n.filter(i=>i===i);return e.length>0&&(t=`
    switch (x) {${e.map(i=>`
        case ${Jw(i)}:`).join("")}
            return false;
    }`),n.length!==e.length&&(t=`if (x !== x) return false;
${t}`),new Function("x",`${t}
return true;`)}function Jw(n){return typeof n!="bigint"?yi(n):`${yi(n)}n`}function Zf(n,t){let e=Math.ceil(n)*t-1;return(e-e%64+64||64)/t}function y_(n,t=0){return n.length>=t?n.subarray(0,t):ma(new n.constructor(t),n,0)}var Ai=class{constructor(t,e=0,i=1){this.length=Math.ceil(e/i),this.buffer=new t(this.length),this.stride=i,this.BYTES_PER_ELEMENT=t.BYTES_PER_ELEMENT,this.ArrayType=t}get byteLength(){return Math.ceil(this.length*this.stride)*this.BYTES_PER_ELEMENT}get reservedLength(){return this.buffer.length/this.stride}get reservedByteLength(){return this.buffer.byteLength}set(t,e){return this}append(t){return this.set(this.length,t)}reserve(t){if(t>0){this.length+=t;let e=this.stride,i=this.length*e,r=this.buffer.length;i>=r&&this._resize(r===0?Zf(i*1,this.BYTES_PER_ELEMENT):Zf(i*2,this.BYTES_PER_ELEMENT))}return this}flush(t=this.length){t=Zf(t*this.stride,this.BYTES_PER_ELEMENT);let e=y_(this.buffer,t);return this.clear(),e}clear(){return this.length=0,this.buffer=new this.ArrayType,this}_resize(t){return this.buffer=y_(this.buffer,t)}},vr=class extends Ai{last(){return this.get(this.length-1)}get(t){return this.buffer[t]}set(t,e){return this.reserve(t-this.length+1),this.buffer[t*this.stride]=e,this}},No=class extends vr{constructor(){super(Uint8Array,0,1/8),this.numValid=0}get numInvalid(){return this.length-this.numValid}get(t){return this.buffer[t>>3]>>t%8&1}set(t,e){let{buffer:i}=this.reserve(t-this.length+1),r=t>>3,s=t%8,o=i[r]>>s&1;return e?o===0&&(i[r]|=1<<s,++this.numValid):o===1&&(i[r]&=~(1<<s),--this.numValid),this}clear(){return this.numValid=0,super.clear()}},Bo=class extends vr{constructor(t){super(t.OffsetArrayType,1,1)}append(t){return this.set(this.length-1,t)}set(t,e){let i=this.length-1,r=this.reserve(t-i+1).buffer;return i<t++&&i>=0&&r.fill(r[i],i,t),r[t]=r[t-1]+e,this}flush(t=this.length-1){return t>this.length&&this.set(t-1,this.BYTES_PER_ELEMENT>4?BigInt(0):0),super.flush(t+1)}};var De=class{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t){throw new Error('"throughDOM" not available in this environment')}constructor({type:t,nullValues:e}){this.length=0,this.finished=!1,this.type=t,this.children=[],this.nullValues=e,this.stride=kn(t),this._nulls=new No,e&&e.length>0&&(this._isValid=__(e))}toVector(){return new oe([this.flush()])}get ArrayType(){return this.type.ArrayType}get nullCount(){return this._nulls.numInvalid}get numChildren(){return this.children.length}get byteLength(){let t=0,{_offsets:e,_values:i,_nulls:r,_typeIds:s,children:o}=this;return e&&(t+=e.byteLength),i&&(t+=i.byteLength),r&&(t+=r.byteLength),s&&(t+=s.byteLength),o.reduce((a,c)=>a+c.byteLength,t)}get reservedLength(){return this._nulls.reservedLength}get reservedByteLength(){let t=0;return this._offsets&&(t+=this._offsets.reservedByteLength),this._values&&(t+=this._values.reservedByteLength),this._nulls&&(t+=this._nulls.reservedByteLength),this._typeIds&&(t+=this._typeIds.reservedByteLength),this.children.reduce((e,i)=>e+i.reservedByteLength,t)}get valueOffsets(){return this._offsets?this._offsets.buffer:null}get values(){return this._values?this._values.buffer:null}get nullBitmap(){return this._nulls?this._nulls.buffer:null}get typeIds(){return this._typeIds?this._typeIds.buffer:null}append(t){return this.set(this.length,t)}isValid(t){return this._isValid(t)}set(t,e){return this.setValid(t,this.isValid(e))&&this.setValue(t,e),this}setValue(t,e){this._setValue(this,t,e)}setValid(t,e){return this.length=this._nulls.set(t,+e).length,e}addChild(t,e=`${this.numChildren}`){throw new Error(`Cannot append children to non-nested type "${this.type}"`)}getChildAt(t){return this.children[t]||null}flush(){let t,e,i,r,{type:s,length:o,nullCount:a,_typeIds:c,_offsets:l,_values:h,_nulls:u}=this;(e=c?.flush(o))?r=l?.flush(o):(r=l?.flush(o))?t=h?.flush(l.last()):t=h?.flush(o),a>0&&(i=u?.flush(o));let d=this.children.map(m=>m.flush());return this.clear(),Gt({type:s,length:o,nullCount:a,children:d,child:d[0],data:t,typeIds:e,nullBitmap:i,valueOffsets:r})}finish(){this.finished=!0;for(let t of this.children)t.finish();return this}clear(){var t,e,i,r;this.length=0,(t=this._nulls)===null||t===void 0||t.clear(),(e=this._values)===null||e===void 0||e.clear(),(i=this._offsets)===null||i===void 0||i.clear(),(r=this._typeIds)===null||r===void 0||r.clear();for(let s of this.children)s.clear();return this}};De.prototype.length=1;De.prototype.stride=1;De.prototype.children=null;De.prototype.finished=!1;De.prototype.nullValues=null;De.prototype._isValid=()=>!0;var Xe=class extends De{constructor(t){super(t),this._values=new vr(this.ArrayType,0,this.stride)}setValue(t,e){let i=this._values;return i.reserve(t-i.length+1),super.setValue(t,e)}},Tn=class extends De{constructor(t){super(t),this._pendingLength=0,this._offsets=new Bo(t.type)}setValue(t,e){let i=this._pending||(this._pending=new Map),r=i.get(t);r&&(this._pendingLength-=r.length),this._pendingLength+=e instanceof Vi?e[Kr].length:e.length,i.set(t,e)}setValid(t,e){return super.setValid(t,e)?!0:((this._pending||(this._pending=new Map)).set(t,void 0),!1)}clear(){return this._pendingLength=0,this._pending=void 0,super.clear()}flush(){return this._flush(),super.flush()}finish(){return this._flush(),super.finish()}_flush(){let t=this._pending,e=this._pendingLength;return this._pendingLength=0,this._pending=void 0,t&&t.size>0&&this._flushPending(t,e),this}};var Cs=class{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}offset(){return this.bb.readInt64(this.bb_pos)}metaDataLength(){return this.bb.readInt32(this.bb_pos+8)}bodyLength(){return this.bb.readInt64(this.bb_pos+16)}static sizeOf(){return 24}static createBlock(t,e,i,r){return t.prep(8,24),t.writeInt64(BigInt(r??0)),t.pad(4),t.writeInt32(i),t.writeInt64(BigInt(e??0)),t.offset()}};var Hn=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFooter(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFooter(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}version(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):xe.V1}schema(t){let e=this.bb.__offset(this.bb_pos,6);return e?(t||new An).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}dictionaries(t,e){let i=this.bb.__offset(this.bb_pos,8);return i?(e||new Cs).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}dictionariesLength(){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}recordBatches(t,e){let i=this.bb.__offset(this.bb_pos,10);return i?(e||new Cs).__init(this.bb.__vector(this.bb_pos+i)+t*24,this.bb):null}recordBatchesLength(){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}customMetadata(t,e){let i=this.bb.__offset(this.bb_pos,12);return i?(e||new Ke).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startFooter(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,xe.V1)}static addSchema(t,e){t.addFieldOffset(1,e,0)}static addDictionaries(t,e){t.addFieldOffset(2,e,0)}static startDictionariesVector(t,e){t.startVector(24,e,8)}static addRecordBatches(t,e){t.addFieldOffset(3,e,0)}static startRecordBatchesVector(t,e){t.startVector(24,e,8)}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endFooter(t){return t.endObject()}static finishFooterBuffer(t,e){t.finish(e)}static finishSizePrefixedFooterBuffer(t,e){t.finish(e,void 0,!0)}};var _e=class n{constructor(t=[],e,i,r=xe.V5){this.fields=t||[],this.metadata=e||new Map,i||(i=$f(this.fields)),this.dictionaries=i,this.metadataVersion=r}get[Symbol.toStringTag](){return"Schema"}get names(){return this.fields.map(t=>t.name)}toString(){return`Schema<{ ${this.fields.map((t,e)=>`${e}: ${t}`).join(", ")} }>`}select(t){let e=new Set(t),i=this.fields.filter(r=>e.has(r.name));return new n(i,this.metadata)}selectAt(t){let e=t.map(i=>this.fields[i]).filter(Boolean);return new n(e,this.metadata)}assign(...t){let e=t[0]instanceof n?t[0]:Array.isArray(t[0])?new n(t[0]):new n(t),i=[...this.fields],r=xh(xh(new Map,this.metadata),e.metadata),s=e.fields.filter(a=>{let c=i.findIndex(l=>l.name===a.name);return~c?(i[c]=a.clone({metadata:xh(xh(new Map,i[c].metadata),a.metadata)}))&&!1:!0}),o=$f(s,new Map);return new n([...i,...s],r,new Map([...this.dictionaries,...o]))}};_e.prototype.fields=null;_e.prototype.metadata=null;_e.prototype.dictionaries=null;var te=class n{static new(...t){let[e,i,r,s]=t;return t[0]&&typeof t[0]=="object"&&({name:e}=t[0],i===void 0&&(i=t[0].type),r===void 0&&(r=t[0].nullable),s===void 0&&(s=t[0].metadata)),new n(`${e}`,i,r,s)}constructor(t,e,i=!1,r){this.name=t,this.type=e,this.nullable=i,this.metadata=r||new Map}get typeId(){return this.type.typeId}get[Symbol.toStringTag](){return"Field"}toString(){return`${this.name}: ${this.type}`}clone(...t){let[e,i,r,s]=t;return!t[0]||typeof t[0]!="object"?[e=this.name,i=this.type,r=this.nullable,s=this.metadata]=t:{name:e=this.name,type:i=this.type,nullable:r=this.nullable,metadata:s=this.metadata}=t[0],n.new(e,i,r,s)}};te.prototype.type=null;te.prototype.name=null;te.prototype.nullable=null;te.prototype.metadata=null;function xh(n,t){return new Map([...n||new Map,...t||new Map])}function $f(n,t=new Map){for(let e=-1,i=n.length;++e<i;){let s=n[e].type;if(pt.isDictionary(s)){if(!t.has(s.id))t.set(s.id,s.dictionary);else if(t.get(s.id)!==s.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}s.children&&s.children.length>0&&$f(s.children,t)}return t}var Kw=ws,Qw=Fn,xr=class{static decode(t){t=new Qw(Lt(t));let e=Hn.getRootAsFooter(t),i=_e.decode(e.schema(),new Map,e.version());return new Jf(i,e)}static encode(t){let e=new Kw,i=_e.encode(e,t.schema);Hn.startRecordBatchesVector(e,t.numRecordBatches);for(let o of[...t.recordBatches()].slice().reverse())br.encode(e,o);let r=e.endVector();Hn.startDictionariesVector(e,t.numDictionaries);for(let o of[...t.dictionaryBatches()].slice().reverse())br.encode(e,o);let s=e.endVector();return Hn.startFooter(e),Hn.addSchema(e,i),Hn.addVersion(e,xe.V5),Hn.addRecordBatches(e,r),Hn.addDictionaries(e,s),Hn.finishFooterBuffer(e,Hn.endFooter(e)),e.asUint8Array()}get numRecordBatches(){return this._recordBatches.length}get numDictionaries(){return this._dictionaryBatches.length}constructor(t,e=xe.V5,i,r){this.schema=t,this.version=e,i&&(this._recordBatches=i),r&&(this._dictionaryBatches=r)}*recordBatches(){for(let t,e=-1,i=this.numRecordBatches;++e<i;)(t=this.getRecordBatch(e))&&(yield t)}*dictionaryBatches(){for(let t,e=-1,i=this.numDictionaries;++e<i;)(t=this.getDictionaryBatch(e))&&(yield t)}getRecordBatch(t){return t>=0&&t<this.numRecordBatches&&this._recordBatches[t]||null}getDictionaryBatch(t){return t>=0&&t<this.numDictionaries&&this._dictionaryBatches[t]||null}};var Jf=class extends xr{get numRecordBatches(){return this._footer.recordBatchesLength()}get numDictionaries(){return this._footer.dictionariesLength()}constructor(t,e){super(t,e.version()),this._footer=e}getRecordBatch(t){if(t>=0&&t<this.numRecordBatches){let e=this._footer.recordBatches(t);if(e)return br.decode(e)}return null}getDictionaryBatch(t){if(t>=0&&t<this.numDictionaries){let e=this._footer.dictionaries(t);if(e)return br.decode(e)}return null}},br=class n{static decode(t){return new n(t.metaDataLength(),t.bodyLength(),t.offset())}static encode(t,e){let{metaDataLength:i}=e,r=BigInt(e.offset),s=BigInt(e.bodyLength);return Cs.createBlock(t,r,i,s)}constructor(t,e,i){this.metaDataLength=t,this.offset=he(i),this.bodyLength=he(e)}};var Ie=Object.freeze({done:!0,value:void 0}),Na=class{constructor(t){this._json=t}get schema(){return this._json.schema}get batches(){return this._json.batches||[]}get dictionaries(){return this._json.dictionaries||[]}},Ds=class{tee(){return this._getDOMStream().tee()}pipe(t,e){return this._getNodeStream().pipe(t,e)}pipeTo(t,e){return this._getDOMStream().pipeTo(t,e)}pipeThrough(t,e){return this._getDOMStream().pipeThrough(t,e)}_getDOMStream(){return this._DOMStream||(this._DOMStream=this.toDOMStream())}_getNodeStream(){return this._nodeStream||(this._nodeStream=this.toNodeStream())}},bh=class extends Ds{constructor(){super(),this._values=[],this.resolvers=[],this._closedPromise=new Promise(t=>this._closedPromiseResolve=t)}get closed(){return this._closedPromise}cancel(t){return dt(this,void 0,void 0,function*(){yield this.return(t)})}write(t){this._ensureOpen()&&(this.resolvers.length<=0?this._values.push(t):this.resolvers.shift().resolve({done:!1,value:t}))}abort(t){this._closedPromiseResolve&&(this.resolvers.length<=0?this._error={error:t}:this.resolvers.shift().reject({done:!0,value:t}))}close(){if(this._closedPromiseResolve){let{resolvers:t}=this;for(;t.length>0;)t.shift().resolve(Ie);this._closedPromiseResolve(),this._closedPromiseResolve=void 0}}[Symbol.asyncIterator](){return this}toDOMStream(t){return sn.toDOMStream(this._closedPromiseResolve||this._error?this:this._values,t)}toNodeStream(t){return sn.toNodeStream(this._closedPromiseResolve||this._error?this:this._values,t)}throw(t){return dt(this,void 0,void 0,function*(){return yield this.abort(t),Ie})}return(t){return dt(this,void 0,void 0,function*(){return yield this.close(),Ie})}read(t){return dt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return dt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(...t){return this._values.length>0?Promise.resolve({done:!1,value:this._values.shift()}):this._error?Promise.reject({done:!0,value:this._error.error}):this._closedPromiseResolve?new Promise((e,i)=>{this.resolvers.push({resolve:e,reject:i})}):Promise.resolve(Ie)}_ensureOpen(){if(this._closedPromiseResolve)return!0;throw new Error("AsyncQueue is closed")}};var ki=class extends bh{write(t){if((t=Lt(t)).byteLength>0)return super.write(t)}toString(t=!1){return t?fa(this.toUint8Array(!0)):this.toUint8Array(!1).then(fa)}toUint8Array(t=!1){return t?On(this._values)[0]:dt(this,void 0,void 0,function*(){var e,i,r,s;let o=[],a=0;try{for(var c=!0,l=ui(this),h;h=yield l.next(),e=h.done,!e;c=!0){s=h.value,c=!1;let u=s;o.push(u),a+=u.byteLength}}catch(u){i={error:u}}finally{try{!c&&!e&&(r=l.return)&&(yield r.call(l))}finally{if(i)throw i.error}}return On(o,a)[0]})}},Hi=class{constructor(t){t&&(this.source=new Kf(sn.fromIterable(t)))}[Symbol.iterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}},Kn=class n{constructor(t){t instanceof n?this.source=t.source:t instanceof ki?this.source=new Sr(sn.fromAsyncIterable(t)):Cl(t)?this.source=new Sr(sn.fromNodeStream(t)):pa(t)?this.source=new Sr(sn.fromDOMStream(t)):Il(t)?this.source=new Sr(sn.fromDOMStream(t.body)):di(t)?this.source=new Sr(sn.fromIterable(t)):Bn(t)?this.source=new Sr(sn.fromAsyncIterable(t)):Zn(t)&&(this.source=new Sr(sn.fromAsyncIterable(t)))}[Symbol.asyncIterator](){return this}next(t){return this.source.next(t)}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}get closed(){return this.source.closed}cancel(t){return this.source.cancel(t)}peek(t){return this.source.peek(t)}read(t){return this.source.read(t)}},Kf=class{constructor(t){this.source=t}cancel(t){this.return(t)}peek(t){return this.next(t,"peek").value}read(t){return this.next(t,"read").value}next(t,e="read"){return this.source.next({cmd:e,size:t})}throw(t){return Object.create(this.source.throw&&this.source.throw(t)||Ie)}return(t){return Object.create(this.source.return&&this.source.return(t)||Ie)}},Sr=class{constructor(t){this.source=t,this._closedPromise=new Promise(e=>this._closedPromiseResolve=e)}cancel(t){return dt(this,void 0,void 0,function*(){yield this.return(t)})}get closed(){return this._closedPromise}read(t){return dt(this,void 0,void 0,function*(){return(yield this.next(t,"read")).value})}peek(t){return dt(this,void 0,void 0,function*(){return(yield this.next(t,"peek")).value})}next(t){return dt(this,arguments,void 0,function*(e,i="read"){return yield this.source.next({cmd:i,size:e})})}throw(t){return dt(this,void 0,void 0,function*(){let e=this.source.throw&&(yield this.source.throw(t))||Ie;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}return(t){return dt(this,void 0,void 0,function*(){let e=this.source.return&&(yield this.source.return(t))||Ie;return this._closedPromiseResolve&&this._closedPromiseResolve(),this._closedPromiseResolve=void 0,Object.create(e)})}};var Ba=class extends Hi{constructor(t,e){super(),this.position=0,this.buffer=Lt(t),this.size=e===void 0?this.buffer.byteLength:e}readInt32(t){let{buffer:e,byteOffset:i}=this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)}seek(t){return this.position=Math.min(t,this.size),t<this.size}read(t){let{buffer:e,size:i,position:r}=this;return e&&r<i?(typeof t!="number"&&(t=Number.POSITIVE_INFINITY),this.position=Math.min(i,r+Math.min(i-r,t)),e.subarray(r,this.position)):null}readAt(t,e){let i=this.buffer,r=Math.min(this.size,t+e);return i?i.subarray(t,r):new Uint8Array(e)}close(){this.buffer&&(this.buffer=null)}throw(t){return this.close(),{done:!0,value:t}}return(t){return this.close(),{done:!0,value:t}}},ts=class extends Kn{constructor(t,e){super(),this.position=0,this._handle=t,typeof e=="number"?this.size=e:this._pending=dt(this,void 0,void 0,function*(){this.size=(yield t.stat()).size,delete this._pending})}readInt32(t){return dt(this,void 0,void 0,function*(){let{buffer:e,byteOffset:i}=yield this.readAt(t,4);return new DataView(e,i).getInt32(0,!0)})}seek(t){return dt(this,void 0,void 0,function*(){return this._pending&&(yield this._pending),this.position=Math.min(t,this.size),t<this.size})}read(t){return dt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);let{_handle:e,size:i,position:r}=this;if(e&&r<i){typeof t!="number"&&(t=Number.POSITIVE_INFINITY);let s=r,o=0,a=0,c=Math.min(i,s+Math.min(i-s,t)),l=new Uint8Array(Math.max(0,(this.position=c)-s));for(;(s+=a)<c&&(o+=a)<l.byteLength;)({bytesRead:a}=yield e.read(l,o,l.byteLength-o,s));return l}return null})}readAt(t,e){return dt(this,void 0,void 0,function*(){this._pending&&(yield this._pending);let{_handle:i,size:r}=this;if(i&&t+e<r){let s=Math.min(r,t+e),o=new Uint8Array(s-t);return(yield i.read(o,0,e,t)).buffer}return new Uint8Array(e)})}close(){return dt(this,void 0,void 0,function*(){let t=this._handle;this._handle=null,t&&(yield t.close())})}throw(t){return dt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}return(t){return dt(this,void 0,void 0,function*(){return yield this.close(),{done:!0,value:t}})}};var tp={};ns(tp,{BaseInt64:()=>Oa,Int128:()=>Fa,Int64:()=>Mr,Uint64:()=>Ne});function Oo(n){return n<0&&(n=4294967295+n+1),`0x${n.toString(16)}`}var Fo=8,Qf=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8],Oa=class{constructor(t){this.buffer=t}high(){return this.buffer[1]}low(){return this.buffer[0]}_times(t){let e=new Uint32Array([this.buffer[1]>>>16,this.buffer[1]&65535,this.buffer[0]>>>16,this.buffer[0]&65535]),i=new Uint32Array([t.buffer[1]>>>16,t.buffer[1]&65535,t.buffer[0]>>>16,t.buffer[0]&65535]),r=e[3]*i[3];this.buffer[0]=r&65535;let s=r>>>16;return r=e[2]*i[3],s+=r,r=e[3]*i[2]>>>0,s+=r,this.buffer[0]+=s<<16,this.buffer[1]=s>>>0<r?65536:0,this.buffer[1]+=s>>>16,this.buffer[1]+=e[1]*i[3]+e[2]*i[2]+e[3]*i[1],this.buffer[1]+=e[0]*i[3]+e[1]*i[2]+e[2]*i[1]+e[3]*i[0]<<16,this}_plus(t){let e=this.buffer[0]+t.buffer[0]>>>0;this.buffer[1]+=t.buffer[1],e<this.buffer[0]>>>0&&++this.buffer[1],this.buffer[0]=e}lessThan(t){return this.buffer[1]<t.buffer[1]||this.buffer[1]===t.buffer[1]&&this.buffer[0]<t.buffer[0]}equals(t){return this.buffer[1]===t.buffer[1]&&this.buffer[0]==t.buffer[0]}greaterThan(t){return t.lessThan(this)}hex(){return`${Oo(this.buffer[1])} ${Oo(this.buffer[0])}`}},Ne=class n extends Oa{times(t){return this._times(t),this}plus(t){return this._plus(t),this}static from(t,e=new Uint32Array(2)){return n.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return n.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){let i=t.length,r=new n(e);for(let s=0;s<i;){let o=Fo<i-s?Fo:i-s,a=new n(new Uint32Array([Number.parseInt(t.slice(s,s+o),10),0])),c=new n(new Uint32Array([Qf[o],0]));r.times(c),r.plus(a),s+=o}return r}static convertArray(t){let e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)n.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new n(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new n(new Uint32Array(t.buffer)).plus(e)}},Mr=class n extends Oa{negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[0]==0&&++this.buffer[1],this}times(t){return this._times(t),this}plus(t){return this._plus(t),this}lessThan(t){let e=this.buffer[1]<<0,i=t.buffer[1]<<0;return e<i||e===i&&this.buffer[0]<t.buffer[0]}static from(t,e=new Uint32Array(2)){return n.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(2)){return n.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(2)){let i=t.startsWith("-"),r=t.length,s=new n(e);for(let o=i?1:0;o<r;){let a=Fo<r-o?Fo:r-o,c=new n(new Uint32Array([Number.parseInt(t.slice(o,o+a),10),0])),l=new n(new Uint32Array([Qf[a],0]));s.times(l),s.plus(c),o+=a}return i?s.negate():s}static convertArray(t){let e=new Uint32Array(t.length*2);for(let i=-1,r=t.length;++i<r;)n.from(t[i],new Uint32Array(e.buffer,e.byteOffset+2*i*4,2));return e}static multiply(t,e){return new n(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new n(new Uint32Array(t.buffer)).plus(e)}},Fa=class n{constructor(t){this.buffer=t}high(){return new Mr(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2))}low(){return new Mr(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset,2))}negate(){return this.buffer[0]=~this.buffer[0]+1,this.buffer[1]=~this.buffer[1],this.buffer[2]=~this.buffer[2],this.buffer[3]=~this.buffer[3],this.buffer[0]==0&&++this.buffer[1],this.buffer[1]==0&&++this.buffer[2],this.buffer[2]==0&&++this.buffer[3],this}times(t){let e=new Ne(new Uint32Array([this.buffer[3],0])),i=new Ne(new Uint32Array([this.buffer[2],0])),r=new Ne(new Uint32Array([this.buffer[1],0])),s=new Ne(new Uint32Array([this.buffer[0],0])),o=new Ne(new Uint32Array([t.buffer[3],0])),a=new Ne(new Uint32Array([t.buffer[2],0])),c=new Ne(new Uint32Array([t.buffer[1],0])),l=new Ne(new Uint32Array([t.buffer[0],0])),h=Ne.multiply(s,l);this.buffer[0]=h.low();let u=new Ne(new Uint32Array([h.high(),0]));return h=Ne.multiply(r,l),u.plus(h),h=Ne.multiply(s,c),u.plus(h),this.buffer[1]=u.low(),this.buffer[3]=u.lessThan(h)?1:0,this.buffer[2]=u.high(),new Ne(new Uint32Array(this.buffer.buffer,this.buffer.byteOffset+8,2)).plus(Ne.multiply(i,l)).plus(Ne.multiply(r,c)).plus(Ne.multiply(s,a)),this.buffer[3]+=Ne.multiply(e,l).plus(Ne.multiply(i,c)).plus(Ne.multiply(r,a)).plus(Ne.multiply(s,o)).low(),this}plus(t){let e=new Uint32Array(4);return e[3]=this.buffer[3]+t.buffer[3]>>>0,e[2]=this.buffer[2]+t.buffer[2]>>>0,e[1]=this.buffer[1]+t.buffer[1]>>>0,e[0]=this.buffer[0]+t.buffer[0]>>>0,e[0]<this.buffer[0]>>>0&&++e[1],e[1]<this.buffer[1]>>>0&&++e[2],e[2]<this.buffer[2]>>>0&&++e[3],this.buffer[3]=e[3],this.buffer[2]=e[2],this.buffer[1]=e[1],this.buffer[0]=e[0],this}hex(){return`${Oo(this.buffer[3])} ${Oo(this.buffer[2])} ${Oo(this.buffer[1])} ${Oo(this.buffer[0])}`}static multiply(t,e){return new n(new Uint32Array(t.buffer)).times(e)}static add(t,e){return new n(new Uint32Array(t.buffer)).plus(e)}static from(t,e=new Uint32Array(4)){return n.fromString(typeof t=="string"?t:t.toString(),e)}static fromNumber(t,e=new Uint32Array(4)){return n.fromString(t.toString(),e)}static fromString(t,e=new Uint32Array(4)){let i=t.startsWith("-"),r=t.length,s=new n(e);for(let o=i?1:0;o<r;){let a=Fo<r-o?Fo:r-o,c=new n(new Uint32Array([Number.parseInt(t.slice(o,o+a),10),0,0,0])),l=new n(new Uint32Array([Qf[a],0,0,0]));s.times(l),s.plus(c),o+=a}return i?s.negate():s}static convertArray(t){let e=new Uint32Array(t.length*4);for(let i=-1,r=t.length;++i<r;)n.from(t[i],new Uint32Array(e.buffer,e.byteOffset+4*4*i,4));return e}};var za=class extends Et{constructor(t,e,i,r,s=xe.V5){super(),this.nodesIndex=-1,this.buffersIndex=-1,this.bytes=t,this.nodes=e,this.buffers=i,this.dictionaries=r,this.metadataVersion=s}visit(t){return super.visit(t instanceof te?t.type:t)}visitNull(t,{length:e}=this.nextFieldNode()){return Gt({type:t,length:e})}visitBool(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitInt(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFloat(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeUtf8(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitLargeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),data:this.readData(t)})}visitFixedSizeBinary(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDate(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTimestamp(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitTime(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDecimal(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitList(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}visitStruct(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),children:this.visitMany(t.children)})}visitUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return this.metadataVersion<xe.V5&&this.readNullBitmap(t,i),t.mode===Te.Sparse?this.visitSparseUnion(t,{length:e,nullCount:i}):this.visitDenseUnion(t,{length:e,nullCount:i})}visitDenseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),valueOffsets:this.readOffsets(t),children:this.visitMany(t.children)})}visitSparseUnion(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,typeIds:this.readTypeIds(t),children:this.visitMany(t.children)})}visitDictionary(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t.indices),dictionary:this.readDictionary(t)})}visitInterval(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitDuration(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),data:this.readData(t)})}visitFixedSizeList(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),child:this.visit(t.children[0])})}visitMap(t,{length:e,nullCount:i}=this.nextFieldNode()){return Gt({type:t,length:e,nullCount:i,nullBitmap:this.readNullBitmap(t,i),valueOffsets:this.readOffsets(t),child:this.visit(t.children[0])})}nextFieldNode(){return this.nodes[++this.nodesIndex]}nextBufferRange(){return this.buffers[++this.buffersIndex]}readNullBitmap(t,e,i=this.nextBufferRange()){return e>0&&this.readData(t,i)||new Uint8Array(0)}readOffsets(t,e){return this.readData(t,e)}readTypeIds(t,e){return this.readData(t,e)}readData(t,{length:e,offset:i}=this.nextBufferRange()){return this.bytes.subarray(i,i+e)}readDictionary(t){return this.dictionaries.get(t.id)}},Sh=class extends za{constructor(t,e,i,r,s){super(new Uint8Array(0),e,i,r,s),this.sources=t}readNullBitmap(t,e,{offset:i}=this.nextBufferRange()){return e<=0?new Uint8Array(0):Is(this.sources[i])}readOffsets(t,{offset:e}=this.nextBufferRange()){return Jt(Uint8Array,Jt(t.OffsetArrayType,this.sources[e]))}readTypeIds(t,{offset:e}=this.nextBufferRange()){return Jt(Uint8Array,Jt(t.ArrayType,this.sources[e]))}readData(t,{offset:e}=this.nextBufferRange()){let{sources:i}=this;return pt.isTimestamp(t)?Jt(Uint8Array,Mr.convertArray(i[e])):(pt.isInt(t)||pt.isTime(t))&&t.bitWidth===64||pt.isDuration(t)?Jt(Uint8Array,Mr.convertArray(i[e])):pt.isDate(t)&&t.unit===Ve.MILLISECOND?Jt(Uint8Array,Mr.convertArray(i[e])):pt.isDecimal(t)?Jt(Uint8Array,Fa.convertArray(i[e])):pt.isBinary(t)||pt.isLargeBinary(t)||pt.isFixedSizeBinary(t)?tA(i[e]):pt.isBool(t)?Is(i[e]):pt.isUtf8(t)||pt.isLargeUtf8(t)?Ui(i[e].join("")):Jt(Uint8Array,Jt(t.ArrayType,i[e].map(r=>+r)))}};function tA(n){let t=n.join(""),e=new Uint8Array(t.length/2);for(let i=0;i<t.length;i+=2)e[i>>1]=Number.parseInt(t.slice(i,i+2),16);return e}var zo=class extends Tn{constructor(t){super(t),this._values=new Ai(Uint8Array)}get byteLength(){let t=this._pendingLength+this.length*4;return this._offsets&&(t+=this._offsets.byteLength),this._values&&(t+=this._values.byteLength),this._nulls&&(t+=this._nulls.byteLength),t}setValue(t,e){return super.setValue(t,Lt(e))}_flushPending(t,e){let i=this._offsets,r=this._values.reserve(e).buffer,s=0;for(let[o,a]of t)if(a===void 0)i.set(o,0);else{let c=a.length;r.set(a,s),i.set(o,c),s+=c}}};var Vo=class extends Tn{constructor(t){super(t),this._values=new Ai(Uint8Array)}get byteLength(){let t=this._pendingLength+this.length*4;return this._offsets&&(t+=this._offsets.byteLength),this._values&&(t+=this._values.byteLength),this._nulls&&(t+=this._nulls.byteLength),t}setValue(t,e){return super.setValue(t,Lt(e))}_flushPending(t,e){let i=this._offsets,r=this._values.reserve(e).buffer,s=0;for(let[o,a]of t)if(a===void 0)i.set(o,BigInt(0));else{let c=a.length;r.set(a,s),i.set(o,BigInt(c)),s+=c}}};var Mh=class extends De{constructor(t){super(t),this._values=new No}setValue(t,e){this._values.set(t,+e)}};var Ps=class extends Xe{};Ps.prototype._setValue=Lf;var Va=class extends Ps{};Va.prototype._setValue=Zl;var ka=class extends Ps{};ka.prototype._setValue=$l;var Ha=class extends Xe{};Ha.prototype._setValue=Bf;var wh=class extends De{constructor({type:t,nullValues:e,dictionaryHashFunction:i}){super({type:new Vn(t.dictionary,t.indices,t.id,t.isOrdered)}),this._nulls=null,this._dictionaryOffset=0,this._keysToIndices=Object.create(null),this.indices=Ls({type:this.type.indices,nullValues:e}),this.dictionary=Ls({type:this.type.dictionary,nullValues:null}),typeof i=="function"&&(this.valueToKey=i)}get values(){return this.indices.values}get nullCount(){return this.indices.nullCount}get nullBitmap(){return this.indices.nullBitmap}get byteLength(){return this.indices.byteLength+this.dictionary.byteLength}get reservedLength(){return this.indices.reservedLength+this.dictionary.reservedLength}get reservedByteLength(){return this.indices.reservedByteLength+this.dictionary.reservedByteLength}isValid(t){return this.indices.isValid(t)}setValid(t,e){let i=this.indices;return e=i.setValid(t,e),this.length=i.length,e}setValue(t,e){let i=this._keysToIndices,r=this.valueToKey(e),s=i[r];return s===void 0&&(i[r]=s=this._dictionaryOffset+this.dictionary.append(e).length-1),this.indices.setValue(t,s)}flush(){let t=this.type,e=this._dictionary,i=this.dictionary.toVector(),r=this.indices.flush().clone(t);return r.dictionary=e?e.concat(i):i,this.finished||(this._dictionaryOffset+=i.length),this._dictionary=r.dictionary,this.clear(),r}finish(){return this.indices.finish(),this.dictionary.finish(),this._dictionaryOffset=0,this._keysToIndices=Object.create(null),super.finish()}clear(){return this.indices.clear(),this.dictionary.clear(),super.clear()}valueToKey(t){return typeof t=="string"?t:`${t}`}};var Ga=class extends Xe{};Ga.prototype._setValue=Pf;var Ah=class extends De{setValue(t,e){let[i]=this.children,r=t*this.stride;for(let s=-1,o=e.length;++s<o;)i.set(r+s,e[s])}addChild(t,e="0"){if(this.numChildren>0)throw new Error("FixedSizeListBuilder can only have one child.");let i=this.children.push(t);return this.type=new Si(this.type.listSize,new te(e,t.type,!0)),i}};var Us=class extends Xe{setValue(t,e){this._values.set(t,e)}},Th=class extends Us{setValue(t,e){super.setValue(t,Ca(e))}},Eh=class extends Us{},Ih=class extends Us{};var Ns=class extends Xe{};Ns.prototype._setValue=Of;var Wa=class extends Ns{};Wa.prototype._setValue=sh;var Xa=class extends Ns{};Xa.prototype._setValue=oh;var wr=class extends Xe{};wr.prototype._setValue=Ff;var Ya=class extends wr{};Ya.prototype._setValue=ah;var qa=class extends wr{};qa.prototype._setValue=ch;var ja=class extends wr{};ja.prototype._setValue=lh;var Za=class extends wr{};Za.prototype._setValue=hh;var Qn=class extends Xe{setValue(t,e){this._values.set(t,e)}},Rh=class extends Qn{},Ch=class extends Qn{},Dh=class extends Qn{},Ph=class extends Qn{},Lh=class extends Qn{},Uh=class extends Qn{},Nh=class extends Qn{},Bh=class extends Qn{};var Oh=class extends Tn{constructor(t){super(t),this._offsets=new Bo(t.type)}addChild(t,e="0"){if(this.numChildren>0)throw new Error("ListBuilder can only have one child.");return this.children[this.numChildren]=t,this.type=new xi(new te(e,t.type,!0)),this.numChildren-1}_flushPending(t){let e=this._offsets,[i]=this.children;for(let[r,s]of t)if(typeof s>"u")e.set(r,0);else{let o=s,a=o.length,c=e.set(r,a).buffer[r];for(let l=-1;++l<a;)i.set(c+l,o[l])}}};var Fh=class extends Tn{set(t,e){return super.set(t,e)}setValue(t,e){let i=e instanceof Map?e:new Map(Object.entries(e)),r=this._pending||(this._pending=new Map),s=r.get(t);s&&(this._pendingLength-=s.size),this._pendingLength+=i.size,r.set(t,i)}addChild(t,e=`${this.numChildren}`){if(this.numChildren>0)throw new Error("ListBuilder can only have one child.");return this.children[this.numChildren]=t,this.type=new Mi(new te(e,t.type,!0),this.type.keysSorted),this.numChildren-1}_flushPending(t){let e=this._offsets,[i]=this.children;for(let[r,s]of t)if(s===void 0)e.set(r,0);else{let{[r]:o,[r+1]:a}=e.set(r,s.size).buffer;for(let c of s.entries())if(i.set(o,c),++o>=a)break}}};var zh=class extends De{setValue(t,e){}setValid(t,e){return this.length=Math.max(t+1,this.length),e}};var Vh=class extends De{setValue(t,e){let{children:i,type:r}=this;switch(Array.isArray(e)||e.constructor){case!0:return r.children.forEach((s,o)=>i[o].set(t,e[o]));case Map:return r.children.forEach((s,o)=>i[o].set(t,e.get(s.name)));default:return r.children.forEach((s,o)=>i[o].set(t,e[s.name]))}}setValid(t,e){return super.setValid(t,e)||this.children.forEach(i=>i.setValid(t,e)),e}addChild(t,e=`${this.numChildren}`){let i=this.children.push(t);return this.type=new Ee([...this.type.children,new te(e,t.type,!0)]),i}};var Ar=class extends Xe{};Ar.prototype._setValue=Uf;var $a=class extends Ar{};$a.prototype._setValue=Jl;var Ja=class extends Ar{};Ja.prototype._setValue=Kl;var Ka=class extends Ar{};Ka.prototype._setValue=Ql;var Qa=class extends Ar{};Qa.prototype._setValue=th;var Tr=class extends Xe{};Tr.prototype._setValue=Nf;var tc=class extends Tr{};tc.prototype._setValue=eh;var ec=class extends Tr{};ec.prototype._setValue=nh;var nc=class extends Tr{};nc.prototype._setValue=ih;var ic=class extends Tr{};ic.prototype._setValue=rh;var ko=class extends De{constructor(t){super(t),this._typeIds=new vr(Int8Array,0,1),typeof t.valueToChildTypeId=="function"&&(this._valueToChildTypeId=t.valueToChildTypeId)}get typeIdToChildIndex(){return this.type.typeIdToChildIndex}append(t,e){return this.set(this.length,t,e)}set(t,e,i){return i===void 0&&(i=this._valueToChildTypeId(this,e,t)),this.setValue(t,e,i),this}setValue(t,e,i){this._typeIds.set(t,i);let r=this.type.typeIdToChildIndex[i],s=this.children[r];s?.set(t,e)}addChild(t,e=`${this.children.length}`){let i=this.children.push(t),{type:{children:r,mode:s,typeIds:o}}=this,a=[...r,new te(e,t.type)];return this.type=new bi(s,[...o,i],a),i}_valueToChildTypeId(t,e,i){throw new Error("Cannot map UnionBuilder value to child typeId. Pass the `childTypeId` as the second argument to unionBuilder.append(), or supply a `valueToChildTypeId` function as part of the UnionBuilder constructor options.")}},kh=class extends ko{},Hh=class extends ko{constructor(t){super(t),this._offsets=new vr(Int32Array)}setValue(t,e,i){let r=this._typeIds.set(t,i).buffer[t],s=this.getChildAt(this.type.typeIdToChildIndex[r]),o=this._offsets.set(t,s.length).buffer[t];s?.set(o,e)}};var rc=class extends Tn{constructor(t){super(t),this._values=new Ai(Uint8Array)}get byteLength(){let t=this._pendingLength+this.length*4;return this._offsets&&(t+=this._offsets.byteLength),this._values&&(t+=this._values.byteLength),this._nulls&&(t+=this._nulls.byteLength),t}setValue(t,e){return super.setValue(t,Ui(e))}_flushPending(t,e){}};rc.prototype._flushPending=zo.prototype._flushPending;var sc=class extends Tn{constructor(t){super(t),this._values=new Ai(Uint8Array)}get byteLength(){let t=this._pendingLength+this.length*4;return this._offsets&&(t+=this._offsets.byteLength),this._values&&(t+=this._values.byteLength),this._nulls&&(t+=this._nulls.byteLength),t}setValue(t,e){return super.setValue(t,Ui(e))}_flushPending(t,e){}};sc.prototype._flushPending=Vo.prototype._flushPending;var ep=class extends Et{visitNull(){return zh}visitBool(){return Mh}visitInt(){return Qn}visitInt8(){return Rh}visitInt16(){return Ch}visitInt32(){return Dh}visitInt64(){return Ph}visitUint8(){return Lh}visitUint16(){return Uh}visitUint32(){return Nh}visitUint64(){return Bh}visitFloat(){return Us}visitFloat16(){return Th}visitFloat32(){return Eh}visitFloat64(){return Ih}visitUtf8(){return rc}visitLargeUtf8(){return sc}visitBinary(){return zo}visitLargeBinary(){return Vo}visitFixedSizeBinary(){return Ga}visitDate(){return Ps}visitDateDay(){return Va}visitDateMillisecond(){return ka}visitTimestamp(){return Ar}visitTimestampSecond(){return $a}visitTimestampMillisecond(){return Ja}visitTimestampMicrosecond(){return Ka}visitTimestampNanosecond(){return Qa}visitTime(){return Tr}visitTimeSecond(){return tc}visitTimeMillisecond(){return ec}visitTimeMicrosecond(){return nc}visitTimeNanosecond(){return ic}visitDecimal(){return Ha}visitList(){return Oh}visitStruct(){return Vh}visitUnion(){return ko}visitDenseUnion(){return Hh}visitSparseUnion(){return kh}visitDictionary(){return wh}visitInterval(){return Ns}visitIntervalDayTime(){return Wa}visitIntervalYearMonth(){return Xa}visitDuration(){return wr}visitDurationSecond(){return Ya}visitDurationMillisecond(){return qa}visitDurationMicrosecond(){return ja}visitDurationNanosecond(){return Za}visitFixedSizeList(){return Ah}visitMap(){return Fh}},v_=new ep;var Dt=class extends Et{compareSchemas(t,e){return t===e||e instanceof t.constructor&&this.compareManyFields(t.fields,e.fields)}compareManyFields(t,e){return t===e||Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((i,r)=>this.compareFields(i,e[r]))}compareFields(t,e){return t===e||e instanceof t.constructor&&t.name===e.name&&t.nullable===e.nullable&&this.visit(t.type,e.type)}};function vn(n,t){return t instanceof n.constructor}function Bs(n,t){return n===t||vn(n,t)}function Er(n,t){return n===t||vn(n,t)&&n.bitWidth===t.bitWidth&&n.isSigned===t.isSigned}function Gh(n,t){return n===t||vn(n,t)&&n.precision===t.precision}function eA(n,t){return n===t||vn(n,t)&&n.byteWidth===t.byteWidth}function np(n,t){return n===t||vn(n,t)&&n.unit===t.unit}function oc(n,t){return n===t||vn(n,t)&&n.unit===t.unit&&n.timezone===t.timezone}function ac(n,t){return n===t||vn(n,t)&&n.unit===t.unit&&n.bitWidth===t.bitWidth}function nA(n,t){return n===t||vn(n,t)&&n.children.length===t.children.length&&Gi.compareManyFields(n.children,t.children)}function iA(n,t){return n===t||vn(n,t)&&n.children.length===t.children.length&&Gi.compareManyFields(n.children,t.children)}function ip(n,t){return n===t||vn(n,t)&&n.mode===t.mode&&n.typeIds.every((e,i)=>e===t.typeIds[i])&&Gi.compareManyFields(n.children,t.children)}function rA(n,t){return n===t||vn(n,t)&&n.id===t.id&&n.isOrdered===t.isOrdered&&Gi.visit(n.indices,t.indices)&&Gi.visit(n.dictionary,t.dictionary)}function rp(n,t){return n===t||vn(n,t)&&n.unit===t.unit}function cc(n,t){return n===t||vn(n,t)&&n.unit===t.unit}function sA(n,t){return n===t||vn(n,t)&&n.listSize===t.listSize&&n.children.length===t.children.length&&Gi.compareManyFields(n.children,t.children)}function oA(n,t){return n===t||vn(n,t)&&n.keysSorted===t.keysSorted&&n.children.length===t.children.length&&Gi.compareManyFields(n.children,t.children)}Dt.prototype.visitNull=Bs;Dt.prototype.visitBool=Bs;Dt.prototype.visitInt=Er;Dt.prototype.visitInt8=Er;Dt.prototype.visitInt16=Er;Dt.prototype.visitInt32=Er;Dt.prototype.visitInt64=Er;Dt.prototype.visitUint8=Er;Dt.prototype.visitUint16=Er;Dt.prototype.visitUint32=Er;Dt.prototype.visitUint64=Er;Dt.prototype.visitFloat=Gh;Dt.prototype.visitFloat16=Gh;Dt.prototype.visitFloat32=Gh;Dt.prototype.visitFloat64=Gh;Dt.prototype.visitUtf8=Bs;Dt.prototype.visitLargeUtf8=Bs;Dt.prototype.visitBinary=Bs;Dt.prototype.visitLargeBinary=Bs;Dt.prototype.visitFixedSizeBinary=eA;Dt.prototype.visitDate=np;Dt.prototype.visitDateDay=np;Dt.prototype.visitDateMillisecond=np;Dt.prototype.visitTimestamp=oc;Dt.prototype.visitTimestampSecond=oc;Dt.prototype.visitTimestampMillisecond=oc;Dt.prototype.visitTimestampMicrosecond=oc;Dt.prototype.visitTimestampNanosecond=oc;Dt.prototype.visitTime=ac;Dt.prototype.visitTimeSecond=ac;Dt.prototype.visitTimeMillisecond=ac;Dt.prototype.visitTimeMicrosecond=ac;Dt.prototype.visitTimeNanosecond=ac;Dt.prototype.visitDecimal=Bs;Dt.prototype.visitList=nA;Dt.prototype.visitStruct=iA;Dt.prototype.visitUnion=ip;Dt.prototype.visitDenseUnion=ip;Dt.prototype.visitSparseUnion=ip;Dt.prototype.visitDictionary=rA;Dt.prototype.visitInterval=rp;Dt.prototype.visitIntervalDayTime=rp;Dt.prototype.visitIntervalYearMonth=rp;Dt.prototype.visitDuration=cc;Dt.prototype.visitDurationSecond=cc;Dt.prototype.visitDurationMillisecond=cc;Dt.prototype.visitDurationMicrosecond=cc;Dt.prototype.visitDurationNanosecond=cc;Dt.prototype.visitFixedSizeList=sA;Dt.prototype.visitMap=oA;var Gi=new Dt;function Os(n,t){return Gi.compareSchemas(n,t)}function x_(n,t){return Gi.compareFields(n,t)}function b_(n,t){return Gi.visit(n,t)}function Ls(n){let t=n.type,e=new(v_.getVisitFn(t)())(n);if(t.children&&t.children.length>0){let i=n.children||[],r={nullValues:n.nullValues},s=Array.isArray(i)?(o,a)=>i[a]||r:({name:o})=>i[o]||r;for(let[o,a]of t.children.entries()){let{type:c}=a,l=s(a,o);e.children.push(Ls(Object.assign(Object.assign({},l),{type:c})))}}return e}function Wh(n,t){return aA(n,t.map(e=>e.data.concat()))}function aA(n,t){let e=[...n.fields],i=[],r={numBatches:t.reduce((u,d)=>Math.max(u,d.length),0)},s=0,o=0,a=-1,c=t.length,l,h=[];for(;r.numBatches-- >0;){for(o=Number.POSITIVE_INFINITY,a=-1;++a<c;)h[a]=l=t[a].shift(),o=Math.min(o,l?l.length:o);Number.isFinite(o)&&(h=cA(e,o,h,t,r),o>0&&(i[s++]=Gt({type:new Ee(e),length:o,nullCount:0,children:h.slice()})))}return[n=n.assign(e),i.map(u=>new Fe(n,u))]}function cA(n,t,e,i,r){var s;let o=(t+63&-64)>>3;for(let a=-1,c=i.length;++a<c;){let l=e[a],h=l?.length;if(h>=t)h===t?e[a]=l:(e[a]=l.slice(0,t),r.numBatches=Math.max(r.numBatches,i[a].unshift(l.slice(t,h-t))));else{let u=n[a];n[a]=u.clone({nullable:!0}),e[a]=(s=l?._changeLengthAndBackfillNullBitmap(t))!==null&&s!==void 0?s:Gt({type:u.type,length:t,nullCount:t,nullBitmap:new Uint8Array(o)})}}return e}var S_,En=class n{constructor(...t){var e,i;if(t.length===0)return this.batches=[],this.schema=new _e([]),this._offsets=[0],this;let r,s;t[0]instanceof _e&&(r=t.shift()),t.at(-1)instanceof Uint32Array&&(s=t.pop());let o=c=>{if(c){if(c instanceof Fe)return[c];if(c instanceof n)return c.batches;if(c instanceof pe){if(c.type instanceof Ee)return[new Fe(new _e(c.type.children),c)]}else{if(Array.isArray(c))return c.flatMap(l=>o(l));if(typeof c[Symbol.iterator]=="function")return[...c].flatMap(l=>o(l));if(typeof c=="object"){let l=Object.keys(c),h=l.map(m=>new oe([c[m]])),u=r??new _e(l.map((m,_)=>new te(String(m),h[_].type,h[_].nullable))),[,d]=Wh(u,h);return d.length===0?[new Fe(c)]:d}}}return[]},a=t.flatMap(c=>o(c));if(r=(i=r??((e=a[0])===null||e===void 0?void 0:e.schema))!==null&&i!==void 0?i:new _e([]),!(r instanceof _e))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");for(let c of a){if(!(c instanceof Fe))throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");if(!Os(r,c.schema))throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")}this.schema=r,this.batches=a,this._offsets=s??mh(this.data)}get data(){return this.batches.map(({data:t})=>t)}get numCols(){return this.schema.fields.length}get numRows(){return this.data.reduce((t,e)=>t+e.length,0)}get nullCount(){return this._nullCount===-1&&(this._nullCount=ph(this.data)),this._nullCount}isValid(t){return!1}get(t){return null}at(t){return this.get(As(t,this.numRows))}set(t,e){}indexOf(t,e){return-1}[Symbol.iterator](){return this.batches.length>0?Uo.visit(new oe(this.data)):new Array(0)[Symbol.iterator]()}toArray(){return[...this]}toString(){return`[
  ${this.toArray().join(`,
  `)}
]`}concat(...t){let e=this.schema,i=this.data.concat(t.flatMap(({data:r})=>r));return new n(e,i.map(r=>new Fe(e,r)))}slice(t,e){let i=this.schema;[t,e]=Da({length:this.numRows},t,e);let r=gh(this.data,this._offsets,t,e);return new n(i,r.map(s=>new Fe(i,s)))}getChild(t){return this.getChildAt(this.schema.fields.findIndex(e=>e.name===t))}getChildAt(t){if(t>-1&&t<this.schema.fields.length){let e=this.data.map(i=>i.children[t]);if(e.length===0){let{type:i}=this.schema.fields[t],r=Gt({type:i,length:0,nullCount:0});e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))}return new oe(e)}return null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=[...this.batches];if(t>-1&&t<this.numCols){e||(e=new oe([Gt({type:new yn,length:this.numRows})]));let s=i.fields.slice(),o=s[t].clone({type:e.type}),a=this.schema.fields.map((c,l)=>this.getChildAt(l));[s[t],a[t]]=[o,e],[i,r]=Wh(i,a)}return new n(i,r)}select(t){let e=this.schema.fields.reduce((i,r,s)=>i.set(r.name,s),new Map);return this.selectAt(t.map(i=>e.get(i)).filter(i=>i>-1))}selectAt(t){let e=this.schema.selectAt(t),i=this.batches.map(r=>r.selectAt(t));return new n(e,i)}assign(t){let e=this.schema.fields,[i,r]=t.schema.fields.reduce((a,c,l)=>{let[h,u]=a,d=e.findIndex(m=>m.name===c.name);return~d?u[d]=l:h.push(l),a},[[],[]]),s=this.schema.assign(t.schema),o=[...e.map((a,c)=>[c,r[c]]).map(([a,c])=>c===void 0?this.getChildAt(a):t.getChildAt(c)),...i.map(a=>t.getChildAt(a))].filter(Boolean);return new n(...Wh(s,o))}};S_=Symbol.toStringTag;En[S_]=(n=>(n.schema=null,n.batches=[],n._offsets=new Uint32Array([0]),n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,n.isValid=Lo(Ua),n.get=Lo(We.getVisitFn(R.Struct)),n.set=_h(on.getVisitFn(R.Struct)),n.indexOf=yh(Rs.getVisitFn(R.Struct)),"Table"))(En.prototype);var w_,Fe=class n{constructor(...t){switch(t.length){case 2:{if([this.schema]=t,!(this.schema instanceof _e))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");if([,this.data=Gt({nullCount:0,type:new Ee(this.schema.fields),children:this.schema.fields.map(e=>Gt({type:e.type,nullCount:0}))})]=t,!(this.data instanceof pe))throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");[this.schema,this.data]=M_(this.schema,this.data.children);break}case 1:{let[e]=t,{fields:i,children:r,length:s}=Object.keys(e).reduce((c,l,h)=>(c.children[h]=e[l],c.length=Math.max(c.length,e[l].length),c.fields[h]=te.new({name:l,type:e[l].type,nullable:!0}),c),{length:0,fields:new Array,children:new Array}),o=new _e(i),a=Gt({type:new Ee(i),length:s,children:r,nullCount:0});[this.schema,this.data]=M_(o,a.children,s);break}default:throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")}}get dictionaries(){return this._dictionaries||(this._dictionaries=A_(this.schema.fields,this.data.children))}get numCols(){return this.schema.fields.length}get numRows(){return this.data.length}get nullCount(){return this.data.nullCount}isValid(t){return this.data.getValid(t)}get(t){return We.visit(this.data,t)}at(t){return this.get(As(t,this.numRows))}set(t,e){return on.visit(this.data,t,e)}indexOf(t,e){return Rs.visit(this.data,t,e)}[Symbol.iterator](){return Uo.visit(new oe([this.data]))}toArray(){return[...this]}concat(...t){return new En(this.schema,[this,...t])}slice(t,e){let[i]=new oe([this.data]).slice(t,e).data;return new n(this.schema,i)}getChild(t){var e;return this.getChildAt((e=this.schema.fields)===null||e===void 0?void 0:e.findIndex(i=>i.name===t))}getChildAt(t){return t>-1&&t<this.schema.fields.length?new oe([this.data.children[t]]):null}setChild(t,e){var i;return this.setChildAt((i=this.schema.fields)===null||i===void 0?void 0:i.findIndex(r=>r.name===t),e)}setChildAt(t,e){let i=this.schema,r=this.data;if(t>-1&&t<this.numCols){e||(e=new oe([Gt({type:new yn,length:this.numRows})]));let s=i.fields.slice(),o=r.children.slice(),a=s[t].clone({type:e.type});[s[t],o[t]]=[a,e.data[0]],i=new _e(s,new Map(this.schema.metadata)),r=Gt({type:new Ee(s),children:o})}return new n(i,r)}select(t){let e=this.schema.select(t),i=new Ee(e.fields),r=[];for(let s of t){let o=this.schema.fields.findIndex(a=>a.name===s);~o&&(r[o]=this.data.children[o])}return new n(e,Gt({type:i,length:this.numRows,children:r}))}selectAt(t){let e=this.schema.selectAt(t),i=t.map(s=>this.data.children[s]).filter(Boolean),r=Gt({type:new Ee(e.fields),length:this.numRows,children:i});return new n(e,r)}};w_=Symbol.toStringTag;Fe[w_]=(n=>(n._nullCount=-1,n[Symbol.isConcatSpreadable]=!0,"RecordBatch"))(Fe.prototype);function M_(n,t,e=t.reduce((i,r)=>Math.max(i,r.length),0)){var i;let r=[...n.fields],s=[...t],o=(e+63&-64)>>3;for(let[a,c]of n.fields.entries()){let l=t[a];(!l||l.length!==e)&&(r[a]=c.clone({nullable:!0}),s[a]=(i=l?._changeLengthAndBackfillNullBitmap(e))!==null&&i!==void 0?i:Gt({type:c.type,length:e,nullCount:e,nullBitmap:new Uint8Array(o)}))}return[n.assign(r),Gt({type:new Ee(r),length:e,children:s})]}function A_(n,t,e=new Map){var i,r;if(((i=n?.length)!==null&&i!==void 0?i:0)>0&&n?.length===t?.length)for(let s=-1,o=n.length;++s<o;){let{type:a}=n[s],c=t[s];for(let l of[c,...((r=c?.dictionary)===null||r===void 0?void 0:r.data)||[]])A_(a.children,l?.children,e);if(pt.isDictionary(a)){let{id:l}=a;if(!e.has(l))c?.dictionary&&e.set(l,c.dictionary);else if(e.get(l)!==c.dictionary)throw new Error("Cannot create Schema containing two different dictionaries with the same Id")}}return e}var Fs=class extends Fe{constructor(t){let e=t.fields.map(r=>Gt({type:r.type})),i=Gt({type:new Ee(t.fields),nullCount:0,children:e});super(t,i)}};var Ti=class n{constructor(){this.bb=null,this.bb_pos=0}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsMessage(t,e){return(e||new n).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsMessage(t,e){return t.setPosition(t.position()+4),(e||new n).__init(t.readInt32(t.position())+t.position(),t)}version(){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readInt16(this.bb_pos+t):xe.V1}headerType(){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint8(this.bb_pos+t):ne.NONE}header(t){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__union(t,this.bb_pos+e):null}bodyLength(){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readInt64(this.bb_pos+t):BigInt("0")}customMetadata(t,e){let i=this.bb.__offset(this.bb_pos,12);return i?(e||new Ke).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+t*4),this.bb):null}customMetadataLength(){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}static startMessage(t){t.startObject(5)}static addVersion(t,e){t.addFieldInt16(0,e,xe.V1)}static addHeaderType(t,e){t.addFieldInt8(1,e,ne.NONE)}static addHeader(t,e){t.addFieldOffset(2,e,0)}static addBodyLength(t,e){t.addFieldInt64(3,e,BigInt("0"))}static addCustomMetadata(t,e){t.addFieldOffset(4,e,0)}static createCustomMetadataVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startCustomMetadataVector(t,e){t.startVector(4,e,4)}static endMessage(t){return t.endObject()}static finishMessageBuffer(t,e){t.finish(e)}static finishSizePrefixedMessageBuffer(t,e){t.finish(e,void 0,!0)}static createMessage(t,e,i,r,s,o){return n.startMessage(t),n.addVersion(t,e),n.addHeaderType(t,i),n.addHeader(t,r),n.addBodyLength(t,s),n.addCustomMetadata(t,o),n.endMessage(t)}};var sp=class extends Et{visit(t,e){return t==null||e==null?void 0:super.visit(t,e)}visitNull(t,e){return Aa.startNull(e),Aa.endNull(e)}visitInt(t,e){return mi.startInt(e),mi.addBitWidth(e,t.bitWidth),mi.addIsSigned(e,t.isSigned),mi.endInt(e)}visitFloat(t,e){return qr.startFloatingPoint(e),qr.addPrecision(e,t.precision),qr.endFloatingPoint(e)}visitBinary(t,e){return xa.startBinary(e),xa.endBinary(e)}visitLargeBinary(t,e){return Sa.startLargeBinary(e),Sa.endLargeBinary(e)}visitBool(t,e){return ba.startBool(e),ba.endBool(e)}visitUtf8(t,e){return Ea.startUtf8(e),Ea.endUtf8(e)}visitLargeUtf8(t,e){return Ma.startLargeUtf8(e),Ma.endLargeUtf8(e)}visitDecimal(t,e){return Fi.startDecimal(e),Fi.addScale(e,t.scale),Fi.addPrecision(e,t.precision),Fi.addBitWidth(e,t.bitWidth),Fi.endDecimal(e)}visitDate(t,e){return Gr.startDate(e),Gr.addUnit(e,t.unit),Gr.endDate(e)}visitTime(t,e){return rr.startTime(e),rr.addUnit(e,t.unit),rr.addBitWidth(e,t.bitWidth),rr.endTime(e)}visitTimestamp(t,e){let i=t.timezone&&e.createString(t.timezone)||void 0;return sr.startTimestamp(e),sr.addUnit(e,t.unit),i!==void 0&&sr.addTimezone(e,i),sr.endTimestamp(e)}visitInterval(t,e){return jr.startInterval(e),jr.addUnit(e,t.unit),jr.endInterval(e)}visitDuration(t,e){return Wr.startDuration(e),Wr.addUnit(e,t.unit),Wr.endDuration(e)}visitList(t,e){return wa.startList(e),wa.endList(e)}visitStruct(t,e){return Ta.startStruct_(e),Ta.endStruct_(e)}visitUnion(t,e){gi.startTypeIdsVector(e,t.typeIds.length);let i=gi.createTypeIdsVector(e,t.typeIds);return gi.startUnion(e),gi.addMode(e,t.mode),gi.addTypeIds(e,i),gi.endUnion(e)}visitDictionary(t,e){let i=this.visit(t.indices,e);return Oi.startDictionaryEncoding(e),Oi.addId(e,BigInt(t.id)),Oi.addIsOrdered(e,t.isOrdered),i!==void 0&&Oi.addIndexType(e,i),Oi.endDictionaryEncoding(e)}visitFixedSizeBinary(t,e){return Xr.startFixedSizeBinary(e),Xr.addByteWidth(e,t.byteWidth),Xr.endFixedSizeBinary(e)}visitFixedSizeList(t,e){return Yr.startFixedSizeList(e),Yr.addListSize(e,t.listSize),Yr.endFixedSizeList(e)}visitMap(t,e){return Zr.startMap(e),Zr.addKeysSorted(e,t.keysSorted),Zr.endMap(e)}},Xh=new sp;function R_(n,t=new Map){return new _e(hA(n,t),Yh(n.metadata),t)}function op(n){return new an(n.count,D_(n.columns),P_(n.columns))}function C_(n){return new Rn(op(n.data),n.id,n.isDelta)}function hA(n,t){return(n.fields||[]).filter(Boolean).map(e=>te.fromJSON(e,t))}function T_(n,t){return(n.children||[]).filter(Boolean).map(e=>te.fromJSON(e,t))}function D_(n){return(n||[]).reduce((t,e)=>[...t,new ti(e.count,uA(e.VALIDITY)),...D_(e.children)],[])}function P_(n,t=[]){for(let e=-1,i=(n||[]).length;++e<i;){let r=n[e];r.VALIDITY&&t.push(new In(t.length,r.VALIDITY.length)),r.TYPE_ID&&t.push(new In(t.length,r.TYPE_ID.length)),r.OFFSET&&t.push(new In(t.length,r.OFFSET.length)),r.DATA&&t.push(new In(t.length,r.DATA.length)),t=P_(r.children,t)}return t}function uA(n){return(n||[]).reduce((t,e)=>t+ +(e===0),0)}function L_(n,t){let e,i,r,s,o,a;return!t||!(s=n.dictionary)?(o=I_(n,T_(n,t)),r=new te(n.name,o,n.nullable,Yh(n.metadata))):t.has(e=s.id)?(i=(i=s.indexType)?E_(i):new zi,a=new Vn(t.get(e),i,e,s.isOrdered),r=new te(n.name,a,n.nullable,Yh(n.metadata))):(i=(i=s.indexType)?E_(i):new zi,t.set(e,o=I_(n,T_(n,t))),a=new Vn(o,i,e,s.isOrdered),r=new te(n.name,a,n.nullable,Yh(n.metadata))),r||null}function Yh(n=[]){return new Map(n.map(({key:t,value:e})=>[t,e]))}function E_(n){return new Qe(n.isSigned,n.bitWidth)}function I_(n,t){let e=n.type.name;switch(e){case"NONE":return new yn;case"null":return new yn;case"binary":return new or;case"largebinary":return new ar;case"utf8":return new cr;case"largeutf8":return new lr;case"bool":return new hr;case"list":return new xi((t||[])[0]);case"struct":return new Ee(t||[]);case"struct_":return new Ee(t||[])}switch(e){case"int":{let i=n.type;return new Qe(i.isSigned,i.bitWidth)}case"floatingpoint":{let i=n.type;return new Jn(we[i.precision])}case"decimal":{let i=n.type;return new ur(i.scale,i.precision,i.bitWidth)}case"date":{let i=n.type;return new dr(Ve[i.unit])}case"time":{let i=n.type;return new fr(St[i.unit],i.bitWidth)}case"timestamp":{let i=n.type;return new pr(St[i.unit],i.timezone)}case"interval":{let i=n.type;return new mr(en[i.unit])}case"duration":{let i=n.type;return new gr(St[i.unit])}case"union":{let i=n.type,[r,...s]=(i.mode+"").toLowerCase(),o=r.toUpperCase()+s.join("");return new bi(Te[o],i.typeIds||[],t||[])}case"fixedsizebinary":{let i=n.type;return new _r(i.byteWidth)}case"fixedsizelist":{let i=n.type;return new Si(i.listSize,(t||[])[0])}case"map":{let i=n.type;return new Mi((t||[])[0],i.keysSorted)}}throw new Error(`Unrecognized type: "${e}"`)}var dA=ws,fA=Fn,Cn=class n{static fromJSON(t,e){let i=new n(0,xe.V5,e);return i._createHeader=pA(t,e),i}static decode(t){t=new fA(Lt(t));let e=Ti.getRootAsMessage(t),i=e.bodyLength(),r=e.version(),s=e.headerType(),o=new n(i,r,s);return o._createHeader=mA(e,s),o}static encode(t){let e=new dA,i=-1;return t.isSchema()?i=_e.encode(e,t.header()):t.isRecordBatch()?i=an.encode(e,t.header()):t.isDictionaryBatch()&&(i=Rn.encode(e,t.header())),Ti.startMessage(e),Ti.addVersion(e,xe.V5),Ti.addHeader(e,i),Ti.addHeaderType(e,t.headerType),Ti.addBodyLength(e,BigInt(t.bodyLength)),Ti.finishMessageBuffer(e,Ti.endMessage(e)),e.asUint8Array()}static from(t,e=0){if(t instanceof _e)return new n(0,xe.V5,ne.Schema,t);if(t instanceof an)return new n(e,xe.V5,ne.RecordBatch,t);if(t instanceof Rn)return new n(e,xe.V5,ne.DictionaryBatch,t);throw new Error(`Unrecognized Message header: ${t}`)}get type(){return this.headerType}get version(){return this._version}get headerType(){return this._headerType}get bodyLength(){return this._bodyLength}header(){return this._createHeader()}isSchema(){return this.headerType===ne.Schema}isRecordBatch(){return this.headerType===ne.RecordBatch}isDictionaryBatch(){return this.headerType===ne.DictionaryBatch}constructor(t,e,i,r){this._version=e,this._headerType=i,this.body=new Uint8Array(0),r&&(this._createHeader=()=>r),this._bodyLength=he(t)}},an=class{get nodes(){return this._nodes}get length(){return this._length}get buffers(){return this._buffers}constructor(t,e,i){this._nodes=e,this._buffers=i,this._length=he(t)}},Rn=class{get id(){return this._id}get data(){return this._data}get isDelta(){return this._isDelta}get length(){return this.data.length}get nodes(){return this.data.nodes}get buffers(){return this.data.buffers}constructor(t,e,i=!1){this._data=t,this._isDelta=i,this._id=he(e)}},In=class{constructor(t,e){this.offset=he(t),this.length=he(e)}},ti=class{constructor(t,e){this.length=he(t),this.nullCount=he(e)}};function pA(n,t){return()=>{switch(t){case ne.Schema:return _e.fromJSON(n);case ne.RecordBatch:return an.fromJSON(n);case ne.DictionaryBatch:return Rn.fromJSON(n)}throw new Error(`Unrecognized Message type: { name: ${ne[t]}, type: ${t} }`)}}function mA(n,t){return()=>{switch(t){case ne.Schema:return _e.decode(n.header(new An),new Map,n.version());case ne.RecordBatch:return an.decode(n.header(new zn),n.version());case ne.DictionaryBatch:return Rn.decode(n.header(new ir),n.version())}throw new Error(`Unrecognized Message type: { name: ${ne[t]}, type: ${t} }`)}}te.encode=TA;te.decode=wA;te.fromJSON=L_;_e.encode=AA;_e.decode=gA;_e.fromJSON=R_;an.encode=EA;an.decode=_A;an.fromJSON=op;Rn.encode=IA;Rn.decode=yA;Rn.fromJSON=C_;ti.encode=RA;ti.decode=xA;In.encode=CA;In.decode=vA;function gA(n,t=new Map,e=xe.V5){let i=MA(n,t);return new _e(i,qh(n),t,e)}function _A(n,t=xe.V5){if(n.compression()!==null)throw new Error("Record batch compression not implemented");return new an(n.length(),bA(n),SA(n,t))}function yA(n,t=xe.V5){return new Rn(an.decode(n.data(),t),n.id(),n.isDelta())}function vA(n){return new In(n.offset(),n.length())}function xA(n){return new ti(n.length(),n.nullCount())}function bA(n){let t=[];for(let e,i=-1,r=-1,s=n.nodesLength();++i<s;)(e=n.nodes(i))&&(t[++r]=ti.decode(e));return t}function SA(n,t){let e=[];for(let i,r=-1,s=-1,o=n.buffersLength();++r<o;)(i=n.buffers(r))&&(t<xe.V4&&(i.bb_pos+=8*(r+1)),e[++s]=In.decode(i));return e}function MA(n,t){let e=[];for(let i,r=-1,s=-1,o=n.fieldsLength();++r<o;)(i=n.fields(r))&&(e[++s]=te.decode(i,t));return e}function U_(n,t){let e=[];for(let i,r=-1,s=-1,o=n.childrenLength();++r<o;)(i=n.children(r))&&(e[++s]=te.decode(i,t));return e}function wA(n,t){let e,i,r,s,o,a;return!t||!(a=n.dictionary())?(r=B_(n,U_(n,t)),i=new te(n.name(),r,n.nullable(),qh(n))):t.has(e=he(a.id()))?(s=(s=a.indexType())?N_(s):new zi,o=new Vn(t.get(e),s,e,a.isOrdered()),i=new te(n.name(),o,n.nullable(),qh(n))):(s=(s=a.indexType())?N_(s):new zi,t.set(e,r=B_(n,U_(n,t))),o=new Vn(r,s,e,a.isOrdered()),i=new te(n.name(),o,n.nullable(),qh(n))),i||null}function qh(n){let t=new Map;if(n)for(let e,i,r=-1,s=Math.trunc(n.customMetadataLength());++r<s;)(e=n.customMetadata(r))&&(i=e.key())!=null&&t.set(i,e.value());return t}function N_(n){return new Qe(n.isSigned(),n.bitWidth())}function B_(n,t){let e=n.typeType();switch(e){case Ae.NONE:return new yn;case Ae.Null:return new yn;case Ae.Binary:return new or;case Ae.LargeBinary:return new ar;case Ae.Utf8:return new cr;case Ae.LargeUtf8:return new lr;case Ae.Bool:return new hr;case Ae.List:return new xi((t||[])[0]);case Ae.Struct_:return new Ee(t||[])}switch(e){case Ae.Int:{let i=n.type(new mi);return new Qe(i.isSigned(),i.bitWidth())}case Ae.FloatingPoint:{let i=n.type(new qr);return new Jn(i.precision())}case Ae.Decimal:{let i=n.type(new Fi);return new ur(i.scale(),i.precision(),i.bitWidth())}case Ae.Date:{let i=n.type(new Gr);return new dr(i.unit())}case Ae.Time:{let i=n.type(new rr);return new fr(i.unit(),i.bitWidth())}case Ae.Timestamp:{let i=n.type(new sr);return new pr(i.unit(),i.timezone())}case Ae.Interval:{let i=n.type(new jr);return new mr(i.unit())}case Ae.Duration:{let i=n.type(new Wr);return new gr(i.unit())}case Ae.Union:{let i=n.type(new gi);return new bi(i.mode(),i.typeIdsArray()||[],t||[])}case Ae.FixedSizeBinary:{let i=n.type(new Xr);return new _r(i.byteWidth())}case Ae.FixedSizeList:{let i=n.type(new Yr);return new Si(i.listSize(),(t||[])[0])}case Ae.Map:{let i=n.type(new Zr);return new Mi((t||[])[0],i.keysSorted())}}throw new Error(`Unrecognized type: "${Ae[e]}" (${e})`)}function AA(n,t){let e=t.fields.map(s=>te.encode(n,s));An.startFieldsVector(n,e.length);let i=An.createFieldsVector(n,e),r=t.metadata&&t.metadata.size>0?An.createCustomMetadataVector(n,[...t.metadata].map(([s,o])=>{let a=n.createString(`${s}`),c=n.createString(`${o}`);return Ke.startKeyValue(n),Ke.addKey(n,a),Ke.addValue(n,c),Ke.endKeyValue(n)})):-1;return An.startSchema(n),An.addFields(n,i),An.addEndianness(n,DA?Hr.Little:Hr.Big),r!==-1&&An.addCustomMetadata(n,r),An.endSchema(n)}function TA(n,t){let e=-1,i=-1,r=-1,s=t.type,o=t.typeId;pt.isDictionary(s)?(o=s.dictionary.typeId,r=Xh.visit(s,n),i=Xh.visit(s.dictionary,n)):i=Xh.visit(s,n);let a=(s.children||[]).map(h=>te.encode(n,h)),c=dn.createChildrenVector(n,a),l=t.metadata&&t.metadata.size>0?dn.createCustomMetadataVector(n,[...t.metadata].map(([h,u])=>{let d=n.createString(`${h}`),m=n.createString(`${u}`);return Ke.startKeyValue(n),Ke.addKey(n,d),Ke.addValue(n,m),Ke.endKeyValue(n)})):-1;return t.name&&(e=n.createString(t.name)),dn.startField(n),dn.addType(n,i),dn.addTypeType(n,o),dn.addChildren(n,c),dn.addNullable(n,!!t.nullable),e!==-1&&dn.addName(n,e),r!==-1&&dn.addDictionary(n,r),l!==-1&&dn.addCustomMetadata(n,l),dn.endField(n)}function EA(n,t){let e=t.nodes||[],i=t.buffers||[];zn.startNodesVector(n,e.length);for(let o of e.slice().reverse())ti.encode(n,o);let r=n.endVector();zn.startBuffersVector(n,i.length);for(let o of i.slice().reverse())In.encode(n,o);let s=n.endVector();return zn.startRecordBatch(n),zn.addLength(n,BigInt(t.length)),zn.addNodes(n,r),zn.addBuffers(n,s),zn.endRecordBatch(n)}function IA(n,t){let e=an.encode(n,t.data);return ir.startDictionaryBatch(n),ir.addId(n,BigInt(t.id)),ir.addIsDelta(n,t.isDelta),ir.addData(n,e),ir.endDictionaryBatch(n)}function RA(n,t){return wo.createFieldNode(n,BigInt(t.length),BigInt(t.nullCount))}function CA(n,t){return Mo.createBuffer(n,BigInt(t.offset),BigInt(t.length))}var DA=(()=>{let n=new ArrayBuffer(2);return new DataView(n).setInt16(0,256,!0),new Int16Array(n)[0]===256})();var cp=n=>`Expected ${ne[n]} Message in stream, but was null or length 0.`,lp=n=>`Header pointer of flatbuffer-encoded ${ne[n]} Message is null or length 0.`,O_=(n,t)=>`Expected to read ${n} metadata bytes, but only read ${t}.`,F_=(n,t)=>`Expected to read ${n} bytes for message body, but only read ${t}.`,Ho=class{constructor(t){this.source=t instanceof Hi?t:new Hi(t)}[Symbol.iterator](){return this}next(){let t;return(t=this.readMetadataLength()).done?Ie:t.value===-1&&(t=this.readMetadataLength()).done?Ie:(t=this.readMetadata(t.value)).done?Ie:t}throw(t){return this.source.throw(t)}return(t){return this.source.return(t)}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(cp(t));return e.value}readMessageBody(t){if(t<=0)return new Uint8Array(0);let e=Lt(this.source.read(t));if(e.byteLength<t)throw new Error(F_(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()}readSchema(t=!1){let e=ne.Schema,i=this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(lp(e));return r}readMetadataLength(){let t=this.source.read(jh),e=t&&new Fn(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}}readMetadata(t){let e=this.source.read(t);if(!e)return Ie;if(e.byteLength<t)throw new Error(O_(t,e.byteLength));return{done:!1,value:Cn.decode(e)}}},lc=class{constructor(t,e){this.source=t instanceof Kn?t:El(t)?new ts(t,e):new Kn(t)}[Symbol.asyncIterator](){return this}next(){return dt(this,void 0,void 0,function*(){let t;return(t=yield this.readMetadataLength()).done?Ie:t.value===-1&&(t=yield this.readMetadataLength()).done?Ie:(t=yield this.readMetadata(t.value)).done?Ie:t})}throw(t){return dt(this,void 0,void 0,function*(){return yield this.source.throw(t)})}return(t){return dt(this,void 0,void 0,function*(){return yield this.source.return(t)})}readMessage(t){return dt(this,void 0,void 0,function*(){let e;if((e=yield this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(cp(t));return e.value})}readMessageBody(t){return dt(this,void 0,void 0,function*(){if(t<=0)return new Uint8Array(0);let e=Lt(yield this.source.read(t));if(e.byteLength<t)throw new Error(F_(t,e.byteLength));return e.byteOffset%8===0&&e.byteOffset+e.byteLength<=e.buffer.byteLength?e:e.slice()})}readSchema(){return dt(this,arguments,void 0,function*(t=!1){let e=ne.Schema,i=yield this.readMessage(e),r=i?.header();if(t&&!r)throw new Error(lp(e));return r})}readMetadataLength(){return dt(this,void 0,void 0,function*(){let t=yield this.source.read(jh),e=t&&new Fn(t),i=e?.readInt32(0)||0;return{done:i===0,value:i}})}readMetadata(t){return dt(this,void 0,void 0,function*(){let e=yield this.source.read(t);if(!e)return Ie;if(e.byteLength<t)throw new Error(O_(t,e.byteLength));return{done:!1,value:Cn.decode(e)}})}},hc=class extends Ho{constructor(t){super(new Uint8Array(0)),this._schema=!1,this._body=[],this._batchIndex=0,this._dictionaryIndex=0,this._json=t instanceof Na?t:new Na(t)}next(){let{_json:t}=this;if(!this._schema)return this._schema=!0,{done:!1,value:Cn.fromJSON(t.schema,ne.Schema)};if(this._dictionaryIndex<t.dictionaries.length){let e=t.dictionaries[this._dictionaryIndex++];return this._body=e.data.columns,{done:!1,value:Cn.fromJSON(e,ne.DictionaryBatch)}}if(this._batchIndex<t.batches.length){let e=t.batches[this._batchIndex++];return this._body=e.columns,{done:!1,value:Cn.fromJSON(e,ne.RecordBatch)}}return this._body=[],Ie}readMessageBody(t){return e(this._body);function e(i){return(i||[]).reduce((r,s)=>[...r,...s.VALIDITY&&[s.VALIDITY]||[],...s.TYPE_ID&&[s.TYPE_ID]||[],...s.OFFSET&&[s.OFFSET]||[],...s.DATA&&[s.DATA]||[],...e(s.children)],[])}}readMessage(t){let e;if((e=this.next()).done)return null;if(t!=null&&e.value.headerType!==t)throw new Error(cp(t));return e.value}readSchema(){let t=ne.Schema,e=this.readMessage(t),i=e?.header();if(!e||!i)throw new Error(lp(t));return i}},jh=4,ap="ARROW1",Go=new Uint8Array(ap.length);for(let n=0;n<ap.length;n+=1)Go[n]=ap.codePointAt(n);function Zh(n,t=0){for(let e=-1,i=Go.length;++e<i;)if(Go[e]!==n[t+e])return!1;return!0}var Wo=Go.length,hp=Wo+jh,z_=Wo*2+jh;var Gn=class n extends Ds{constructor(t){super(),this._impl=t}get closed(){return this._impl.closed}get schema(){return this._impl.schema}get autoDestroy(){return this._impl.autoDestroy}get dictionaries(){return this._impl.dictionaries}get numDictionaries(){return this._impl.numDictionaries}get numRecordBatches(){return this._impl.numRecordBatches}get footer(){return this._impl.isFile()?this._impl.footer:null}isSync(){return this._impl.isSync()}isAsync(){return this._impl.isAsync()}isFile(){return this._impl.isFile()}isStream(){return this._impl.isStream()}next(){return this._impl.next()}throw(t){return this._impl.throw(t)}return(t){return this._impl.return(t)}cancel(){return this._impl.cancel()}reset(t){return this._impl.reset(t),this._DOMStream=void 0,this._nodeStream=void 0,this}open(t){let e=this._impl.open(t);return Bn(e)?e.then(()=>this):this}readRecordBatch(t){return this._impl.isFile()?this._impl.readRecordBatch(t):null}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}toDOMStream(){return sn.toDOMStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this})}toNodeStream(){return sn.toNodeStream(this.isSync()?{[Symbol.iterator]:()=>this}:{[Symbol.asyncIterator]:()=>this},{objectMode:!0})}static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}static from(t){return t instanceof n?t:Al(t)?LA(t):El(t)?BA(t):Bn(t)?dt(this,void 0,void 0,function*(){return yield n.from(yield t)}):Il(t)||pa(t)||Cl(t)||Zn(t)?NA(new Kn(t)):UA(new Hi(t))}static readAll(t){return t instanceof n?t.isSync()?V_(t):k_(t):Al(t)||ArrayBuffer.isView(t)||di(t)||Tl(t)?V_(t):k_(t)}},Ir=class extends Gn{constructor(t){super(t),this._impl=t}readAll(){return[...this]}[Symbol.iterator](){return this._impl[Symbol.iterator]()}[Symbol.asyncIterator](){return Nn(this,arguments,function*(){yield jt(yield*bo(ui(this[Symbol.iterator]())))})}},zs=class extends Gn{constructor(t){super(t),this._impl=t}readAll(){return dt(this,void 0,void 0,function*(){var t,e,i,r;let s=new Array;try{for(var o=!0,a=ui(this),c;c=yield a.next(),t=c.done,!t;o=!0){r=c.value,o=!1;let l=r;s.push(l)}}catch(l){e={error:l}}finally{try{!o&&!t&&(i=a.return)&&(yield i.call(a))}finally{if(e)throw e.error}}return s})}[Symbol.iterator](){throw new Error("AsyncRecordBatchStreamReader is not Iterable")}[Symbol.asyncIterator](){return this._impl[Symbol.asyncIterator]()}},Vs=class extends Ir{constructor(t){super(t),this._impl=t}},$h=class extends zs{constructor(t){super(t),this._impl=t}},Jh=class{get numDictionaries(){return this._dictionaryIndex}get numRecordBatches(){return this._recordBatchIndex}constructor(t=new Map){this.closed=!1,this.autoDestroy=!0,this._dictionaryIndex=0,this._recordBatchIndex=0,this.dictionaries=t}isSync(){return!1}isAsync(){return!1}isFile(){return!1}isStream(){return!1}reset(t){return this._dictionaryIndex=0,this._recordBatchIndex=0,this.schema=t,this.dictionaries=new Map,this}_loadRecordBatch(t,e){let i=this._loadVectors(t,e,this.schema.fields),r=Gt({type:new Ee(this.schema.fields),length:t.length,children:i});return new Fe(this.schema,r)}_loadDictionaryBatch(t,e){let{id:i,isDelta:r}=t,{dictionaries:s,schema:o}=this,a=s.get(i),c=o.dictionaries.get(i),l=this._loadVectors(t.data,e,[c]);return(a&&r?a.concat(new oe(l)):new oe(l)).memoize()}_loadVectors(t,e,i){return new za(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}},Xo=class extends Jh{constructor(t,e){super(e),this._reader=Al(t)?new hc(this._handle=t):new Ho(this._handle=t)}isSync(){return!0}isStream(){return!0}[Symbol.iterator](){return this}cancel(){!this.closed&&(this.closed=!0)&&(this.reset()._reader.return(),this._reader=null,this.dictionaries=null)}open(t){return this.closed||(this.autoDestroy=H_(this,t),this.schema||(this.schema=this._reader.readSchema())||this.cancel()),this}throw(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.throw(t):Ie}return(t){return!this.closed&&this.autoDestroy&&(this.closed=!0)?this.reset()._reader.return(t):Ie}next(){if(this.closed)return Ie;let t,{_reader:e}=this;for(;t=this._readNextMessageAndValidate();)if(t.isSchema())this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;let i=t.header(),r=e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;let i=t.header(),r=e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Fs(this.schema)}):this.return()}_readNextMessageAndValidate(t){return this._reader.readMessage(t)}},Yo=class extends Jh{constructor(t,e){super(e),this._reader=new lc(this._handle=t)}isAsync(){return!0}isStream(){return!0}[Symbol.asyncIterator](){return this}cancel(){return dt(this,void 0,void 0,function*(){!this.closed&&(this.closed=!0)&&(yield this.reset()._reader.return(),this._reader=null,this.dictionaries=null)})}open(t){return dt(this,void 0,void 0,function*(){return this.closed||(this.autoDestroy=H_(this,t),this.schema||(this.schema=yield this._reader.readSchema())||(yield this.cancel())),this})}throw(t){return dt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.throw(t):Ie})}return(t){return dt(this,void 0,void 0,function*(){return!this.closed&&this.autoDestroy&&(this.closed=!0)?yield this.reset()._reader.return(t):Ie})}next(){return dt(this,void 0,void 0,function*(){if(this.closed)return Ie;let t,{_reader:e}=this;for(;t=yield this._readNextMessageAndValidate();)if(t.isSchema())yield this.reset(t.header());else if(t.isRecordBatch()){this._recordBatchIndex++;let i=t.header(),r=yield e.readMessageBody(t.bodyLength);return{done:!1,value:this._loadRecordBatch(i,r)}}else if(t.isDictionaryBatch()){this._dictionaryIndex++;let i=t.header(),r=yield e.readMessageBody(t.bodyLength),s=this._loadDictionaryBatch(i,r);this.dictionaries.set(i.id,s)}return this.schema&&this._recordBatchIndex===0?(this._recordBatchIndex++,{done:!1,value:new Fs(this.schema)}):yield this.return()})}_readNextMessageAndValidate(t){return dt(this,void 0,void 0,function*(){return yield this._reader.readMessage(t)})}},Kh=class extends Xo{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,e){super(t instanceof Ba?t:new Ba(t),e)}isSync(){return!0}isFile(){return!0}open(t){if(!this.closed&&!this._footer){this.schema=(this._footer=this._readFooter()).schema;for(let e of this._footer.dictionaryBatches())e&&this._readDictionaryBatch(this._dictionaryIndex++)}return super.open(t)}readRecordBatch(t){var e;if(this.closed)return null;this._footer||this.open();let i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&this._handle.seek(i.offset)){let r=this._reader.readMessage(ne.RecordBatch);if(r?.isRecordBatch()){let s=r.header(),o=this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,o)}}return null}_readDictionaryBatch(t){var e;let i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&this._handle.seek(i.offset)){let r=this._reader.readMessage(ne.DictionaryBatch);if(r?.isDictionaryBatch()){let s=r.header(),o=this._reader.readMessageBody(r.bodyLength),a=this._loadDictionaryBatch(s,o);this.dictionaries.set(s.id,a)}}}_readFooter(){let{_handle:t}=this,e=t.size-hp,i=t.readInt32(e),r=t.readAt(e-i,i);return xr.decode(r)}_readNextMessageAndValidate(t){var e;if(this._footer||this.open(),this._footer&&this._recordBatchIndex<this.numRecordBatches){let i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(this._recordBatchIndex);if(i&&this._handle.seek(i.offset))return this._reader.readMessage(t)}return null}},up=class extends Yo{get footer(){return this._footer}get numDictionaries(){return this._footer?this._footer.numDictionaries:0}get numRecordBatches(){return this._footer?this._footer.numRecordBatches:0}constructor(t,...e){let i=typeof e[0]!="number"?e.shift():void 0,r=e[0]instanceof Map?e.shift():void 0;super(t instanceof ts?t:new ts(t,i),r)}isFile(){return!0}isAsync(){return!0}open(t){let e=Object.create(null,{open:{get:()=>super.open}});return dt(this,void 0,void 0,function*(){if(!this.closed&&!this._footer){this.schema=(this._footer=yield this._readFooter()).schema;for(let i of this._footer.dictionaryBatches())i&&(yield this._readDictionaryBatch(this._dictionaryIndex++))}return yield e.open.call(this,t)})}readRecordBatch(t){return dt(this,void 0,void 0,function*(){var e;if(this.closed)return null;this._footer||(yield this.open());let i=(e=this._footer)===null||e===void 0?void 0:e.getRecordBatch(t);if(i&&(yield this._handle.seek(i.offset))){let r=yield this._reader.readMessage(ne.RecordBatch);if(r?.isRecordBatch()){let s=r.header(),o=yield this._reader.readMessageBody(r.bodyLength);return this._loadRecordBatch(s,o)}}return null})}_readDictionaryBatch(t){return dt(this,void 0,void 0,function*(){var e;let i=(e=this._footer)===null||e===void 0?void 0:e.getDictionaryBatch(t);if(i&&(yield this._handle.seek(i.offset))){let r=yield this._reader.readMessage(ne.DictionaryBatch);if(r?.isDictionaryBatch()){let s=r.header(),o=yield this._reader.readMessageBody(r.bodyLength),a=this._loadDictionaryBatch(s,o);this.dictionaries.set(s.id,a)}}})}_readFooter(){return dt(this,void 0,void 0,function*(){let{_handle:t}=this;t._pending&&(yield t._pending);let e=t.size-hp,i=yield t.readInt32(e),r=yield t.readAt(e-i,i);return xr.decode(r)})}_readNextMessageAndValidate(t){return dt(this,void 0,void 0,function*(){if(this._footer||(yield this.open()),this._footer&&this._recordBatchIndex<this.numRecordBatches){let e=this._footer.getRecordBatch(this._recordBatchIndex);if(e&&(yield this._handle.seek(e.offset)))return yield this._reader.readMessage(t)}return null})}},dp=class extends Xo{constructor(t,e){super(t,e)}_loadVectors(t,e,i){return new Sh(e,t.nodes,t.buffers,this.dictionaries,this.schema.metadataVersion).visitMany(i)}};function H_(n,t){return t&&typeof t.autoDestroy=="boolean"?t.autoDestroy:n.autoDestroy}function*V_(n){let t=Gn.from(n);try{if(!t.open({autoDestroy:!1}).closed)do yield t;while(!t.reset().open().closed)}finally{t.cancel()}}function k_(n){return Nn(this,arguments,function*(){let e=yield jt(Gn.from(n));try{if(!(yield jt(e.open({autoDestroy:!1}))).closed)do yield yield jt(e);while(!(yield jt(e.reset().open())).closed)}finally{yield jt(e.cancel())}})}function LA(n){return new Ir(new dp(n))}function UA(n){let t=n.peek(Wo+7&-8);return t&&t.byteLength>=4?Zh(t)?new Vs(new Kh(n.read())):new Ir(new Xo(n)):new Ir(new Xo(function*(){}()))}function NA(n){return dt(this,void 0,void 0,function*(){let t=yield n.peek(Wo+7&-8);return t&&t.byteLength>=4?Zh(t)?new Vs(new Kh(yield n.read())):new zs(new Yo(n)):new zs(new Yo(function(){return Nn(this,arguments,function*(){})}()))})}function BA(n){return dt(this,void 0,void 0,function*(){let{size:t}=yield n.stat(),e=new ts(n,t);return t>=z_&&Zh(yield e.readAt(0,Wo+7&-8))?new $h(new up(e)):new zs(new Yo(e))})}var Le=class n extends Et{static assemble(...t){let e=r=>r.flatMap(s=>Array.isArray(s)?e(s):s instanceof Fe?s.data.children:s.data),i=new n;return i.visitMany(e(t)),i}constructor(){super(),this._byteLength=0,this._nodes=[],this._buffers=[],this._bufferRegions=[]}visit(t){if(t instanceof oe)return this.visitMany(t.data),this;let{type:e}=t;if(!pt.isDictionary(e)){let{length:i}=t;if(i>2147483647)throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");if(pt.isUnion(e))this.nodes.push(new ti(i,0));else{let{nullCount:r}=t;pt.isNull(e)||Ei.call(this,r<=0?new Uint8Array(0):Es(t.offset,i,t.nullBitmap)),this.nodes.push(new ti(i,r))}}return super.visit(t)}visitNull(t){return this}visitDictionary(t){return this.visit(t.clone(t.type.indices))}get nodes(){return this._nodes}get buffers(){return this._buffers}get byteLength(){return this._byteLength}get bufferRegions(){return this._bufferRegions}};function Ei(n){let t=n.byteLength+7&-8;return this.buffers.push(n),this.bufferRegions.push(new In(this._byteLength,t)),this._byteLength+=t,this}function OA(n){var t;let{type:e,length:i,typeIds:r,valueOffsets:s}=n;if(Ei.call(this,r),e.mode===Te.Sparse)return fp.call(this,n);if(e.mode===Te.Dense){if(n.offset<=0)return Ei.call(this,s),fp.call(this,n);{let o=new Int32Array(i),a=Object.create(null),c=Object.create(null);for(let l,h,u=-1;++u<i;)(l=r[u])!==void 0&&((h=a[l])===void 0&&(h=a[l]=s[u]),o[u]=s[u]-h,c[l]=((t=c[l])!==null&&t!==void 0?t:0)+1);Ei.call(this,o),this.visitMany(n.children.map((l,h)=>{let u=e.typeIds[h],d=a[u],m=c[u];return l.slice(d,Math.min(i,m))}))}}return this}function FA(n){let t;return n.nullCount>=n.length?Ei.call(this,new Uint8Array(0)):(t=n.values)instanceof Uint8Array?Ei.call(this,Es(n.offset,n.length,t)):Ei.call(this,Is(n.values))}function Rr(n){return Ei.call(this,n.values.subarray(0,n.length*n.stride))}function Qh(n){let{length:t,values:e,valueOffsets:i}=n,r=he(i[0]),s=he(i[t]),o=Math.min(s-r,e.byteLength-r);return Ei.call(this,Pl(-r,t+1,i)),Ei.call(this,e.subarray(r,r+o)),this}function pp(n){let{length:t,valueOffsets:e}=n;if(e){let{[0]:i,[t]:r}=e;return Ei.call(this,Pl(-i,t+1,e)),this.visit(n.children[0].slice(i,r-i))}return this.visit(n.children[0])}function fp(n){return this.visitMany(n.type.children.map((t,e)=>n.children[e]).filter(Boolean))[0]}Le.prototype.visitBool=FA;Le.prototype.visitInt=Rr;Le.prototype.visitFloat=Rr;Le.prototype.visitUtf8=Qh;Le.prototype.visitLargeUtf8=Qh;Le.prototype.visitBinary=Qh;Le.prototype.visitLargeBinary=Qh;Le.prototype.visitFixedSizeBinary=Rr;Le.prototype.visitDate=Rr;Le.prototype.visitTimestamp=Rr;Le.prototype.visitTime=Rr;Le.prototype.visitDecimal=Rr;Le.prototype.visitList=pp;Le.prototype.visitStruct=fp;Le.prototype.visitUnion=OA;Le.prototype.visitInterval=Rr;Le.prototype.visitDuration=Rr;Le.prototype.visitFixedSizeList=pp;Le.prototype.visitMap=pp;var ks=class extends Ds{static throughNode(t){throw new Error('"throughNode" not available in this environment')}static throughDOM(t,e){throw new Error('"throughDOM" not available in this environment')}constructor(t){super(),this._position=0,this._started=!1,this._sink=new ki,this._schema=null,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,_n(t)||(t={autoDestroy:!0,writeLegacyIpcFormat:!1}),this._autoDestroy=typeof t.autoDestroy=="boolean"?t.autoDestroy:!0,this._writeLegacyIpcFormat=typeof t.writeLegacyIpcFormat=="boolean"?t.writeLegacyIpcFormat:!1}toString(t=!1){return this._sink.toString(t)}toUint8Array(t=!1){return this._sink.toUint8Array(t)}writeAll(t){return Bn(t)?t.then(e=>this.writeAll(e)):Zn(t)?gp(this,t):mp(this,t)}get closed(){return this._sink.closed}[Symbol.asyncIterator](){return this._sink[Symbol.asyncIterator]()}toDOMStream(t){return this._sink.toDOMStream(t)}toNodeStream(t){return this._sink.toNodeStream(t)}close(){return this.reset()._sink.close()}abort(t){return this.reset()._sink.abort(t)}finish(){return this._autoDestroy?this.close():this.reset(this._sink,this._schema),this}reset(t=this._sink,e=null){return t===this._sink||t instanceof ki?this._sink=t:(this._sink=new ki,t&&rg(t)?this.toDOMStream({type:"bytes"}).pipeTo(t):t&&sg(t)&&this.toNodeStream({objectMode:!1}).pipe(t)),this._started&&this._schema&&this._writeFooter(this._schema),this._started=!1,this._dictionaryBlocks=[],this._recordBatchBlocks=[],this._seenDictionaries=new Map,this._dictionaryDeltaOffsets=new Map,(!e||!Os(e,this._schema))&&(e==null?(this._position=0,this._schema=null):(this._started=!0,this._schema=e,this._writeSchema(e))),this}write(t){let e=null;if(this._sink){if(t==null)return this.finish()&&void 0;if(t instanceof En&&!(e=t.schema))return this.finish()&&void 0;if(t instanceof Fe&&!(e=t.schema))return this.finish()&&void 0}else throw new Error("RecordBatchWriter is closed");if(e&&!Os(e,this._schema)){if(this._started&&this._autoDestroy)return this.close();this.reset(this._sink,e)}t instanceof Fe?t instanceof Fs||this._writeRecordBatch(t):t instanceof En?this.writeAll(t.batches):di(t)&&this.writeAll(t)}_writeMessage(t,e=8){let i=e-1,r=Cn.encode(t),s=r.byteLength,o=this._writeLegacyIpcFormat?4:8,a=s+o+i&~i,c=a-s-o;return t.headerType===ne.RecordBatch?this._recordBatchBlocks.push(new br(a,t.bodyLength,this._position)):t.headerType===ne.DictionaryBatch&&this._dictionaryBlocks.push(new br(a,t.bodyLength,this._position)),this._writeLegacyIpcFormat||this._write(Int32Array.of(-1)),this._write(Int32Array.of(a-o)),s>0&&this._write(r),this._writePadding(c)}_write(t){if(this._started){let e=Lt(t);e&&e.byteLength>0&&(this._sink.write(e),this._position+=e.byteLength)}return this}_writeSchema(t){return this._writeMessage(Cn.from(t))}_writeFooter(t){return this._writeLegacyIpcFormat?this._write(Int32Array.of(0)):this._write(Int32Array.of(-1,0))}_writeMagic(){return this._write(Go)}_writePadding(t){return t>0?this._write(new Uint8Array(t)):this}_writeRecordBatch(t){let{byteLength:e,nodes:i,bufferRegions:r,buffers:s}=Le.assemble(t),o=new an(t.numRows,i,r),a=Cn.from(o,e);return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s)}_writeDictionaryBatch(t,e,i=!1){let{byteLength:r,nodes:s,bufferRegions:o,buffers:a}=Le.assemble(new oe([t])),c=new an(t.length,s,o),l=new Rn(c,e,i),h=Cn.from(l,r);return this._writeMessage(h)._writeBodyBuffers(a)}_writeBodyBuffers(t){let e,i,r;for(let s=-1,o=t.length;++s<o;)(e=t[s])&&(i=e.byteLength)>0&&(this._write(e),(r=(i+7&-8)-i)>0&&this._writePadding(r));return this}_writeDictionaries(t){var e,i;for(let[r,s]of t.dictionaries){let o=(e=s?.data)!==null&&e!==void 0?e:[],a=this._seenDictionaries.get(r),c=(i=this._dictionaryDeltaOffsets.get(r))!==null&&i!==void 0?i:0;if(!a||a.data[0]!==o[0])for(let[l,h]of o.entries())this._writeDictionaryBatch(h,r,l>0);else if(c<o.length)for(let l of o.slice(c))this._writeDictionaryBatch(l,r,!0);this._seenDictionaries.set(r,s),this._dictionaryDeltaOffsets.set(r,o.length)}return this}},uc=class n extends ks{static writeAll(t,e){let i=new n(e);return Bn(t)?t.then(r=>i.writeAll(r)):Zn(t)?gp(i,t):mp(i,t)}},dc=class n extends ks{static writeAll(t){let e=new n;return Bn(t)?t.then(i=>e.writeAll(i)):Zn(t)?gp(e,t):mp(e,t)}constructor(){super(),this._autoDestroy=!0}_writeSchema(t){return this._writeMagic()._writePadding(2)}_writeDictionaryBatch(t,e,i=!1){if(!i&&this._seenDictionaries.has(e))throw new Error("The Arrow File format does not support replacement dictionaries. ");return super._writeDictionaryBatch(t,e,i)}_writeFooter(t){let e=xr.encode(new xr(t,xe.V5,this._recordBatchBlocks,this._dictionaryBlocks));return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()}};function mp(n,t){let e=t;t instanceof En&&(e=t.batches,n.reset(void 0,t.schema));for(let i of e)n.write(i);return n.finish()}function gp(n,t){return dt(this,void 0,void 0,function*(){var e,i,r,s,o,a,c;try{for(e=!0,i=ui(t);r=yield i.next(),s=r.done,!s;e=!0){c=r.value,e=!1;let l=c;n.write(l)}}catch(l){o={error:l}}finally{try{!e&&!s&&(a=i.return)&&(yield a.call(i))}finally{if(o)throw o.error}}return n.finish()})}function G_(n,t){if(Zn(n))return VA(n,t);if(di(n))return zA(n,t);throw new Error("toDOMStream() must be called with an Iterable or AsyncIterable")}function zA(n,t){let e=null,i=t?.type==="bytes"||!1,r=t?.highWaterMark||Math.pow(2,24);return new ReadableStream(Object.assign(Object.assign({},t),{start(o){s(o,e||(e=n[Symbol.iterator]()))},pull(o){e?s(o,e):o.close()},cancel(){(e?.return&&e.return()||!0)&&(e=null)}}),Object.assign({highWaterMark:i?r:void 0},t));function s(o,a){let c,l=null,h=o.desiredSize||null;for(;!(l=a.next(i?h:null)).done;)if(ArrayBuffer.isView(l.value)&&(c=Lt(l.value))&&(h!=null&&i&&(h=h-c.byteLength+1),l.value=c),o.enqueue(l.value),h!=null&&--h<=0)return;o.close()}}function VA(n,t){let e=null,i=t?.type==="bytes"||!1,r=t?.highWaterMark||Math.pow(2,24);return new ReadableStream(Object.assign(Object.assign({},t),{start(o){return dt(this,void 0,void 0,function*(){yield s(o,e||(e=n[Symbol.asyncIterator]()))})},pull(o){return dt(this,void 0,void 0,function*(){e?yield s(o,e):o.close()})},cancel(){return dt(this,void 0,void 0,function*(){(e?.return&&(yield e.return())||!0)&&(e=null)})}}),Object.assign({highWaterMark:i?r:void 0},t));function s(o,a){return dt(this,void 0,void 0,function*(){let c,l=null,h=o.desiredSize||null;for(;!(l=yield a.next(i?h:null)).done;)if(ArrayBuffer.isView(l.value)&&(c=Lt(l.value))&&(h!=null&&i&&(h=h-c.byteLength+1),l.value=c),o.enqueue(l.value),h!=null&&--h<=0)return;o.close()})}}function Y_(n){return new _p(n)}var _p=class{constructor(t){this._numChunks=0,this._finished=!1,this._bufferedSize=0;let{["readableStrategy"]:e,["writableStrategy"]:i,["queueingStrategy"]:r="count"}=t,s=ng(t,["readableStrategy","writableStrategy","queueingStrategy"]);this._controller=null,this._builder=Ls(s),this._getSize=r!=="bytes"?W_:X_;let{["highWaterMark"]:o=r==="bytes"?Math.pow(2,14):1e3}=Object.assign({},e),{["highWaterMark"]:a=r==="bytes"?Math.pow(2,14):1e3}=Object.assign({},i);this.readable=new ReadableStream({cancel:()=>{this._builder.clear()},pull:c=>{this._maybeFlush(this._builder,this._controller=c)},start:c=>{this._maybeFlush(this._builder,this._controller=c)}},{highWaterMark:o,size:r!=="bytes"?W_:X_}),this.writable=new WritableStream({abort:()=>{this._builder.clear()},write:()=>{this._maybeFlush(this._builder,this._controller)},close:()=>{this._maybeFlush(this._builder.finish(),this._controller)}},{highWaterMark:a,size:c=>this._writeValueAndReturnChunkSize(c)})}_writeValueAndReturnChunkSize(t){let e=this._bufferedSize;return this._bufferedSize=this._getSize(this._builder.append(t)),this._bufferedSize-e}_maybeFlush(t,e){e!=null&&(this._bufferedSize>=e.desiredSize&&++this._numChunks&&this._enqueue(e,t.toVector()),t.finished&&((t.length>0||this._numChunks===0)&&++this._numChunks&&this._enqueue(e,t.toVector()),!this._finished&&(this._finished=!0)&&this._enqueue(e,null)))}_enqueue(t,e){this._bufferedSize=0,this._controller=null,e==null?t.close():t.enqueue(e)}},W_=n=>{var t;return(t=n?.length)!==null&&t!==void 0?t:0},X_=n=>{var t;return(t=n?.byteLength)!==null&&t!==void 0?t:0};function tu(n,t){let e=new ki,i=null,r=new ReadableStream({cancel(){return dt(this,void 0,void 0,function*(){yield e.close()})},start(a){return dt(this,void 0,void 0,function*(){yield o(a,i||(i=yield s()))})},pull(a){return dt(this,void 0,void 0,function*(){i?yield o(a,i):a.close()})}});return{writable:new WritableStream(e,Object.assign({highWaterMark:Math.pow(2,14)},n)),readable:r};function s(){return dt(this,void 0,void 0,function*(){return yield(yield Gn.from(e)).open(t)})}function o(a,c){return dt(this,void 0,void 0,function*(){let l=a.desiredSize,h=null;for(;!(h=yield c.next()).done;)if(a.enqueue(h.value),l!=null&&--l<=0)return;a.close()})}}function eu(n,t){let e=new this(n),i=new Kn(e),r=new ReadableStream({cancel(){return dt(this,void 0,void 0,function*(){yield i.cancel()})},pull(o){return dt(this,void 0,void 0,function*(){yield s(o)})},start(o){return dt(this,void 0,void 0,function*(){yield s(o)})}},Object.assign({highWaterMark:Math.pow(2,14)},t));return{writable:new WritableStream(e,n),readable:r};function s(o){return dt(this,void 0,void 0,function*(){let a=null,c=o.desiredSize;for(;a=yield i.read(c||null);)if(o.enqueue(a),c!=null&&(c-=a.byteLength)<=0)return;o.close()})}}function qo(n){let t=Gn.from(n);return Bn(t)?t.then(e=>qo(e)):t.isAsync()?t.readAll().then(e=>new En(e)):new En(t.readAll())}var HA=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Rf),tp),Xf),Cf),Sf),Wf),Af),{compareSchemas:Os,compareFields:x_,compareTypes:b_});sn.toDOMStream=G_;De.throughDOM=Y_;Gn.throughDOM=tu;Vs.throughDOM=tu;Ir.throughDOM=tu;ks.throughDOM=eu;dc.throughDOM=eu;uc.throughDOM=eu;fe.enabled=!1;var GA=new URLSearchParams(location.search),WA=(window.MESHVIEW_DATA||GA.get("data")||"data").replace(/\/$/,""),Ye=n=>document.getElementById(n);async function XA(n,t=!1){let e=await fetch(n);if(!e.ok){if(t)return null;throw new Error("could not read "+n+" ("+e.status+")")}return qo(new Uint8Array(await e.arrayBuffer()))}function cn(n,t){let e=n&&n.getChild(t);return e?e.toArray():null}function YA(n,t){return n?n.schema.metadata.get(t):void 0}var nu=[[68,1,84],[59,82,139],[33,145,140],[94,201,98],[253,231,37]];function qA(n,t,e){if(!Number.isFinite(n)){t[e]=.36,t[e+1]=.33,t[e+2]=.4;return}n=Math.min(1,Math.max(0,n))*(nu.length-1);let i=Math.min(nu.length-2,Math.floor(n)),r=n-i;for(let s=0;s<3;s++)t[e+s]=(nu[i][s]*(1-r)+nu[i+1][s]*r)/255}function jA(n,t,e){let i=Array.from(n).filter(Number.isFinite).sort((r,s)=>r-s);return i.length?[i[Math.floor(t*(i.length-1))],i[Math.floor(e*(i.length-1))]]:[0,1]}var ZA={1:[.62,.62,.62],2:[.55,.4,.25],3:[.55,.75,.35],4:[.35,.65,.25],5:[.15,.45,.15],6:[.85,.3,.25],7:[.85,.2,.75],9:[.25,.45,.85]};function Ii(n,t=3){return n==null?"":typeof n=="bigint"?n.toString():typeof n=="number"?Number.isFinite(n)?Number.isInteger(n)?String(n):n.toFixed(Math.abs(n)>=1e5?2:t):"NA":String(n)}function $A(){let n={vertices:"mesh",triangles:"mesh",face_points:"mesh",face_stats:"mesh",points:"points",sources:"points"};return(t,e)=>XA(WA+"/"+n[t]+"/"+t+".arrows",e)}function JA(n){let t={};for(let e of n)t[e.name.replace(/\.arrows$/,"")]=e;return async(e,i)=>{let r=t[e];if(!r){if(i)return null;throw new Error("no "+e+".arrows among the chosen files")}return qo(new Uint8Array(await r.arrayBuffer()))}}var iu=!1;function q_(n){iu||!n||!n.length||(iu=!0,Ye("drop").hidden=!0,Z_(JA(Array.from(n))).catch(j_))}function j_(n){Ye("status").textContent="Error: "+n.message,console.error(n)}async function Z_(n){Ye("status").textContent="Reading tables ...";let[t,e,i,r,s,o]=await Promise.all([n("vertices"),n("triangles"),n("face_points",!0),n("face_stats",!0),n("points",!0),n("sources",!0)]),a=YA(t,"crs")||"unknown CRS",c=cn(t,"x"),l=cn(t,"y"),h=cn(t,"z"),u=cn(t,"input_row"),d=cn(e,"v0"),m=cn(e,"v1"),_=cn(e,"v2"),v=d.length,p=1/0,f=-1/0,w=1/0,S=-1/0,A=1/0,F=-1/0;for(let L=0;L<c.length;L++)c[L]<p&&(p=c[L]),c[L]>f&&(f=c[L]),l[L]<w&&(w=l[L]),l[L]>S&&(S=l[L]),h[L]<A&&(A=h[L]),h[L]>F&&(F=h[L]);let C=[(p+f)/2,(w+S)/2,A],T=new Float32Array(v*9),z=new Uint8Array(v*9);for(let L=0;L<v;L++){let q=L+1,rt=q&255,_t=q>>8&255,J=q>>16&255,kt=[d[L],m[L],_[L]];for(let Bt=0;Bt<3;Bt++){let qt=kt[Bt],I=L*9+Bt*3;T[I]=c[qt]-C[0],T[I+1]=l[qt]-C[1],T[I+2]=h[qt]-C[2],z[I]=rt,z[I+1]=_t,z[I+2]=J}}let nt=new gn;nt.setAttribute("position",new Ge(T,3)),nt.computeVertexNormals();let g=new Float32Array(v*9);nt.setAttribute("color",new Ge(g,3));let b=new gn;b.setAttribute("position",nt.getAttribute("position")),b.setAttribute("color",new Ge(z,3,!0));let W=null,V=null,Y=null;if(i){let L=cn(i,"face");V=cn(i,"point"),Y=cn(i,"dz"),W=new Int32Array(v+1);for(let q=0;q<L.length;q++)W[L[q]+1]++;for(let q=0;q<v;q++)W[q+1]+=W[q]}let Q={},k=new Float64Array(v);for(let L=0;L<v;L++)k[L]=(h[d[L]]+h[m[L]]+h[_[L]])/3;if(Q["height (z)"]=k,r)for(let L of r.schema.fields){if(L.name==="face")continue;let q=cn(r,L.name);q&&typeof q[0]!="bigint"&&typeof q[0]!="string"&&(Q[L.name]=q)}let et=Ye("colourby");for(let L of Object.keys(Q)){let q=document.createElement("option");q.value=q.textContent=L,et.appendChild(q)}Q.dz_max&&(et.value="dz_max");function G(){let L=Q[et.value],[q,rt]=jA(L,.02,.98);for(let _t=0;_t<v;_t++){let J=_t*9;qA((L[_t]-q)/(rt-q||1),g,J),g[J+3]=g[J+6]=g[J],g[J+4]=g[J+7]=g[J+1],g[J+5]=g[J+8]=g[J+2]}nt.getAttribute("color").needsUpdate=!0,Ye("legend").textContent=et.value+": "+Ii(q,2)+" to "+Ii(rt,2)+" (2nd to 98th percentile)"+(Array.prototype.some.call(L,_t=>!Number.isFinite(_t))?"; muted: no value":"")}et.addEventListener("change",G),G();let st=Ye("view"),lt=new hl({canvas:st,antialias:!0,preserveDrawingBuffer:!0});lt.setPixelRatio(Math.min(2,window.devicePixelRatio));let vt=new ca;vt.background=new ee(getComputedStyle(document.body).getPropertyValue("--canvas").trim()||"#20242a");let ae=new ca;ae.background=new ee(0,0,0);let ce=Math.max(f-p,S-w),X=new mn(45,1,ce/1e3,ce*20);X.up.set(0,0,1),X.position.set(0,-ce*.9,ce*.7);let tt=new wl(X,st);tt.target.set(0,0,(F-A)/2),tt.update();let mt=new Qi,ft=new Qi;vt.add(mt),ae.add(ft),vt.add(new _l(16777215,4473924,2.2));let Yt=new yl(16777215,1.2);Yt.position.set(-1,-1,2),vt.add(Yt);let Ut=new Sn(nt,new pl({vertexColors:!0,side:Yn}));mt.add(Ut),ft.add(new Sn(b,new mo({vertexColors:!0,side:Yn})));let $t=null,de=null,ie=null,E=null,qe=null,re=null,se=null;if(s){$t=cn(s,"x"),de=cn(s,"y"),ie=cn(s,"z"),E=cn(s,"classification"),qe=cn(s,"source"),re=cn(s,"id");let L=$t.length,q=new Float32Array(L*3),rt=new Float32Array(L*3);for(let J=0;J<L;J++){q[J*3]=$t[J]-C[0],q[J*3+1]=de[J]-C[1],q[J*3+2]=ie[J]-C[2];let kt=ZA[E?E[J]:1]||[.9,.9,.5];rt[J*3]=kt[0],rt[J*3+1]=kt[1],rt[J*3+2]=kt[2]}let _t=new gn;_t.setAttribute("position",new Ge(q,3)),_t.setAttribute("color",new Ge(rt,3)),se=new ha(_t,new _o({size:2,sizeAttenuation:!1,vertexColors:!0})),se.visible=!1,mt.add(se)}let zt=Ye("showpoints");zt.disabled=!se,zt.addEventListener("change",()=>{se.visible=zt.checked,Ut.visible=!Ye("hidemesh").checked}),Ye("hidemesh").addEventListener("change",()=>{Ut.visible=!Ye("hidemesh").checked});let Se=Ye("exag");Se.addEventListener("input",()=>{let L=Number(Se.value);mt.scale.set(1,1,L),ft.scale.set(1,1,L),Ye("exagval").textContent=L.toFixed(1)+"x"});let Nt=new fl(new gn,new la({color:16765952,depthTest:!1}));Nt.renderOrder=2,mt.add(Nt);let M=new ha(new gn,new _o({size:5,sizeAttenuation:!1,color:16765952,depthTest:!1}));M.renderOrder=3,mt.add(M);let y=new ci(1,1),N=new Uint8Array(4);function Z(L,q){let rt=st.clientWidth,_t=st.clientHeight,J=lt.getPixelRatio();X.setViewOffset(rt*J,_t*J,Math.floor(L*J),Math.floor(q*J),1,1),lt.setRenderTarget(y),lt.render(ae,X),lt.readRenderTargetPixels(y,0,0,1,1,N),lt.setRenderTarget(null),X.clearViewOffset();let kt=N[0]|N[1]<<8|N[2]<<16;return kt>0?kt-1:-1}let K=!1,j=-1;function xt(L){if(L===j)return;if(j=L,L<0){Nt.visible=M.visible=!1,Ye("info").innerHTML='<p class="hint">Hover over the surface to read a face. Click to pin it.</p>';return}Nt.geometry.setAttribute("position",new Ge(T.slice(L*9,L*9+9),3)),Nt.visible=!0;let q="<h2>Face "+L+'</h2><p class="sub">row '+L+" on the wire (0-based), row "+(L+1)+" in R</p>";if(q+="<table>",r)for(let rt of r.schema.fields)rt.name!=="face"&&(q+="<tr><th>"+rt.name+"</th><td>"+Ii(r.getChild(rt.name).get(L))+"</td></tr>");else q+="<tr><th>z</th><td>"+Ii(k[L])+"</td></tr>";q+='</table><h3>Vertices</h3><table class="rows"><tr><th>row</th><th>x</th><th>y</th><th>z</th><th>point</th></tr>';for(let rt of[d[L],m[L],_[L]])q+="<tr><td>"+rt+"</td><td>"+Ii(c[rt],2)+"</td><td>"+Ii(l[rt],2)+"</td><td>"+Ii(h[rt],2)+"</td><td>"+(u?Ii(u[rt]):"")+"</td></tr>";if(q+="</table>",W){let rt=W[L],_t=W[L+1];if(q+="<h3>Returns in this face: "+(_t-rt)+"</h3>",_t>rt&&$t){let J=new Float32Array((_t-rt)*3),kt=[];for(let qt=rt;qt<_t;qt++){let I=V[qt],at=(qt-rt)*3;J[at]=$t[I]-C[0],J[at+1]=de[I]-C[1],J[at+2]=ie[I]-C[2],kt.push(qt)}M.geometry.setAttribute("position",new Ge(J,3)),M.visible=!0,kt.sort((qt,I)=>Y[I]-Y[qt]),q+='<p class="sub">Highest above the surface first. Each return names its source file and its position in that file.</p>',q+='<table class="rows"><tr><th>point</th><th>class</th><th>dz</th><th>z</th><th>file</th><th>id</th></tr>';for(let qt of kt.slice(0,12)){let I=V[qt],at=qe?qe[I]:null,H=o&&at!==null?o.getChild("key")?o.getChild("key").get(at):at:"";q+="<tr><td>"+I+"</td><td>"+(E?E[I]:"")+"</td><td>"+Ii(Y[qt],2)+"</td><td>"+Ii(ie[I],2)+"</td><td>"+H+"</td><td>"+Ii(re?re[I]:"")+"</td></tr>"}q+="</table>",_t-rt>12&&(q+='<p class="sub">and '+(_t-rt-12)+" more</p>");let Bt=qe?qe[V[kt[0]]]:null;if(o&&Bt!==null){let qt=String(o.getChild("dsn").get(Bt));q+='<p class="sub">Top return comes from <a href="'+qt+'" target="_blank" rel="noopener">'+qt.split("/").slice(-3).join("/")+"</a></p>"}}else M.visible=!1}Ye("info").innerHTML=q}st.addEventListener("pointermove",L=>{if(K||L.buttons)return;let q=st.getBoundingClientRect();xt(Z(L.clientX-q.left,L.clientY-q.top))});let ot=null;st.addEventListener("pointerdown",L=>{ot=[L.clientX,L.clientY]}),st.addEventListener("pointerup",L=>{if(!ot||Math.hypot(L.clientX-ot[0],L.clientY-ot[1])>4)return;let q=st.getBoundingClientRect(),rt=Z(L.clientX-q.left,L.clientY-q.top);K=rt>=0,j=-2,xt(rt),Ye("pin").textContent=K?"Pinned: click empty ground or the background to release":""});function gt(){let L=st.clientWidth,q=st.clientHeight;lt.setSize(L,q,!1),X.aspect=L/q,X.updateProjectionMatrix()}new ResizeObserver(gt).observe(st),gt(),lt.setAnimationLoop(()=>{tt.update(),lt.render(vt,X)});let le=$t?$t.length:0;Ye("status").textContent=v.toLocaleString()+" faces, "+c.length.toLocaleString()+" vertices, "+le.toLocaleString()+" returns. "+a+", local origin "+C.map(L=>L.toFixed(1)).join(", "),xt(-1),window.meshview={pickAt:Z,show:xt,camera:X,controls:tt,nf:v}}Ye("files").addEventListener("change",n=>q_(n.target.files));window.addEventListener("dragover",n=>n.preventDefault());window.addEventListener("drop",n=>{n.preventDefault(),q_(n.dataTransfer.files)});location.protocol==="file:"&&!window.MESHVIEW_DATA?Ye("status").textContent="Choose or drop the .arrows files from write_mesh_arrow().":(Ye("drop").hidden=!0,iu=!0,Z_($A()).catch(n=>{iu=!1,Ye("drop").hidden=!1,j_(n)}));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

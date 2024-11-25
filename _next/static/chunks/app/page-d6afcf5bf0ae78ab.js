(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3715:(n,t,e)=>{Promise.resolve().then(e.bind(e,922))},922:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>nz});var r=e(698),o=e(5155),i=e(2115),u=e(5285),s=e(7756);let c=()=>{let[n,t]=(0,i.useState)([]),[e,r]=(0,s.A)("ownedCards",[]);return(0,i.useEffect)(()=>{fetch("/data/pokemon_with_booster.json").then(n=>n.json()).then(n=>t(n))},[]),{pokemons:n,ownedCards:e,toggleOwnedCard:n=>{r((null==e?void 0:e.includes(n))?e.filter(t=>t!==n):[...e||[],n])},isOwned:n=>(null==e?void 0:e.includes(n))||!1}};function a(){let n=(0,r._)(["\n  border-radius: 12px;\n  padding: 16px;\n  font-family: 'Arial', sans-serif;\n  text-align: center;\n  margin: 16px 0;\n"]);return a=function(){return n},n}function d(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]);return d=function(){return n},n}function l(){let n=(0,r._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  }\n"]);return l=function(){return n},n}function f(){let n=(0,r._)(["\n  color: #007bff;\n  font-weight: bold;\n"]);return f=function(){return n},n}function p(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"]);return p=function(){return n},n}function x(){let n=(0,r._)(["\n  width: 100px;\n  height: 8px;\n  background: #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: ","%;\n    background: #007bff;\n    transition: width 0.3s ease-in-out;\n  }\n"]);return x=function(){return n},n}function h(){let n=(0,r._)(["\n  font-size: 14px;\n  color: #555;\n  font-weight: bold;\n"]);return h=function(){return n},n}function g(){let n=(0,r._)(["\n  background: #f3f4f6;\n  padding: 4px 8px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n"]);return g=function(){return n},n}function b(){let n=(0,r._)(["\n  color: #28a745;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 16px;\n"]);return b=function(){return n},n}let m=u.Ay.div(a()),w=u.Ay.div(d()),y=u.Ay.div(l()),v=u.Ay.span(f()),j=u.Ay.div(p()),_=u.Ay.div(x(),n=>n.percentage),A=u.Ay.span(h()),k=u.Ay.span(g()),O=u.Ay.div(b()),z=n=>{let{pokemons:t,ownedCards:e}=n,r=(0,i.useMemo)(()=>Object.entries(t.reduce((n,t)=>{let r=t.booster;return r&&(n[r]||(n[r]={total:0,missing:0,owned:0}),n[r].total+=1,e.includes(t.cardNumber)?n[r].owned+=1:n[r].missing+=1),n},{})).sort((n,t)=>{let[,e]=n,[,r]=t;return r.missing-e.missing}),[t,e]);return(0,o.jsx)(m,{children:0===r.length?(0,o.jsx)(O,{children:"Vous avez toutes les cartes ! \uD83C\uDF89"}):(0,o.jsx)(w,{children:r.map(n=>{let[t,{total:e,missing:r,owned:i}]=n,u=Math.round(i/e*100);return(0,o.jsxs)(y,{children:[(0,o.jsxs)(v,{children:["Booster ",t]}),(0,o.jsxs)(j,{children:[(0,o.jsx)(_,{percentage:u}),(0,o.jsxs)(A,{children:[u,"% poss\xe9d\xe9es"]})]}),(0,o.jsxs)(k,{children:[r," ",r>1?"cartes manquantes":"carte manquante"]})]},t)})})})};function C(){let n=(0,r._)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return C=function(){return n},n}function N(){let n=(0,r._)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return N=function(){return n},n}function I(){let n=(0,r._)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60px;\n  height: 60px;\n  background-color: #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #000;\n  animation: "," 0.8s linear infinite;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 60px;\n    height: 30px;\n    background-color: red;\n    border-bottom: 4px solid #000;\n    top: -1px;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    background-color: #fff;\n    width: 14px;\n    height: 14px;\n    border: 4px solid #000;\n    border-radius: 50%;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1;\n  }\n"]);return I=function(){return n},n}let S=(0,u.i7)(C()),$=u.Ay.div(N()),D=u.Ay.div(I(),S),E=function(){return(0,o.jsx)($,{children:(0,o.jsx)(D,{})})};function M(){let n=(0,r._)(["\n  display: flex;\n  gap: 12px;\n  margin-bottom: 16px;\n  justify-content: center;\n"]);return M=function(){return n},n}function R(){let n=(0,r._)(["\n  color: ",";\n  background-color: ",";\n  border: ",";\n  box-shadow: ",";\n"]);return R=function(){return n},n}function P(){let n=(0,r._)(["\n  padding: 10px 24px;\n  font-size: 1rem;\n  border-radius: 12px;\n  cursor: pointer;\n  transition: all 0.3s;\n\n  ","\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return P=function(){return n},n}function T(){let n=(0,r._)(["\n  padding: 12px;\n  font-size: 1rem;\n  width: 300px;\n  border: 2px solid #cfd8dc;\n  border-radius: 12px;\n  outline: none;\n  transition: border-color 0.3s;\n\n  &:focus {\n    border-color: #3b4cca;\n  }\n"]);return T=function(){return n},n}let q=u.I4.div(M()),L=(0,u.AH)(R(),n=>n.$active?"#ffffff":"#3b4cca",n=>n.$active?"#3b4cca":"#ffffff",n=>n.$active?"none":"2px solid #3b4cca",n=>n.$active?"0 4px 12px rgba(59, 76, 202, 0.3)":"none"),W=u.I4.button(P(),L,n=>n.$active?"#2c3e8b":"#f0f8ff"),Y=u.I4.input(T()),B=n=>{let{showOnlyNotOwned:t,setShowOnlyNotOwned:e,search:r,setSearch:i}=n;return(0,o.jsxs)(q,{children:[(0,o.jsx)(W,{$active:t||void 0,onClick:()=>e(!t),children:t?"Tout montrer":"Montrer les non-poss\xe9d\xe9s"}),(0,o.jsx)(Y,{type:"text",placeholder:"Rechercher un Pok\xe9mon...",value:r,onChange:n=>i(n.target.value)})]})};var F=function(n){return n.STAR="star",n.DIAMOND="diamond",n.CROWN="crown",n}({});function G(){let n=(0,r._)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 8px;\n"]);return G=function(){return n},n}function H(){let n=(0,r._)(["\n  height: 24px;\n  width: 24px;\n  margin: 0 2px;\n"]);return H=function(){return n},n}let V=u.I4.div(G()),X=u.I4.img(H()),J={[F.DIAMOND]:"/icons/diamond.png",[F.STAR]:"/icons/star.png",[F.CROWN]:"/icons/crown.png"},K=n=>{let{type:t,count:e}=n;return t&&e?(0,o.jsx)(V,{children:Array.from({length:e}).map((n,e)=>(0,o.jsx)(X,{src:J[t],alt:"".concat(t," icon")},"".concat(t,"-").concat(e)))}):null};function Q(){let n=(0,r._)(["\n  background: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n  border-radius: 12px;\n  overflow: hidden;\n  padding: 16px;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    transform: translateY(-5px);\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);\n  }\n"]);return Q=function(){return n},n}function U(){let n=(0,r._)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"]);return U=function(){return n},n}function Z(){let n=(0,r._)(["\n  width: 120px;\n  height: auto;\n  padding-bottom: 16px;\n  transition: transform 0.2s ease-in-out;\n\n  ",":hover & {\n    transform: scale(1.1);\n  }\n"]);return Z=function(){return n},n}function nn(){let n=(0,r._)(["\n  padding: 16px;\n  text-align: center;\n"]);return nn=function(){return n},n}function nt(){let n=(0,r._)(["\n  color: #333;\n  font-size: 20px;\n  font-weight: bold;\n  margin: 0;\n"]);return nt=function(){return n},n}function ne(){let n=(0,r._)(["\n  font-size: 14px;\n  color: #555;\n  margin: 8px 0 0;\n"]);return ne=function(){return n},n}function nr(){let n=(0,r._)(["\n  height: 20px;\n  width: auto;\n"]);return nr=function(){return n},n}function no(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return no=function(){return n},n}let ni=u.Ay.div(Q()),nu=u.Ay.div(U()),ns=u.Ay.img(Z(),ni),nc=u.Ay.div(nn()),na=u.Ay.h3(nt()),nd=u.Ay.p(ne()),nl=u.Ay.img(nr()),nf=u.Ay.div(no()),np=n=>{let{pokemon:t,isOwned:e,toggleOwned:r}=n,{name:i,cardNumber:u,ex:s,rarity:c}=t,{type:a,count:d}=c;return(0,o.jsxs)(ni,{$owned:!!e,$cardNumber:u,onClick:()=>r(u),children:[(0,o.jsx)(nu,{children:(0,o.jsx)(ns,{src:e?"/pokemon/".concat(u,".png"):"/card.jpg",alt:i})}),(0,o.jsxs)(nc,{children:[(0,o.jsxs)(nf,{children:[(0,o.jsx)(na,{children:i}),s?(0,o.jsx)(nl,{src:"/icons/ex.png",alt:"EX"}):null]}),(0,o.jsxs)(nd,{children:["#",u,"/",226]}),(0,o.jsx)(K,{type:a,count:d})]})]})};function nx(){let n=(0,r._)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-top: 16px;\n"]);return nx=function(){return n},n}function nh(){let n=(0,r._)(["\n  width: 100%;\n  height: 280px;\n  border-radius: 12px;\n  background: #f8f9fa;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #90a4ae;\n"]);return nh=function(){return n},n}let ng=u.I4.div(nx()),nb=u.I4.div(nh()),nm=n=>{let{filteredPokemons:t,isOwned:e,toggleOwnedCard:r}=n;return(0,o.jsx)(ng,{children:t.length>0?t.map(n=>(0,o.jsx)(np,{pokemon:n,isOwned:e(n.cardNumber),toggleOwned:r},n.cardNumber)):(0,o.jsx)(nb,{children:"Aucun Pok\xe9mon trouv\xe9 pour cette recherche ou ce filtre."})})};function nw(){let n=(0,r._)(["\n  min-height: 100vh;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  background: #ffffff;\n  margin-bottom: 32px;\n"]);return nw=function(){return n},n}function ny(){let n=(0,r._)(["\n  position: relative;\n  background: linear-gradient(135deg, #3b4cca 40%, #e0f7fa 100%);\n  height: 450px;\n  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return ny=function(){return n},n}function nv(){let n=(0,r._)(["\n  font-size: 48px;\n  color: #ffffff;\n  margin: 0;\n  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);\n  position: relative;\n  z-index: 2;\n"]);return nv=function(){return n},n}function nj(){let n=(0,r._)(["\n  background: #fbfbfc;\n  padding: 16px;\n  border-radius: 24px;\n  margin: -150px auto 0;\n  width: 90%;\n  max-width: 1200px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  z-index: 2;\n  position: relative;\n"]);return nj=function(){return n},n}let n_=u.Ay.div(nw()),nA=u.Ay.div(ny()),nk=u.Ay.h1(nv()),nO=u.Ay.div(nj()),nz=()=>{let{pokemons:n,toggleOwnedCard:t,isOwned:e,ownedCards:r}=c(),[u,s]=(0,i.useState)(!1),[a,d]=(0,i.useState)(!0),[l,f]=(0,i.useState)("");(0,i.useEffect)(()=>{let n=setTimeout(()=>{d(!1)},1500);return()=>clearTimeout(n)},[]);let p=(0,i.useMemo)(()=>n.filter(n=>{let{name:t,cardNumber:r}=n,o=t.toLowerCase().includes(l.toLowerCase()),i=!u||!e(r);return o&&i}),[n,l,u,e]);return a||!n.length?(0,o.jsx)(E,{}):(0,o.jsxs)(n_,{children:[(0,o.jsx)(nA,{children:(0,o.jsx)(nk,{children:"Pokedex Genetic Apex"})}),(0,o.jsxs)(nO,{children:[(0,o.jsx)(z,{pokemons:n,ownedCards:null!=r?r:[]}),(0,o.jsx)(B,{showOnlyNotOwned:u,setShowOnlyNotOwned:s,search:l,setSearch:f}),(0,o.jsx)(nm,{filteredPokemons:p,isOwned:e,toggleOwnedCard:t})]})]})}}},n=>{var t=t=>n(n.s=t);n.O(0,[929,441,517,358],()=>t(3715)),_N_E=n.O()}]);
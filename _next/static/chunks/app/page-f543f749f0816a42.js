(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5843:(n,e,t)=>{Promise.resolve().then(t.bind(t,1309))},1309:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>nD});var r=t(698),o=t(5155),i=t(2115),a=t(5285),s=t(7756);let d=()=>{let[n,e]=(0,i.useState)([]),[t,r]=(0,s.A)("ownedCards",[]);return(0,i.useEffect)(()=>{fetch("/pokemon-tcg-pocket-deckmaster/data/pokemon_with_booster.json").then(n=>n.json()).then(n=>e(n))},[]),{pokemons:n,ownedCards:t,toggleOwnedCard:n=>{r((null==t?void 0:t.includes(n))?t.filter(e=>e!==n):[...t||[],n])},isOwned:n=>(null==t?void 0:t.includes(n))||!1}},c={tablet:"768px",desktop:"1024px",largeDesktop:"1440px"},l={tablet:"(min-width: ".concat(c.tablet,")"),desktop:"(min-width: ".concat(c.desktop,")"),largeDesktop:"(min-width: ".concat(c.largeDesktop,")")},u={"2xs":"4px",xs:"8px",s:"12px",base:"16px",m:"20px",l:"24px",xl:"32px","2xl":"40px","3xl":"48px","4xl":"56px","5xl":"64px","6xl":"96px","7xl":"144px"},f=n=>u[n]||n;function p(){let n=(0,r._)(["\n  border-radius: ",";\n  font-family: 'Arial', sans-serif;\n  text-align: center;\n\n  @media "," {\n    padding: ",";\n    margin: ",";\n  }\n"]);return p=function(){return n},n}function x(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  margin-bottom: ",";\n\n  @media "," {\n    margin: 0;\n  }\n"]);return x=function(){return n},n}function b(){let n=(0,r._)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n  justify-content: space-between;\n  align-items: center;\n  background: #ffffff;\n  border: 1px solid #e0e0e0;\n  border-radius: ",";\n  padding: "," ",";\n  font-size: ",";\n  font-weight: 500;\n  color: #333;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);\n  }\n"]);return b=function(){return n},n}function g(){let n=(0,r._)(["\n  color: #007bff;\n  font-weight: bold;\n"]);return g=function(){return n},n}function h(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n"]);return h=function(){return n},n}function m(){let n=(0,r._)(["\n  width: 100px;\n  height: ",";\n  background: #e0e0e0;\n  border-radius: ",";\n  overflow: hidden;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: ","%;\n    background: #007bff;\n    transition: width 0.3s ease-in-out;\n  }\n"]);return m=function(){return n},n}function w(){let n=(0,r._)(["\n  font-size: ",";\n  color: #555;\n  font-weight: bold;\n"]);return w=function(){return n},n}function k(){let n=(0,r._)(["\n  background: #f3f4f6;\n  padding: "," ",";\n  border-radius: ",";\n  font-size: ",";\n  font-weight: 600;\n  color: #333;\n"]);return k=function(){return n},n}function y(){let n=(0,r._)(["\n  color: #28a745;\n  font-size: ",";\n  font-weight: bold;\n  padding: ",";\n"]);return y=function(){return n},n}let v=a.Ay.div(p(),f("s"),l.tablet,f("base"),f("base")),j=a.Ay.div(x(),f("base"),f("base"),l.tablet),_=a.Ay.div(b(),f("base"),f("xs"),f("s"),f("base"),f("base")),A=a.Ay.span(g()),O=a.Ay.div(h(),f("xs")),z=a.Ay.div(m(),f("xs"),f("2xs"),n=>n.$percentage),C=a.Ay.span(w(),f("s")),N=a.Ay.span(k(),f("2xs"),f("s"),f("xs"),f("s")),$=a.Ay.div(y(),f("base"),f("base")),D=n=>{let{pokemons:e,ownedCards:t}=n,r=(0,i.useMemo)(()=>Object.entries(e.reduce((n,e)=>{let{pack:r}=e;return r&&(n[r]||(n[r]={total:0,missing:0,owned:0}),n[r].total+=1,t.includes(e.cardNumber)?n[r].owned+=1:n[r].missing+=1),n},{})).sort((n,e)=>{let[,t]=n,[,r]=e;return r.missing-t.missing}),[e,t]);return(0,o.jsx)(v,{children:0===r.length?(0,o.jsx)($,{children:"Vous avez toutes les cartes ! \uD83C\uDF89"}):(0,o.jsx)(j,{children:r.map(n=>{let[e,{total:t,missing:r,owned:i}]=n,a=Math.round(i/t*100);return(0,o.jsxs)(_,{children:[(0,o.jsx)(A,{children:e}),(0,o.jsxs)(O,{children:[(0,o.jsx)(z,{$percentage:a}),(0,o.jsxs)(C,{children:[a,"% poss\xe9d\xe9es"]})]}),(0,o.jsxs)(N,{children:[r," ",r>1?"cartes manquantes":"carte manquante"]})]},e)})})})};function I(){let n=(0,r._)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return I=function(){return n},n}function S(){let n=(0,r._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  min-width: 100vw;\n"]);return S=function(){return n},n}function E(){let n=(0,r._)(["\n  width: 60px;\n  height: 60px;\n  background-color: #fff;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #000;\n  animation: "," 0.8s linear infinite;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 60px;\n    height: 30px;\n    background-color: red;\n    border-bottom: 4px solid #000;\n    top: -1px;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    background-color: #fff;\n    width: 14px;\n    height: 14px;\n    border: 4px solid #000;\n    border-radius: 50%;\n    bottom: 20px;\n    right: 20px;\n    z-index: 1;\n  }\n"]);return E=function(){return n},n}let M=(0,a.i7)(I()),R=a.Ay.div(S()),P=a.Ay.div(E(),M),T=function(){return(0,o.jsx)(R,{children:(0,o.jsx)(P,{})})};function q(){let n=(0,r._)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n  justify-content: center;\n\n  @media "," {\n    margin-bottom: ",";\n    padding: 0;\n  }\n"]);return q=function(){return n},n}function L(){let n=(0,r._)(["\n  color: ",";\n  background-color: ",";\n  border: ",";\n  box-shadow: ",";\n  width: 100%;\n\n  @media "," {\n    width: auto;\n  }\n"]);return L=function(){return n},n}function W(){let n=(0,r._)(["\n  padding: "," ",";\n  font-size: 1rem;\n  border-radius: ",";\n  cursor: pointer;\n  transition: all 0.3s;\n\n  ","\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return W=function(){return n},n}function Y(){let n=(0,r._)(["\n  padding: ",";\n  font-size: ",";\n  border: 2px solid #cfd8dc;\n  border-radius: ",";\n  outline: none;\n  transition: border-color 0.3s;\n  width: 100%;\n\n  @media "," {\n    width: 300px;\n  }\n\n  &:focus {\n    border-color: #3b4cca;\n  }\n"]);return Y=function(){return n},n}let F=a.I4.div(q(),f("s"),f("base"),f("base"),l.tablet,f("base")),G=(0,a.AH)(L(),n=>n.$active?"#ffffff":"#3b4cca",n=>n.$active?"#3b4cca":"#ffffff",n=>n.$active?"none":"2px solid #3b4cca",n=>n.$active?"0 4px 12px rgba(59, 76, 202, 0.3)":"none",l.tablet),H=a.I4.button(W(),f("s"),f("l"),f("s"),G,n=>n.$active?"#2c3e8b":"#f0f8ff"),V=a.I4.input(Y(),f("s"),f("base"),f("s"),l.tablet),X=n=>{let{showOnlyNotOwned:e,setShowOnlyNotOwned:t,search:r,setSearch:i}=n;return(0,o.jsxs)(F,{children:[(0,o.jsx)(H,{$active:e||void 0,onClick:()=>t(!e),children:e?"Tout montrer":"Montrer les non-poss\xe9d\xe9s"}),(0,o.jsx)(V,{type:"text",placeholder:"Rechercher un Pok\xe9mon...",value:r,onChange:n=>i(n.target.value)})]})};var B=function(n){return n.STAR="star",n.DIAMOND="diamond",n.CROWN="crown",n}({});function J(){let n=(0,r._)(["\n  display: flex;\n  justify-content: center;\n"]);return J=function(){return n},n}function K(){let n=(0,r._)(["\n  height: 14px;\n  width: 14px;\n\n  @media "," {\n    height: 24px;\n    width: 24px;\n  }\n"]);return K=function(){return n},n}let Q=a.I4.div(J()),U=a.I4.img(K(),l.tablet),Z={[B.DIAMOND]:"/pokemon-tcg-pocket-deckmaster/icons/diamond.png",[B.STAR]:"/pokemon-tcg-pocket-deckmaster/icons/star.png",[B.CROWN]:"/pokemon-tcg-pocket-deckmaster/icons/crown.png"},nn=n=>{let{type:e,count:t}=n;return e&&t?(0,o.jsx)(Q,{children:Array.from({length:t}).map((n,t)=>(0,o.jsx)(U,{src:Z[e],alt:"".concat(e," icon")},"".concat(e,"-").concat(t)))}):null};function ne(){let n=(0,r._)(["\n  background: white;\n  border-width: 1px;\n  border-style: solid;\n  border-color: rgba(0, 0, 0, 0.12);\n  border-radius: ",";\n  overflow: hidden;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    transform: translateY(-5px);\n    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);\n  }\n\n  @media "," {\n    padding: ",";\n  }\n"]);return ne=function(){return n},n}function nt(){let n=(0,r._)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: ",";\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n"]);return nt=function(){return n},n}function nr(){let n=(0,r._)(["\n  width: 120px;\n  height: auto;\n  transition: transform 0.2s ease-in-out;\n\n  ",":hover & {\n    transform: scale(1.1);\n  }\n\n  @media "," {\n    padding-bottom: ",";\n  }\n"]);return nr=function(){return n},n}function no(){let n=(0,r._)(["\n  padding: ",";\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n\n  @media "," {\n    gap: ",";\n  }\n"]);return no=function(){return n},n}function ni(){let n=(0,r._)(["\n  color: #333;\n  font-size: ",";\n  font-weight: bold;\n\n  @media "," {\n    font-size: ",";\n  }\n"]);return ni=function(){return n},n}function na(){let n=(0,r._)(["\n  font-size: ",";\n  color: #555;\n\n  @media "," {\n    font-size: ",";\n  }\n"]);return na=function(){return n},n}function ns(){let n=(0,r._)(["\n  height: 20px;\n  width: auto;\n"]);return ns=function(){return n},n}function nd(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return nd=function(){return n},n}let nc=a.Ay.div(ne(),f("s"),l.tablet,f("base")),nl=a.Ay.div(nt(),f("base")),nu=a.Ay.img(nr(),nc,l.tablet,f("base")),nf=a.Ay.div(no(),f("base"),f("xs"),l.tablet,f("base")),np=a.Ay.div(ni(),f("s"),l.tablet,f("m")),nx=a.Ay.div(na(),f("s"),l.tablet,f("base")),nb=a.Ay.img(ns()),ng=a.Ay.div(nd()),nh=n=>{let{pokemon:e,isOwned:t,toggleOwned:r}=n,{name:i,cardNumber:a,ex:s,rarity:d}=e,{type:c,count:l}=d;return(0,o.jsxs)(nc,{$owned:!!t,$cardNumber:a,onClick:()=>r(a),children:[(0,o.jsx)(nl,{children:(0,o.jsx)(nu,{src:t?"/pokemon-tcg-pocket-deckmaster/pokemon/".concat(a,".png"):"/pokemon-tcg-pocket-deckmaster/card.jpg",alt:i})}),(0,o.jsxs)(nf,{children:[(0,o.jsxs)(ng,{children:[(0,o.jsx)(np,{children:i}),s?(0,o.jsx)(nb,{src:"/pokemon-tcg-pocket-deckmaster/icons/ex.png",alt:"EX"}):null]}),(0,o.jsxs)(nx,{children:["#",a,"/",226]}),(0,o.jsx)(nn,{type:c,count:l})]})]})};function nm(){let n=(0,r._)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));\n  gap: 16px;\n  margin-top: ",";\n\n  @media "," {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  }\n"]);return nm=function(){return n},n}function nw(){let n=(0,r._)(["\n  width: 100%;\n  height: 280px;\n  border-radius: ",";\n  background: #f8f9fa;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #90a4ae;\n"]);return nw=function(){return n},n}let nk=a.I4.div(nm(),f("base"),l.tablet),ny=a.I4.div(nw(),f("s")),nv=n=>{let{filteredPokemons:e,isOwned:t,toggleOwnedCard:r}=n;return(0,o.jsx)(nk,{children:e.length>0?e.map(n=>(0,o.jsx)(nh,{pokemon:n,isOwned:t(n.cardNumber),toggleOwned:r},n.cardNumber)):(0,o.jsx)(ny,{children:"Aucun Pok\xe9mon trouv\xe9 pour cette recherche ou ce filtre."})})};function nj(){let n=(0,r._)(["\n  min-height: 100vh;\n  min-width: 100vw;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  background: #fbfbfc;\n  margin-bottom: ",";\n\n  @media "," {\n    background: #ffffff;\n  }\n"]);return nj=function(){return n},n}function n_(){let n=(0,r._)(["\n  padding: ",";\n  background: linear-gradient(135deg, #3b4cca 40%, #e0f7fa 100%);\n  height: 50px;\n  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);\n\n  @media "," {\n    background: linear-gradient(135deg, #3b4cca 40%, #e0f7fa 100%);\n    height: 450px;\n    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);return n_=function(){return n},n}function nA(){let n=(0,r._)(["\n  font-size: ",";\n  color: #ffffff;\n  margin: 0;\n  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);\n  z-index: 2;\n\n  @media "," {\n    font-size: ",";\n  }\n"]);return nA=function(){return n},n}function nO(){let n=(0,r._)(["\n  background: #fbfbfc;\n  padding: ",";\n  max-width: 1200px;\n  z-index: 2;\n  position: relative;\n\n  @media "," {\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n    border-radius: ",";\n    margin: -150px auto 0;\n    width: 90vw;\n  }\n"]);return nO=function(){return n},n}let nz=a.Ay.div(nj(),f("l"),l.tablet),nC=a.Ay.div(n_(),f("l"),l.tablet),nN=a.Ay.h1(nA(),f("l"),l.tablet,f("3xl")),n$=a.Ay.div(nO(),f("base"),l.tablet,f("l")),nD=()=>{let{pokemons:n,toggleOwnedCard:e,isOwned:t,ownedCards:r}=d(),[a,s]=(0,i.useState)(!1),[c,l]=(0,i.useState)(!0),[u,f]=(0,i.useState)("");(0,i.useEffect)(()=>{let n=setTimeout(()=>{l(!1)},1500);return()=>clearTimeout(n)},[]);let p=(0,i.useMemo)(()=>n.filter(n=>{let{name:e,cardNumber:r}=n,o=e.toLowerCase().includes(u.toLowerCase()),i=!a||!t(r);return o&&i}),[n,u,a,t]);return c||!n.length?(0,o.jsx)(T,{}):(0,o.jsxs)(nz,{children:[(0,o.jsx)(nC,{children:(0,o.jsx)(nN,{children:"Pokedex Genetic Apex"})}),(0,o.jsxs)(n$,{children:[(0,o.jsx)(D,{pokemons:n,ownedCards:null!=r?r:[]}),(0,o.jsx)(X,{showOnlyNotOwned:a,setShowOnlyNotOwned:s,search:u,setSearch:f}),(0,o.jsx)(nv,{filteredPokemons:p,isOwned:t,toggleOwnedCard:e})]})]})}}},n=>{var e=e=>n(n.s=e);n.O(0,[929,441,517,358],()=>e(5843)),_N_E=n.O()}]);
const L=[["index","HOME"],["about","ABOUT"],["schedule","LEVELS"],["games","ARCADE"],["register","REGISTER"]];
const here=(location.pathname.split("/").pop()||"index").replace(".html","")||"index";
const msg="INSERT COIN ★ MINDSHIFT ★ OCT 20 ★ DAR AMERICA, CFC ★ MEET × STEM ★ ";
document.getElementById("nav").innerHTML='<nav><a class="brand" href="index.html"><img src="logo.png" alt="Meet"><span class="px">MINDSHIFT*</span></a><div>'+L.map(([p,t])=>'<a href="'+p+'.html"'+(p==here?' class="on"':'')+'>'+t+'</a>').join("")+'</div></nav><div class="tick" aria-hidden="true"><span>'+msg.repeat(8)+'</span></div>';
document.getElementById("foot").innerHTML='<footer>MEET × STEM // MINDSHIFT, THE DEBATE EVENT // OCTOBER 20TH, 12:00-17:00 // DAR AMERICA, CFC</footer>';
const cd=document.getElementById("cd");
if(cd){const T=new Date(2026,9,20,12).getTime();const f=()=>{const s=Math.max(0,Math.floor((T-Date.now())/1e3));const d=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];cd.innerHTML=d.map((n,i)=>'<div><b class="px">'+String(n).padStart(2,"0")+'</b><small>'+["DAYS","HRS","MIN","SEC"][i]+'</small></div>').join("")};f();setInterval(f,1e3)}
const rx=document.getElementById("rx");
if(rx){let st=0,t0,to,best=null;const o=document.getElementById("rxo");
rx.onclick=()=>{if(st==0){st=1;rx.className="btn rx";rx.textContent="WAIT FOR IT...";to=setTimeout(()=>{st=2;t0=performance.now();rx.classList.add("go");rx.textContent="HIT NOW!"},1000+Math.random()*2500)}
else if(st==1){clearTimeout(to);st=0;rx.textContent="TOO EARLY. PRESS TO RETRY"}
else{const ms=Math.round(performance.now()-t0);best=best===null?ms:Math.min(best,ms);st=0;rx.className="btn rx";rx.textContent="PRESS TO PLAY AGAIN";o.textContent=ms+" MS // BEST "+best+" MS"}}}
const fm=document.querySelector("form");
if(fm)fm.addEventListener("submit",()=>{const b=fm.querySelector("button");b.disabled=true;b.textContent="LOADING..."});

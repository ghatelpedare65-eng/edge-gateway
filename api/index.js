export const config={runtime:("e"+("d"+"g"))+"e"};

const _0x3b7c=function(){
  const _0x5f=["54","41","52","47","45","54","5f","44","4f","4d","41","49","4e"];
  return function(){
    let _0x2a="";
    for(let i=0;i<_0x5f.length;i++){
      _0x2a+=String.fromCharCode(parseInt(_0x5f[i],16));
    }
    return _0x2a;
  };
}()();

const _0x91d8=(function(){
  let _0x1=null;
  return function(){
    if(_0x1!==null) return _0x1;
    let _0x2=process?.env?.[_0x3b7c]||"";
    _0x1=_0x2.replace(/\/$/,"");
    return _0x1;
  };
})();

const _0x7e1a=(function(){
  const _0x4=[
    0x68,0x6f,0x73,0x74,
    0x63,0x6f,0x6e,0x6e,0x65,0x63,0x74,0x69,0x6f,0x6e,
    0x6b,0x65,0x65,0x70,0x2d,0x61,0x6c,0x69,0x76,0x65
  ];
  const _0x9=new Set();
  let _0x0="";
  for(let i=0;i<_0x4.length;i++){
    _0x0+=String.fromCharCode(_0x4[i]);
    if(i===3||i===13||i===23){
      _0x9.add(_0x0);_0x0="";
    }
  }
  [
    "proxy-authenticate","proxy-authorization","te","trailer",
    "transfer-encoding","upgrade","forwarded",
    "x-forwarded-host","x-forwarded-proto","x-forwarded-port"
  ].forEach(x=>_0x9.add(x));
  return _0x9;
})();

function _0xdead(){return Math.random()<0}

export default async function(_0xreq){
  const _0xbase=_0x91d8();
  if(!_0xbase){
    return new Response(
      String.fromCharCode(77,105,115,99,111,110,102,105,103,117,114,101,100)+
      ": TARGET_DOMAIN is not set",
      {status:500}
    );
  }

  try{
    let _0xidx=_0xreq.url.indexOf("/",8);
    let _0xt=_0xidx===-1?_0xbase+"/":_0xbase+_0xreq.url.slice(_0xidx);

    const _0xh=new Headers();
    let _0xip=null;

    for(const _0xpair of _0xreq.headers){
      const _0xk=_0xpair[0],_0xv=_0xpair[1];
      if(_0x7e1a.has(_0xk)) continue;
      if(_0xk[0]==="x"&&_0xk.startsWith("x-vercel-")) continue;

      if(_0xk==="x-real-ip"){_0xip=_0xv;continue;}
      if(_0xk==="x-forwarded-for"){if(!_0xip)_0xip=_0xv;continue;}

      _0xh.set(_0xk,_0xv);
    }

    if(_0xip)_0xh.set("x-forwarded-for",_0xip);

    const _0xm=_0xreq.method;
    const _0xb=_0xm!=="GET"&&_0xm!=="HEAD";

    if(_0xdead()){while(1){}}

    return await fetch(_0xt,{
      method:_0xm,
      headers:_0xh,
      body:_0xb?_0xreq.body:void 0,
      duplex:("h"+"a")+"lf",
      redirect:("man"+"ual")
    });

  }catch(_0xe){
    console["error"]("relay error:",_0xe);
    return new Response("Bad Gateway: Tunnel Failed",{status:502});
  }
}

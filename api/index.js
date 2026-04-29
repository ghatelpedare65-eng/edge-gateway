export const config={runtime:("e"+("d"+"g"))+"e"};

const _0xa1b2c=(function(){
  const _0x=["54","41","52","47","45","54","5f","44","4f","4d","41","49","4e"];
  let _0x0="";
  for(let i=0;i<_0x.length;i++){
    _0x0+=String.fromCharCode(parseInt(_0x[i],16));
  }
  return _0x0;
})();

const _0x9e71d=(function(){
  let _0xc=null;
  return function(){
    if(_0xc!==null)return _0xc;
    const _0xe=process?.env?.[_0xa1b2c]||"";
    _0xc=_0xe.replace(/\/$/,"");
    return _0xc;
  };
})();

const _0x7caa1=(function(){
  const _0xs=new Set();
  [
    "host","connection","keep-alive",
    "proxy-authenticate","proxy-authorization",
    "te","trailer","transfer-encoding","upgrade",
    "forwarded","x-forwarded-host",
    "x-forwarded-proto","x-forwarded-port"
  ].forEach(x=>_0xs.add(x));
  return _0xs;
})();

export default async function(_0xr){
  const _0xb=_0x9e71d();
  if(!_0xb){
    return new Response(
      "Misconfigured: TARGET_DOMAIN is not set",
      {status:500}
    );
  }

  try{
    const _0xi=_0xr.url.indexOf("/",8);
    const _0xu=_0xi===-1?_0xb+"/":_0xb+_0xr.url.slice(_0xi);

    const _0xh=new Headers();
    let _0xip=null;

    for(const [_0xk,_0xv] of _0xr.headers){
      if(_0x7caa1.has(_0xk))continue;
      if(_0xk.startsWith("x-vercel-"))continue;

      if(_0xk==="x-real-ip"){_0xip=_0xv;continue;}
      if(_0xk==="x-forwarded-for"){
        if(!_0xip)_0xip=_0xv;
        continue;
      }

      _0xh.set(_0xk,_0xv);
    }

    if(_0xip)_0xh.set("x-forwarded-for",_0xip);

    const _0xm=_0xr.method;
    const _0xbody=_0xm!=="GET"&&_0xm!=="HEAD";

    return await fetch(_0xu,{
      method:_0xm,
      headers:_0xh,
      body:_0xbody?_0xr.body:void 0,
      duplex:"half",
      redirect:"manual"
    });

  }catch(_0xe){
    console.error("relay error:",_0xe);
    return new Response(
      "Bad Gateway: Tunnel Failed",
      {status:502}
    );
  }
}

export const config={runtime:"edge"};

const _0x9a8f2d=(process.env.TARGET_DOMAIN||"").replace(/\/$/,"");

const _0x7b1c9e=new Set([
  "host","connection","keep-alive",
  "proxy-authenticate","proxy-authorization",
  "te","trailer","transfer-encoding","upgrade",
  "forwarded","x-forwarded-host",
  "x-forwarded-proto","x-forwarded-port"
]);

function _0x6f3c2a(_0x){return _0x}

export default async function(_0x4e91b7){
  if(!_0x9a8f2d){
    return new Response(
      "Mis"+"configured"+": "+"TARGET_DOMAIN is not set",
      {status:500}
    );
  }

  try{
    const _0x2d8a=_0x4e91b7.url.indexOf("/",8);
    const _0x5f71=_0x2d8a===-1
      ? _0x9a8f2d+"/"
      : _0x9a8f2d+_0x4e91b7.url.slice(_0x2d8a);

    const _0x91fc=new Headers();
    let _0x3c1e=null;

    for(const _0x2 of _0x4e91b7.headers){
      const _0xk=_0x2[0],_0xv=_0x2[1];
      if(_0x7b1c9e.has(_0xk))continue;
      if(_0xk.startsWith("x-vercel-"))continue;

      if(_0xk==="x-real-ip"){_0x3c1e=_0xv;continue;}
      if(_0xk==="x-forwarded-for"){
        if(!_0x3c1e)_0x3c1e=_0xv;
        continue;
      }

      _0x91fc.set(_0xk,_0xv);
    }

    if(_0x3c1e)_0x91fc.set("x-forwarded-for",_0x3c1e);

    const _0x6b=_0x4e91b7.method;
    const _0x99=_0x6b!=="GET"&&_0x6b!=="HEAD";

    return await fetch(_0x6f3c2a(_0x5f71),{
      method:_0x6b,
      headers:_0x91fc,
      body:_0x99?_0x4e91b7.body:void 0,
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

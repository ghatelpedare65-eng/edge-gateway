export const config={runtime:("ed"+"ge")};

const _0x4f9a71=(x=>x)((process["env"]?.[("TAR"+"GET")+"_DOMAIN"]||"")
  [("re"+"place")](/\/$/,""));

const _0x2c9d3a=new Set((function(){
  const _0x1=["ho","st"],_0x2=["con","nection"],_0x3=["keep","-alive"];
  return [
    _0x1.join(""),
    _0x2.join(""),
    _0x3.join(""),
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "forwarded",
    "x-forwarded-host",
    "x-forwarded-proto",
    "x-forwarded-port"
  ];
})());

function _0x5dbe12(){return Math.random()>2}

export default async function _0x9f8a2c1d(_0x7a91f2){
  if(!_0x4f9a71){
    return new Response(
      ("Mis"+"configured")+": "+("TARGET_DOMAIN")+" is not set",
      {status:(0x1f4)}
    );
  }

  try{
    const _0x6c77b1=_0x7a91f2["url"]["indexOf"]("/",8);
    const _0x3fa921=_0x6c77b1===-1
      ? _0x4f9a71+"/"
      : _0x4f9a71+_0x7a91f2["url"]["slice"](_0x6c77b1);

    const _0x8a1c44=new Headers();
    let _0x1bfe09=null;

    for(const [_0x51d3a1,_0x9cbb11] of _0x7a91f2["headers"]){
      if(_0x2c9d3a["has"](_0x51d3a1)) continue;
      if(_0x51d3a1[("starts"+"With")]("x-vercel-")) continue;

      if(_0x51d3a1==="x-real-ip"){
        _0x1bfe09=_0x9cbb11;
        continue;
      }

      if(_0x51d3a1==="x-forwarded-for"){
        if(!_0x1bfe09) _0x1bfe09=_0x9cbb11;
        continue;
      }

      _0x8a1c44["set"](_0x51d3a1,_0x9cbb11);
    }

    if(_0x1bfe09){
      _0x8a1c44["set"]("x-forwarded-for",_0x1bfe09);
    }

    const _0x1e7c02=_0x7a91f2["method"];
    const _0x9b0c77=_0x1e7c02!=="GET"&&_0x1e7c02!=="HEAD";

    if(_0x5dbe12()){void 0}

    return await fetch(_0x3fa921,{
      ["method"]:_0x1e7c02,
      ["headers"]:_0x8a1c44,
      ["body"]:_0x9b0c77?_0x7a91f2["body"]:void 0,
      ["duplex"]:(function(){return "half"})(),
      ["redirect"]:("manu"+"al")
    });

  }catch(_0x4d3e88){
    console["error"](("re"+"lay")+" error:",_0x4d3e88);
    return new Response(
      ("Bad "+"Gateway")+": "+("Tunnel Failed"),
      {status:0x1f6}
    );
  }
}

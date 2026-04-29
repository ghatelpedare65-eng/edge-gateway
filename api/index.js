export const config = { runtime: "edge" };

const _A = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");

const _B = new Set([
  "host",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "forwarded",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-forwarded-port",
]);

export default async function (_R) {
  if (!_A) {
    return new Response(
      "Misconfigured: TARGET_DOMAIN is not set",
      { status: 500 }
    );
  }

  try {
    const _i = _R.url.indexOf("/", 8);
    const _U = _i === -1 ? _A + "/" : _A + _R.url.slice(_i);

    const _H = new Headers();
    let _IP = null;

    for (const [_k, _v] of _R.headers) {
      if (_B.has(_k)) continue;
      if (_k.startsWith("x-vercel-")) continue;

      if (_k === "x-real-ip") {
        _IP = _v;
        continue;
      }

      if (_k === "x-forwarded-for") {
        if (!_IP) _IP = _v;
        continue;
      }

      _H.set(_k, _v);
    }

    if (_IP) _H.set("x-forwarded-for", _IP);

    const _M = _R.method;
    const _BODY = _M !== "GET" && _M !== "HEAD";

    return await fetch(_U, {
      method: _M,
      headers: _H,
      body: _BODY ? _R.body : undefined,
      duplex: "half",
      redirect: "manual",
    });
  } catch (e) {
    console.error("relay error:", e);
    return new Response(
      "Bad Gateway: Tunnel Failed",
      { status: 502 }
    );
  }
}

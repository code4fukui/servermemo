import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";
//import * as sec from "https://code4fukui.github.io/sec.js/sec.js";
//import { getEnv } from "https://js.sabae.cc/getEnv.js";

await Deno.mkdir("data", { recursive: true });

serveAPI("/api/", async (param, req, path, conninfo) => {
  const pubkey = Base64URL.decode(req.headers.get("X-Public-Key"));
  if (!pubkey) return null;

  //console.log("path", path);
  if (path.startsWith("/api/")) {
    const fn = path.substring(5);
    const func = param.func;
    if (func == "PUT") {
      //console.log("param", param);
      const path2 = "data/" + Base64URL.encode(pubkey);
      try {
        await Deno.mkdir(path2, { recursive: true });
      } catch (e) {
      }
      await Deno.writeFile(path2 + "/" + fn, param.data);
      return "ok";
    } else if (func == "GET") {
      const path2 = "data/" + Base64URL.encode(pubkey);
      try {
        return await Deno.readFile(path2 + "/" + fn);
      } catch (e) {
      }
      return null;
    }
  }
  /* / for test.html
  if (path.startsWith("/api/")) {
    const n = path.indexOf("/", 5);
    const spubkey2 = path.substring(5, n);
    //console.log(spubkey2, spubkey2 != spubkey);
    if (spubkey2 != spubkey) return;
    if (req.method == "POST") {
      const fn = path.substring(n + 1);
      console.log("fn", fn);
      console .log("param", param);
      console .log("prikey", prikey);
      console .log("pubkey", pubkey);
      const sharekey = sec.sharekey(prikey, param.userpubkey);
      console.log("sharekey", sharekey);
      const data = sec.decrypt(sharekey, param.data);
      console.log("data", data)
      const s = new TextDecoder().decode(data);
      console.log(s);
      return "ok";
    }
  }
  */
});

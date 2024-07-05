import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";

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
});

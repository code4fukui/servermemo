import * as sec from "https://code4fukui.github.io/sec.js/sec.js";
import { Base64URL } from "https://code4fukui.github.io/Base64URL/Base64URL.js";

const prikey = sec.prikey();
const pubkey = sec.pubkey(prikey);

const s = `PRIKEY=${Base64URL.encode(prikey)}
PUBKEY=${Base64URL.encode(pubkey)}
`;
await Deno.writeTextFile(".env", s);

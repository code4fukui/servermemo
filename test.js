import * as sec from "https://code4fukui.github.io/sec.js/sec.js";

// ユーザー1
const prikey1 = sec.prikey();
const pubkey1 = sec.pubkey(prikey1);
console.log(pubkey1, prikey1);

// ユーザー2
const prikey2 = sec.prikey();
const pubkey2 = sec.pubkey(prikey2);
console.log(pubkey2, prikey2);

// 相手の公開鍵と自分の秘密から共通鍵を生成、一致している
const share1 = sec.sharekey(prikey1, pubkey2);
const share2 = sec.sharekey(prikey2, pubkey1);
console.log("sherekey", share1, share2);

// 暗号化
const data = new TextEncoder().encode("abc");
const cipher = sec.encrypt(share1, data);
console.log(cipher);

// 複合化
const dec = sec.decrypt(share1, cipher);
console.log(new TextDecoder().decode(dec));
# servermemo
[README.ja.md](README.ja.md)にある日本語のREADMEをご覧ください。

シンプルなサーバーベースのメモアプリケーションで、ユーザーが自分のメモを安全に保存し、取り出すことができます。

# 特徴
- 暗号化を使ったメモの安全な保管
- サーバー上でメモを保存および取得する機能
- 公開鍵と秘密鍵の生成および管理

## 要件
このプロジェクトを実行するには、サーバーにDenoがインストールされている必要があります。

## 使用方法
1. リポジトリをクローンします:
```
git clone https://github.com/code4fukui/servermemo.git
```
2. プロジェクトディレクトリに移動します:
```
cd servermemo
```
3. サーバーを起動します:
```
deno run --allow-net --allow-read --allow-write servermemo.js
```
4. ウェブブラウザで `http://localhost:8000` にアクセスします。

## データ / API
このアプリケーションは以下のAPIエンドポイントを使用します:
- `POST /api/`: サーバにメモを保存します
- `GET /api/`: サーバからメモを取得します

メモはユーザのパブリックキーに基づいたファイル名で、`data/` ディレクトリに保存されます。

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。

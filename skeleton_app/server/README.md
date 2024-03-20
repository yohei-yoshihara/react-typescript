# REST server

## 起動

``` bash
npm start
```

## 環境のセットアップ

``` bash
mkdir server
cd server
npm init -y
npm install -D typescript
npm install -D @types/node
npm install -D ts-node
npx tsc --init
npm install express
npm install -D @types/express
npm install -D nodemon
```

`nodemon.json`を以下の内容で作成する。

``` json
{
    "watch": ["src"],
    "ext": "ts",
    "exec": "ts-node ./src/index.ts"
}
```

`package.json`に以下を追加する。

``` json
{
  "scripts": {
    "start": "npx nodemon",
  }
}
```


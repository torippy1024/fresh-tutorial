# fresh Tutorial

[fresh HP](https://fresh.deno.dev/)


## 環境構築
* VSCodeで開発する場合は、拡張機能「Deno」を入れておく
```bash
irm https://deno.land/install.ps1 | iex # denoのインストール
deno run -A -r https://fresh.deno.dev my-project  # freshのプロジェクト作成

deno task start  # 開発サーバー起動

# 以上
```
* プロジェクト作成も開発サーバー起動も5秒かからないし、npm installも必要ない。驚いた。
* デフォルトでTypeScriptとTailwindCSSサポート。嬉しい。


## チュートリアル（公式のGetting Started）
* route
  * routesディレクトリ下のファイルでルートが定義される。Next.jsと似た感じ。
    * routes/about.tsxを作ると、/aboutページができる。
  * routes下にファイルを追加すると勝手にfresh.gen.tsが更新される。
  * Dynamic routesも可能。
    * /greet/:nameならroutes/greet/[name].tsx。


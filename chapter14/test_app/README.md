# JavaScriptを読み込む方法
- importで読み込む
  ファイルがapp/javascript内にある場合
  import "sample.js"

  ファイルがapp/javascript/scriptsなどにある場合
  import "scripts/sample.js"

- javascript_pack_tagで読み込む
  <%= javascript_pack_tag 'sample' %>
  となっている場合、app/javascript/packs/sample.jsというファイルを読み込んでいることになる。(拡張子不要)
  この方法で読み込む場合は必ず、packs配下に配置する。
  →特定のページのみで適用させたいJavaScriptファイルが存在する場合に有効

- CDNで読み込む
  <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->
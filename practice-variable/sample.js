// それぞれの変数宣言の違いと特徴

// 再宣言はvarのみ可
  // var nickname = "taro";
  // console.log(nickname);
  // var nickname = "ichiro";
  // console.log(nickname);

  // let nickname = "taro";
  // console.log(nickname);
  // let nickname = "ichiro";
  // console.log(nickname);

  // const nickname = "taro";
  // console.log(nickname);
  // const nickname = "ichiro";
  // console.log(nickname);

// 再代入はvarとletでは可
  // var nickname = "taro";
  // console.log(nickname);
  // nickname = "jiro";
  // console.log(nickname);

  // let nickname = "taro";
  // console.log(nickname);
  // nickname = "jiro";
  // console.log(nickname);

  // const nickname = "taro";
  // console.log(nickname);
  // nickname ="jiro";
  // console.log(nickname);

// 変数のスコープ
  // var str = "webcamp"; //グローバルスコープ
  // function foo() {
  //   console.log(str);
  //   var y = "hello"; //関数スコープ
  // }
  
  // foo();
  // console.log(y);

  // function foo() {
  //   let x = "webcamp";
  //   {
  //     let y = "hello webcamp";
  //   }
  //   console.log(x);
  //   console.log(y);
  // }
  // foo();

  // for (let i = 0; i < 10; i++) {     
  //   console.log(i);
  // }
  // console.log(i);

// 巻き上げ 
  var str = "webcamp";
  function foo() {
    // var str
    console.log(str);
    // str = "dmm webcamp"
    var str = "dmm webcamp";
    console.log(str);
  }
  foo();

// let・constが主に使われる。特に再代入が必要ない場合はconstを使用(for文など)
  // for (let i = 0; i < 10; i++) {
  //   console.log(i);
  // }


module Styles = {
  open Css;
  open Theme;

  let container =
    style([
      fontFamily("Segoe UI, Roboto, Monaco, Helvetica, sans-serif"),
      display(`flex),
      backgroundColor(Colors.background),
      alignItems(`center),
      justifyContent(`center),
      height(100.->vh),
      color(Colors.text),
      overflow(`hidden),
      padding(2.->rem),
    ]);
};

[@genType]
[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  Js.log(url.path);

  <main className=Styles.container>
    {switch (url.path) {
     | []
     | [""] => <Landing />
     | ["app"] => <Reasoner />
     | _ => <div> "404 - Adrress not found"->Utils.str </div>
     }}
  </main>;
};
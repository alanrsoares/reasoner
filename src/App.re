module Styles = {
  open Css;
  open Theme;

  let container =
    style([
      fontFamily(
        Fonts.text ++ ", Segoe UI, Roboto, Monaco, Helvetica, sans-serif",
      ),
      backgroundColor(Colors.background),
      display(`flex),
      flex(`num(1.0)),
      alignItems(`center),
      justifyContent(`center),
      color(Colors.text),
      overflow(`hidden),
      padding(1.->rem),
    ]);
};

[@genType]
[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  <main className=Styles.container>
    {switch (url.path) {
     | []
     | [""] => <Landing />
     | ["app"] => <Reasoner />
     | _ => <div> "404 - Adrress not found"->Utils.str </div>
     }}
  </main>;
};
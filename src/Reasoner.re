open Utils;

module Styles = {
  open Css;
  open Theme;

  let container =
    style([
      display(`flex),
      flex(`num(1.0)),
      flexDirection(`column),
      border(2->px, `solid, Colors.accent),
      alignSelf(`start),
    ]);

  let title = style([fontSize(2.->rem), verticalAlign(`middle)]);
};

module Display = {
  [@react.component]
  let make = () => <div> "display"->str </div>;
};

module Controls = {
  [@react.component]
  let make = () => <div> "Controls"->str </div>;
};

[@genType]
[@react.component]
let make = () => {
  <div className=Styles.container>
    <h1 className=Styles.title> "Reasoner"->str </h1>
    <Display />
    <Controls />
  </div>;
};
open Utils;

module Styles = {
  open Css;
  open Theme;

  let container =
    style([
      flex(`num(1.0)),
      border(Theme.borderWidth, `solid, Colors.error),
    ]);

  let title = style([fontSize(2.->rem), verticalAlign(`middle)]);

  let button =
    style([
      border(Theme.borderWidth, `solid, Colors.accent),
      borderRadius(`percent(50.0)),
      width(4.->rem),
      height(4.->rem),
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
    ]);

  let display =
    style([
      border(Theme.borderWidth, `solid, Colors.accent),
      padding(1.->rem),
    ]);

  let controls =
    style([
      border(Theme.borderWidth, `solid, Colors.accent),
      padding(1.->rem),
      flex(`num(1.0)),
    ]);
};

module Display = {
  [@react.component]
  let make = () => <div className=Styles.display> "display"->str </div>;
};

module Button = {
  [@react.component]
  let make = () => <div className=Styles.button> "button"->str </div>;
};

module Controls = {
  [@react.component]
  let make = (~children) => <div className=Styles.controls> children </div>;
};

[@genType]
[@react.component]
let make = () => {
  <div className=Styles.container>
    <h1 className=Styles.title> "Reasoner"->str </h1>
    <Display />
    <Controls> <Button /> </Controls>
  </div>;
};
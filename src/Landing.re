let logo: string = [%bs.raw {|require('./logo.svg')|}];
open Utils;

module Styles = {
  open Css;
  open Theme;

  let container =
    style([
      display(`flex),
      flex(`num(1.0)),
      backgroundColor(Colors.background),
    ]);

  let logo =
    style([
      height(0->px),
      animationName(Animations.bounceAndDisappear),
      animationDuration(3000),
    ]);

  let title =
    style([
      fontSize(2.->rem),
      animation(Animations.appear),
      animationDuration(3000),
      verticalAlign(`middle),
    ]);

  let button =
    style([
      display(flexBox),
      justifyContent(`center),
      alignItems(`center),
      border(2->px, `solid, Colors.accent),
      backgroundColor(Colors.background),
      color(Colors.accent),
      height(3.0->rem),
      fontSize(1.0->rem),
      animation(Animations.appear),
      animationDuration(4000),
      cursor(`pointer),
      padding2(~v=0.4->rem, ~h=0.8->rem),
    ]);

  let body =
    style([
      display(flexBox),
      flexGrow(1.),
      flexDirection(`row),
      alignItems(`center),
      justifyContent(`spaceBetween),
    ]);
};

module Button = {
  [@react.component]
  let make = (~children) =>
    <button className=Styles.button> children </button>;
};

[@genType]
[@react.component]
let make = () => {
  <>
    <img src=logo className=Styles.logo />
    <div className=Styles.container>
      <div className=Styles.body>
        <h1 className=Styles.title> "Reasoner"->str </h1>
        <Link path="app" className=Styles.button> "Get start here"->str </Link>
      </div>
    </div>
  </>;
};
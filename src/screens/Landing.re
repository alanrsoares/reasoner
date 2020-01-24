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
      height(`zero),
      animationName(Animations.bounceAndDisappear(40.->vh)),
      animationDuration(3000),
    ]);

  let titleWrapper = style([display(`flex)]);

  let title =
    style([
      fontSize(2.6->rem),
      fontWeight(`num(100)),
      color(Colors.text),
      animation(Animations.appear),
      animationDuration(3000),
      verticalAlign(`middle),
      fontFamily(Fonts.display),
    ]);

  let button =
    style([
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
      border(Theme.borderWidth, `solid, Colors.accent),
      backgroundColor(Colors.background),
      color(Colors.accent),
      height(3.0->rem),
      fontSize(1.1->rem),
      fontWeight(`bold),
      animation(Animations.appear),
      animationDuration(4000),
      cursor(`pointer),
      padding2(~v=0.2->rem, ~h=0.8->rem),
    ]);

  let body =
    style([
      display(flexBox),
      flexGrow(1.),
      flexDirection(`row),
      alignItems(`center),
      justifyContent(`spaceBetween),
    ]);

  let letterFadeOut = delay =>
    style([
      animation(Animations.letterFadeOut(2.6->rem)),
      animationDuration(3000),
      animationDelay(delay),
      fontSize(0.->rem),
    ]);
};

module Button = {
  [@react.component]
  let make = (~children) =>
    <button className=Styles.button> children </button>;
};

module Text = {
  [@react.component]
  let make = (~children) => <> children->str </>;
};

module TitleLetter = {
  [@react.component]
  let make = (~animate, ~children) =>
    <span
      className=Css.(
        merge([Styles.title, animate ? Styles.letterFadeOut(0) : ""])
      )>
      <Text> children </Text>
    </span>;
};

let isVowel = x => "aAeEiIoOuU"->String.contains(x);

[@genType]
[@react.component]
let make = () => {
  let brand =
    "REASONER"
    ->split
    ->Belt.List.mapWithIndex((i, x) =>
        <TitleLetter key={i->string_of_int} animate={isVowel(x.[0])}>
          x
        </TitleLetter>
      );

  <div className=Styles.container>
    <div className=Styles.body>
      <div className=Styles.titleWrapper> brand->lst </div>
      <Link path="app" className=Styles.button> "Start here"->str </Link>
    </div>
  </div>;
};
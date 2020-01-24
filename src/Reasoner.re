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

  let screen =
    style([
      border(Theme.borderWidth, `solid, Colors.accent),
      padding(1.->rem),
    ]);

  let controls =
    style([
      border(Theme.borderWidth, `solid, Colors.accent),
      padding(1.->rem),
      display(`flex),
      flexWrap(`wrap),
      flexDirection(`column),
    ]);

  let row =
    style([
      display(`flex),
      justifyContent(`spaceEvenly),
      padding(0.5->rem),
    ]);
};

module Display = {
  [@react.component]
  let make = () => <div className=Styles.screen> "display"->str </div>;
};

module Button = {
  [@react.component]
  let make = (~children) =>
    <div className=Styles.button> children->str </div>;
};

module Row = {
  [@react.component]
  let make = (~children) => <div className=Styles.row> children </div>;
};

module Controls = {
  [@react.component]
  let make = (~children) => <div className=Styles.controls> children </div>;
};

let rows = [|[|7, 8, 9|], [|4, 5, 6|], [|1, 2, 3|], [|0|]|];

[@genType]
[@react.component]
let make = () =>
  <div className=Styles.container>
    <h1 className=Styles.title> "Reasoner"->str </h1>
    <Display />
    <Controls>
      Belt.Array.(
        rows->mapWithIndex((i, row) =>
          <Row key={i->string_of_int}>
            {row
             ->map(n =>
                 <Button key={n->string_of_int}> n->string_of_int </Button>
               )
             ->arr}
          </Row>
        )
      )
      ->arr
    </Controls>
  </div>;
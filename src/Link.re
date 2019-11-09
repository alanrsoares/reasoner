[@react.component]
let make = (~path, ~className, ~children) => {
  let onClick =
    React.useCallback1(_ => ReasonReactRouter.push(path), [|path|]);

  <a onClick className> children </a>;
};
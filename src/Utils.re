let str = ReasonReact.string;

let arr = ReasonReact.array;

let lst = xs => xs->Belt.List.toArray->arr;

let split = s =>
  s
  |> Js.String.split("")
  |> Array.to_list
  |> List.map(s => s.[0] |> String.make(1));
module Colors = {
  open Css;

  let primary = "6200EE"->hex;

  let background = "282c34"->hex;

  let accent = "09d3ac"->hex;

  let surface = "FFF"->hex;

  let text = "EEE"->hex;

  let error = "B00020"->hex;
};

module Fonts = {
  let text = "Montserrat";
  let display = "Fredericka the Great";
};

let borderWidth = Css.(0.1->rem);

module Animations = {
  open Css;

  let bounce =
    keyframes([
      (0, [transform(scale(0.1, 0.1)), opacity(0.0)]),
      (60, [transform(scale(1.2, 1.2)), opacity(1.0)]),
      (100, [transform(scale(1.0, 1.0)), opacity(1.0)]),
    ]);

  let bounceAndDisappear = height' =>
    keyframes([
      (0, [height(height'), transform(scale(0.1, 0.1)), opacity(0.0)]),
      (50, [transform(scale(1.2, 1.2)), opacity(1.0)]),
      (100, [transform(scale(0.0, 0.0)), opacity(0.0), height(`zero)]),
    ]);

  let fadeIn = keyframes([(0, [opacity(0.0)]), (100, [opacity(1.0)])]);

  let letterFadeOut = fontSize' =>
    keyframes([
      (0, [opacity(0.0), fontSize(fontSize')]),
      (30, [opacity(0.0)]),
      (60, [opacity(0.1), color(white)]),
      (90, [opacity(1.0), fontSize(fontSize')]),
      (91, [opacity(0.0), fontSize(fontSize'), color(red)]),
      (100, [opacity(0.0), fontSize(`zero)]),
    ]);

  let appear =
    keyframes([
      (0, [opacity(0.0)]),
      (30, [opacity(0.0)]),
      (60, [opacity(0.1)]),
      (100, [opacity(1.0)]),
    ]);
};
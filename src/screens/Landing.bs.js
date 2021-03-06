// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as $$String from "bs-platform/lib/es6/string.js";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";
import * as Caml_string from "bs-platform/lib/es6/caml_string.js";
import * as Link$Reasoner from "../Link.bs.js";
import * as Theme$Reasoner from "../Theme.bs.js";
import * as Utils$Reasoner from "../Utils.bs.js";

var logo = (require('./logo.svg'));

var container = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flex(/* `num */[
              5496390,
              1.0
            ]),
        /* :: */[
          Css.backgroundColor(Theme$Reasoner.Colors.background),
          /* [] */0
        ]
      ]
    ]);

var logo$1 = Css.style(/* :: */[
      Css.height(/* zero */-789508312),
      /* :: */[
        Css.animationName(Theme$Reasoner.Animations.bounceAndDisappear(Css.vh(40))),
        /* :: */[
          Css.animationDuration(3000),
          /* [] */0
        ]
      ]
    ]);

var titleWrapper = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* [] */0
    ]);

var title = Css.style(/* :: */[
      Css.fontSize(Css.rem(2.6)),
      /* :: */[
        Css.fontWeight(/* `num */[
              5496390,
              100
            ]),
        /* :: */[
          Css.color(Theme$Reasoner.Colors.text),
          /* :: */[
            Css.animation(undefined, undefined, undefined, undefined, undefined, undefined, undefined, Theme$Reasoner.Animations.appear),
            /* :: */[
              Css.animationDuration(3000),
              /* :: */[
                Css.verticalAlign(/* middle */-866200747),
                /* :: */[
                  Css.fontFamily(Theme$Reasoner.Fonts.display),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var button = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(/* center */98248149),
        /* :: */[
          Css.alignItems(/* center */98248149),
          /* :: */[
            Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.accent),
            /* :: */[
              Css.backgroundColor(Theme$Reasoner.Colors.background),
              /* :: */[
                Css.color(Theme$Reasoner.Colors.accent),
                /* :: */[
                  Css.height(Css.rem(3.0)),
                  /* :: */[
                    Css.fontSize(Css.rem(1.1)),
                    /* :: */[
                      Css.fontWeight(/* bold */-1055161979),
                      /* :: */[
                        Css.animation(undefined, undefined, undefined, undefined, undefined, undefined, undefined, Theme$Reasoner.Animations.appear),
                        /* :: */[
                          Css.animationDuration(4000),
                          /* :: */[
                            Css.cursor(/* pointer */-786317123),
                            /* :: */[
                              Css.padding2(Css.rem(0.2), Css.rem(0.8)),
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var body = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexGrow(1),
        /* :: */[
          Css.flexDirection(/* row */5693978),
          /* :: */[
            Css.alignItems(/* center */98248149),
            /* :: */[
              Css.justifyContent(/* spaceBetween */516682146),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

function letterFadeOut(delay) {
  return Css.style(/* :: */[
              Css.animation(undefined, undefined, undefined, undefined, undefined, undefined, undefined, Theme$Reasoner.Animations.letterFadeOut(Css.rem(2.6))),
              /* :: */[
                Css.animationDuration(3000),
                /* :: */[
                  Css.animationDelay(delay),
                  /* :: */[
                    Css.fontSize(Css.rem(0)),
                    /* [] */0
                  ]
                ]
              ]
            ]);
}

var Styles = {
  container: container,
  logo: logo$1,
  titleWrapper: titleWrapper,
  title: title,
  button: button,
  body: body,
  letterFadeOut: letterFadeOut
};

function Landing$Button(Props) {
  var children = Props.children;
  return React.createElement("button", {
              className: button
            }, children);
}

var Button = {
  make: Landing$Button
};

function Landing$Text(Props) {
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, Utils$Reasoner.str(children));
}

var $$Text = {
  make: Landing$Text
};

function Landing$TitleLetter(Props) {
  var animate = Props.animate;
  var children = Props.children;
  return React.createElement("span", {
              className: Css.merge(/* :: */[
                    title,
                    /* :: */[
                      animate ? letterFadeOut(0) : "",
                      /* [] */0
                    ]
                  ])
            }, React.createElement(Landing$Text, {
                  children: children
                }));
}

var TitleLetter = {
  make: Landing$TitleLetter
};

function isVowel(x) {
  return $$String.contains("aAeEiIoOuU", x);
}

function Landing(Props) {
  var brand = Belt_List.mapWithIndex(Utils$Reasoner.split("REASONER"), (function (i, x) {
          return React.createElement(Landing$TitleLetter, {
                      animate: $$String.contains("aAeEiIoOuU", Caml_string.get(x, 0)),
                      children: x,
                      key: String(i)
                    });
        }));
  return React.createElement("div", {
              className: container
            }, React.createElement("div", {
                  className: body
                }, React.createElement("div", {
                      className: titleWrapper
                    }, Utils$Reasoner.lst(brand)), React.createElement(Link$Reasoner.make, {
                      path: "app",
                      className: button,
                      children: Utils$Reasoner.str("Start here")
                    })));
}

var make = Landing;

export {
  logo ,
  Styles ,
  Button ,
  $$Text ,
  TitleLetter ,
  isVowel ,
  make ,
  
}
/* logo Not a pure module */

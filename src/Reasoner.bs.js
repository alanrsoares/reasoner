// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as React from "react";
import * as Theme$Reasoner from "./Theme.bs.js";
import * as Utils$Reasoner from "./Utils.bs.js";

var container = Css.style(/* :: */[
      Css.flex(/* `num */[
            5496390,
            1.0
          ]),
      /* :: */[
        Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.error),
        /* [] */0
      ]
    ]);

var title = Css.style(/* :: */[
      Css.fontSize(Css.rem(2)),
      /* :: */[
        Css.verticalAlign(/* middle */-866200747),
        /* [] */0
      ]
    ]);

var button = Css.style(/* :: */[
      Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.accent),
      /* :: */[
        Css.borderRadius(/* `percent */[
              -119887163,
              50.0
            ]),
        /* :: */[
          Css.width(Css.rem(4)),
          /* :: */[
            Css.height(Css.rem(4)),
            /* :: */[
              Css.display(/* flex */-1010954439),
              /* :: */[
                Css.justifyContent(/* center */98248149),
                /* :: */[
                  Css.alignItems(/* center */98248149),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var display = Css.style(/* :: */[
      Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.accent),
      /* :: */[
        Css.padding(Css.rem(1)),
        /* [] */0
      ]
    ]);

var controls = Css.style(/* :: */[
      Css.border(Theme$Reasoner.borderWidth, /* solid */12956715, Theme$Reasoner.Colors.accent),
      /* :: */[
        Css.padding(Css.rem(1)),
        /* :: */[
          Css.flex(/* `num */[
                5496390,
                1.0
              ]),
          /* [] */0
        ]
      ]
    ]);

var Styles = {
  container: container,
  title: title,
  button: button,
  display: display,
  controls: controls
};

function Reasoner$Display(Props) {
  return React.createElement("div", {
              className: display
            }, Utils$Reasoner.str("display"));
}

var Display = {
  make: Reasoner$Display
};

function Reasoner$Button(Props) {
  return React.createElement("div", {
              className: button
            }, Utils$Reasoner.str("button"));
}

var Button = {
  make: Reasoner$Button
};

function Reasoner$Controls(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: controls
            }, children);
}

var Controls = {
  make: Reasoner$Controls
};

function Reasoner(Props) {
  return React.createElement("div", {
              className: container
            }, React.createElement("h1", {
                  className: title
                }, Utils$Reasoner.str("Reasoner")), React.createElement(Reasoner$Display, { }), React.createElement(Reasoner$Controls, {
                  children: React.createElement(Reasoner$Button, { })
                }));
}

var make = Reasoner;

export {
  Styles ,
  Display ,
  Button ,
  Controls ,
  make ,
  
}
/* container Not a pure module */
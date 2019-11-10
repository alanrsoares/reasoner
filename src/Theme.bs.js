// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";

var primary = Css.hex("6200EE");

var background = Css.hex("282c34");

var accent = Css.hex("09d3ac");

var surface = Css.hex("FFF");

var text = Css.hex("EEE");

var error = Css.hex("B00020");

var Colors = {
  primary: primary,
  background: background,
  accent: accent,
  surface: surface,
  text: text,
  error: error
};

var borderWidth = Css.rem(0.1);

var bounce = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.transform(Css.scale(0.1, 0.1)),
          /* :: */[
            Css.opacity(0.0),
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* tuple */[
          60,
          /* :: */[
            Css.transform(Css.scale(1.2, 1.2)),
            /* :: */[
              Css.opacity(1.0),
              /* [] */0
            ]
          ]
        ],
        /* :: */[
          /* tuple */[
            100,
            /* :: */[
              Css.transform(Css.scale(1.0, 1.0)),
              /* :: */[
                Css.opacity(1.0),
                /* [] */0
              ]
            ]
          ],
          /* [] */0
        ]
      ]
    ]);

var bounceAndDisappear = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.height(Css.vh(40)),
          /* :: */[
            Css.transform(Css.scale(0.1, 0.1)),
            /* :: */[
              Css.opacity(0.0),
              /* [] */0
            ]
          ]
        ]
      ],
      /* :: */[
        /* tuple */[
          50,
          /* :: */[
            Css.transform(Css.scale(1.2, 1.2)),
            /* :: */[
              Css.opacity(1.0),
              /* [] */0
            ]
          ]
        ],
        /* :: */[
          /* tuple */[
            100,
            /* :: */[
              Css.transform(Css.scale(0.0, 0.0)),
              /* :: */[
                Css.opacity(0.0),
                /* :: */[
                  Css.height(/* zero */-789508312),
                  /* [] */0
                ]
              ]
            ]
          ],
          /* [] */0
        ]
      ]
    ]);

var fadeIn = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.opacity(0.0),
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          100,
          /* :: */[
            Css.opacity(1.0),
            /* [] */0
          ]
        ],
        /* [] */0
      ]
    ]);

var letterFade = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.opacity(0.0),
          /* :: */[
            Css.fontSize(Css.rem(3)),
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* tuple */[
          50,
          /* :: */[
            Css.opacity(0.0),
            /* [] */0
          ]
        ],
        /* :: */[
          /* tuple */[
            70,
            /* :: */[
              Css.opacity(0.1),
              /* [] */0
            ]
          ],
          /* :: */[
            /* tuple */[
              90,
              /* :: */[
                Css.opacity(1.0),
                /* :: */[
                  Css.fontSize(Css.rem(3)),
                  /* [] */0
                ]
              ]
            ],
            /* :: */[
              /* tuple */[
                91,
                /* :: */[
                  Css.opacity(0.0),
                  /* :: */[
                    Css.fontSize(Css.rem(3)),
                    /* [] */0
                  ]
                ]
              ],
              /* :: */[
                /* tuple */[
                  100,
                  /* :: */[
                    Css.opacity(0.0),
                    /* :: */[
                      Css.fontSize(Css.rem(0)),
                      /* [] */0
                    ]
                  ]
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var appear = Css.keyframes(/* :: */[
      /* tuple */[
        0,
        /* :: */[
          Css.opacity(0.0),
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          50,
          /* :: */[
            Css.opacity(0.0),
            /* [] */0
          ]
        ],
        /* :: */[
          /* tuple */[
            70,
            /* :: */[
              Css.opacity(0.1),
              /* [] */0
            ]
          ],
          /* :: */[
            /* tuple */[
              100,
              /* :: */[
                Css.opacity(1.0),
                /* [] */0
              ]
            ],
            /* [] */0
          ]
        ]
      ]
    ]);

var Animations = {
  bounce: bounce,
  bounceAndDisappear: bounceAndDisappear,
  fadeIn: fadeIn,
  letterFade: letterFade,
  appear: appear
};

export {
  Colors ,
  borderWidth ,
  Animations ,
  
}
/* primary Not a pure module */

var GAME_LEVELS = [
	[
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"                                       xxxxx!!!!!xxxxx                                       "
		"                                                                                             "
		"                                                                                             "
		"                                                                                             "
		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
	]
/*
	[
		"               v             v            v                v                 v        x       ",
		"                                                                                      x       ",
		"                                                                                      x       ",
		"                                                                                      x       ",
		"                                                                                      x       ",
		"                                                                                      x       ",
		"                                                                                      x       ",
		"   xxx  o                                   =                                         x       ",
		" o xxxxxxxxx        o o                                                               x       ",
		" o x!!!!!!!x       xxxxxx                                                             x       ",
		" o x!!!!!!!x                       o             o o              o o o o             x       ",
		" o x!!!!!!!x                      xxx           xxxxxx          xxxxxxxxxxx           x       ",
		" o x!!!!!!!x                                                    x!!!!!!!!!x           x       ",
		" * x!!!!!!!x                                                    x!!!!!!!!!x           x       ",
		"   x!!!!!!!x                                                    xxxxxpxxxxx    o      x       ",
		"   x!!!!!!!x                                                                  xxx     x       ",
		"   x!!!!!!!x                                                                          x       ",
		"   x!!!!!!!x                                                                          x       ",
		"   x!!!!!!!x                                                                        o x       ",
		"   x!!!!!!!x                                                                      xxxxx       ",
		"   x!!!!!!!x   @      o           o       =          o o o                        x           ",
		"   x!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxx      x       xxxxxxxxxxx                     x           ",
		"   x!!!!!!!!!!!!!!!!!!x                   x          x      x                  o  x           ",
		"   x!!!!!!!!!!!!!!!!!!x                   x          x      x                 xxxxx           ",
		"   x!!!!!!!!!!!!!!!!!!x                   x o        x      x  o           o  x               ",
		"   x!!!!!!!!!!!!!!!!!!x                   xxxx       x      xxxxx         xxxxx               ",
		"   x!!!!!!!!!!!!!!!!!!x                   x          x          x!!!!!!!!!x                   ",
		"   x!!!!!!!!!!!!!!!!!!x                   x          x          x!!!!!!!!!x                   ",
		"   x!!!!!!!!!!!!!!!!!!x                   x        o x          x!!!!!!!!!x                   ",
		"   x!!!!!!!!!!!!!!!!!!x           o       x     | xxxx          xxxxxxxxxxx                   ",
		"   x!!!!!!!!!!!!!!!!!!x          xxxxxxxxxx          x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x                   x          x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x                   x o        x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x                   xxxx       x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x                              x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x                            o x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x                           xxxx                                        ",
		"   x!!!!!!!!!!!!!!!!!!x                              x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x               =              x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x         o                    x                                        ",
		"   x!!!!!!!!!!!!!!!!!!x!!!!!!!!xx     o              x                                        ",
		"   x!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                        ",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
	],
	[
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"x   x!!!!!xsssssssssssssssssssssssssssssssssssssssssssssssssssssssssspssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"x   x!!!!!x                                                                                       x                                                    ",
		"x   x!!!!!x                                  =                                                    x                                                    ",
		"x   x!!!!!x          o  o           o  o             o   o                                     z  x                                                    ",
		"x   x!!!!!x          xxxxxxx     xxxxxxxxxx     xxxxxxxxxxxxxxx            x             xxxxxxxxxx                                                    ",
		"x   x!!!!!x                x     x        x     x             x            x             x                                                             ",
		"x   x!!!!!x                x     x        x     x             x            x             x                                                             ",
		"x @ x!!!!!x                x  o  x        x  o  x             x o        o x             x                                                             ",
		"x   x!!!!!x        xxx     xxxxxxx        xxxxxxx             xxxx      xxxx             x                                                             ",
		"x   x!!!!!x                                                                x             x                                                             ",
		"x   x!!!!!x                                                                x             x                                                             ",
		"x   x!!!!!x                                                                x             x                                                             ",
		"x   x!!!!!xxxx                                                             x             x                                                             ",
		"x   x!!!!!x                                                                x             x                                                             ",
		"x   x!!!!!x                                                                x             x                                                             ",
		"x   x!!!!!x                                          =                     x             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"x   x!!!!!x                                                                x                                                                           ",
		"x   x!!!!!x        xxx                                                     x                                                                           ",
		"x   x!!!!!x                                                                x              o o o o  o  o  o *                                           ",
		"x   x!!!!!x                                                                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"x   x!!!!!x                            =                                   x                                                                           ",
		"x   x!!!!!xxxx                                                             x                                                                           ",
		"x   x!!!!!!!!x                                                             x                                                                           ",
		"x   x!!!!!!!!x                                                             x                                                                           ",
		"x   x!!!!!!!!x   o                                       o                 x                                                                           ",
		"x   x!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx           x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x           x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x           x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  o        x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxx        x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x           x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x           x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x           x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x        o  x                                                                           ",
		"x   x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x        xxxx                                                                           ",
		"x   xxxxxxxxxxpxxxxxxxxxpxxxxxxxxxpxxxxxxxxxpxxxxxxxxxpxxxxxxxxx           x                                                                           ",
		"x                                                                          x                                                                           ",
		"x                                                                          x                                                                           ",
		"x             o         o         o         o         o          o         x                                                                           ",
		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                                           ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",
		"                                                                                                                                                       "
	],
	[
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpxxxxxxxxxxxxxpxxxxxxxxxxxxxpxxxxxxxxxxxxxpxxxxxxxxxxxxxpxxxxxxxxxxxxxpxxxxxxxxxxxxxxxxxxxxxxxxpxxxxxxxxx",
		"                                                                                                                                                      x",
		"                                                                                                                                                      x",
		"                                                                                                                                                      x",
		"                                                                                                                                                      x",
		"                                              o             o             o             o             o             o                                 x",
		"                                xxxxxxx|xxxxxxxxxxxxx|xxxxxxxxxxxxx|xxxxxxxxxxxxx|xxxxxxxxxxxxx|xxxxxxxxxxxxx|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxx    x",
		"                             xxxx             x             x             x             x             x             x                            x    x",
		"                       o  xxxx!!x       =                   x             =             x                    =      x                            x    x",
		"                       xxxx!!!!!x             x             x             x             x             x             x                            x    x",
		"                    xxxx!!!!!!!!x      o      x      o      x      o      x      o      x      o      x      o      x                            x    x",
		"                 xxxxxxxpxxxxxxpx      x             x             x             x             x             x              x                    x o  x",
		"                                       x             x             x             x             x             x              x                    x    x",
		"                                       x                  =        x             =             x      =                     x                    x    x",
		"             o             o           x             x             x             x             x             x              x      o             x    x",
		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        x    x",
		"                                                               xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  o     x    x",
		"                                                                  xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxx     x    x",
		"      @                                                              xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxx        x *  x",
		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx               =                xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                  x    x",
		"                                       xxxx                                xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                  x    x",
		"                                          xxxx                                xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x z             o  x    x",
		"                                             xxxx                                xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxx     xxxx    x",
		"                                                xxxx                               =xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x        x    x",
		"                                                   xxxx o                              xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x        x    x",
		"                                                      xxxx                                xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x        x    x",
		"                                                         xxxx                                xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x  o     x    x",
		"                                                            xxxx         =                      xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxx     x    x",
		"                                                               xxxx                                xxxx!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxx        x    x",
		"                                                                  xxxx                                xxxx!!!!!!!!!!!!!!!!!!!!x                  x    x",
		"                                                                     xxxx                                xxxx!!!!!!!!!!!!!!!!!x                  x    x",
		"                                                                        xxxx o                      =       xxxx!!!!!!!!!!!!!!x z             o  x    x",
		"                                                                           xxxx                                xxxx!!!!!!!!!!!xxxxxxxxxxx     xxxx    x",
		"                                                                              xxxx                                xxxx!!!!!!!!!!!!!!!!!!x        x    x",
		"                                                                                 xxxx                                xxxx!!!!!!!!!!!!!!!x        x    x",
		"                                                                                    xxxx         =                      xxxx!!!!!!!!!!!!x        x    x",
		"                                                                                       xxxx                                xxxx!!!!!!!!!x  o     x    x",
		"                                                                                          xxxx                                xxxxx!!!!!xxxx     x    x",
		"                                                                                             xxxx                                 xxxx!!x        x    x",
		"                                                                                                xxxx o                =              xxxx        x    x",
		"                                                                                                   xxxx                                          x     ",
		"                                                                                                      xxxx             o                     o   x     ",
		"                                                                                                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"                                                                                                                                                       ",
		"                                                                                                                                                       ",

	],
	[
		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"xh                                                                                                                                                    x",
		"xh                                                                                                                                                    x",
		"xh               o                     o                         o                  o                       o                                         x",
		"xx         xxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxx   xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxx                             x",
		"x                          x   x                 x    x   x              x   x             x   x                        x              =              x",
		"x                          xxxxx                 x    xxxxx              xxxxx             xxxxx                        x      xxxxx       xxxxx      x",
		"x                                                x      v                  v                 v                          x   |                     |   x",
		"x                                                x                                                                      x                             x",
		"x                                                x                                                                      x o    =     o o o     =    o x",
		"x                                                x                                                                      xxxx   x    xxxxxxx    x   xxxx",
		"x                                             *  x                                                                      x      x               x      x",
		"xssssssssssxxxxxssssssssssxxxxxxxssssssssssxxxxxxx                                                                      x      x               x      x",
		"x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x                                                                      x      x o     |     o x      x",
		"xxxxxxxpxxxxxxpxxxxxxpxxxxxxpxxxxxxpxxxxxxpxxxxxxx                x                                      o              x    xxxxx     =     xxxxx    x",
		"x                                                xxxxx            xxxxxxxxxxxxxxx                x     xxxxxx           x        x           x        x",
		"x                                                x                       x             =         x                      x        x o       o x        x",
		"x                                                x                       x             =         x                   o  x        xxxx     xxxx        x",
		"x                                                x                       x             =         x  |              xxxxxx o                         o x",
		"x                                                x                       x  o o        =         x                      xxxx                       xxxx",
		"x                                                xxxxxxxxxxxxxxxx        xxxxxxxx                x                      x                             x",
		"x                                                                               x                        o o o          x           o  o  o           x",
		"x                                              |                                x    o o o              xxxxxxx         x   |    xxxxxxxxxxxxx    |   x",
		"x                                                                               x   xxxxxxx                             x                             x",
		"x                                                                             z x                                   o o x                             x",
		"x                                                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                  xxxxxx        o   o    o   o       x",
		"x                                                x                                        o  o                          x    xxxxxxxxxxxxxxxxxxxxx    x",
		"x                                              o x                                      xxxxxxxx       o o              x                             x",
		"x                                            xxxxx        o o                                       xxxxxxxxxx          xxx                           x",
		"x                                            x           xxxxx    |                                                     xz                            x",
		"x                                            x h                                              o  o                      xxx                       xxxxx",
		"x                                        xxxxx                        o  o                   xxxxxx                                                   x",
		"                                         x                           xxxxxx                                                                           x",
		"   @            o            o           x z                                         o  o                                      o                o     x",
		"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        o  o                          xxxxxx                         xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"                                                     xxxxxx                                                                                            ",
		"                                                                            o  o                                                                       ",
		"                                                                           xxxxxx                                                                      ",
		"                                                                                                                                                       ",
		"                                                                  o  o                                                                                 ",
		"                                                                 xxxxxx                                                                                ",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
	]
*/
];

if (typeof module != "undefined" && module.exports)
  module.exports = levels;




















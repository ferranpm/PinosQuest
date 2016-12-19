const Assets = {
  menu: {
    background: createImage('img/background_menu.png'),
    button: [
      createImage('img/jugar1.png'),
      createImage('img/jugar2.png')
    ]
  },

  game: {
    bullet: createImage('./img/bullet.png'),
    player: createImage('./img/pino.png'),
    ramen: createImage('./img/ramen.png'),
    enemies: [
      createImage('./img/cage.png'),
      createImage('./img/frances.png'),
      createImage('./img/steam.png')
    ],
    player: {
      normal: createImage('./img/pino.png'),
      touched: createImage('./img/pino_omg.png'),
      eating: createImage('./img/pino_nom.png')
    },
    background: [
      createImage('img/pisa.png'),
      createImage('img/eiffel.png'),
      createImage('img/coliseo.png'),
      createImage('img/canada.png'),
      createImage('img/delacroix.png')
    ],
  },

  outro: {
    background: createImage('img/background_outro.png')
  }
}
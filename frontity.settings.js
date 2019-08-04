const settings = {
  "name": "theme-goiblas",
  "state": {
    "frontity": {
      "url": "goiblas.wordpress.com",
      "title": "Blog de Desarrollo WordPress con Javascript ⚛️",
      "description": "👋! Soy Jesús Olazagoitia, En este blog encontrarás 🔮 artículos sobre desarrollo WordPress con JavaScript, 🏗️ creación de bloques para Gutenberg, ⚛️ React y mis expericias 🤪 como desarrollador Frontend",
      "lang": "es",
      "footer": "Desarrollado con Frontity y WordPress",
      "hero": {
        "content": "👋 Soy Jesús Olazagoitia y escribo sobre desarrollo WordPress con JavaScript",
        "cta": {
          "content": "¿Quíeres saber más de mi?",
          "link": "/sobre-mi/"
        }
      },
      "author": {
        "name": "Jesús Olazagoitia",
        "link": "/sobre-mi/"
      }

    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Blog",
              "/"
            ],
            [
              "Projectos",
              "/proyectos/"
            ],
            [
              "Sobre mi",
              "/sobre-mi/"
            ]
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://horus.online/wp-json/",
          "isWPCom": false
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

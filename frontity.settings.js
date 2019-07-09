const settings = {
  "name": "theme-goiblas",
  "state": {
    "frontity": {
      "url": "goiblas.wordpress.com",
      "title": "Jesús Olazagoitia",
      "description": "Blog sobre diseño y desarrollo web",
      "lang": "es",
      "footer": "Desarrollado con Frontity y WordPress"
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
              "Charlas",
              "/charlas/"
            ],
            [
              "Sobre mi",
              "/sobre-mi/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false,
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/goiblas.wordpress.com",
          "isWPCom": true
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

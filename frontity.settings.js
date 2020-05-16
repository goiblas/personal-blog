const settings = {
  name: "theme-goiblas",
  state: {
    frontity: {
      url: "goiblas.com",
      title: "Blog de Desarrollo WordPress con Javascript ⚛️",
      description:
        "👋! Soy Jesús Olazagoitia, En este blog encontrarás 🔮 artículos sobre desarrollo WordPress con JavaScript, 🏗️ creación de bloques para Gutenberg, ⚛️ React y mis expericias 🤪 como desarrollador Frontend",
      lang: "es",
      hero: {
        content:
          "👋 Soy Jesús Olazagoitia, escribo sobre desarrollo WordPress con JavaScript",
        cta: {
          content: "¿Quíeres saber más de mi?",
          link: "/sobre-mi/"
        }
      },
      author: {
        name: "Jesús Olazagoitia",
        link: "/sobre-mi/"
      }
    }
  },
  packages: [
    {
      name: "frontity-goiblas-blog",
      state: {
        theme: {
          menu: [
            ["Blog", "/"],
            ["Proyectos", "/proyectos/"],
            ["Sobre mí", "/sobre-mi/"]
          ]
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://horus.online/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "goiblas-disqus-comments"
  ]
};

export default settings;

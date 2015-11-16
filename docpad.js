module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Web Design Boteconferencis",
      description: "Nós trabalhamos com web e amamos falar sobre tecnologia e empreendedorismo, fizemos esse evento para criar um espaço onde profissionais e empreendedores possam trocar idéias e tomar cerveja, como se conversa com amigos em um boteco de forma descontraída.",
      date: "26 de Novembro às 20hrs",
      // If your event is free, just comment this line
      price: "R$35,00",
      venue: "House of Learning",
      address: "R. Dr. Virgílio de Carvalho Pinto, 69 - Pinheiros",
      city: "São Paulo",
      state: "SP"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Comprar Ingressos!",
        link: "https://www.ingresse.com/boteconferencis"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //     repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://webdesignbrasil.github.io/Boteconferencis/",
      googleanalytics: "UA-11980538-7"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'speakers',
      'partners',
      'location'
      // 'sponsors',
      // 'schedule',
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      speakers: "Participantes",
      schedule: "Agenda",
      sponsors: "Patrocinadores",
      partners: "Parceiros",
      contact: "Contato"
    },

    // The entire schedule
    schedule: [
      {
        name: "Gabriel Benarrós",
        photo: "http://i.imgur.com/JsZ5ER9.jpg",
        bio: "Empreendedor, fundador da Ingresse.",
        company: "Ingresse",
        link: {
          href: "https://www.linkedin.com/in/benarros/pt",
          text: "linkedin"
        }
      },
      {
        name: "Michel Oliveira",
        photo: "themes/yellow-swan/img/palestrantes/foto-michel-oliveira.jpg",
        bio: "Líder, Desenvolvedor Back-end e ator",
        company: "Coltrane.Co",
        link: {
          href: "https://br.linkedin.com/in/micheloliveira/pt",
          text: "linkedin"
        }
      },
      {
        name: "David Ruiz",
        bio: "CTO da Ingresse e da Futura Networks (Campus Party), representante da Mozilla",
        photo: "http://i.imgur.com/BUZmzZA.jpg",
        company: "Ingresse, Campus Party e Mozilla",
        link: {
          href: "https://br.linkedin.com/in/wupsbr",
          text: "linkedin"
        }
      },
      {
        name: "Daniel Borlino",
        photo: "http://i.imgur.com/meaa2sc.jpg",
        bio: "Organizador do Boteconference e Engenheiro Front-end especializado em Angular.js na Ingresse.com.",
        company: "Ingresse",
        link: {
          href: "https://www.facebook.com/daniel.terra",
          text: "facebook"
        }
      },
      {
        name: "Filipe Santos",
        photo: "http://i.imgur.com/PWJYfle.jpg",
        bio: "Organizador do Boteconference, Fundador da EX3 Comunicação, programador front-end.",
        company: "EX3 Comunicação",
        link: {
          href: "https://www.facebook.com/Filipe.santss",
          text: "facebook"
        }
      },
      {
        name: "Keven Jesus",
        photo: "http://i.imgur.com/JGqLfHH.jpg",
        bio: "Organizador do Boteconference, programador front-end especializado em ReactJS.",
        company: "Grupo KRS",
        link: {
          href: "https://www.facebook.com/kevenjesus",
          text: "facebook"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Ingresse",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "https://www.ingresse.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Ingresse",
        logo: "themes/yellow-swan/img/ingresse.png",
        url: "https://www.ingresse.com"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};

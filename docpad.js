module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Web Design Boteconferencis",
      description: "O Web Design Boteconferencis vem com uma ideia inovadora no cenário de tecnologia, onde criamos um espaço propício para elevar seu networking para outro nível. Temos espaço para todos, seja você designer, programador ou empreendedor!",
      date: "26 de Novembro às 20hrs",
      // If your event is free, just comment this line
      price: "R$30,00",
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
      url: "http://boteconferencis.ingresse.com",
      googleanalytics: "UA-11980538-7"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      // 'schedule',
      // 'sponsors',
      'partners'
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
        photo: "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-frc3/v/t1.0-9/548900_10151326446686436_1006774967_n.jpg?oh=906016226a80aa8a72b9b1e29f4ca879&oe=5684C697&__gda__=1456055770_16d509b04935bbc47ae1b5c577b65e19",
        bio: "Empreendedor fundador da Ingresse.",
        company: "Ingresse",
        link: {
          href: "https://www.linkedin.com/in/benarros/pt",
          text: "linkedin"
        }
      },
      {
        name: "David Ruiz",
        photo: "https://scontent-atl3-1.xx.fbcdn.net/hphotos-xlp1/v/t1.0-9/12088294_10153269676857956_8327263627422645534_n.jpg?oh=427c0751f3c3c25731271c536b76e4b3&oe=56CBD53F",
        bio: "CTO da Ingresse e da Futura Networks (Campus Party), representante da Mozilla",
        company: "Ingresse, Campus Party e Mozilla",
        link: {
          href: "https://br.linkedin.com/in/wupsbr",
          text: "linkedin"
        }
      },
      {
        name: "Daniel Borlino",
        photo: "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xtf1/v/t1.0-9/10583981_767334813303798_7989639994818683624_n.jpg?oh=eef76e93cc22e543f7d7967cab008134&oe=56CDC85E&__gda__=1456648453_5652966b699c76e203619028d9edf975",
        bio: "Organizador do Boteconference e Engenheiro Front-end especializado em Angular.js na Ingresse.com.",
        company: "Ingresse e Meatless",
        link: {
          href: "https://www.facebook.com/daniel.terra",
          text: "facebook"
        }
      },
      {
        name: "Filipe Santos",
        photo: "https://scontent-atl3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11822295_999105336809024_9126701963551687503_n.jpg?oh=c96ce20d8ea60722cf58095044c747a3&oe=56915849",
        bio: "Organizador do Boteconference, Fundador da EX3 Comunicação, programador fron-end.",
        company: "EX3 Comunicação",
        link: {
          href: "https://www.facebook.com/Filipe.santss",
          text: "facebook"
        }
      },
      {
        name: "Keven Jesus",
        photo: "https://scontent-atl3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12003945_714135088691588_5403367596511610957_n.jpg?oh=37b2895f76023d09a1063da5e9099005&oe=56C978AA",
        bio: "Organizador do Boteconference, programador fron-end.",
        company: "Grupo KRS",
        link: {
          href: "https://www.facebook.com/kevenjesus",
          text: "facebook"
        }
      },
      {
        name: "Tereza Alux",
        photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p160x160/12032238_900831266674127_7902646899766538149_n.jpg?oh=991e291681e32cb2fa06aa5ddab0b2a6&oe=56D2FD8C&__gda__=1453259312_94f9cc5f161748b2e6980ca993f9d686",
        bio: "Organizadora do Boteconference, colunista no Choco la Design, Designer.",
        company: "Choco la Design",
        link: {
          href: "https://www.facebook.com/tetecristina",
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

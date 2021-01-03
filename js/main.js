// MILESTONE 1 - Creazione del layout di boolgram

var app = new Vue ({
  el: "#root",
  data: {
    contacts: [
      // primo contatto
      {
        name: "Puppibeibi",
        avatar: "_1",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // secondo contatto
      {
        name: "Andrea",
        avatar: "_2",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // terzo contatto
      {
        name: "Saretta",
        avatar: "_3",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // quarto contatto
      {
        name: "Zio Franco",
        avatar: "_4",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // quinto contatto
      {
        name: "Papà",
        avatar: "_5",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // sesto contatto
      {
        name: "Raffaello",
        avatar: "_6",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // settimo contatto
      {
        name: "Steven",
        avatar: "_7",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // ottavo contatto
      {
        name: "Zia Bruna",
        avatar: "_8",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received"
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received"
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
    ],

    activeContactIndex: 0,
  },
  methods: {

  }
});

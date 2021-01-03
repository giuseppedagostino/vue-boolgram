// MILESTONE 1 - Creazione del layout di boolgram

var app = new Vue ({
  el: "#root",
  data: {

    contacts: [
      // primo contatto
      {
        name: "Puppibeibi",
        avatar: "mara",
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
        avatar: "andrea",
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
            time: "16:00:47",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // terzo contatto
      {
        name: "Saretta",
        avatar: "sara",
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
            time: "13:50:00",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // quarto contatto
      {
        name: "Zio Franco",
        avatar: "alessandro",
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
            time: "12:43:24",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // quinto contatto
      {
        name: "Papà",
        avatar: "gigi",
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
            time: "12:40:37",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // sesto contatto
      {
        name: "Raffaello",
        avatar: "raffaello",
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
            time: "9:08:20",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // settimo contatto
      {
        name: "Steven",
        avatar: "steven",
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
            time: "8:30:12",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
      // ottavo contatto
      {
        name: "Zia Bruna",
        avatar: "bruna",
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
            time: "8:25:02",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent"
          },
        ]
      },
    ],

    activeContactIndex: null,
    selectedUser: {},

  },
  methods: {

    // prende l'oggetto relativo al contatto attivo tramite l'indice
    selectUser: function(index) {
      this.selectedUser = this.contacts[index];
      console.log(this.selectedUser);
    },

    // prende l'indice dell'oggetto cliccato
    activateContact: function(index) {
      this.activeContactIndex = index;
    }

  }
});

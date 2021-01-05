var app = new Vue ({
  el: "#root",
  data: {

    contacts: [
      // primo contatto
      {
        name: "Peach",
        avatar: "mara",
        visible: true,
        messages: [
          {
            time: "15:30:55",
            text: "Amò ce ne andiamo da mia sorella questo weekend?",
            status: "received",
            visibility: false,
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received",
            visibility: false,
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent",
            visibility: false,
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
            time: "9:34:12",
            text: "Allo a che ora andiamo a fare spesa?",
            status: "sent",
            visibility: false,
          },
          {
            time: "10:43:00",
            text: "Senti facciamo oggi appena prima di pranzo?",
            status: "received",
            visibility: false,
          },
          {
            time: "10:49:23",
            text: "Tanto Giusè due cose dobbiamo prendere e alla Coop dietro casa in una mezz'oretta ce la facciamo",
            status: "received",
            visibility: false,
          },
          {
            time: "10:50:44",
            text: "Si dai.. alle 12:30 giù",
            status: "sent",
            visibility: false,
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
            time: "9:44:53",
            text: "Sa devi venire in campagna? Mi serve una risposta entro stamattina ...",
            status: "sent",
            visibility: false,
          },
          {
            time: "12:33:22",
            text: "No pe mi dispiace, ma ho un pò da studiare oggi ....",
            status: "received",
            visibility: false,
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
            time: "10:45:00",
            text: "Oh Peppe ma quindi?",
            status: "received",
            visibility: false,
          },
          {
            time: "10:54:45",
            text: "Bestiaaaa dimmi tutto",
            status: "sent",
            visibility: false,
          },
          {
            time: "10:55:50",
            text: "Andiamo stasera in campagna si? Io ci sono non ho capito chi altri",
            status: "received",
            visibility: false,
          },
          {
            time: "10:56:10",
            text: "Sisi Ale andiamo siamo noi 4 e forse Sara e Andrea si aggiungono all'ultimo",
            status: "sent",
            visibility: false,
          },
          {
            time: "10:56:47",
            text: "Aperitivo salumi e formaggi, olive, arachidi, ecc + aperol spritz e amaro",
            status: "sent",
            visibility: false,
          },
          {
            time: "11:00:00",
            text: "Ca ciaaaaaaaaaaaaffà",
            status: "received",
            visibility: false,
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
            status: "received",
            visibility: false,
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received",
            visibility: false,
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent",
            visibility: false,
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
            status: "received",
            visibility: false,
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received",
            visibility: false,
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent",
            visibility: false,
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
            status: "received",
            visibility: false,
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received",
            visibility: false,
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent",
            visibility: false,
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
            status: "received",
            visibility: false,
          },
          {
            time: "15:32:04",
            text: "Voli Ryanair andata e ritorno a €85, partiamo venerdì sera alle 20:50",
            status: "received",
            visibility: false,
          },
          {
            time: "16:15:22",
            text: "Assolutamente si!! Appena esco da lavoro mi preparo due cose da portare",
            status: "sent",
            visibility: false,
          },
        ]
      },
    ],

    activeContactIndex: 0,
    newMessage: "",
    // valore dell'input per la ricerca contatti
    inputFilter: "",
    filteredContacts: [],

  },

  // inizializzo l'array di contatti filtrati come pari a quello dei contatti totali, poichè il v-for ora scorre filteredContacts
  created: function() {
    this.filteredContacts = this.contacts;
  },

  methods: {

    // prende l'indice dell'oggetto cliccato
    activateContact: function(index) {
      this.activeContactIndex = index;
      console.log("utente selezionato " + this.contacts[this.activeContactIndex].name);
    },

    // aggiunge il nuovo messaggio + risposta del bot
    addNewMessage: function() {
      var newObj = {
        time: dayjs().format("HH:mm:ss"),
        text: this.newMessage,
        status: "sent"
      }
      if (this.newMessage != "" && this.newMessage != " ") {
        this.contacts[this.activeContactIndex].messages.push(newObj);
        this.newMessage = "";
        // aggiunta messaggio bot
        var self = this;
        setTimeout(function() {
          var newBotObj = {
            time: dayjs().format("HH:mm:ss"),
            text: "Si, va bene!",
            status: "received"
          }
          self.contacts[self.activeContactIndex].messages.push(newBotObj);
        },4000);
      }
    },

    searchContact: function() {
      // console.log(this.searchFilter);
      if (this.inputFilter != "") {
        this.filteredContacts = this.contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(this.inputFilter.toLowerCase());
        });
      } else {
        // se l'input è vuoto, ritorna tutti i contatti presenti
        this.filteredContacts = this.contacts;
      }
    },

    showOptions: function(index) {
      console.log("showOptions collegato " + index);
      if (this.contacts[this.activeContactIndex].messages[index].visibility = false) {
        this.contacts[this.activeContactIndex].messages[index].visibility = true;
      } else {
        this.contacts[this.activeContactIndex].messages[index].visibility = false;
      }
    },

    removeMessage: function(index) {
      console.log("removeMessage collegato " + index);
      // passando l'indice a splice rimuovo esattamente l'elemento selezionato
      this.contacts[this.activeContactIndex].messages.splice(index, 1);
    },

  }
});

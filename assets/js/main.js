/* 
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


var app = new Vue({
    el: '#app',
    data: {
        mail: "",
        visualizzaMail: [

        ],
    },
    created() {
        const self = this
        for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function (response) {
                // handle success
                console.log(response)
                self.mail = response.data.response;
                
                self.visualizzaMail.push(self.mail)
                // console.log(self.mail);
                console.log(self.visualizzaMail);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })


    }

            
        }
        

});
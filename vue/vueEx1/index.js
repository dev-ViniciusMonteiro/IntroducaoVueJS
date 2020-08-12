
//No núcleo do Vue.js está um sistema que nos permite declarativamente renderizar dados no DOM (Document Object Model) usando uma sintaxe de template simples:
//Apenas abra o console JavaScript de seu navegador (agora mesmo, nesta página) e atribua um valor diferente em app.message
var app = new Vue({ 
    el: '#app',
    data: {
        message: 'ola Vue!'
    }
});


//Além de simples interpolação de texto, podemos interligar atributos de elementos:
//app2.message = 'alguma nova mensagem', novamente poderá ver que o HTML vinculado - neste caso, o atributo title - foi atualizado imediatamente.
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
  })


  //Também é fácil alternar a presença de um elemento:
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true //false faz com que suma
    }
  })


  //Existem mais algumas diretivas, cada uma com sua própria funcionalidade. Por exemplo, a diretiva v-for pode ser usada para exibir uma lista de itens usando dados de um Array:
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Aprender JavaScript' },
        { text: 'Aprender Vue' },
        { text: 'Criar algo incrível' }
      ]
    }
  })


  //Para permitir aos usuários interagir com o aplicativo, podemos usar a diretiva v-on para anexar escutas a eventos (event listeners) que invocam métodos em nossas instâncias Vue:
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Olá Vue!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })

  
  //Vue também provê a diretiva v-model, que torna a interligação de mão dupla (two-way binding) entre a caixa de texto e o estado da aplicação uma moleza:
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Olá Vue!'
    }
  })


  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetais' },
        { id: 1, text: 'Queijo' },
        { id: 2, text: 'Qualquer outra coisa que humanos podem comer' }
      ]
    }
  })

//app.message = 'tenha um bom dia'
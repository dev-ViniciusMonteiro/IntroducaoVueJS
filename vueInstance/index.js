var app = new Vue({ 
    el: '#app',
    data: {
        message: 'ola Vue!'
    }
});




// Nosso objeto de dados
var data = { a: 1 }

// O objeto é adicionado à instância Vue
var vm = new Vue({
  data//:data inplicito
})

// É uma referência ao mesmo objeto!
console.log(vm.a === data.a) // => true

// Atribuir à propriedade na instância
// também afeta o dado original
vm.a = 2
console.log(data.a) // => 2

// ... e vice-versa
data.a = 3
console.log(vm.a) // => 3

//e você sabe que precisará de uma propriedade no futuro, mas ela inicia vazia ou não existente, precisará especificar algum valor inicial


var obj = {
    foo: 'bar'
  }
  
  Object.freeze(obj)//dara erro ao tentar
  
  new Vue({
    el: '#app-2',
    data: obj,
  })



  new Vue({
      el: '#app-3',
    data: {
      a: 1
    },
    created: function () {
      // `this` aponta para a instância
      console.log('a é: ' + this.a)
    }
  })



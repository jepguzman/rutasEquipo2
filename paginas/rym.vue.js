var RyM = {
  template: '<div> ' 
  	+'<h1>Personajes Rick & Morty</h1> '
    +'<div v-for="item in personajes" >'
    +'<div class="card m-1 bg-dark" style="width:640px;"> '
    +'        <div class="card-body"> '
    +'            <div class="row"> '
    +'                <div class="col"> '
    +'                    <img class="card-img-top"  '
    +'                    v-bind:src="item.image" '
    +'                </div> '
    +'                <div class="col"> '
    +'                    <h3 class="card-title text-warning"> '
    +'                        {{item.name}} '    
    +'                    </h3> '
    +'                    <p class="card-text text-light"> '
    +'                        Estatus :  {{item.status}}<br>'
    +'                        Especie :  {{item.species}}<br>'
    +'                        Género :  {{item.gender}}<br>'
    +'                    </p> '
    +'                </div> '
    +'            </div> '
    +'        </div> '
    +'    </div> '
  + '</div>'
  + '</div>',

  data:function name() {
    return{
      personajes:[]
    }    
  },
  mounted(){
     this.pedirDatos();
  },
  methods:{
    pedirDatos:function(){
      fetch('http://192.168.1.2/rym/personajes')
      .then(respuesta=>respuesta.json())
      .then(respuesta=>{
        this.personajes=respuesta.results;
        console.log(this.personajes);
      })
    }
  },

}  

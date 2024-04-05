const fs = require('fs');
const bici = require('./datosBici')

const dhBici = {
bicicletas : bici,
     buscarBici : function(id){
           for(let i = 0; i < bici.length; i++){
              if(bici[i].id == id) {
                 return bici[i];
              }
           }
           return null

  },

 /*venderBici : function (id) {
        const venderBici = this.bicicletas.map((bicicleta) => {
       if(bicicleta.id === id){
        bicicleta.vendida = true 
       }
       return bicicleta
    })
    fs.writeFileSync("./bicicletas.json",JSON.stringify(venderBici, null, 2),'utf-8')
          return this.buscarBici(id)
}
*/


 venderBici : function (id) {
        
    const biciAVender = this.buscarBici(id);

    if(!biciAVender){
        return "Bicicleta no encontrada"
    }else {
        const bicicletasActualizadas = this.bicicletas.map(bici => {
            if(bici.id === id){
                bici.vendida = true;
            }
            return bici
        })

        fs.writeFileSync('./bicicletas.json', JSON.stringify(bicicletasActualizadas,null,2),'utf-8')

        return this.buscarBici(id)
    }}}

    console.log(dhBici.venderBici(6))

   /* venderBici: function(id){
        if(this.buscarBisi(id) != null){
           let index = bisi.indexOf(this.buscarBisi(id));
           bisi[index].vendido = true;
           }
     }*/
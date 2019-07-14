class Character{

  constructor(name,lifePoints,attackPoints) {
  this.name=name;
  this.lifePoints=lifePoints;
  this.attackPoints=attackPoints;

}
attack=function(opponent){
  let newlifePoints=opponent.lifePoints - this.attackPoints;
  document.getElementById('console').innerHTML =`<p> ${this.name}
  Attacking......`;
  opponent.lifePoints=newlifePoints;
    if(opponent.lifePoints== 0){
      document.getElementById('console').innerHTML =`<p> ${this.name}
      Wins!!......<br>`;
    }
    if (opponent.lifePoints== 0){
      location.reload(true);
    }
  update();
}




print=function(){
  document.getElementById(this.name).innerHTML =`<h4>Name: ${this.name}
  <br> Life Points: ${this.lifePoints} <br> Attack Points: ${this.attackPoints}
  <br> </h4>`;

  }

}

const toad=new Character('Toad', 100,10);
const yoshi=new Character('Yoshi',100,20);

function update(){
  toad.print(toad);
  yoshi.print(yoshi);

}

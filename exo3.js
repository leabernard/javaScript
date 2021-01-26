const a = 3;
const b = 2;

function multiplier(x = 8){
  return x * 3;
}
function affiche(){
    alert(multiplier(a));
    alert(multiplier(b));
    alert(multiplier());
}
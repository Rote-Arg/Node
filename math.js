/* CREANDOLO UNO MISMO
const Math = {}

    function add(x, y){
        return x + y;
    }

    function substract(x, y) {
        return x - y;
    }

    function multiply(x, y) {
        return x * y;
    }

    function divide(x, y) {
        if(y === 0){
            return 'No se puede divir por 0';
        } else {
            return x / y;
        }
    }

    function hello(name){
        return `Hi ${name}`
    }
// exports.add = add; solo exporta una propiedad de un objeto
Math.add = add;  // Agrega las funciones al objeto 
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
Math.hello = hello;

module.exports = Math; //Exporta objetos, funciones, variables
 */

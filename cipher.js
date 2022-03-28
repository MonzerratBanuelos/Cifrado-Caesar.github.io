const cipher = {
  encode: function (offset,mensaje) {
    if(typeof(offset) === "number" && typeof(mensaje) === "string" && mensaje !== ""){
      let encoded = "";
      for (let i = 0; i < mensaje.length; i++) {
      let letraAscii = mensaje.charCodeAt(i);
      if(letraAscii >= 65 && letraAscii <= 90){
        encoded += String.fromCharCode(((letraAscii - 65 + offset) % 26) + 65);
      }else if (letraAscii >=97 && letraAscii <=122){
        encoded += String.fromCharCode((letraAscii - 97 + offset) % 26 + 97);
      }else{
        encoded += String.fromCharCode(letraAscii);
      }
    } return encoded;
    }else{
      throw new TypeError("Tipo de dato invalido o inexistente");
    }
  },
  decode: function (offset,mensaje) {
    if(typeof(mensaje) === "string" && typeof(offset) === "number" && mensaje !== ""){
      var decoded= "";
      for (let i = 0; i < mensaje.length; i++) {
      let letraAscii = mensaje.charCodeAt(i);
      if(letraAscii >= 65 && letraAscii <= 90){
        decoded += String.fromCharCode((letraAscii - 90 - offset) % 26 + 90);
      }else if (letraAscii >= 97 && letraAscii <= 122){
        decoded += String.fromCharCode((letraAscii - 122 - offset) % 26 + 122);
      }
      else{
        decoded += String.fromCharCode(letraAscii);
      }
    }
    return decoded;
    }else{
      throw new TypeError ("tipo de dato invalido o inexistente")
    }
    
}
};
export default cipher;

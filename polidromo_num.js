// var word = prompt("Ingresa un texto");

    function polindromo_palabra(word){
        var word = document.getElementById("txtbox").value;
        word = word.toString;
        var long = word.length;
        var reverse = "";

        if(long==0){
            alert("No se ingresó ningún valor");
        }else{
            for(var i=long-1; i>=0; i--){
                reverse += word.charAt(i);
            }
            if(word != reverse){
                document.write("No es polindormo :c");
            }else{
                document.write("Es polindroma!!! :D");
            }
        }
            
    }

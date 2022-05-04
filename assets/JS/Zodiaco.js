alert("Bienvenido a la pagina de Mizada xd")

dia= prompt("Ingresa tu dia de nacimiento");
mes= prompt("Ingresa, con número, el mes en que naciste");

    if ((dia>=21 && mes==3) || (dia<=20 && mes==4))
   { console.log("Eres Aries, fueguito");}

    else if ((dia>=21 && mes==4) || (dia<=20 && mes==5))
   { console.log("Eres Tauro, tierrita");}

    else if ((dia>=21 && mes==5) || (dia<=21 && mes==6))
   { console.log("Eres Geminis, agüita");}

    else if ((dia>=22 && mes==6) || (dia<=22 && mes==7))
   { console.log("Eres Cancer, airesito");}

    else if ((dia>=23 && mes==7) || (dia<=23 && mes==8))
   { console.log("Eres Leo, fueguito");}

    else if ((dia>=24 && mes==8) || (dia<=22 && mes==9))
   { console.log("Eres Virgo, tierrita");}

    else if ((dia>=23 && mes==9) || (dia<=22 && mes==10))
   { console.log("Eres Libra, airesito");}

    else if ((dia>=23 && mes==10) || (dia<=22 && mes==11))
   { console.log("Eres Escorpio, agüita");}

   else if ((dia>=23 && mes==11) || (dia<=21 && mes==12))
   { console.log("Eres Sagitario, fueguito");}

   else if ((dia>=22 && mes==12) || (dia<=20 && mes==1))
   { console.log("Eres Capricornio, tierrita");}

   else if ((dia>=21 && mes==1) || (dia<=19 && mes==2))
   { console.log("Eres Acuario, airesito (no tengo idea, debería ser agua pero pues aja)");}

   else if ((dia>=20 && mes==2) || (dia<=20 && mes==3))
   { console.log("Eres Piscis, agüita");}

   else {
       console.log("No ingresaste fecha válida, no signo. Siguiente!")
   }
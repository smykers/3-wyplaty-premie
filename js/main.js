
const obliczWyplate = ()=>{
    

    let tabCzas = new Array;
    let tabNames = new Array;
    let wyplata = document.getElementsByClassName('wyplata');

    

    for(let n=0; n< wyplata.length; n++)
    {
        let pracownik = document.getElementsByClassName('pracownik')[n].innerHTML;
        let czas = document.getElementsByClassName('czas')[n].value; 
        let stawka = document.getElementsByClassName('stawka')[n].value;
       // console.log(czas, stawka);
       
       tabNames.push(pracownik);
       console.log(pracownik);

       tabCzas.push(Number(czas));

        if(czas > 160)
        {
            wyplata[n].innerHTML = (czas-160)*stawka*2 + 160*stawka;
        }
        else
        {
            wyplata[n].innerHTML = czas*stawka;
        
            if(czas < 100)
            {
               // console.log(n+1);
                document.getElementById(`pracownik${n+1}`).style.color = "red";
            }
        
        }



    }
    
    
    tabCzas.sort((a, b) => b - a);
    
    
    

    
    

    //przeiterować po wszsytkich i wybrac 3 najlepszych, 3 z najlepsza liczba godzin i wyswietlic ich pod lista
    
};


let przycisk = document.getElementById("oblicz");

przycisk.onclick = obliczWyplate;


// console.log(obliczWyplate());

const obliczWyplate = ()=>{
    

    // let tabCzas = new Array;
    let namesTime = new Array;
    let wyplata = document.getElementsByClassName('wyplata');

    

    for(let n=0; n< wyplata.length; n++)
    {
        
        let czas = Number(document.getElementsByClassName('czas')[n].value); 
        let stawka = document.getElementsByClassName('stawka')[n].value;
        let imieNazwisko = document.getElementsByClassName('pracownik')[n].innerHTML;

        let person = {
            name: imieNazwisko,
            time: czas
        };

        namesTime.push(person);
        //namesTime to tablica obiektow zdefiniowanych przez parę klucz-wartość dla imienia i czasu pracownika
        
        


        if(czas > 160)
        {
            wyplata[n].innerHTML = (czas-160)*stawka*2 + 160*stawka;
        }
        else
        {
            wyplata[n].innerHTML = czas*stawka;
        
            if(czas < 100)
            {
                document.getElementById(`pracownik${n+1}`).style.color = "red";
            }
        
        }



    }
    
    namesTime.sort((a,b) => (a.time < b.time) ? 1 : -1);
    //sortuje względem klucza time
    console.log(namesTime);
    let najlepsi = document.getElementById('najlepsi-pracownicy');
    najlepsi.removeChild();
    
    for(let i=0; i<3; i++)
    {   
        let paragraf = document.createElement('p');
        paragraf.innerText = `${i+1}. ${namesTime[i].name}`;
        najlepsi.appendChild(paragraf);

    }
    
    
    
};


let przycisk = document.getElementById("oblicz");

przycisk.onclick = obliczWyplate;


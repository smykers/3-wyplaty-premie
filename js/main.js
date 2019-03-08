let pracownik1 = document.getElementById("pracownik1");




const obliczWyplate = ()=>{
    let czas = document.getElementById('pracownik1').getElementsByClassName('czas')[0].value; 
    let stawka = document.getElementById('pracownik1').getElementsByClassName('stawka')[0].value;
    let wyplata = 0;

    console.log(czas, stawka);
    if(czas > 160)
    {
        wyplata = (czas-160)*stawka*2 + 160*stawka;
    }
    if(czas < 100)
    {
        //style.backgroundColor = red;
    }

    document.getElementById('pracownik1').getElementsByClassName('wyplata')[0].innerHTML = wyplata;



    //przeiterować po wszsytkich i wybrac 3 najlepszych, 3 z najlepsza liczba godzin i wyswietlic ich pod lista
    return wyplata;
};

console.log(obliczWyplate());
'use strict';

function Location(
    locationName,
    minClientPerHour,
    maxClientPerHour,
    agvCookiePerSale,
    cookieEachHour,
 
    
    ){
        this.locationName=locationName;
        this.minClientPerHour=minClientPerHour;
        this.maxClientPerHour=maxClientPerHour;
        this.agvCookiePerSale=agvCookiePerSale;
        this.cookieEachHour=cookieEachHour;

    }
    
    Location.prototype.estimate=function(){
        this.cookieEachHour=estimateSale(this);
    };

 const seattle=new Location("seattle",23,65,6.3,[]);
 const tokyo=new Location("tokyo",3,24,1.2,[],);
 const dubai=new Location("dubai",11,38,3.7,[],);
 const paris=new Location("pariis",20,38,2.3,[]);
 const lima=new Location("lima",2,16,4.6,[]);


 const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
 const stores=[seattle,tokyo,dubai,paris,lima];
 function random(min, max){
     return Math.floor(Math.random() * (max - min) + min);
 }
 function estimateSale(store){
     const sale=[];
     for(let i=0;i<hours.length;i++){
         const numCustomers=random(store.minClientPerHour,store.maxClientPerHour);
         const hoursSale=Math.ceil(numCustomers*store.agvCookiePerSale);
         sale.push(hoursSale);
     }
     return sale;
 }
 seattle.estimate();
 tokyo.estimate();
 dubai.estimate();
 paris.estimate();
 lima.estimate();

 function render(store){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent=store.locationName;
    tr.appendChild(tdName);
    let total=0;     
     for(let i =0;i< hours.length;i++){
        const td= document.createElement('td');
        td.textContent=store.cookieEachHour[i];
        tr.appendChild(td);
        total += store.cookieEachHour[i];
     }
     const td= document.createElement('td');
     td.textContent= total;
     tr.appendChild(td);
     return tr;  
                 
 }

 function runAplication(){
    const root=document.getElementById('root');
    const table = document.createElement('table');
    const trHeader = document.createElement('tr');
    const thName = document.createElement('th')
    thName.textContent='Tienda';
    trHeader.appendChild(thName);
     for(let i =0;i< hours.length;i++){
        const th= document.createElement('th');
        th.textContent=hours[i];
        trHeader.appendChild(th);
     }
     const thTotal =document.createElement('th');
     thTotal.textContent='Total';
     trHeader.appendChild(thTotal);
     table.appendChild(trHeader);
     for(let i =0;i< stores.length;i++){
        stores[i].estimate();
        const tr =render(stores[i]);
        table.appendChild(tr);
     }
     root.appendChild(table)
 }

 

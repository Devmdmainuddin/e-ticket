



let count = 1;


const allBtn = document.getElementsByClassName("add-btn");

const gran = document.getElementById('grandto');
const totalprice=document.getElementById('totalprice')

let itemList=[];
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
 
       const terdiv=event.target
  
       const prices =document.getElementById("ticpric").innerText
        const pri=parseInt(prices)
        const title = terdiv.innerText
        terdiv.classList.add('bg-[#1DD100]')

//tricket show in a container
       const showtic = document.getElementById('show-tic')
        const div = document.createElement('div')
        const h3 =document.createElement('h3')
        const h2 =document.createElement('h2')
        div.classList.add('flex','justify-between');
        h3.innerText = title;   
        h2.innerText = pri
        div.appendChild(h3)
        div.appendChild(h2)
        // showtic.appendChild(div)
///////////////////////////////////////////////////////////////////////

        let setlistitems={title,pri}
        const seats =document.getElementById("total-count").innerText
    
        if(itemList.find((el)=>el.title==setlistitems.title)){
            alert("Product Already added in Cart");     
            return
        }

// total price
   
        if(seats < 4){
            setValue('total-count',count )
            count++; 
    
            itemList.push(setlistitems);
            const remainSeat = document.getElementById('seat').innerText;
            const innerElement = parseInt(remainSeat);
            console.log(innerElement)
            const updateDecrees = innerElement - 1;
            setValue('seat', updateDecrees)

             // total price
             totalPrice('totalprice',pri)
             // grand total price
             const totalprice = document.getElementById("totalprice")
             const ttpri=totalprice.innerText;
             gran.innerText=ttpri;
             // console.log(gran)
 
             if(gran.innerText >= 2000){
                 const disabledButton = document.getElementById('disable-btn');
                 disabledButton.removeAttribute('disabled')
             }

        }

// cheack 4 items 
        if(seats >=4){
                alert("Product Already added  4 seate in a Cart");
                terdiv.classList.remove('bg-[#1DD100]')
        }else{
            showtic.appendChild(div)
        }
  
      

    });


  }

/////////////////////////COPUN ///////////////////////////////

const upgradebtn= document.getElementById("disable-btn");
    upgradebtn.addEventListener("click",function(){



    const cupon1 = document.getElementById('cupon1').innerText;
    const cupon2 = document.getElementById('cupon2').innerText;
    const coApply = document.getElementById('inputField').value;
   
    const curGrnTotal = document.getElementById('grandto').innerText;
    if(curGrnTotal < 2000){
        // const disabledButton = document.getElementById('disable-btn');
        // disabledButton.setAttribute('disabled',false)      
        alert('you have already got this coupon');
       
        return;
    }   
    if(coApply === cupon1){
        const discoutNewOffer = curGrnTotal * (15 /100);
        const newGrandTotal = curGrnTotal - discoutNewOffer;
        setValue('grandto', newGrandTotal);
        document.getElementById('inputField').value=""
    }
        else if(coApply === cupon2){
            const discountCoupleOffer =curGrnTotal  * (20 /100);
            const updateGrandTotal = curGrnTotal - discountCoupleOffer;

            setValue('grandto', updateGrandTotal)
            document.getElementById('inputField').value=""
        }
        else{
            alert(' coupon are not maching');
            return
        }
    })






/////////////////////////////////////////////////







///////////////////////////////////////




  function totalPrice(id, value) {
    const totalprice = document.getElementById("totalprice").innerText;
    const total = parseInt(totalprice) + parseInt(value);
    document.getElementById("totalprice").innerText = total;
    
  }
  function setValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById("elementId");
    element.classList.add('text-[#1DD100]');
}






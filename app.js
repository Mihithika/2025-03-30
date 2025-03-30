console.log("JS");

function loadCountries() {
    let countriesList = document.getElementById("countriesList");
    let index = 0;
    let body = "";

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(dataList => {
            countriesArrayList = dataList;
            loadModalData();
            dataList.forEach((element, index) => {

                body += `
                               <div class="col" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <div class="card shadow-sm">
                            <img src="${element.flags.png}" alt="">
                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" onclick="loadModalData(${index})" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small class="text-body-secondary">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
            `
            
        });

        countriesList.innerHTML = body;
    })
}

async function loadModalData(index){
     let modal = document.getElementById("modal");
    console.log(countriesArrayList[index]);
     
    modal.innerHTML=`
    <div class="card" style="width: 18rem;">
  <img src="${countriesArrayList[index].flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${countriesArrayList[index].name.official}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
  
}



function Search(params) {
    let searchtxt = document.getElementById("search").value;

    fetch(`https://restcountries.com/v3.1/name/${searchtxt}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}




loadCountries();

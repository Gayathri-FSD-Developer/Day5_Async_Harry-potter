// async ad await method used to wait for the process to end until that it doesn't go for another process

async function harry_potter()
{
    // Rest Countries API fetch
    var fetch_data= await fetch('https://hp-api.onrender.com/api/characters');

    // json returns promise.So use await to process it(instead of .then use await. then = await)
    var char_data = await fetch_data.json();

    // Creating html element using DOM
    var section = document.getElementById('char');
    
    var container= document.createElement('div');
    container.classList.add('container-fluid');
    // console.log(container);
    
    // <div class="row" >
    var row = document.createElement('div');
    row.classList.add('row');
    
    // Foreach method to iterate all the elements in the array. each element consists objects with key and value
    char_data.forEach(obj => {
        var col=document.createElement('div');
    col.classList.add('col-lg-3','col-md-3','col-12','card_column');

    // Replacing empty with image
   var image =obj.image;
   if(image===""||null||undefined)
   {
    image ="images/bg_harry.jpg";
   }

    var card_main= document.createElement('div');
    card_main.classList.add('card','mt-2');
    card_main.innerHTML=`<img src="${image}" class="card-img-top" alt="Character Image">
    <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text"><i class="fas fa-venus-mars"></i>${obj.gender}<br>
      <i class="fas fa-paw"></i>${obj.species}</p>
    <a href="#" class="btn btn-primary">View Details</a>
    </div>`;
    
    col.appendChild(card_main);
    row.appendChild(col);
    container.appendChild(row);
    section.appendChild(container);

    });    
     // Event Handler
     document.getElementById('button').addEventListener('click',char_details);

    //  To convert the name ot title case string
    
     function char_details()
     {
        var search_name=document.getElementById('text').value;
        // console.log(search_name);
        function title_case(name){
            return name.replace(/\w\S*/g,function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        let titleCaseString= title_case(search_name); 

        // filter method to get the specific element as result by comparing the name
        var details = char_data.filter((ele)=>ele.name==titleCaseString);

        document.getElementById('search_img').src = details[0].image;
        console.log(details[0].image,"kkkkk");
        if(details[0].image === ""||undefined||null)
        {
            document.getElementById('search_img').src = "images/bg_harry.jpg";
        }
        document.getElementById('char_name').innerText= `Name: ${details[0].name}`;
        document.getElementById('char_born').innerText= `Born: ${details[0].dateOfBirth}`;
        document.getElementById('char_gender').innerText= `Gender: ${details[0].gender}`;
        document.getElementById('char_species').innerText= `Species: ${details[0].species}`;
        document.getElementById('char_house').innerText= `House: ${details[0].house}`;
    //    var names= document.getElementById('char_dob').innerText= `DOB: ${details[0].dateOfBirth}`;
        document.getElementById('char_ancestry').innerText= `Ancestry: ${details[0].ancestry}`;
        document.getElementById('char_eyeclr').innerText= `Eye Color: ${details[0].eyeColour}`;
        document.getElementById('char_hrclr').innerText= `Hair Color: ${details[0].hairColour}`;
        document.getElementById('char_stu').innerText= `Hogwart Stu: ${details[0].hogwartsStudent}`;
        document.getElementById('char_staff').innerText= `Hogwart Stf: ${details[0].hogwartsStaff}`;
     }
}
 harry_potter();




 const formText = document.querySelector(".news_text"),
 toText = document.querySelector(".ts_news"),
 selectTag = document.querySelectorAll("select"),
 tranalateBtn =document.querySelector(".ts_1 ");

 selectTag.forEach(Tag => {
    for (const country_code in countries){

        

       let option = `<option value="${country_code}">${countries[country_code]}</option>`;
       Tag.insertAdjacentHTML("beforeend",option);
    }
    
 });

 tranalateBtn.addEventListener("click",( ) => {
    let text = formText.value,
    tranalateFrom = selectTag[0].value,
    tranalateTo = selectTag[1].value;

    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${tranalateFrom}|${tranalateTo}`;
    fetch(apiUrl).then(res => res.json()).then( data =>{
        console.log(data);

        toText.value =data.responseData.translatedText;


    });




 }
 );
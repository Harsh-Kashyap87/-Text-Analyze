let textAreaEl = document.querySelector("#text");
let text = null;

let data ={
    upper: 0,
    lower: 0,
    numbers: 0,
    vowels: 0,
    consonent: 0,
    sentences: 0,
    words: 0,
    spaces: 0,
};
const setText = () =>{
    text = textAreaEl.value;

    const findLenght = (item) => (item === null ?0 : item.length);

    if(text != null){

        // console.log(findLenght(text.match(/[A-Z]/g)));
        // console.log(findLenght(text.match(/[a-z]/g)));
        // console.log(findLenght(text.match(/[aeiou]/gi)));
        // console.log(findLenght(text.match(/[bcdfghjklmnpqrstvwxyz]/gi)));
        // console.log(findLenght(text.match(/[\d]/g)));
        // console.log(findLenght(text.match(/[\056]/g)));
        // console.log(findLenght(text.match(/[a-zA-z]+/gi)));
        // console.log(findLenght(text.match(/[\s]/g)));

    data.upper = findLenght(text.match(/[A-Z]/g));
    data.lower = (findLenght(text.match(/[a-z]/g)));
    data.numbers = (findLenght(text.match(/[\d]/g)));
    data.spaces = (findLenght(text.match(/[\s]/g)));
    data.vowels = (findLenght(text.match(/[aeiou]/gi)));
    data.consonent = (findLenght(text.match(/[bcdfghjklmnpqrstvwxyz]/gi)));
    data.sentences = (findLenght(text.match(/[\056]/g)));
    data.words = (findLenght(text.match(/[a-zA-z]+/gi)));
    }
        
    localStorage.setItem("data",JSON.stringify(data));
    window.location = ("info.html");
}

const getdata = ()=>{
    return JSON.parse(localStorage.getItem("data"));
}

const showdata = ()=>{
    let data = getdata();
    let htmlcontent = "";
    for(item in data){
        htmlcontent += `
        <div class="row"
            <div class="col-4">
                <h2>${data[item]}</h2>
                <p>${item}</p>
            </div>
        </div>
        `
    }
    document.querySelector(".pink").innerHTML = htmlcontent;
}



    // console.log(text.match(/[A-Z]/g).length); //uppercase
    // console.log(text.match(/[a-z]/g).length); //lowercase
    // console.log(text.match(/[\d]/g).length); //numbers
    // console.log(text.match(/[aeiou]/gi).length); //vowels
    // console.log(text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length); //consonents
    // console.log(text.match(/[\056]/g).length); //sentences (. finding the nums of dots)
    // console.log(text.match(/[\s]/g).length); //spaces
    // console.log(text.match(/a-zA-z]+/gi).length); // words
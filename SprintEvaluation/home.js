// api key=7b5ac0b712234f2dab776419be538071 
// https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=7b5ac0b712234f2dab776419be538071


async function home(){
    // let res=await fetch("https://newsapi.org/v2/top-headlines/sources?apiKey=7b5ac0b712234f2dab776419be538071")
    
    let res=await fetch("https://newsapi.org/v2/everything?q=international&from=2021-10-15&sortBy=popularity&apiKey=7b5ac0b712234f2dab776419be538071")
    
    let data=await res.json()
    console.log(data.articles)
    showdata(data.articles)

}
home()
var parent=document.getElementById("showdata")
function showdata(data){
    data.forEach((el)=>{
        // console.log(el.title)
        let parentdiv=document.createElement("div")
        let imagediv=document.createElement("div")
        let datadiv=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.urlToImage;
        let title=document.createElement("p")
        title.innerText=el.title
        title.style.fontWeight="900"
        let author=document.createElement("p")
        author.innerText="Author :"+el.author
        let publishedAt=document.createElement("p")
        publishedAt.innerText="Published Date :"+el.publishedAt
        let resoursename=document.createElement("p")
        resoursename.innerHTML="Sources"
        
        imagediv.append(img)
        datadiv.append(title,author,publishedAt)
        parentdiv.append(imagediv,datadiv)
        parentdiv.onclick=function(){
            blankcall()
            alldata(el)
        }
        parent.append(parentdiv)


    });

}
function blankcall(){
    parent.innerText=null;
}
function alldata(el){
    
    let parentdiv=document.createElement("div");
        let imagediv=document.createElement("div");
        let datadiv=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.urlToImage;
        img.style.width="400px";
        img.style.height="400px";
        let title=document.createElement("p");
        title.innerText=el.title;
        title.style.fontWeight="900";

        let author=document.createElement("p");
        author.innerText="author"+el.author;
        let publishedAt=document.createElement("p");
        publishedAt.innerText="published Date And Time :"+el.publishedAt;
        let resoursename=document.createElement("p");
        resoursename.innerText="resources : "+el.source.name;

        let desc=document.createElement("p");
        desc.innerText=el.description;
        
        let backbutton=document.createElement("button");
        backbutton.innerText="back to main menu";
        backbutton.onclick=function(){
            location.reload()
        }
        imagediv.append(img)
        datadiv.append(title,author,publishedAt,desc,resoursename,backbutton)
        parentdiv.append(imagediv,datadiv)
        parentdiv.style.backgroundColor="gray"
        parentdiv.style.height="500px"
        parent.append(parentdiv)
        


}

async function searchdata(){
    let query=document.getElementById("search").value
    // console.log(query)
    let res=await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2021-10-18&sortBy=popularity&apiKey=7b5ac0b712234f2dab776419be538071`)
    
    let data=await res.json()
    // console.log(data)
    console.log(data.articles)
    blankcall()
    showdata(data.articles)
}
// Store the wallet amount to your local storage with key "amount"
function myFunction(){
    var value1=document.getElementById("amount").value;
    document.getElementById("pTag").innerText=value1;

    localStorage.setItem("amount",value1)
}

document.querySelector("#book_movies").addEventListener("click", function(){
    window.location.href="movies.html";
});
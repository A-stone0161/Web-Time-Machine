// index.js - 1975 - 85
// Author: Annabelle Stone
// Date: 06/09/2025


function showTab(tabId) {
  const allTabs = document.querySelectorAll('.tabContent');
  allTabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

//AJAX Obj
const ajaxObj = {
  url: " https://api.nasa.gov/planetary/apod",
  data: {
    api_key: "aYOzox7qrsJYIrt3Kmp7F0kntdl1kEgghWwmyXdp",
    count: 1,
  },
  type: "GET",
  dataType: "JSON"
};

//Button listener
$("button").click(function(){
  
  //Call AJAX
  $.ajax(ajaxObj)

  //Success callback
  .done(function(data){
    console.log(data);
     //Pull out relevant data from results 
   let title = data[0].title;
   let date = data[0].date;
   let desc = data[0].explanation;
   let imageUrl = data[0].url;
   
    //Put data in output 
   $("#output").html(`<h2>${title}</h2>`);
   $("#output").append(`<img src='${imageUrl}' />`);
   $("#output").append(`<p class = 'date'>${date}</p>`);
   $("#output").append(`<p class = 'desc'>${desc}</p>`);
 })

    //Fail callback 
    .fail(function(xhr, status, errorThrown){
      console.error(error);
    })

})

//Interactive Map




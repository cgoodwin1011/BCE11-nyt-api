
// https://api.nytimes.com/svc/search/v1/article?format=json&query=smoking&api-key=7485d63379034844ad36212006b2c533

   // get from form
   var searchWord ='';  
   var startYear = ''; 
   var endYear='';
   var numArticle = 5;  
   // not from form
   var janFirst = '0101';
   var dec31 = '1231'
   var myNYTAPI = "7485d63379034844ad36212006b2c533"

   if (startYear.length != 4) {
       if (startYear.length == 0) {
           // that's okay
       }
       // ERROR        
   } else {
       if (parseInt(startYear) < 1851) {
           // ERROR
       } else if (parseInt(startYear) > 2018) {
           // ERROR
       }
       startYear +=janFirst;
   }

   if (endYear.length != 4) {
       if (startYear.length == 0) {
           // that's okay
       }// ERROR        
   } else {
       if (parseInt(endYear) < 1851) {
           // ERROR
       } else if (parseInt(endYear) > 2018) {
           // ERROR
       }
       endYear += dec31;
   }

   var queryURL = "//api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + myNYTAPI + searchStuff;


   var searchStuff = "&q="+searchWord;
   
   var startYear     // get from form
   var searchWord ='';  
   var startYear = ''; 
   var endYear='';
   var numArticle = 5;  
   // not from form
   var janFirst = '0101';
   var dec31 = '1231'
   var myNYTAPI = "7485d63379034844ad36212006b2c533"

   if (startYear.length != 4) {
       if (startYear.length == 0) {
           // that's okay
       }
       // ERROR        
   } else {
       if (parseInt(startYear) < 1851) {
           // ERROR
       } else if (parseInt(startYear) > 2018) {
           // ERROR
       }
       startYear +=janFirst;
   }

   if (endYear.length != 4) {
       if (startYear.length == 0) {
           // that's okay
       }// ERROR        
   } else {
       if (parseInt(endYear) < 1851) {
           // ERROR
       } else if (parseInt(endYear) > 2018) {
           // ERROR
       }
       endYear += dec31;
   }

   var queryURL = "//api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + myNYTAPI + searchStuff;


   var searchStuff = "&q="+searchWord;
   
   if startYear 
   



   $.ajax({
   url: queryURL,
   method: "GET"
   }).then(function(response) {
   var results = response.data;

   // https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7485d63379034844ad36212006b2c533&page=0&q=cats&begin_date=20170301&end_date=20170312


//4f3c267e125943d79b0a3e679f608a78
//Message Input

//Message @Charles Goodwin


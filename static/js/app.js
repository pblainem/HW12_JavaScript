

var startInput = d3.select("#startDate");
var endInput = d3.select("#endDate");
var clickButton = d3.select("#click-me")


var table = d3.select("table");
table.attr("class", "table table-striped");



var tbody = d3.select("tbody");


function compareDate(date1, date2){
    var firstIsFirst = false;
    var year1 = parseInt(date1[2])
    var month1 = parseInt(date1[0])
    var day1 = parseInt(date1[1])
    var year2 = parseInt(date2[2])
    var month2 = parseInt(date2[0])
    var day2 = parseInt(date2[1])


    if (year1 <= year2){
        if (year1 < year2){
            firstIsFirst = true;
        }     
        if (month1 <= month2){
            if (month1 < month2){
                firstIsFirst = true;
            }
            if (day1 <= day2){
                firstIsFirst = true;
                d3.select("button").text("... Finding Answers");
            }
        }
    }
    console.log(firstIsFirst)
    return firstIsFirst
}   




function handleClick(event) {

    d3.select("button").text("........... Seeking Answers");

    document.getElementById("myTbody").remove();
    var tbody = table.append("tbody");
    document.getElementsByTagName("tbody")[0].setAttribute("id", "myTbody");
    
    var startDate = d3.select("#startDate").property("value");
    var endDate = d3.select("#endDate").property("value");


    dataSet.forEach(function(sighting) {
        dateArr = sighting.datetime.split("/");
        startArr = startDate.split("/");
        endArr = endDate.split("/");


        if((compareDate(startArr, dateArr) && (compareDate(dateArr, endArr)))){          
            d3.select("button").text("...................... Finding Answers");
            console.log(`YAY dateArr  ${dateArr}`);
            console.log(`YAY startArr  ${startArr}`);
            console.log(`YAY EndArr  ${endArr}`);
        
            tbody = d3.select("tbody")
            var row = tbody.append("tr");
            row.append("td").text(sighting.datetime);
            row.append("td").text(sighting.city);
            row.append("td").text(sighting.state);
            row.append("td").text(sighting.country);
            row.append("td").text(sighting.shape);

        };
    })
    d3.select("button").text("know the truth...");

}


clickButton.on("click", handleClick);


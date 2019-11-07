let gameArray = [346110, 367520, 1121560, 578650, 271590, 582010, 381210, 1085660, 678960];

// const ARK = 346110;
// const HollowKnight = 367520;
// const AtelierRyza = 1121560;


// const OuterWorlds = 578650;
// const gta5 = 271590;
// const MonsterHunterWorld = 582010;

// const DeadByDaylight = 381210;
// const DestinyTwo = 1085660;
// const CodeVein = 678960;

let newsTitle = document.getElementsByClassName("card-title");
let newsContent = document.getElementsByClassName("card-content");
let cardImage = document.getElementsByClassName("card-image");


for (let i = 0; i < gameArray.length; i++) {



    let queryURL = "https://cors-anywhere.herokuapp.com/api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=" + gameArray[i] + "&count=1&maxlength=100&format=json";

    $.ajax({


        url: queryURL,
        method: "GET"

    }).then(function (Response) {


        $('document').ready(function () {


            let contents = Response.appnews.newsitems[0].contents;
            let title = Response.appnews.newsitems[0].title;
            let url = Response.appnews.newsitems[0].url;

            let href = title.link(url);
            $(cardImage[i]).children("a").attr("href", url);
            $(newsTitle[i]).append(" - " + href);
            $(newsContent[i]).children("p.indigo-text").css("word-wrap","break-word")
            $(newsContent[i]).children("p.indigo-text").html(contents);


        });


    });


}



$(function(){
//Video juegos

("$.#videoGames").addListener("on", "click", function(){
  =======
$(function(){
    $.get(`https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`)
    .$.done(function (it) {
        return it.json()
    })
    .$.done((returned) => {
        console.log(returned)
        ("$.#piece1").html("<h2>" + returned[0].question + "</h2>")
    })
    
})

//General knowledge


("$.#gnk").addListener("on","click", function(){
    $.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`)
    $.done(function (it) {
=======
    $.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`)
    .$.done(function (it) {
        return it.json()
    })
    $.done((returned) => {
        console.log(returned)
    })
})

//mixed

("$.#mixed").addListener("on","click",function(){

    $.get(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
    $.done(function (it) {
=======
    $.get(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
    .$.done(function (it) {

        return it.json()
    })
    $.done((returned) => {
        console.log(returned)
    })

})
//History
(`$.#history`).addListener("on", "click", function(){
    $.get(`https://opentdb.com/api.php?amount=10&category=23`)
    $.done(function (it) {
=======
    $.get(`https://opentdb.com/api.php?amount=10&category=23`)
    .$.done(function (it) {
        return it.json()
    })
    $.done((returned) => {
        console.log(returned)
    })
})
//Japanese Anime/Manga
("$.#jap").addListener("on","click", function(){
    $.get(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium`)
    $.done(function (it) {
=======
    $.get(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium`)
    .$.done(function (it) {
        return it.json()
    })
    $.done((returned) => {
        console.log(returned)
    })
})
=======
})
const request=require('request')
const cheerio=require('cheerio')

request('https://www.imdb.com/chart/boxoffice/',(error,response,html)=>{
    if (!error&&response.statusCode==200){
        const $=cheerio.load(html)


        console.log($('.titleColumn').text()+" Cast: "+$('.titleColumn').html())
    }
})
const request= require('request');

const forecast= (latitude, longitude, callback)=>{
    const url= 'https://api.darksky.net/forecast/9adcbe850ab58e91d61963b6be1c239a/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude);
    request({url, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service!', undefined);
        }else if(body.error){
            callback('Something went wrong!', undefined);
        }else{
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is " + body.currently.precipProbability + "% chance of rain");
        }
    });
}

module.exports= forecast;
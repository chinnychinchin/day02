//Load required libraries
const express = require('express')
const handlebars = require('express-handlebars');

//Configure enviroment 
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;


//Initiate an instance of express 
const app = express();

//Configure handlebars
app.engine('hbs',
        handlebars({defaultLayout:'default.hbs'})
    )
app.set('view engine', 'hbs');

//Configure the application


app.use(
    express.static(__dirname + '/media/dice_images')
)
//Get /
app.get('/', (req,res) => {

    res.status(200);
    res.type('text/html');
    res.render('landingPage')

})

app.get('/rollPage.hbs',(req,res) => {

    let roll = Math.floor(Math.random())*6
    console.log(roll)
    res.status(200);
    res.type('text/html');
    res.render('rollPage')
})



//Start express
app.listen(PORT, () => {console.log(`App started on port ${PORT}`)})
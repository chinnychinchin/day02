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

/*Load/Mount static files. Note that the directory that you mount is the root directory.
You can go into the directory but cannot go up the directory. 
*/

app.use(express.static(__dirname + '/media'))
app.use(express.static(__dirname + '/static'))

//Get /
app.get('/', (req,res) => {

    res.status(200);
    res.type('text/html');
    res.render('landingPage')

})

app.get('/rollPage.hbs',(req,res) => {

    let roll1 = Math.ceil(Math.random()*6)
    let roll2 = Math.ceil(Math.random()*6)

    const dieToShow = (roll) => {

        switch(roll) {
            case 1: return "dado-1.png"
            break;
            case 2: return "roll2.png"
            break;
            case 3: return "three_dots.png"
            break;
            case 4: return "four.png"
            break;
            case 5: return "Five-Image.png"
            break;
            case 6: return "dice-showing-6.png"
            break;
            default:
                return "2_dice"
    
        }
    }

    let die1 = dieToShow(roll1);
    let die2 = dieToShow(roll2);
    res.status(200);
    res.type('text/html');
    res.render('rollPage',{die1,die2})
})

//to redirect the client back to landing page whenever a user puts some random noun
app.use((req,res) => {
    res.redirect('/')
})



//Start express
app.listen(PORT, () => {console.log(`App started on port ${PORT} at ${new Date()}`)})
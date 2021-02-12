import yelpCamp from '../images/project-screens/yelp-camp-ss.png';
import jamming from '../images/project-screens/jamming-ss.png';
import munchies from '../images/project-screens/munchies-ss.png';
import stocks from '../images/project-screens/nest_egg-ss.png';
import pingPong from '../images/project-screens/pingPong-ss.png';


export const data = [
    {
        title: 'YelpCamp',
        id: 1,
        description: `A full stack application that allows each user to create an
        account, explore campgrounds across the country, post new campgrounds, and
        leave reviews of places they have visited. Complete with full CRUD functionality
        for campgrounds, reviews, and users.`,
        skills: 'HTML, CSS, JavaScript, Bootstrap, Node, Express, MongoDB, Mongoose',
        screenshot: yelpCamp,
        link: 'https://shielded-tor-14972.herokuapp.com/',
        githubLink: 'https://github.com/kjolson12/YelpCamp'
    },
    {
        title: 'Munchies',
        id: 2,
        description: `Restaurant finder app that allows the user to search for
        restaurants by location and sort the results by rating, number
        of reviews, or best match. Uses the Yelp RESTful API.`,
        skills: 'React, Redux, Semantic UI, CSS',
        screenshot: munchies,
        link: 'https://munchies-pearl.vercel.app/',
        githubLink: 'https://github.com/kjolson12/munchies'
    },
    {
        title: 'Nest Egg',
        id: 3,
        description: `Stock charting app that allows users to search for stocks, view
        trends, and read relevant news stories. Communicates with the
        Finnhub RESTful API.`,
        skills: 'React, Redux, Semantic UI',
        screenshot: stocks,
        link: 'https://nest-egg.vercel.app/',
        githubLink: 'https://github.com/kjolson12/stocks'

    },
    {
        title: 'Ping Pong Scoreboard',
        id: 4,
        description: `A simple scorekeeper for playing ping pong with a friend. Set the 
        score you wish to play to and press the buttons to add points. Press 'reset' when
        game is finished.`,
        skills: 'HTML, CSS, JavaScript, Bootstrap',
        screenshot: pingPong,
        link: 'https://ping-pong-sooty.vercel.app/',
        githubLink: 'https://github.com/kjolson12/pingPong'
    },
    {
        title: 'Jamming',
        id: 5,
        description: `Playlist creator app that communicates with the Spotify API to
        allow users to search for songs, create playlists and save them
        directly to their Spotify library.`,
        skills: 'React, CSS',
        screenshot: jamming,
        link: 'https://jamming-ochre.vercel.app/',
        githubLink: 'https://github.com/kjolson12/Jamming'
    }
]
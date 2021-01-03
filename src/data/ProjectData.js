import covid from '../images/project-screens/covid-ss.png';
import jamming from '../images/project-screens/jamming-ss.png';
import pokemon from '../images/project-screens/pokemon-ss.png';
import ravenous from '../images/project-screens/ravenous-ss.png';
import teacozy from '../images/project-screens/teacozy-ss.png';
import videos from '../images/project-screens/videos-ss.png';
import stocks from '../images/project-screens/nest_egg-ss.png';


export const data = [
    {
        title: 'Nest Egg',
        description: `Stock charting app that allows users to search for stocks, view
        trends, and read relevant news stories. Communicates with the
        Finnhub RESTful API.`,
        skills: 'React, Redux, Semantic UI',
        screenshot: stocks,
        link: 'https://nest-egg.vercel.app/'

    },
    {
        title: 'COVID-19 Tracker',
        description: `A tracker that logs the number of infected,
        recovered, and deaths globally or by country.`,
        skills: 'React, CSS',
        screenshot: covid,
        link: 'https://covid-19-tracker-flame.vercel.app/'
    },
    {
        title: 'Jamming',
        description: `Playlist creator app that communicates with the Spotify API to
        allow users to search for songs, create playlists and save them
        directly to their Spotify library.`,
        skills: 'React, CSS',
        screenshot: jamming,
        link: 'https://jamming-ochre.vercel.app/'
    },
    {
        title: 'Pokedex',
        description: `A simple app that utilizes a Pokemon API to show pages
        of pokemon, their types, and moves.`,
        skills: 'React, CSS',
        screenshot: pokemon,
        link: 'https://pokemon-api-puce.vercel.app/'
    },
    {
        title: 'Ravenous',
        description: `Restaurant finder app that allows the user to search for
        restaurants by location and sort the results by rating, number
        of reviews, or best match. Uses the Yelp RESTful API.`,
        skills: 'React, CSS',
        screenshot: ravenous,
        link: 'https://ravenous-eta.vercel.app/'
    },
    {
        title: 'Tea Cozy',
        description: `A web page designed for a fictional tea shop. Built using the
        Flexbox grid system.`,
        skills: 'HTML, CSS',
        screenshot: teacozy,
        link: '/'
    },
    {
        title: 'Video Player',
        description: `A clone of the basic functionality of the website 'Youtube' where
        the user can search for videos on Youtube's API.`,
        skills: 'React, Semantic UI, CSS',
        screenshot: videos,
        link: 'https://video-player-plum.vercel.app/'
    }
]
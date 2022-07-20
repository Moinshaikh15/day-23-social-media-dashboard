import Card from "./Card"
import Card2 from "./Card2"
import meta from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import twit from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import { useState } from "react"
function App() {

    let [isDarkMode, setIsDarkMode] = useState(true);



    let topArr = [
        {
            for: 'facebook',
            username: '@nathanf',
            followers: "1987",
            todayInc: "12",
            todayDec: 0,
            image: meta
        },
        {
            for: 'twitter',
            username: '@nathanf',
            followers: "1044",
            todayInc: "99",
            todayDec: 0,
            image: twit
        },
        {
            for: 'instagram',
            username: '@nathanf',
            followers: "11k",
            todayInc: '1099',
            todayDec: 0,
            image: insta
        },
        {
            for: 'youtube',
            username: '@nathanf',
            followers: "8239",
            todayInc: 0,
            todayDec: '144',
            image: youtube
        }
    ]
    let botttomArr = [
        {
            image: meta,
            count: '87',
            counType: 'Page View',
            countInc: '3%',
            countDec: 0
        },
        {
            image: meta,
            count: '52',
            counType: 'Likes',
            countInc: 0,
            countDec: '2%'
        },
        {
            image: insta,
            count: '5462',
            counType: 'Likes',
            countInc: '2257%',
            countDec: 0
        }, {
            image: insta,
            count: '52k',
            counType: 'Profile View',
            countInc: '1375%',
            countDec: 0
        },
        {
            image: twit,
            count: '177',
            counType: 'Retweets',
            countInc: '303%',
            countDec: 0
        },
        {
            image: twit,
            count: '507',
            counType: 'Likes',
            countInc: '553%',
            countDec: 0
        }, {
            image: youtube,
            count: '107',
            counType: 'Likes',
            countInc: 0,
            countDec: '19%'
        }, {
            image: youtube,
            count: '1407',
            counType: 'Total View',
            countInc: 0,
            countDec: '12%'
        }
    ]
    let handleclick = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={isDarkMode ? 'main' : 'main light-theme'}>
            <div className='main-container' >
                <div className="header">
                    <div >
                        <h2>Social Media Dashboard</h2>
                        <p>Total Followers:23,044</p>
                    </div>
                    <div className="line"></div>
                    <div className="darkmode-container">
                        <p>Dark mode</p>
                        <button className={isDarkMode ? '' : 'toggle-btn'}  onClick={handleclick} ><div className='toggle'></div></button>
                    </div>

                </div>

                <div className="top-container">


                    <div className="tcard-container">
                        {topArr.map((e) => <Card for={e.for} username={e.username} followers={e.followers} inc={e.todayInc} dec={e.todayDec} followerText={(e.for === 'youtube') ? 'SUBSCRIBERS' : 'FOLLOWERS'} imgPath={e.image} />)}
                    </div>


                </div>
                <div className="bottom-container">
                    <h2>Overview - Today</h2>

                    <div className="bcard-container">

                        {
                            botttomArr.map((e) => <Card2 imgPath={e.image} count={e.count} countType={e.counType} countInc={e.countInc} countDec={e.countDec} />)
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default App
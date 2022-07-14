import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

function Card(props) {
    let today = (props.inc === 0) ? { Count: props.dec, color: 'hsl(356, 69%, 56%)', icon: down } : { Count: props.inc, color: 'hsl(163, 72%, 41%)', icon: up };

    let lineColor;
    if (props.for === 'facebook') {
        lineColor ='hsl(208, 92%, 53%)'
    }
    if (props.for === 'twitter') {
        lineColor ='hsl(203, 89%, 53%)'
      }
    if (props.for === 'instagram') {
        lineColor ='linear-gradient(to right, hsl(37, 97%, 70%),hsl(329, 70%, 58%))'
      }
    if (props.for === 'youtube') {
        lineColor ='hsl(348, 97%, 39%)'


      }
    console.log(lineColor)

    return <div className="card">
        <div className="logo-username">
            <div className="card-topline" style={{backgroundImage:lineColor, backgroundColor:lineColor}}></div>
            <img src={props.imgPath} alt="" />
            <p>{props.username}</p>
        </div>
        <h1>{props.followers}</h1>
        <p className="fol">{props.followerText}</p>
        <div style={{ color: today.color }} className='today-div' ><img src={today.icon} alt="" />{today.Count} Today</div>

    </div>
}

export default Card
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

function Card2(props) {

    let today = (props.countInc === 0) ? { Count: props.countDec, color: 'hsl(356, 69%, 56%)', icon: down } : { Count: props.countInc, color: 'hsl(163, 72%, 41%)', icon: up };
    return <div className="card2">
        <div className='div1'>
            <p>{props.countType}</p>
            <img src={props.imgPath} alt="" />
        </div>
        <div className='div2'>
            <h1>{props.count}</h1>
            <div style={{ color: today.color }}  className='percent'><img src={today.icon} alt="" />{today.Count}</div>
        </div>
    </div>
}
export default Card2
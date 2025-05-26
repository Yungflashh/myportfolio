import "../styles/Card.css"

// 

const Card = ({icon, title, }) => {
  return (
    <div className="card">
        <div className="icon">
            <img src={icon} alt="" />
        </div>  
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Card
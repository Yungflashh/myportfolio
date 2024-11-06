import "../styles/WorksCard.css"

const WorksCard = ({image,headerText,desc, btnTitle,btnTitle2, stacks, codeBase, liveSite}) => {
  return (



    <div className="worksContainer">
             <div className="laptop">
        <div className="screen">
            <img src={image} alt="Laptop Screen" />
        </div>
    </div>
            <div className="workText">
                    <h2>{headerText}</h2>
                    <p>{desc}</p>

                    <p id="stack">{stacks}</p>
                  <a href={codeBase} target="_blank"><button className="btn">{btnTitle}</button></a>  
                  <a href={liveSite} target="_blank"><button className="btn">{btnTitle2}</button></a>  

                   

            </div>

    </div>


  )
}

export default WorksCard
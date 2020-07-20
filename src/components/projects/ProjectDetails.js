import React from 'react'

function ProjectDetails(props) {

    const id =  props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="cart-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis atque totam corrupti unde quam nihil earum asperiores eligendi tempora similique quis maxime sit, molestias rem eum ipsam distinctio omnis ducimus.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Ved</div>
                    <div>8th september, 9 pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

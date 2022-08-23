import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
        {/* Programs header */}
        <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text">To shape you</span>
        </div>

        {/* Programs content */}
        <div className="program-categories">
            {programsData.map((item, index) => (
                <div className="category" key={index}>
                    {item.image}
                    <span>{item.heading}</span>
                    <span>{item.details}</span>
                    <div className="join-btn">
                        <span>Join Now</span>
                        <img src={RightArrow} alt="join-now"/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs
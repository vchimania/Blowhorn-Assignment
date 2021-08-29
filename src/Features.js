import React from "react";
import AFeatures from "./data/AFeatures";
import Team from "./data/Team";

const Features=()=>{
    return(
        <>
        <div id='features' className='text-center'>
      <div className='container'>
        <div className=''>
          <h2>Our Features</h2>
          <h5>Check out our list for awsome feture below</h5>
        </div>
        <div className='row'>
          {AFeatures.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-4'>
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
           }
        </div>
      </div>
    </div>

    {/* Our Team */}

<div className="col-md-8 col-md-offset-2 section-title">
    <h5 style={{marginTop: 108,color: "cornflowerblue",    marginLeft: 121}}>OUR TEAM</h5>
        <h2 style={{marginLeft: 113,
    fontWeight: "bold",
    fontSize: "xxx-large"}}>An Incredible Team of <br/>Amazing Individuals</h2>
        </div>
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='row'>
          {Team.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 '>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img rounded-circle bg' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <img src={d.twitter} className='rounded-circle bg col-md-3'/>
                      <img src={d.github} className='rounded-circle bg col-md-3'/>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
        </>
    )
}
export default Features;
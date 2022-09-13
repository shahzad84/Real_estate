import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {id,price, rentFrequency, rooms, title, baths, area, agency, isVerified,  type, purpose, furnishingStatus, amenities, coverPhoto,url}=this.props;
    return (
        
      <div className="my-3" >
                <div className="card" >
                <img src={coverPhoto} className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="container text-center">
                    <div className="row">
                        <h5>{purpose} {isVerified}</h5>
                        
                        <div className="col">
                        $ {price}/{rentFrequency}
                        </div>
                        <div className="col">
                        Rooms: {rooms}
                        </div>
                        <div className="col">
                        Baths: {baths}
                        </div>
                        <div className="col">
                        Area: {area}
                        </div>
                    </div>
                    </div>
                    <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
              </div>
    )
  }
}

export default Newsitems

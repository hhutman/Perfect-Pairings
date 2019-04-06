import React, { Fragment } from 'react'
import { getRandomDescription } from './Descriptions'
import './Pairings.css';
import { getRandomBeautyShots } from './Beautyshots'

const display = {
  display: 'flex',
  flexDirection: 'row',
  align: 'center',
  padding: '100px',
}

function chooseImage(currentItem) {
  if (currentItem.image === "https://www.cannabisreports.com/images/strains/no_image.png" || currentItem.image === undefined ) {
    return "https://magazine.grasscity.com/wp-content/uploads/2016/02/How-To-Harvest-Outdoor-Marijuana-Plants-720x480@2x.jpg";
  }
  else {
    return currentItem.image;
  }
}

const rightImg = {
                    backgroundImage: `url(${getRandomBeautyShots()})`,
                    backgroundSize: "cover"
                  }

export default class Pairings extends React.Component {

  changeCurrentItem = e => {
    e.preventDefault()
    this.props.changeCurrentItem( Number(this.props.match.params.id) + 1 )
  }

  render(){
    let { currentItem } = this.props
    return(
      <Fragment>
        <div style={display}>
          <div className="pairing-image"
               style={
                      { backgroundImage: `url(${chooseImage(currentItem)})`,
                        backgroundSize: "cover" }
                     }></div>
          <div id = "stuff">
            <h3 className = "name">{currentItem.name}</h3>
            <div className = "Lineage">
              <h4>Parental Lineage</h4>
              {currentItem.lineage && Object.keys(currentItem.lineage).join(', ')}
              <h4 className="why"> {getRandomDescription()}</h4>
              </div>
          </div>
          <div className="pairing-image" style={{
            backgroundImage: `url(${getRandomBeautyShots()})`,
            backgroundSize: "cover"
          }}></div>

        </div>
        <a href="#" onClick={this.changeCurrentItem}>Go to Next Pairing</a>
      </Fragment>
    )
  }
}


    // <img src={chooseImage(currentItem)}/>
    // <img
    //   src={getRandomBeautyShots()}
    //   alt="beauty shots"
    //   />

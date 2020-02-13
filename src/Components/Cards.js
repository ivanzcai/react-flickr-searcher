import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

export function Cards({ cardItems }) {

    return (
        <div className="album py-5 bg-light cards">
            <div className="container">
                <div className="row">
                    {cardItems && cardItems.map(
                        (cardInfo, index) => {
                            return (
                                <Card cardInfo={cardInfo} key={index} />
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cardItems: state.cardItems
    }
}


export default connect(mapStateToProps, null)(Cards);

import React from 'react'
import Card from './Card'

function Cards({ cardList }) {

    return (
        <div className="album py-5 bg-light cards">
            <div className="container">
                <div className="row">
                    {cardList && cardList.map(
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

export default Cards;

import { useEffect, useState } from 'react';
import '../styles/advice-card.scss';
import {Puff} from 'react-loader-spinner';

const AdviceCard = ({advice, onGenerateRandomAdvice, isLoading}) => {
    return (
        <div className="advice-card_container">
            <div className="advice-card_container_card">
                {advice && !isLoading && 
                <>
                 <h1 className='advice-card_container_card_advice-title'>Advice #{advice.slip.id}</h1>
                <p className='advice-card_container_card_advice'>"{advice.slip.advice}"</p>
                </>}
                {isLoading && 
                <div className='loader-wrapper'>
                    <Puff
                height="50"
                width="50"
                color='grey'
                ariaLabel='loading'
              />
                </div>
                }
                <img className='advice-card_container_card_advice-border-desktop' src={process.env.PUBLIC_URL + '/images/pattern-divider-desktop.svg'}/>
                <img className='advice-card_container_card_advice-border-mobile' src={process.env.PUBLIC_URL + '/images/pattern-divider-mobile.svg'}/>
            </div>
            <button className="advice-card_container_generate-advice-btn" onClick={onGenerateRandomAdvice} disabled={isLoading}>
                <img src={process.env.PUBLIC_URL + '/images/icon-dice.svg'} alt='generate-advice-icon'/>
            </button>
        </div>
    )
}

export default AdviceCard;
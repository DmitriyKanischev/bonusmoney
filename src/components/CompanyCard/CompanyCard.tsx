import * as React from 'react';
import './styles.css';
import eyeIcon from '../../common/img/eye_white.png';
import trashIcon from '../../common/img/trash_white.png';
import { ICard } from '../../common/types/ICard';
import CardStore from '../../store/CardStore';

const className = 'CompanyCard';

const CompanyCard:React.FC<ICard> = (props) => {
  return ( 
    <div 
      className={`${className}__card`} 
      style={{backgroundColor: `${props.mobileAppDashboard.cardBackgroundColor}`}}>
      <div className={`${className}__head`}>
        <h2 
          className={`${className}__companyName`}
          style={{color: `${props.mobileAppDashboard.highlightTextColor}`}}
          >
            {props.mobileAppDashboard.companyName}
          </h2>
        <div className={`${className}__imageContainer`}>
          <img className={`${className}__image`} src={props.mobileAppDashboard.logo} alt="Company logo" />
        </div>
      </div>
      <div 
        style={{margin: '4vw', marginBottom: '4vw'}}
      >
        <span 
          style={{
            color: `${props.mobileAppDashboard.highlightTextColor}`, 
            fontSize: '6vw',
            marginRight: '2vw'
          }}
          >
            {props.customerMarkParameters.loyaltyLevel.requiredSum}
          </span>
        <span
          style={{color: `${props.mobileAppDashboard.textColor}`, fontSize: '4vw'}}
        >
          баллов
        </span>
      </div>
      <div className={`${className}__loyaltyLevel`}>
        <div 
          style={{
            marginRight: '6vw',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <span
            style={{
              color: `${props.mobileAppDashboard.highlightTextColor}`,
              fontSize: '3vw',
              marginBottom: '2vw'
            }}
          >
            Кэшбэк
          </span>
          <span
            style={{fontSize: '4vw'}}
          >
            {props.customerMarkParameters.loyaltyLevel.number  + ' %'}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <span
            style={{
              color: `${props.mobileAppDashboard.highlightTextColor}`,
              fontSize: '3vw',
              marginBottom: '2vw'
            }}
          >
            Уровень
          </span>
          <span
            style={{fontSize: '4vw'}}
          >
            {props.customerMarkParameters.loyaltyLevel.name}
          </span>
        </div>
      </div>
      <div className={`${className}__buttonsContainer`}>
        <button 
          type='button'
          name='Показать'
          className={`${className}__buttonIcon`}
          onClick={() => CardStore.setMessage(props.company.companyId, 'Показать')}
          >
            <img 
              src={eyeIcon} alt="Eye Icon"
              className={`${className}__icon blue`}
              />
        </button>
        <button 
          type='button'
          name='Удалить'
          className={`${className}__buttonIcon`}
          onClick={() => CardStore.setMessage(props.company.companyId, 'Удалить')}

          >
            <img 
              src={trashIcon} alt="Trash Icon"
              className={`${className}__icon red`}
              />
        </button>
        <button 
          style={{
            color: `${props.mobileAppDashboard.mainColor}`,
            fontSize: '4vw',
            backgroundColor: `${props.mobileAppDashboard.backgroundColor}`,
            borderRadius: '15px',
            padding: '4vw 8vw 4vw 8vw',
            cursor: 'pointer'
          }}
          type='button'
          name='Подробнее'
          onClick={() => CardStore.setMessage(props.company.companyId, 'Подробнее')}
          >
            Подробнее
          </button>
      </div>
    </div>
   );
}
 
export default CompanyCard;
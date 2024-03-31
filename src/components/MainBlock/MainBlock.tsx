import * as React from 'react';
import './styles.css';
import LoaderContainer from '../Loader';
import CardStore from '../../store/CardStore';
import { observer } from 'mobx-react-lite';
import CompanyCard from '../CompanyCard/CompanyCard';

const className = 'MainBlock';

const MainBlock = observer( () => {
  React.useEffect(()=> {
    CardStore.fetchCards();
  },[]);
  return ( 
    <div className={`${className}__container`}>
      {!CardStore.cards && <LoaderContainer />}
      {CardStore.cards && CardStore.cards.map((card) => 
        <CompanyCard 
          key={card.company.companyId}
          company={card.company} 
          customerMarkParameters={card.customerMarkParameters} 
          mobileAppDashboard={card.mobileAppDashboard}/>
      )}
    </div>
   );
}
);
 
export default MainBlock;
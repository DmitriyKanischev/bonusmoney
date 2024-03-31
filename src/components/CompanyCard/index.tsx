import * as React from 'react';
import CompanyCard from './CompanyCard';
import { ICard } from '../../common/types/ICard';

const CompanyCardContainer:React.FC<ICard> = (props) => 
  <CompanyCard 
    company={props.company} 
    customerMarkParameters={props.customerMarkParameters} 
    mobileAppDashboard={props.mobileAppDashboard} />;

export default CompanyCardContainer;

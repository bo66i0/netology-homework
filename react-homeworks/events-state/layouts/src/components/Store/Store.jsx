import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import './Store.css';

const Store = (props) => {
  const {products} = props;

  const VIEW_LIST = 'view_list';
  const VIEW_MODULE= 'view_module';
  const [viewType, setViewType] = useState(VIEW_LIST);

  return (
    <div className="store">
      <div className="store__view-icon-box">
        <IconSwitch icon={viewType} onSwitch={() => {
          setViewType(prevType => prevType === VIEW_LIST ? VIEW_MODULE : VIEW_LIST)
        }}/>
      </div>
      {viewType === VIEW_LIST ? <ListView items={products}/> : <CardsView cards={products}/>}
    </div>
  );
};

Store.propTypes = {
  products: PropTypes.array.isRequired
};

export default Store;
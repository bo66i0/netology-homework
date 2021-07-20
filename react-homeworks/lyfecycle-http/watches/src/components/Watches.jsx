import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import WatchAddForm from './WatchAddForm';
import WatchesList from './WatchesList';

function Watches(props) {
  const initWatchAddFormState = {
    name: '',
    timezone: ''
  };
  const [watchesList, setWatchesList] = useState([]);
  const [watchAddForm, setWatchAddForm] = useState(initWatchAddFormState);

  function handleAddWatchFormChange({target}) {
    setWatchAddForm(prevForm => ({...prevForm, [target.name]: target.value}));
  }

  function handleAddWatch(event) {
    event.preventDefault();
    if(watchAddForm.name && watchAddForm.timezone) {
      setWatchesList(prevWatchesList => ([
        ...prevWatchesList,
        {
          id: shortid.generate(),
          name: watchAddForm.name,
          timezone: watchAddForm.timezone
        }
      ]));

      setWatchAddForm(initWatchAddFormState);
    }
  }

  function handleRemoveWatch(id) {
    setWatchesList(prevList => prevList.filter(watch => watch.id !== id));
  }

  return (
    <div className="watches">
      <WatchAddForm onSubmit={handleAddWatch} onChange={handleAddWatchFormChange} form={watchAddForm}/>
      <WatchesList watches={watchesList} onRemove={handleRemoveWatch}/>
    </div>
  );
}

Watches.propTypes = {};

export default Watches;
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import WalkModel from '../models/WalkModel';
import WalkAddForm from './WalkAddForm';
import WalksList from './WalksList';

const WalksRegisterer = (props) => {

  const initialWalkAddFormState = {
    date: '',
    distance: '',
    editId: null
    editId: null
  };
  const [walks, setWalks] = useState([]),
    [walkAddForm, setWalkAddForm] = useState(initialWalkAddFormState);

  function handleAddFormChange({target}) {
    setWalkAddForm(prevForm => ({...prevForm, [target.name]: target.value}));
  }

  function walkRemoveHandler(id) {
    setWalks(prevWalks => prevWalks.filter(walk => walk.id !== id));

    if(id === walkAddForm.editId) {
      setWalkAddForm(initialWalkAddFormState)
    }
  }

  function walkEditHandler(id) {
    const walk = walks.find(walk => walk.id === id);
    setWalkAddForm({editId: id, date: walk.date, distance: walk.distance});
  }

  function walkAddHandler(evt) {
    evt.preventDefault();

    if(walkAddForm.editId) {//если правим существующую запись
      setWalks(prevWalks => prevWalks.map(
        walk => walk.id === walkAddForm.editId ? new WalkModel(walk.id, walkAddForm.date, walkAddForm.distance) : walk
      ));
    } else {//если создаем новую запись
      const existingDateWalk = walks.find(walk => walk.date === walkAddForm.date);
      if(existingDateWalk) {
        setWalks(prevWalks => prevWalks.map(walk => {
          if(walk.id === existingDateWalk.id) {
            walk = new WalkModel(walk.id, walk.date, walk.distance + Number(walkAddForm.distance));
          }
          return walk;
        }));
      } else {
        setWalks(prevWalks => [...prevWalks, new WalkModel(shortid.generate(), walkAddForm.date, walkAddForm.distance)]);
      }
    }

    setWalks(prevWalks => [...prevWalks].sort((walk, walkNext) => {
      const date = new Date(walk.date);
      const dateNext = new Date(walkNext.date);
      return date - dateNext;
    }));
    setWalkAddForm(initialWalkAddFormState);
  }

  return (
    <div className="walks-registerer">
      <WalkAddForm form={walkAddForm}
                   walks={walks}
                   onSubmit={walkAddHandler}
                   onChange={handleAddFormChange}/>
      <WalksList walks={walks} onRemove={walkRemoveHandler} onEdit={walkEditHandler}/>
    </div>
  );
};

WalksRegisterer.propTypes = {};

export default WalksRegisterer;
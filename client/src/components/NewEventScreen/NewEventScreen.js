import React, { useState } from 'react';

const NewEventScreen = ({ onClose, onEventCreated }) => { //closes on close or event creation
  const [eventData, setEventData] = usState({ title: '', date: ''});

  const handleInput = (e) => {
    setEventData()
  }


}

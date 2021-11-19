import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";
import EventDetails from './EventDetails'
import Profile from './Profile';
import './Event.css'

  

const Event = (props) => {
  // const [event, setEvent] = useState({})
  // const { organizer } = useParams()
  const navigate = useNavigate();
  const { event_description, event_date, event_title, event_location, event_id } = props.event
  

  
  const handleClick =() => {
    navigate(`/event-details/${event_id}`)
  }
  console.log(props.event)
  return (
  
    <div className="events" key={event_id} onClick={handleClick}>
        <h4><span>Potluck Name:</span> {event_title}</h4>
        <p><span>Date:</span> {event_date}</p> 
        <p><span>Location:</span> {event_location}</p>
        <p><span>Description:</span> {event_description}</p>
  </div>

  );
};

export default Event;

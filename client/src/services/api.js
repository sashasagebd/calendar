const API_URL = "http://localhost:5000/api/events";

export const fetchEvents = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const createEvent = async (eventData) => {
  try{
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
    });

    if(!res.ok){
        throw new Error("Failed to create event")
    }
    return await res.json();
  } catch(error){
    return { error: error.message };
  }
};

export const deleteEvent = async (eventId) => {
    await fetch(`${API_URL}/${eventId}`, { method: 'DELETE' });
};


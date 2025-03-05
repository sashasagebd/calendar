const API_URL = "http://localhost:5000/api/events";

export const fetchEvents = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const createEvent = async (eventData) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
    });
    return res.json;
}


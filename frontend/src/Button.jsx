import { useActionState } from "react";
import "./Button.css";

export default function Button({ id, onClose }) {
  async function bookingAction(previousState, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const checkIn = formData.get("check_in_date");
    const checkOut = formData.get("check_out_date");
    const roomType = formData.get("room_type");

    // Frontend date validation
    if (new Date(checkIn) >= new Date(checkOut)) {
      return "Check-out must be after check-in";
    }

    // Frontend phone validation
    if (phone.length !== 10 || !phone.match(/^\d+$/)) {
      return "Phone number must contain exactly 10 digits";
    }

    // Convert FormData → normal JavaScript object
    const data = Object.fromEntries(formData.entries());

    // Send data to Django
    const res = await fetch("http://127.0.0.1:8000/book/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    // Convert Django JSON response → JavaScript object
    const result = await res.json();

    console.log(result);

    if (!res.ok) {
      return result.errors || "Booking failed";
    }

    return result.message || "Booking successful";
  }

  const [state, actionFrom, ispending] = useActionState(bookingAction, "");

  const rooms = [
    {
      roomId: 1,
      type: "Deluxe Room",
    },
    {
      roomId: 2,
      type: "Family Room",
    },
    {
      roomId: 3,
      type: "Suite Room",
    },
    {
      roomId: 4,
      type: "Dormitory Room",
    },
  ];

  // Find selected room
  const selectedRoom = rooms.find((room) => room.roomId === id);

  // Remove selected room from dropdown
  const filter_rooms = rooms.filter((room) => room.roomId !== id);

  return (
    <>
      <form action={actionFrom} className="form-head">
        {/* Close button */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button type="button" id="close-button" onClick={onClose}>
            x
          </button>
        </div>

        <h2 style={{ textAlign: "center" }}>Book Your Stay</h2>
        <div id="form-content">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="check_in_date">Check-in Date &amp; Time</label>
            <input
              type="datetime-local"
              id="check_in_date"
              name="check_in_date"
              required
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="check_out_date">Check-out Date &amp; Time</label>
            <input
              type="datetime-local"
              id="check_out_date"
              name="check_out_date"
              required
            />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required maxLength={10} />
          </div>
          <div>
            <label htmlFor="room_type">Room Type</label>
            <select id="room_type" name="room_type" required>
              <option value={selectedRoom?.type || ""}>
                {selectedRoom?.type || "Select Your Room"}
              </option>

              {filter_rooms.map((room) => (
                <option key={room.roomId} value={room.type}>
                  {room.type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit">{ispending === true ? "Booking..." : "BOOK NOW"}</button>
        </div>

        <p id="form-status">{state}</p>
      </form>
    </>
  );
}

import React from "react";

const ErrorNotification = ({ errors, closeNotifications }) => (
  <div>
    {errors.map((error, idx) => <div key={idx}>{error}</div>)}
    <button onClick={closeNotifications}>x</button>
  </div>
)

export default ErrorNotification;
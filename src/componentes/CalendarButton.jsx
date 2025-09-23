import React from "react";

export default function CalendarButton() {
  const details = `Matrimono Sebastian y Jessica
Zafar Eventos

Km 10 Autopista vía Floridablanca - Piedecuesta

Piedecuesta, Santander

03:00 PM`;

  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render" +
    "?action=TEMPLATE" +
    "&text=Matrimonio+Sebastian+y+Jessica" +
    "&dates=20251101T200000Z/20251102T070000Z" +
    "&details=" +
    encodeURIComponent(details) +
    "&location=" +
    encodeURIComponent("https://maps.app.goo.gl/QdTKbAiPitVPYaDt9");

  return (
    <a
      href={googleCalendarUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="calendar-button"
    >
      Agregar a Google Calendar
    </a>
  );
}

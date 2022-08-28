const isSchedulableAppointment = (appointments, { start, end }) => {
  const hasCollidingAppointment = appointments.some((appointment) => {
    return (
      start.isBetween(appointment.start, appointment.end, undefined, "[)") ||
      end.isBetween(appointment.start, appointment.end, undefined, "(]") ||
      (appointment.start.isBetween(start, end, undefined, "()") &&
        appointment.end.isBetween(start, end, undefined, "()"))
    );
  });

  return !hasCollidingAppointment;
};

module.exports = {
  isSchedulableAppointment,
};

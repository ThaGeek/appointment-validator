const moment = require("moment");
const { isSchedulableAppointment } = require("./scheduler");

const appointments = [
  {
    start: moment("2022-08-28T09:00:00"),
    end: moment("2022-08-28T10:00:00"),
  },
  {
    start: moment("2022-08-28T14:00:00"),
    end: moment("2022-08-28T14:50:00"),
  },
];

describe("Scheduler service", () => {
  it("should return true for 08:00 - 09:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T08:00:00"),
        end: moment("2022-08-28T09:00:00"),
      })
    ).toEqual(true);
  });

  it("should return true for 08:15 - 09:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T08:15:00"),
        end: moment("2022-08-28T09:00:00"),
      })
    ).toEqual(true);
  });

  it("should return false for 08:00 - 10:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T08:00:00"),
        end: moment("2022-08-28T10:00:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 08:15 - 09:15", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T08:15:00"),
        end: moment("2022-08-28T09:15:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 08:00 - 11:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T08:00:00"),
        end: moment("2022-08-28T11:00:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 08:00 - 15:30", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T08:00:00"),
        end: moment("2022-08-28T15:30:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 09:00 - 10:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T09:00:00"),
        end: moment("2022-08-28T10:00:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 09:01 - 09:30", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T09:01:00"),
        end: moment("2022-08-28T09:30:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 09:15 - 10:15", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T09:15:00"),
        end: moment("2022-08-28T10:15:00"),
      })
    ).toEqual(false);
  });

  it("should return true for 10:00 - 11:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T10:00:00"),
        end: moment("2022-08-28T11:00:00"),
      })
    ).toEqual(true);
  });

  it("should return false for 13:00 - 14:15", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T13:00:00"),
        end: moment("2022-08-28T14:15:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 13:00 - 15:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T13:00:00"),
        end: moment("2022-08-28T15:00:00"),
      })
    ).toEqual(false);
  });

  it("should return false for 14:15 - 15:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T14:15:00"),
        end: moment("2022-08-28T15:00:00"),
      })
    ).toEqual(false);
  });

  it("should return true for 14:50 - 15:00", () => {
    expect(
      isSchedulableAppointment(appointments, {
        start: moment("2022-08-28T14:50:00"),
        end: moment("2022-08-28T15:00:00"),
      })
    ).toEqual(true);
  });
});

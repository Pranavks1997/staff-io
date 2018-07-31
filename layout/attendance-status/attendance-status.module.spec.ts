import { AttendanceStatusModule } from './attendance-status.module';

describe('AttendanceStatusModule', () => {
  let attendanceStatusModule: AttendanceStatusModule;

  beforeEach(() => {
    attendanceStatusModule = new AttendanceStatusModule();
  });

  it('should create an instance', () => {
    expect(attendanceStatusModule).toBeTruthy();
  });
});

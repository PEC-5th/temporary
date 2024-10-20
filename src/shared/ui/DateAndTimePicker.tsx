import { DatePicker } from './DatePicker';
import TimePicker from './TimePicker';

interface DateAndTimePickerProps {
  date: Date | undefined;
  time: string | undefined;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string | undefined) => void;
}

export default function DateAndTimePicker({
  date,
  time,
  onDateChange,
  onTimeChange,
}: DateAndTimePickerProps) {
  return (
    <div className="flex gap-1">
      <DatePicker date={date} onChange={onDateChange} />
      <TimePicker time={time} onChange={onTimeChange} />
    </div>
  );
}

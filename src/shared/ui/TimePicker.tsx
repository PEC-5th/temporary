import { POSSIBLE_TIMES } from '../constants/time';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

interface TimePickerProps {
  time: string | undefined;
  onChange: (time: string | undefined) => void;
}

export default function TimePicker({ time, onChange }: TimePickerProps) {
  return (
    <Select value={time} onValueChange={onChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="시간" />
      </SelectTrigger>
      <SelectContent>
        {POSSIBLE_TIMES.map((time) => (
          <SelectItem value={time} key={time}>
            {time}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

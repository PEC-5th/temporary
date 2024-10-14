import { Button } from '@/shared/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

interface ConfirmRequestVideoCallDialogProps {
  open: boolean;
  schedules: string[];
  user: { id: number; name: string };
}

export default function ConfirmRequestVideoCallDialog({
  open,
  schedules,
  user,
}: ConfirmRequestVideoCallDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>비디오 콜 요청</DialogTitle>
          <DialogDescription>
            아래의 정보가 맞는지 다시 한 번 확인해주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="text-xs font-bold bg-slate-100 rounded-sm p-4 flex flex-col gap-4">
          <div>
            <p>닉네임</p>
            <p>• {user.name}</p>
          </div>
          <div>
            <p>요청 시간</p>
            <ul>
              {/* TODO: ISO 형식으로 받으면 날짜 형태로 변환하기 */}
              {schedules.map((schedule) => (
                <li key={schedule}>• {schedule}</li>
              ))}
            </ul>
          </div>
        </div>
        <DialogFooter>
          {/* TODO: model에 비즈니스 로직 작성하기 */}
          <Button type="submit">요청하기</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

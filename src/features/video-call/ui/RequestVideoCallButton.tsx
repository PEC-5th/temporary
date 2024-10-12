import { useRouter } from 'next/navigation';
import { PATHS } from '@/shared/constants/path';
import { Button } from '@/shared/ui/button';

interface RequestVideoCallButtonProps {
  userId: number;
}

export default function RequestVideoCallButton({
  userId,
}: RequestVideoCallButtonProps) {
  const router = useRouter();

  const handleClickRequestVideoCallButton = () => {
    router.push(PATHS.VIDEO_CALL_REQUEST(userId));
  };

  return (
    <Button onClick={handleClickRequestVideoCallButton}>비디오 콜 요청</Button>
  );
}

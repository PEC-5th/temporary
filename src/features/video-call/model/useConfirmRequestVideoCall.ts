import useGetUserInformation from '@/entities/user/api/useGetUserInformation';
import { useToast } from '@/shared/config/use-toast';
import usePostRequestVideoCall from '../api/useRequestVideoCall';

interface UseConfirmRequestVideoCallOptions {
  userId: number;
  schedules: string[];
}

export default function useConfirmRequestVideoCall({
  userId,
  schedules,
}: UseConfirmRequestVideoCallOptions) {
  const { toast } = useToast();
  const { data: user } = useGetUserInformation({ userId });
  const { mutate: postRequestVideoCall, isPending: isRequestVideoCallPending } =
    usePostRequestVideoCall({
      schedules,
      userId,
      options: {
        onSuccess: () => {
          // TODO: 라우팅 로직 작성
          toast({
            title: '요청이 완료되었습니다.',
          });
        },
      },
    });

  const handleClickRequestVideoCallButton = () => {
    postRequestVideoCall();
  };

  return {
    user,
    handleClickRequestVideoCallButton,
    isRequestVideoCallPending,
  };
}

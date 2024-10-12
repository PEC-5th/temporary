import { AvatarImageProps } from '@radix-ui/react-avatar';
import { ReactNode } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

interface AvatarWithPopoverProps {
  src: AvatarImageProps['src'];
  fallback: string;
  RenderPopoverContent: ReactNode;
}

export default function AvatarWithPopover({
  src,
  fallback,
  RenderPopoverContent,
}: AvatarWithPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>{RenderPopoverContent}</PopoverContent>
    </Popover>
  );
}

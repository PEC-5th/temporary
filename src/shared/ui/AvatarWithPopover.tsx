import { AvatarImageProps } from '@radix-ui/react-avatar';
import { ReactNode } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

interface AvatarWithPopoverProps {
  src: AvatarImageProps['src'];
  fallbackText: string;
  RenderPopoverContent: ReactNode;
}

export default function AvatarWithPopover({
  src,
  fallbackText,
  RenderPopoverContent,
}: AvatarWithPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>{RenderPopoverContent}</PopoverContent>
    </Popover>
  );
}

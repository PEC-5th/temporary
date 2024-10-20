'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/shared/ui/button';
import DateAndTimePicker from '@/shared/ui/DateAndTimePicker';
import { Form, FormDescription, FormField } from '@/shared/ui/Form';
import { requestVideoCallFormSchema } from '../model/requestVideoCallFormSchema';

export default function RequestVideoCallForm() {
  const form = useForm<z.infer<typeof requestVideoCallFormSchema>>({
    resolver: zodResolver(requestVideoCallFormSchema),
    defaultValues: {
      schedules: [{ date: undefined, time: undefined }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'schedules',
  });

  const canAddSchedule = () => {
    const schedules = form.watch('schedules');
    return (
      schedules.every(
        (schedule) =>
          schedule.date !== undefined && schedule.time !== undefined,
      ) && schedules.length < 3
    );
  };

  const handleAddSchedule = () => {
    if (canAddSchedule()) {
      append({ date: undefined, time: undefined });
      form.clearErrors('schedules');
    } else {
      form.setError('schedules', {
        type: 'manual',
        message: '날짜와 시간을 입력해주세요.',
      });
    }
  };

  const onSubmit = (data: z.infer<typeof requestVideoCallFormSchema>) => {
    // TODO: 일정 요청 API 호출
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="w-[500px] flex flex-col gap-3 border-2 border-gray-300 p-4 rounded-md"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormDescription>일정을 선택해주세요.</FormDescription>
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-3">
            <FormField
              name={`schedules.${index}`}
              render={({ field }) => (
                <DateAndTimePicker
                  {...field}
                  date={field.value.date}
                  time={field.value.time}
                  onDateChange={(newDate) =>
                    field.onChange({ ...field.value, date: newDate })
                  }
                  onTimeChange={(newTime) =>
                    field.onChange({ ...field.value, time: newTime })
                  }
                />
              )}
            />
            {form.formState.errors.schedules?.[index]?.date && (
              <p className="text-xs text-red-600">
                * {form.formState.errors.schedules[index].date.message}
              </p>
            )}
            {form.formState.errors.schedules?.[index]?.time && (
              <p className="text-xs text-red-600">
                * {form.formState.errors.schedules[index].time.message}
              </p>
            )}
            {index === fields.length - 1 && (
              <Button type="button" size="sm" onClick={handleAddSchedule}>
                추가
              </Button>
            )}
            {index > 0 && (
              <Button type="button" size="sm" onClick={() => remove(index)}>
                삭제
              </Button>
            )}
          </div>
        ))}
        {form.formState.errors.schedules?.message && (
          <p className="text-xs text-red-600">
            * {form.formState.errors.schedules.message}
          </p>
        )}
        <Button type="submit">요청하기</Button>
      </form>
    </Form>
  );
}

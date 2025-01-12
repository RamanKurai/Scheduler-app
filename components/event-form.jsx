import useFetch from '@/hooks/use-fetch';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { eventSchema } from '@/app/lib/validator';

const EventForm = ({ initialData = {} }) => {
    // const router = useRouter();
    const {
        register,
        control,
        handleSubmit,
        formState : {errors},
    } = useForm({
        resolver: zodResolver(eventSchema),
        defaultValues :{
            title: initialData.title || "",
            description: initialData.description || "",
            duration: initialData.duration || 30,
            isPrivate: initialData.isPrivate ?? true,
        }
    })

    // const { loading , data , fn , error} = useFetch(createEvent)

    // const onSubmit = async (data) => {
    //     await fnCreateEvent(data);
    //     if (!loading && !error) onSubmitForm();
    //     router.refresh(); // Refresh the page to show updated data
    //   };
  return (
    <form
      className="px-6 flex flex-col gap-4"
    //   onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Event Title
        </label>

        <Input id="title" {...register("title")} className="mt-1" />

        {errors.title && (
          <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>

        <Textarea
          {...register("description")}
          id="description"
          className="mt-1"
        />
        {errors.description && (
          <p className="text-red-500 text-xs mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700"
        >
          Duration (minutes)
        </label>

        <Input
          id="duration"
          {...register("duration", {
            valueAsNumber: true,
          })}
          type="number"
          className="mt-1"
        />

        {errors.duration && (
          <p className="text-red-500 text-xs mt-1">{errors.duration.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="isPrivate"
          className="block text-sm font-medium text-gray-700"
        >
          Event Privacy
        </label>
        <Controller
          name="isPrivate"
          control={control}
          render={({ field }) => (
            <Select
              onValueChange={(value) => field.onChange(value === "true")}
              value={field.value ? "true" : "false"}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select privacy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Private</SelectItem>
                <SelectItem value="false">Public</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {errors && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}

      <Button type="submit">
    Submit
      </Button>
    </form>
  );
}

export default EventForm

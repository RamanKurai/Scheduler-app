import { getEventDetails } from '@/actions/events';
import { getUserByUsername } from '@/actions/users';
import EventCard from '@/components/event-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params }) {
  const event = await getEventDetails(params.username , params.eventId);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `Book ${event.name} with ${event.user.name} | Schedulrr`,
    description: `Schedule ${event.duration}-minute ${event.title} event with ${event.user.name}`,
  };
}

const EventPage = async ({ params}) => {
    const event = await getEventDetails(params.username , params.eventId);

  if (!event) {
    notFound();
  }
  return (
    <div className='flex flex-col justify-center lg:flex-row px-4 py-8'>
        Event Page
    </div>
    // <div>
    //     <EventDetails/>
    //     <BookingForm/>
    // </div>
  );
}

export default EventPage;

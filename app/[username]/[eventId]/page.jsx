import { getEventDetails } from '@/actions/events';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'
import EventDetails from './_components/event-details';
import BookingForm from './_components/booking-form';
import { getEventAvailability } from '@/actions/availability';

export async function generateMetadata({ params }) {
  const {username , eventId} = await params;
  const event = await getEventDetails(username , eventId);

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
  const {username , eventId} = await params;

    const event = await getEventDetails(username , eventId);
    const availability = await getEventAvailability(eventId);
  if (!event) {
    notFound();
  }
  return (
    <div className='flex flex-col justify-center lg:flex-row px-4 py-8'>
  <EventDetails event={event}/>    
  <Suspense fallback={<div>Loading booking form...</div>}>
        <BookingForm event={event} availability={availability} />
      </Suspense>
  </div>
    // <div>
    //   
    //     <BookingForm/>
    // </div>
  );
}

export default EventPage;

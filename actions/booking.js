"use server"
import { db } from "@/lib/prisma";

export async function createBooking(bookingData) {
    try {
        const event = await db.event.findUnique({
            where : {id : bookingData.eventId},
            include : {
                user : true
            }
        })
        if (!event){
             throw new Error("Event not Found")
        }

        // use google calendar API to generate meeting link
    } catch (error) {
        
    }
}
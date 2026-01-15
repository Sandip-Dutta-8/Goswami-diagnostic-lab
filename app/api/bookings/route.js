import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';

// GET all bookings
export async function GET(request) {
    try {
        await dbConnect();

        const bookings = await Booking.find({}).sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            data: bookings
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}

// POST create new booking
export async function POST(request) {
    try {
        await dbConnect();

        const body = await request.json();
        const booking = await Booking.create(body);

        return NextResponse.json({
            success: true,
            data: booking,
            message: 'Booking created successfully!'
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 400 });
    }
}
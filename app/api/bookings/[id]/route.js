import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Booking from '@/models/Booking';

// PATCH update booking status
export async function PATCH(request, { params }) {
    try {
        await dbConnect();

        // Await params to unwrap the Promise
        const { id } = await params;
        const body = await request.json();

        const booking = await Booking.findByIdAndUpdate(
            id,
            { status: body.status },
            { new: true, runValidators: true }
        );

        if (!booking) {
            return NextResponse.json({
                success: false,
                error: 'Booking not found'
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: booking
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 400 });
    }
}

// DELETE booking
export async function DELETE(request, { params }) {
    try {
        await dbConnect();

        // Await params to unwrap the Promise
        const { id } = await params;
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return NextResponse.json({
                success: false,
                error: 'Booking not found'
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: {}
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 400 });
    }
}
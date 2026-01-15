import { NextResponse } from 'next/server';

// Simple authentication - In production, use proper authentication like NextAuth.js
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            return NextResponse.json({
                success: true,
                message: 'Authentication successful'
            }, { status: 200 });
        } else {
            return NextResponse.json({
                success: false,
                error: 'Invalid credentials'
            }, { status: 401 });
        }

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}
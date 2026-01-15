import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: 0,
        max: 150
    },
    testType: {
        type: String,
        required: [true, 'Test type is required'],
        enum: [
            'Blood Tests',
            'Hormonal Tests',
            'Microbiology',
            'Histopathology',
            'Genetic Testing',
            'Radiology & Imaging'
        ]
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
import { NextResponse } from 'next/server';

interface DecibelData {
  decibel: number;
  timestamp: string;
  location: string;
  device: string;
  status: 'normal' | 'warning' | 'danger';
}

export async function GET() {
  // Hardcoded decibel data
  const decibelData: DecibelData = {
    decibel: 75.5,
    timestamp: new Date().toISOString(),
    location: "San Francisco, CA",
    device: "DePIN Loudness Sensor #1",
    status: "normal"
  };

  return NextResponse.json(decibelData);
}

export async function POST() {
  // For future use - could accept parameters to customize the response
  const decibelData: DecibelData = {
    decibel: 82.3,
    timestamp: new Date().toISOString(),
    location: "New York, NY",
    device: "DePIN Loudness Sensor #2",
    status: "warning"
  };

  return NextResponse.json(decibelData);
}

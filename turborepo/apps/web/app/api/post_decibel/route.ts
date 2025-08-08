import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

interface DecibelData {
  decibel: number;
  location: string;
  device: string;
  timestamp?: string;
  status?: 'normal' | 'warning' | 'danger';
}

// MongoDB connection string - should be in environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = 'depin_loudness';
const COLLECTION_NAME = 'decibel_readings';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body: DecibelData = await request.json();
    
    // Validate required fields
    if (!body.decibel || typeof body.decibel !== 'number') {
      return NextResponse.json(
        { error: 'Decibel value is required and must be a number' },
        { status: 400 }
      );
    }

    if (!body.location || typeof body.location !== 'string') {
      return NextResponse.json(
        { error: 'Location is required and must be a string' },
        { status: 400 }
      );
    }

    if (!body.device || typeof body.device !== 'string') {
      return NextResponse.json(
        { error: 'Device is required and must be a string' },
        { status: 400 }
      );
    }

    // Set default values
    const decibelData = {
      ...body,
      timestamp: body.timestamp || new Date().toISOString(),
      status: body.status || (body.decibel > 85 ? 'danger' : body.decibel > 70 ? 'warning' : 'normal'),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);

    // Insert the decibel data
    const result = await collection.insertOne(decibelData);

    await client.close();

    // Return the created document with its ID
    return NextResponse.json({
      success: true,
      id: result.insertedId,
      message: 'Decibel reading saved successfully',
      data: {
        ...decibelData,
        _id: result.insertedId
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Error saving decibel data:', error);
    return NextResponse.json(
      { error: 'Failed to save decibel data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 
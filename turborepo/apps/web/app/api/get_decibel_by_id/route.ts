import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, ObjectId } from 'mongodb';

// MongoDB connection string - should be in environment variables
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DATABASE_NAME = 'depin_loudness';
const COLLECTION_NAME = 'decibel_readings';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'ID parameter is required' },
        { status: 400 }
      );
    }

    // Validate ObjectId format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);

    // Find the document by ID
    const document = await collection.findOne({ _id: new ObjectId(id) });

    await client.close();

    if (!document) {
      return NextResponse.json(
        { error: 'Decibel reading not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: document
    });

  } catch (error) {
    console.error('Error retrieving decibel data:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve decibel data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 
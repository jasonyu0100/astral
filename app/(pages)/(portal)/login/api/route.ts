import { type NextRequest } from 'next/server'


export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
    return Response.json({
        "text": "hello world"
    })
}
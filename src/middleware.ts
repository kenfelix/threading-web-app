import { NextRequest, NextResponse, userAgent } from 'next/server'

export default async function middleware(req: NextRequest) {
    const { device, browser} = userAgent(req)
    
    const isTelegramMiniApp = device.type === 'mobile' && browser.name === 'Chrome WebView';
 
  if (isTelegramMiniApp) {
    return NextResponse.redirect(new URL('/welcome', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
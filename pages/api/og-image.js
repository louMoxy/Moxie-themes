import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Moxie Themes Blog';
    const description = searchParams.get('description') || 'Premium Shopify themes and SEO services';
    const author = searchParams.get('author') || 'Moxie Themes';
    const date = searchParams.get('date') || '';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a2e',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
            }}
          />
          
          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
              textAlign: 'center',
              maxWidth: '900px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ffd700',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px',
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#1a1a2e',
                }}
              >
                M
              </div>
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}
              >
                Moxie Themes
              </div>
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '24px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: '24px',
                color: '#e0e0e0',
                lineHeight: 1.4,
                marginBottom: '32px',
                maxWidth: '800px',
              }}
            >
              {description}
            </div>

            {/* Author and Date */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                fontSize: '18px',
                color: '#b0b0b0',
              }}
            >
              <div>By {author}</div>
              {date && <div>•</div>}
              {date && <div>{new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</div>}
            </div>
          </div>

          {/* Bottom Accent */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #ffd700 0%, #ff6b6b 50%, #4ecdc4 100%)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

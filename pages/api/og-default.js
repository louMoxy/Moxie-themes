import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler() {
  try {
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
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#ffd700',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '24px',
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#1a1a2e',
                }}
              >
                M
              </div>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                }}
              >
                Moxie Themes
              </div>
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: '32px',
                color: '#e0e0e0',
                lineHeight: 1.4,
                marginBottom: '20px',
                maxWidth: '800px',
              }}
            >
              Premium Shopify themes and SEO services
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '20px',
                color: '#b0b0b0',
                maxWidth: '600px',
              }}
            >
              Beautiful, fast, and conversion-optimized themes for modern ecommerce
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

import Link from 'next/link';

export default function HomePage() {
  return (
      <main
          style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              justifyContent: 'center',
          }}
      >
          <meta httpEquiv="refresh" content="0; URL=https://xagui.xap3y.eu/docs"/>
          <h1
              style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
              }}
          >
              XaGUI Documentation
          </h1>
          <p>
              Please visit{' '}
              <Link
                  href="/docs"
                  style={{
                      fontWeight: '600',
                      textDecoration: 'underline',
                  }}
              >
                  /docs
              </Link>{' '}
              and see the documentation.
          </p>
      </main>
  );
}

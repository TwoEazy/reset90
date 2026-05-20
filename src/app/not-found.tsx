import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "'Montserrat', sans-serif",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Giant 404 background */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "min(36rem, 50vw)",
            fontWeight: 700,
            color: "rgba(255,255,255,0.02)",
            lineHeight: 1,
            letterSpacing: "-0.05em",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          404
        </div>

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(200,168,78,0.04) 0%, transparent 60%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            maxWidth: 520,
            padding: "0 24px",
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(200,168,78,0.6)",
              marginBottom: 24,
            }}
          >
            Error 404
          </p>

          {/* Gold line */}
          <div
            style={{
              width: 80,
              height: 2,
              background:
                "linear-gradient(90deg, transparent, #c8a84e, transparent)",
              margin: "0 auto 32px",
            }}
          />

          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Page not{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #d4b85c, #c8a84e, #a88a3a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              found.
            </span>
          </h1>

          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              lineHeight: 1.6,
              marginBottom: 48,
              maxWidth: 400,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/en"
            style={{
              display: "inline-block",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: 13,
              padding: "14px 48px",
              borderRadius: 6,
              background: "#c8a84e",
              color: "#0a0a0a",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Back to Home
          </Link>

          <p
            style={{
              color: "rgba(255,255,255,0.2)",
              fontSize: 11,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginTop: 16,
            }}
          >
            RESET90
          </p>
        </div>
      </body>
    </html>
  );
}

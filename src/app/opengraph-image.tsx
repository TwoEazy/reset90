import { ImageResponse } from "next/og";

export const alt = "RESET90 — The Shift Begins";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* Top gold line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 3,
            backgroundColor: "#c8a84e",
            opacity: 0.6,
          }}
        />
        {/* Bottom gold line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 3,
            backgroundColor: "#c8a84e",
            opacity: 0.6,
          }}
        />

        {/* Circle border */}
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "2.5px solid rgba(200, 168, 78, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {/* Running figure SVG */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="#c8a84e"
          >
            <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7" />
          </svg>
        </div>

        {/* RESET90 text */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#c8a84e",
            letterSpacing: 12,
            marginBottom: 16,
          }}
        >
          RESET90
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255, 255, 255, 0.5)",
            letterSpacing: 8,
            marginBottom: 50,
          }}
        >
          THE SHIFT BEGINS
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(255, 255, 255, 0.4)",
            marginBottom: 20,
          }}
        >
          Premium 90-Day Transformation System
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 240,
            height: 1,
            backgroundColor: "rgba(200, 168, 78, 0.3)",
            marginBottom: 30,
          }}
        />

        {/* Website */}
        <div
          style={{
            fontSize: 16,
            color: "rgba(200, 168, 78, 0.6)",
            letterSpacing: 3,
          }}
        >
          reset90.be
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

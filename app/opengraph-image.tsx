import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sakib Shadab — Software Engineer";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#162e51",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 88px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Gold availability tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ffbe2e",
            color: "#1b1b1b",
            fontSize: 16,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "8px 16px",
            borderRadius: 2,
            marginBottom: 36,
          }}
        >
          Available for new opportunities
        </div>

        {/* Name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Sakib Shadab
        </div>

        {/* Role */}
        <div
          style={{
            color: "#73b3e7",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          Software Engineer at Aflac
        </div>

        {/* Description */}
        <div
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 22,
            lineHeight: 1.5,
            maxWidth: 640,
          }}
        >
          Building integrations, REST APIs, and developer tooling on
          ServiceNow. B.S. Computer Engineering, Virginia Tech.
        </div>

        {/* Bottom identifier strip */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#1a4480",
            padding: "20px 88px",
            fontSize: 16,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.8)" }}>
            An official website of Sakib Shadab
          </span>
          <span style={{ color: "#ffffff", fontWeight: 700 }}>
            sakibshadab.dev
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

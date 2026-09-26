import { ImageResponse } from "next/og";

export const alt = "Mochi: menos tiempo buscando, más tiempo acompañando.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #f5f4ff 0%, #ffffff 55%, #fff7f0 100%)",
          color: "#17152b",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "#6a4fe5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 22, height: 22, borderRadius: 11, background: "#fdb98a" }} />
          </div>
          <div style={{ fontSize: 40, fontWeight: 700 }}>Mochi</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            Todo lo importante del colegio.
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#6a4fe5" }}>
            Sin tener que buscarlo.
          </div>
        </div>
        <div style={{ fontSize: 30, color: "#4b4863" }}>
          Menos tiempo buscando. Más tiempo acompañando.
        </div>
      </div>
    ),
    size,
  );
}

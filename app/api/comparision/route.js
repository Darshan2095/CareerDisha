export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return new Response(
        JSON.stringify({ error: "'prompt' is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "GEMINI_API_KEY is not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const modelName = "models/gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/${modelName}:generateContent?key=${apiKey}`;

    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      }),
    });

    if (!upstream.ok) {
      const errBody = await safeJson(upstream);
      console.error("Gemini API error:", errBody);
      return new Response(
        JSON.stringify({ error: "Gemini API error", details: errBody }),
        { status: upstream.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await upstream.json();

    // ✅ Correct way to extract text
    const text = data?.candidates?.[0]?.content?.parts
      ?.map((p) => p.text)
      .join(" ") || "";

    return new Response(
      JSON.stringify({ response: text }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to get response from Gemini API",
        details: error?.message || String(error),
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

async function safeJson(resp) {
  try {
    return await resp.json();
  } catch {
    try {
      return await resp.text();
    } catch {
      return null;
    }
  }
}

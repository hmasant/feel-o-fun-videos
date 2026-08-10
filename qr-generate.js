import fs from "node:fs";
import videos from "./src/data/videos.json" with { type: "json" };

fs.mkdirSync("./public/qr-codes", { recursive: true });

(async () => {
  for (const { id, title } of videos) {
    const url = `https://feel-o-fun-videos.pages.dev/video/${id}`;
    const res = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(url)}`,
    );

    fs.writeFileSync(
      `./public/qr-codes/${title}.png`,
      Buffer.from(await res.arrayBuffer()),
    );

    console.log(`✓ ${title}`);
  }
})();

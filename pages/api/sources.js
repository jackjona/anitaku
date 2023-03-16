// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    server1: ["/api/1", "waifu.pics"],
    server2: ["/api/2", "waifu.im"],
    server3: ["/api/3", "pic.re"],
    gallery: ["/api/1", "waifu.pics"],
    random: ["/api/1", "waifu.pics"],
  });
}

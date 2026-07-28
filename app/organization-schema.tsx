export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OceanView RP",
    url: "https://oceanviewrp.org",
    logo: "https://oceanviewrp.org/icon-512.png",
    description:
      "OceanView RP is a premium FiveM roleplay server offering immersive roleplay, custom vehicles, businesses, gangs, police, EMS, and an active community.",
    sameAs: [
      "https://discord.gg/nZPu6cWGYy",
      "https://www.tiktok.com/@oceanview.rp26",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
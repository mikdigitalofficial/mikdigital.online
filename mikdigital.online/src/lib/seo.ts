export const siteConfig = {
name: "mikdigital",
title: "mikdigital",
description:
"Technical performance marketing for companies that care about revenue, not vanity metrics.",
url: "https://mikdigital.online",
};

export function createMetadata({
title,
description,
path,
image,
}: {
title: string;
description?: string;
path?: string;
image?: string;
}) {
return {
title,
description: description || siteConfig.description,
alternates: {
canonical: path
? `${siteConfig.url}${path}`
: siteConfig.url,
},
openGraph: {
images: image ? [image] : [],
},
};
}

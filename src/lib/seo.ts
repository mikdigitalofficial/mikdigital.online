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
}: {
title: string;
description?: string;
}) {
return {
title,
description: description || siteConfig.description,
};
}

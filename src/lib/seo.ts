export function createMetadata({
title,
description,
path,
}: {
title: string;
description?: string;
path?: string;
}) {
return {
title,
description: description || siteConfig.description,
alternates: {
canonical: path
? `${siteConfig.url}${path}`
: siteConfig.url,
},
};
}

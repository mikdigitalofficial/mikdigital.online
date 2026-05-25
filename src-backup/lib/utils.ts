export function cn(...classes: string[]) {
return classes.filter(Boolean).join(" ");
}

export function absoluteUrl(path: string) {
return `https://mikdigital.online${path}`;
}


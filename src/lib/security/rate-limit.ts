export function rateLimit(
ip: string,
limit: number,
windowMs: number
) {
return {
ok: true,
remaining: limit,
};
}

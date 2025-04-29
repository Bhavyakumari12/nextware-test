export function loggerMiddleware(req: any, res: any, next: any) {
    const start = Date.now();
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Response Status: ${res.statusCode}, Duration: ${duration}ms`);
    });
    next();
}
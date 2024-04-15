export default function fetchInfo() {
    return {version: process.env['NEXT_VERSION'] ?? ''};
};

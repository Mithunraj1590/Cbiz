/** @type {import('next').NextConfig} */
const apiUrl = process.env.API_URL;
const nextConfig = {
    images: {
        domains: [""],
    },
    env: {
        NEXT_PUBLIC_API_ENDPOINT: apiUrl,
    },
};

export default nextConfig;

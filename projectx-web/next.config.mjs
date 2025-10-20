/** @type {import('next').NextConfig} */
const nextConfig = {
	// Generate a fully static site suitable for static hosts (iPage, GitHub Pages, etc.)
	output: 'export',
	trailingSlash: true,
	images: {
		// If you start using next/image later, keep this unoptimized for static export
		unoptimized: true,
	},
};
export default nextConfig;

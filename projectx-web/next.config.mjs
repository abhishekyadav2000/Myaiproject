import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
	// Generate a fully static site suitable for static hosts (iPage, GitHub Pages, etc.)
	output: 'export',
	trailingSlash: true,
	images: {
		// If you start using next/image later, keep this unoptimized for static export
		unoptimized: true,
	},
	// Silence monorepo/workspace root inference warning
	outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
};
export default nextConfig;

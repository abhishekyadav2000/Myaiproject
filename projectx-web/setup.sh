#!/bin/bash

# ProjectX Website - Quick Setup Script
# Run this after installing Node.js

echo "🚀 Setting up ProjectX Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "Please install Node.js first:"
    echo "  Option 1 (Homebrew): brew install node"
    echo "  Option 2 (Direct): Download from https://nodejs.org"
    echo ""
    exit 1
fi

echo "✅ Node.js detected: $(node --version)"
echo "✅ npm detected: $(npm --version)"
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ All dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now:"
    echo ""
    echo "  1. Start development server:"
    echo "     npm run dev"
    echo ""
    echo "  2. Open in browser:"
    echo "     http://localhost:3000"
    echo ""
    echo "  3. Build for production:"
    echo "     npm run build"
    echo ""
else
    echo ""
    echo "❌ Installation failed. Please check the errors above."
    exit 1
fi

/** @type {import('tailwindcss').Config} */

tailwind.config = {
    theme: {
        screens: {
            'mobile': '640px',
            // => @media (min-width: 640px) { ... }

            'tablet': '768px',
            // => @media (min-width: 768px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            colors: {
                black: '#021526',
                navy: '#03346E',
                blue: '#6EACDA',
                beige: '#E2E2B6',
                teal: '#2dd4bf'
            }
        }
    }
}
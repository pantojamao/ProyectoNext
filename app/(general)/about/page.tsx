import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Productos del Sur - Frutas Frescas Directo del Campo',
    description: 'Encuentra las mejores frutas frescas directamente de agricultores del sur. Calidad y frescura garantizada.',
    keywords: ['Frutas Frescas', 'Productos del Sur', 'Compra Directa'],
    twitter: {
        title: 'Productos del Sur - Frutas Frescas Directo del Campo',
        description: 'Encuentra las mejores frutas frescas directamente de agricultores del sur. Calidad y frescura garantizada.',
        images: 'https://example.com/path/to/your/image.jpg',  // Cambia esto por la URL de tu imagen destacada.
    }
}

    export default function AboutPage(){
        return (
            <>
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Hola mundo</span>
                <span> About Page</span>
            </main>
            </>
        )
}
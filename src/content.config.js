// 1. Importer des utilitaires depuis `astro:content`
import { defineCollection } from 'astro:content';

// 2. Importer un ou plusieurs chargeurs
import { glob, file } from 'astro/loaders';

// 3. Importer Zod
import { z } from 'astro/zod';

// 4. Définir votre/vos collection(s)
const lectures = defineCollection({ 
    loader: file("src/pages/lectures.json"),
    schema: z.object({
        name: z.string(),
        author: z.string(),
        year: z.number(),
        image: z.string()
    }),
});

// 5. Exporter un seul objet `collections` pour enregistrer votre/vos collection(s)
export const collections = { lectures };
import { type ImageMetadata } from "astro";

// --- Importações de Ícones de Tecnologia (Existentes no seu código) ---
// Mantenha apenas os ícones necessários para os 3 projetos
import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, TsIcon, AstroIcon, TailwindIcon
} from "../assets/Icons"

// --- Importações de Logos (Atualizado: Adicionando GsapLogo.png) ---
import { ArmsLogo, NextmartLogo, VortexaLogo } from "../assets/Logos"; // Apenas como placeholder de estrutura
import GsapLogo from "../assets/Logos/GsapLogo.png"; // NOVO: Importação do Logo GSAP
// --- Importações de Imagens dos seus Projetos (Novas Importações) ---
import casacamisetasShot from "../assets/projetos/casacamisetas.png";
import meuportifolioShot from "../assets/projetos/meuportifolio.png";
import sitemirageShot from "../assets/projetos/sitemirage.png";

// --- Importações de Mockup (Placeholder para manter a estrutura) ---
import { ARMSv3Mockup } from "../assets/Mockup"; // Apenas como placeholder de estrutura


// --- Tipagem de Dados (Manteve-se a original) ---
type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    // Note que Logo, Shot e Mockup devem ser tipados como ImageMetadata
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata, 
    Theme: string,
    Status: "completed" | "development", // Ajustei o tipo de Status para literais para melhor tipagem
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- TEMPLATE COMENTADO (Mantido para manter a estrutura do código original) --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

// --- TechInfo (Atualizado: Adicionando GSAP) ---
const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    Astro: {
        title: "Astro",
        description: "Frontend framework for streamlined development, integrating seamlessly with popular tools to create fast and modern websites with minimal configuration overhead.",
        icon: AstroIcon
    },
    // NOVO ITEM: GSAP (Usando o logo PNG importado para manter a consistência visual)
    GSAP: { 
        title: "GSAP",
        description: "Biblioteca robusta de JavaScript para animações de alta performance e complexas.",
        icon: GsapLogo
    },
    E_Commerce: {
        title: "Plataforma E-commerce",
        description: "Plataforma robusta para gestão completa de vendas, estoque e catálogo de produtos online.",
        icon: TsIcon // Usando TsIcon como um placeholder genérico
    },
    Branding: {
        title: "Design & Branding",
        description: "Foco em identidade visual, experiência do usuário e apresentação institucional.",
        icon: ReactIcon // Usando ReactIcon como um placeholder genérico
    }
};

// Common Features List (Mantido da sua estrutura original)
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

// --- Lista de Projetos (Apenas os 3 combinados e corrigidos) ---
export const ProjectsList: ProjectsListType = [
    {
        Name: "Meu Portfólio Pessoal",
        ShortDesc:
            "Plataforma pessoal para apresentar meus melhores trabalhos, habilidades e experiências, construída com foco em performance e modernidade.",
        Desc: "Este é o portfólio que estou desenvolvendo. Uma vitrine digital projetada para destacar minhas competências em desenvolvimento full-stack, com design clean e alta performance garantida pelo Astro.",
        Logo: AstroIcon, // Usando o ícone do Astro como Logo principal
        Shot: meuportifolioShot,
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#E76F51", // Cor temática do Astro
        Status: "development",
        Link: "", // Link será adicionado ao final
        Source: "https://github.com/MigueI-Codestorm/Food-Delivery", // Seu repositório principal
        Tech: [
            TechInfo.Astro, TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS
        ],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Otimização Extrema",
                description: "Utiliza as técnicas de ilhas do Astro para carregamento ultra-rápido de componentes estáticos e dinâmicos."
            },
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Casa das Camisetas Oficial",
        ShortDesc:
            "Desenvolvida do zero uma loja virtual e-commerce completa, oferecendo uma experiência de compra otimizada e um catálogo diversificado de produtos de vestuário.",
        Desc: "E-commerce robusto para a Casa das Camisetas, focado em vendas de moda e vestuário. O projeto incluiu customizações de layout, integração de pagamentos e otimização do funil de vendas para maximizar a conversão de clientes.",
        Logo: NextmartLogo, // Placeholder (pode ser o logo da loja se estiver em assets/Logos)
        Shot: casacamisetasShot,
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#66CC66", // Verde E-commerce
        Status: "completed",
        Link: "https://casadascamisetasoficial.com.br/",
        Source: "", // Adicione o link do GitHub se for open-source
        Tech: [
            TechInfo.E_Commerce, TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript
        ],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Gestão de Catálogo",
                description: "Sistema de gerenciamento de produtos com variações de tamanho, cor e estoque."
            },
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "MIRAGE SCRIPT", // Nome do projeto
        ShortDesc:
            "Website institucional da minha empresa, focado em branding e apresentação de serviços. Design clean, responsivo, moderno e com animações de alta qualidade.",
        Desc: "O site MIRAGE SCRIPT foi construído para ser a principal porta de entrada digital da empresa. Foco na clareza da comunicação dos serviços oferecidos, na criação de uma identidade visual profissional e moderna, e na utilização de animações fluidas (via GSAP) para garantir uma experiência de usuário premium e impecável em qualquer dispositivo.",
        Logo: ReactIcon, // Usando ReactIcon como Logo (placeholder)
        Shot: sitemirageShot,
        Mockup: ARMSv3Mockup, // Placeholder
        Theme: "#61DAFB", // Cor temática do React
        Status: "completed",
        Link: "https://site-mirage-beryl.vercel.app/",
        Source: "", // Adicione o link do GitHub se for open-source
        Tech: [
            TechInfo.React, 
            TechInfo.TypeScript, 
            TechInfo.TailwindCSS, 
            TechInfo.GSAP // CORRIGIDO: Substituição do ícone duplicado de React por GSAP
        ],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Animações Fluidas com GSAP",
                description: "Utilização da biblioteca GSAP para criar transições e efeitos visuais suaves e otimizados, elevando a qualidade da experiência do usuário."
            },
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
]
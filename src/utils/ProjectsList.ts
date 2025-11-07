import { type ImageMetadata } from "astro";

// --- Importações de Ícones de Tecnologia ---
import {
    HtmlIcon,
    CssIcon,
    JsIcon,
    ReactIcon,
    TsIcon,
    AstroIcon,
    TailwindIcon,
} from "../assets/Icons";

// --- Importações de Logos ---
import GsapLogo from "../assets/Logos/GsapLogo.png";

// --- Imagens dos Projetos ---
import casacamisetasShot from "../assets/projetos/casacamisetas.png";
import meuportifolioShot from "../assets/projetos/meuportifolio.png";
import sitemirageShot from "../assets/projetos/sitemirage.png";

// --- Mockup (placeholder) ---
import { ARMSv3Mockup } from "../assets/Mockup";

// --- Tipagem dos Projetos ---
type ProjectsListType = {
    Name: string;
    ShortDesc: string;
    Desc: string;
    Logo: ImageMetadata;
    Shot: ImageMetadata;
    Mockup: ImageMetadata;
    Theme: string;
    Status: "completed" | "development";
    Link: string;
    Source: string;
    Demo?: {
        email: string;
        password: string;
    };
    Tech: {
        title: string;
        description: string;
        icon: ImageMetadata;
    }[];
    features: {
        title: string;
        description: string;
    }[];
    hideProject: boolean;
    LogoSize: number;
    versions: {
        title: string;
        version: string;
    }[];
}[];

// --- TechInfo (adicionando GSAP) ---
const TechInfo = {
    HTML: {
        title: "HTML",
        description: "Linguagem de marcação para estruturar o conteúdo da web.",
        icon: HtmlIcon,
    },
    CSS: {
        title: "CSS",
        description:
            "Linguagem de estilo para definir o layout e a aparência de páginas web.",
        icon: CssIcon,
    },
    JavaScript: {
        title: "JavaScript",
        description:
            "Linguagem de programação responsável por interatividade e dinamicidade na web.",
        icon: JsIcon,
    },
    React: {
        title: "React",
        description:
            "Biblioteca JavaScript para criar interfaces de usuário com componentes reutilizáveis.",
        icon: ReactIcon,
    },
    TypeScript: {
        title: "TypeScript",
        description:
            "Superset do JavaScript que adiciona tipagem estática e recursos avançados.",
        icon: TsIcon,
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description:
            "Framework CSS utilitário para criar designs modernos e responsivos rapidamente.",
        icon: TailwindIcon,
    },
    Astro: {
        title: "Astro",
        description:
            "Framework moderno para construção de sites rápidos e otimizados.",
        icon: AstroIcon,
    },
    GSAP: {
        title: "GSAP",
        description:
            "Biblioteca JavaScript poderosa para animações de alta performance.",
        icon: GsapLogo,
    },
    E_Commerce: {
        title: "Plataforma E-commerce",
        description:
            "Sistema completo para gestão de vendas, estoque e catálogo online.",
        icon: TsIcon, // placeholder
    },
    Branding: {
        title: "Design & Branding",
        description:
            "Foco em identidade visual, experiência do usuário e presença institucional.",
        icon: ReactIcon, // placeholder
    },
};

// --- Features Comuns ---
const FeatureList = {
    Responsive: {
        title: "Design Responsivo",
        description:
            "Experiência otimizada em qualquer dispositivo, com layout fluido e adaptável.",
    },
    SEO: {
        title: "Otimização SEO",
        description:
            "Melhores práticas de SEO aplicadas para visibilidade máxima em mecanismos de busca.",
    },
};

// --- Lista de Projetos ---
export const ProjectsList: ProjectsListType = [
    {
        Name: "Meu Portfólio Pessoal",
        ShortDesc:
            "Plataforma para apresentar meus trabalhos, habilidades e experiências, com foco em performance e modernidade.",
        Desc: "Este portfólio serve como uma vitrine digital das minhas competências em desenvolvimento full-stack. Construído com Astro para garantir desempenho excepcional e integração fluida entre componentes estáticos e dinâmicos.",
        Logo: AstroIcon,
        Shot: meuportifolioShot,
        Mockup: ARMSv3Mockup,
        Theme: "#E76F51",
        Status: "development",
        Link: "",
        Source: "https://github.com/MigueI-Codestorm/Food-Delivery",
        Tech: [
            TechInfo.Astro,
            TechInfo.React,
            TechInfo.TypeScript,
            TechInfo.TailwindCSS,
        ],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Otimização Extrema",
                description:
                    "Utiliza as técnicas de ilhas do Astro para carregamento ultrarrápido e eficiente.",
            },
        ],
        hideProject: false,
        LogoSize: 50,
        versions: [],
    },
    {
        Name: "Casa das Camisetas Oficial",
        ShortDesc:
            "Loja virtual completa, oferecendo experiência otimizada de compra e catálogo diversificado de vestuário.",
        Desc: "E-commerce desenvolvido para a Casa das Camisetas, com sistema de pagamento integrado, controle de estoque e design voltado à conversão de vendas.",
        Logo: TsIcon, // Placeholder, você pode substituir por um logo real (NextmartLogo foi removido das importações)
        Shot: casacamisetasShot,
        Mockup: ARMSv3Mockup,
        Theme: "#66CC66",
        Status: "completed",
        Link: "https://casadascamisetasoficial.com.br/",
        Source: "",
        Tech: [
            TechInfo.E_Commerce,
            TechInfo.HTML,
            TechInfo.CSS,
            TechInfo.JavaScript,
        ],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Gestão de Catálogo",
                description:
                    "Gerenciamento completo de produtos com variações de tamanho, cor e estoque.",
            },
        ],
        hideProject: false,
        LogoSize: 50,
        versions: [],
    },
    {
        Name: "MIRAGE SCRIPT",
        ShortDesc:
            "Website institucional da empresa, com design clean, responsivo e animações fluidas via GSAP.",
        Desc: "O site MIRAGE SCRIPT representa a identidade digital da empresa, unindo clareza visual, design profissional e animações suaves com GSAP para uma experiência premium.",
        Logo: ReactIcon,
        Shot: sitemirageShot,
        Mockup: ARMSv3Mockup,
        Theme: "#61DAFB",
        Status: "completed",
        Link: "https://site-mirage-beryl.vercel.app/",
        Source: "",
        Tech: [
            TechInfo.React,
            TechInfo.TypeScript,
            TechInfo.TailwindCSS,
            TechInfo.GSAP,
        ],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Animações Fluidas com GSAP",
                description:
                    "Animações suaves e otimizadas usando GSAP para melhorar a experiência do usuário.",
            },
        ],
        hideProject: false,
        LogoSize: 55,
        versions: [],
    },
];
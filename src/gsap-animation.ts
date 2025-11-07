// --- Conteúdo para: src/gsap-animation.ts ---

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// A função que corre a nossa animação
function runGsapAnimations() {
    // --- 1. CONFIGURAÇÃO INICIAL ---
    const avatar = document.querySelector("#hero-avatar-widget");
    const targetAbout = document.querySelector("#avatar-target-about");
    const targetSkills = document.querySelector("#avatar-target-skills");

    // --- DIAGNÓSTICO (Verifique o seu Console F12) ---
    console.log("GSAP: A procurar elementos...");
    console.log("Avatar:", avatar);
    console.log("Alvo Sobre:", targetAbout);
    console.log("Alvo Habilidades:", targetSkills);

    // Se não encontrar os elementos, para aqui.
    if (!avatar || !targetAbout || !targetSkills) {
        console.error(
            "GSAP ERRO: Não foi possível encontrar um dos elementos. A animação vai parar.",
        );
        return;
    }
    console.log("GSAP: Elementos encontrados! A criar animação.");

    // Só executa a animação em ecrãs grandes (onde os alvos existem)
    // Nota: O aviso ts(6387) sobre matchMedia depreciado é aceitável aqui, 
    // mas a sintaxe ScrollTrigger.matchMedia({..}) ainda funciona no momento.
    // A correção ideal seria usar gsap.matchMedia({...}).
    ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
            console.log("GSAP: A correr em modo desktop.");

            // --- 2. PINNING (PRENDER O AVATAR) ---
            ScrollTrigger.create({
                trigger: "#Hero",
                start: "bottom bottom",
                endTrigger: "#skills",
                end: "center center",
                pin: avatar,
                pinSpacing: false,
                markers: true, // Marcadores de Debug
            });

            // --- 3. TIMELINE DE ANIMAÇÃO (O CAMINHO) ---
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    markers: true, // Marcadores de Debug
                },
            });

            // Helper function para calcular a posição X e Y
            const getTargetCoords = (target: Element) => {
                const targetRect = target.getBoundingClientRect();
                // A linha abaixo foi removida, pois 'avatarRect' não era usada (ts(6133))
                // const avatarRect = avatar.getBoundingClientRect(); 
                
                // --- CORREÇÃO CRÍTICA PARA 'spacerLookup' (ts(2339)) ---
                // O ScrollTrigger cria um 'pin-spacer' que envolve o elemento fixado (pinned element). 
                // A maneira mais limpa de obter o elemento a partir do qual calcular o offset 
                // é verificar o parent do avatar, que deve ser o spacer.
                // Usaremos um cast simples para garantir que o elemento pai existe.
                
                // O código original (que causava erro) era:
                // const spacer = (ScrollTrigger as any).spacerLookup[avatar as Element]?.element || avatar;
                // Vamos usar a verificação do elemento pai, que é a abordagem mais segura:
                
                let startElement: Element = avatar;
                // Se o avatar foi fixado, seu pai é o spacer. Usamos o spacer para calcular o offset inicial.
                if (avatar.parentElement && avatar.parentElement.classList.contains('pin-spacer')) {
                    startElement = avatar.parentElement;
                }
                
                const startRect = startElement.getBoundingClientRect();

                const x = targetRect.left - startRect.left;
                const y = targetRect.top - startRect.top;

                return { x, y };
            };


            // ANIMAÇÃO 1: Ficar parado no Hero
            tl.to(avatar, { duration: 0.2, ease: "none" });

            // ANIMAÇÃO 2: Mover do Hero para a secção "Sobre"
            tl.to(
                avatar,
                {
                    duration: 0.3,
                    x: () => getTargetCoords(targetAbout).x,
                    y: () => getTargetCoords(targetAbout).y,
                    scale: 0.45,
                    ease: "power1.inOut",
                },
                ">",
            );

            // ANIMAÇÃO 3: Mover da secção "Sobre" para a secção "Habilidades"
            tl.to(
                avatar,
                {
                    duration: 0.3,
                    x: () => getTargetCoords(targetSkills).x,
                    y: () => getTargetCoords(targetSkills).y,
                    scale: 0.5,
                    ease: "power1.inOut",
                },
                ">",
            );

            // ANIMAÇÃO 4: Ficar parado no resto da página
            tl.to(avatar, { duration: 0.2, ease: "none" });
        },
    }); // Fim do matchMedia
}

// Espera a página carregar (importante para o Astro)
document.addEventListener("astro:page-load", () => {
    // Corre a animação
    runGsapAnimations();
});
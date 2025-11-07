import { useState, useRef } from 'preact/hooks'
import emailjs from "@emailjs/browser"

type StatusType = {
    status: boolean,
    message: string
}

const ContactForm = () => {
    // Status do e-mail: { status: sucesso/falha, message: mensagem }
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" })
    // Estado de carregamento (Enviando...)
    const [isLoading, setisLoading] = useState<boolean>(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const MessageRef = useRef<HTMLTextAreaElement>(null)

    const HandleFormSubmit = async (e: SubmitEvent) => {
        e.preventDefault();

        if (!NameRef.current || !EmailRef.current || !MessageRef.current) return

        const name = NameRef?.current?.value as string;
        const email = EmailRef?.current?.value as string;
        const message = MessageRef?.current?.value as string;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        }

        try {
            // Validação de E-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                throw new Error('🙄 E-mail inválido!')
            }

            setisLoading(true)
            const mailRes = await emailjs.send(
                import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
                import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
            );

            if (mailRes.status !== 200) {
                throw new Error("😵 Mensagem não enviada")
            }

            setMailStatus({ status: true, message: "👍 Mensagem enviada com sucesso!" })
            setisLoading(false)

            // Limpa os campos após o envio
            NameRef.current.value = ""
            EmailRef.current.value = ""
            MessageRef.current.value = ""
        } catch (error: { message: string } | any) {
            setMailStatus({ status: false, message: error.message })
        } finally {
            // Limpa a mensagem de status após 3 segundos
            setTimeout(() => {
                setMailStatus({ status: false, message: "" })
            }, 3000);
        }
    }

    return (
        <form onSubmit={HandleFormSubmit} className="Fade_Up bg-LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-1 outline-white/20 flex_center flex-col">
            <label
                htmlFor="name"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Nome
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Insira seu Nome"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='name'
                    required
                    ref={NameRef} />
            </label>
            <label
                htmlFor="email"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                E-mail
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="exemplo@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete='email'
                    required
                    ref={EmailRef} />
            </label>
            <label
                htmlFor="message"
                className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2"
            >
                Mensagem
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Insira sua Mensagem"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    required
                    ref={MessageRef} />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-1 outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md"
                    type="submit"
                    disabled={isLoading}
                >
                    {
                        isLoading ? (
                            <>
                                <span>Enviando</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                            </>
                        ) : (
                            <>
                                <span>Enviar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                            </>
                        )
                    }
                </button>
                <span>{mailStatus.message}</span>
            </div>
        </form>
    )
}

export default ContactForm
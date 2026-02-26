import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  UserCheck, 
  ArrowRight,
  X,
  Calendar,
  Search,
  Check
} from 'lucide-react';
import { EXPERT_DATA, IMAGES } from './constants';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-16 pt-32 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-6">
              {EXPERT_DATA.city}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] mb-6">
              Eu sou <span className="text-gold italic">{EXPERT_DATA.name}</span>, especialista em sorrisos naturais.
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              Transformo vidas através de Lentes de Porcelana e Facetas, unindo tecnologia de ponta e arte para um resultado invisível aos olhos, mas marcante no sorriso.
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href={EXPERT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient hover:scale-[1.02] active:scale-95 transition-all duration-300 px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-black font-bold text-lg shadow-2xl shadow-gold/20"
              >
                <MessageCircle className="w-6 h-6" />
                Agendar primeira consulta gratuita
              </a>
              <p className="text-center text-white/40 text-sm font-medium">
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src={IMAGES.expert} 
                alt="Dr Alex Martins em atendimento" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl hidden md:block">
              <p className="text-gold font-serif text-2xl italic">"Excelência em cada detalhe"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-8">O compromisso com a sua <span className="text-gold">autoestima</span></h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Acredito que um sorriso perfeito não é aquele que parece artificial, mas sim aquele que harmoniza com a sua face e personalidade.
              </p>
              <p>
                Em Manaus, dedico minha carreira a aperfeiçoar técnicas que preservam a estrutura natural dos dentes, entregando resultados que devolvem a confiança de sorrir sem medos.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Atendimento 100% personalizado e humano",
                  "Tecnologia digital para planejamento estético",
                  "Foco em naturalidade e durabilidade",
                  "Ambiente exclusivo e acolhedor"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Resultados <span className="text-gold">Reais</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Confira algumas das transformações realizadas. Cada sorriso é único e planejado individualmente.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.results.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(img)}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
              >
                <img 
                  src={img} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Search className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs mt-8 italic">
            * Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 px-6 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">Por que confiar no meu <span className="text-gold">trabalho?</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8 text-gold" />,
                title: "Avaliação Honestíssima",
                desc: "Não indico procedimentos desnecessários. Meu foco é a saúde e a estética funcional."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-gold" />,
                title: "Foco no Natural",
                desc: "O objetivo é que ninguém perceba que você usa facetas, apenas que seu sorriso está incrível."
              },
              {
                icon: <UserCheck className="w-8 h-8 text-gold" />,
                title: "Atendimento Direto",
                desc: "Você fala diretamente comigo. Sem intermediários no seu planejamento estético."
              },
              {
                icon: <Calendar className="w-8 h-8 text-gold" />,
                title: "Pontualidade",
                desc: "Respeito o seu tempo com agendamentos precisos e atendimento sem esperas."
              },
              {
                icon: <Check className="w-8 h-8 text-gold" />,
                title: "Materiais Premium",
                desc: "Utilizo apenas as melhores porcelanas do mercado mundial para garantir durabilidade."
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-gold" />,
                title: "Suporte Pós-Procedimento",
                desc: "Acompanhamento próximo para garantir que sua adaptação seja perfeita."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-white/60 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-[2rem] border-gold/20">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Sua transformação começa com uma conversa.</h2>
          <p className="text-white/70 mb-10 text-lg">
            A primeira consulta é totalmente gratuita e sem compromisso. Vamos analisar seu caso e planejar o sorriso dos seus sonhos.
          </p>
          <a 
            href={EXPERT_DATA.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-black font-bold text-lg hover:scale-105 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            Quero minha avaliação gratuita
          </a>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">Como funciona o <span className="text-gold">processo?</span></h2>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Contato via WhatsApp",
                desc: "Clique no botão e envie uma mensagem. Minha equipe ou eu mesmo responderemos rapidamente."
              },
              {
                step: "02",
                title: "Agendamento da Avaliação",
                desc: "Escolhemos o melhor horário para você vir ao consultório em Manaus."
              },
              {
                step: "03",
                title: "Consulta e Planejamento",
                desc: "Realizamos a avaliação clínica e digital para mostrar como seu sorriso pode ficar."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >
                <span className="font-serif text-5xl text-gold/20 font-bold leading-none">{item.step}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-6 rounded-2xl bg-gold/5 border border-gold/20 text-center">
            <p className="text-gold font-medium">Lembre-se: A primeira consulta é gratuita e sem compromisso.</p>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -z-10 transform translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Pronto para ter o sorriso que você <span className="text-gold italic">sempre quis?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Não deixe sua autoestima para depois. Agende agora sua consulta gratuita com o Dr. Alex Martins.
            </p>
            
            <a 
              href={EXPERT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient w-full md:w-auto inline-flex items-center justify-center gap-4 px-12 py-6 rounded-2xl text-black font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-gold/30"
            >
              <MessageCircle className="w-8 h-8" />
              AGENDAR NO WHATSAPP
            </a>
            
            <div className="mt-12 flex items-center justify-center gap-8">
              <a 
                href={EXPERT_DATA.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span>@dr.alexmartins</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="font-serif text-2xl text-gold mb-2">{EXPERT_DATA.name}</p>
          <p className="text-white/40 text-sm uppercase tracking-widest mb-6">
            {EXPERT_DATA.profession} • {EXPERT_DATA.city}
          </p>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado ampliado" 
              className="max-w-full max-h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

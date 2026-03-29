import logo from "@/assets/logo.png";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-auto opacity-70" />
            <span className="font-display text-sm tracking-widest text-muted-foreground uppercase">
              MG Honrados do Asfalto
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://instagram.com/mghdarn" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            {/*
            <a href="https://facebook.com/mghdarn" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
             */}
          </div>

          <p className="font-body text-xs text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} MG Honrados do Asfalto. Todos os direitos reservados.
            <br />
            Desenvolvido por <span className="text-foreground">m3uzin</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

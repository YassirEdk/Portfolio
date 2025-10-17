import { Mail, Phone, MapPin, Linkedin, Github, Award, Code, Database, Server, Briefcase, GraduationCap, Star, Download } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 xs:px-6">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
        <div className="max-w-7xl w-full mx-auto px-2 sm:px-6 py-6 sm:py-12 md:py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Yassir Eddakhouche"
                className="w-24 xs:w-28 sm:w-36 md:w-48 h-24 xs:h-28 sm:h-36 md:h-48 rounded-full object-cover border-4 border-primary shadow-[var(--shadow-xl)]"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold mb-1 xs:mb-2 sm:mb-3 text-foreground break-words">
                EDDAKHOUCHE Yassir
              </h1>
              <div className="font-mono mb-2 sm:mb-5 text-primary font-bold flex items-center justify-center md:justify-start overflow-x-auto">
                <span className="text-accent font-bold mr-1">{'>'}</span>
                <span
                  className="terminal-text whitespace-nowrap text-[clamp(0.55rem,4vw,1.5rem)]"
                  style={{ display: 'inline-block' }}
                >
                  Ingénieur d'État en Informatique & Réseau
                </span>
              </div>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground mb-3 xs:mb-4 sm:mb-6 md:mb-8 max-w-full md:max-w-xl mx-auto md:mx-0 break-words">
                Spécialisé en développement full-stack et architecture réseau avec une expertise en Spring Boot, React, et solutions NAC
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center md:justify-start">
                {/** Email */}
                <a
                  href="mailto:yassireddakhouche@gmail.com"
                  className="flex items-center gap-1.5 sm:gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-[var(--shadow-medium)] text-xs xs:text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Email</span>
                </a>
                {/** Phone */}
                <a
                  href="tel:+212682546896"
                  className="flex items-center gap-1.5 sm:gap-2 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg hover:bg-secondary/90 transition-all shadow-[var(--shadow-medium)] text-xs xs:text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden sm:inline">+212 682-546896</span>
                  <span className="sm:hidden">Tél</span>
                </a>
                {/** LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yassir-eddakhouche-b11650239/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 bg-accent text-accent-foreground px-3 py-2 rounded-lg hover:bg-accent/90 transition-all shadow-[var(--shadow-medium)] text-xs xs:text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>LinkedIn</span>
                </a>
                {/** GitHub */}
                <a
                  href="https://github.com/YassirEdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 sm:gap-2 bg-secondary text-secondary-foreground px-3 py-2 rounded-lg hover:bg-secondary/90 transition-all shadow-[var(--shadow-medium)] text-xs xs:text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>GitHub</span>
                </a>
                {/** Download CV */}
                <a
                  href="/CV_EDDAKHOUCHE_Yassir.pdf"
                  download
                  className="flex items-center gap-1.5 sm:gap-2 bg-accent text-accent-foreground px-3 py-2 rounded-lg hover:bg-accent/90 transition-all shadow-[var(--shadow-medium)] text-xs xs:text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span className="hidden sm:inline">Télécharger CV</span>
                  <span className="sm:hidden">CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-12 sm:py-16">
        <div className="absolute inset-0 bg-background/85 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-card p-5 sm:p-6 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <MapPin className="text-accent" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Localisation</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground break-words">Casablanca, Maroc</p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all border border-border">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <GraduationCap className="text-accent" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Formation</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground break-words">EMSI - Cycle d'ingénieur MIAGE (2025)</p>
            </div>
            <div className="bg-card p-5 sm:p-6 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all border border-border sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Star className="text-accent" size={20} />
                <h3 className="text-lg sm:text-xl font-semibold text-card-foreground">Langues</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground break-words">Arabe, Français, Anglais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-12 sm:py-16">
        <div className="absolute inset-0 bg-background/85 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 flex items-center gap-3">
            <Code className="text-accent" size={28} />
            Projets Académiques
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Gestion Restaurant */}
            <div className="bg-card p-5 sm:p-6 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-xl)] transition-all border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">Gestion Restaurant</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Solution complète pour gérer les stocks, ventes et clients d'un restaurant, automatisant les processus pour optimiser la gestion.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">SpringBoot</span>
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">React</span>
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* School Management */}
            <div className="bg-card p-5 sm:p-6 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-xl)] transition-all border border-border">
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">School Management</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Application permettant à une école de gérer, stocker, afficher et filtrer les informations des professeurs et des étudiants.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">SpringBoot</span>
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">React</span>
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">PostgreSQL</span>
              </div>
            </div>

            {/* Little Lemon */}
            <div className="bg-card p-5 sm:p-6 rounded-xl shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-xl)] transition-all border border-border sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">Little Lemon Food Order App</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Application web mobile pour la commande de nourriture avec interface utilisateur moderne et intuitive.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">React Native</span>
                <span className="bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-12 sm:py-16">
        <div className="absolute inset-0 bg-card/30 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12">Compétences Techniques</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Programming */}
            <div className="p-5 sm:p-6 border-2 border-border rounded-xl hover:border-accent transition-all bg-card">
              <Code className="text-accent mb-3" size={28} />
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3">Langages</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-muted-foreground">Java</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">Python</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">C/C++</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">JavaScript</span>
              </div>
            </div>

            {/* Frameworks */}
            <div className="p-5 sm:p-6 border-2 border-border rounded-xl hover:border-accent transition-all bg-card">
              <Server className="text-accent mb-3" size={28} />
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-muted-foreground">Spring Boot</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">React</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">Angular</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">Django</span>
              </div>
            </div>

            {/* Database */}
            <div className="p-5 sm:p-6 border-2 border-border rounded-xl hover:border-accent transition-all bg-card">
              <Database className="text-accent mb-3" size={28} />
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3">Bases de Données</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-muted-foreground">PostgreSQL</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">SQL Server</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">Oracle</span>
              </div>
            </div>

            {/* Tools */}
            <div className="p-5 sm:p-6 border-2 border-border rounded-xl hover:border-accent transition-all bg-card sm:col-span-2 lg:col-span-1">
              <Award className="text-accent mb-3" size={28} />
              <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3">Outils & Méthodologies</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-muted-foreground">Linux</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">Windows Server</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">UML</span>
                <span className="text-border">•</span>
                <span className="text-muted-foreground">Merise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="relative py-12 sm:py-16">
        <div className="absolute inset-0 bg-background/85 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 flex items-center gap-3">
            <Award className="text-accent" size={28} />
            Certifications
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href="https://coursera.org/share/1bcf6e81d760f670609b6637312ccd35"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 sm:p-5 rounded-lg shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all flex items-start gap-3 border border-border hover:border-accent cursor-pointer"
            >
              <Award className="text-accent flex-shrink-0 mt-1" size={18} />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-card-foreground">Building Scalable Java Microservices</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Google Cloud Training</p>
              </div>
            </a>

            <a
              href="https://coursera.org/share/0f5997c356a5d1578575cad757c3cf26"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 sm:p-5 rounded-lg shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all flex items-start gap-3 border border-border hover:border-accent cursor-pointer"
            >
              <Award className="text-accent flex-shrink-0 mt-1" size={18} />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-card-foreground">Meta React Native</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Meta</p>
              </div>
            </a>

            <a
              href="https://coursera.org/share/87aa69cf732807a114f97a6bc71f45c9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 sm:p-5 rounded-lg shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all flex items-start gap-3 border border-border hover:border-accent cursor-pointer"
            >
              <Award className="text-accent flex-shrink-0 mt-1" size={18} />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-card-foreground">Advanced React</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Meta</p>
              </div>
            </a>

            <a
              href="https://www.cloudskillsboost.google/public_profiles/8c1aa17f-c11f-43fb-a087-5a5e58b4ac88"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-4 sm:p-5 rounded-lg shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-all flex items-start gap-3 border border-border hover:border-accent cursor-pointer"
            >
              <Award className="text-accent flex-shrink-0 mt-1" size={18} />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-card-foreground">Google Cloud Skills</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Google Cloud</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 sm:py-12">
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-md"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <a
              href="mailto:yassireddakhouche@gmail.com"
              className="hover:text-accent transition-colors text-primary-foreground"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yassir-eddakhouche-b11650239/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-primary-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/YassirEdk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors text-primary-foreground"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-primary-foreground/90">
            © 2025 EDDAKHOUCHE Yassir. Tous droits réservés.
          </p>
          <p className="text-xs sm:text-sm text-primary-foreground/90">
            Ce site est programmé avec React 18
          </p>
        </div>
       </footer>
    </div>
  );
};

export default Index;

import { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink, Code, Cpu, Zap, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section-fade');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Quantum Resistance Online Voting System",
      description: "A quantum-resistant Based online voting system  [QR_BVS]is a cryptographically secure electronic voting platform that leverages post-quantum algorithms.",
      tech: ["Python", "Post-Quantum Cryptography", "lattice-based schemes", "Web App"],
      status: "Completed"
    },
 /*{
      title: "Digital Signal Processing Lab", 
      description: "Implementation of various DSP algorithms including FFT, filters, and signal analysis using MATLAB and embedded systems.",
      tech: ["MATLAB", "DSP", "Signal Processing", "Embedded C"],
      status: "In Progress"
    },
    {
      title: "RFID-Based Attendance System",
      description: "Automated attendance tracking system using RFID technology with real-time database management.",
      tech: ["RFID", "Arduino", "Database", "C++"],
      status: "Completed"
    } */
  ];

  const skills = [
    { name: "Embedded Systems to Beginner", level: 70, icon: Cpu },
    { name: "C/C++", level: 85, icon: Code },
    { name: "Java", level: 85, icon: Code },
    { name: "Python", level: 80, icon: Code },
    { name: "Html/Css", level: 75, icon: Code },
    { name: "Arduino/ESP32", level: "progresseing", icon: Code },
    { name: "Circuit Design", level: "progresseing", icon: Zap },
    { name: "MATLAB", level: "progressing", icon: Code },
    { name: "Digital Signal Processing", level: "progressing", icon: Zap }
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">
              Anandha Krishnan P
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-electric-blue transition-all duration-300 font-medium hover:scale-105"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white icon-hover"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 glass-card p-4">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-white hover:text-electric-blue transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto section-fade">
          <div className="glass-card p-8 sm:p-12 relative">
            {/* Profile Photo with Glowing Background */}
            <div className="relative mb-8 flex justify-center">
              <div className="profile-glow-container">
                <div className="profile-photo-wrapper">
                  <img
                    src="/lovable-uploads/3d8000f0-cf9f-4f9e-b3bb-57d2f7490590.png"
                    alt="Anandha Krishnan P"
                    className="profile-photo"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 relative z-10">
              Hi, I'm{' '}
              <span className="gradient-text text-glow animate-float">
                Anandha Krishnan P
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed relative z-10">
              2nd Year Electronics & Communication Engineering Student
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
              Passionate about electronics, embedded systems, and future technologies. 
              Building innovative solutions that bridge the gap between hardware and software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button
                onClick={() => scrollToSection('projects')}
                className="glass-button animate-glow"
              >
                View My Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="glass-button border-electric-blue text-electric-blue hover:bg-electric-blue/20"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-white cursor-pointer hover:text-electric-blue transition-colors icon-hover"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto section-fade">
          <div className="glass-card p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center relative z-10">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  I'm a dedicated Electronics & Communication Engineering student from Tamil Nadu, 
                  currently in my 2nd year. My passion lies in the fascinating world of electronics, 
                  embedded systems, and emerging technologies.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  I believe in learning by doing, which is why I actively work on projects that 
                  challenge me to apply theoretical knowledge to real-world problems. From IoT 
                  solutions to digital signal processing, I'm always eager to explore new frontiers 
                  in technology.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="glass-card p-3 text-sm text-electric-blue font-medium">
                    📍 Tamil Nadu, India
                  </div>
                  <div className="glass-card p-3 text-sm text-electric-teal font-medium">
                    🎓 ECE 2nd Year
                  </div>
                </div>
              </div>
              <div className="glass-card p-6 shimmer-effect relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">Interests & Focus Areas</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-3">
                    <Cpu className="text-electric-blue icon-hover" size={20} />
                    Embedded Systems Development
                  </li>
                  <li className="flex items-center gap-3">
                    <Zap className="text-electric-teal icon-hover" size={20} />
                    IoT & Smart Systems
                  </li>
                  <li className="flex items-center gap-3">
                    <Code className="text-electric-purple icon-hover" size={20} />
                    Digital Signal Processing
                  </li>
                  <li className="flex items-center gap-3">
                    <Cpu className="text-electric-blue icon-hover" size={20} />
                    Circuit Design & Analysis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto section-fade">
          <div className="glass-card p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center relative z-10">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-card p-6">
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <skill.icon className="text-electric-blue icon-hover" size={24} />
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                    <div
                      className="bg-gradient-to-r from-electric-blue to-electric-teal h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-300">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto section-fade">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card p-6 group">
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="text-gray-400 group-hover:text-electric-teal transition-colors icon-hover" size={20} />
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-glass-medium rounded-full text-sm text-electric-blue border border-electric-blue/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center relative z-10">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto section-fade">
          <div className="glass-card p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center relative z-10">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-200 text-center mb-12 relative z-10">
              Let's connect and discuss opportunities in electronics and embedded systems!
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <a href="mailto:mysteryak27@gmail.com" className="contact-card p-6 text-center group">
                <Mail className="mx-auto mb-4 text-electric-blue icon-hover" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2 relative z-10">Email</h3>
                <p className="text-gray-300 relative z-10">mysteryak27@gmail.com</p>
              </a>
              
              <a href="https://github.com/anandmsak" target="_blank" rel="noopener noreferrer" className="contact-card p-6 text-center group">
                <Github className="mx-auto mb-4 text-electric-teal icon-hover" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2 relative z-10">GitHub</h3>
                <p className="text-gray-300 relative z-10">@anandhmsak</p>
              </a>
              
              <a href="https://www.linkedin.com/in/anandha-krishnan-perumal-msak27s" target="_blank" rel="noopener noreferrer" className="contact-card p-6 text-center group">
                <Linkedin className="mx-auto mb-4 text-electric-purple icon-hover" size={32} />
                <h3 className="text-lg font-semibold text-white mb-2 relative z-10">LinkedIn</h3>
                <p className="text-gray-300 relative z-10">Anandha Krishnan</p>
              </a>
            </div>

            <div className="text-center">
              <a href="mailto:mysteryak27@gmail.com">
                <Button className="glass-button animate-glow relative z-10 w-full sm:w-auto px-8 py-4 text-base sm:text-lg">
                  <Mail className="mr-2 icon-hover" size={20} />
                  Send Message
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-6 text-center">
            <p className="text-gray-300 relative z-10">
              © 2025 Anandha Krishnan P. Built with passion for electronics and embedded systems.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';

interface Project {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}

interface UserProfile {
  name: string;
  bio: string;
  avatar_url: string;
}

const QUOTES = [
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast.",
  "The only way to learn a new programming language is by writing programs in it.",
  "Stay hungry, stay foolish.",
  "Talk is cheap. Show me the code.",
];

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/mrayushsingh08-dot');
        const userData = await userRes.json();
        setUser(userData);

        const reposRes = await fetch('https://api.github.com/users/mrayushsingh08-dot/repos?sort=updated');
        const reposData = await reposRes.json();
        setProjects(reposData.slice(0, 12));
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    fetchData();
  }, []);

  const links = [
    { label: 'Main Portfolio', url: 'https://mrayushsingh.in', icon: '🌐', color: 'from-indigo-500 to-blue-600' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ayush-singh-7796572a1/', icon: '🔗', color: 'from-blue-600 to-cyan-500' },
    { label: 'Instagram', url: 'https://www.instagram.com/mrayushsingh_08/', icon: '📸', color: 'from-purple-600 to-pink-500' },
    {
      label: 'Email Me',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mrayushsingh08@gmail.com',
      icon: '✉️',
      color: 'from-red-500 to-orange-600'
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0A0B] text-white">
        <p className="text-xl animate-pulse font-light tracking-widest">INITIALIZING HUB...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 p-4 md:p-8 overflow-x-hidden ${
      theme === 'dark'
      ? 'bg-gradient-to-br from-[#0A0A0B] via-[#141416] to-[#1C1C1E] text-white'
      : 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full shadow-lg hover:ring-4 transition-all transform active:scale-90 ${
              theme === 'dark'
              ? 'bg-[#141416] text-white ring-indigo-500'
              : 'bg-white text-slate-900 ring-indigo-300'
            }`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <header className="text-center mb-12 md:mb-16">
          <div className="relative inline-block">
            <img
              src={user?.avatar_url}
              alt={user?.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl transform hover:rotate-6 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-1.5 md:p-2 rounded-full text-[10px] md:text-xs font-bold shadow-lg">
              Dev
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            {user?.name}
          </h1>
          <p className="text-slate-400 dark:text-slate-300 max-w-lg mx-auto text-base md:text-lg italic font-light px-4">
            "{user?.bio || 'Software Developer & Creator'}"
          </p>
        </header>

        <section className="mb-12 md:mb-16 text-center">
          <div className={`p-6 md:p-8 rounded-3xl border shadow-2xl backdrop-blur-xl transition-all duration-500 ${
            theme === 'dark'
            ? 'bg-white/5 border-white/10 text-slate-300'
            : 'bg-white/80 border-slate-200 text-slate-600'
          }`}>
            <p className="text-lg md:text-2xl font-light italic leading-relaxed px-2">
              "{quote}"
            </p>
            <div className="mt-4 text-indigo-500 font-bold tracking-widest uppercase text-[10px] md:text-xs">— Daily Insight</div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-20">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden p-1 rounded-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(79,70,229,0.2)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`relative flex items-center p-4 md:p-6 rounded-2xl transition-all duration-500 group-hover:bg-transparent ${
                theme === 'dark' ? 'bg-[#141416] text-white' : 'bg-white text-slate-900'
              }`}>
                <span className="text-2xl md:text-3xl mr-3 md:mr-4">{link.icon}</span>
                <span className="flex-1 font-bold text-base md:text-xl tracking-tight">{link.label}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 text-lg md:text-2xl">→</span>
              </div>
            </a>
          ))}
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 tracking-tight">Featured Projects</h2>
          <div className="flex overflow-x-auto pb-8 gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-w-[280px] md:min-w-[400px] snap-center p-6 md:p-8 rounded-3xl shadow-xl border transition-all duration-500 hover:shadow-indigo-500/20 hover:-translate-y-2 transform-gpu ${
                  theme === 'dark'
                  ? 'bg-[#141416] border-white/10 hover:border-indigo-500/50'
                  : 'bg-white border-slate-200 hover:border-indigo-400'
                }`}
              >
                <h3 className="font-bold text-xl md:text-2xl mb-3 group-hover:text-indigo-500 transition-colors">{project.name}</h3>
                <p className={`text-sm mb-6 md:mb-8 line-clamp-3 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.description || 'A passionate project exploring modern web technologies.'}
                </p>
                <div className="flex items-center justify-between">
                  <div className={`flex items-center text-xs md:text-sm font-medium ${
                    theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    <span className="mr-1">⭐</span> {project.stargazers_count}
                  </div>
                  <span className="text-indigo-500 font-bold group-hover:translate-x-1 transition-transform text-xs md:text-sm">View Code →</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="text-center mt-16 md:mt-20 pb-10 text-slate-500 text-xs md:text-sm font-light">
          © {new Date().getFullYear()} {user?.name} • Crafted with <span className="text-indigo-500">❤️</span> and React
        </footer>
      </div>
    </div>
  );
};

export default App;

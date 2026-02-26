import {
  Project,
  Education,
  Experience,
  PersonalInfo,
  Language,
} from "./types";
import {
  Code,
  Layout,
  Palette,
  Terminal,
  Box,
  Smartphone,
  Cpu,
  GitBranch,
} from "lucide-react";

export const PERSONAL_INFO: PersonalInfo = {
  name: "Leonardo Brahim Tavares",
  role: "Estagiário de TI | Desenvolvedor Frontend",
  bio: "Desenvolvedor focado no Front-end, com paixão por criar interfaces modernas, intuitivas e responsivas. Também possuo conhecimentos sólidos no Back-end, o que me permite compreender o ciclo completo de desenvolvimento e entregar soluções robustas e integradas.",
  email: "contato.leonardobrahim@gmail.com",
  phone: "+55 81 996201937",
  location: "Pernambuco, Brasil",
  github: "github.com/leonardobrahim",
};

export const TECH_STACK = [
  { name: "HTML5 & CSS3", icon: Layout, color: "bg-orange-300" },
  { name: "JavaScript", icon: Code, color: "bg-yellow-300" },
  { name: "React", icon: Box, color: "bg-cyan-300" },
  { name: "React Native", icon: Smartphone, color: "bg-indigo-300" },
  { name: "Git & Github", icon: GitBranch, color: "bg-red-300" },
  { name: "Python", icon: Terminal, color: "bg-green-300" },
  { name: "C / C++ / C#", icon: Code, color: "bg-blue-300" },
  { name: "Photoshop", icon: Palette, color: "bg-blue-400" },
  { name: "Hardware", icon: Cpu, color: "bg-gray-300" },
];

export const EDUCATION_DATA: Education[] = [
  {
    school: "UNEMAT / UFPE",
    degree: "Graduação em Ciência da Computação",
    period: "2021 – Cursando",
  },
  {
    school: "ETE José Alencar Gomes da Silva",
    degree: "Técnico em Administração",
    period: "2018 - 2020",
  },
  {
    school: "Programa Ganhe o Mundo",
    degree: "Inglês Intermediário 2",
    period: "Ago 2019 – Ago 2020",
  },
  {
    school: "Curso Livre",
    degree: "Design Gráfico | Nível A",
    period: "Fev 2018 – Out 2019",
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "SEPLAG - Secretaria de Planejamento e Gestão de Pernambuco",
    role: "Estagiário de Desenvolvimento Web",
    period: "Maio 2024 - Atualmente",
    description:
      "Atuação como auxiliar de desenvolvimento web front-end. No início do estágio, também atuei com ferramentas de BI como Power BI e QlikView para análise de dados.",
  },
  {
    company: "Projeto de Desenvolvimento da UFPE",
    role: "Desenvolvedor React Native",
    period: "2023 - 2024",
    description:
      "Desenvolvimento de um aplicativo que auxilia no gerenciamento de atividades físicas para crianças usando React Native.",
  },
  {
    company: "Miniempresa EAÍ",
    role: "Diretor de Marketing",
    period: "2019",
    description:
      "Gerenciamento do Marketing da miniempresa, incluindo criação das mídias e gestão das redes sociais.",
  },
];

export const LANGUAGES_DATA: Language[] = [
  { language: "Português", level: "Nativo" },
  { language: "Inglês", level: "Avançado" },
  { language: "Espanhol", level: "Básico" },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Lumina Store E-commerce",
    description:
      "Plataforma completa de vendas online com carrinho, checkout e painel administrativo.\nDesenvolvido com foco na experiência do usuário e conversão.",
    tags: ["React", "Node.js", "Stripe"],
    color: "bg-neo-green",
    size: "large",
    link: "https://lumina-store-mu.vercel.app/#/",
    image: "public/lumina-store.png",
  },
  {
    id: 4,
    title: "Rabisco App - Desenvolvimento Pessoal",
    description:
      "Aplicativo de autoaperfeiçoamento com sistema de missões diárias e rastreamento de hábitos.\n O site possui Whitelist. Email: teste@teste.com Senha: teste123",
    tags: ["React", "Gamificação", "Design Mobile"],
    color: "bg-white",
    size: "large",
    link: "https://rabisco-app.pages.dev/",
    image: "public/rabisco-app.png",
  },
];

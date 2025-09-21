export type EducationEntry = {
  institution: string;
  program?: string;
  years?: string;
  location?: string;
  description?: string;
};

export const educationEntries: EducationEntry[] = [
  {
    institution: "Acıbadem Üniversitesi",
    program: "Bilgisayar Programcılığı",
    years: "2023 - 2025",
  },
  {
    institution: "İstanbul Üniversitesi",
    program: "Yönetim Bilişim Sistemleri",
    years: "2025 - ",
  },
];

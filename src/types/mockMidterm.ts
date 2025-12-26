export interface MockExam {
  subject: string;
  questionFile: string;
  answerFile: string;
}

export interface MockYear {
  year: number;
  exams: MockExam[];
}

export interface IQuiz {
  id: string;
  name: string;
  slug: string;
}

export interface IQuizQuestions {
    id: string;
    name: string;
    slug: string;
    questions: IQuestion[];
}

export interface IQuestion {
    id: string;
    content: string;
    message: string;
    options: IOption[];
}

export interface IAnswer {
    questionId: String,
    answer: IOption,
    correct: IOption,
    is_correct: boolean,
}

interface IOption {
    id: string;
    content: string;
    is_correct: boolean;
}


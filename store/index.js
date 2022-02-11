import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {},
        mutations: {
            setQuizzes(state, quizzes) {
                state.loadedQuizzes = quizzes
            }
        },
        actions: {
            nuxtServerInit(vuexContext) {
                return vuexContext.commit("setQuizzes", [
                            {
                                id: "1",
                                name: "test 1",
                                slug: "test-1",
                                questions: [
                                    {
                                        id: "q1-1",
                                        content: "question 1.1",
                                        message: "message q1.1",
                                        options: [
                                            {
                                                id: "o1-11",
                                                content: "option 1.11",
                                                is_correct: true,
                                            },
                                            {
                                                id: "o1-12",
                                                content: "option 1.12",
                                                is_correct: false,
                                            },
                                            {
                                                id: "o1-13",
                                                content: "option 1.13",
                                                is_correct: false,
                                            },
                                            {
                                                id: "o1-14",
                                                content: "option 1.14",
                                                is_correct: false,
                                            }
                                        ]
                                    },
                                    {
                                        id: "q1-2",
                                        content: "question 1.2",
                                        message: "message q1.2",
                                        options: [
                                            {
                                                id: "o1-21",
                                                content: "option 1.21",
                                                is_correct: true,
                                            },
                                            {
                                                id: "o1-22",
                                                content: "option 1.22",
                                                is_correct: false,
                                            },
                                            {
                                                id: "o1-23",
                                                content: "option 1.23",
                                                is_correct: false,
                                            },
                                            {
                                                id: "o1-24",
                                                content: "option 1.24",
                                                is_correct: false,
                                            }
                                        ]
                                    },
                                    {
                                        id: "q1-3",
                                        content: "question 1.3",
                                        message: "message q1.3",
                                        options: [
                                            {
                                                id: "o1-31",
                                                content: "option 1.31",
                                                is_correct: false,
                                            },
                                            {
                                                id: "o1-32",
                                                content: "option 1.22",
                                                is_correct: false,
                                            },
                                            {
                                                id: "o1-33",
                                                content: "option 1.23",
                                                is_correct: true,
                                            },
                                            {
                                                id: "o1-34",
                                                content: "option 1.24",
                                                is_correct: false,
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "2",
                                name: "test 2",
                                slug: "test-2",
                            },
                            {
                                id: "3",
                                name: "test 3",
                                slug: "test-3",
                            },
                            {
                                id: "4",
                                name: "test 4",
                                slug: "test-4 ",
                            },
                        ]);
            },
            setQuizzes(vuexContext, quizzes) {
                vuexContext.commit('setQuizzes', quizzes)
            },
        },
        getters: {
            loadedQuizzes(state) {
                return state.loadedQuizzes
            }
        }
    })
}

export default createStore
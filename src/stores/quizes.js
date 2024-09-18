import { defineStore } from 'pinia';

export const useQuizStore = defineStore('quizStore', {
    state: () => ({
        name: 'Carlos',
        quizes: [],
        questions: false,
        isLoading: false,
        selectedQuiz: {}
    }),
    getters: {},
    actions: {
        async getQuizes() {
            this.quizes = [];
            this.isLoading = true;
            const res = await fetch(`${import.meta.env.BACKEND_URL}/quizes`);
            const data = await res.json();
            
            if (data) {
                Object.entries(data).forEach(q => {
                    const quiz = {
                        id: q[0],
                        ...q[1]
                    };
                    this.quizes.push(quiz);
                });
            }
            this.isLoading = false;
        },

        /**async addCourse(course) {
        //     const res = await fetch(`${import.meta.env.VITE_API_URL}/courses.json`, {
        //         method: 'POST',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(course)
        //     });
            
        //     if(res.error) console.log(res.error);
        //     this.courses.push(course);
        // },
        // async deleteCourse(id) {
        //     const res = await fetch(`${import.meta.env.VITE_API_URL}/courses/${id}.json`, {
        //         method: 'DELETE'
        //     });
            
        //     if(res.error) console.log(res.error);
        //     this.courses = this.courses.filter(c => c.id !== id);
        // },
        // async toggleFav(id) {
        //     const course = this.courses.find(c => c.id === id);
        //     const res = await fetch(`${import.meta.env.VITE_API_URL}/courses/${id}.json`, {
        //         method: 'PATCH',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify({isFav: !course.isFav})
        //     });
            
        //     if(res.error) console.log(res.error);
        //     course.isFav = !course.isFav;
        } */
    },
});

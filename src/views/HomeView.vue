<template>
  <main class="hellow">
    <div class="card-list" v-if="!isLoading">
      <div
        v-for="quiz in quizes"
        :key="quiz.id"
      >
        <quiz-card :quiz="quiz" />
      </div>
    </div>
  </main>
</template>


<script>
import QuizCard from '../components/QuizCard.vue'
import { useQuizStore } from '../stores/quizes';
import { storeToRefs } from 'pinia';
import { ref, reactive, onMounted } from 'vue';

export default {
  components: {
      QuizCard
  },
  setup() {
    const quizStore = useQuizStore();
    const {
      name,
      quizes,
      questions,
      isLoading,
      selectedQuiz
    } = storeToRefs(quizStore);

    onMounted(() => {
      quizStore.getQuizes();
    })

    return {
      name,
      quizes,
      questions,
      isLoading,
      selectedQuiz
    }
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .hellow {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="task-details">
    <the-header></the-header>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "@/components/shared/TheHeader.vue";
import TheFooter from "@/components/shared/TheFooter.vue";

export default {
  name: "TaskDetails",
  components: {
    TheHeader,
    TheFooter,
  },
  props: {
    taskId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      taskDetails: null,
    };
  },
};
</script>

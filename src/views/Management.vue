<template>
  <div class="management">
    <div class="d-flex flex-row">
      <CreateJob class="p-2" />
      <CreateManager class="p-2" />
      <CreateModel class="p-2" />
      <AddModelToJob class="p-2" />
      <AddExpenseToJob class="p-2" />
      <RemoveModelFromJob class="p-2" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateJob from "@/components/CreateJob.vue";
import CreateManager from "@/components/CreateManager.vue";
import CreateModel from "@/components/CreateModel.vue";
import AddModelToJob from "@/components/AddModelToJob.vue";
import AddExpenseToJob from "@/components/AddExpenseToJob.vue";
import RemoveModelFromJob from "@/components/RemoveModelFromJob.vue";

export default {
  name: "Home",
  components: {
    CreateJob,
    CreateManager,
    CreateModel,
    AddModelToJob,
    AddExpenseToJob,
    RemoveModelFromJob,
  },
};
</script>

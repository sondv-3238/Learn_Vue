<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></user-info>
    <course-goals>
      <template #default="SlotProc">
        <h2>{{SlotProc.item}}</h2>
        <h2>{{SlotProc['test']}}</h2>
      </template>
    </course-goals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import TheHeader from './components/TheHeader.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
export default {
  components: {
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals': CourseGoals,
    'active-goals': ActiveGoals,
    'manage-goals': ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: 'active-component',
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
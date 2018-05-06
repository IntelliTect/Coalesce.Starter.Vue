<template>
  <table>
    <tbody>
      <tr v-for="user in loadApplicationUsers.result" :key="user.applicationUserId">
        <td>
          {{user.applicationUserId}}
        </td>
        <td>
          {{user.name}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ApplicationUserApiClient } from '../api-clients.g';
import { ApiClient } from 'coalesce-vue/lib/api-client';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private loadApplicationUsers = new ApplicationUserApiClient()
    .$makeCaller("list", c => function(this: HelloWorld) { return c.list() })
    .setConcurrency("cancel");
    // Alternatively, if 'this' is not needed in the load function:
    // .$makeCaller("list", c => () => c.list() )
    

  mounted() {
    this.loadApplicationUsers();
  }
}
</script>

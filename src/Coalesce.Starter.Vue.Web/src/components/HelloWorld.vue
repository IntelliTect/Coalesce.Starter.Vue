<template>
  <div class="hello">
    <h1>
      {{ msg }}
    </h1>
    <h2>
      Check out <a href="https://github.com/vuejs/awesome-vue" target="_blank">🎉 awesome-vue</a> for Vue components, libraries, examples, and more!
    </h2>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank">typescript</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank">unit-jest</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org/en/essentials/getting-started.html" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org/en/intro.html" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org/en" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <div>
      <h1>
          Welcome to your new Coalesce application!
      </h1>
      <h3>Here are the next steps to get started with your new Coalesce application:</h3>
      <ol>
          <li>
              Create your data model by adding classes to the Models folder in your data project, and adding DbSet properties on AppDbContext.
          </li>
          <li>
              Create an EF migration by running
              <code>dotnet ef migrations add MigrationName</code>
              in your .Data project. The pages below will not work until you do so.
          </li>
          <li>
              Implement a proper authentication mechanism in Startup.cs and remove the existing dummy authentication. Options include
              <a href="https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity">Identity</a>
              and Windows Authentication (enabled in the Debug tab of the properties of your Web project.)
          </li>
      </ol>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ol {
  text-align: left;
  li {
    padding: 5px;
    max-width: 800px;
    margin: auto;
  }
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
a {
  color: #42b983;
}
</style>

# Coalesce.Starter.Vue
A barebones Coalesce Vue project which can be built upon.

For more information on Coalesce, visit http://coalesce.intellitect.com/

To quickly get up and running with a new [Coalesce Vue](https://github.com/IntelliTect/Coalesce) project:

1. Clone this repository.
1. Run `RenameProject.ps1` to rename the solution files and code namespaces to your desired project name.

At this point, you can open up Visual Studio and run the application. However, you will probably want to do the following before running:

1. Create an initial data model by adding EF entity classes to the data project and the corresponding `DbSet<>` properties to `AppDbContext`. You will notice that this project includes a single model, `ApplicationUser`, to start with.
1. Run `dotnet coalesce` to trigger Coalesce's code generation.
1. Run `dotnet ef migrations add Init` (`Init` can be any name) in the data project to create the initial database migration.

After you've started to grow content with your project, consider the following:

* Remove the dummy authentication from `Startup.cs` and implement a proper authentication scheme.

# Project Configuration
This project is made with [vue-cli](https://github.com/vuejs/vue-cli). Additional plugins for `vue-cli` may be added as desired.

You are **strongly** encouraged to read through at least the first few pages of the [vue-cli docs](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md) before getting started on any development.

Project structure of the Web project is as follows:
* `/src` - Files that should be compiled into your application. CSS/SCSS, TypeScript, Vue SFCs, and so on.
* `/public` - Static assets that should be served as files. Includes `index.html`, the root document of the application.
* `/tests` - Jest unit tests.
* `/wwwroot` - Target for compiled output.

As always with a Coalesce project, run `dotnet coalesce` to perform code generation.

During development, no special tooling is required to build your frontend code. `WebpackDevMiddleware` in ASP.NET Core will take care of that automatically when the application starts.

Upon publish, a target defined in the `.csproj` file of the web project will build all static resources for production.

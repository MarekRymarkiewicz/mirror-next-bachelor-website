// eslint-disable-next-line import/no-anonymous-default-export
export default function (plop) {
  plop.setGenerator("component", {
    description: "React component",
    prompts: [
      {
        type: "list",
        name: "destination",
        message: "What type of component is it?",
        choices: [
          { name: "Atom", value: "atoms" },
          { name: "Molecule", value: "molecules" },
          { name: "Organism", value: "organisms" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Enter component name:",
      },
      {
        type: "confirm",
        name: "variants",
        message: "Does it have variants?:",
      },
      {
        when(context) {
          return context.variants;
        },
        type: "confirm",
        name: "disable",
        message: "Can it have disabled state?:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{destination}}/{{name}}",
        templateFiles: "plop_templates/component/*.hbs",
        base: "plop_templates/component",
      },
    ],
  });
  plop.setGenerator("route", {
    description: "App route",
    prompts: [
      {
        type: "input",
        name: "route",
        message: "Enter the route URL:",
      },
      {
        type: "confirm",
        name: "page",
        message: "Include 'page.tsx'?:",
        abortOnFail: false,
      },
      {
        type: "confirm",
        name: "layout",
        message: "Include 'layout.tsx'?:",
        abortOnFail: false,
      },
      {
        type: "confirm",
        name: "loading",
        message: "Include 'loading.tsx'?:",
        abortOnFail: false,
      },
      {
        type: "confirm",
        name: "default",
        message: "Include 'default.tsx'?:",
        abortOnFail: false,
        default: false,
      },
    ],
    actions: function (data) {
      let actions = [];
      const route = data.route.replace(/^\/|\/$/g, "");
      const routeName = route.match(/([^\/|\@]+$)/g)[0];

      data.name = routeName[0].toUpperCase() + routeName.substr(1);

      if (data.page) {
        actions.push({
          type: "add",
          path: "src/app/{{route}}/page.tsx",
          templateFile: "plop_templates/route/page.tsx.hbs",
        });
      }
      if (data.layout) {
        actions.push({
          type: "add",
          path: "src/app/{{route}}/layout.tsx",
          templateFile: "plop_templates/route/layout.tsx.hbs",
        });
      }
      if (data.loading) {
        actions.push({
          type: "add",
          path: "src/app/{{route}}/loading.tsx",
          templateFile: "plop_templates/route/loading.tsx.hbs",
        });
      }
      if (data.default) {
        actions.push({
          type: "add",
          path: "src/app/{{route}}/default.tsx",
          templateFile: "plop_templates/route/default.tsx.hbs",
        });
      }

      return actions;
    },
  });
}

const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Blog API",
    description:
      "A Blog API that allows authors to publish posts and comment on other posts",
  },
  host: "blog-api-group-3.herokuapp.com",
  schemes: ["https"],
};

const outputFile = "./routes/swagger-output.json";
const endpointsFiles = ["./routes/index.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);

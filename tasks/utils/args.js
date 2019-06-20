import yargs from "yargs";

const args = yargs
  .option("production", {
    boolean: true,
    default: false,
    describe: "min all scripts"
  })
  .option("verbose", {
    boolean: true,
    default: false,
    describe: "log"
  })
  .option("watch", {
    boolean: true,
    default: false,
    describe: "watch all files"
  })
  .option("sourcemaps", {
    describe: "force the creation of sourcemaps"
  })
  .option("port", {
    string: true,
    default: 8888,
    describe: "server port"
  }).argv;
export default args;

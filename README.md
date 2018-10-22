# data2viz playground pages (documentation, examples, …)


This project has 2 types of sources: 

- Front: manage styles, and images of play.data2viz.io
- Back: provides the content of play.data2viz.io

The whole project is managed by gradle.

## back

- content: the markdown sources of play.
- resources: configuration files for ktor and logging.
- src: code for serving content (transformation from md to html)
- static: static content (css, images)


## front

Project use webpack and need nodeJs.

### Development mode

To render the site in development mode, run the npm script "dev" :

    cd front/ && npm run dev
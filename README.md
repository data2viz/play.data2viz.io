# play.data2viz.io

This project is deployed to **play.data2viz.io** to help 
developers understand the features of [data2viz library](https://github.com/data2viz/data2viz). 

The content of the pages is created using markdown. The pages are parsed and transformed
to html on the [Ktor server](https://ktor.io/). 

The markdown pages are under the `content/tutorials` directory.
The pages are sorted by they filename. This is why each file name must start with
two digits + `-`. The title of the page is retrieved from the first title of level 1.  

## How to launch it

Build the project from gradle `gradlew build` and then start Main.kt.


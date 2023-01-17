import {marked} from 'marked'
import fs from 'fs'

export const convert = (mdFilePath: string, htmlFilePath:string) => {    
        if (!fs.existsSync(mdFilePath)) {
            throw new Error(`The markdown file ${mdFilePath} does not exist`);
        }
        try {
            // read the markdown file
            let markdown = fs.readFileSync(mdFilePath, 'utf8');
            // convert markdown to html
            let html = marked(markdown);
            // save html file
            fs.writeFileSync(htmlFilePath, html);
        } catch (err) {
            throw new Error(`An error occurred while converting file: ${err}`);
        }
}

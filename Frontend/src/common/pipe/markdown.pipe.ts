import {Pipe, PipeTransform} from '@angular/core';
import * as MarkdownIt from 'markdown-it';
@Pipe({name: 'markdownIt'})
export class MarkdownItPipe implements PipeTransform {
    transform(value: string, args?: any): string {
        const md  = new MarkdownIt();
        if (typeof value !== 'string') {
            throw new Error ('Invalid pipe argument for MarkdownItPipe');
        }
        return md.render(value);
    }
}

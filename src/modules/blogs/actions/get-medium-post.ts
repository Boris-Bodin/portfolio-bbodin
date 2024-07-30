import Parser from 'rss-parser';
import {Article} from '@/modules/blogs/types/article';

export default async function getMediumPost(): Promise<Array<Article>> {
    try {
        const parser = new Parser();
        const feed = await parser.parseURL('https://medium.com/feed/@boris.bodin');
        return feed.items.map((item: any) => ({
            title: item.title || '',
            link: item.link || '',
            contentSnippet: item.contentSnippet || '',
            image: item.content.split('src="')[1].split('"')[0] || '',
            isoDate: item.isoDate || '',
        }));
    } catch (error) {
        throw {error: 'Failed to fetch Medium feed'};
    }
}

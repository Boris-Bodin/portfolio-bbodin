'use server';
import Parser from 'rss-parser';

export default async function getMediumPost() {
    const parser = new Parser();
    try {
        const feed = await parser.parseURL('https://medium.com/feed/@boris.bodin');
        return feed.items;
    } catch (error) {
        throw {error: 'Failed to fetch Medium feed'};
    }
}

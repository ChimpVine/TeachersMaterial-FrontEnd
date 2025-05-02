const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// 1. Create a stream
const sitemap = new SitemapStream({ hostname: 'https://ai.chimpvine.com/'});

// 2. Define your links
const links = [
    { url: '/', changefreq: 'monthly', priority: 1.0 },
    { url: '/about-us', changefreq: 'monthly', priority: 0.6 },
    { url: '/ai-directory', changefreq: 'monthly', priority: 0.9 },
    { url: '/about-quiz-generator', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-lesson-planner', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-social-story', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-group-work', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-vocabulary-builder', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-workbook-planner', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-teacher-joke', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-mystery-case', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-bingo-generator', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-text-summarizer', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-word-puzzle', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-worksheet-planner', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-tongue-twister', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-slide-generator', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-sel-generator', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-make-the-word', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-sat-maths', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-yt-summarizer', changefreq: 'monthly', priority: 0.8 },
    { url: '/about-fun-math', changefreq: 'monthly', priority: 0.8 },
];

// 3. Pipe sitemap stream to a write stream
const writeStream = createWriteStream('./dist/sitemap.xml');
sitemap.pipe(writeStream);

// 4. Write all links to the sitemap
links.forEach(link => sitemap.write(link));

// 5. End the stream after writing all links
sitemap.end();

// 6. Optionally wait for it to complete
streamToPromise(sitemap).then(sm => {
    console.log('Sitemap successfully generated!');
}).catch(err => {
    console.error('Error generating sitemap:', err);
});

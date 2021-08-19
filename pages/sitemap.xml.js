// import React from "react";
import fs from "fs";

const Sitemap = () => { };

const baseUrl = {
    development: "http://localhost:3000",
    production: "https://mydomain.com",
}[process.env.NODE_ENV];


const createSitemap = (urlList) =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urlList.map((url) => toUrl(url)).join("")}
    </urlset>`;

const toUrl = (route) =>
    `<url><loc>${route.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    </url>`;


export async function getServerSideProps({ res, req }) {
    const siteMapJson = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const urlList = await siteMapJson.json();
    const sitemap = createSitemap(urlList);

    const staticPages = fs
        .readdirSync({
            development: 'pages',
            production: './',
        }[process.env.NODE_ENV])
        .filter((staticPage) => {
            return ![
                "_app.js",
                "_document.js",
                "_error.js",
                "sitemap.xml.js",
            ].includes(staticPage);
        })
        .map((staticPagePath) => {
            return `${baseUrl}/${staticPagePath}`;
        });
    console.log(staticPages)
    
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return { props: { results: { urlList } } }
};

export default Sitemap;
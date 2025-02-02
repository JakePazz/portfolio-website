# Portfolio Website

My portfolio website, built in Svelte 5 with TypeScript and Tailwind CSS. Only slightly overengineered.

## Things to know

- Using the [hugeicons](https://hugeicons.com/) package for icons along with [devicon](https://devicon.dev/) to supplement for the skills showchasing
- Using [marked](https://github.com/markedjs/marked) to convert the markdown files (stored with Vercel Blob) into html

## Cloudinary Usage

Using [Cloudinary](https://cloudinary.com/) to store and retrieve images (and my cv). The images are stored within folders corresponding to their projects and the `folderName` provided within project's data. This also stores the `imageCount` which dictates how many index values within this folder the site attempts to retrieve.

Using the [svelte-cloudinary](https://svelte.cloudinary.dev/) package to load images.  
_**note**: svelte-cloudinary package currently outdated for Svelte 5_

## MongoDB Database

Data is stored within MongoDB Atlas so that it can be updated without redeploying/building the project. It contains the following collections within the `portfolio` database:

- experiences
- information
- projects
- skills

## .env

- **VITE_CLOUDINARY_CLOUD_NAME**: Retrieved from cloudinary dashboard and used by svelte-cloudinary to source images
- **MONGODB_URI**: Connection string for the MongoDB database
- **VERCEL_BLOB_BASE_URL**: Base URL for Vercel Blob storage that holds notes

## Future Additions

Things I want to add - at some point

- Full screen image viewing, particularly to help mobile users
- Improve how the Skills component handles hovering

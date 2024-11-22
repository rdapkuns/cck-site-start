# CCK

Congratulations, you are the founders of Creative Code Kortrijk, aka CCK. Now that the articles of association have been submitted, it is time for the website. You will make this a team effort. Off course, you will manage this using Git.

## Before you start

### Preparation

One student will create a new repository on GitHub. This student will then add the other students as collaborators. The other students will then clone the repository to their computer. It is a good idea to setup a hosting service like Netlify or Vercel to host the website. Link this to the main branch.

### Git branching strategy

- The main branch should always be deployable. You only will merge an update to this, if changes are tested and working.
- The `develop` branch is the main branch for development. You will create feature branches from this branch.
- Every student will create a feature branch for the part they are working on. This branch will be merged into the `develop` branch when the feature is finished.

### Deployment

You can use Netlify, Vercel or even [GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) to deploy the website. You can link the deployment to the main branch. This way, the website will be updated automatically when you merge changes to the main branch.

### Content collections

You will find out that the content comes form markdown files. Since we have different types of content, we will make use of Astros [content collections](https://docs.astro.build/en/guides/content-collections/)

Have a look at the `src/content/config.js` file. This file contains the configuration for the content collections. You can define which fields should exist in the markdown frontmatter. When fields are missing in the markdown file, the build will fail.

When using content collections, you don't need the `glob` approach anymore. You can simply use [getCollection](https://docs.astro.build/en/reference/modules/astro-content/#getcollection) to get the content.

### Slugs

A slug is a part of a URL which identifies a particular page on a website in a form readable by users. We will use these for the detail pages of the workshops, foundations and team members. You can [make a custom slug](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs) in the frontmatter of the markdown files when using colletions.

### ##PLACEHOLDERS##

We've added some placeholders in the code in a form of ##WHAT-SHOULD-BE-HERE##. These are meant to be replaced by the actual content.
You don't have to edit CSS or write any plain HTML. But you will have to write some logic in the provided files.

## Lets get started

Each of you will take care of a part of the website.

- Student 1: Workshops
- Student 2: Foundations
- Student 3: Team

Besides that, everyone shoud add one news item to the news collection.

### Workshops (Student 1)

- Create a feature branch named 'workshops' from the `develop` branch and work on this branch. When you are finished, merge this branch back into the `develop` branch.
- Add the `Workshops` component to the /index page
- List all the workshops in the `Workshops` component (See `Content collections` chapter above)
  - Make use of the `WorkshopCard` component to display the workshop data
- Show all the necessary data in the `WorkshopCard` component
- Provide the detail page, you can use the slug as an dynamic route parameter.
  - You can find a starterfile in resources/workshops/detailpage

### Foundations (Student 2)

- Create a feature branch named 'foundations' from the `develop` branch and work on this branch. When you are finished, merge this branch back into the `develop` branch.
- Add the `Foundations` component to the /index page
- List all the foundations in the `Foundations` component (See `Content collections` chapter above)
  - Make use of the `FoundationsCard` component to display the foundations data
- Show all the necessary data in the `FoundationsCard` component
- Provide the detail page, you can use the slug as an dynamic route parameter.
  - You can find a starterfile in resources/foundations/detailpage

### Team (Student 3)

- Create a feature branch named 'team' from the `develop` branch and work on this branch. When you are finished, merge this branch back into the `develop` branch.
- Feel free to change the contents of the markdown files to match the team members of your group
- Add the `Team` component to the /index page
- List all the foundations in the `Team` component (See `Content collections` chapter above)
  - Make use of the `TeamCard` component to display the foundations data
- Show all the necessary data in the `TeamCard` component
- Provide the detail page, you can use the slug as an dynamic route parameter.
  - You can find a starterfile in resources/foundations/detailpage

### News (All students, each one news item)

- You all can can work on the `develop` branch for this part.
- Everyone should add one news item to the news collection. (see resources/news)
- Decide on who will implement what:
  - Define the news collection in the `src/content/config.js` file (hint: look at the other collections and don't forget to export it)
  - The whole content of all the items are listed on the /news page
    - Find out how you can get the 'Content' (hint) of a markdown file on that page (this is something else than frontmatter data...)
  - Sort them descending by date
  - You can make use of .toDateString() or .toISOString() to format the date of the news item

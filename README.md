# EVE Online - Ore Lickers site

Ore Lickers is a corporation within the MMORPG EVE Online. This webapp shows information about our corporation, who we are, what we do and our services. We mainly focus on the Industry part within the game. The site itself is built on the framework called [Next.js](https://nextjs.org/).

## Requirements

There are a couple of tools required to get the project up and running:

1. An IDE, I personally recommend VSCode
2. Node
3. Git

## Getting Started

### Setup

To get the project on your local machine, use the command:

```
git clone git@github.com:SheepTheWeeb/eve-ore-lickers.git
```

After cloning the project, go to the root folder and create a copy of ".env.local.template" in the same folder. Rename this file to ".env.local" and fill in the environment variables.

Then you can install the dependencies by running:

```
npm install
```

### Running development server

First, run the development server:

```bash
npm run dev
```

After compiling you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build & Deploy

These commands are mostly for deployment, but if you want to build the application, run:

```
npm run build
```

After building the webapp, the compiled code is generated in the ".next" folder.

For running the build, run:

```
npm start
```

After starting the build you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment

For our webapp we have Continues Deployment (CD) in place. When merging changes to the "main" branch, these changes will be deployed on our website that is hosted on Vercel.

## More information

For more information on the webapp, please visit our [Wiki page](https://github.com/SheepTheWeeb/eve-ore-lickers/wiki)

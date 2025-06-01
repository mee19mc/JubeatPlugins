 # The Ultimate CORE PLUGINS
These plugins are highly experimental so it has a extremely high tendency to break.

## Plans
1. Import duel0213 iidx plugin for version support

- beatmaniaIIDX 14 GOLD - beatmania IIDX 32
- Add CO2-FDD support?
2. Upgrade GITADORA plugin for version support

- Existing: matixx - Fuzz-up
- TBA#1: RE-EVOLVE, Galaxy Wave (STUB)
- TBA#2: GITADORA - TRI-BOOST
- TBA#3: GFDM V5-V7 (merge existing server)
- TBA#4: GD XG/XG2+V8
- TBA#5: GD XG3 & V4

3. MERGE SDVX EG & DDR WORLD (22vv0)
- and codebase when possible...

4. MERGE jubeat codebase for J44-L44, outlined below.

- TBA#1: Merge festo trial?
- TBA#2: Merge Ave. and btAve.
- TBA#3: Add H44 & I44 support?

- side: Expand Game Datecodes for wide range of versions.

5. Upgrade pop'n music plugin for version support (everything to n-0)

## The Jubeat Plugin for Asphyxia CORE

This plugin (jubeat@asphyxia) is a compilation with game switch support, allowing various versions of J44, K44, and L44 to run. H44 and I44 are currently being considered, but are not of current priority.

## How to use it?

0. Make sure you have [Asphyxia CORE](https://asphyxia-core.github.io/) installed.
1. Go to [Releases](https://github.com/asphyxia-core/plugins/releases) page.
2. Download the latest source code.
3. Extract the code in Asphyxia CORE's `plugins` folder.

## How do I contribute?

I don't actually follow any coding rules for this jank so neither should you. There is, however, a prettier configuration if you want to format the code automatically and forget about it.

I'll do my best to merge PR, but please make sure you are submitting code targeted for "public" releases. (Unless it is some ancient rare stuff and you feel generous enough to provide support for it)

- For new plugins: please use `@asphyxia` identifier for your plugin since you are submitting code as the community.
  - This way we prevent third-party plugins (e.g. `popn` or `popn@someoneelse`) from conflicting with our database.
- For existing plugins: please inlude a changelog in your PR so it is easier for me to tell what it is for.

## How do I make plugins?

Checkout our [Documentation](https://asphyxia-core.github.io/typedoc/) and maybe consider join our [Discord](https://discord.gg/3TW3BDm) server. Make sure to familiar yourself with at least XML and Typescript/Javascript.

Note that you should run `npm install` to install typing for node and lodash, and launch CORE using `--dev` arguments to enable console log and typechecking when using typescript.

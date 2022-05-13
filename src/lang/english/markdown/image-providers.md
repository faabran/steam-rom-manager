# Image providers

Here you can select image providers that are used to retrieve images. This option is for this configuration only. Current image providers are:

* `SteamGridDB`{.noWrap}: The primary image provider for SRM. Pulls from the database of artwork at [steamgriddb](https://www.steamgriddb.com/). Maintained by `Zennn`. [API Docs](https://www.steamgriddb.com/api/v2).
* `SteamScraper`{.noWrap}: This image provider is a cached proxy of [screenscraper.fr](https://screenscraper.fr/). Queries are made using md5 hashes of the actual ROMs, ensuring that the correct images are found. [API Docs](https://repo.withertech.com/scraper/api/)

## Similar option in "Settings" menu

Settings menu has "Enabled providers" which enable image providers globally -- if it's not enabled in Settings, it won't work. 

## Image provider API options

This set of options are direct inputs into the APIs of image providers, for example SteamGridDB's [API](https://www.steamgriddb.com/api/v2). 

An interesting quirk of these settings is that re-generating the preview (hitting the `Generate App List` button) *will only add artwork*, not remove it. If one wants to apply a stronger set of filters and remove artwork, one has to hit the `Remove App List` button in preview before hitting `Generate App List`. The reason for this behavior is that it allows for *preferential* artwork selection. For example, one might first generate the preview with the blurred grid filter on and then re-generate it with the blurred grid filter off in order to achieve the effect of *preferring* blurred grids, but still allowing non-blurred grids in the case no blurred grid exists.

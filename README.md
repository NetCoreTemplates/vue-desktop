# vue-desktop

.NET 5.0 Vue Windows Desktop App Project Template.

This Project Template lets you create .NET Core Vue Single Page Apps that can also be packaged & 
deployed as [Gist Desktop Apps](https://sharpscript.net/sharp-apps/gist-desktop-apps) which is 
ideal for quickly & effortlessly creating & deploying small to medium .NET Core Windows Desktop Apps 
packaged within a Chromium Web Vue UI within minutes!

Create new project with [app dotnet tool](https://docs.servicestack.net/netcore-windows-desktop):

    $ dotnet tool install -g app
    $ app new vue-desktop ProjectName

> YouTube: [youtu.be/kRnQSWdqH6U](https://youtu.be/kRnQSWdqH6U)

[![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-screenshot.png)](https://youtu.be/kRnQSWdqH6U)

### Why Chromium Desktop Apps?

With the investment into advancing Web Browsers & Web technologies, many new modern Desktop Apps developed today like: 
Spotify, VS Code, GitHub Desktop, Skype, Slack, Discord, Whats App, Microsoft Teams, etc.
are being built using Web Technologies and rendered with a Chromium webview, using either the popular [Electron Framework](https://www.electronjs.org/) 
or the [Chromium Embedded Framework (CEF)](http://opensource.spotify.com/cefbuilds/index.html) directly.

Following [VS Code frequent releases](https://code.visualstudio.com/updates/) makes it clear why they've decided on 
developing it with Web Technologies using Electron where they've been able to iterate faster and ship new features at 
an unprecedented pace. In addition to its superior productivity, they're able to effortlessly support multiple Operating Systems
as well as enable reuse for running on the Web as done with its [Monaco Editor](https://microsoft.github.io/monaco-editor/)
powering VS Code as well as innovative online solutions like [GitHub Code Spaces](https://github.com/features/codespaces).

These attributes in addition to the amount of investment that major technology companies like Google, Apple, Microsoft & 
Firefox invest each year in improving Web & browser technologies will ensure the platform will be continually supported
& improved unlike most Desktop UI Technologies. 

## Comparison with Blazor WASM

What technology to use for Chromium Desktop Apps?

The latest solution for building Single Page Apps being promoted for .NET is https://blazor.net/ where for Client Apps
suggests to use Blazor WASM which in an overview lets you run C# in the browser by running linked/tree-shaken .dll's in 
[interpreted mode](https://blog.stevensanderson.com/2018/02/06/blazor-intro/#interpreted-mode) by the dotnet runtime 
which is itself compiled & running as WASM. We can see a glimpse of this in action by viewing .dll's being loaded in the 
JS Debug Inspector: 

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/blazor-jsdebug.png)

### Disadvantages of Blazor

The main value proposition of Blazor appears to be running C# in the browser, which while a technically impressive feat,
requires a tonne of complexity to achieve that results in worse end-user UX. It works using a development model based on 
Razor - a technology [we're not fond of](https://docs.servicestack.net/why-not-razor) due to its reliance on 
heavy/complicated tooling and should be noted that historically whenever .NET invented their own development model
for the Web in ASP.NET Web Forms or Silverlight, they've ended up being abandoned.

Another reason we're not fond of technologies like Blazor is from experience in having to support "crippled" .NET Runtimes 
on platforms where only a subset of functionality of .NET is available, where we've lost untold time & effort trying to 
diagnose & track down runtime issues in Windows Phone, Silverlight & Xamarin iOS due to platform restrictions
([we're already seeing](https://forums.servicestack.net/t/possible-to-allow-setting-of-usecookies-property-in-jsonhttpclient/8618) reported in Blazor), 
differing implementation behavior or .NET libraries heavy use of reflection that's problematic in AOT environments.

Even without the drawbacks, going against the momentum of established Web UI Technologies like [Vue](https://github.com/vuejs/vue) 
& [React](https://github.com/facebook/react), their vibrant communities & [awesome ecosystems](https://github.com/vuejs/awesome-vue)
in favor of an uncertain foreign development model reliant on heavy/complex tooling that only a single vendor can provide 
serving only a single language ecosystem just to be able to use C# in the browser isn't a desirable goal as modern JS/TypeScript 
offer a more productive & enjoyable Reactive UI development model than any C#/XAML UI Framework we've used.

Ultimately as [staunch enemy's of complexity](https://docs.servicestack.net/service-complexity-and-dto-roles) we're
philosophically against reliance on heavy complicated tooling and instead have adopted a Vue Chromium Desktop approach
for the development of [ServiceStack Studio](https://docs.servicestack.net/studio) - an App that 
[wouldn't have been feasible](https://docs.servicestack.net/releases/v5.9#highly-productive-live-reloading-development-experience)
if needing to use any C# & XAML UI FX or WinForms historically used to develop .NET Desktop Apps.  

### Blazor WASM Starting Project Template

But as it's the latest technology developed & promoted by .NET PR it's going to be the Web UI technology compared to most,
so this project template is based on the UI of an empty Blazor WASM project, rewritten to use Vue SPA UI & a back-end 
.NET Core App. It's an enhanced version that also includes examples of commonly useful features: 

  1. [Home page](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/components/Home.ts) includes example of using 
[TypeScript Service Reference](https://docs.servicestack.net/typescript-add-servicestack-reference) to consume typed APIs  
  2. [Fetch data page](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/components/FetchData.ts) sources it's
data from an embedded SQLite database querying an [AutoQuery Service](https://docs.servicestack.net/autoquery-rdbms)
  3. Utilizes [built-in SVG support](https://docs.servicestack.net/svg) for using Material Design & Custom SVG Icons 
  4. Utilizes [Win 32 Integration](https://sharpscript.net/sharp-apps/win32) showcasing how to call Win32 APIs from the UI

#### Distributed App Size

The first comparison is a direct result of the approaches used in each technology, where in addition to all your App's 
assets Blazor WASM has to also bundle a dotnet WASM runtime & linked/tree-shaken .dll's. Whilst `app` Desktop Apps
is on opposite side of the spectrum where it only requires distribution of **App-specific functionality** as all popular 
Vue JS libraries, Bootstrap CSS, Material Design SVG icons or ServiceStack .dll's used are pre-bundled with the global `app` dotnet tool.

For the comparison we ran the `publish-app` script & Blazor's **Publish to Folder** tool & compared the **.zip** of each folder which resulted in:

#### `15kb` Vue Desktop App vs `6207kb` Blazor WASM (413x smaller)

The end result that even our **enhanced** Blazor WASM starting project template is **413.8x** or **2.6x** orders of magnitude smaller than Blazor WASM.
A more apt comparison of its tiny footprint, is the enhanced Vue Desktop App is over **4x** smaller than
[Blazor WASM's 65kb partial screenshot of its App](https://docs.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-5.0): 

![](https://docs.microsoft.com/en-us/aspnet/core/blazor/index/_static/dialog.png?view=aspnetcore-5.0)

In addition, the `app` tool also bundles a Chromium Desktop App shell in order for your Vue Desktop Apps to appear like Native Desktop Apps, 
to get the same experience with Blazor WASM App you would also need to manage the installation of a Chromium wrapper like 
[Chromely](https://github.com/chromelyapps/Chromely). 

When App sizes are this small you have a lot more flexibility in how to distribute & manage the App, which is how Vue Desktop Apps
can be published to Gists and always download & open the latest released version - enabling **transparent updates by default**.  

#### Live Reload

A notable omission from a modern UI FX is there doesn't to be any kind of Live Reload capability for any page, including static **.html** or **.css** resources.

Vue Desktop Apps naive live reload feature works as you'd expect where the UI automatically refreshes on each file change, e.g:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-livereload.gif)

This is a good example of why we prefer to avoid complex tooling as what's normally a [trivially implementable feature](https://docs.servicestack.net/hot-reloading) 
requires much more effort & time to implement when you're reliant on a complex architecture & heavy tooling.

The only build tool required to enable Live Reload in Vue Desktop Apps is TypeScript's watch feature which monitors and automatically 
transpiles all `*.ts` file changes: 

    $ tsc -w

#### Reload Time

The lack of a live reload feature is exacerbated when having to manually reload your App to view every change which has
noticeable delay in Blazor WASM which is otherwise instant in a normal .NET Core Web App:

#### Blazor WASM
![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/blazorwasm-refresh.gif)

#### Vue Desktop
![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-refresh.gif)

### Opinionated App Launcher

The `app` dotnet tool is essentially just a .NET Core Desktop App launcher hosted within a Chromium Desktop Shell, 
whether it's launching our [app Desktop Apps](https://sharpscript.net/sharp-apps/) or existing 
[.NET Core Web App .dll or .exe's](https://docs.servicestack.net/netcore-windows-desktop#launch-net-core-app-inside-a-windows-chromium-desktop-app).

It's opinionated in the shared libraries it includes, namely:
 - Vue, React & jQuery
 - Bootstrap CSS
 - Material Design & Fontawesome SVG icons
 - [ServiceStack .NET Packages](https://www.nuget.org/profiles/servicestack) & Dependencies

> You can use your own client/server libraries but they'd need to be distributed with the App  

Intended for developing small/medium Desktop Apps that can be published to a GitHub Gist (or repo) & opened over a URL, e,g:
[Redis Admin UI](https://sharpscript.net/sharp-apps/redis), generic [DB Viewer](https://sharpscript.net/sharp-apps/sharpdata)
or our [ServiceStack Studio](https://docs.servicestack.net/studio) API Management tool which all package down to small footprints. 

Given you can [build & distribute an App within minutes](https://youtu.be/kRnQSWdqH6U), it's suitable for quick UI's around 
a single purpose Task you may want to distribute internally, e.g. a dynamic reporting viewer, edit forms, surveys, email composer, or
see the [Desktop App Index](https://sharpscript.net/sharp-apps/app-index) for other examples.

### FREE!

To remove friction & barriers to adoption all [app](https://docs.servicestack.net/netcore-windows-desktop) and 
[x](https://docs.servicestack.net/dotnet-tool) dotnet tools used to run all [Sharp and Gist Desktop Apps](https://sharpscript.net/sharp-apps/) 
utilize an unrestricted suite of [ServiceStack](https://servicestack.net) Software that can be developed & distributed free without a commercial license.

Should it be needed if exceeding [free-quotas](https://servicestack.net/download#free-quotas) (most [Sharp Apps](https://sharpscript.net/) don't) 
when developing locally as a .NET Core Web App (i.e. instead of running using the `app` tool), you can bypass any restrictions 
(from referencing ServiceStack's commercial NuGet packages) with a [Trial License Key](https://servicestack.net/trial).

#### Alternative Modern Desktop Solutions

We don't recommend this template for flagships Desktop App worked on by large teams, in that case you're better off building your own 
custom Chromium Desktop App bundle [as Spotify does](https://engineering.atspotify.com/2019/03/25/building-spotifys-new-web-player/) where
you're able to access full control over CEF APIs, it's rendering, integration and Chromium features.
If you're looking looking to Chromotize a .NET Core Desktop App you can use our [ServiceStack.CefGlue](https://github.com/ServiceStack/ServiceStack.CefGlue)
.NET Standard 2.0 NuGet package of the [CefGlue](https://gitlab.com/xiliumhq/chromiumembedded/cefglue) C# CEF Bindings project.

If you're not using .NET Core, [Electron](https://www.electronjs.org/) is the most likely best choice for building Desktop Apps with Web Technologies.  

If you'd also want to develop native iOS / Android Apps from a shared code-base then [Flutter Desktop](https://medium.com/flutter/flutter-and-desktop-3a0dd0f8353e)
is looking like the most promising technology under active development in that space.

## Overview of Gist Desktop Apps 

Whilst on the face of it [Gist Desktop Apps](https://sharpscript.net/sharp-apps/gist-desktop-apps) appear to be similar to 
Electron Apps that utilizes a .NET Core backend instead of Node.js, it employs a shared architecture where
all Apps are run with the same [app dotnet tool](https://docs.servicestack.net/netcore-windows-desktop) installable with:

    $ dotnet tool install -g app

Where it enables a number of unique features: 

### Ultra Lightweight Desktop Apps

Unlike Electron which bundles Chromium with every install, all [Sharp Desktop Apps](https://sharpscript.net/sharp-apps/) utilize the same 
[app dotnet tool](https://docs.servicestack.net/netcore-windows-desktop) which in addition to the 
latest version of Chromium, also includes many popular .NET server + client JS/CSS framework libraries - 
saving Vue Desktop Apps from having to include them. This effectively reducing their footprint to just App-specific Server + Client logic, 
so whilst a Hello World Electron App can require **>100MB**, this Vue Desktop Project Template bundles down 
to a **15kb .zip** - which includes the 14kb uncompressed .NET Server **.dll**. 

### Launch Desktop Apps from URLs

Thanks to their light footprint Desktop Apps can be launched directly from URLs using the `app://` URL Scheme, e.g.
a modified version of this Project Template can be launched from:

#### [app://vuedesktop](app://vuedesktop)

Which uses the unique [global alias your app was published with](https://sharpscript.net/sharp-apps/gist-desktop-apps#publishing-gist-apps). 

### Deep Links

It's also possible to pass additional params to enable deep links into Apps 
[ServiceStack Studio utilizes](https://docs.servicestack.net/studio#starting-servicestack-studio)
to be able download, run & immediately invoke App specific functionality like connecting to a remote site, e.g:

    app://studio?connect=https://localhost:5001

### Create customized Apps by mixing in Gists

Another unique feature of Gist Desktop Apps is being able to mix in multiple files into the App's directory to
create custom App builds, e.g. the [SharpData](https://sharpscript.net/sharp-apps/sharpdata) generic RDBMS UI viewer
utilizes this feature to copy & immediately open an embedded SQLite database for querying: 

 - [app://sharpdata?mix=northwind.sharpdata](app://sharpdata?mix=northwind.sharpdata)
 - [app://sharpdata?mix=chinook.sharpdata](app://sharpdata?mix=chinook.sharpdata)

### Launch from public or private GitHub Repos

If preferred Desktop Apps can also be published & launched directly from your GitHub Repo which can be launched with `app://{user}/{repo}`, e.g`:

- **[app://sharp-apps/redis](app://sharp-apps/redis)** - Redis Admin App 
- **[app://sharp-apps/blog](app://sharp-apps/blog)** - SQLite powered Blog App 
- **[app://sharp-apps/spirals](app://sharp-apps/spirals)** - SVG Spirals App
- **[app://sharp-apps/rockwind](app://sharp-apps/rockwind)** - Multi Layout CMS + DB Admin UI Example

> Can open by pasting above links in browsers URL as GitHub doesn't render links with custom URL Schemes

If your repo has published releases it will use your most recent release, otherwise it uses the master archive. 

### Private Repos & Gists

Apps can also be launched from private Gists and Repos by either having end users configure the GitHub Access Token
with access to the private gist or repo in the `GITHUB_TOKEN` Environment variable or can be specified in the URL
or command-line with: 

    app://user/repo?token={GITHUB_TOKEN}
    $ app open user/repo -token {GITHUB_TOKEN}

### Copy Directory

Another way to distribute & run Apps is to **XCOPY** the `/dist` folder which users can launch by running `app` command in 
the App's folder or by specifying the path to the app's `app.settings`, e.g: 

    $ app C:\path\to\app\app.settings

Where you can also [create a Windows Shortcut](https://docs.servicestack.net/netcore-windows-desktop#create-windows-desktop-shortcuts) 
for a more integrated Desktop App: 

    $ cd C:\path\to\app
    $ app shortcut

> Tip: Add `favicon.ico` to use your own icon in the shortcut 

### Cross Platform Support

Whilst the `app` dotnet tool is Windows-only, all Sharp Apps can also be run cross-platform on macOS/Linux with the 
[x dotnet tool](https://docs.servicestack.net/dotnet-tool) where it will open in the users preferred browser, e.g:

    $ x open vuedesktop 

### Always uses latest version

Thanks to their tiny footprints the default behavior is to always download & run the latest version of the App when 
published to a Gist or Repo which automatically happens when launching Apps using the `app://` URL Scheme or `app open` command.

If preferred you can save 1-3 seconds on an App's launch time by using the `app:` URL scheme or `app run` command where
it will instead load the previously downloaded version, e.g:

    app:vuedesktop
    $ app run vuedesktop

### Native Win32 API Interop

As [#Script](https://sharpscript.net/) is a scripting language utilizing JS syntax to invoke .NET APIs, the 
[Win 32 support](https://sharpscript.net/sharp-apps/win32) ends up being both simple & intuitive.

Where it calls the [CustomMethods.cs](https://github.com/NetCoreTemplates/vue-desktop/blob/master/CustomMethods.cs) .NET Win 32 APIs
(wrapped in a [#Script method](https://sharpscript.net/docs/methods)) directly from JS as done in 
[App.ts](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/App.ts) which can be invoked using JS syntax
using the `evaluateCode` TypeScript API, e.g:

```ts
import { evaluateCode } from '@servicestack/desktop';

await evaluateCode(`chooseColor()`);
await evaluateCode(`chooseColor('#336699')`);
```

The `app` dotnet tool already includes these [dotnet/pinvoke](https://github.com/dotnet/pinvoke) .NET Wrapper API NuGet packages
below so they can be used within your App without needing to distribute them with your App:

```xml
<PackageReference Include="PInvoke.AdvApi32" Version="0.6.49" />
<PackageReference Include="PInvoke.BCrypt" Version="0.6.49" />
<PackageReference Include="PInvoke.Crypt32" Version="0.6.49" />
<PackageReference Include="PInvoke.DwmApi" Version="0.6.49" />
<PackageReference Include="PInvoke.Gdi32" Version="0.6.49" />
<PackageReference Include="PInvoke.Hid" Version="0.6.49" />
<PackageReference Include="PInvoke.Kernel32" Version="0.6.49" />
<PackageReference Include="PInvoke.Magnification" Version="0.6.49" />
<PackageReference Include="PInvoke.MSCorEE" Version="0.6.49" />
<PackageReference Include="PInvoke.Msi" Version="0.6.49" />
<PackageReference Include="PInvoke.Fusion" Version="0.6.49" />
<PackageReference Include="PInvoke.NCrypt" Version="0.6.49" />
<PackageReference Include="PInvoke.NetApi32" Version="0.6.49" />
<PackageReference Include="PInvoke.NTDll" Version="0.6.49" />
<PackageReference Include="PInvoke.Psapi" Version="0.6.49" />
<PackageReference Include="PInvoke.SetupApi" Version="0.6.49" />
<PackageReference Include="PInvoke.Shell32" Version="0.6.49" />
<PackageReference Include="PInvoke.SHCore" Version="0.6.49" />
<PackageReference Include="PInvoke.User32" Version="0.6.49" />
<PackageReference Include="PInvoke.Userenv" Version="0.6.49" />
<PackageReference Include="PInvoke.UxTheme" Version="0.6.49" />
<PackageReference Include="PInvoke.WtsApi32" Version="0.6.49" />
```

See [Win32 App](https://sharpscript.net/sharp-apps/win32) for more info & examples on Win32 integration.

## Desktop or Server Deployments

Whilst this project template is intended for creating Desktop Apps, it's essentially just a .NET Core Web App wrapped 
in a shared Chromium Desktop Shell which means it can also be deployed the same as any other .NET Core Web App by
generating a published build:

    $ dotnet publish -c Release

Then [copying the published release builds for Server deployments](https://docs.servicestack.net/netcore-deploy-rsync).

### Development Model

To avoid needing to use webpack, npm or any other build tooling, Vue components are written in TypeScript
[Class-Style Vue Components](https://vuejs.org/v2/guide/typescript.html#Class-Style-Vue-Components)
utilizing annotations in [vue-class-component](https://github.com/vuejs/vue-class-component) & 
[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator), e.g. here's Blazor WASM Counter Page:

```razor
@page "/counter"

<h1>Counter</h1>

<p>Current count: @currentCount</p>

<button class="btn btn-primary" @onclick="IncrementCount">Click me</button>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}
```

Written as a TypeScript Class-Style Vue Component:

```ts
@Component({ template:`
<div>
    <h1>Counter</h1>
    
    <p>Current count: {{currentCount}}</p>
    
    <button class="btn btn-primary" @click="incrementCount()">Click me</button>
</div>`})
export class Counter extends Vue {
    currentCount = 0;

    incrementCount() {
        this.currentCount++;
    }
}
```

> Vue's integration with TypeScript is set to improve in Vue 3 which will be written in TypeScript  

### Typed DTOs

The typing benefits of C# is also available when using TypeScript with 
[type definitions](https://github.com/NetCoreTemplates/vue-desktop/tree/master/typings) available for all libraries
which provides rich intelli-sense & type checking during development. 

Thanks to ServiceStack's [Add TypeScript Reference](https://docs.servicestack.net/typescript-add-servicestack-reference)
feature, Types are also available for your C# Services which can be updated by running 
[npm run dtos](https://github.com/NetCoreTemplates/vue-desktop/blob/master/package.json#L4) or `app ts` directly, e.g: 

    $ app ts

Which will update all [dtos.ts](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/shared/dtos.ts) TypeScript
Reference DTOs with the latest changes which can be used together with the [@servicestack/client](https://github.com/ServiceStack/servicestack-client)
generic Service Client to provide both a terse & typed API for consuming back-end end-to-end Typed C# APIs: 

```ts
import { Hello } from "../shared/dtos";
import { client } from "../shared";

@Component({ template:`
<div>
    <h1>Hello, world!</h1>
    Welcome to your new app.
    
    <div class="row mt-4 p-0">
        <div class="col col-3">
            <v-input placeholder="Your name" v-model="txtName" />
        </div>
        <h3 class="col col-5 result mt-2">{{ result }}</h3>
    </div>
</div>`})
export class Home extends Vue {
    public txtName: string = '';
    public result: string = '';

    @Watch('txtName')
    async onNameChanged(value: string, oldValue: string) {
        await this.nameChanged(value);
    }

    async nameChanged(name: string) {
        if (name) {
            const r = await client.get(new Hello({ name }));
            this.result = r.result;
        } else {
            this.result = '';
        }
    }
}
```

### AutoQuery Services

Another major productivity boost for rapidly developing data-driven APIs is [AutoQuery RDBMS](https://docs.servicestack.net/autoquery-rdbms)
where you can simply **create queryable APIs by just declaratively defining** which fields you want to query using any of the 
[registered conventions](https://docs.servicestack.net/autoquery-rdbms#implicit-conventions), e.g:

```csharp
[Route("/forecasts")]
[Route("/forecasts/{Id}")]
public class QueryWeatherForecasts : QueryDb<WeatherForecast>
{
    public int? Id { get; set; }
    public DateTime? BeforeDate { get; set; }
    public DateTime? AfterDate { get; set; }
    public int? BelowTemperatureC { get; set; }
    public int? AboveTemperatureC { get; set; }
}

public class WeatherForecast
{
    [AutoIncrement]
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public int TemperatureC { get; set; }
    public string Summary { get; set; }
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
```

Which is all that's required for ServiceStack to automatically implement the Service where it has access to all standard Typed API metadata services 
like being included in the generated TypeScript client DTOs: 

    $ npm run dtos 

Which [FetchData.ts](https://github.com/NetCoreTemplates/vue-desktop/blob/master/src/components/FetchData.ts) uses to power its 
dynamic Queryable UI by sending a populated `QueryWeatherForecasts` Request DTO configured with any filters and re-executed 
on every input change:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-fetchdata.png)

```html
<form class="form-inline mb-2" @submit.prevent="">
    <label for="txtId">Filters: </label>
    <input class="form-control form-control-sm mx-1" type="number" placeholder="[Id]" v-model="id" @input="filter"> 
    <input type="date" v-model="afterDate" @change="filter">
    <input type="date" v-model="beforeDate" @change="filter">
    <input class="form-control form-control-sm mx-1" type="number" placeholder="Above (C)" v-model="aboveTemp" @input="filter">
    <input class="form-control form-control-sm mr-1" type="number" placeholder="Below (C)" v-model="belowTemp" @input="filter"> 
    <button class="btn btn-secondary btn-sm" @click="reset">reset</button>
</form>
```

Triggering a call to `filter()` to populate and resend the `QueryWeatherForecasts` Request DTO with the latest filters and update the `forecasts` Reactive UI Model: 

```ts
export class FetchData extends Vue {
    forecasts:WeatherForecast[]|null = null;

    id = '';
    beforeDate = '';
    afterDate = '';
    belowTemp = '';
    aboveTemp = '';

    async filter() {
        const request = new QueryWeatherForecasts();
        if (this.id) request.id = parseInt(this.id);
        if (this.beforeDate) request.beforeDate = this.beforeDate;
        if (this.afterDate) request.afterDate = this.afterDate;
        if (this.belowTemp) request.belowTemperatureC = parseInt(this.belowTemp);
        if (this.aboveTemp) request.aboveTemperatureC = parseInt(this.aboveTemp);
        this.forecasts = (await client.get(request)).results;
    }
}
```

### Publishing Desktop Apps

The lightweight footprint of Vue Desktop Apps allows for multiple deployment options, including:

  1. Publish to a Gist
  2. Publish to a GitHub Repo
  3. Publish to .zip and run with `app` tool
  4. Publish to self-contained .zip (bundled with app tool)

Our recommendation is to publish Sharp Desktop Apps to Gists (as done with [ServiceStack Studio](https://docs.servicestack.net/studio)) so they can be launched with the Custom URL Scheme:

    app://vuedesktop

Where it can be launched from a HTML `<a/>` link in a web page, directly in any **browsers URL bar** or **File Explorer**.

Desktop Apps published to GitHub repos can be opened using `<user>/<repo>`, e.g:

    app://mythz/vuedesktop

Where it downloads & extracts the latest Release `.zip` archive (or master if none), before running the app, so can take a little longer to launch for small Apps.

All apps run the latest version by default so it's always up-to-date, but you can speed up App launch times by running the last installed app using the `app:` Custom URL Scheme:

    app:vuedesktop

For Gist deployed Apps, it will run the last downloaded app or download & run the latest App gist if it's the first time it's run.

For GitHub repo Apps, you can download and install them locally with:

    $ app install mythz/vuedesktop

Where the downloaded version can be **run** using its `<repo>` name, e.g:

    app:vuedesktop

Both Gist and Desktop Apps can be uninstalled using `app uninstall`, e.g:

    $ app uninstall vuedesktop

To view all installed Sharp Apps, run:

    $ app uninstall

#### Creating Windows Shortcuts

The `app:` URL Scheme is a convenient way to launch Apps if you already have a **Browser** or Windows **File Explorer** already open where you can quickly launch Apps by typing `CTRL+L` shortcut to go to the Command Bar then type  `app://<name>` to launch your App.

Although many users will prefer the familiar Windows Shortcut which they can create by going to the App's folder and running `app shortcut`

    $ cd %USERPROFILE%\.sharp-apps\vuedesktop
    $ app shortcut

This will create a Windows Shortcut for the App which can be copied to the Desktop or pinned to the Taskbar for easy access.

### Publishing Gist Apps

Publishing your App to a gist is our preferred option as you can use GitHub to host your App, built-in auto-updates with every each launch and if you publish to the Global App Registry users can download & install your App with a unique UX-friendly name like `app://vuedesktop`.

To create gists you'll need to generate a [GitHub Access Token](https://github.com/settings/tokens/new) with **gist** scope and add it to your `GITHUB_TOKEN` Environment Variable ([win](https://superuser.com/questions/949560/how-do-i-set-system-environment-variables-in-windows-10), [mac](https://apple.stackexchange.com/q/356441/12255), [linux](https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-linux)). _(alternative: use `-token` arg in each publish command)_

Before publishing your App, its **app.settings** looks something like:

    debug true
    name vuedesktop
    CefConfig { width:1100, height:900 }

#### Publish to the Global App Registry

To maximize reach and accessibility of your App you can publish it to our [Global App Registry](https://gist.github.com/gistlyn/802daba52b6fe6e2ed1430348dc596cb) by including the following metadata about your App:

    appName     <app alias>    # required: alpha-numeric snake-case characters only, 30 chars max
    description <app summary>  # required: 20-150 chars
    tags        <app tags>     # optional: space delimited, alpha-numeric snake-case, 3 tags max

The `appName` is the globally unique short alias you want your App to be launched as, e.g:

    app://my-alias
    $ app open my-alias

If your app.settings contains the app metadata above, publishing the app will publish your App to a Gist & register your App's alias to the Global App Directory.

Now you can build, bundle and publish your App to a gist with its `publish-app` npm script:

    $ npm run publish-app

That returns the gist URL your app was published to:

    published to: https://gist.github.com/gistlyn/48b2dcf9bccacab62ec9d8a073d5edb8

Which can now be opened via an [URL scheme](https://sharpscript.net/sharp-apps/app-index#app-url-schemes): 

<h4><a href="app://48b2dcf9bccacab62ec9d8a073d5edb8">app://48b2dcf9bccacab62ec9d8a073d5edb8</a></h4>

Or via the command line:

    $ app open 48b2dcf9bccacab62ec9d8a073d5edb8

When your App is published the first time, the created gist URL will be saved in a local `.publish` text file & used for subsequent App publishes.

#### Local Aliases

If the Gist App isn't published to the Global Registry, users can create their own UX-friendly local alias with:

    $ app alias my-alias 48b2dcf9bccacab62ec9d8a073d5edb8

Where they'll be able to use their alias instead of the Gist Id:

    app://my-alias
    $ app open my-alias

### Publishing to a GitHub Repo

The same `/dist` folder that's published to Gists can also be published to a GitHub Repo like [github.com/mythz/vuedesktop](https://github.com/mythz/vuedesktop) which can be launched with the `<user>/<repo>` URL Scheme, e.g:

### [app://mythz/vuedesktop](app://mythz/vuedesktop)

> Need to copy + paste URL in browser as GitHub markdown doesn't allow custom URL links

Or launched from the command-line:

    $ app open mythz/vuedesktop

Users can also download and run a local copy launched with a Windows Shortcut with this 1-liner:

    $ app download mythz/vuedesktop && cd vuedesktop && app shortcut

This will download this repo and create a **Vue Desktop** Windows Shortcut you can use to launch this App:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-dist.png)

### Publish to .zip

The `/dist` folder can also be zipped and distributed that way, by running:

    $ npm run publish-zip

In which case it can be extracted and launched by running the `app` command in the App's folder:

    $ cd AppDir
    $ app

But if you're going to run from a local folder (where `app://` isn't available), you'll likely want to create a Windows Shortcut:

    $ app shortcut

That Users can copy to their Desktop or pin to their Taskbar for easy access.

### Publishing self-encapsulated .zip

By having the `app` tool installed, users benefit from ultra small (e.g. **15kb**) downloads whose tiny footprints allows for auto-updating with each App launch so they have access to new features as soon as they're available. Users will also be able to update to the Chromium version used to run all their Sharp Desktop Apps by updating the `app` tool:

    $ dotnet tool update -g app

But if preferred, App's can also bundled and distributed with the `app` tool so they can be run without needing the `app` tool installed and distributed Apps are pinned to a specific Chromium version.

You can create self-encapsulated bundles with the `publish-exe` script:

    $ npm run publish-exe

This will generate 2 files:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-publish-exe.png)

The `*.zip` contains both the `/dist` of your App and the `app` Chromium runtime as well as a convenience [install.ps1](https://github.com/NetCoreTemplates/vue-desktop/blob/master/scripts/install.ps1) script that users can use to effortlessly install the App with the `Win+R` shortcut to bring up Windows **Run** dialog then pasting this powershell cmd-let with the URL of your `install.ps1` script:

    powershell Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://org.example/install.ps1'))

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/app/vue-desktop/vuedesktop-run-install.png)

Here's a copy of `install.ps1` which downloads and extracts the App to the Users LocalApp Data and copies the Shortcut to the Desktop.
Before publishing you'll need to update `$zipUrl` to point to the URL with your `*.zip`:

```ps1
$zipUrl  = "https://org.example/MyApp.zip"
$appName = "MyApp"

$TempFile = New-TemporaryFile
Invoke-WebRequest $zipUrl -OutFile $TempFile

$Zip = "$(Join-Path $TempFile.Directory.FullName $TempFile.BaseName).zip"
Move-Item $TempFile $Zip

Remove-Item $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) -Recurse -ErrorAction Ignore
Expand-Archive -Force $Zip $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName)

$AppDir = $(Get-ChildItem -Path $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) | Select-Object -First 1)

Remove-Item "$env:LOCALAPPDATA\$appName" -Recurse -ErrorAction Ignore
Move-Item $AppDir.FullName "$env:LOCALAPPDATA\$appName"

# Copy Shortcut to Desktop
Copy-Item $env:LOCALAPPDATA\$appName\dist\*.lnk -Destination $env:USERPROFILE\Desktop 

# Clean up
Remove-Item $Zip -Recurse -ErrorAction Ignore
Remove-Item $(Join-Path $TempFile.Directory.FullName $TempFile.BaseName) -Recurse -ErrorAction Ignore
```

Here's an example of an app we have published to our servers:

    powershell Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://files.sharpscript.net/VueDesktop/install.ps1'))


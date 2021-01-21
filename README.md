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


# [vuedesktop.com](https://www.vuedesktop.com)

### Vue Desktop Apps

- [Why Chromium Desktop Apps?](https://www.vuedesktop.com/#why-chromium-desktop-apps)
- [Comparison with Blazor WASM](https://www.vuedesktop.com/#comparison-with-blazor-wasm)
- [Disadvantages of Blazor](https://www.vuedesktop.com/#disadvantages-of-blazor)
- [Blazor WASM Starting Project Template](#blazor-wasm-starting-project-template)
- [Distributed App Size](https://www.vuedesktop.com/#distributed-app-size)
- [Live Reload](https://www.vuedesktop.com/#live-reload)
- [Reload Time](https://www.vuedesktop.com/#reload-time)
- [Alternative Desktop Solutions](https://www.vuedesktop.com/#alternative-modern-desktop-solutions)
- [Desktop or Server Apps](https://www.vuedesktop.com/#desktop-or-server-deployments)

### Gist Desktop Apps

- [Overview](https://www.vuedesktop.com/gist-desktop-apps)
- [Ultra Lightweight](https://www.vuedesktop.com/gist-desktop-apps#ultra-lightweight-desktop-apps)
- [Launch from URLs](https://www.vuedesktop.com/gist-desktop-apps#launch-desktop-apps-from-urls)
- [Deep Links](https://www.vuedesktop.com/gist-desktop-apps#deep-links)
- [Customize Apps with Gists](https://www.vuedesktop.com/gist-desktop-apps#create-customized-apps-by-mixing-in-gists)
- [Launch from public or private GitHub Repos](https://www.vuedesktop.com/gist-desktop-apps#launch-from-public-or-private-github-repos)
- [Copy Directory](https://www.vuedesktop.com/gist-desktop-apps#copy-directory)
- [Cross Platform Support](https://www.vuedesktop.com/gist-desktop-apps#cross-platform-support)
- [Always uses latest version](https://www.vuedesktop.com/gist-desktop-apps#always-uses-latest-version)

### Development Model

- [Overview](https://www.vuedesktop.com/development-model)
- [Typed DTOs](https://www.vuedesktop.com/development-model#typed-dtos)
- [AutoQuery Services](https://www.vuedesktop.com/development-model#autoquery-services)

### Native Win32 API Interop

- [Overview](https://www.vuedesktop.com/native-win32-interop)

### Publishing Desktop Apps

- [Overview](https://www.vuedesktop.com/publishing-desktop-apps)
- [Creating Windows Shortcuts](https://www.vuedesktop.com/publishing-desktop-apps#creating-windows-shortcuts)
- [Publishing Gist Apps](https://www.vuedesktop.com/publishing-desktop-apps#publishing-gist-apps)
- [Publish to the Global App Registry](https://www.vuedesktop.com/publishing-desktop-apps#publish-to-the-global-app-registry)
- [Local Aliases](https://www.vuedesktop.com/publishing-desktop-apps#local-aliases)
- [Publishing to a GitHub Repo](https://www.vuedesktop.com/publishing-desktop-apps#publishing-to-a-github-repo)
- [Publish to .zip](https://www.vuedesktop.com/publishing-desktop-apps#publish-to-zip)
- [Publishing self-encapsulated .zip](https://www.vuedesktop.com/publishing-desktop-apps#publishing-self-encapsulated-zip)

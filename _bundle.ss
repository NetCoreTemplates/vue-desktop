```code
* run in .csproj AfterPublish, manual usage: `x run _bundle.ss -to <path>` *

[ 'content:/src/css/' ] |> bundleCss({ minify:true, disk:true, out:`content:${to}/bundle.css` })

{{ [
    'content:/src/components/',
    'content:/src/shared/',
    'content:/src/',
] |> bundleJs({ minify:true, disk:true, out:`content:${to}/bundle.js`, iife:true }) }}
```

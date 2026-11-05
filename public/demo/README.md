# Mirror Demo Delivery Package

This folder is a self-contained static build of the Mirror interactive demo.

## Use in the portfolio project

Copy the contents of this folder into the portfolio project's static directory:

```text
public/demo/
```

The demo should then be available at:

```text
/demo/
```

Load that URL inside the portfolio overlay with an iframe. Do not change the
relative structure under `assets/`.

## Included files

- `index.html`
- `app.js`
- `style.css`
- `motion.js`
- `assets/` with only the assets referenced by the current demo

The package has been made self-contained so it does not depend on the original
workspace-level `assets/` or font folders.

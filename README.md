# Uni-VLaT project website

Public project website for **Uni-VLaT: Whole-Body Tactile Adaptation of VLA Policies for Humanoid Loco-Manipulation**.

Website: https://ggkiller-air.github.io/Uni-VLaT/

The site is plain HTML, CSS, and JavaScript. Figures, videos, and fonts are served locally. There are no analytics or external embeds. The paper and code buttons currently say “coming soon”; replace them with the official links when those releases are ready.

## Publish with GitHub Pages

In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select the `main` branch and `/(root)` folder. No build step is needed. The included `.nojekyll` file keeps the static files unchanged.

## Content

The website includes the ICRA 2027 demo video, four individual task videos, a Composed Cleanup still image, the main five-task evaluation, contact-response analysis, cross-policy evaluation, and predictive-context ablations. Main Isaac-GR00T configurations use 20 rollouts. The cross-policy π0.5 configurations and non-full ablations use 10 rollouts; Full Uni-VLaT reuses the main evaluation. DP has no measured success rate because deployment constraints rejected its outputs before execution.

## Local preview

Run `python -m http.server 8000` in this directory and open `http://localhost:8000/`. Figures can be enlarged with mouse or keyboard; Escape closes the viewer. Tables scroll horizontally on narrow screens.

Layout reference: [VideoMimic](https://www.videomimic.net/). Independently authored implementation. Self-hosted fonts retain their accompanying OFL licenses.

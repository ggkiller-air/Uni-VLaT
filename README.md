# Uni-VLaT project website

Public project website for **Uni-VLaT: Whole-Body Tactile Adaptation of VLA Policies for Humanoid Loco-Manipulation**.

Website: https://ggkiller-air.github.io/Uni-VLaT/

The site is plain HTML, CSS, and JavaScript. Figures, videos, and fonts are served locally. There are no analytics or external embeds. Paper, arXiv, and Code currently say “coming soon”; replace them and update the preliminary BibTeX when the official releases are ready.

## Publish with GitHub Pages

In the repository's **Settings → Pages**, choose **Deploy from a branch**, then select the `main` branch and `/(root)` folder. No build step is needed. The included `.nojekyll` file keeps the static files unchanged.

## Content

The website includes a four-task highlight reel and task clips exported from `demo.pptx`, a separate Composed Cleanup clip, contact-response and cross-policy rollouts, the main five-task evaluation, and predictive-context ablations. Main Isaac-GR00T configurations use 20 rollouts. The cross-policy π0.5 configurations and non-full ablations use 10 rollouts; Full Uni-VLaT reuses the main evaluation. DP has no measured success rate because deployment constraints rejected its outputs before execution.

## Local preview

Run `python -m http.server 8000` in this directory and open `http://localhost:8000/`. Figures can be enlarged with mouse or keyboard; Escape closes the viewer.

Visual inspiration: [T-Rex](https://tactile-reactive-dexterous.github.io/). The site uses a task rollout in the hero and self-hosted Source Serif 4 and JetBrains Mono. Their OFL licenses are in `assets/fonts/`.

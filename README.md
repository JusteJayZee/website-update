# website-update

Website update project.

## Design skill

This repo ships the [taste-skill](https://github.com/Leonxlnx/taste-skill) (`design-taste-frontend`, MIT) in `.claude/skills/design-taste-frontend/`, vendored from upstream commit `12af471`. Claude Code loads it automatically for any session on this repo — local or cloud, no install step.

Ask for frontend work as usual ("redesign the homepage", "build a landing page for …"), or name the skill explicitly. It needs Node 22+ and Chrome/Edge/Chromium, and network access to find images.

To update it, copy `skills/taste-skill/` from a newer upstream checkout over `.claude/skills/design-taste-frontend/`.
